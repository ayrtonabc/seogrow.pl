// scripts/_list-routes.mjs
// Lista todas las rutas del proyecto agrupadas
import fs from 'node:fs'

const seoConfig = await import('../scripts/seo-config.js')
const citiesData = JSON.parse(fs.readFileSync('src/data/cities.schema.json', 'utf8'))

const routes = seoConfig.getRouteDefinitions()
console.log('Total routes:', routes.length)
console.log('')
console.log('================================================================')
console.log('=== LISTADO COMPLETO DE RUTAS ===')
console.log('================================================================')

// HOME
console.log('\n--- HOME ---')
const home = routes.find(r => r.route === '/')
console.log(`  /  (${home?.title?.substring(0, 60)}...)`)

// Hubs
console.log('\n--- 13 HUBS REGIONALES ---')
const HUB_NAMES = ['dolnoslaskie', 'kujawsko-pomorskie', 'lubelskie', 'lodzkie', 'malopolskie', 'mazowieckie', 'podkarpackie', 'podlaskie', 'pomorskie', 'swietokrzyskie', 'warminsko-mazurskie', 'wielkopolskie', 'zachodniopomorskie']
const HUB_LABELS = {
  'dolnoslaskie': 'Dolnośląskie',
  'kujawsko-pomorskie': 'Kujawsko-Pomorskie',
  'lubelskie': 'Lubelskie',
  'lodzkie': 'Łódzkie',
  'malopolskie': 'Małopolskie',
  'mazowieckie': 'Mazowieckie',
  'podkarpackie': 'Podkarpackie',
  'podlaskie': 'Podlaskie',
  'pomorskie': 'Pomorskie',
  'swietokrzyskie': 'Świętokrzyskie',
  'warminsko-mazurskie': 'Warmińsko-Mazurskie',
  'wielkopolskie': 'Wielkopolskie',
  'zachodniopomorskie': 'Zachodniopomorskie',
}
for (const h of HUB_NAMES) {
  const r = routes.find(rt => rt.route === '/' + h)
  if (r) console.log(`  /${h}  →  ${HUB_LABELS[h]} (${r.title?.substring(0, 50)}...)`)
}

// 97 ciudades
console.log('\n--- 97 CIUDADES (Tier A: 36, B: 43, C: 18) ---')
const citySlugs = new Set(citiesData.cities.map(c => c.slug))
const citiesRoutes = routes.filter(r => citySlugs.has(r.route.slice(1)))
console.log(`  Total: ${citiesRoutes.length} ciudades\n`)
const tierA = citiesData.cities.filter(c => c.tier === 'A').sort((a, b) => a.name.localeCompare(b.name, 'pl'))
const tierB = citiesData.cities.filter(c => c.tier === 'B').sort((a, b) => a.name.localeCompare(b.name, 'pl'))
const tierC = citiesData.cities.filter(c => c.tier === 'C').sort((a, b) => a.name.localeCompare(b.name, 'pl'))

console.log(`  TIER A (${tierA.length} ciudades, mejor retorno):`)
for (const c of tierA) console.log(`    /${c.slug.padEnd(28)} → ${c.name} (${c.population.toLocaleString('pl-PL')} hab.)`)

console.log(`\n  TIER B (${tierB.length} ciudades, buen potencial):`)
for (const c of tierB) console.log(`    /${c.slug.padEnd(28)} → ${c.name} (${c.population.toLocaleString('pl-PL')} hab.)`)

console.log(`\n  TIER C (${tierC.length} ciudades, menor densidad):`)
for (const c of tierC) console.log(`    /${c.slug.padEnd(28)} → ${c.name} (${c.population.toLocaleString('pl-PL')} hab.)`)

// Tier-1 cities
console.log('\n--- 4 TIER-1 CITIES (Warszawa, Kraków, Łódź, Wrocław) ---')
const TIER1 = ['strona-internetowa-warszawa', 'strona-internetowa-krakow', 'strona-internetowa-lodz', 'strona-internetowa-wroclaw']
const TIER1_LABELS = { 'warszawa': 'Warszawa', 'krakow': 'Kraków', 'lodz': 'Łódź', 'wroclaw': 'Wrocław' }
for (const t of TIER1) {
  const slug = t.replace('strona-internetowa-', '')
  const r = routes.find(rt => rt.route === '/' + t)
  if (r) console.log(`  /${t}  →  ${TIER1_LABELS[slug]}`)
}

