# SEO Release Checklist

## Antes Del Deploy

1. Ejecuta `npm run build`.
2. Ejecuta `npm run validate:seo`.
3. Ejecuta `npm run test:ci:seo`.
4. Confirma que `dist/sitemap.xml` contiene `lastmod` en formato `YYYY-MM-DD`.
5. Confirma que `public/robots.txt` referencia `https://seogrow.pl/sitemap.xml`.

## Despues Del Deploy

1. Abre `https://seogrow.pl/sitemap.xml` y confirma respuesta `200`.
2. Abre `https://seogrow.pl/robots.txt` y confirma la linea `Sitemap: https://seogrow.pl/sitemap.xml`.
3. En Google Search Console, usa `Inspeccion de URL` sobre:
   - `https://seogrow.pl/`
   - `https://seogrow.pl/blog`
   - una URL real de articulo
4. En Google Search Console, vuelve a enviar el sitemap si publicaste rutas nuevas o cambiaste estructura.
5. Ejecuta Rich Results Test sobre home y un articulo para validar `Organization`, `WebSite`, `SoftwareApplication`, `Article` y `BreadcrumbList`.
6. Ejecuta PageSpeed Insights en movil para vigilar `LCP`, `INP` y `CLS`.

## Politica De Idioma

- El sitio actual se publica como experiencia `solo polaca`.
- Se mantiene `lang="pl"` en HTML.
- Se mantienen `hreflang="pl"` y `hreflang="x-default"` mientras no existan versiones equivalentes en otros idiomas.
- No anadas `hreflang="en"` o `hreflang="es"` hasta tener URLs reales y canonicas propias para esos idiomas.

## Nota Importante

- El endpoint historico de ping de sitemaps de Google ya no debe usarse.
- El mecanismo correcto hoy es exponer bien el sitemap, declararlo en `robots.txt` y gestionarlo desde Google Search Console.
