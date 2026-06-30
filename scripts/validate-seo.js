import fs from 'fs';
import path from 'path';
import {
  BUILD_DIR,
  getCanonicalUrl,
  getRouteDefinitions,
  routeToFilePath,
} from './seo-config.js';

const MAX_ENTRY_JS_BYTES = 500 * 1024;
const errors = [];
const warnings = [];

const walkFiles = (directoryPath) => {
  if (!fs.existsSync(directoryPath)) {
    return [];
  }

  return fs.readdirSync(directoryPath, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(directoryPath, entry.name);
    return entry.isDirectory() ? walkFiles(absolutePath) : [absolutePath];
  });
};

const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');

const routeDefinitions = getRouteDefinitions();
const htmlFiles = walkFiles(BUILD_DIR).filter((filePath) => filePath.endsWith('.html'));

if (htmlFiles.length < routeDefinitions.length) {
  errors.push(`Se encontraron ${htmlFiles.length} HTML en dist, pero se esperaban al menos ${routeDefinitions.length}.`);
}

for (const routeDefinition of routeDefinitions) {
  const filePath = routeToFilePath(routeDefinition.route);

  if (!fs.existsSync(filePath)) {
    errors.push(`Falta HTML prerenderizado para ${routeDefinition.route}: ${filePath}`);
    continue;
  }

  const html = readFile(filePath);
  const canonicalUrl = getCanonicalUrl(routeDefinition.route);

  if (!html.includes('lang="pl"')) {
    errors.push(`${routeDefinition.route} no contiene lang="pl".`);
  }

  if (!/<title>[\s\S]*?<\/title>/i.test(html)) {
    errors.push(`${routeDefinition.route} no contiene <title>.`);
  }

  if (!/<meta[^>]+name="description"[^>]+content="[^"]+"/i.test(html)) {
    errors.push(`${routeDefinition.route} no contiene meta description.`);
  }

  if (!html.includes(`<link rel="canonical" href="${canonicalUrl}"`)) {
    errors.push(`${routeDefinition.route} no tiene canonical correcto (${canonicalUrl}).`);
  }

  if (!html.includes(`href="${canonicalUrl}"`) || !html.includes('hreflang="pl"')) {
    warnings.push(`${routeDefinition.route} no expone hreflang="pl" como se esperaba.`);
  }

  if (!html.includes(`href="${canonicalUrl}"`) || !html.includes('hreflang="x-default"')) {
    warnings.push(`${routeDefinition.route} no expone hreflang="x-default" como se esperaba para el sitio monolingue.`);
  }

  if (routeDefinition.noindex) {
    if (!html.includes('noindex, follow')) {
      errors.push(`${routeDefinition.route} deberia llevar noindex, follow.`);
    }
  } else if (html.includes('noindex, follow')) {
    errors.push(`${routeDefinition.route} no deberia llevar noindex.`);
  }

  if (routeDefinition.expectJsonLd && !html.includes('application/ld+json')) {
    errors.push(`${routeDefinition.route} deberia incluir JSON-LD.`);
  }

  if (routeDefinition.route !== '/' && html.includes('<link rel="canonical" href="https://seogrow.pl/"')) {
    warnings.push(`${routeDefinition.route} contiene referencias a la canonical de home; revisa que no sea fallback demasiado generico.`);
  }
}

const sitemapPath = path.join(BUILD_DIR, 'sitemap.xml');

if (!fs.existsSync(sitemapPath)) {
  errors.push('Falta dist/sitemap.xml.');
} else {
  const sitemap = readFile(sitemapPath);
  const locMatches = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const lastmodMatches = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => match[1]);
  const sitemapRoutes = routeDefinitions.filter((routeDefinition) => routeDefinition.includeInSitemap);

  if (!sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
    errors.push('sitemap.xml no declara el namespace principal de sitemap.');
  }

  if (!sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"')) {
    errors.push('sitemap.xml no declara el namespace xhtml para hreflang.');
  }

  if (!sitemap.includes('hreflang="x-default"')) {
    warnings.push('sitemap.xml no incluye x-default; para el sitio actual en polaco conviene mantener pl + x-default.');
  }

  if (locMatches.length !== sitemapRoutes.length) {
    errors.push(`sitemap.xml contiene ${locMatches.length} URLs, pero se esperaban ${sitemapRoutes.length}.`);
  }

  sitemapRoutes.forEach((routeDefinition) => {
    const canonicalUrl = getCanonicalUrl(routeDefinition.route);
    if (!locMatches.includes(canonicalUrl)) {
      errors.push(`sitemap.xml no contiene ${canonicalUrl}.`);
    }
  });

  routeDefinitions
    .filter((routeDefinition) => routeDefinition.noindex)
    .forEach((routeDefinition) => {
      const canonicalUrl = getCanonicalUrl(routeDefinition.route);
      if (locMatches.includes(canonicalUrl)) {
        errors.push(`sitemap.xml incluye una URL noindex: ${canonicalUrl}.`);
      }
    });

  if (lastmodMatches.some((value) => !/^\d{4}-\d{2}-\d{2}$/.test(value))) {
    errors.push('sitemap.xml contiene valores <lastmod> fuera de YYYY-MM-DD.');
  }
}

const distIndexPath = path.join(BUILD_DIR, 'index.html');
if (fs.existsSync(distIndexPath)) {
  const distIndex = readFile(distIndexPath);
  const entryScripts = [...distIndex.matchAll(/<script[^>]+src="([^"]+\.js)"[^>]*><\/script>/g)].map((match) => match[1]);

  entryScripts.forEach((scriptSrc) => {
    const assetPath = path.join(BUILD_DIR, scriptSrc.replace(/^\//, '').replace(/\//g, path.sep));

    if (!fs.existsSync(assetPath)) {
      errors.push(`No se encontro el asset JS referenciado por index.html: ${scriptSrc}`);
      return;
    }

    const size = fs.statSync(assetPath).size;
    if (size > MAX_ENTRY_JS_BYTES) {
      errors.push(`El entry JS ${path.basename(assetPath)} pesa ${Math.round(size / 1024)}KB y excede 500KB.`);
    }
  });
}

if (warnings.length > 0) {
  console.warn('Advertencias SEO:');
  warnings.forEach((warning) => console.warn(`  - ${warning}`));
}

if (errors.length > 0) {
  console.error('Errores de validacion SEO:');
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}

console.log(`✅ Validacion SEO completada: ${routeDefinitions.length} rutas verificadas.`);
