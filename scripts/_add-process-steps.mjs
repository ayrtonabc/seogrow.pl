// scripts/_add-process-steps.mjs
// Reemplaza el bloque "Jak wygląda współpraca" en las 4 ciudades Tier 1
// para usar processSteps en lugar de image + highlights.
// Como el imageAlt varía por ciudad, uso un patrón regex.

import { readFileSync, writeFileSync } from "node:fs"

const FILE = "src/pages/CityPagesTier1.tsx"
let src = readFileSync(FILE, "utf8")

// Regex: desde el { del bloque hasta el }, de cierre (después de los highlights)
const RE = /\{\s*\n\s*heading:\s*"Jak wygląda współpraca krok po kroku",[\s\S]*?Strona zostaje Twoja na zawsze",\s*\n\s*\],\s*\n\s*\},/g

const newBlock = `{
        heading: "Jak wygląda współpraca krok po kroku",
        content: "Najpierw rozmawiamy przez 15 minut — poznajemy Twoją firmę, branżę i to, co chcesz osiągnąć. Potem przygotowujemy stronę pod Twoje potrzeby. Po Twojej akceptacji publikujemy. Pięć dni roboczych, bez ankiet, bez czekania na wyceny od trzech agencji.",
        processSteps: [
          { step: "01", title: "Rozmowa 15 minut", description: "Poznajemy Twoją firmę, branżę i cele. Bez ankiet, bez czekania na wyceny." },
          { step: "02", title: "Strona gotowa w 5 dni", description: "Przygotowujemy stronę pod Twoje potrzeby i specyfikę Twojego rynku." },
          { step: "03", title: "Akceptacja z telefonu", description: "Akceptujesz jednym kliknięciem. Bez druku, bez papieru, bez biurokracji." },
          { step: "04", title: "Strona zostaje Twoja", description: "Strona jest Twoja na zawsze. Wsparcie po polsku, bez umowy, bez prowizji." },
        ],
      },`

let replaced = 0
let match
while ((match = RE.exec(src)) !== null) {
  src = src.replace(match[0], newBlock)
  replaced++
  RE.lastIndex = 0 // reset porque mutamos el string
}

writeFileSync(FILE, src, "utf8")
console.log(`✅ ${replaced} bloques reemplazados`)

