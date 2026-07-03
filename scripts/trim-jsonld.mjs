// scripts/trim-jsonld.mjs — poda el JSON-LD inline para reducir TTFB y peso
import fs from "node:fs";

const FILE = "index.html";
const REMOVABLE_TYPES = new Set([
  "BreadcrumbList", // landing page tiene solo "Start" — inútil
  "ItemList", // duplica lo que el usuario ve en la página
  "Course", // landing no vende cursos
  "SiteNavigationElement", // sitemap.xml ya cubre esto
]);

const s = fs.readFileSync(FILE, "utf8");
const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
let totalBefore = 0;
let totalAfter = 0;

const out = s.replace(re, (full, json) => {
  totalBefore += full.length;
  try {
    const parsed = JSON.parse(json);
    if (!Array.isArray(parsed["@graph"])) return full;
    const before = parsed["@graph"].length;
    parsed["@graph"] = parsed["@graph"].filter((e) => !REMOVABLE_TYPES.has(e["@type"]));
    const after = parsed["@graph"].length;
    if (after === before) return full;
    const newJson = JSON.stringify(parsed);
    const replacement = `<script type="application/ld+json">${newJson}</script>`;
    totalAfter += replacement.length;
    console.log(`  Trimmed @graph: ${before} → ${after} entities (saved ${(full.length - replacement.length)} bytes)`);
    return replacement;
  } catch (e) {
    console.error("  Could not parse JSON-LD block:", e.message);
    return full;
  }
});

fs.writeFileSync(FILE, out);
console.log(`\nTotal: ${totalBefore} → ${totalAfter} bytes (saved ${totalBefore - totalAfter} bytes, ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);
