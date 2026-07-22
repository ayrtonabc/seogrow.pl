// scripts/generate-city-routes.mjs
// Genera:
// - src/data/cityRoutes.ts (imports de paginas + array de route definitions)
// - src/data/seoCityRoutes.js (route entries para seo-config.js)
// - src/pages/CityRoutesBlock.tsx (bloque JSX de <Route> para pegar en App.tsx)

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schemaPath = path.resolve(__dirname, '..', 'src', 'data', 'cities.schema.json')
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'))

// ─── 1. Lista de imports ───────────────────────────────────────────────
const importNames = {}
for (const c of schema.cities) {
  // Convertir slug a PascalCase (sin guiones)
  const pascal = c.slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
  const compName = `StronaInternetowa${pascal}Page`
  importNames[c.slug] = compName
}

// ─── 2. Generar archivo con imports + Route paths ─────────────────────
const cityRoutes = []
for (const c of schema.cities) {
  cityRoutes.push({
    slug: c.slug,
    component: importNames[c.slug],
    title: c.name,
    voivodeship: c.voivodeship,
    tier: c.tier,
  })
}

// ─── 3. Generar TSX block con <Route> para App.tsx ───────────────────
const routeBlock = cityRoutes
  .map(c => `          <Route path="/${c.slug}" element={<${c.component} />} />`)
  .join('\n')

// ─── 4. Generar seo-config.js entries ─────────────────────────────────
const seoEntries = cityRoutes
  .map(c => {
    const title = `Strona internetowa ${c.title} | Od 1500 zł, gotowa w 5 dni | SEO Grow`
    const desc = `Profesjonalna strona internetowa dla firm ${c.title === 'Łódź' ? 'w Łodzi' : c.title === 'Kraków' ? 'z Krakowa i Małopolski' : c.title === 'Warszawa' ? 'z Warszawy' : c.title === 'Wrocław' ? 'z Wrocławia i Dolnego Śląska' : `z ${c.title} i okolic`}. Gotowa w 5 dni, edycja z telefonu, widoczność w Google. Od 1500 zł jednorazowo, bez umowy.`
    return `  {
    route: '/${c.slug}',
    title: \`${title}\`,
    description: \`${desc}\`,
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '${c.tier === 'A' ? '0.8' : c.tier === 'B' ? '0.7' : '0.6'}',
    lastmod: '2026-07-21',
  },`
  })
  .join('\n')

// ─── 5. Generar App.tsx import block ──────────────────────────────────
const importBlock = cityRoutes
  .map(c => `  ${c.component},\n`)
  .join('')

const out = {
  totalCities: schema.cities.length,
  routeBlock,
  importBlock,
  seoEntries,
  cityRoutes,
}

// Guardar outputs en archivos individuales
fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'data', 'cityRoutes.json'),
  JSON.stringify(out, null, 2)
)
console.log(`OK: ${schema.cities.length} ciudades`)
console.log(`  - cityRoutes.json escrito`)
