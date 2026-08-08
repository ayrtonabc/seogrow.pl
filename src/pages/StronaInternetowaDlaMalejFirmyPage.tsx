import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react"
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
import { FiZap, FiDollarSign, FiSearch, FiSmartphone, FiShield, FiCode, FiCheck } from "react-icons/fi"
import { Hero, Features, Process, FAQ, Pricing, FinalCTA, Targets } from "../components/FullLandingSections"
import { SolutionSection } from "../sections/SolutionSection"
import { ModulosSection } from "../sections/ModulosSection"
import { AIBlogSection } from "../sections/AIBlogSection"
import { AISeoSection } from "../sections/AISeoSection"
import { GrowWithYouSection } from "../sections/GrowWithYouSection"
import { SEOSection } from "../sections/SEOSection"
import { FinalCTASection } from "../sections/FinalCTASection"

const features = [
  { icon: FiZap, title: "Gotowe w 5 dni", desc: "Od briefu do działającej strony — 5 dni roboczych. Bez opóźnień." },
  { icon: FiDollarSign, title: "Od 1 500 zł", desc: "Płacisz raz, nie miesięcznie. Strona Twoja od dnia 1." },
  { icon: FiSearch, title: "SEO w cenie", desc: "Schema, szybkość, treść. Gotowe do rankingu w Google od dnia 1." },
  { icon: FiSmartphone, title: "CMS z telefonu", desc: "Edytujesz tekst, ceny, zdjęcia z telefonu. Bez programisty." },
  { icon: FiShield, title: "Strona Twoja", desc: "Pełen dostęp do kodu, CMS, panelu. Bez vendor lock-in." },
  { icon: FiCode, title: "Bez WordPressa", desc: "Zero aktualizacji, zero wtyczek, zero dziur bezpieczeństwa." },
]

const targets = [
  { title: "Hydraulik, elektryk, sprzątanie", desc: "Usługi dla domu — klienci szukają w Google z miastem" },
  { title: "Gabinety i salony", desc: "Kosmetyczka, dentysta, fryzjer — rezerwacje przez stronę" },
  { title: "Freelancerzy i specjaliści", desc: "Programiści, graficy, copywriterzy — portfolio + kontakt" },
  { title: "Sklepy lokalne", desc: "Rękodzieło, żywność, vintage — sprzedaż online" },
  { title: "Kancelarie i biura", desc: "Prawnicy, księgowi, doradcy — specjalizacja" },
  { title: "Mechanika i motoryzacja", desc: "Mechanik, wulkanizator, myjnia — lokalna widoczność" },
]

const faqs = [
  { q: "Ile kosztuje strona internetowa dla małej firmy?", a: "W SEO Grow od 1 500 zł (plan Start) do 4 500 zł (plan Premium). Realne ceny rynkowe: 2 000-5 000 zł za stronę z CMS i SEO. Poniżej 1 500 zł to zwykle szablon bez SEO, powyżej 10 000 zł to agencja." },
  { q: "Ile trwa zrobienie strony dla małej firmy?", a: "W SEO Grow: 5 dni roboczych (Start/Standard) lub 7-10 dni (Premium). W agencji: 4-12 tygodni. U freelancera: 2-6 tygodni." },
  { q: "Czy mała firma potrzebuje strony z SEO?", a: "Tak, jeśli Twoi klienci szukają Twojej usługi w Google. W 2026 ponad 80% Polaków szuka lokalnych usług online. Bez SEO jesteś niewidoczny." },
  { q: "Czy mogę sam edytować stronę po oddaniu?", a: "Tak. Dostajesz CMS do edycji z telefonu. Zmiana ceny, dodanie zdjęcia, edycja treści — wszystko w 30 sekund, bez znajomości programowania." },
  { q: "Co dostaję w każdym planie?", a: "Każda strona w SEO Grow ma: domenę .pl na rok, hosting Vercel, certyfikat SSL, CMS do edycji z telefonu, SEO techniczne (schema, szybkość, Core Web Vitals), Google Search Console + Analytics, formularz kontaktowy." },
  { q: "Jak wygląda współpraca?", a: "5 dni roboczych. Dzień 1: brief online. Dzień 2-3: projekt + treść. Dzień 4: SEO + testy. Dzień 5: publikacja + GSC. Bez niespodzianek." },
]

export const StronaInternetowaDlaMalejFirmyPage = () => {
  return (
    <Box bg="white" minH="100vh">
      <SEO
        title="Strona internetowa dla małej firmy — gotowa w 5 dni, od 1 500 zł | SEO Grow"
        description="Strona internetowa dla małej firmy: szybka, mobilna, z CMS-em i SEO. Trzy plany od 1 500 zł. Bez abonamentu, bez agencji. Wdrożenie w 5 dni roboczych."
        keywords="strona internetowa dla małej firmy, strona www dla malej firmy, strona dla firm, strona dla firmy, cms dla malej firmy, strona internetowa dla firm, tania strona dla firmy"
        path="/strona-internetowa-dla-malej-firmy"
      />
      <Header />

      <Box as="main" id="main-content">
        <Hero
          badge="Dla małych firm w całej Polsce"
          h1Before="Strona internetowa"
          h1Accent="dla małej firmy"
          sub="Gotowa w 5 dni. Od 1 500 zł. Z CMS-em, którym zarządzasz sam, i SEO, które przyciąga klientów z Google."
          primaryCta="Zamów stronę"
          secondaryCta="Zobacz cennik"
          primaryHref="/zamowienie?plan=standard"
          secondaryHref="/cennik"
          trustPoints={["5 dni roboczych", "CMS z telefonu", "SEO w cenie", "Bez abonamentu"]}
        />

        <TrustLogosSection />
        <TemplatesShowcaseSection />
        <AISiteBuilderSection />
        <StatsSection />
        <WhyChooseSection />
        <ClientResultsSection />
        <GoogleReviewsSection />

        <Features
          title="6 rzeczy, które <span style='color:var(--chakra-colors-accent-600)'>zawierają się w cenie</span>"
          items={features}
        />

        <ProblemSection />
        <CustomDesignSection />
        <TargetAudienceSection />
        <Targets title="Dla jakich firm to działa?" items={targets} />

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
          title="Zamów swoją stronę — gotowa w 5 dni"
          description="Wypełnij brief online, 5 minut. Oddzwonimy w 24h z propozycją. Od 1 500 zł, bez abonamentu."
          buttonText="Zamów teraz"
          buttonHref="/zamowienie?plan=standard"
          secondaryHref="/cennik"
        />
      </Box>

      <Footer />
    </Box>
  )
}
