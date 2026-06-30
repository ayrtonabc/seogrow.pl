// scripts/clean-orphans.mjs — finds and trashes orphan files in public/
import { readdir, stat, readFile, unlink } from "node:fs/promises"
import { join, dirname, relative } from "node:path"
import { fileURLToPath } from "node:url"
import { execSync } from "node:child_process"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const PUBLIC_DIR = join(ROOT, "public")
const SRC_DIR = join(ROOT, "src")

// Get all source files content (one big string for fast matching)
async function loadAllSource() {
  const out = []
  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true })
    for (const e of entries) {
      const p = join(dir, e.name)
      if (e.isDirectory()) await walk(p)
      else if (/\.(tsx?|jsx?)$/.test(e.name)) {
        out.push(await readFile(p, "utf8"))
      }
    }
  }
  await walk(SRC_DIR)
  // Also include index.html
  try {
    out.push(await readFile(join(ROOT, "index.html"), "utf8"))
  } catch {}
  return out.join("\n")
}

async function listAssets(dir, base = "") {
  const out = []
  const entries = await readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    if (e.name === ".git" || e.name === "node_modules" || e.name === "clientes" || e.name === "ui") continue
    const p = join(dir, e.name)
    if (e.isDirectory()) {
      out.push(...(await listAssets(p, join(base, e.name))))
    } else {
      out.push({
        path: join(base, e.name).replace(/\\/g, "/"),
        full: p,
      })
    }
  }
  return out
}

const MIN_SIZE_KB = 5

async function main() {
  console.log("🧹 Orphan asset scanner\n")
  const allSource = await loadAllSource()
  const assets = await listAssets(PUBLIC_DIR)

  const orphans = []
  for (const asset of assets) {
    const sizeKB = (await stat(asset.full)).size / 1024
    if (sizeKB < MIN_SIZE_KB) continue // skip tiny files (favicons, etc.)
    const url = "/" + asset.path
    if (!allSource.includes(url)) {
      orphans.push({ ...asset, sizeKB })
    }
  }

  if (orphans.length === 0) {
    console.log("✓ No orphan assets found.")
    return
  }

  console.log(`Found ${orphans.length} orphan assets:\n`)
  for (const o of orphans) {
    console.log(`  /${o.path} (${o.sizeKB.toFixed(1)} KB)`)
  }

  // Trash each
  for (const o of orphans) {
    try {
      execSync(`mavis-trash "${o.full}"`, { stdio: "pipe" })
      console.log(`  ✗ trashed /${o.path}`)
    } catch (e) {
      console.log(`  ! failed to trash /${o.path}: ${e.message}`)
    }
  }
  console.log(`\n✓ Done. ${orphans.length} orphans cleaned.`)
}

main().catch(console.error)