// src/pages/VoivodeshipHubs.tsx
// 13 hubs regionales — uno por voivodato cubierto. Listan todas las ciudades
// del voivodato + tienen un schema LocalBusiness con areaServed el voivodato.
//
// Cada hub linkea a todas las ciudades del voivodato + un vertical destacado + el
// hub nacional. Esto crea un "hub-and-spoke" que Google premia en local SEO.

import { SEOLandingPage } from "../components/SEOLandingPage"
import { VoivodeshipContent } from "../components/VoivodeshipContent"
import { allCities, citiesByVoivodeship } from "../data/cities"

// Mapeo voivodato -> 1-2 ciudades destacadas para el hero (las más grandes)
const hubFeatured: Record<string, string[]> = {
  "Warmińsko-Mazurskie": ["ilawa", "elk"],
  "Pomorskie": ["kwidzyn", "starogard-gdanski"],
  "Wielkopolskie": ["wrzesnia", "gniezno"],
  "Podkarpackie": ["debica", "krosno"],
  "Łódzkie": ["lowicz", "tomaszow-mazowiecki"],
  "Dolnośląskie": ["olawa", "klodzko"],
  "Zachodniopomorskie": ["szczecinek", "kolobrzeg"],
  "Świętokrzyskie": ["sandomierz", "pinczow"],
  "Kujawsko-Pomorskie": ["grudziadz", "inowroclaw"],
  "Mazowieckie": ["siedlce", "ostroleka"],
  "Podlaskie": ["lomza", "suwalki"],
  "Lubelskie": ["krasnik", "krasnystaw"],
  "Małopolskie": ["nowy-targ", "wadowice"],
}

const localBusinessSchema = (voivodeship: string, slug: string, lat: number, lng: number) => {
  const cities = citiesByVoivodeship.get(voivodeship) || []
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://seogrow.pl/${slug}#hub`,
      name: `SEO Grow — ${voivodeship}`,
      image: "https://seogrow.pl/logo-320.webp",
      url: `https://seogrow.pl/${slug}`,
      telephone: "+48-517-105-423",
      email: "kontakt@seogrow.pl",
      priceRange: "1500-4500 PLN",
      address: {
        "@type": "PostalAddress",
        addressRegion: voivodeship,
        addressCountry: "PL",
      },
      areaServed: [
        { "@type": "State", name: voivodeship },
        ...cities.map((c) => ({ "@type": "City", name: c.name, "@id": `https://seogrow.pl/${c.slug}#city` })),
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng },
      parentOrganization: { "@id": "https://seogrow.pl/#organization" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://seogrow.pl/" },
        { "@type": "ListItem", position: 2, name: voivodeship, item: `https://seogrow.pl/${slug}` },
      ],
    },
  ]
}

// Coordenadas centrales aproximadas de cada voivodato
const voivodeshipCoords: Record<string, { lat: number; lng: number }> = {
  "Warmińsko-Mazurskie": { lat: 53.8667, lng: 20.6167 }, // Olsztyn
  "Pomorskie": { lat: 54.2, lng: 18.0 }, // Gdańsk
  "Wielkopolskie": { lat: 52.4, lng: 16.9 }, // Poznań
  "Podkarpackie": { lat: 50.0412, lng: 21.9991 }, // Rzeszów
  "Łódzkie": { lat: 51.7592, lng: 19.456 }, // Łódź
  "Dolnośląskie": { lat: 51.1079, lng: 17.0385 }, // Wrocław
  "Zachodniopomorskie": { lat: 53.4285, lng: 14.5528 }, // Szczecin
  "Świętokrzyskie": { lat: 50.8667, lng: 20.6167 }, // Kielce
  "Kujawsko-Pomorskie": { lat: 53.0137, lng: 18.5984 }, // Bydgoszcz
  "Mazowieckie": { lat: 52.2297, lng: 21.0122 }, // Warszawa
  "Podlaskie": { lat: 53.1333, lng: 23.15 }, // Białystok
  "Lubelskie": { lat: 51.25, lng: 22.5667 }, // Lublin
  "Małopolskie": { lat: 50.0647, lng: 19.945 }, // Kraków
}

