// scripts/inject-hub-entries.mjs
// Genera e inyecta las 13 entries de voivodato hubs en seo-config.js

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const seoConfigPath = path.resolve(__dirname, '..', 'scripts', 'seo-config.js')
const citiesSchemaPath = path.resolve(__dirname, '..', 'src', 'data', 'cities.schema.json')

const seoConfig = fs.readFileSync(seoConfigPath, 'utf8')
const citiesSchema = JSON.parse(fs.readFileSync(citiesSchemaPath, 'utf8'))

const voivodeships = citiesSchema.voivodeships
const hubs = voivodeships.map((v) => ({
  voivodeship: v,
  slug: citiesSchema.byVoivodeship[v].length > 0
    ? // Buscar el slug en cities
      citiesSchema.cities.find((c) => c.voivodeship === v)?.voivodeshipSlug || v.toLowerCase().replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e').replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/ó/g, 'o').replace(/ś/g, 's').replace(/ź/g, 'z').replace(/ż/g, 'z').replace(/\s+/g, '-')
    : '',
  count: citiesSchema.byVoivodeship[v].length,
}))

// Calcular el slug para cada hub
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e').replace(/ł/g, 'l')
    .replace(/ń/g, 'n').replace(/ó/g, 'o').replace(/ś/g, 's')
    .replace(/ź/g, 'z').replace(/ż/g, 'z')
    .replace(/\s+/g, '-')
}

const lines = []
lines.push('  // ─── 13 hubs regionales (voivodato) ───')
lines.push('')
for (const v of voivodeships) {
  const slug = slugify(v)
  const count = citiesSchema.byVoivodeship[v].length
  lines.push(`  {`)
  lines.push(`    route: '/${slug}',`)
  lines.push(`    title: 'Strona internetowa ${v} | ${count} miast, od 1500 zł | SEO Grow',`)
  lines.push(`    description: 'Strona internetowa dla firm z ${v} — obsługujemy ${count} miast. Gotowa w 5 dni, edycja z telefonu, widoczność w Google. Od 1500 zł jednorazowo, bez umowy.',`)
  lines.push(`    selectors: ['main', 'h1', '#root:not(:empty)'],`)
  lines.push(`    includeInSitemap: true,`)
  lines.push(`    noindex: false,`)
  lines.push(`    expectJsonLd: true,`)
  lines.push(`    changefreq: 'monthly',`)
  lines.push(`    priority: '0.7',`)
  lines.push(`    lastmod: '2026-07-21',`)
  lines.push(`  },`)
  lines.push('')
}

const newEntries = lines.join('\n')

// Insertar antes de `const CONTENT_ROUTES = [`
const marker = 'const CONTENT_ROUTES = ['
const idx = seoConfig.indexOf(marker)
if (idx === -1) {
  console.error('ERROR: marcador no encontrado')
  process.exit(1)
}
const insertPos = idx + marker.length
const before = seoConfig.slice(0, insertPos)
const after = seoConfig.slice(insertPos)

let entriesToInsert = newEntries.trim()
if (!entriesToInsert.endsWith(',')) entriesToInsert += ','

const newContent = before + '\n' + entriesToInsert + '\n' + after
fs.writeFileSync(seoConfigPath, newContent)
console.log(`OK: ${voivodeships.length} hubs inyectados`)
