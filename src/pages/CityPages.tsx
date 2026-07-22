// src/pages/CityPages.tsx
// Landings SEO — 99 páginas por ciudad generadas desde data/cities.ts.
// Cada página tiene contenido único basado en los datos de la ciudad:
// powiat, voivodato, industrias, ciudades vecinas, micro-contexto local.
//
// Schema LocalBusiness con areaServed específico + coordenadas reales.
// Internal linking inteligente: cada ciudad linkea a 3-5 ciudades vecinas
// del mismo voivodato + 1 hub regional + 2 verticales principales.
//
// Cada ciudad es un componente exportado (StronaInternetowaXxxPage) para
// que React Router pueda hacer lazy import, igual que las 4 ciudades Tier-1
// originales (Warszawa/Kraków/Łódź/Wrocław).

import { SEOLandingPage } from "../components/SEOLandingPage"
import type { City } from "../data/cities"
import { allCities, citiesByVoivodeship } from "../data/cities"

// ─── HELPERS ────────────────────────────────────────────────────────────────

// Crea el schema LocalBusiness específico para una ciudad
const localBusinessSchema = (city: City) => {
  const nearbyCities = (city.nearby || [])
    .map((slug) => allCities.find((c) => c.slug === slug))
    .filter(Boolean)
    .map((c) => ({
      "@type": "City",
      name: c!.name,
      "@id": `https://seogrow.pl/${c!.slug}#city`,
    }))

  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://seogrow.pl/${city.slug}#local`,
      name: `SEO Grow — ${city.name}`,
      image: "https://seogrow.pl/logo-320.webp",
      url: `https://seogrow.pl/${city.slug}`,
      telephone: "+48-517-105-423",
      email: "kontakt@seogrow.pl",
      priceRange: "1500-4500 PLN",
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: city.voivodeship,
        addressCountry: "PL",
      },
      areaServed: [
        { "@type": "City", name: city.name, "@id": `https://seogrow.pl/${city.slug}#city` },
        { "@type": "State", name: city.voivodeship },
        ...nearbyCities,
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.lat,
        longitude: city.lng,
      },
      parentOrganization: { "@id": "https://seogrow.pl/#organization" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://seogrow.pl/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Strony internetowe",
          item: "https://seogrow.pl/#moduly",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: city.name,
          item: `https://seogrow.pl/${city.slug}`,
        },
      ],
    },
  ]
}

// Construye los 3-5 links de ciudades vecinas (mismo voivodato preferentemente)
// Importante: variamos el anchor text para evitar sobre-optimización de SEO.
// Google penaliza cuando todos los anchors son iguales — la variedad de anchor
// text es una señal de "link natural".
const buildInternalLinks = (city: City): { label: string; href: string; note?: string }[] => {
  const sameVoivodeship = (citiesByVoivodeship.get(city.voivodeship) || []).filter(
    (c) => c.slug !== city.slug,
  )
  const neighborLinks = city.nearby
    .map((slug) => allCities.find((c) => c.slug === slug))
    .filter(Boolean)
    .slice(0, 3)

  // Variamos el anchor text para cada vecina (basado en hash del slug)
  // Cada vecina tiene su propio anchor — no "Strona internetowa X" para todas
  const anchorVariants = [
    (c: City) => `Strona internetowa ${c.name}`,
    (c: City) => `${c.name}`,
    (c: City) => `Projekt strony w ${c.name}`,
    (c: City) => `Strona www ${c.name}`,
    (c: City) => `Web dla firm w ${c.name}`,
  ]
  const cityHash = city.slug.split("").reduce((a, b) => a + b.charCodeAt(0), 0)

  // Si el voivodato tiene +5 ciudades, agregar el hub
  const hubLink = sameVoivodeship.length >= 5
    ? [
        {
          label: `Wszystkie miasta w ${city.voivodeship}`,
          href: `/${city.voivodeshipSlug}`,
          note: `Hub regionalny · ${sameVoivodeship.length} miast`,
        },
      ]
    : []

  // Verticales principales (rotamos para no duplicar siempre las mismas)
  const verticals = [
    { label: "Strona dla freelancera", href: "/strona-dla-freelancera" },
    { label: "Strona dla warsztatu", href: "/strona-dla-warsztatu-samochodowego" },
    { label: "Strona dla kancelarii prawnej", href: "/strona-dla-kancelarii-prawnej" },
    { label: "Strona dla gabinetu stomatologicznego", href: "/strona-dla-gabinetu-stomatologicznego" },
    { label: "Strona dla restauracji", href: "/strona-dla-restauracji" },
    { label: "Strona dla hotelu", href: "/strona-dla-hotelu" },
    { label: "Strona dla fizjoterapeuty", href: "/strona-dla-fizjoterapeuty" },
    { label: "Strona dla kosmetyczki", href: "/strona-dla-kosmetyczki" },
    { label: "Strona dla psychologa", href: "/strona-dla-psychologa" },
    { label: "Pozycjonowanie stron dla firm", href: "/pozycjonowanie-stron-dla-firm" },
  ]
  // Toma 2 verticales en función del hash del slug (estable por ciudad)
  const hash = city.slug.split("").reduce((a, b) => a + b.charCodeAt(0), 0)
  const v1 = verticals[hash % verticals.length]
  const v2 = verticals[(hash + 5) % verticals.length]

  return [
    ...neighborLinks.map((c, idx) => {
      const variant = anchorVariants[(cityHash + idx) % anchorVariants.length]
      return {
        label: variant(c!),
        href: `/strona-internetowa-${c!.slug}`,
        note: c!.voivodeship,
      }
    }),
    ...hubLink,
    v1,
    v2,
  ]
}

