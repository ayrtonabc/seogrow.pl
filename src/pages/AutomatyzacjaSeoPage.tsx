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
import { FiZap, FiCpu, FiTrendingUp, FiBarChart2, FiCheckCircle, FiRefreshCw } from "react-icons/fi"
import { Hero, Features, Process, FAQ, Pricing, FinalCTA, Targets } from "../components/FullLandingSections"
import { SolutionSection } from "../sections/SolutionSection"
import { ModulosSection } from "../sections/ModulosSection"
import { AIBlogSection } from "../sections/AIBlogSection"
import { AISeoSection } from "../sections/AISeoSection"
import { GrowWithYouSection } from "../sections/GrowWithYouSection"
import { SEOSection } from "../sections/SEOSection"
import { FinalCTASection } from "../sections/FinalCTASection"

const features = [
  { icon: FiCpu, title: "AI monitoruje 24/7", desc: "Co tydzień AI sprawdza pozycje, CTR, ruch, nowe keywords. Bez Ciebie." },
  { icon: FiRefreshCw, title: "Auto-optymalizacja", desc: "AI sugeruje zmiany title, H1, dodaje FAQ, poprawia schema. Ty akceptujesz." },
  { icon: FiBarChart2, title: "Raporty w 30 sek", desc: "Co miesiąc dostajesz raport: co działa, co nie, co zmienić. Bez godzin analizy." },
  { icon: FiTrendingUp, title: "Crawl budget optymalizacja", desc: "AI sprawdza, które strony Google indeksuje, a które ignoruje. Sugeruje fixy." },
  { icon: FiCheckCircle, title: "Bez błędów technicznych", desc: "AI wykrywa broken links, brakujące meta, wolne strony. Szybciej niż ręcznie." },
  { icon: FiZap, title: "5x szybciej niż ręcznie", desc: "Audyt 100-stronowej witryny: 5h ręcznie, 30 minut z AI." },
]

const targets = [
  { title: "Agencje SEO", desc: "10x wydajność — robisz robotę 2-3 osobom dla 10 klientów" },
  { title: "E-commerce 100+ produktów", desc: "Audyt sklepu 1000+ produktów w 1h zamiast tygodnia" },
  { title: "Blogi contentowe", desc: "Auto-monitorowanie 100+ artykułów, sugestie aktualizacji" },
  { title: "Sklepy sezonowe", desc: "AI dostosowuje SEO pod sezon (lato/zima, promocje)" },
  { title: "Multi-locale", desc: "SEO PL/EN/ES/DE bez powielania pracy" },
  { title: "Małe firmy bez zespołu", desc: "AI robi audyt co miesiąc, Ty weryfikujesz 5 minut" },
]

const faqs = [
  { q: "Czym jest automatyzacja SEO?", a: "Proces, w którym AI przejmuje powtarzalne zadania SEO: monitorowanie pozycji, audyty techniczne, generowanie raportów, sugerowanie optymalizacji. Efekt: 5-10x szybsze SEO bez zatrudniania zespołu." },
  { q: "Ile kosztuje automatyzacja SEO?", a: "W SEO Grow: w cenie strony (od 1 500 zł). AI monitoruje, generuje raporty, sugeruje zmiany. Bez abonamentu. Alternatywa: Ahrefs/SEMrush = 100-500 USD/mies., BrightEdge = 1000+ USD/mies." },
  { q: "Co AI w SEO może zrobić sam, a co wymaga człowieka?", a: "AI sam: monitorowanie pozycji, audyt techniczny, generowanie raportów, drafty artykułów, schema markup. Człowiek: strategia contentu, decyzje biznesowe, finalna edycja, review. W SEO Grow: AI 80%, ekspert 20%." },
  { q: "Automatyczne pozycjonowanie — czy to działa?", a: "Tak, ale nie samo. AI automatyzuje powtarzalne zadania (audyty, raporty, monitoring), ale strategia i decyzje to rola eksperta. Czyste 'automatyczne SEO' bez strategii nie daje efektów. W SEO Grow: AI + ekspert = 5x szybciej." },
  { q: "Ile czasu zajmuje SEO bez automatyzacji?", a: "Bez AI: 2-3 dni / mies. (audyt, raporty, monitoring, optymalizacje). Z AI: 1-2 godziny / mies. (review AI). ROI: 10-20x. Czas zwraca się w pierwszym miesiącu." },
  { q: "Automatyzacja SEO a agencja — co lepsze?", a: "Agencja: 1500-5000 zł/mies. + 6-12 miesięcy czekania. AI + ekspert: 1500 zł jednorazowo + 30-90 dni. AI nie śpi, nie ma weekendów, nie popełnia literówek. W SEO Grow: AI robi robotę, ekspert decyduje." },
]

export const AutomatyzacjaSeoPage = () => {
  return (
    <Box bg="white" minH="100vh">
      <SEO
        title="Automatyzacja SEO — AI w pozycjonowaniu stron | SEO Grow"
        description="Automatyzacja SEO wspierana przez AI: monitorowanie 24/7, audyty, raporty, optymalizacje. Od 1 500 zł z SEO. Bez abonamentu. Sprawdź."
        keywords="automatyzacja seo, automatyczne seo, automatyczne pozycjonowanie, ai w seo, seo ai, automatyzacja pozycjonowania"
        path="/automatyzacja-seo"
      />
      <Header />

      <Box as="main" id="main-content">
        <Hero
          badge="Automatyzacja SEO dla małych firm"
          h1Before="Automatyzacja"
          h1Accent="SEO"
          h1After="wspierana przez AI"
          sub="AI monitoruje pozycje 24/7, generuje raporty, sugeruje optymalizacje. Ty akceptujesz. Od 1 500 zł, bez abonamentu."
          primaryCta="Zamów SEO z automatyzacją"
          secondaryCta="Zobacz cennik"
          primaryHref="/zamowienie?plan=standard"
          secondaryHref="/cennik"
          trustPoints={["AI 24/7", "Raporty auto", "Od 1 500 zł", "Bez abonamentu"]}
        />

        <TrustLogosSection />
        <TemplatesShowcaseSection />
        <AISiteBuilderSection />
        <StatsSection />
        <WhyChooseSection />
        <ClientResultsSection />
        <GoogleReviewsSection />

        <Features
          title="Automatyzacja SEO <span style='color:var(--chakra-colors-accent-600)'>robi robotę 5x szybciej</span>"
          items={features}
        />

        <ProblemSection />
        <CustomDesignSection />
        <TargetAudienceSection />
        <Targets title="Dla kogo automatyzacja SEO ma sens?" items={targets} />

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
          title="Automatyzacja SEO dla Twojej firmy"
          description="Sprawdź plany od 1 500 zł. AI monitoruje 24/7, sugeruje zmiany. Bez abonamentu, gotowa w 5 dni."
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
