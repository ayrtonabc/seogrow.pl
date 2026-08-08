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
import { FiZap, FiCpu, FiEdit, FiTarget, FiTrendingUp, FiCheckCircle } from "react-icons/fi"
import { Hero, Features, Process, FAQ, Pricing, FinalCTA, Targets } from "../components/FullLandingSections"
import { SolutionSection } from "../sections/SolutionSection"
import { ModulosSection } from "../sections/ModulosSection"
import { AIBlogSection } from "../sections/AIBlogSection"
import { AISeoSection } from "../sections/AISeoSection"
import { GrowWithYouSection } from "../sections/GrowWithYouSection"
import { SEOSection } from "../sections/SEOSection"
import { FinalCTASection } from "../sections/FinalCTASection"

const features = [
  { icon: FiCpu, title: "AI pisze drafty", desc: "Artykuł 1000-1500 słów w 30 minut, nie 5 godzin. AI generuje strukturę, keywords, FAQ." },
  { icon: FiEdit, title: "Ty dodajesz głos", desc: "Copywriter poprawia ton, ekspertyzę, szczegóły. AI + człowiek = jakość + szybkość." },
  { icon: FiZap, title: "10x więcej artykułów", desc: "Bez AI: 2 artykuły / mies. Z AI: 20+. Więcej treści = lepsze SEO = więcej klientów." },
  { icon: FiTarget, title: "Schema Article auto", desc: "AI generuje structured data, OpenGraph, Twitter Card. Bez ręcznej roboty." },
  { icon: FiTrendingUp, title: "Trafia w keywords", desc: "AI analizuje GSC i Ads, wybiera frazy z potencjałem, optymalizuje pod intencję." },
  { icon: FiCheckCircle, title: "Zero ściemy", desc: "AI nie pisze 'lorem ipsum'. Generuje treść, którą ludzie czytają, nie tylko Google." },
]

const targets = [
  { title: "Blog firmowy 4+ artykuły / mies.", desc: "Stały ruch organiczny z long-tail keywords" },
  { title: "E-commerce z 100+ produktów", desc: "Opisy kategorii, poradniki, FAQ — AI generuje w godziny" },
  { title: "Firmy B2B", desc: "Treści specjalistyczne, white papers, case studies" },
  { title: "Agencje white-label", desc: "AI pisze dla klientów agencji w 10x szybciej" },
  { title: "Copywriterzy", desc: "AI jako asystent: ty edytujesz, AI generuje draft" },
  { title: "Małe firmy bez copywritera", desc: "Dostajesz jakość agencji za 1/10 ceny" },
]

const faqs = [
  { q: "Jak AI pomaga w pisaniu bloga firmowego?", a: "W SEO Grow: 1) AI analizuje Twoje keywords (z GSC i Ads), 2) Generuje draft artykułu ze strukturą H1/H2/H3, keywords, FAQ i schema markup, 3) Copywriter poprawia ton, głos marki i ekspertyzę, 4) Publikujesz. Czas: 30-60 minut na artykuł, nie 5 godzin." },
  { q: "Czy artykuły pisane przez AI są dobrej jakości?", a: "Same artykuły AI są przeciętne. Dlatego w SEO Grow: AI generuje draft (struktura, fakty, schema), copywriter dodaje głos, ekspertyzę i sprawdza. Wynik: artykuł 1000-1500 słów, unikalny, z FAQ, schema i CTA. Porównywalny z tym, co pisałby dobry copywriter, ale 5-10x szybciej." },
  { q: "Ile kosztuje blog firmowy z AI?", a: "W SEO Grow: artykuł 1000-1500 słów w cenie strony z SEO (od 1 500 zł za całość). Bez AI: 200-500 zł za artykuł. Z AI: koszt jest w cenie strony, bo my robimy treść z AI. 10x szybciej." },
  { q: "AI do tworzenia treści SEO — jak to działa?", a: "Proces: 1) AI dostaje brief (keyword, temat, intencja), 2) AI generuje draft z H1, H2, keywords, schema, FAQ, CTA, 3) Copywriter review, 4) Gotowe do publikacji. Jakość porównywalna z tradycyjnym pisaniem, ale 5-10x szybciej." },
  { q: "Czy mogę używać AI do pisania bloga sam?", a: "Tak, ale: a) Artykuły AI są generyczne, bez Twojego głosu, b) Google nie penalizuje, ale czytelnicy widzą 'AI voice', c) Lepsze: AI generuje draft, Ty edytujesz. To daje jakość + szybkość." },
  { q: "Blog AI dla firmy — ile artykułów miesięcznie?", a: "Zalecam minimum 4 artykuły miesięcznie. Bez AI to 4 × 5h = 20h. Z AI: 4 × 1h = 4h (review + publikacja). W rok masz 48 artykułów, 50-100 keywords rankujących w Google, stały ruch organiczny." },
]

export const BlogAiPage = () => {
  return (
    <Box bg="white" minH="100vh">
      <SEO
        title="Blog AI dla firmy — automatyczne artykuły SEO | SEO Grow"
        description="Blog AI dla firmy: AI pisze artykuły SEO z schema, FAQ, keywords. Copywriter poprawia, Ty publikujesz. 10x więcej treści w ułamku czasu. Sprawdź."
        keywords="blog ai, blog ai dla firmy, ai do tworzenia tresci, generowanie artykulow ai, artykuly seo ai, automatyczny blog ai, ai content marketing"
        path="/blog-ai-firmy"
      />
      <Header />

      <Box as="main" id="main-content">
        <Hero
          badge="Blog AI dla małych firm"
          h1Before="Blog AI"
          h1Accent="dla firmy"
          sub="AI pisze artykuły SEO z schema, FAQ, keywords. Copywriter poprawia, Ty publikujesz. 10x więcej treści w ułamku czasu."
          primaryCta="Zamów blog AI"
          secondaryCta="Zobacz cennik"
          primaryHref="/zamowienie?plan=premium"
          secondaryHref="/cennik"
          trustPoints={["AI + ekspert", "4 artykuły/mies.", "Schema auto", "Bez abonamentu"]}
        />

        <TrustLogosSection />
        <TemplatesShowcaseSection />
        <AISiteBuilderSection />
        <StatsSection />
        <WhyChooseSection />
        <ClientResultsSection />
        <GoogleReviewsSection />

        <Features
          title="Blog AI <span style='color:var(--chakra-colors-accent-600)'>działa 10x szybciej</span>"
          items={features}
        />

        <ProblemSection />
        <CustomDesignSection />
        <TargetAudienceSection />
        <Targets title="Dla kogo blog AI ma sens?" items={targets} />

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
          title="Blog AI dla Twojej firmy"
          description="Sprawdź plany od 1 500 zł. 4 artykuły SEO/mies. generowane przez AI, poprawiane przez eksperta. Bez abonamentu."
          buttonText="Zobacz plany"
          buttonHref="/cennik"
          secondaryHref="/zamowienie?plan=premium"
          secondaryText="Zamów Premium"
        />
      </Box>

      <Footer />
    </Box>
  )
}
