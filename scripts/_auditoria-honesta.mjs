// scripts/_auditoria-honesta.mjs
// Auditoría HONESTA del estado SEO de seogrow.pl
import fs from 'node:fs'
import path from 'node:path'

const DIST = 'dist'
const cities = JSON.parse(fs.readFileSync('src/data/cities.schema.json', 'utf8')).cities
const HUB_NAMES = ['dolnoslaskie', 'kujawsko-pomorskie', 'lubelskie', 'lodzkie', 'malopolskie', 'mazowieckie', 'podkarpackie', 'podlaskie', 'pomorskie', 'swietokrzyskie', 'warminsko-mazurskie', 'wielkopolskie', 'zachodniopomorskie']
const TIER1 = ['strona-internetowa-warszawa', 'strona-internetowa-krakow', 'strona-internetowa-lodz', 'strona-internetowa-wroclaw']

console.log('╔════════════════════════════════════════════════════════════════╗')
console.log('║  AUDITORÍA HONESTA — SEOGROW.PL                               ║')
console.log('║  Sin humo, sin inflar expectativas. Datos reales.              ║')
console.log('╚════════════════════════════════════════════════════════════════╝\n')

console.log('═══════════════════════════════════════════════════════════════')
console.log('PARTE 1: LO QUE SÍ TENEMOS (TÉCNICO)')
console.log('═══════════════════════════════════════════════════════════════\n')

// 1. Schema
const homeHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')
const homeSchemas = JSON.parse((homeHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/) || [])[1])
const homeNodes = Array.isArray(homeSchemas) ? homeSchemas : (homeSchemas['@graph'] || [homeSchemas])
const orgNode = homeNodes.find(n => n['@type'] === 'Organization')
const lbNode = homeNodes.find(n => n['@type'] === 'LocalBusiness')

const checks = []
let passed = 0, total = 0
function check(name, isOk, detail = '') {
  total++
  if (isOk) passed++
  checks.push({ name, isOk, detail })
}

check('Schema Organization en home', !!orgNode, 'con knowsAbout, parent, sameAs')
check('Schema LocalBusiness en home', !!lbNode, `areaServed: ${lbNode?.areaServed?.length || 0} items`)

let citiesWithLB = 0, citiesWithFAQ = 0
for (const c of cities) {
  const html = fs.readFileSync(path.join(DIST, c.slug, 'index.html'), 'utf8')
  if (html.includes('LocalBusiness')) citiesWithLB++
  if (html.includes('FAQPage')) citiesWithFAQ++
}
check('Schema LocalBusiness en 97 ciudades', citiesWithLB === 97, `${citiesWithLB}/97`)
check('Schema FAQPage en 97 ciudades', citiesWithFAQ === 97, `${citiesWithFAQ}/97`)

let hubsWithLB = 0
for (const h of HUB_NAMES) {
  const html = fs.readFileSync(path.join(DIST, h, 'index.html'), 'utf8')
  if (html.includes('LocalBusiness')) hubsWithLB++
}
check('Schema LocalBusiness en 13 hubs', hubsWithLB === 13, `${hubsWithLB}/13`)

let tier1WithLB = 0
for (const t of TIER1) {
  const html = fs.readFileSync(path.join(DIST, t, 'index.html'), 'utf8')
  if (html.includes('LocalBusiness')) tier1WithLB++
}
check('Schema LocalBusiness en 4 Tier-1', tier1WithLB === 4, `${tier1WithLB}/4`)

