import { Box } from "@chakra-ui/react"
import { SEO, SITE_URL } from "../components/SEO"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PricingSection } from "../sections/PricingSection"
import { pricingPlans } from "../data/pricingPlans"

const cennikSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/cennik#webpage`,
    url: `${SITE_URL}/cennik`,
    name: "Cennik stron internetowych dla firm | SEO Grow",
    description:
      "Cennik stron internetowych dla małych firm w Polsce. Trzy plany: Start od 1500 zł, Standard od 2200 zł, Premium od 4500 zł. Bez umowy, wsparcie po polsku.",
    inLanguage: "pl-PL",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/panel-1280.webp`,
      width: 1280,
      height: 720,
    },
    lastReviewed: "2026-07-09",
    reviewedBy: { "@id": `${SITE_URL}/#founder` },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/cennik#plans`,
    name: "Pakiety SeoGrow",
    itemListElement: pricingPlans.map((plan, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Offer",
        name: `${plan.name} — ${plan.title}`,
        description: plan.description,
        price: plan.sitePrice.toFixed(2),
        priceCurrency: "PLN",
        url: `${SITE_URL}/zamowienie/${plan.slug}/configure`,
        availability: "https://schema.org/InStock",
        seller: { "@id": `${SITE_URL}/#organization` },
        eligibleCustomerType: "https://schema.org/BusinessEntity",
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Cennik", item: `${SITE_URL}/cennik` },
    ],
  },
]

export const CennikPage = () => (
  <Box bg="white" minH="100vh">
    <SEO
      title="Cennik stron internetowych dla firm | od 1500 zł | SEO Grow"
      description="Cennik stron internetowych dla małych firm. Trzy plany: Start od 1500 zł, Standard od 2200 zł, Premium od 4500 zł. Bez umowy, wsparcie po polsku, od 49 zł mies."
      path="/cennik"
      image="/panel-1280.webp"
      keywords="cennik strony internetowej, ile kosztuje strona www, cennik stron www dla firm, cena strony internetowej dla firmy, koszt strony dla małej firmy, cennik seo, cena pozycjonowania stron"
      schema={cennikSchema}
    />
    <Header />
    <Box as="main" id="main-content" tabIndex={-1} outline="none">
      <PricingSection />
    </Box>
    <Footer />
  </Box>
)