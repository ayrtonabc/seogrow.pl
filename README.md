# SEO Grow Landing

Landing de `SEO Grow` construida con `React + TypeScript + Vite`, preparada para prerender por ruta, validacion SEO automatizada y pruebas de CI/CD en entorno limpio.

> **Última actualización:** 2026-07-16 — rediseño completo del home con foco en el cliente (no en el CMS).

## Scripts

```bash
npm run dev
npm run build
npm run validate:seo
npm run test:ci:seo
```

## Flujo SEO

1. `npm run build`
2. `npm run validate:seo`
3. `npm run test:ci:seo`
4. desplegar solo si todo pasa

## Politica De Idioma

- El sitio publico actual es `solo polaco`.
- Se declara `lang="pl"` en HTML y `hreflang="pl"` + `hreflang="x-default"` en head y sitemap.
- No deben anadirse `hreflang="en"` o `hreflang="es"` hasta que existan URLs reales, indexables y equivalentes en esos idiomas.

## Archivos SEO Clave

- `scripts/seo-config.js`: fuente de verdad de rutas, metadata, `lastmod` y schema.
- `scripts/prerender.js`: prerender por ruta con fallback minimo seguro.
- `scripts/validate-seo.js`: checks post-build que fallan si se rompe algo critico.
- `scripts/test-ci-seo.js`: simulacion de CI limpia con `npm ci`.
- `public/robots.txt`: expone el sitemap para crawlers.

## Validacion Externa

El checklist de deploy y comprobacion en Google esta en `docs/seo-release-checklist.md`.
