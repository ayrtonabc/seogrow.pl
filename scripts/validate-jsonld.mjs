// quick JSON-LD validator
import fs from "node:fs";

const s = fs.readFileSync("index.html", "utf8");
const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
const matches = [...s.matchAll(re)];
console.log("JSON-LD blocks:", matches.length);
matches.forEach((m, i) => {
  try {
    const parsed = JSON.parse(m[1]);
    const entities = parsed["@graph"] || [parsed];
    console.log(`  Block ${i} -> valid, ${entities.length} entities, ${(m[1].length / 1024).toFixed(1)} KB`);
    entities.forEach((e) => console.log("    -", e["@type"]));
  } catch (e) {
    console.error(`  Block ${i} -> INVALID JSON:`, e.message);
  }
});
