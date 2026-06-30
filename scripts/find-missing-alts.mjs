// scripts/find-missing-alts.mjs — list images without alt
import { readdir, readFile } from "node:fs/promises"
import { join } from "node:path"

async function walk(dir) {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === "node_modules" || e.name === "dist" || e.name === ".git") continue
      out.push(...(await walk(p)))
    } else if (e.name.endsWith(".tsx") || e.name.endsWith(".jsx")) {
      out.push(p)
    }
  }
  return out
}

const files = await walk("./src")
const imgs = []
for (const f of files) {
  const src = await readFile(f, "utf8")
  const lines = src.split("\n")
  lines.forEach((line, i) => {
    if ((line.includes("<Image") || line.includes("<img ")) && line.includes("src=") && !line.includes("alt=") && !line.includes("aria-label=")) {
      imgs.push({ file: f.replace(/\\/g, "/").split("/src/")[1], line: i + 1, text: line.trim().slice(0, 130) })
    }
  })
}

console.log(`Found ${imgs.length} images without alt text:\n`)
for (const i of imgs) {
  console.log(`  ${i.file}:${i.line}`)
  console.log(`    ${i.text}`)
}