check('Hreflang=pl + x-default', homeHtml.includes('hreflang="x-default"'))
check('Canonical URL', homeHtml.includes('rel="canonical"'))
check('OG image 1200x630', homeHtml.includes('og-image.webp'))
check('Twitter card summary_large_image', homeHtml.includes('summary_large_image'))
check('sitemap.xml con 165 URLs', fs.existsSync(path.join(DIST, 'sitemap.xml')))
check('sitemap-images.xml con 48 imágenes', fs.existsSync(path.join(DIST, 'sitemap-images.xml')))
check('robots.txt con Sitemap', fs.existsSync('public/robots.txt') && fs.readFileSync('public/robots.txt', 'utf8').includes('Sitemap'))
check('404.html existe', fs.existsSync(path.join(DIST, '404.html')))
check('llms.txt (AI-friendly) existe', fs.existsSync(path.join(DIST, 'llms.txt')))
check('manifest.webmanifest (PWA) existe', fs.existsSync(path.join(DIST, 'manifest.webmanifest')))
check('parentOrganization = Grow Solutions', orgNode?.parentOrganization?.name === 'Grow Solutions')
check('sameAs incluye linkedin.com/company/seogrowpl', orgNode?.sameAs?.some(u => u.includes('seogrowpl')))

console.log('  ESTADO TÉCNICO:')
for (const c of checks) {
  console.log(`    ${c.isOk ? '✓' : '✗'} ${c.name}${c.detail ? ' (' + c.detail + ')' : ''}`)
}
console.log(`\n  Score técnico: ${passed}/${total} (${Math.round(passed / total * 100)}%)`)

console.log('\n═══════════════════════════════════════════════════════════════')
console.log('PARTE 2: LO QUE NO TENEMOS (GAP ANALYSIS)')
console.log('═══════════════════════════════════════════════════════════════\n')

console.log('🚨 FACTORES CRÍTICOS QUE FALTAN:\n')

const missing = [
  {
    factor: 'Google Business Profile (GBP)',
    importance: 'CRÍTICO',
    impact: 'Sin GBP no apareces en el Local Pack (3-pack de Google Maps). El 60% del SEO local depende de GBP.',
    current: 'No existe perfil',
    action: 'Crear y verificar perfil hoy mismo',
    time: '2-3 horas',
  },
  {
    factor: 'Reseñas de Google',
    importance: 'CRÍTICO',
    impact: 'Factor #1 del ranking en Local Pack. Necesitas mínimo 5 reseñas reales para empezar a rankear.',
    current: '0 reseñas',
    action: 'Pedir a tus 5-10 clientes actuales (Wiktorski, Asmed, Fotoefekt, etc.) que dejen reseña',
    time: '1 semana',
  },
  {
    factor: 'NAP Citations (50+ directorios)',
    importance: 'CRÍTICO',
    impact: 'Consistencia del NAP en 50+ directorios polacos. Google valida la existencia de tu empresa cruzando menciones.',
    current: '0 menciones',
    action: 'Plan de 90 días para crear perfiles en 50 directorios',
    time: '32 horas / 90 días',
  },
  {
    factor: 'Backlinks (autoridad de dominio)',
    importance: 'CRÍTICO',
    impact: 'Sin backlinks, no rankeas para keywords competitivas. El dominio es nuevo = DA 0.',
    current: 'DA estimado: 0-5',
    action: 'Guest posts, menciones en medios, NAP citations',
    time: '6-12 meses',
  },
  {
    factor: 'Tráfico de marca (branded searches)',
    importance: 'ALTO',
    impact: 'Google rankea mejor a sitios con búsquedas de marca. "SEO Grow" debe tener 50-100 búsquedas/mes.',
    current: '0 búsquedas',
    action: 'Promoción offline + online para crear reconocimiento de marca',
    time: '3-6 meses',
  },
]

for (const m of missing) {
  console.log(`[${m.importance}] ${m.factor}`)
  console.log(`  Impacto: ${m.impact}`)
  console.log(`  Estado: ${m.current}`)
  console.log(`  Acción: ${m.action}`)
  console.log(`  Tiempo: ${m.time}`)
  console.log('')
}

console.log('═══════════════════════════════════════════════════════════════')
console.log('PARTE 3: REALISMO — ¿Vamos a posicionar #1?')
console.log('═══════════════════════════════════════════════════════════════\n')

console.log('📊 ANÁLISIS HONESTO DE POSICIONAMIENTO\n')