// Construye el H1 único por ciudad con su forma locativa
// Importante: en polaco las preposiciones (w, we, na) van en minúscula, solo
// el nombre propio capitaliza. Para "w Iławie" el H1 es "Strona internetowa
// w Iławie" (con "w" minúscula y "Iławie" con mayúscula).
const buildH1 = (city: City) => {
  const loc = city.nameLocative
  // Detectar si empieza con preposición (w, we, na, wew, etc.)
  const prepMatch = loc.match(/^(w|we|na|wew|po)\s+(.+)$/i)
  if (prepMatch) {
    // preposición minúscula + nombre con mayúscula
    const prep = prepMatch[1].toLowerCase()
    const name = prepMatch[2].charAt(0).toUpperCase() + prepMatch[2].slice(1)
    return `Strona internetowa ${prep} ${name}`
  }
  // Sin preposición: capitalizar la primera letra
  return `Strona internetowa ${loc.charAt(0).toUpperCase() + loc.slice(1)}`
}

// Capitaliza un nameLocative manteniendo la preposición en minúscula
// Usado en headings, imageAlt, etc.
const capitalizeLocative = (loc: string): string => {
  const prepMatch = loc.match(/^(w|we|na|wew|po)\s+(.+)$/i)
  if (prepMatch) {
    const prep = prepMatch[1].toLowerCase()
    const name = prepMatch[2].charAt(0).toUpperCase() + prepMatch[2].slice(1)
    return `${prep} ${name}`
  }
  return loc.charAt(0).toUpperCase() + loc.slice(1)
}

// Construye el H1 sub (debajo del H1)
// En polaco: "firma w Iławie" usa locativo, "firma z Iławy" usa genitivo.
// Usamos locativo (w + nameLocative) para coherencia con el H1.
const buildH1Sub = (city: City) => {
  const industryText = city.industries.length > 0
    ? ` Dla firm z ${city.industries.slice(0, 2).join(", ")} i nie tylko.`
    : ""
  return `Profesjonalna strona dla Twojej firmy ${city.nameLocative}.${industryText} Gotowa w kilka dni, edycja z telefonu.`
}

// Construye el intro (texto debajo del hero) con contexto local único
const buildIntro = (city: City) => {
  const industries = city.industries.length > 0 ? city.industries.join(", ") : "MŚP"
  return `Prowadzisz firmę ${city.nameLocative} albo w okolicach i chcesz, żeby Twoi klienci znajdowali Cię w Google? W SEO Grow obsługujemy firmy ${city.nameLocative} — od ${industries[0]?.toLowerCase() || "MŚP"} po usługi. Rozmawiamy po ludzku, tłumaczymy wszystko spokojnie i oddajemy Ci gotową stronę, którą prowadzisz sam z telefonu. ${city.context}`
}

