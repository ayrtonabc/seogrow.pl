// scripts/city-seo-entries.mjs
// Genera las route entries para seo-config.js a partir de cities.schema.json
// Las inserta antes de las entries de los vertical pages existentes.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schemaPath = path.resolve(__dirname, '..', 'src', 'data', 'cities.schema.json')
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'))

const lines = []
lines.push('  // ─── 99 páginas de ciudad (Tier A + B + C) generadas desde cities.ts ───')
lines.push('')

for (const c of schema.cities) {
  // Title: máximo 70 chars para Google
  let title
  if (c.name.length <= 13) {
    title = `Strona internetowa ${c.name} | Od 1500 zł, gotowa w 5 dni | SEO Grow`
  } else {
    title = `Strona www ${c.name} — od 1500 zł | SEO Grow`
  }
  // Variamos el prefijo del description para que no sea duplicado
  // Usamos SIEMPRE la forma locativa o genitiva correcta en polaco
  // (en polaco "dla firm z Rzeszowa" = genitive; "dla firm w Rzeszowie" = locative)
  let prefix
  if (c.tier === 'A' && c.population > 100000) {
    // Para ciudades grandes, usamos locativo: "dla firm w Rzeszowie"
    prefix = `Profesjonalna strona internetowa dla firm ${c.nameLocative}`
  } else if (c.tier === 'C') {
    prefix = `Strona internetowa dla firm i mieszkańców ${c.nameLocative}, ${c.voivodeship}`
  } else {
    prefix = `Strona internetowa dla firm ${c.nameLocative}, powiat ${c.powiat}`
  }
  const desc = `${prefix}. Gotowa w 5 dni, edycja z telefonu, widoczność w Google. Od 1500 zł jednorazowo, bez umowy.`

  // Keywords únicos por ciudad — combinación de nombre, voivodato, powiat, industrias
  // Los keywords ayudan a Bing, Yandex, DuckDuckGo (Google no los usa pero otros sí)
  const industriesKw = (c.industries || []).slice(0, 3).join(', ')
  const keywords = [
    `strona internetowa ${c.name.toLowerCase()}`,
    `strona www ${c.name.toLowerCase()}`,
    `projekt strony ${c.name.toLowerCase()}`,
    `tworzenie stron ${c.name.toLowerCase()}`,
    `pozycjonowanie ${c.name.toLowerCase()}`,
    `agencja seo ${c.name.toLowerCase()}`,
    `cms dla firm ${c.name.toLowerCase()}`,
    `strona dla firmy ${c.name.toLowerCase()}`,
    c.powiat.toLowerCase(),
    c.voivodeship.toLowerCase(),
    industriesKw,
    'SEO lokalne',
    'CMS bez programisty',
    'WordPress alternatywa',
    'Wix alternatywa',
  ].filter(Boolean).join(', ')

  const priority = c.tier === 'A' ? '0.8' : c.tier === 'B' ? '0.7' : '0.6'

  lines.push(`  {`)
  lines.push(`    route: '/${c.slug}',`)
  lines.push(`    title: '${title.replace(/'/g, "\\'")}',`)
  lines.push(`    description: '${desc.replace(/'/g, "\\'")}',`)
  lines.push(`    keywords: '${keywords.replace(/'/g, "\\'")}',`)
  lines.push(`    selectors: ['main', 'h1', '#root:not(:empty)'],`)
  lines.push(`    includeInSitemap: true,`)
  lines.push(`    noindex: false,`)
  lines.push(`    expectJsonLd: true,`)
  lines.push(`    changefreq: 'monthly',`)
  lines.push(`    priority: '${priority}',`)
  lines.push(`    lastmod: '2026-07-21',`)
  lines.push(`  },`)
  lines.push('')
}

const out = lines.join('\n')
const outPath = path.resolve(__dirname, '..', 'src', 'data', 'citySeoEntries.txt')
fs.writeFileSync(outPath, out)
console.log(`OK: ${schema.cities.length} cities → ${path.relative(process.cwd(), outPath)}`)
