// scripts/check-rendered-alts.mjs — check the actual rendered HTML
import puppeteer from "puppeteer-core"
import { writeFile } from "node:fs/promises"

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
})
const page = await browser.newPage()
await page.goto("http://localhost:4173/", { waitUntil: "networkidle0" })
await new Promise((r) => setTimeout(r, 1500))

const imgs = await page.evaluate(() => {
  return Array.from(document.querySelectorAll("img")).map((img) => ({
    src: img.src.replace(location.origin, ""),
    alt: img.alt,
    ariaLabel: img.getAttribute("aria-label"),
    role: img.getAttribute("role"),
    width: img.naturalWidth,
    height: img.naturalHeight,
  }))
})

console.log(`Found ${imgs.length} images:\n`)
const without = imgs.filter((i) => !i.alt && !i.ariaLabel)
console.log(`Without alt/aria-label: ${without.length}\n`)
for (const i of without) {
  console.log(`  ${i.src}`)
}
console.log("\nAll images:")
for (const i of imgs) {
  console.log(`  ${i.src} | alt="${i.alt}" | aria="${i.ariaLabel}"`)
}

await browser.close()