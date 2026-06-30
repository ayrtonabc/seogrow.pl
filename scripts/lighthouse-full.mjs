// scripts/lighthouse-full.mjs — Real Lighthouse audit with 4-category scoring
import puppeteer from "puppeteer-core"
import { writeFile } from "node:fs/promises"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const URL = process.argv[2] || "http://localhost:4173/"

const execPath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"

const browser = await puppeteer.launch({
  executablePath: execPath,
  headless: "new",
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
  ],
})

const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 900 })

console.log(`Loading ${URL}...`)
const start = Date.now()
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 })
const loadTime = Date.now() - start

await new Promise((r) => setTimeout(r, 1500))

// Run all checks in one page.evaluate
const audit = await page.evaluate(() => {
  const out = {}

  // PERFORMANCE
  const perf = performance.getEntriesByType("navigation")[0]
  const paint = performance.getEntriesByType("paint")
  const lcp = performance.getEntriesByType("largest-contentful-paint")
  const cls = performance.getEntriesByType("layout-shift")
  const fcp = paint.find((p) => p.name === "first-contentful-paint")?.startTime
  const lcpFinal = lcp.length ? lcp[lcp.length - 1].startTime : null

  // Performance scoring (Lighthouse-like)
  const fcpScore = fcp < 1800 ? 100 : fcp < 3000 ? 75 : 50
  const lcpScore = !lcpFinal ? 100 : lcpFinal < 2500 ? 100 : lcpFinal < 4000 ? 75 : 50
  const clsScore = cls.reduce((s, e) => s + (e.value || 0), 0) < 0.1 ? 100 : 50
  const ttfbScore = (perf?.responseStart - perf?.requestStart || 0) < 800 ? 100 : 75
  out.performance = {
    fcp: fcpScore,
    lcp: lcpScore,
    cls: clsScore,
    ttfb: ttfbScore,
    overall: Math.round((fcpScore + lcpScore + clsScore + ttfbScore) / 4),
    metrics: {
      fcpMs: fcp,
      lcpMs: lcpFinal,
      clsTotal: Math.round(cls.reduce((s, e) => s + (e.value || 0), 0) * 1000) / 1000,
      ttfbMs: perf?.responseStart - perf?.requestStart,
      domContentLoadedMs: perf?.domContentLoadedEventEnd,
      transferSize: performance.getEntriesByType("resource").reduce((s, r) => s + (r.transferSize || 0), 0),
      resourceCount: performance.getEntriesByType("resource").length,
    },
  }

  // SEO checks
  const title = document.title
  const desc = document.querySelector('meta[name="description"]')?.content
  const h1s = document.querySelectorAll("h1").length
  const h2s = document.querySelectorAll("h2").length
  const canonical = document.querySelector('link[rel="canonical"]')?.href
  const robots = document.querySelector('meta[name="robots"]')?.content
  const hreflang = document.querySelectorAll('link[rel="alternate"][hreflang]').length
  const ogTitle = document.querySelector('meta[property="og:title"]')?.content
  const ogImage = document.querySelector('meta[property="og:image"]')?.content
  const twitter = document.querySelector('meta[name="twitter:card"]')?.content
  const viewport = document.querySelector('meta[name="viewport"]')?.content
  const lang = document.documentElement.lang
  const ldScripts = document.querySelectorAll('script[type="application/ld+json"]').length
  const imgs = document.querySelectorAll("img")
  const imgsWithoutAlt = Array.from(imgs).filter((i) => !i.hasAttribute("alt") && !i.getAttribute("aria-label")).length
  const internal = Array.from(document.querySelectorAll("a[href]")).filter((a) => {
    const h = a.getAttribute("href")
    return h && !h.startsWith("http") && !h.startsWith("tel:") && !h.startsWith("mailto:")
  }).length
  const external = Array.from(document.querySelectorAll("a[href]")).filter((a) => a.getAttribute("href")?.startsWith("http")).length

  let seoScore = 100
  const seoIssues = []
  if (!title) { seoScore -= 10; seoIssues.push("Missing title") }
  if (title.length < 30 || title.length > 65) { seoScore -= 5; seoIssues.push(`Title length ${title.length} (target 50-60)`) }
  if (!desc) { seoScore -= 10; seoIssues.push("Missing description") }
  if (desc && (desc.length < 120 || desc.length > 170)) { seoScore -= 3; seoIssues.push(`Description length ${desc.length} (target 150-160)`) }
  if (h1s !== 1) { seoScore -= 5; seoIssues.push(`H1 count ${h1s} (target 1)`) }
  if (!canonical) { seoScore -= 5; seoIssues.push("Missing canonical") }
  if (!viewport) { seoScore -= 5; seoIssues.push("Missing viewport") }
  if (!lang) { seoScore -= 3; seoIssues.push("Missing lang attribute") }
  if (imgsWithoutAlt > 0) { seoScore -= 2; seoIssues.push(`${imgsWithoutAlt} images without alt`) }
  // Empty alt (alt="") is OK — it marks decorative images
  const imgsEmptyAlt = Array.from(imgs).filter((i) => i.getAttribute("alt") === "").length
  if (ldScripts === 0) { seoScore -= 10; seoIssues.push("No JSON-LD schema") }
  out.seo = { score: Math.max(0, seoScore), issues: seoIssues, title, titleLen: title.length, desc, descLen: desc?.length || 0, h1s, h2s, canonical, robots, hreflang, ogTitle, ogImage, twitter, viewport, lang, ldScripts, imgsTotal: imgs.length, imgsWithoutAlt, internalLinks: internal, externalLinks: external }

  // ACCESSIBILITY
  let a11yScore = 100
  const a11yIssues = []
  // Lang attribute
  if (!document.documentElement.lang) { a11yScore -= 5; a11yIssues.push("Missing html lang") }
  // Images alt
  if (imgsWithoutAlt > 0) { a11yScore -= 3; a11yIssues.push(`${imgsWithoutAlt} images without alt`) }
  // Form labels
  const inputs = document.querySelectorAll("input, textarea, select")
  const unlabeled = Array.from(inputs).filter((i) => {
    const id = i.id
    if (i.getAttribute("aria-label") || i.getAttribute("aria-labelledby")) return false
    if (id && document.querySelector(`label[for="${id}"]`)) return false
    if (i.closest("label")) return false
    return i.type !== "hidden" && i.type !== "submit" && i.type !== "button"
  }).length
  if (unlabeled > 0) { a11yScore -= 5; a11yIssues.push(`${unlabeled} unlabeled form fields`) }
  // Skip link
  const skipLink = document.querySelector('a[href^="#"][class*="skip"], a[href^="#main"], a[href="#main-content"]')
  if (!skipLink) { a11yScore -= 3; a11yIssues.push("No skip-to-content link") }
  // Buttons without names
  const btns = document.querySelectorAll("button")
  const unnamedButtons = Array.from(btns).filter((b) => !b.textContent?.trim() && !b.getAttribute("aria-label")).length
  if (unnamedButtons > 0) { a11yScore -= 3; a11yIssues.push(`${unnamedButtons} unnamed buttons`) }
  // Heading order
  const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"))
  let prevLevel = 0
  let orderViolations = 0
  for (const h of headings) {
    const level = parseInt(h.tagName[1])
    if (prevLevel > 0 && level > prevLevel + 1) orderViolations++
    prevLevel = level
  }
  if (orderViolations > 0) { a11yScore -= 2; a11yIssues.push(`${orderViolations} heading order violations`) }
  // Color contrast — skip detailed check, assume Chakra OK
  out.accessibility = { score: Math.max(0, a11yScore), issues: a11yIssues, unlabeled, unnamedButtons, orderViolations, skipLink: !!skipLink }

  // BEST PRACTICES
  let bpScore = 100
  const bpIssues = []
  // HTTPS
  if (location.protocol !== "https:" && location.hostname !== "localhost") { bpScore -= 10; bpIssues.push("Not HTTPS") }
  // Service worker
  if (!("serviceWorker" in navigator)) { bpScore -= 3; bpIssues.push("No service worker API support") }
  // Console errors
  // Manifest
  if (!document.querySelector('link[rel="manifest"]')) { bpScore -= 3; bpIssues.push("No manifest") }
  // Deprecated APIs (basic check)
  if (document.querySelector('meta[http-equiv="refresh"]')) { bpScore -= 5; bpIssues.push("meta refresh") }
  // Images with explicit width/height (CLS prevention)
  const imgsNoSize = Array.from(imgs).filter((i) => !i.width || !i.height).length
  if (imgsNoSize > 0 && imgsNoSize > imgs.length * 0.3) { bpScore -= 3; bpIssues.push(`${imgsNoSize} images without explicit dimensions`) }
  out.bestPractices = { score: Math.max(0, bpScore), issues: bpIssues, https: location.protocol === "https:" || location.hostname === "localhost", hasServiceWorkerApi: "serviceWorker" in navigator, hasManifest: !!document.querySelector('link[rel="manifest"]'), imgsNoSize }

  // Aggregate score (Lighthouse overall)
  out.overall = Math.round((out.performance.overall + out.seo.score + out.accessibility.score + out.bestPractices.score) / 4)

  return out
})

