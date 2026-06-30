// scripts/inject-faq-schema.mjs — Inject generated FAQPage schema into index.html
import { readFile, writeFile } from "node:fs/promises"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const INDEX_PATH = join(ROOT, "index.html")
const SCHEMA_PATH = join(ROOT, "src/data/faqs.schema.json")

async function main() {
  const schema = JSON.parse(await readFile(SCHEMA_PATH, "utf8"))
  const html = await readFile(INDEX_PATH, "utf8")

  // Find the FAQPage @type and replace the full object inside its array
  // The structure is: [..., {"@type":"FAQPage",...,"mainEntity":[...]}, ...]
  // We use a marker-based approach: find the FAQPage object boundaries
  const startMarker = '"@type": "FAQPage"'
  const startIdx = html.indexOf(startMarker)
  if (startIdx === -1) {
    console.warn("⚠ FAQPage marker not found in index.html — skipping injection")
    return
  }

  // Find the enclosing object boundaries: walk back to find the opening { and forward to find the matching close
  let objStart = startIdx
  while (objStart > 0 && html[objStart] !== "{") objStart--
  if (html[objStart] !== "{") {
    throw new Error("Could not find FAQPage object start")
  }

  // Find matching close brace: count depth
  let depth = 0
  let objEnd = -1
  for (let i = objStart; i < html.length; i++) {
    const ch = html[i]
    if (ch === "{") depth++
    else if (ch === "}") {
      depth--
      if (depth === 0) {
        objEnd = i + 1
        break
      }
    }
  }
  if (objEnd === -1) throw new Error("Could not find FAQPage object end")

  // Build replacement: compact JSON of the first (and only) element in the array
  const replacement = JSON.stringify(schema[0])

  const updated = html.slice(0, objStart) + replacement + html.slice(objEnd)
  await writeFile(INDEX_PATH, updated, "utf8")
  console.log(`✓ Injected FAQPage schema (${schema[0].mainEntity.length} entries) into index.html`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})