// 4 secciones: cada una con un ángulo único
const buildSections = (city: City) => {
  const neighborsList = city.nearby
    .slice(0, 4)
    .map((slug) => allCities.find((c) => c.slug === slug))
    .filter(Boolean)
    .map((c) => c!.name)

  const voivodeshipNeighbors = (citiesByVoivodeship.get(city.voivodeship) || [])
    .filter((c) => c.slug !== city.slug)
    .slice(0, 3)
    .map((c) => c.name)

  return [
    {
      heading: `Dlaczego SEO lokalne jest kluczowe dla firmy ${capitalizeLocative(city.nameLocative)}`,
      content: `Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś ${city.nameLocative} szuka tego, co robisz — 24/7, bez płacenia za kliknięcia. ${city.landmark ? `W okolicy jest ${city.landmark} — co miesiąc tysiące potencjalnych klientów szukają lokalnych usług w Google.` : "W okolicy działają setki firm, które codziennie szukają lokalnych usług w Google."}`,
      imageAnimation: {
        rounds: [
          {
            query: `${city.industries[0]?.toLowerCase() || "firma"} ${city.name}`,
            yourSite: {
              domain: `twoja-firma-${city.slug}.pl`,
              title: `Twoja Firma ${city.name} | ${city.industries[0] || "Usługi"} | ${city.landmark ? city.landmark.split(" ")[0] : "Centrum"}`,
              description: `Firma z ${city.name} oferuje ${city.industries[0]?.toLowerCase() || "usługi"}. ${city.context.split(".")[0]}. Bezpłatna wycena, ${Math.floor(city.population / 1000)}+ lat doświadczenia, 100+ realizacji.`,
            },
            competitors: [
              { domain: `konkurent-${city.slug}-1.pl`, title: `${city.industries[0] || "Usługi"} ${city.name} — Profesjonalne realizacje`, description: `Firma z ${city.name}. Kompleksowe usługi, ${city.context.split(".")[0]}.` },
              { domain: `konkurent-${city.slug}-2.pl`, title: `Najlepsze usługi ${city.name}`, description: `Firma z ${city.name}. ${city.industries[0] || "Usługi"} dla okolicznych firm i mieszkańców.` },
            ],
          },
          {
            query: `firma ${city.name}`,
            yourSite: {
              domain: `twoja-firma-${city.slug}.pl`,
              title: `Twoja Firma ${city.name} | ${city.industries[0] || "Usługi"} | ${city.landmark ? city.landmark.split(" ")[0] : "Centrum"}`,
              description: `Firma z ${city.name} oferuje ${city.industries[0]?.toLowerCase() || "usługi"}. ${city.context.split(".")[0]}. Bezpłatna wycena.`,
            },
            competitors: [
              { domain: `konkurent-${city.slug}-1.pl`, title: `${city.industries[0] || "Usługi"} ${city.name} — Profesjonalne realizacje`, description: `Firma z ${city.name}. ${city.context.split(".")[0]}.` },
              { domain: `konkurent-${city.slug}-2.pl`, title: `Najlepsze usługi ${city.name}`, description: `Firma z ${city.name}. ${city.industries[0] || "Usługi"} dla okolicznych firm.` },
            ],
          },
          {
            query: `${city.industries[0]?.toLowerCase() || "usługi"} ${city.name}`,
            yourSite: {
              domain: `twoja-firma-${city.slug}.pl`,
              title: `Twoja Firma ${city.name} | ${city.industries[0] || "Usługi"} | ${city.landmark ? city.landmark.split(" ")[0] : "Centrum"}`,
              description: `Firma z ${city.name} oferuje ${city.industries[0]?.toLowerCase() || "usługi"}. ${city.context.split(".")[0]}. Bezpłatna wycena.`,
            },
            competitors: [
              { domain: `konkurent-${city.slug}-1.pl`, title: `${city.industries[0] || "Usługi"} ${city.name}`, description: `Firma z ${city.name}. ${city.context.split(".")[0]}.` },
              { domain: `konkurent-${city.slug}-2.pl`, title: `Najlepsze usługi ${city.name}`, description: `Firma z ${city.name}. ${city.industries[0] || "Usługi"} dla okolicznych firm.` },
            ],
          },
        ],
      },
      imagePosition: "left" as const,
      highlights: [
        "Klient szuka w Google — gotowy do kontaktu",
        "Widoczność 24/7, bez płacenia za kliknięcia",
        "Wyprzedzasz konkurencję w Google Maps",
        "Budujesz markę firmy na lata",
      ],
    },
    {
      heading: "Jak wygląda współpraca krok po kroku",
      content: `Najpierw rozmawiamy 15 minut — poznajemy Twoją firmę, branżę i to, co chcesz osiągnąć. Potem przygotowujemy stronę pod Twoje potrzeby. Po Twojej akceptacji publikujemy. Pięć dni roboczych, bez ankiet, bez czekania na wyceny od trzech agencji. Wszystko ustalamy telefonicznie lub mailowo — nie musisz do nas przyjeżdżać.`,
      processSteps: [
        { step: "01", title: "15 minut rozmowy", description: "żebyśmy poznali Twoją firmę" },
        { step: "02", title: "Gotowa strona", description: "w 5 dni roboczych" },
        { step: "03", title: "Akceptacja z telefonu", description: "jednym kliknięciem" },
        { step: "04", title: "Strona zostaje Twoja", description: "na zawsze" },
      ],
    },
    {
      heading: "Co dostajesz w cenie — bez niespodzianek",
      content: `W każdym planie masz stronę, panel do edycji, hosting, certyfikat SSL i wsparcie po polsku. Nie musisz nic dokupować osobno. Nie ma ukrytych opłat, nie ma umowy na lata. Cena jest jednorazowa za stronę + niska opłata miesięczna za CMS i hosting.`,
      valueBundle: true,
      imagePosition: "left" as const,
      highlights: [
        "Strona + panel do edycji + hosting + SSL w jednym",
        "Wsparcie po polsku, w dni robocze",
        "Brak umowy — możesz zrezygnować w każdej chwili",
        "Faktura VAT na każdą płatność",
      ],
    },
    {
      heading: `Dlaczego firmy ${capitalizeLocative(city.nameLocative)} wybierają SEO Grow`,
      content: `Bo łączymy rozmowę z ludźmi z porządną technologią. Nie zostawiamy Cię z dokumentacją do przeczytania — tłumaczymy wszystko po ludzku. Obsługujemy firmy w całym powiecie ${city.powiat} i gminach sąsiednich${neighborsList.length > 0 ? `: ${neighborsList.slice(0, 3).join(", ")}` : ""}. Stronę dostajesz gotową do użycia, a my dbamy o to, żeby działała bez problemów.`,
      image: "/soporte.webp",
      imageAlt: `Klient SEO Grow ${capitalizeLocative(city.nameLocative)} — spokojna obsługa i gotowa strona`,
      imagePosition: "left" as const,
      highlights: [
        "Mówimy po polsku, bez technicznego żargonu",
        "Pomagamy z domeną i konfiguracją poczty",
        "Pomoc telefoniczna, gdy czegoś nie wiesz",
        `Działamy ${city.nameLocative} i w całym ${city.voivodeship}`,
      ],
    },
  ]
}

