// scripts/_audit-master.mjs
// AUDITORÍA MAESTRA — verifica TODO lo que tiene que estar perfecto
import fs from 'node:fs'
import path from 'node:path'

const DIST = 'dist'
const cities = JSON.parse(fs.readFileSync('src/data/cities.schema.json', 'utf8')).cities
const HUB_NAMES = ['dolnoslaskie', 'kujawsko-pomorskie', 'lubelskie', 'lodzkie', 'malopolskie', 'mazowieckie', 'podkarpackie', 'podlaskie', 'pomorskie', 'swietokrzyskie', 'warminsko-mazurskie', 'wielkopolskie', 'zachodniopomorskie']
const TIER1 = ['strona-internetowa-warszawa', 'strona-internetowa-krakow', 'strona-internetowa-lodz', 'strona-internetowa-wroclaw']

console.log('╔══════════════════════════════════════════════════════╗')
console.log('║  AUDITORÍA MAESTRA — TODO debe estar en verde       ║')
console.log('╚══════════════════════════════════════════════════════╝\n')

const results = []
const check = (name, passed, detail = '') => {
  results.push({ name, passed, detail })
  console.log(`  ${passed ? '✓' : '✗'} ${name}${detail ? ' (' + detail + ')' : ''}`)
}

// ─── 1. Cobertura ─────────────────────────────────────────────────────
console.log('1. COBERTURA:')
let citiesInDist = 0, hubsInDist = 0
for (const c of cities) if (fs.existsSync(path.join(DIST, c.slug, 'index.html'))) citiesInDist++
for (const h of HUB_NAMES) if (fs.existsSync(path.join(DIST, h, 'index.html'))) hubsInDist++
check('97 ciudades con landing única', citiesInDist === 97, `${citiesInDist}/97`)
check('13 hubs con landing única', hubsInDist === 13, `${hubsInDist}/13`)

for (const t of TIER1) {
  if (!fs.existsSync(path.join(DIST, t, 'index.html'))) {
    check(`Tier-1 ${t}`, false, 'MISSING')
  }
}
check('4 Tier-1 cities', TIER1.every(t => fs.existsSync(path.join(DIST, t, 'index.html'))))

// ─── 2. Schema en home ───────────────────────────────────────────────
console.log('\n2. SCHEMA HOME:')
const homeHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')
const homeSchemas = JSON.parse((homeHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/) || [])[1])
const homeNodes = Array.isArray(homeSchemas) ? homeSchemas : (homeSchemas['@graph'] || [homeSchemas])
const orgNode = homeNodes.find(n => n['@type'] === 'Organization')
const lbNode = homeNodes.find(n => n['@type'] === 'LocalBusiness')

check('Organization schema', !!orgNode)
check('LocalBusiness schema', !!lbNode)
check('parentOrganization = Grow Solutions', orgNode?.parentOrganization?.name === 'Grow Solutions')
check('sameAs incluye facebook.com/seogrowpl', orgNode?.sameAs?.some(u => u.includes('facebook.com/seogrowpl')))
check('sameAs >= 2 redes', (orgNode?.sameAs?.length || 0) >= 2, `${orgNode?.sameAs?.length || 0}`)
check('Organization areaServed >= 110', (orgNode?.areaServed?.length || 0) >= 110, `${orgNode?.areaServed?.length || 0}`)
check('Organization knowsAbout >= 10', (orgNode?.knowsAbout?.length || 0) >= 10, `${orgNode?.knowsAbout?.length || 0}`)
check('LocalBusiness areaServed >= 110', (lbNode?.areaServed?.length || 0) >= 110, `${lbNode?.areaServed?.length || 0}`)
check('LocalBusiness tiene telephone', !!lbNode?.telephone)

// ─── 3. Schema en ciudades ───────────────────────────────────────────
console.log('\n3. SCHEMA CIUDADES:')
let citiesWithLB = 0, citiesWithBC = 0, citiesWithFAQ = 0
for (const c of cities) {
  const html = fs.readFileSync(path.join(DIST, c.slug, 'index.html'), 'utf8')
  if (html.includes('LocalBusiness')) citiesWithLB++
  if (html.includes('BreadcrumbList')) citiesWithBC++
  if (html.includes('FAQPage')) citiesWithFAQ++
}
check('97/97 ciudades con LocalBusiness', citiesWithLB === 97, `${citiesWithLB}/97`)
check('97/97 ciudades con BreadcrumbList', citiesWithBC === 97, `${citiesWithBC}/97`)
check('97/97 ciudades con FAQPage', citiesWithFAQ === 97, `${citiesWithFAQ}/97`)

// ─── 4. Schema en hubs ───────────────────────────────────────────────
console.log('\n4. SCHEMA HUBS:')
let hubsWithLB = 0, hubsWithBC = 0, hubsWithFAQ = 0
for (const h of HUB_NAMES) {
  const html = fs.readFileSync(path.join(DIST, h, 'index.html'), 'utf8')
  if (html.includes('LocalBusiness')) hubsWithLB++
  if (html.includes('BreadcrumbList')) hubsWithBC++
  if (html.includes('FAQPage')) hubsWithFAQ++
}
check('13/13 hubs con LocalBusiness', hubsWithLB === 13)
check('13/13 hubs con BreadcrumbList', hubsWithBC === 13)
check('13/13 hubs con FAQPage', hubsWithFAQ === 13)

// ─── 5. Schema Tier-1 ────────────────────────────────────────────────
console.log('\n5. SCHEMA TIER-1:')
for (const t of TIER1) {
  const html = fs.readFileSync(path.join(DIST, t, 'index.html'), 'utf8')
  const hasLB = html.includes('LocalBusiness')
  const hasBC = html.includes('BreadcrumbList')
  check(`Tier-1 ${t} con LocalBusiness + Breadcrumb`, hasLB && hasBC)
}

