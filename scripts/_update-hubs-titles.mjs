// scripts/_update-hubs-titles.mjs
// Reescribe title y description de los 13 voivodatos en seo-config.js
// con copy orientado a venta (en lugar de SEO-puro).

import { readFileSync, writeFileSync } from "node:fs"

const FILE = "scripts/seo-config.js"
let src = readFileSync(FILE, "utf8")

// Voivodeship slug → display name (Polish correct inflection)
const hubs = [
  { route: "/warminsko-mazurskie", name: "Warmińsko-Mazurskie", count: 18 },
  { route: "/pomorskie", name: "Pomorskie", count: 5 },
  { route: "/wielkopolskie", name: "Wielkopolskie", count: 7 },
  { route: "/podkarpackie", name: "Podkarpackie", count: 7 },
  { route: "/lodzkie", name: "Łódzkie", count: 8 },
  { route: "/dolnoslaskie", name: "Dolnośląskie", count: 6 },
  { route: "/zachodniopomorskie", name: "Zachodniopomorskie", count: 3 },
  { route: "/swietokrzyskie", name: "Świętokrzyskie", count: 2 },
  { route: "/kujawsko-pomorskie", name: "Kujawsko-Pomorskie", count: 7 },
  { route: "/mazowieckie", name: "Mazowieckie", count: 11 },
  { route: "/podlaskie", name: "Podlaskie", count: 9 },
  { route: "/lubelskie", name: "Lubelskie", count: 12 },
  { route: "/malopolskie", name: "Małopolskie", count: 2 },
]

let updated = 0
for (const h of hubs) {
  // Match: title: '...'
  const titleOld = new RegExp(
    `(route: '${h.route.replace(/\//g, "\\/")}',\\s*\\n\\s*title:\\s*)'[^']*'`,
    "g",
  )
  const titleNew = `$1'Strona internetowa ${h.name} — od 1500 zł, gotowa w 5 dni | SEO Grow'`
  if (titleOld.test(src)) {
    src = src.replace(titleOld, titleNew)
    updated++
  } else {
    console.warn(`⚠️  Title pattern not found for ${h.route}`)
  }

  // Match: description: '...'
  const descOld = new RegExp(
    `(${h.route.replace(/\//g, "\\/")}',\\s*\\n\\s*title:[^\\n]*\\n\\s*description:\\s*)'[^']*'`,
    "g",
  )
  const descNew = `$1'Profesjonalna strona dla firm z ${h.name}. Od 1500 zł, gotowa w 5 dni, edycja z telefonu, wsparcie po polsku. Obsługujemy ${h.count} miast. Bez umowy, bez prowizji.'`
  if (descOld.test(src)) {
    src = src.replace(descOld, descNew)
  } else {
    console.warn(`⚠️  Description pattern not found for ${h.route}`)
  }
}

writeFileSync(FILE, src, "utf8")
console.log(`✅ Updated ${updated} hub titles + descriptions in ${FILE}`)