// FAQ con 4-5 preguntas con contexto local único
const buildFAQ = (city: City) => [
  {
    q: `Czy obsługujecie firmy z całego powiatu ${city.powiat}?`,
    a: `Tak. Obsługujemy firmy ${city.nameLocative} i z całego powiatu ${city.powiat}. Wszystko ustalamy telefonicznie lub mailowo — nie musisz do nas przyjeżdżać. Działamy zdalnie, a stronę oddajemy Ci gotową do użycia.`,
  },
  {
    q: `Ile kosztuje strona dla firmy ${city.nameLocative}?`,
    a: `Od 1500 zł jednorazowo (pakiet Start) do 4500 zł (pakiet Premium). Co miesiąc płacisz od 49 zł. Konkretna kwota zależy od wybranego planu i zakresu strony. W rozmowie 15-minutowej powiemy Ci szczerze, co ma sens dla Twojej firmy.`,
  },
  {
    q: `Czy mogę zobaczyć stronę przed zapłatą?`,
    a: `Tak. Najpierw rozmawiamy przez 15 minut, potem przygotowujemy projekt. Pokazujemy Ci efekty przed publikacją — nic nie płacisz, dopóki nie będziesz zadowolony. Wszystko ustalamy zdalnie, więc nie musisz przyjeżdżać do nas.`,
  },
  {
    q: `Co jeśli nie znam się na komputerach?`,
    a: `Nie musisz. Panel jest zaprojektowany dla osób nietechnicznych — wygląda jak zwykła aplikacja w telefonie. Na start pokazujemy Ci krok po kroku, jak dodawać treści. W dni robocze odbieramy telefon i pomagamy.`,
  },
  {
    q: `Czy strona będzie widoczna w Google ${city.nameLocative}?`,
    a: `Strona startuje zoptymalizowana technicznie — szybka, mobilna, z odpowiednimi znacznikami dla Google. W SEO nie obiecujemy pierwszego miejsca (tak po prostu nie działa), ale dajemy Ci wszystko, żeby Google mógł Cię znaleźć ${city.nameLocative}. W planie Premium dostajesz comiesięczny raport widoczności.`,
  },
]