const features = [
  { title: "Wizytówka w Google", description: "Pozycjonujemy Twoją firmę w Google Maps i w wynikach lokalnych." },
  { title: "Strona gotowa w 5 dni", description: "Profesjonalna strona z CMS-em i SEO bez ukrytych opłat." },
  { title: "Wsparcie po polsku", description: "Pomoc telefoniczna w dni robocze, czas reakcji do 4h." },
  { title: "Edycja z telefonu", description: "Sam(a) zmieniasz treści, ceny, zdjęcia — bez kodowania." },
  { title: "Brak umowy", description: "Płacisz co miesiąc. Rezygnujesz jednym mailem. Strona zostaje Twoja." },
  { title: "Faktura VAT", description: "Na każdą płatność. Łatwo wrzucić w koszty firmy." },
]

const trust = [
  { number: "5 dni", label: "do gotowej strony" },
  { number: "1500 zł", label: "jednorazowo" },
  { number: "49 zł", label: "miesięcznie, bez umowy" },
  { number: "100%", label: "Twoja strona na zawsze" },
]

function buildHubPage(voivodeship: string, slug: string) {
  const cities = citiesByVoivodeship.get(voivodeship) || []
  if (cities.length === 0) return null
  const coords = voivodeshipCoords[voivodeship] || { lat: 52.0, lng: 19.0 }
  const featured = hubFeatured[voivodeship] || cities.slice(0, 2).map(c => c.slug)

  const cityNames = cities.map(c => c.name).slice(0, 6).join(", ")
  const totalPop = cities.reduce((acc, c) => acc + c.population, 0)
  const allIndustries = Array.from(new Set(cities.flatMap(c => c.industries))).slice(0, 8)
  const featuredCities = featured.map(slug => cities.find(c => c.slug === slug)).filter(Boolean)

  return (
    <SEOLandingPage
      path={`/${slug}`}
      title={`Strona internetowa ${voivodeship} — od 1500 zł, gotowa w 5 dni | SEO Grow`}
      description={`Profesjonalna strona dla firm z ${voivodeship}. Od 1500 zł, gotowa w 5 dni, edycja z telefonu, wsparcie po polsku. ${cities.length} miast w zasięgu. Bez umowy, bez prowizji.`}
      keywords={`strona internetowa ${voivodeship.toLowerCase()}, strona www ${voivodeship.toLowerCase()}, agencja seo ${voivodeship.toLowerCase()}, pozycjonowanie ${voivodeship.toLowerCase()}, tworzenie stron ${voivodeship.toLowerCase()}`}
      eyebrow={`Obszar: ${voivodeship}`}
      h1={`Strona, która pracuje dla Twojej firmy`}
      h1Accent={`dopasowana do specyfiki ${voivodeship}`}
      h1Sub={`Profesjonalna strona z CMS-em, którym zarządzasz z telefonu, wsparciem po polsku i bez żadnej umowy długoterminowej. ${cities.length} miast w zasięgu, ta sama cena w całym regionie.`}
      intro={`15-minutowa rozmowa, żebyśmy poznali Twoją firmę i specyfikę Twojego rynku. W 5 dni dostarczamy gotową stronę — z lokalnym SEO, schemą LocalBusiness i panelem do edycji z telefonu. Bez korporacyjnego bełkotu, bez prowizji, bez zobowiązań.`}
      heroCarousel
      breadcrumb={[
        { name: "Strony internetowe", href: "/#moduly" },
        { name: voivodeship, href: `/${slug}` },
      ]}
      schema={localBusinessSchema(voivodeship, slug, coords.lat, coords.lng)}
      customContent={
        <VoivodeshipContent
          voivodeship={voivodeship}
          industries={allIndustries}
          cities={cities.map(c => ({ name: c.name, slug: c.slug }))}
          ctaTitle={`Porozmawiajmy o Twojej stronie w ${voivodeship}`}
          ctaDescription="15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, co ma sens dla Twojej firmy."
          ctaPrimaryLabel="Zamów stronę"
          internalLinks={cities.slice(0, 10).map(c => ({
            label: `Strona internetowa ${c.name}`,
            href: `/${c.slug}`,
            note: c.voivodeship,
          }))}
        />
      }
      trust={trust}
      faq={[
        {
          q: `Czy obsługujecie cały ${voivodeship}?`,
          a: `Tak. Obsługujemy firmy z ${cities.length} miast w ${voivodeship}: ${cityNames}. Jeśli Twojej miejscowości nie ma na liście, zadzwoń — prawdopodobnie też ją obsługujemy.`,
        },
        {
          q: `Ile kosztuje strona dla firmy z ${voivodeship}?`,
          a: `Od 1500 zł jednorazowo (pakiet Start) do 4500 zł (pakiet Premium). Co miesiąc płacisz od 49 zł. Cena jest taka sama niezależnie od miasta w ${voivodeship}.`,
        },
        {
          q: `Czy strona będzie widoczna w Google dla mojego miasta?`,
          a: `Strona startuje zoptymalizowana technicznie — szybka, mobilna, z odpowiednimi znacznikami dla Google. W SEO nie obiecujemy pierwszego miejsca (tak po prostu nie działa), ale dajemy Ci wszystko, żeby Google mógł Cię znaleźć w Twoim mieście.`,
        },
        {
          q: `Co jeśli nie znam się na komputerach?`,
          a: `Nie musisz. Panel jest zaprojektowany dla osób nietechnicznych — jak zwykła aplikacja w telefonie. Na start pokazujemy Ci krok po kroku, jak dodawać treści. W dni robocze odbieramy telefon i pomagamy.`,
        },
        {
          q: `Czy mogę zobaczyć stronę przed zapłatą?`,
          a: `Tak. Najpierw rozmawiamy 15 minut, potem przygotowujemy projekt. Pokazujemy Ci efekty przed publikacją. Nic nie płacisz, dopóki nie będziesz zadowolony.`,
        },
      ]}
      internalLinks={cities.slice(0, 10).map(c => ({
        label: `Strona internetowa ${c.name}`,
        href: `/${c.slug}`,
        note: c.voivodeship,
      }))}
      showModules={false}
      showPricing={false}
    />
  )
}

