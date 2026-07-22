// scripts/inject-city-entries.mjs
// Inyecta las 99 city entries dentro del array CONTENT_ROUTES en seo-config.js

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const seoConfigPath = path.resolve(__dirname, '..', 'scripts', 'seo-config.js')
const entriesPath = path.resolve(__dirname, '..', 'src', 'data', 'citySeoEntries.txt')

const seoConfig = fs.readFileSync(seoConfigPath, 'utf8')
const entries = fs.readFileSync(entriesPath, 'utf8')

// Punto de inyección: justo después de `const CONTENT_ROUTES = [`
const marker = 'const CONTENT_ROUTES = ['
const idx = seoConfig.indexOf(marker)
if (idx === -1) {
  console.error('ERROR: no se encontró el marcador')
  process.exit(1)
}

// Encontrar el final del "const CONTENT_ROUTES = [" (después del `[`)
const insertPos = idx + marker.length
const before = seoConfig.slice(0, insertPos)
const after = seoConfig.slice(insertPos)

// Asegurar que entries termina con coma + newline
let entriesToInsert = entries.trim()
if (!entriesToInsert.endsWith(',')) {
  entriesToInsert += ','
}

const newContent = before + '\n' + entriesToInsert + '\n' + after
fs.writeFileSync(seoConfigPath, newContent)

console.log(`OK: 99 city entries inyectadas en seo-config.js`)
console.log(`  Antes: ${seoConfig.length} bytes`)
console.log(`  Después: ${newContent.length} bytes`)
console.log(`  Diff: +${newContent.length - seoConfig.length} bytes`)