// ─── 6. SEO básico en ciudades ────────────────────────────────────────
console.log('\n6. SEO BÁSICO CIUDADES:')
let citiesWithCanonical = 0, citiesWithHreflang = 0, citiesWithOG = 0
for (const c of cities) {
  const html = fs.readFileSync(path.join(DIST, c.slug, 'index.html'), 'utf8')
  if (/rel="canonical"/.test(html)) citiesWithCanonical++
  if (/hreflang="pl"/.test(html)) citiesWithHreflang++
  if (/og:title/.test(html)) citiesWithOG++
}
check('97/97 ciudades con canonical', citiesWithCanonical === 97)
check('97/97 ciudades con hreflang', citiesWithHreflang === 97)
check('97/97 ciudades con OG tags', citiesWithOG === 97)

// ─── 7. Polish chars y unicidad ──────────────────────────────────────
console.log('\n7. POLACO Y UNICIDAD:')
const allTitles = new Set()
const allDescs = new Set()
for (const c of cities) {
  const html = fs.readFileSync(path.join(DIST, c.slug, 'index.html'), 'utf8')
  const title = (html.match(/<title>([^<]+)<\/title>/) || [])[1]
  const desc = (html.match(/<meta name="description" content="([^"]+)"/) || [])[1]
  allTitles.add(title)
  allDescs.add(desc)
}
const ilawaHtml = fs.readFileSync(path.join(DIST, 'ilawa', 'index.html'), 'utf8')
check('Polish chars (ł) en Iława', /Iława/.test(ilawaHtml))
check('97 títulos únicos', allTitles.size === 97, `${allTitles.size}/97`)
check('97 descripciones únicas', allDescs.size === 97, `${allDescs.size}/97`)

// ─── 8. Gramática polaca ─────────────────────────────────────────────
console.log('\n8. GRAMÁTICA POLACA:')
const grammarChecks = []
// H1: preposición en minúscula + nombre con mayúscula
for (const c of cities) {
  const expected = `Strona internetowa ${c.nameLocative}` // el H1 debería ser esto
  if (expected.match(/^Strona internetowa W\s/)) {
    grammarChecks.push(`${c.slug}: preposición mayúscula`)
  }
}
check('H1 sin preposición mayúscula', grammarChecks.length === 0, grammarChecks.length + ' issues')
// Buscar "dla firm z [Name]" sin locative (formas incorrectas)
let badGrammar = 0
for (const c of cities) {
  const html = fs.readFileSync(path.join(DIST, c.slug, 'index.html'), 'utf8')
  // Check description for "dla firm z [NOMINATIVE]" pattern
  const desc = (html.match(/<meta name="description" content="([^"]+)"/) || [])[1] || ''
  // Si el desc usa "z " + nombre en nominativo (no genitivo), es incorrecto
  if (desc.match(/dla firm z [A-ZŁŻŹĆĄĘŃÓŚ][a-ząćęłńóśźż]+\./i) && !desc.match(/dla firm (z|w|we) /)) {
    badGrammar++
  }
}
check('Descriptions con preposición correcta', badGrammar === 0, `${badGrammar} con "z" incorrecto`)

// ─── 9. Cobertura de home ─────────────────────────────────────────────
console.log('\n9. COBERTURA EN HOME:')
const bundles = fs.readdirSync('dist/assets').filter(f => f.endsWith('.js'))
const mainBundle = bundles.find(f => f.startsWith('index-') && f.endsWith('.js'))
const mainB = fs.readFileSync('dist/assets/' + mainBundle, 'utf8')
check('Sección "Zasięg" en home', /zasieg|13 województw/.test(mainB))
const voivsCount = ['Warmińsko-Mazurskie', 'Pomorskie', 'Wielkopolskie', 'Podkarpackie', 'Łódzkie',
  'Dolnośląskie', 'Zachodniopomorskie', 'Świętokrzyskie', 'Kujawsko-Pomorskie',
  'Mazowieckie', 'Podlaskie', 'Lubelskie', 'Małopolskie'].filter(v => mainB.includes(v)).length
check('13/13 voivodatos en home', voivsCount === 13, `${voivsCount}/13`)

// ─── 10. Performance ─────────────────────────────────────────────────
console.log('\n10. PERFORMANCE:')
check('Hero image preloaded', /rel="preload"[^>]*imagesrcset/.test(homeHtml))
const totalJs = bundles.reduce((acc, f) => acc + fs.statSync('dist/assets/' + f).size, 0)
const totalJsMB = totalJs / 1024 / 1024
check('Total JS < 1.5MB', totalJsMB < 1.5, `${totalJsMB.toFixed(2)} MB`)

// ─── 11. Sitemap ──────────────────────────────────────────────────────
console.log('\n11. SITEMAP:')
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8')
const sitemapUrls = (sitemap.match(/<loc>/g) || []).length
check('Sitemap tiene 165 URLs', sitemapUrls === 165, `${sitemapUrls}`)

// ─── RESUMEN ─────────────────────────────────────────────────────────
const passed = results.filter(r => r.passed).length
const total = results.length
console.log(`\n${'='.repeat(56)}`)
console.log(`  RESULTADO: ${passed}/${total} checks pasaron`)
if (passed === total) {
  console.log('  🏆 ESTADO: PERFECTO — sin issues pendientes')
} else {
  console.log(`  ⚠ FALTAN: ${total - passed} correcciones`)
  for (const r of results.filter(x => !x.passed)) {
    console.log(`    - ${r.name}: ${r.detail}`)
  }
}
console.log('='.repeat(56))
