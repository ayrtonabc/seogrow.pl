// src/data/citySchemas.ts
// Schema generators compartidos entre React (CityPages) y prerender (seo-config).
// Mantener sincronizados: el HTML estático y el bundle React deben emitir el
// mismo JSON-LD para máxima cobertura SEO (crawlers sin JS ven el estático).

import { allCities, type City, citiesByVoivodeship } from "../data/cities"
import { CITIES_SCHEMA } from "./cities.schema"

const SITE_URL = "https://seogrow.pl"

// ─── CITY: LocalBusiness + BreadcrumbList + FAQPage ──────────────────────────

export const cityLocalBusinessSchema = (city: City) => {
  const nearbyCities = (city.nearby || [])
    .map((slug) => allCities.find((c) => c.slug === slug))
    .filter(Boolean)
    .map((c) => ({
      "@type": "City",
      name: c!.name,
      "@id": `${SITE_URL}/${c!.slug}#city`,
    }))

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/${city.slug}#local`,
    name: `SEO Grow — ${city.name}`,
    image: `${SITE_URL}/logo-320.webp`,
    url: `${SITE_URL}/${city.slug}`,
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
      { "@type": "City", name: city.name, "@id": `${SITE_URL}/${city.slug}#city` },
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
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  }
}

export const cityBreadcrumbSchema = (city: City) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: city.name, item: `${SITE_URL}/${city.slug}` },
  ],
})

// ─── HUB: LocalBusiness (regional) + BreadcrumbList ──────────────────────────

export const hubLocalBusinessSchema = (
  voivodeship: string,
  slug: string,
  lat: number,
  lng: number,
) => {
  const cities = citiesByVoivodeship.get(voivodeship) || []
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/${slug}#hub`,
    name: `SEO Grow — ${voivodeship}`,
    image: `${SITE_URL}/logo-320.webp`,
    url: `${SITE_URL}/${slug}`,
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
      ...cities.map((c) => ({
        "@type": "City",
        name: c.name,
        "@id": `${SITE_URL}/${c.slug}#city`,
      })),
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  }
}

export const hubBreadcrumbSchema = (voivodeship: string, slug: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Strona główna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: voivodeship, item: `${SITE_URL}/${slug}` },
  ],
})

// ─── Helpers para prerender ─────────────────────────────────────────────────

export const getCityBySlug = (slug: string): City | undefined =>
  allCities.find((c) => c.slug === slug)

export const getAllCitySlugs = (): string[] =>
  CITIES_SCHEMA.cities.map((c) => c.slug)
