import { Box } from "@chakra-ui/react"
import { SEO } from "../components/SEO"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { TrustLogosSection } from "../sections/TrustLogosSection"
import { StatsSection } from "../sections/StatsSection"
import { WhyChooseSection } from "../sections/WhyChooseSection"
import { ClientResultsSection } from "../sections/ClientResultsSection"
import { GoogleReviewsSection } from "../sections/GoogleReviewsSection"
import { ProblemSection } from "../sections/ProblemSection"
import { CustomDesignSection } from "../sections/CustomDesignSection"
import { TargetAudienceSection } from "../sections/TargetAudienceSection"
import { TemplatesShowcaseSection } from "../sections/TemplatesShowcaseSection"
import { AISiteBuilderSection } from "../sections/AISiteBuilderSection"
import { DeferredRender } from "../components/DeferredRender"
import { Suspense } from "react"
import { FiZap, FiDollarSign, FiMapPin, FiShield, FiCode, FiClock } from "react-icons/fi"
import { Hero, Features, Process, FAQ, Pricing, FinalCTA, Targets } from "../components/FullLandingSections"
import { SolutionSection } from "../sections/SolutionSection"
import { ModulosSection } from "../sections/ModulosSection"
import { AIBlogSection } from "../sections/AIBlogSection"
import { AISeoSection } from "../sections/AISeoSection"
import { GrowWithYouSection } from "../sections/GrowWithYouSection"
import { SEOSection } from "../sections/SEOSection"
import { FinalCTASection } from "../sections/FinalCTASection"

const features = [
  { icon: FiMapPin, title: "Google Maps 3-pack", desc: "Twoja firma pojawia się w Top 3 wyników Google Maps w Twoim mieście." },
  { icon: FiZap, title: "14-30 dni do efektu", desc: "Małe miasto / nisza: pozycjonowanie lokalne działa 3-5x szybciej niż SEO ogólnopolskie." },
  { icon: FiDollarSign, title: "Klienci gotowi kupić", desc: "Ruch lokalny ma najwyższą konwersję — 5-10% vs 1-3% w SEO ogólnym." },
  { icon: FiShield, title: "Schema LocalBusiness", desc: "Dane firmy (nazwa, adres, telefon) w kodzie strony, żeby Google łatwo je zczytał." },
  { icon: FiCode, title: "Google Moja Firma", desc: "Pomagam w konfiguracji wizytówki Google Moja Firma, zbieraniu opinii, postach." },
  { icon: FiClock, title: "Długoterminowy efekt", desc: "Po roku masz stałą pozycję w Maps dla Twojej kategorii. Konkurencja trudno Cię dogoni." },
]

const targets = [
  { title: "Fryzjer, kosmetyczka", desc: "Klienci szukają 'fryzjer + miasto', chcą rezerwacji dziś" },
  { title: "Hydraulik, elektryk", desc: "Awaryjne usługi — kto pierwszy w Google, ten dostaje telefon" },
  { title: "Restauracja, kawiarnia", desc: "Google Maps, opinie, godziny otwarcia" },
  { title: "Dentysta, lekarz", desc: "Zaufanie lokalne, opinie pacjentów" },
  { title: "Kancelaria prawna", desc: "Specjalizacja + lokalna widoczność" },
  { title: "Mechanik, wulkanizator", desc: "Awaryjne naprawy — szybka reakcja" },
]