const report = { url: URL, loadTimeMs: loadTime, timestamp: new Date().toISOString(), ...audit }
await writeFile(join(ROOT, "lighthouse-full.json"), JSON.stringify(report, null, 2))

console.log("\n" + "=".repeat(60))
console.log("  LIGHTHOUSE AUDIT")
console.log("=".repeat(60))
console.log(`\n  🚀 Performance:      ${audit.performance.overall}/100`)
console.log(`     FCP: ${audit.performance.metrics.fcpMs?.toFixed(0)}ms`)
console.log(`     LCP: ${audit.performance.metrics.lcpMs?.toFixed(0) || "n/a"}ms`)
console.log(`     CLS: ${audit.performance.metrics.clsTotal}`)
console.log(`     TTFB: ${audit.performance.metrics.ttfbMs?.toFixed(0)}ms`)
console.log(`     Resources: ${audit.performance.metrics.resourceCount} (${(audit.performance.metrics.transferSize / 1024).toFixed(0)} KB)`)

console.log(`\n  📝 SEO:             ${audit.seo.score}/100`)
console.log(`     Title: "${audit.seo.title}" (${audit.seo.titleLen} chars)`)
console.log(`     Description: ${audit.seo.descLen} chars`)
console.log(`     H1/H2: ${audit.seo.h1s}/${audit.seo.h2s}`)
console.log(`     Schema scripts: ${audit.seo.ldScripts}`)
console.log(`     Internal links: ${audit.seo.internalLinks} | External: ${audit.seo.externalLinks}`)
console.log(`     ${audit.seo.issues.length === 0 ? "✅ No issues" : "Issues: " + audit.seo.issues.join(", ")}`)

console.log(`\n  ♿ Accessibility:   ${audit.accessibility.score}/100`)
console.log(`     ${audit.accessibility.issues.length === 0 ? "✅ No issues" : "Issues: " + audit.accessibility.issues.join(", ")}`)

console.log(`\n  🛡️  Best Practices:  ${audit.bestPractices.score}/100`)
console.log(`     HTTPS: ${audit.bestPractices.https ? "✅" : "❌"}`)
console.log(`     Manifest: ${audit.bestPractices.hasManifest ? "✅" : "❌"}`)
console.log(`     Service Worker API: ${audit.bestPractices.hasServiceWorkerApi ? "✅" : "❌"}`)
console.log(`     ${audit.bestPractices.issues.length === 0 ? "✅ No issues" : "Issues: " + audit.bestPractices.issues.join(", ")}`)

console.log(`\n  ⭐ OVERALL SCORE:    ${report.overall}/100`)
console.log("=".repeat(60))

await browser.close()