// features y trust son idénticos para todas las ciudades (es la propuesta de valor)
const features = [
  { title: "Widoczność w Google", description: "Twoja strona startuje zoptymalizowana pod wyszukiwarkę — od pierwszego dnia." },
  { title: "Edycja z telefonu", description: "Zmiana ceny, dodanie zdjęcia, nowy wpis na blogu — wszystko z aplikacji w telefonie." },
  { title: "Blog bez limitu", description: "Pisz artykuły, które przyciągają klientów z Google. Bez wiedzy technicznej." },
  { title: "Wsparcie po polsku", description: "W dni robocze odbieramy telefon i pomagamy, gdy czegoś nie wiesz." },
  { title: "Brak umowy", description: "Płacisz co miesiąc. Jeśli chcesz zrezygnować — wystarczy jeden mail. Strona zostaje Twoja." },
  { title: "Faktura VAT", description: "Dostajesz fakturę na każdą płatność. Łatwo wrzucić w koszty firmy." },
]

const trust = [
  { number: "5 dni", label: "do gotowej strony" },
  { number: "1500 zł", label: "jednorazowo" },
  { number: "49 zł", label: "miesięcznie, bez umowy" },
  { number: "100%", label: "Twoja strona na zawsze" },
]

// ─── GENERADOR DE PÁGINAS ───────────────────────────────────────────────────

function buildCityPage(city: City) {
  return (
    <SEOLandingPage
      path={`/${city.slug}`}
      title={`Strona internetowa ${city.name} | Od 1500 zł, gotowa w 5 dni | SEO Grow`}
      description={`Profesjonalna strona internetowa dla firm ${city.nameLocative} w powiecie ${city.powiat}, ${city.voivodeship}. Gotowa w 5 dni, edycja z telefonu, widoczność w Google. Od 1500 zł jednorazowo, bez umowy.`}
      keywords={`strona internetowa ${city.name.toLowerCase()}, strona www ${city.name.toLowerCase()}, strona dla firmy ${city.name.toLowerCase()}, projekt strony ${city.name.toLowerCase()}, strona z seo ${city.name.toLowerCase()}, ${city.powiat}`}
      h1={buildH1(city)}
      h1Accent="gotowa w kilka dni, bez stresu"
      h1Sub={buildH1Sub(city)}
      intro={buildIntro(city)}
      heroImage={null}
      breadcrumb={[
        { name: "Strony internetowe", href: "/#moduly" },
        { name: city.name, href: `/${city.slug}` },
      ]}
      schema={localBusinessSchema(city)}
      sections={buildSections(city)}
      features={features}
      trust={trust}
      faq={buildFAQ(city)}
      cta={{
        title: `Porozmawiajmy o Twojej stronie ${city.nameLocative}`,
        description: "15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, co ma sens dla Twojej firmy.",
        primaryLabel: "Zadzwoń: 517 105 423",
      }}
      internalLinks={buildInternalLinks(city)}
      showModules={true}
      showPricing={true}
    />
  )
}

// ─── EXPORTS POR CIUDAD ────────────────────────────────────────────────────
// Cada ciudad se exporta como un componente independiente para que React
// Router pueda hacer lazy import por separado.

