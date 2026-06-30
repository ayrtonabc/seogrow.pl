// scripts/clean-ui-orphans.mjs — find unused Chakra UI primitives
import { readdir, stat, readFile, unlink } from "node:fs/promises"
import { join, dirname, basename } from "node:path"
import { fileURLToPath } from "node:url"
import { execSync } from "node:child_process"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const UI_DIR = join(ROOT, "src", "components", "ui")

async function loadAllSource() {
  const out = []
  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true })
    for (const e of entries) {
      const p = join(dir, e.name)
      if (e.isDirectory()) {
        if (e.name === "ui") continue // skip the ui dir itself
        await walk(p)
      } else if (/\.(tsx?|jsx?)$/.test(e.name)) {
        out.push(await readFile(p, "utf8"))
      }
    }
  }
  await walk(join(ROOT, "src"))
  return out.join("\n")
}

async function main() {
  const allSource = await loadAllSource()
  const files = await readdir(UI_DIR)
  const orphans = []
  const used = []

  for (const f of files) {
    if (!/\.tsx$/.test(f)) continue
    const name = basename(f, ".tsx")
    // Skip provider (always needed)
    if (name === "provider") continue

    // Check if exported name is referenced elsewhere
    const exportPattern = new RegExp(`\\b${name}\\b`, "i")
    if (exportPattern.test(allSource)) {
      used.push(name)
    } else {
      orphans.push(f)
    }
  }

  console.log(`🧹 Chakra UI primitives — ${used.length} used, ${orphans.length} orphan\n`)
  if (orphans.length > 0) {
    console.log("Orphans:")
    for (const o of orphans) console.log(`  ${o}`)
    console.log("\nTrashing...")
    for (const o of orphans) {
      try {
        execSync(`mavis-trash "${join(UI_DIR, o)}"`, { stdio: "pipe" })
        console.log(`  ✗ ${o}`)
      } catch (e) {
        console.log(`  ! ${o}: ${e.message}`)
      }
    }
  }
  console.log("\n✓ Done.")
}

main().catch(console.error)