// scripts/city-imports.mjs
// Genera src/data/cityRouteImports.ts con 99 lazy imports + array de <Route> JSX.
// Centraliza el setup de las 99 paginas de ciudad para no inflar App.tsx.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schemaPath = path.resolve(__dirname, '..', 'src', 'data', 'cities.schema.json')
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'))

const lines = []
lines.push('// src/data/cityRouteImports.tsx')
lines.push('// Generado por scripts/city-imports.mjs — 99 paginas de ciudad.')
lines.push('// Centraliza los lazy imports para que App.tsx no tenga kilometros de codigo.')
lines.push('')
lines.push('import { lazy } from "react"')
lines.push('')
lines.push('// Lazy imports')
lines.push('')
for (const c of schema.cities) {
  const pascal = c.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
  const compName = `StronaInternetowa${pascal}Page`
  // Mapear a un module path — todos en CityPages.tsx
  lines.push(`export const ${compName} = lazy(() =>`)
  lines.push(`  import("../pages/CityPages").then((m) => ({ default: m.${compName} })),`)
  lines.push(')')
  lines.push('')
}

// Generar array de route paths
lines.push('// Array de route paths para App.tsx')
lines.push('export const cityRoutePaths: { path: string; component: React.ComponentType }[] = [')
for (const c of schema.cities) {
  const pascal = c.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
  const compName = `StronaInternetowa${pascal}Page`
  lines.push(`  { path: "/${c.slug}", component: ${compName} },`)
}
lines.push(']')
lines.push('')

const out = lines.join('\n')
const outPath = path.resolve(__dirname, '..', 'src', 'data', 'cityRouteImports.tsx')
fs.writeFileSync(outPath, out)
console.log(`OK: ${schema.cities.length} ciudades → ${path.relative(process.cwd(), outPath)}`)
