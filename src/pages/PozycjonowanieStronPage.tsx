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
import { FiZap, FiDollarSign, FiSearch, FiShield, FiCode, FiClock } from "react-icons/fi"
import { Hero, Features, Process, FAQ, Pricing, FinalCTA, Targets } from "../components/FullLandingSections"
import { SolutionSection } from "../sections/SolutionSection"
import { ModulosSection } from "../sections/ModulosSection"
import { AIBlogSection } from "../sections/AIBlogSection"
import { AISeoSection } from "../sections/AISeoSection"
import { GrowWithYouSection } from "../sections/GrowWithYouSection"
import { SEOSection } from "../sections/SEOSection"
import { FinalCTASection } from "../sections/FinalCTASection"

const features = [
  { icon: FiZap, title: "30-90 dni do Top 10", desc: "Małe miasto / nisza: pozycjonowanie stron działa 5-10x szybciej niż w dużych miastach." },
  { icon: FiDollarSign, title: "Od 1 500 zł", desc: "Strona z pozycjonowaniem od 1 500 zł jednorazowo. Bez abonamentu za 'optymalizację'." },
  { icon: FiSearch, title: "Schema + treść + linki", desc: "Schema LocalBusiness, FAQ, Service. Treść pod zapytania Twoich klientów. Linkowanie wewnętrzne." },
  { icon: FiShield, title: "Trwały efekt", desc: "Dobrze zrobione SEO działa latami. Konkurencja musi nadrobić, nie Ty płacić co miesiąc." },
  { icon: FiCode, title: "Bez technicznej wiedzy", desc: "Schema, Core Web Vitals, szybkość — zrobione przed oddaniem strony. Ty dodajesz treść z telefonu." },
  { icon: FiClock, title: "Realny timeline", desc: "Małe miasto: 30-90 dni do Top 10. Średnie: 3-6 miesięcy. Duże: 6-12 miesięcy." },
]

const targets = [
  { title: "Lokalne firmy usługowe", desc: "Hydraulik, elektryk, fryzjer, dentysta — szukają Cię w Google" },
  { title: "Sklepy e-commerce", desc: "Potrzebujesz ruchu organicznego z 1000+ produktami" },
  { title: "Kancelarie i biura", desc: "Prawnicy, księgowi, doradcy — content specjalistyczny" },
  { title: "Firmy B2B", desc: "Produkty i usługi dla innych firm — decyzje zakupowe przez Google" },
  { title: "Blogi i portale", desc: "Content sites, agregatory, blogi tematyczne" },
  { title: "Startupy SaaS", desc: "Pozycjonowanie jako główny kanał pozyskiwania klientów" },
]

const faqs = [
  { q: "Ile kosztuje pozycjonowanie strony?", a: "W modelu 'SEO wliczone w stronę' (SEO Grow) — od 1 500 zł jednorazowo. W modelu 'abonament' — 800-3 000 zł miesięcznie. Pierwszy model jest 10-30x tańszy w skali roku i daje trwały efekt." },
  { q: "Ile trwa pozycjonowanie strony?", a: "Małe miasto / nisza: 30-90 dni do Top 10. Średnie: 3-6 miesięcy. Duże: 6-12 miesięcy. Google Maps: 14-30 dni dla wizytówki z opiniami." },
  { q: "Czy mogę pozycjonować stronę sam?", a: "SEO techniczne wymaga programisty (schema, szybkość). Content SEO (treść, blog) możesz sam. Local SEO (Google Maps, opinie) możesz sam. W SEO Grow techniczne jest zrobione, content i local SEO możesz prowadzić sam." },
  { q: "Pozycjonowanie a reklama Google Ads — co lepsze?", a: "SEO daje ruch organiczny, który kumuluje się latami. Ads daje ruch natychmiast, ale znika po wyłączeniu. Dla małej firmy: zacznij od SEO, dodaj Ads gdy chcesz testować konkretną usługę." },
  { q: "Czy pozycjonowanie stron działa w małym mieście?", a: "Tak, i to szybciej niż w Warszawie. W Ostródzie, Iławie, Kętrzynie, Lubinie — Twoja strona wejdzie do Top 10 w 30-90 dni, jeśli SEO jest poprawne. W Warszawie to samo pytanie zajmie 6-12 miesięcy." },
  { q: "Co to jest pozycjonowanie stron SEO?", a: "Proces optymalizacji strony, żeby pojawiała się wysoko w Google, gdy ktoś szuka Twojej usługi. Składa się z technicznego (schema, szybkość), treści (teksty pod zapytania) i autorytetu (linki, opinie). W SEO Grow wszystko to masz w cenie strony." },
]

export const PozycjonowanieStronPage = () => {
  return (
    <Box bg="white" minH="100vh">
      <SEO
        title="Pozycjonowanie stron — SEO od 1 500 zł, bez abonamentu | SEO Grow"
        description="Pozycjonowanie stron dla firm: strona z SEO widoczna w Google. Od 1 500 zł jednorazowo, bez abonamentu. Schema, szybkość, treść, linkowanie. Sprawdź plany."
        keywords="pozycjonowanie stron, pozycjonowanie strony internetowej, pozycjonowanie stron cena, pozycjonowanie dla firm, pozycjonowanie seo, jak pozycjonowac strony"
        path="/pozycjonowanie-stron"
      />
      <Header />

      <Box as="main" id="main-content">
        <Hero
          badge="Dla firm w całej Polsce"
          h1Before="Pozycjonowanie stron"
          h1Accent="dla firm"
          sub="Strona z SEO widoczna w Google. Od 1 500 zł jednorazowo. Bez abonamentu, bez agencji. Schema, szybkość, treść i linkowanie w cenie."
          primaryCta="Zamów stronę z SEO"
          secondaryCta="Zobacz cennik"
          primaryHref="/zamowienie?plan=standard"
          secondaryHref="/cennik"
          trustPoints={["Od 1 500 zł", "Bez abonamentu", "Schema + Core Web Vitals", "5 dni roboczych"]}
        />

        <TrustLogosSection />
        <TemplatesShowcaseSection />
        <AISiteBuilderSection />
        <StatsSection />
        <WhyChooseSection />
        <ClientResultsSection />
        <GoogleReviewsSection />

        <Features
          title="Pozycjonowanie stron <span style='color:var(--chakra-colors-accent-600)'>działa latami</span>"
          items={features}
        />

        <ProblemSection />
        <CustomDesignSection />
        <TargetAudienceSection />
        <Targets title="Dla jakich firm działa pozycjonowanie stron?" items={targets} />

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
          title="Pozycjonowanie strony dla Twojej firmy"
          description="Sprawdź plany od 1 500 zł. Strona z SEO, bez abonamentu, gotowa w 5 dni."
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
