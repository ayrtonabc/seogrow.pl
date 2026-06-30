// scripts/build-faq-schema.mjs — Generate FAQPage JSON-LD from src/data/faqs.ts
import { readFile, writeFile } from "node:fs/promises"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const FAQS_PATH = join(ROOT, "src/data/faqs.ts")
const OUT_PATH = join(ROOT, "src/data/faqs.schema.json")

async function main() {
  const src = await readFile(FAQS_PATH, "utf8")

  // Parse the file: extract question and answer strings from each object
  // Pattern: { question: "...", answer: "...", category: "..." }
  const faqs = []
  const blockRe = /\{[\s\S]*?question:\s*"([^"]+)"[\s\S]*?answer:\s*"((?:[^"\\]|\\.)*)"/g
  let m
  while ((m = blockRe.exec(src)) !== null) {
    faqs.push({
      "@type": "Question",
      name: m[1],
      acceptedAnswer: {
        "@type": "Answer",
        text: m[2].replace(/\\"/g, '"'),
      },
    })
  }

  if (faqs.length === 0) {
    throw new Error("No FAQs parsed from faqs.ts — check pattern")
  }

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://seogrow.pl/#faq",
      mainEntity: faqs,
    },
  ]

  await writeFile(OUT_PATH, JSON.stringify(schema, null, 2), "utf8")
  console.log(`✓ Generated ${faqs.length} FAQ entries → ${OUT_PATH}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})