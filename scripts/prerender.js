import puppeteer from 'puppeteer-core';
import express from 'express';
import fs from 'fs';
import os from 'os';
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

const PAGE_TIMEOUT = 60000;
const CONTENT_TIMEOUT = 20000;

const CHROME_PATHS = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  path.join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe'),
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  path.join(process.env.LOCALAPPDATA || '', 'Microsoft\\Edge\\Application\\msedge.exe'),
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const INDEXABLE_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const NOINDEX_ROBOTS = 'noindex, follow';

const getChromePath = () => CHROME_PATHS.find((candidate) => fs.existsSync(candidate)) || null;

const getRobotsValue = (routeDefinition) => (routeDefinition.noindex ? NOINDEX_ROBOTS : INDEXABLE_ROBOTS);

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

  const scriptTags = bodyMatch[1].match(/<script\b[\s\S]*?<\/script>/gi) || [];

  return {
    commonHeadTags: stripSeoTags(headMatch[1]),
    bodyScripts: scriptTags.join('\n'),
  };
};

const validateJsonLd = (html) => {
  const matches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];

  return matches.some((match) => {
    try {
      const parsed = JSON.parse(match[1]);
      return Boolean(parsed && (Array.isArray(parsed) ? parsed.length : parsed));
    } catch {
      return false;
    }
  });
};