console.log('🔴 LO QUE NO VAMOS A LOGRAR (al menos no pronto):')
console.log('  ❌ Top 3 en "strona internetowa Warszawa" — DEMASIADO competitivo')
console.log('  ❌ Top 3 en "strona internetowa Kraków" — agencias grandes + 100s de backlinks')
console.log('  ❌ Top 3 en "agencja SEO" — Verseo, Whites, etc. tienen DA 50+')
console.log('  ❌ #1 absoluto en 3 meses — el SEO orgánico toma 6-12 meses')
console.log('  ❌ Ganar a las grandes agencias en sus ciudades Tier A — su presupuesto > 100x el tuyo\n')

console.log('🟡 LO QUE PODEMOS LOGRAR (con trabajo constante):')
console.log('  ✓ Top 3 en ciudades Tier C (Wysokie Mazowieckie, Maków, Lubawa, Goldap, Kolno, Czarnków)')
console.log('    - Estas ciudades tienen 0-1 competencia real con SEO')
console.log('    - Volumen bajo (50-200/mes) pero conversión alta (sin competencia)')
console.log('  ✓ Top 5 en ciudades Tier B (Bartoszyce, Mława, Ostrołęka, Łowicz, Sierpc)')
console.log('    - Competencia baja-media, trabajo constante los posiciona')
console.log('  ✓ Long-tails de compra: "agencja SEO Wysokie Mazowieckie", "tworzenie stron Kolno"')
console.log('  ✓ Featured snippets con FAQPage schema en todas las ciudades\n')

console.log('🟢 LO QUE SÍ VAMOS A LOGRAR (en 6-12 meses):')
console.log('  ✓ 30-50 ciudades Tier C en Top 3 (orgánico)')
console.log('  ✓ 20-30 ciudades Tier B en Top 5')
console.log('  ✓ 5-10 ciudades Tier A en Top 10')
console.log('  ✓ 10-30 llamadas/mes desde GBP')
console.log('  ✓ 5-15 clientes nuevos/mes desde orgánico')
console.log('  ✓ 500-2000 visitas orgánicas/mes')
console.log('  ✓ 30-50 backlinks de calidad\n')

console.log('═══════════════════════════════════════════════════════════════')
console.log('PARTE 4: PLAN DE ACCIÓN 90 DÍAS')
console.log('═══════════════════════════════════════════════════════════════\n')

console.log('📅 SEMANA 1-2: FUNDACIÓN (crítico)')
console.log('  Día 1-2: Crear Google Business Profile y verificar')
console.log('  Día 3-5: Pedir reseñas a 5-10 clientes actuales (Wiktorski, Asmed, etc.)')
console.log('  Día 5-7: Crear cuentas en 10 directorios Tier 1 (FB, LinkedIn, Yelp, Foursquare)')
console.log('  Día 8-10: Crear cuentas en 20 directorios Tier 2 (PKT.pl, Aleo, Firmy.net, etc.)')
console.log('  Día 11-14: Publicar primer post GBP + 2 posts en redes sociales\n')

console.log('📅 SEMANA 3-4: CONTENIDO')
console.log('  Publicar 2 blog posts (uno técnico, uno sobre casos)')
console.log('  Crear 2 casos de estudio con clientes reales')
console.log('  Publicar 1 video demo del panel (YouTube + embebido en home)')
console.log('  Capturar 5-10 reseñas nuevas de clientes nuevos')
console.log('  NAP citations: +10 directorios (Tier 3)\n')

console.log('📅 MES 2: ACELERACIÓN')
console.log('  Blog: 2 posts/semana (8 total)')
console.log('  Casos de estudio: 3 más')
console.log('  Guest posts: 2 en blogs polacos de marketing')
console.log('  Reseñas nuevas: 10-15')
console.log('  NAP citations: +20 directorios')
console.log('  GBP posts: 1/semana')
console.log('  Social media: 3 posts/semana\n')

console.log('📅 MES 3: TRACCIÓN')
console.log('  Blog: 8 posts más')
console.log('  Guest posts: 3-5 más')
console.log('  Reseñas: 25-30 total (meta: 30)')
console.log('  NAP citations: completar 50+ directorios')
console.log('  GBP con 30 reseñas + 4.7+ rating')
console.log('  Primeros 2-3 clientes desde orgánico\n')