// Service pages
console.log('\n--- SERVICIOS Y PÁGINAS DE SERVICIO ---')
const serviceSlugs = ['sklep-online', 'akademia-kursow', 'rezerwacje-i-terminy', 'menu-cyfrowe', 'ekspansja-globalna', 'wizytowka-prac']
for (const s of serviceSlugs) {
  const r = routes.find(rt => rt.route === '/' + s)
  if (r) console.log(`  /${s}`)
}

// Vertical pages (industrias)
console.log('\n--- PÁGINAS POR INDUSTRIA (verticales) ---')
const verticalSlugs = [
  'pozycjonowanie-stron-dla-firm',
  'tania-strona-internetowa-dla-firmy',
  'obsluga-strony-internetowej',
  'seo-lokalne-dla-firm',
  'strona-dla-fotografa',
  'strona-dla-hotelu',
  'strona-dla-architekta',
  'strona-dla-agencji-nieruchomosci',
  'strona-dla-kancelarii-prawnej',
  'strona-dla-mechanika',
  'strona-dla-trenera-personalnego',
  'strona-dla-projektanta-wnetrz',
  'strona-dla-dentysty',
  'strona-dla-weterynarza',
  'strona-dla-freelancera',
  'strona-dla-warsztatu-samochodowego',
  'strona-dla-kosmetyczki',
  'strona-dla-fryzjera',
  'strona-dla-psychologa',
  'strona-dla-fizjoterapeuty',
  'strona-dla-prawnika',
  'strona-dla-kliniki',
  'strona-dla-gabinetu-stomatologicznego',
  'strona-dla-restauracji',
  'cms-seo',
  'cms-seo-pequenas-empresas',
  'cms-con-seo-automatico',
  'crear-pagina-web-seo',
  'alternativa-wordpress-seo',
  'wordpress-vs-seogrow',
  'wix-vs-seogrow',
  'dlaczego-moja-strona-nie-pojawia-sie-w-google',
  'jak-szybko-wyjsc-w-google',
  'najczestsze-bledy-seo',
]
for (const v of verticalSlugs) {
  const r = routes.find(rt => rt.route === '/' + v)
  if (r) console.log(`  /${v}`)
}

// Standalone
console.log('\n--- STANDALONE ---')
const standalone = ['/wsparcie', '/cennik', '/blog', '/zamowienie', '/polityka-prywatnosci', '/polityka-cookies', '/przetwarzanie-danych', '/404']
for (const s of standalone) {
  const r = routes.find(rt => rt.route === s)
  if (r) console.log(`  ${s}  →  ${r.title?.substring(0, 50)}`)
}

// Blog posts
console.log('\n--- 5 BLOG POSTS ---')
const blogSlugs = [
  'blog-firmowy-jako-kanal-sprzedazy',
  'ile-kosztuje-strona-internetowa-2026',
  'jak-zalozyc-strone-internetowa',
  'jak-pisac-artykuly-seo-ktore-generuja-leady',
  'seo-lokalne-dla-malych-firm',
]
for (const b of blogSlugs) {
  const r = routes.find(rt => rt.route === '/blog/' + b)
  if (r) console.log(`  /blog/${b}  →  ${r.title?.substring(0, 60)}`)
}

console.log('\n=== RESUMEN ===')
console.log(`  Total páginas: ${routes.length}`)
console.log(`  - Home: 1`)
console.log(`  - Hubs: 13`)
console.log(`  - 97 ciudades: 97`)
console.log(`  - 4 Tier-1: 4`)
console.log(`  - Servicios: ${serviceSlugs.length}`)
console.log(`  - Verticales: ${verticalSlugs.length}`)
console.log(`  - Standalone: ${standalone.length}`)
console.log(`  - Blog: ${blogSlugs.length}`)