const buildMinimalHtml = (routeDefinition, templateData) => {
  const canonicalUrl = getCanonicalUrl(routeDefinition.route);
  const robots = getRobotsValue(routeDefinition);
  const ogType = routeDefinition.route.startsWith('/blog/') ? 'article' : 'website';
  const schemaJson = routeDefinition.schema
    ? JSON.stringify(routeDefinition.schema).replace(/</g, '\\u003c')
    : null;

  return `<!doctype html>
<html lang="pl" translate="no">
  <head>
    <meta charset="UTF-8" />
    <title>${escapeHtml(routeDefinition.title)}</title>
    <meta name="description" content="${escapeHtml(routeDefinition.description)}" />
    <meta name="robots" content="${robots}" />
    <meta name="googlebot" content="${robots}" />
    <meta name="author" content="SEO Grow" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="pl" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:title" content="${escapeHtml(routeDefinition.title)}" />
    <meta property="og:description" content="${escapeHtml(routeDefinition.description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="SEO Grow" />
    <meta property="og:locale" content="pl_PL" />
    <meta property="og:image" content="${SITE_URL}/panel.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(routeDefinition.title)}" />
    <meta name="twitter:description" content="${escapeHtml(routeDefinition.description)}" />
    <meta name="twitter:image" content="${SITE_URL}/panel.webp" />
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

const writeFallbackHtml = (routeDefinition, templateData, reason) => {
  const filePath = writeRouteHtml(routeDefinition, buildMinimalHtml(routeDefinition, templateData));
  console.warn(`⚠️ Fallback CSR minimo generado para ${routeDefinition.route}: ${reason}`);
  console.log(`✅ Saved ${filePath}`);
};

const waitForContent = async (page, routeDefinition) => {
  const selectors = [...new Set([...(routeDefinition.selectors || []), '#root:not(:empty)'])];

  for (const selector of selectors) {
    const exists = await page.evaluate((candidate) => Boolean(document.querySelector(candidate)), selector);

    if (!exists) {
      continue;
    }

    await page.waitForSelector(selector, { timeout: CONTENT_TIMEOUT });
    return selector;
  }

  await page.waitForFunction(
    () => {
      const root = document.getElementById('root');
      const main = document.querySelector('main');
      const target = main || root;
      const text = target?.textContent?.replace(/\s+/g, ' ').trim() || '';
      return target && text.length > 120;
    },
    { timeout: CONTENT_TIMEOUT },
  );

  return 'text-content';
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

const closeServer = (server) =>
  new Promise((resolve, reject) => {
    if (!server?.listening) {
      resolve();
      return;
    }

    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });

async function prerender() {
  const routeDefinitions = getRouteDefinitions();
  const templateData = loadBuildTemplate();
  const renderedRoutes = new Set();

  console.log('🚀 Starting static prerendering for Googlebot...');
  console.log(`Routes to prerender: ${routeDefinitions.length}`);

  const chromePath = getChromePath();

  if (!chromePath) {
    console.warn('⚠️ Chrome/Edge no disponible. Se generara fallback CSR minimo por ruta.');
    console.log('Attempted paths:', CHROME_PATHS);

    routeDefinitions.forEach((routeDefinition) => {
      writeFallbackHtml(routeDefinition, templateData, 'Chrome no disponible');
      renderedRoutes.add(routeDefinition.route);
    });

    generateSitemap(routeDefinitions);
    console.log('🎉 Build SEO completado con fallback minimo por ruta.');
    return;
  }

  console.log(`✅ Using browser at: ${chromePath}`);

  const app = express();
  app.use(express.static(BUILD_DIR));
  app.use((req, res) => {
    res.sendFile(path.join(BUILD_DIR, 'index.html'));
  });

  const server = await new Promise((resolve) => {
    const instance = app.listen(0, '127.0.0.1', () => {
      const address = instance.address();
      const port = typeof address === 'object' && address ? address.port : 'unknown';
      console.log(`🌍 Server running on http://127.0.0.1:${port}`);
      resolve(instance);
    });
  });
  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : 0;

  let browser;
  let browserProfileDir;

  try {
    browserProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'seo-grow-prerender-'));
    browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: 'new',
      userDataDir: browserProfileDir,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-extensions',
        '--disable-background-networking',
        '--disable-sync',
        '--disable-features=PrivacySandboxSettings4',
        '--no-first-run',
        '--no-default-browser-check',
      ],
    });

    for (const routeDefinition of routeDefinitions) {
      const page = await browser.newPage();
      const url = `http://127.0.0.1:${port}${routeDefinition.route}`;

      try {
        console.log(`Prerendering ${routeDefinition.route}...`);

        await page.goto(url, { waitUntil: 'networkidle0', timeout: PAGE_TIMEOUT });
        const selectorUsed = await waitForContent(page, routeDefinition);
        if (routeDefinition.expectJsonLd) {
          await page
            .waitForFunction(
              () => Boolean(document.querySelector('script[type="application/ld+json"]')),
              { timeout: 10000 },
            )
            .catch(() => false);
        }
        const html = await page.content();
        const hasJsonLd = validateJsonLd(html);

        if (!html.includes('lang="pl"')) {
          console.warn(`⚠️ Warning: ${routeDefinition.route} missing lang="pl"`);
        }

        if (routeDefinition.expectJsonLd && !hasJsonLd) {
          console.warn(`⚠️ Warning: ${routeDefinition.route} missing or invalid JSON-LD`);
        }

        const filePath = writeRouteHtml(routeDefinition, html);
        renderedRoutes.add(routeDefinition.route);

        console.log(`✅ Saved ${filePath} using ${selectorUsed}`);
      } catch (error) {
        writeFallbackHtml(routeDefinition, templateData, error.message);
        renderedRoutes.add(routeDefinition.route);
      } finally {
        await page.close();
      }
    }
  } catch (error) {
    console.error(`❌ Browser prerender failed: ${error.message}`);

    routeDefinitions
      .filter((routeDefinition) => !renderedRoutes.has(routeDefinition.route))
      .forEach((routeDefinition) => {
        writeFallbackHtml(routeDefinition, templateData, error.message);
        renderedRoutes.add(routeDefinition.route);
      });
  } finally {
    if (browser) {
      await browser.close();
    }

    if (browserProfileDir) {
      fs.rmSync(browserProfileDir, { recursive: true, force: true });
    }

    await closeServer(server);
  }

  generateSitemap(routeDefinitions);
  console.log('🎉 Prerendering complete!');
}

prerender().catch((error) => {
  console.error(`❌ Prerendering script failed: ${error.message}`);
  process.exit(1);
});
