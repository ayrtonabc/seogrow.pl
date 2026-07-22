// scripts/cleanup-old-cities.mjs
// Elimina el bloque duplicado de 13 hubs Y las 99 ciudades antiguas de
// seo-config.js. Mantiene:
//   - El PRIMER set de 13 hubs (líneas 485-654)
//   - Las 20 service pages que vienen después (/cms-seo, /sklep-online, etc.)
//   - Las Tier 1, Tier 2, blog posts
//
// Después de este script hay que inyectar las 97 ciudades nuevas después
// de los 13 hubs (ver inject-city-entries.mjs).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const seoConfigPath = path.resolve(__dirname, '..', 'scripts', 'seo-config.js')

let seoConfig = fs.readFileSync(seoConfigPath, 'utf8')

// Marcadores:
//   línea 484: const CONTENT_ROUTES = [
//   línea 485: // ─── 13 hubs regionales (1ra, REAL)
//   líneas 487-654: 13 hubs
//   línea 656: // ─── 13 hubs regionales (2da, DUPLICADA — a eliminar)
//   líneas 658-825: 13 hubs DUPLICADOS (a eliminar)
//   línea 827: // ─── 99 páginas de ciudad (a eliminar)
//   líneas 829-2115: 99 ciudades VIEJAS (a eliminar)
//   línea 2117: route: '/cms-seo' (PRIMER service page, MANTENER)

// Encontrar inicio del bloque a eliminar: SEGUNDO marker de hubs
const hubMarker = '// ─── 13 hubs regionales'
const hubOccurrences = []
let searchFrom = 0
while (true) {
  const idx = seoConfig.indexOf(hubMarker, searchFrom)
  if (idx === -1) break
  hubOccurrences.push(idx)
  searchFrom = idx + hubMarker.length
}

if (hubOccurrences.length !== 2) {
  console.error(`ERROR: se esperaban 2 markers de hubs, hay ${hubOccurrences.length}`)
  process.exit(1)
}

const blockStart = hubOccurrences[1]  // segunda ocurrencia

// Encontrar final del bloque: cierre `}` justo antes de la primera service page
const firstServiceMarker = "route: '/cms-seo'"
const firstServiceIdx = seoConfig.indexOf(firstServiceMarker, blockStart)
if (firstServiceIdx === -1) {
  console.error('ERROR: no se encontró la primera service page (/cms-seo)')
  process.exit(1)
}

// Buscar el `}` que cierra la última ciudad, justo antes de firstServiceIdx
let blockEnd = seoConfig.lastIndexOf('}', firstServiceIdx)
if (blockEnd === -1 || blockEnd < blockStart) {
  console.error('ERROR: no se encontró cierre del bloque')
  process.exit(1)
}
// blockEnd apunta al `}` final. Avanzamos uno más para incluir el newline.
blockEnd += 1

// Sanity check: el bloque debe contener 13 hubs + 99 ciudades = 112 entries
const blockContent = seoConfig.slice(blockStart, blockEnd)
const routeCount = (blockContent.match(/^\s*route:/gm) || []).length
console.log(`Bloque a eliminar: ${routeCount} entries`)

if (routeCount < 110 || routeCount > 115) {
  console.error(`ERROR: el bloque tiene ${routeCount} routes, esperado 112 (13+99). Abortando.`)
  process.exit(1)
}

// Construir el archivo limpio
const before = seoConfig.slice(0, blockStart)
const after = seoConfig.slice(blockEnd)
const cleaned = before + after

fs.writeFileSync(seoConfigPath, cleaned)
console.log(`OK: 13 hubs duplicados + 99 ciudades antiguas eliminadas`)
console.log(`  Antes: ${seoConfig.length} bytes`)
console.log(`  Después: ${cleaned.length} bytes`)
console.log(`  Diff: -${seoConfig.length - cleaned.length} bytes`)