export const StronaInternetowaIlawaPage = () => buildCityPage(allCities.find((c) => c.slug === "ilawa")!)
export const StronaInternetowaElkPage = () => buildCityPage(allCities.find((c) => c.slug === "elk")!)
export const StronaInternetowaKwidzynPage = () => buildCityPage(allCities.find((c) => c.slug === "kwidzyn")!)
export const StronaInternetowaStarogardGdanskiPage = () => buildCityPage(allCities.find((c) => c.slug === "starogard-gdanski")!)
export const StronaInternetowaWrzesniaPage = () => buildCityPage(allCities.find((c) => c.slug === "wrzesnia")!)
export const StronaInternetowaLęborkPage = () => buildCityPage(allCities.find((c) => c.slug === "lebork")!)
export const StronaInternetowaDebicaPage = () => buildCityPage(allCities.find((c) => c.slug === "debica")!)
export const StronaInternetowaBelchatowPage = () => buildCityPage(allCities.find((c) => c.slug === "belchatow")!)
export const StronaInternetowaOlawaPage = () => buildCityPage(allCities.find((c) => c.slug === "olawa")!)
export const StronaInternetowaMielecPage = () => buildCityPage(allCities.find((c) => c.slug === "mielec")!)
export const StronaInternetowaKlodzkoPage = () => buildCityPage(allCities.find((c) => c.slug === "klodzko")!)
export const StronaInternetowaKolobrzegPage = () => buildCityPage(allCities.find((c) => c.slug === "kolobrzeg")!)
export const StronaInternetowaSzczecinekPage = () => buildCityPage(allCities.find((c) => c.slug === "szczecinek")!)
export const StronaInternetowaSandomierzPage = () => buildCityPage(allCities.find((c) => c.slug === "sandomierz")!)
export const StronaInternetowaTarnobrzegPage = () => buildCityPage(allCities.find((c) => c.slug === "tarnobrzeg")!)
export const StronaInternetowaKrosnoPage = () => buildCityPage(allCities.find((c) => c.slug === "krosno")!)
export const StronaInternetowaSanokPage = () => buildCityPage(allCities.find((c) => c.slug === "sanok")!)
export const StronaInternetowaRzeszowPage = () => buildCityPage(allCities.find((c) => c.slug === "rzeszow")!)
export const StronaInternetowaJeleniaGoraPage = () => buildCityPage(allCities.find((c) => c.slug === "jelenia-gora")!)
export const StronaInternetowaBogatyniaPage = () => buildCityPage(allCities.find((c) => c.slug === "bogatynia")!)
export const StronaInternetowaLubinPage = () => buildCityPage(allCities.find((c) => c.slug === "lubin")!)
export const StronaInternetowaLegnicaPage = () => buildCityPage(allCities.find((c) => c.slug === "legnica")!)
export const StronaInternetowaGnieznoPage = () => buildCityPage(allCities.find((c) => c.slug === "gniezno")!)
export const StronaInternetowaKoninPage = () => buildCityPage(allCities.find((c) => c.slug === "konin")!)
export const StronaInternetowaPilaPage = () => buildCityPage(allCities.find((c) => c.slug === "pila")!)
export const StronaInternetowaChojnicePage = () => buildCityPage(allCities.find((c) => c.slug === "chojnice")!)
export const StronaInternetowaMalborkPage = () => buildCityPage(allCities.find((c) => c.slug === "malbork")!)
export const StronaInternetowaSwieciePage = () => buildCityPage(allCities.find((c) => c.slug === "swiecie")!)
export const StronaInternetowaGrudziadzPage = () => buildCityPage(allCities.find((c) => c.slug === "grudziadz")!)
export const StronaInternetowaInowroclawPage = () => buildCityPage(allCities.find((c) => c.slug === "inowroclaw")!)
export const StronaInternetowaOstrołękaPage = () => buildCityPage(allCities.find((c) => c.slug === "ostroleka")!)
export const StronaInternetowaSiedlcePage = () => buildCityPage(allCities.find((c) => c.slug === "siedlce")!)
export const StronaInternetowaRadomPage = () => buildCityPage(allCities.find((c) => c.slug === "radom")!)
export const StronaInternetowaPlockPage = () => buildCityPage(allCities.find((c) => c.slug === "plock")!)
export const StronaInternetowaLomzaPage = () => buildCityPage(allCities.find((c) => c.slug === "lomza")!)
export const StronaInternetowaSuwalkiPage = () => buildCityPage(allCities.find((c) => c.slug === "suwalki")!)