// ─── EXPORTS POR VOIVODATO ─────────────────────────────────────────────

export const WarminskoMazurskieHubPage = () => buildHubPage("Warmińsko-Mazurskie", "warminsko-mazurskie")
export const PomorskieHubPage = () => buildHubPage("Pomorskie", "pomorskie")
export const WielkopolskieHubPage = () => buildHubPage("Wielkopolskie", "wielkopolskie")
export const PodkarpackieHubPage = () => buildHubPage("Podkarpackie", "podkarpackie")
export const LodzkieHubPage = () => buildHubPage("Łódzkie", "lodzkie")
export const DolnoslaskieHubPage = () => buildHubPage("Dolnośląskie", "dolnoslaskie")
export const ZachodniopomorskieHubPage = () => buildHubPage("Zachodniopomorskie", "zachodniopomorskie")
export const SwietokrzyskieHubPage = () => buildHubPage("Świętokrzyskie", "swietokrzyskie")
export const KujawskoPomorskieHubPage = () => buildHubPage("Kujawsko-Pomorskie", "kujawsko-pomorskie")
export const MazowieckieHubPage = () => buildHubPage("Mazowieckie", "mazowieckie")
export const PodlaskieHubPage = () => buildHubPage("Podlaskie", "podlaskie")
export const LubelskieHubPage = () => buildHubPage("Lubelskie", "lubelskie")
export const MalopolskieHubPage = () => buildHubPage("Małopolskie", "malopolskie")
