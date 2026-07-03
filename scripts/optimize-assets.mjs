// scripts/optimize-assets.mjs — copy to tmp → process → atomic rename
import sharp from "sharp"
import { stat, copyFile, unlink, rename } from "node:fs/promises"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = join(__dirname, "..", "public")
const TMP_DIR = join(__dirname, "..", ".tmp-assets")

async function getSize(p) {
  try { return (await stat(p)).size } catch { return 0 }
}

async function smartCompress(inputPath, maxDim = 1920) {
  const before = await getSize(inputPath)
  if (before === 0) return { before: 0, after: 0, q: "skip" }

  // Step 1: copy source to tmp to avoid Windows file locks
  const basename = inputPath.split(/[\\/]/).pop()
  const tmpSource = join(TMP_DIR, `src-${Date.now()}-${basename}`)
  await copyFile(inputPath, tmpSource)

  // Step 2: read metadata from clean tmp
  const meta = await sharp(tmpSource).metadata()
  const needsResize = meta.width && meta.width > maxDim

  // Step 3: try multiple qualities, pick smallest
  let best = { q: 75, buf: null, len: Infinity }
  for (const q of [60, 68, 76]) {
    let p = sharp(tmpSource)
    if (needsResize) p = p.resize(maxDim, null, { fit: "inside" })
    const buf = await p.webp({ quality: q, effort: 6 }).toBuffer()
    if (buf.length < best.len) best = { q, buf, len: buf.length }
  }

  // Step 4: only write back if smaller
  if (best.buf && best.len < before) {
    const tmpOut = join(TMP_DIR, `out-${Date.now()}-${basename}`)
    await (await import("node:fs/promises")).writeFile(tmpOut, best.buf)
    // Atomic-ish: try rename, fallback to copyFile
    try {
      await unlink(inputPath)
      await rename(tmpOut, inputPath)
    } catch {
      await copyFile(tmpOut, inputPath)
      await unlink(tmpOut).catch(() => {})
    }
  }

  await unlink(tmpSource).catch(() => {})
  return { before, after: best.len < before ? best.len : before, q: best.q }
}

const TARGETS = [
  "copy.webp",
  "panel.webp",
  "automat.webp",
  "banner1.webp",
  "panel-1280.webp",
  "hero-960.webp",
  "hero-640.webp",
  "logo-320.webp",
  "logo-160.webp",
]

async function main() {
  // Ensure tmp dir exists
  const fs = await import("node:fs/promises")
  await fs.mkdir(TMP_DIR, { recursive: true }).catch(() => {})

  console.log("🗜️  Asset optimization (atomic)\n")
  const results = []
  for (const t of TARGETS) {
    const input = join(PUBLIC_DIR, t)
    try {
      const r = await smartCompress(input)
      if (r.before === 0) {
        console.log(`✗ ${t}: no encontrado`)
        continue
      }
      const saved = r.before - r.after
      const pct = r.before > 0 ? ((saved / r.before) * 100).toFixed(1) : "0"
      const sign = saved > 0 ? "↓" : "="
      console.log(`  ${t}: ${(r.before / 1024).toFixed(1)} KB → ${(r.after / 1024).toFixed(1)} KB (${sign}${pct}%, q=${r.q})`)
      results.push(r)
    } catch (e) {
      console.log(`✗ ${t}: ${e.message}`)
    }
  }
  const totalBefore = results.reduce((s, r) => s + r.before, 0)
  const totalAfter = results.reduce((s, r) => s + r.after, 0)
  const saved = totalBefore - totalAfter
  console.log(
    `\n📊 Total: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB — saved ${(saved / 1024).toFixed(0)} KB (${totalBefore > 0 ? ((saved / totalBefore) * 100).toFixed(1) : 0}%)`
  )
}

main().catch(console.error)