// Tier B
export const StronaInternetowaBartoszycePage = () => buildCityPage(allCities.find((c) => c.slug === "bartoszyce")!)
export const StronaInternetowaLidzbarkWarminskiPage = () => buildCityPage(allCities.find((c) => c.slug === "lidzbark-warminski")!)
export const StronaInternetowaGoldapPage = () => buildCityPage(allCities.find((c) => c.slug === "goldap")!)
export const StronaInternetowaOleckoPage = () => buildCityPage(allCities.find((c) => c.slug === "olecko")!)
export const StronaInternetowaPiszPage = () => buildCityPage(allCities.find((c) => c.slug === "pisz")!)
export const StronaInternetowaMragowoPage = () => buildCityPage(allCities.find((c) => c.slug === "mragowo")!)
export const StronaInternetowaKetrzynPage = () => buildCityPage(allCities.find((c) => c.slug === "ketrzyn")!)
export const StronaInternetowaGizyckoPage = () => buildCityPage(allCities.find((c) => c.slug === "gizycko")!)
export const StronaInternetowaWegorzewoPage = () => buildCityPage(allCities.find((c) => c.slug === "wegorzewo")!)
export const StronaInternetowaSzczytnoPage = () => buildCityPage(allCities.find((c) => c.slug === "szczytno")!)
export const StronaInternetowaNoweMiastoLubawskiePage = () => buildCityPage(allCities.find((c) => c.slug === "nowe-miasto-lubawskie")!)
export const StronaInternetowaDzialdowoPage = () => buildCityPage(allCities.find((c) => c.slug === "dzialdowo")!)
export const StronaInternetowaNidzicaPage = () => buildCityPage(allCities.find((c) => c.slug === "nidzica")!)
export const StronaInternetowaMoragPage = () => buildCityPage(allCities.find((c) => c.slug === "morag")!)
export const StronaInternetowaBraniewoPage = () => buildCityPage(allCities.find((c) => c.slug === "braniewo")!)
export const StronaInternetowaLubawaPage = () => buildCityPage(allCities.find((c) => c.slug === "lubawa")!)
export const StronaInternetowaChodziezPage = () => buildCityPage(allCities.find((c) => c.slug === "chodziez")!)
export const StronaInternetowaWalczPage = () => buildCityPage(allCities.find((c) => c.slug === "walcz")!)
export const StronaInternetowaTrzciankaPage = () => buildCityPage(allCities.find((c) => c.slug === "trzcianka")!)
export const StronaInternetowaCzarnkowPage = () => buildCityPage(allCities.find((c) => c.slug === "czarnkow")!)
export const StronaInternetowaGostyninPage = () => buildCityPage(allCities.find((c) => c.slug === "gostynin")!)
export const StronaInternetowaSierpcPage = () => buildCityPage(allCities.find((c) => c.slug === "sierpc")!)
export const StronaInternetowaMlawaPage = () => buildCityPage(allCities.find((c) => c.slug === "mlawa")!)
export const StronaInternetowaCiechanowPage = () => buildCityPage(allCities.find((c) => c.slug === "ciechanow")!)
export const StronaInternetowaPultuskPage = () => buildCityPage(allCities.find((c) => c.slug === "pultusk")!)
export const StronaInternetowaMakowMazowieckiPage = () => buildCityPage(allCities.find((c) => c.slug === "makow-mazowiecki")!)
export const StronaInternetowaPrzasnyszPage = () => buildCityPage(allCities.find((c) => c.slug === "przasnysz")!)
export const StronaInternetowaZambrowPage = () => buildCityPage(allCities.find((c) => c.slug === "zambrow")!)
export const StronaInternetowaKolnoPage = () => buildCityPage(allCities.find((c) => c.slug === "kolno")!)
export const StronaInternetowaWysokieMazowieckiePage = () => buildCityPage(allCities.find((c) => c.slug === "wysokie-mazowieckie")!)
export const StronaInternetowaLukowPage = () => buildCityPage(allCities.find((c) => c.slug === "lukow")!)
export const StronaInternetowaRadzynPodlaskiPage = () => buildCityPage(allCities.find((c) => c.slug === "radzyn-podlaski")!)
export const StronaInternetowaBialaPodlaskaPage = () => buildCityPage(allCities.find((c) => c.slug === "biala-podlaska")!)
export const StronaInternetowaChelnoPage = () => buildCityPage(allCities.find((c) => c.slug === "chelno")!)
export const StronaInternetowaBrodnicaPage = () => buildCityPage(allCities.find((c) => c.slug === "brodnica")!)
export const StronaInternetowaRypinPage = () => buildCityPage(allCities.find((c) => c.slug === "rypin")!)
export const StronaInternetowaWabrzeznoPage = () => buildCityPage(allCities.find((c) => c.slug === "wabrzezno")!)
export const StronaInternetowaAleksandrowLodzkiPage = () => buildCityPage(allCities.find((c) => c.slug === "aleksandrow-lodzki")!)
export const StronaInternetowaOpocznoPage = () => buildCityPage(allCities.find((c) => c.slug === "opoczno")!)
export const StronaInternetowaTomaszowMazowieckiPage = () => buildCityPage(allCities.find((c) => c.slug === "tomaszow-mazowiecki")!)
export const StronaInternetowaLowiczPage = () => buildCityPage(allCities.find((c) => c.slug === "lowicz")!)
export const StronaInternetowaSkierniewicePage = () => buildCityPage(allCities.find((c) => c.slug === "skierniewice")!)
export const StronaInternetowaPinczowPage = () => buildCityPage(allCities.find((c) => c.slug === "pinczow")!)

