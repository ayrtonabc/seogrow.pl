// scripts/generate-og-images.mjs
// Genera una OG image 1200x630 con el branding de SEO Grow
// Esta es la imagen que se muestra cuando alguien comparte la URL en Facebook,
// LinkedIn, Twitter, WhatsApp, etc.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// Verificar que tenemos sharp disponible, si no, usar canvas
let sharp
try {
  sharp = (await import('sharp')).default
} catch (e) {
  console.log('sharp no está instalado, instalando...')
  // No instalamos automáticamente (regla del sistema)
  console.error('Por favor instala sharp: npm install sharp --save-dev')
  process.exit(1)
}

const W = 1200
const H = 630

// Generar OG image principal (home)
async function generateMainOG() {
  // SVG con el branding de SEO Grow
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0F172A;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1E293B;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0F172A;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2563EB;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)" />

  <!-- Decorative gradient circles -->
  <circle cx="1050" cy="100" r="200" fill="#4F46E5" opacity="0.15" />
  <circle cx="100" cy="530" r="180" fill="#2563EB" opacity="0.12" />

  <!-- Accent bar at top -->
  <rect x="0" y="0" width="${W}" height="6" fill="url(#accent)" />

  <!-- Logo / brand -->
  <g transform="translate(80, 80)">
    <text font-family="Inter, Arial, sans-serif" font-weight="800" font-size="42" fill="#FFFFFF" letter-spacing="-1">
      SEO Grow
    </text>
    <text x="0" y="32" font-family="Inter, Arial, sans-serif" font-weight="500" font-size="18" fill="#94A3B8">
      Strony internetowe z SEO dla małych firm
    </text>
  </g>

  <!-- Headline -->
  <g transform="translate(80, 240)">
    <text font-family="Inter, Arial, sans-serif" font-weight="800" font-size="64" fill="#FFFFFF" letter-spacing="-2">
      Strona gotowa
    </text>
    <text y="80" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="64" fill="#818CF8" letter-spacing="-2">
      w 5 dni
    </text>
    <text y="160" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="64" fill="#FFFFFF" letter-spacing="-2">
      od 1 500 zł
    </text>
  </g>

  <!-- Features row -->
  <g transform="translate(80, 510)">
    <g>
      <circle cx="14" cy="14" r="14" fill="#4F46E5" />
      <text x="14" y="20" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="16" fill="#FFFFFF" text-anchor="middle">5</text>
      <text x="36" y="20" font-family="Inter, Arial, sans-serif" font-weight="600" font-size="18" fill="#FFFFFF">dni do gotowej strony</text>
    </g>
    <g transform="translate(290, 0)">
      <text font-family="Inter, Arial, sans-serif" font-weight="800" font-size="18" fill="#818CF8" y="20">1500 zł</text>
      <text x="70" font-family="Inter, Arial, sans-serif" font-weight="600" font-size="18" fill="#FFFFFF" y="20">jednorazowo</text>
    </g>
    <g transform="translate(540, 0)">
      <text font-family="Inter, Arial, sans-serif" font-weight="800" font-size="18" fill="#818CF8" y="20">49 zł</text>
      <text x="58" font-family="Inter, Arial, sans-serif" font-weight="600" font-size="18" fill="#FFFFFF" y="20">miesięcznie, bez umowy</text>
    </g>
  </g>

  <!-- Domain at bottom right -->
  <text x="${W - 80}" y="${H - 50}" font-family="Inter, Arial, sans-serif" font-weight="500" font-size="20" fill="#64748B" text-anchor="end">
    seogrow.pl
  </text>
</svg>
`

  const png = await sharp(Buffer.from(svg))
    .png()
    .toBuffer()

  const outPath = path.join(ROOT, 'public', 'og-image.png')
  fs.writeFileSync(outPath, png)
  console.log(`OK: OG image principal → ${outPath} (${(png.length / 1024).toFixed(1)} KB)`)

  // Generar también versión webp (más liviana)
  const webp = await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toBuffer()
  const webpPath = path.join(ROOT, 'public', 'og-image.webp')
  fs.writeFileSync(webpPath, webp)
  console.log(`OK: OG image webp → ${webpPath} (${(webp.length / 1024).toFixed(1)} KB)`)
}

await generateMainOG()
console.log('Done')
