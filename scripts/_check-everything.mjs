// scripts/_check-everything.mjs
// Verificación exhaustiva de todo el sitio
import fs from 'node:fs'
import path from 'node:path'

const DIST = 'dist'
const cities = JSON.parse(fs.readFileSync('src/data/cities.schema.json', 'utf8')).cities
const HUB_NAMES = ['dolnoslaskie', 'kujawsko-pomorskie', 'lubelskie', 'lodzkie', 'malopolskie', 'mazowieckie', 'podkarpackie', 'podlaskie', 'pomorskie', 'swietokrzyskie', 'warminsko-mazurskie', 'wielkopolskie', 'zachodniopomorskie']
const TIER1 = ['strona-internetowa-warszawa', 'strona-internetowa-krakow', 'strona-internetowa-lodz', 'strona-internetowa-wroclaw']

console.log('=== VERIFICACIÓN EXHAUSTIVA ===\n')

// 1. Todas las páginas tienen hreflang
console.log('1. Hreflang en todas las páginas:')
let withHreflang = 0, withoutHreflang = 0
const pagesToCheck = []
// Ciudades
for (const c of cities) pagesToCheck.push({ route: '/' + c.slug, name: c.name })
// Hubs
for (const h of HUB_NAMES) pagesToCheck.push({ route: '/' + h, name: h })
// Tier-1
for (const t of TIER1) pagesToCheck.push({ route: '/' + t, name: t })

for (const p of pagesToCheck) {
  const file = path.join(DIST, p.route, 'index.html')
  if (fs.existsSync(file)) {
    const html = fs.readFileSync(file, 'utf8')
    if (/hreflang="pl" href="[^"]+"/.test(html)) withHreflang++
    else {
      withoutHreflang++
      if (withoutHreflang <= 5) console.log(`  ✗ ${p.route}`)
    }
  }
}
console.log(`  ✓ con hreflang: ${withHreflang}/${pagesToCheck.length}`)
console.log(`  ✗ sin hreflang: ${withoutHreflang}`)

// 2. Verificar 404 handling
console.log('\n2. 404 handling:')
const has404 = fs.existsSync(path.join(DIST, '404.html'))
console.log(`  404.html: ${has404 ? '✓' : '✗'}`)

// 3. Verificar llms.txt (AI-friendly)
console.log('\n3. AI-friendly content:')
const hasLlms = fs.existsSync(path.join(DIST, 'llms.txt'))
console.log(`  llms.txt: ${hasLlms ? '✓' : '✗'}`)
const hasLlmsFull = fs.existsSync(path.join(DIST, 'llms-full.txt'))
console.log(`  llms-full.txt: ${hasLlmsFull ? '✓' : '✗'}`)

// 4. Verificar manifest
console.log('\n4. PWA:')
const hasManifest = fs.existsSync(path.join(DIST, 'manifest.webmanifest'))
console.log(`  manifest.webmanifest: ${hasManifest ? '✓' : '✗'}`)

// 5. Verificar sitemap-images
console.log('\n5. Sitemaps:')
const hasSitemap = fs.existsSync(path.join(DIST, 'sitemap.xml'))
const hasSitemapImg = fs.existsSync(path.join(DIST, 'sitemap-images.xml'))
console.log(`  sitemap.xml: ${hasSitemap ? '✓' : '✗'}`)
console.log(`  sitemap-images.xml: ${hasSitemapImg ? '✓' : '✗'}`)

// 6. Performance
console.log('\n6. Performance:')
const assets = fs.readdirSync(path.join(DIST, 'assets'))
const totalJs = assets.filter(f => f.endsWith('.js')).reduce((acc, f) => acc + fs.statSync(path.join(DIST, 'assets', f)).size, 0)
const totalCss = assets.filter(f => f.endsWith('.css')).reduce((acc, f) => acc + fs.statSync(path.join(DIST, 'assets', f)).size, 0)
console.log(`  Total JS: ${(totalJs / 1024).toFixed(1)} KB`)
console.log(`  Total CSS: ${(totalCss / 1024).toFixed(1)} KB`)
console.log(`  LCP image preloaded: ${/<link[^>]*rel="preload"[^>]*imagesrcset/s.test(fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')) ? '✓' : '✗'}`)

// 7. Polaco chars en home
console.log('\n7. Polaco en home:')
const homeHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')
const polishChars = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(homeHtml)
console.log(`  Polish chars en home: ${polishChars ? '✓' : '✗'}`)

// 8. OG image 1200x630
console.log('\n8. OG image:')
const ogImage = (homeHtml.match(/<meta property="og:image" content="([^"]+)"/) || [])[1]
console.log(`  og:image: ${ogImage || 'MISSING'}`)
if (ogImage) {
  const ogFile = path.join(DIST, ogImage.replace(/^https?:\/\/[^\/]+/, '').replace(/^\//, ''))
  if (fs.existsSync(ogFile)) {
    const size = fs.statSync(ogFile).size
    console.log(`  Tamaño: ${(size / 1024).toFixed(1)} KB`)
  }
}

// 9. linkedin y facebook URLs
console.log('\n9. Social URLs:')
const linkedinMatch = homeHtml.match(/https:\/\/www\.linkedin\.com\/company\/[a-z]+/g) || []
const facebookMatch = homeHtml.match(/https:\/\/www\.facebook\.com\/[a-z]+/g) || []
console.log(`  linkedin.com/company/: ${linkedinMatch[0] || 'MISSING'}`)
console.log(`  facebook.com/: ${facebookMatch[0] || 'MISSING'}`)

// 10. Tier coverage
console.log('\n10. Tier coverage:')
const tierA = cities.filter(c => c.tier === 'A').length
const tierB = cities.filter(c => c.tier === 'B').length
const tierC = cities.filter(c => c.tier === 'C').length
console.log(`  Tier A: ${tierA}`)
console.log(`  Tier B: ${tierB}`)
console.log(`  Tier C: ${tierC}`)
console.log(`  Total: ${tierA + tierB + tierC}`)

// 11. Sitemap priority distribution
console.log('\n11. Sitemap priority:')
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8')
const prios = (sitemap.match(/<priority>([^<]+)<\/priority>/g) || []).map(s => s.replace(/<\/?priority>/g, ''))
const dist = {}
for (const p of prios) dist[p] = (dist[p] || 0) + 1
console.log(`  Distribución:`)
for (const [p, c] of Object.entries(dist).sort()) console.log(`    ${p}: ${c}`)

// 12. OG image in all cities
console.log('\n12. OG image en ciudades:')
let withOg = 0
for (const c of cities) {
  const html = fs.readFileSync(path.join(DIST, c.slug, 'index.html'), 'utf8')
  if (/<meta property="og:image" content="[^"]+"/.test(html)) withOg++
}
console.log(`  ${withOg}/97`)

// 13. Meta keywords
console.log('\n13. Meta keywords:')
let withKw = 0
for (const c of cities) {
  const html = fs.readFileSync(path.join(DIST, c.slug, 'index.html'), 'utf8')
  if (/<meta name="keywords"/.test(html)) withKw++
}
console.log(`  Cities con keywords: ${withKw}/97`)

const hubsWithKw = HUB_NAMES.filter(h => {
  const html = fs.readFileSync(path.join(DIST, h, 'index.html'), 'utf8')
  return /<meta name="keywords"/.test(html)
})
console.log(`  Hubs con keywords: ${hubsWithKw.length}/13`)