// Tier C
export const StronaInternetowaAugustowPage = () => buildCityPage(allCities.find((c) => c.slug === "augustow")!)
// augustow-powiat y krasnystaw-powiat eliminados — eran duplicados de las páginas de ciudad
export const StronaInternetowaBielskPodlaskiPage = () => buildCityPage(allCities.find((c) => c.slug === "bielsk-podlaski")!)
export const StronaInternetowaHajnowkaPage = () => buildCityPage(allCities.find((c) => c.slug === "hajnowka")!)
export const StronaInternetowaSiemiatyczePage = () => buildCityPage(allCities.find((c) => c.slug === "siemiatycze")!)
export const StronaInternetowaHrubieszowPage = () => buildCityPage(allCities.find((c) => c.slug === "hrubieszow")!)
export const StronaInternetowaTomaszowLubelskiPage = () => buildCityPage(allCities.find((c) => c.slug === "tomaszow-lubelski")!)
export const StronaInternetowaZamoscPage = () => buildCityPage(allCities.find((c) => c.slug === "zamosc")!)
export const StronaInternetowaBilgorajPage = () => buildCityPage(allCities.find((c) => c.slug === "bilgoraj")!)
export const StronaInternetowaJanowLubelskiPage = () => buildCityPage(allCities.find((c) => c.slug === "janow-lubelski")!)
export const StronaInternetowaKrasnikPage = () => buildCityPage(allCities.find((c) => c.slug === "krasnik")!)
export const StronaInternetowaKrasnystawPage = () => buildCityPage(allCities.find((c) => c.slug === "krasnystaw")!)
export const StronaInternetowaLubartowPage = () => buildCityPage(allCities.find((c) => c.slug === "lubartow")!)
export const StronaInternetowaLecznaPage = () => buildCityPage(allCities.find((c) => c.slug === "leczna")!)
// krasnystaw-powiat eliminado
export const StronaInternetowaKutnoPage = () => buildCityPage(allCities.find((c) => c.slug === "kutno")!)
export const StronaInternetowaLaskPage = () => buildCityPage(allCities.find((c) => c.slug === "lask")!)
export const StronaInternetowaLancutPage = () => buildCityPage(allCities.find((c) => c.slug === "lancut")!)
export const StronaInternetowaNowyTargPage = () => buildCityPage(allCities.find((c) => c.slug === "nowy-targ")!)
export const StronaInternetowaWadowicePage = () => buildCityPage(allCities.find((c) => c.slug === "wadowice")!)

// Re-exports de las 4 ciudades Tier-1 originales (compatibilidad)
export { StronaInternetowaWarszawaPage, StronaInternetowaKrakowPage, StronaInternetowaLodzPage, StronaInternetowaWroclawPage } from "./CityPagesTier1"