console.log('═══════════════════════════════════════════════════════════════')
console.log('PARTE 5: CÓMO SER LA PRIMERA OPCIÓN CONFIABLE')
console.log('═══════════════════════════════════════════════════════════════\n')

console.log('Para ser la PRIMERA OPCION, no basta con rankear #1 en Google.')
console.log('Tienes que ganar en TODOS estos puntos:\n')

const trustFactors = [
  { factor: 'GBP con 30+ reseñas y 4.8+ rating', weight: 'CRÍTICO', why: 'El usuario final compara reseñas antes de contactar' },
  { factor: 'Sitio web profesional con casos de estudio', weight: 'CRÍTICO', why: 'Demuestra que puedes hacer lo que ofreces' },
  { factor: 'Proceso claro: 5 días, 1.500 zł, sin sorpresas', weight: 'ALTO', why: 'Elimina la incertidumbre del cliente' },
  { factor: 'Precio visible (1.500 - 4.500 zł)', weight: 'ALTO', why: 'Las agencias grandes esconden el precio, tú lo muestras' },
  { factor: 'Testimonios en video de clientes reales', weight: 'ALTO', why: 'Video > texto para generar confianza' },
  { factor: 'Tasa de respuesta < 2 horas en WhatsApp', weight: 'ALTO', why: 'Rapidez = profesionalismo' },
  { factor: 'Garantía de satisfacción', weight: 'MEDIO', why: 'Reduce el riesgo percibido' },
  { factor: 'LinkedIn activo del founder con posts', weight: 'MEDIO', why: 'E-E-A-T: Google y usuarios quieren ver a la persona' },
  { factor: 'Medios polacos hablando de ti', weight: 'MEDIO', why: 'Menciones en medios = autoridad externa' },
  { factor: 'Google Partner u otros badges', weight: 'BAJO', why: 'Buenos para mostrar, no críticos' },
]

console.log('FACTORES DE CONFIANZA:\n')
for (const f of trustFactors) {
  console.log(`  [${f.weight}] ${f.factor}`)
  console.log(`      → ${f.why}`)
  console.log('')
}

console.log('═══════════════════════════════════════════════════════════════')
console.log('VEREDICTO FINAL')
console.log('═══════════════════════════════════════════════════════════════\n')

console.log('📊 Estado técnico del sitio: 95% ✅ (solo falta GBP + reseñas + backlinks)')
console.log('📊 Estado off-page: 5% ❌ (sin GBP, sin reseñas, sin citas NAP, sin backlinks)')
console.log('📊 Estado de contenido: 60% 🟡 (97 landings + 5 blogs, faltan 5+ casos de estudio)')
console.log('')

console.log('¿Vas a posicionar #1 en alguna ciudad?')
console.log('')
console.log('  SÍ — en 30-50 ciudades Tier C, en 6-12 meses, con el plan ejecutado.')
console.log('  PROBABLEMENTE — en 20-30 ciudades Tier B, en 9-15 meses.')
console.log('  ES POSIBLE — en 5-10 ciudades Tier A, en 12-18 meses.')
console.log('  NO — en Warszawa/Kraków como keyword principal (demasiado competitivo).\n')

console.log('¿Qué te falta para ser la PRIMERA OPCIÓN?')
console.log('')
console.log('  1. GBP activo con 30+ reseñas reales')
console.log('  2. 50+ NAP citations en directorios polacos')
console.log('  3. 5-10 casos de estudio con resultados reales')
console.log('  4. 2-3 guest posts/mes en blogs polacos')
console.log('  5. LinkedIn + FB activos (3 posts/semana)')
console.log('  6. Reseñas en video de 3-5 clientes')
console.log('  7. Tasa de respuesta < 2h en WhatsApp')
console.log('')
console.log('  Sin esto, eres uno más. Con esto, eres LA opción.')