const faqs = [
  { q: "Co to jest pozycjonowanie lokalne?", a: "SEO skierowane na klientów z Twojego regionu. Obejmuje Google Maps (3-pack), wizytówkę Google Moja Firma, schema LocalBusiness, opinie klientów, wzmianki o mieście w treści. Cel: gdy ktoś w Twoim mieście szuka Twojej usługi, znajduje Ciebie." },
  { q: "Ile kosztuje pozycjonowanie lokalne?", a: "W modelu 'SEO wliczone w stronę' (SEO Grow) — od 1 500 zł jednorazowo. W modelu 'abonament' — 500-2 000 zł miesięcznie. Pierwszy model jest 10x tańszy i daje trwały efekt." },
  { q: "Ile trwa pozycjonowanie lokalne?", a: "Google Maps: 14-30 dni dla wizytówki z opiniami. Top 3 w Maps: 1-3 miesiące. Top 10 organicznych w małym mieście: 30-90 dni." },
  { q: "Co lepsze: SEO lokalne czy Ads?", a: "SEO lokalne buduje trwały autorytet i darmowy ruch latami. Ads daje ruch natychmiast, ale płatny i znika po wyłączeniu. Dla małej firmy: SEO lokalne jako fundament, Ads do testowania konkretnych usług lub kampanii." },
  { q: "Czy pozycjonowanie lokalne działa w moim mieście?", a: "Tak. W Ostródzie, Iławie, Kętrzynie, Lubinie, Krośnie, Suwałkach — Twoja strona wejdzie do Top 10 w 30-90 dni. W dużych miastach (Warszawa, Kraków) dłużej, 3-12 miesięcy, ale ROI jest większy." },
  { q: "Co to jest Google Maps 3-pack?", a: "Top 3 wyników, które Google pokazuje w Maps dla zapytań lokalnych (np. 'hydraulik Ostróda'). Zajmują 50-60% pierwszego ekranu. Bycie w 3-paku = 5-10x więcej telefonów niż organiczny Top 10." },
]

export const PozycjonowanieLokalnePage = () => {
  return (
    <Box bg="white" minH="100vh">
      <SEO
        title="Pozycjonowanie lokalne — widoczność w Google Maps | SEO Grow"
        description="Pozycjonowanie lokalne dla firm: widoczność w Google Maps i wynikach organicznych. Schema LocalBusiness, wizytówka Google, opinie. Od 1 500 zł z SEO. Sprawdź."
        keywords="pozycjonowanie lokalne, lokalne seo, seo lokalne, pozycjonowanie w mapach google, pozycjonowanie google maps, wizytowka google firma, seo dla lokalnych firm"
        path="/pozycjonowanie-lokalne"
      />
      <Header />

      <Box as="main" id="main-content">
        <Hero
          badge="Dla firm lokalnych w całej Polsce"
          h1Before="Pozycjonowanie"
          h1Accent="lokalne"
          sub="Twoja firma widoczna w Google Maps i wynikach organicznych. Schema LocalBusiness, wizytówka Google, opinie. Od 1 500 zł z SEO."
          primaryCta="Zamów SEO lokalne"
          secondaryCta="Zobacz cennik"
          primaryHref="/zamowienie?plan=standard"
          secondaryHref="/cennik"
          trustPoints={["Google Maps 3-pack", "14-30 dni do efektu", "Schema LocalBusiness", "Bez abonamentu"]}
        />

        <TrustLogosSection />
        <TemplatesShowcaseSection />
        <AISiteBuilderSection />
        <StatsSection />
        <WhyChooseSection />
        <ClientResultsSection />
        <GoogleReviewsSection />

        <Features
          title="Pozycjonowanie lokalne <span style='color:var(--chakra-colors-accent-600)'>działa 3-5x szybciej</span>"
          items={features}
        />

        <ProblemSection />
        <CustomDesignSection />
        <TargetAudienceSection />
        <Targets title="Dla jakich firm działa pozycjonowanie lokalne?" items={targets} />

        <Process days={5} />

        <DeferredRender fallback={<Box minH="400px" bg="white" />}>
          <Suspense fallback={<Box minH="400px" bg="white" />}>
            <SolutionSection />
            <ModulosSection />
            <AIBlogSection />
            <AISeoSection />
          </Suspense>
        </DeferredRender>

        <Pricing />
        <GrowWithYouSection />
        <SEOSection />
        <FAQ items={faqs} />
        <FinalCTASection />

        <FinalCTA
          title="Pozycjonowanie lokalne dla Twojej firmy"
          description="Sprawdź plany od 1 500 zł. Strona z lokalnym SEO, widoczna w Google Maps."
          buttonText="Zobacz plany"
          buttonHref="/cennik"
          secondaryHref="/zamowienie?plan=standard"
          secondaryText="Zamów teraz"
        />
      </Box>

      <Footer />
    </Box>
  )
}
