import fs from 'fs';
import path from 'path';
import {
  BUILD_DIR,
  PUBLIC_DIR,
  SITE_URL,
  escapeHtml,
  getCanonicalUrl,
  getRouteDefinitions,
  routeToFilePath,
} from './seo-config.js';

/**
 * Static prerender — CSR-friendly HTML generator.
 *
 * Why this exists (instead of Puppeteer SSR with React-rendered content):
 *
 * Chrome's auto-translator wraps text nodes in <font> elements. If the
 * prerendered HTML has React-rendered content, Chrome's translation
 * interferes with React's reconciliator → NotFoundError on removeChild
 * → blank screen. Ayrton explicitly does NOT want a fallback UI for this
 * case, so we cannot mask the bug; we have to remove its root cause.
 *
 * Solution: produce static HTML that contains ONLY the SEO <head>
 * (canonical URL, OG tags, JSON-LD) and an EMPTY <div id="root">. React
 * mounts client-side on a guaranteed-clean DOM. Chrome's translator
 * can then mutate freely without conflicting with any pre-existing
 * hydration markers.
 *
 * SEO impact: minimal — Googlebot executes JavaScript and reads the
 * rendered content; users see a slightly slower FCP but get a working
 * site regardless of translation.
 */

const INDEXABLE_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const NOINDEX_ROBOTS = 'noindex, follow';

const stripSeoTags = (headContent) =>
  headContent
    .replace(/<title[\s\S]*?<\/title>\s*/gi, '')
    .replace(/<meta[^>]+charset=["'][^"']+["'][^>]*>\s*/gi, '')
    .replace(/<meta[^>]+name=["'](?:description|robots|googlebot|author|keywords|twitter:[^"']+)["'][^>]*>\s*/gi, '')
    .replace(/<meta[^>]+property=["']og:[^"']+["'][^>]*>\s*/gi, '')
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>\s*/gi, '')
    .replace(/<link[^>]+rel=["']alternate["'][^>]*>\s*/gi, '')
    .replace(/<script[^>]*type=["']application\/ld\+json["'][\s\S]*?<\/script>\s*/gi, '')
    .trim();

const loadBuildTemplate = () => {
  const indexPath = path.join(BUILD_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error('No se encontro dist/index.html. Ejecuta primero `vite build`.');
  }

  const templateHtml = fs.readFileSync(indexPath, 'utf-8');
  const headMatch = templateHtml.match(/<head>([\s\S]*?)<\/head>/i);
  const bodyMatch = templateHtml.match(/<body>([\s\S]*?)<\/body>/i);

  if (!headMatch || !bodyMatch) {
    throw new Error('No se pudo extraer la plantilla base de dist/index.html.');
  }

  // Incluir <script> y <noscript> del body original — algunos píxeles de
  // marketing (Facebook, LinkedIn, etc.) requieren el fallback <noscript>
  // para usuarios sin JS, y debe estar en las 170 rutas prerenderizadas.
  const bodyTags = bodyMatch[1].match(/<(script|noscript)\b[\s\S]*?<\/\1>/gi) || [];

  return {
    commonHeadTags: stripSeoTags(headMatch[1]),
    bodyScripts: bodyTags.join('\n'),
  };
};

const buildRouteHtml = (routeDefinition, templateData) => {
  const canonicalUrl = getCanonicalUrl(routeDefinition.route);
  const robots = routeDefinition.noindex ? NOINDEX_ROBOTS : INDEXABLE_ROBOTS;
  const ogType = routeDefinition.route.startsWith('/blog/') ? 'article' : 'website';
  const schemaJson = routeDefinition.schema
    ? JSON.stringify(routeDefinition.schema).replace(/</g, '\\u003c')
    : null;

  return `<!doctype html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <title>${escapeHtml(routeDefinition.title)}</title>
    <meta name="description" content="${escapeHtml(routeDefinition.description)}" />
    <meta name="keywords" content="${escapeHtml(routeDefinition.keywords || 'strona internetowa, SEO, CMS, mała firma, projekt strony, pozycjonowanie')}" />
    <meta name="robots" content="${robots}" />
    <meta name="googlebot" content="${robots}" />
    <meta name="author" content="SEO Grow" />
    <meta name="theme-color" content="#4F46E5" />
    <meta name="format-detection" content="telephone=yes" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="pl" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:title" content="${escapeHtml(routeDefinition.title)}" />
    <meta property="og:description" content="${escapeHtml(routeDefinition.description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="SEO Grow" />
    <meta property="og:locale" content="pl_PL" />
    <meta property="og:image" content="${SITE_URL}/og-image.webp" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="SEO Grow — Strona internetowa dla firmy, gotowa w 5 dni" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(routeDefinition.title)}" />
    <meta name="twitter:description" content="${escapeHtml(routeDefinition.description)}" />
    <meta name="twitter:image" content="${SITE_URL}/og-image.webp" />
    <meta name="twitter:image:alt" content="SEO Grow — Strona internetowa dla firmy, gotowa w 5 dni" />
    ${schemaJson ? `<script type="application/ld+json">${schemaJson}</script>` : ''}
    ${templateData.commonHeadTags}
  </head>
  <body>
    <div id="root"></div>
    ${templateData.bodyScripts}
  </body>
</html>
`;
};

const writeRouteHtml = (routeDefinition, html) => {
  const filePath = routeToFilePath(routeDefinition.route);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html);
  return filePath;
};

const generateSitemap = (routeDefinitions) => {
  console.log('🗺️ Generating sitemap.xml...');
  const today = new Date().toISOString().split('T')[0];
  const indexableRoutes = routeDefinitions.filter((routeDefinition) => routeDefinition.includeInSitemap);
  const latestIndexableUpdate = [...indexableRoutes]
    .map((routeDefinition) => routeDefinition.lastmod)
    .filter(Boolean)
    .sort()
    .at(-1) || today;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${indexableRoutes
  .map((routeDefinition) => {
    const loc = getCanonicalUrl(routeDefinition.route);
    const lastmod = routeDefinition.lastmod || latestIndexableUpdate;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${routeDefinition.changefreq}</changefreq>
    <priority>${routeDefinition.priority}</priority>
    <xhtml:link rel="alternate" hreflang="pl" href="${loc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />
  </url>`;
  })
  .join('\n')}
</urlset>
`;

  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemapXml);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml);
  console.log(`✅ sitemap.xml generated with ${indexableRoutes.length} URLs`);
};

function prerender() {
  const routeDefinitions = getRouteDefinitions();
  const templateData = loadBuildTemplate();

  console.log('🚀 Generating static SEO HTML for all routes (CSR mode — root body empty)...');
  console.log(`Routes: ${routeDefinitions.length}`);

  for (const routeDefinition of routeDefinitions) {
    const html = buildRouteHtml(routeDefinition, templateData);
    const filePath = writeRouteHtml(routeDefinition, html);
    console.log(`✅ Saved ${filePath}`);
  }

  generateSitemap(routeDefinitions);
  console.log('🎉 Static prerender complete!');
}

prerender();
