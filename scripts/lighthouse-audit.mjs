// scripts/lighthouse-audit.mjs — Real Lighthouse audit via Puppeteer
import puppeteer from "puppeteer-core"
import { writeFile } from "node:fs/promises"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const URL = process.argv[2] || "http://localhost:4173/"
const OUT = process.argv[3] || join(ROOT, "lighthouse-report.json")

async function main() {
  // Try to find Chrome
  const possiblePaths = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    process.env.CHROME_PATH,
  ].filter(Boolean)

  let executablePath
  for (const p of possiblePaths) {
    try {
      const { statSync } = await import("node:fs")
      statSync(p)
      executablePath = p
      break
    } catch {}
  }

  if (!executablePath) {
    console.log("Chrome not found, falling back to direct evaluation")
    await fallbackEval()
    return
  }

  console.log(`Using Chrome at: ${executablePath}`)
  const browser = await puppeteer.launch({
    executablePath,
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 900 })

    console.log(`Loading ${URL}...`)
    const start = Date.now()
    await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 })
    const loadTime = Date.now() - start

    // Wait a bit for any async content
    await new Promise((r) => setTimeout(r, 1000))

    // Collect performance metrics
    const metrics = await page.evaluate(() => {
      const perf = performance.getEntriesByType("navigation")[0]
      const paint = performance.getEntriesByType("paint")
      const lcp = performance.getEntriesByType("largest-contentful-paint")
      const fid = performance.getEntriesByType("first-input")
      const cls = performance.getEntriesByType("layout-shift")

      return {
        // Navigation Timing
        domContentLoaded: Math.round(perf?.domContentLoadedEventEnd || 0),
        loadComplete: Math.round(perf?.loadEventEnd || 0),
        ttfb: Math.round(perf?.responseStart - perf?.requestStart || 0),
        // Paint Timing
        fp: paint.find((p) => p.name === "first-paint")?.startTime,
        fcp: paint.find((p) => p.name === "first-contentful-paint")?.startTime,
        // LCP
        lcp: lcp.length ? lcp[lcp.length - 1].startTime : null,
        // CLS
        cls: cls.reduce((sum, e) => sum + (e.value || 0), 0),
        // Resources
        resources: performance.getEntriesByType("resource").length,
        transferSize: performance
          .getEntriesByType("resource")
          .reduce((sum, r) => sum + (r.transferSize || 0), 0),
      }
    })

    // Collect SEO/Schema info
    const seo = await page.evaluate(() => {
      const ldJsonScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
      const schemas = ldJsonScripts.map((s) => {
        try {
          const data = JSON.parse(s.textContent)
          return data["@graph"] || data
        } catch {
          return null
        }
      }).filter(Boolean)

      const allTypes = new Set()
      schemas.forEach((s) => {
        if (Array.isArray(s)) s.forEach((item) => item["@type"] && allTypes.add(item["@type"]))
        else if (s["@type"]) allTypes.add(s["@type"])
      })

      return {
        title: document.title,
        titleLength: document.title.length,
        description: document.querySelector('meta[name="description"]')?.content,
        descriptionLength: document.querySelector('meta[name="description"]')?.content?.length || 0,
        h1Count: document.querySelectorAll("h1").length,
        h1Text: Array.from(document.querySelectorAll("h1")).map((h) => h.textContent),
        h2Count: document.querySelectorAll("h2").length,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        ogTitle: document.querySelector('meta[property="og:title"]')?.content,
        ogImage: document.querySelector('meta[property="og:image"]')?.content,
        twitterCard: document.querySelector('meta[name="twitter:card"]')?.content,
        schemaTypes: Array.from(allTypes),
        schemaCount: schemas.length,
        hasManifest: !!document.querySelector('link[rel="manifest"]'),
        hasServiceWorker: "serviceWorker" in navigator,
        imagesWithoutAlt: Array.from(document.querySelectorAll("img")).filter(
          (img) => !img.alt && !img.getAttribute("aria-label")
        ).length,
        imagesTotal: document.querySelectorAll("img").length,
        internalLinks: Array.from(document.querySelectorAll("a[href]")).filter((a) => {
          const href = a.getAttribute("href")
          return href && !href.startsWith("http") && !href.startsWith("tel:") && !href.startsWith("mailto:")
        }).length,
        externalLinks: Array.from(document.querySelectorAll("a[href]")).filter((a) =>
          a.getAttribute("href")?.startsWith("http")
        ).length,
      }
    })

    const report = {
      url: URL,
      timestamp: new Date().toISOString(),
      loadTimeMs: loadTime,
      metrics,
      seo,
    }

    await writeFile(OUT, JSON.stringify(report, null, 2))
    console.log(`\n📊 Audit saved to: ${OUT}`)
    console.log(`\n🚀 Performance:`)
    console.log(`  FCP: ${metrics.fcp?.toFixed(0)}ms`)
    console.log(`  LCP: ${metrics.lcp?.toFixed(0)}ms`)
    console.log(`  TTFB: ${metrics.ttfb?.toFixed(0)}ms`)
    console.log(`  CLS: ${metrics.cls?.toFixed(3)}`)
    console.log(`  Load: ${loadTime}ms`)
    console.log(`\n📝 SEO:`)
    console.log(`  Title (${seo.titleLength} chars): ${seo.title}`)
    console.log(`  Description (${seo.descriptionLength} chars)`)
    console.log(`  H1s: ${seo.h1Count} | H2s: ${seo.h2Count}`)
    console.log(`  Schema types: ${seo.schemaTypes.join(", ")}`)
    console.log(`  Images without alt: ${seo.imagesWithoutAlt}/${seo.imagesTotal}`)
    console.log(`  Internal links: ${seo.internalLinks}`)
  } finally {
    await browser.close()
  }
}

async function fallbackEval() {
  console.log("Cannot run without Chrome. Skipping Lighthouse.")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})