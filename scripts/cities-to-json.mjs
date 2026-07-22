// scripts/cities-to-json.mjs
// Convierte src/data/cities.ts a src/data/cities.schema.json
// para que seo-config.js (que es Node ESM puro) pueda usarlo sin TS.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src = path.resolve(__dirname, '..', 'src', 'data', 'cities.ts')
const out = path.resolve(__dirname, '..', 'src', 'data', 'cities.schema.json')

const text = fs.readFileSync(src, 'utf8')

// Encuentra todos los bloques { ... } nivel 1 que tengan slug (excluye el type definition)
const blockRe = /\{[^{}]*\}/g
let m
const records = []
while ((m = blockRe.exec(text)) !== null) {
  const block = m[0]
  if (!block.includes('slug:')) continue
  if (block.includes('slug: string')) continue  // skip type definition
  // Encuentra cada campo en el bloque
  const obj = {}
  const fieldRe = /(\w+):\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|-?\d+(?:\.\d+)?)/g
  let fm
  while ((fm = fieldRe.exec(block)) !== null) {
    const key = fm[1]
    let val = fm[2]
    if (val.startsWith('"') || val.startsWith("'")) {
      val = val.slice(1, -1)
    } else {
      val = Number(val)
    }
    obj[key] = val
  }
  if (obj.slug && obj.name) records.push(obj)
}

const grouped = {
  A: records.filter(r => r.tier === 'A'),
  B: records.filter(r => r.tier === 'B'),
  C: records.filter(r => r.tier === 'C'),
}

const byVoivodeship = {}
for (const r of records) {
  if (!byVoivodeship[r.voivodeship]) byVoivodeship[r.voivodeship] = []
  byVoivodeship[r.voivodeship].push(r.slug)
}

const outData = {
  total: records.length,
  cities: records,
  byTier: { A: grouped.A.length, B: grouped.B.length, C: grouped.C.length },
  byVoivodeship,
  voivodeships: Object.keys(byVoivodeship).sort(),
}

fs.writeFileSync(out, JSON.stringify(outData, null, 2))
console.log(`OK: ${records.length} ciudades → ${path.relative(process.cwd(), out)}`)
console.log(`  Tier A: ${grouped.A.length}, Tier B: ${grouped.B.length}, Tier C: ${grouped.C.length}`)
console.log(`  Voivodatos: ${Object.keys(byVoivodeship).length}`)
