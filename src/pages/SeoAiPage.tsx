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
import { FiZap, FiCpu, FiTarget, FiTrendingUp, FiEdit, FiBarChart2 } from "react-icons/fi"
import { Hero, Features, Process, FAQ, Pricing, FinalCTA, Targets } from "../components/FullLandingSections"
import { SolutionSection } from "../sections/SolutionSection"
import { ModulosSection } from "../sections/ModulosSection"
import { AIBlogSection } from "../sections/AIBlogSection"
import { AISeoSection } from "../sections/AISeoSection"
import { GrowWithYouSection } from "../sections/GrowWithYouSection"
import { SEOSection } from "../sections/SEOSection"
import { FinalCTASection } from "../sections/FinalCTASection"

const features = [
  { icon: FiCpu, title: "AI w SEO od 1 500 zł", desc: "Strona z technicznym SEO wspieranym przez AI. Szybciej, taniej, lepiej niż agencja." },
  { icon: FiZap, title: "5-10x szybciej niż bez AI", desc: "AI pisze drafty, sugeruje keywords, optymalizuje schema. Ty tylko akceptujesz." },
  { icon: FiTarget, title: "Keywords, nie zgadywanie", desc: "AI analizuje dane z GSC, Ads i rynku. Wybiera frazy z realnym potencjałem, nie zgaduje." },
  { icon: FiEdit, title: "Treść pisana przez AI + ludzi", desc: "AI generuje draft, copywriter poprawia głos i ekspertyzę. Szybko + jakość." },
  { icon: FiTrendingUp, title: "Automatyczna optymalizacja", desc: "Co miesiąc AI sprawdza co nie działa, sugeruje zmiany title, H1, dodaje FAQ." },
  { icon: FiBarChart2, title: "Raporty bez ściemy", desc: "AI tłumaczy dane z GSC i GA4 na konkretne działania. Zero jargonu, zero BS." },
]

const targets = [
  { title: "Małe firmy bez zespołu", desc: "Nie masz marketingu ani technika — AI przejmuje robotę" },
  { title: "Blogi z 10+ artykułami/mies.", desc: "AI pisze drafty, copywriter finalizuje. 10x wydajność" },
  { title: "Sklepy e-commerce", desc: "AI generuje opisy 1000+ produktów z SEO w 1 dzień" },
  { title: "Agencje małe i średnie", desc: "AI pomaga 2-3 osobom robić robotę za 10. Marża rośnie" },
  { title: "Startupy z ograniczonym budżetem", desc: "AI pozwala robić SEO bez 10 000 zł/mies. w agencji" },
  { title: "Freelancerzy", desc: "AI wspomaga Twoją pracę, nie Cię zastępuje" },
]

const faqs = [
  { q: "Czy AI może pisać treści SEO?", a: "Tak, ale sam AI pisze przeciętne teksty. W SEO Grow: AI generuje draft (struktura, keywords, FAQ, schema), copywriter poprawia głos, ekspertyzę i ton. Wynik: artykuł 1000-1500 słów w 30 minut, nie 5 godzin." },
  { q: "Ile kosztuje SEO z AI dla małej firmy?", a: "W SEO Grow: od 1 500 zł jednorazowo za stronę z SEO wspieranym przez AI. Bez abonamentu. Strona generuje treść 5-10x szybciej niż bez AI." },
  { q: "Czy Google penalizuje treści AI?", a: "Nie, jeśli treść jest wartościowa dla użytkownika. Google mówi oficjalnie: 'Focus on quality of content, rather than how it's produced'. Ważne, żeby tekst nie był ściemą i pomagał użytkownikowi." },
  { q: "AI do SEO — co to znaczy w praktyce?", a: "AI pomaga w 4 obszarach: a) Keywords research (analiza danych GSC, Ads, rynku), b) Drafty artykułów (struktura, keywords, FAQ), c) Schema markup (auto-generate LocalBusiness, FAQ, Article), d) Raporty (tłumaczenie danych na działania). 80% roboty, ty robisz review." },
  { q: "SEO AI vs tradycyjne SEO — co lepsze?", a: "SEO z AI jest 5-10x szybsze niż tradycyjne. Te same rezultaty, ale w ułamku czasu. AI nie zastępuje eksperta, ale zastępuje godziny żmudnej pracy. W SEO Grow AI to 50% procesu, copywriter + tech to drugie 50%." },
  { q: "Czy AI w pozycjonowaniu to tylko chwyt marketingowy?", a: "Nie. Realne zastosowania AI w SEO: a) Auto-generate schema markup (5 min vs 5h), b) Analiza 1000 queries GSC w 30 sekund, c) Drafty artykułów z keywords pod intent, d) Optymalizacja title i meta pod CTR. To nie magia, to narzędzie." },
]

export const SeoAiPage = () => {
  return (
    <Box bg="white" minH="100vh">
      <SEO
        title="SEO AI — sztuczna inteligencja w pozycjonowaniu stron | SEO Grow"
        description="SEO AI: sztuczna inteligencja wspiera pozycjonowanie stron. Strona z SEO + AI od 1 500 zł, bez abonamentu. Schema, treść, keywords — AI robi 80%, Ty akceptujesz."
        keywords="seo ai, ai seo, ai w seo, sztuczna inteligencja seo, ai do pozycjonowania, ai do seo, seo z ai"
        path="/seo-ai"
      />
      <Header />

      <Box as="main" id="main-content">
        <Hero
          badge="Nowa generacja SEO — AI + ekspert"
          h1Before="SEO AI"
          h1Accent="sztuczna inteligencja"
          h1After="która pozycjonuje Twoją stronę"
          sub="AI generuje schemy, tytuły, drafty, analizuje keywords. Ty akceptujesz. Strona z SEO AI od 1 500 zł, bez abonamentu."
          primaryCta="Zamów stronę z AI SEO"
          secondaryCta="Zobacz cennik"
          primaryHref="/zamowienie?plan=standard"
          secondaryHref="/cennik"
          trustPoints={["Od 1 500 zł", "AI + ekspert", "5-10x szybciej", "Bez abonamentu"]}
        />

        <TrustLogosSection />
        <TemplatesShowcaseSection />
        <AISiteBuilderSection />
        <StatsSection />
        <WhyChooseSection />
        <ClientResultsSection />
        <GoogleReviewsSection />

        <Features
          title="SEO AI <span style='color:var(--chakra-colors-accent-600)'>działa 5-10x szybciej</span>"
          items={features}
        />

        <ProblemSection />
        <CustomDesignSection />
        <TargetAudienceSection />
        <Targets title="Dla kogo SEO AI ma sens?" items={targets} />

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
          title="SEO AI dla Twojej firmy"
          description="Sprawdź plany od 1 500 zł. Strona z SEO wspieranym przez AI. Bez abonamentu, gotowa w 5 dni."
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
