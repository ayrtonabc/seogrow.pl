import { Suspense, lazy } from "react"
import { Box } from "@chakra-ui/react"
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import { Header } from "./components/Header"
import { CookieBanner } from "./components/CookieBanner"
import { DeferredRender } from "./components/DeferredRender"
import { SEO, SITE_URL } from "./components/SEO"
import { FloatingCallButton } from "./components/FloatingCallButton"
import { TranslationBanner } from "./components/LanguageSwitcher"
import { HeroSection } from "./sections/HeroSection"
import { TrustLogosSection } from "./sections/TrustLogosSection"
import { AISiteBuilderSection } from "./sections/AISiteBuilderSection"
import { TemplatesShowcaseSection } from "./sections/TemplatesShowcaseSection"
import { StatsSection } from "./sections/StatsSection"
import { ClientResultsSection } from "./sections/ClientResultsSection"
import { GoogleReviewsSection } from "./sections/GoogleReviewsSection"
import { WhyChooseSection } from "./sections/WhyChooseSection"
import { ProblemSection } from "./sections/ProblemSection"
import { CustomDesignSection } from "./sections/CustomDesignSection"
import { TargetAudienceSection } from "./sections/TargetAudienceSection"
import { ScrollToTop } from "./components/ScrollToTop"
import { PrefetchLinks } from "./components/PrefetchLinks"
import { faqs } from "./data/faqs"
import { cityRoutePaths } from "./data/cityRouteImports"
import {
  WarminskoMazurskieHubPage,
  PomorskieHubPage,
  WielkopolskieHubPage,
  PodkarpackieHubPage,
  LodzkieHubPage,
  DolnoslaskieHubPage,
  ZachodniopomorskieHubPage,
  SwietokrzyskieHubPage,
  KujawskoPomorskieHubPage,
  MazowieckieHubPage,
  PodlaskieHubPage,
  LubelskieHubPage,
  MalopolskieHubPage,
} from "./pages/VoivodeshipHubs"
import { GrowWithYouSection } from "./sections/GrowWithYouSection"
import { FinalCTASection } from "./sections/FinalCTASection"

const SupportPage = lazy(() =>
  import("./pages/SupportPage").then((module) => ({ default: module.SupportPage })),
)
const BlogPage = lazy(() =>
  import("./pages/BlogPage").then((module) => ({ default: module.BlogPage })),
)
const BlogPostPage = lazy(() =>
  import("./pages/BlogPostPage").then((module) => ({ default: module.BlogPostPage })),
)
const OrderPage = lazy(() =>
  import("./pages/OrderPage").then((module) => ({ default: module.OrderPage })),
)
const OrderConfigPage = lazy(() =>
  import("./pages/order/OrderConfigPage").then((module) => ({ default: module.OrderConfigPage })),
)
const PaymentPage = lazy(() =>
  import("./pages/order/PaymentPage").then((module) => ({ default: module.PaymentPage })),
)
const IntakeFormPage = lazy(() =>
  import("./pages/order/IntakeFormPage").then((module) => ({ default: module.IntakeFormPage })),
)
const ThankYouPage = lazy(() =>
  import("./pages/order/ThankYouPage").then((module) => ({ default: module.ThankYouPage })),
)
const PrivacyPolicyPage = lazy(() =>
  import("./pages/LegalPages").then((module) => ({ default: module.PrivacyPolicyPage })),
)
const CookiesPolicyPage = lazy(() =>
  import("./pages/LegalPages").then((module) => ({ default: module.CookiesPolicyPage })),
)
const DataProcessingPage = lazy(() =>
  import("./pages/LegalPages").then((module) => ({ default: module.DataProcessingPage })),
)
const RegulaminPage = lazy(() =>
  import("./pages/RegulaminPage").then((module) => ({ default: module.RegulaminPage })),
)
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((module) => ({ default: module.AboutPage })),
)
const RealizacjePage = lazy(() =>
  import("./pages/RealizacjePage").then((module) => ({ default: module.RealizacjePage })),
)
const KarieraPage = lazy(() =>
  import("./pages/KarieraPage").then((module) => ({ default: module.KarieraPage })),
)
const CMSSESPage = lazy(() =>
  import("./pages/CMSSESPage").then((module) => ({ default: module.CMSSESPage })),
)
const CMSSESPequePage = lazy(() =>
  import("./pages/CMSSESPequePage").then((module) => ({ default: module.CMSSESPequePage })),
)
const CMSAutoSEOPage = lazy(() =>
  import("./pages/CMSAutoSEOPage").then((module) => ({ default: module.CMSAutoSEOPage })),
)
const CrearPaginaWebSEOPage = lazy(() =>
  import("./pages/CrearPaginaWebSEOPage").then((module) => ({ default: module.CrearPaginaWebSEOPage })),
)
const AlternativaWordPressPage = lazy(() =>
  import("./pages/AlternativaWordPressPage").then((module) => ({ default: module.AlternativaWordPressPage })),
)
const WordPressVsPage = lazy(() =>
  import("./pages/WordPressVsPage").then((module) => ({ default: module.WordPressVsPage })),
)
const WixVsPage = lazy(() =>
  import("./pages/WixVsPage").then((module) => ({ default: module.WixVsPage })),
)
const DlaczegoNiePojawiaPage = lazy(() =>
  import("./pages/DlaczegoNiePojawiaPage").then((module) => ({ default: module.DlaczegoNiePojawiaPage })),
)
const JakSzybkoWyjscPage = lazy(() =>
  import("./pages/JakSzybkoWyjscPage").then((module) => ({ default: module.JakSzybkoWyjscPage })),
)
const NajczestszeBledyPage = lazy(() =>
  import("./pages/NajczestszeBledyPage").then((module) => ({ default: module.NajczestszeBledyPage })),
)
const SklepOnlinePage = lazy(() =>
  import("./pages/SklepOnlinePage").then((m) => ({ default: m.SklepOnlinePage })),
)
const AkademiaKursowPage = lazy(() =>
  import("./pages/AkademiaKursowPage").then((m) => ({ default: m.AkademiaKursowPage })),
)
const RezerwacjeTerminyPage = lazy(() =>
  import("./pages/RezerwacjeTerminyPage").then((m) => ({ default: m.RezerwacjeTerminyPage })),
)
const MenuCyfrowePage = lazy(() =>
  import("./pages/MenuCyfrowePage").then((m) => ({ default: m.MenuCyfrowePage })),
)
const EkspansjaGlobalnaPage = lazy(() =>
  import("./pages/EkspansjaGlobalnaPage").then((m) => ({ default: m.EkspansjaGlobalnaPage })),
)
const ComparisonConWordPressPage = lazy(() =>
  import("./pages/ComparisonConWordPressPage").then((m) => ({ default: m.ComparisonConWordPressPage })),
)
const WizytowkaPracPage = lazy(() =>
  import("./pages/EkspansjaGlobalnaPage").then((m) => ({ default: m.WizytowkaPracPage })),
)
const StronaDlaPrawnikaPage = lazy(() =>
  import("./pages/VerticalPages").then((module) => ({ default: module.StronaDlaPrawnikaPage })),
)
const StronaDlaKlinikiPage = lazy(() =>
  import("./pages/VerticalPages").then((module) => ({ default: module.StronaDlaKlinikiPage })),
)
const StronaDlaGabinetuStomatologicznegoPage = lazy(() =>
  import("./pages/VerticalPages").then((module) => ({ default: module.StronaDlaGabinetuStomatologicznegoPage })),
)
const StronaDlaRestauracjiPage = lazy(() =>
  import("./pages/VerticalPages").then((module) => ({ default: module.StronaDlaRestauracjiPage })),
)
const StronaDlaFreelanceraPage = lazy(() =>
  import("./pages/VerticalPagesTier1").then((m) => ({ default: m.StronaDlaFreelanceraPage })),
)
const StronaDlaWarsztatuSamochodowegoPage = lazy(() =>
  import("./pages/VerticalPagesTier1").then((m) => ({ default: m.StronaDlaWarsztatuSamochodowegoPage })),
)
const StronaDlaKosmetyczkiPage = lazy(() =>
  import("./pages/VerticalPagesTier1").then((m) => ({ default: m.StronaDlaKosmetyczkiPage })),
)
const StronaDlaFryzjeraPage = lazy(() =>
  import("./pages/VerticalPagesTier1").then((m) => ({ default: m.StronaDlaFryzjeraPage })),
)
const StronaDlaPsychologaPage = lazy(() =>
  import("./pages/VerticalPagesTier1").then((m) => ({ default: m.StronaDlaPsychologaPage })),
)
const StronaDlaFizjoterapeutyPage = lazy(() =>
  import("./pages/VerticalPagesTier1").then((m) => ({ default: m.StronaDlaFizjoterapeutyPage })),
)

const StronaInternetowaWarszawaPage = lazy(() =>
  import("./pages/CityPages").then((m) => ({ default: m.StronaInternetowaWarszawaPage })),
)
const StronaInternetowaKrakowPage = lazy(() =>
  import("./pages/CityPages").then((m) => ({ default: m.StronaInternetowaKrakowPage })),
)
const StronaInternetowaLodzPage = lazy(() =>
  import("./pages/CityPages").then((m) => ({ default: m.StronaInternetowaLodzPage })),
)
const StronaInternetowaWroclawPage = lazy(() =>
  import("./pages/CityPages").then((m) => ({ default: m.StronaInternetowaWroclawPage })),
)

const PozycjonowanieStronDlaFirmPage = lazy(() =>
  import("./pages/ServicePages").then((m) => ({ default: m.PozycjonowanieStronDlaFirmPage })),
)
const TaniaStronaInternetowaDlaFirmyPage = lazy(() =>
  import("./pages/ServicePages").then((m) => ({ default: m.TaniaStronaInternetowaDlaFirmyPage })),
)
const ObslugaStronyInternetowejPage = lazy(() =>
  import("./pages/ServicePages").then((m) => ({ default: m.ObslugaStronyInternetowejPage })),
)
const SeoLokalneDlaFirmPage = lazy(() =>
  import("./pages/ServicePages").then((m) => ({ default: m.SeoLokalneDlaFirmPage })),
)
const CennikPage = lazy(() =>
  import("./pages/CennikPage").then((m) => ({ default: m.CennikPage })),
)

const StronaDlaFotografaPage = lazy(() =>
  import("./pages/VerticalPagesTier2").then((m) => ({ default: m.StronaDlaFotografaPage })),
)
const StronaDlaHoteluPage = lazy(() =>
  import("./pages/VerticalPagesTier2").then((m) => ({ default: m.StronaDlaHoteluPage })),
)
const StronaDlaArchitektaPage = lazy(() =>
  import("./pages/VerticalPagesTier2").then((m) => ({ default: m.StronaDlaArchitektaPage })),
)
const StronaDlaAgencjiNieruchomosciPage = lazy(() =>
  import("./pages/VerticalPagesTier2").then((m) => ({ default: m.StronaDlaAgencjiNieruchomosciPage })),
)
const StronaDlaKancelariiPrawnejPage = lazy(() =>
  import("./pages/VerticalPagesTier2").then((m) => ({ default: m.StronaDlaKancelariiPrawnejPage })),
)
const StronaDlaMechanikaPage = lazy(() =>
  import("./pages/VerticalPagesTier2").then((m) => ({ default: m.StronaDlaMechanikaPage })),
)
const StronaDlaTreneraPersonalnegoPage = lazy(() =>
  import("./pages/VerticalPagesTier2").then((m) => ({ default: m.StronaDlaTreneraPersonalnegoPage })),
)
const StronaDlaProjektantaWnetrzPage = lazy(() =>
  import("./pages/VerticalPagesTier2").then((m) => ({ default: m.StronaDlaProjektantaWnetrzPage })),
)
const StronaDlaDentystyPage = lazy(() =>
  import("./pages/VerticalPagesTier2").then((m) => ({ default: m.StronaDlaDentystyPage })),
)
const StronaDlaWeterynarzaPage = lazy(() =>
  import("./pages/VerticalPagesTier2").then((m) => ({ default: m.StronaDlaWeterynarzaPage })),
)

const Footer = lazy(() =>
  import("./components/Footer").then((module) => ({ default: module.Footer })),
)
const PressKitPage = lazy(() =>
  import("./pages/PressKitPage").then((module) => ({ default: module.PressKitPage })),
)
const KontaktPage = lazy(() =>
  import("./pages/KontaktPage").then((module) => ({ default: module.KontaktPage })),
)
const ModulosSection = lazy(() =>
  import("./sections/ModulosSection").then((module) => ({ default: module.ModulosSection })),
)
const PricingSection = lazy(() =>
  import("./sections/PricingSection").then((module) => ({ default: module.PricingSection })),
)
const SolutionSection = lazy(() =>
  import("./sections/SolutionSection").then((module) => ({ default: module.SolutionSection })),
)
const SEOSection = lazy(() =>
  import("./sections/SEOSection").then((module) => ({ default: module.SEOSection })),
)
const FAQSection = lazy(() =>
  import("./sections/FAQSection").then((module) => ({ default: module.FAQSection })),
)

// Schema for landing page lives in index.html (comprehensive @graph with 9 entities).
// Single source of truth to avoid duplicate @type entries.
const homeSchema: unknown[] = []

function LandingPage() {
  return (
    <Box bg="white" minH="100vh">
      <SEO
        title="Strona z SEO dla firmy — od 1 500 zł, w 5 dni | SEO Grow"
        description="Strona internetowa z SEO dla Twojej firmy. Od 1 500 zł, gotowa w 5 dni, z panelem do zarządzania. Bez umowy, bez agencji, bez WordPressa."
        path="/"
        image="/panel.webp"
        keywords="strona internetowa dla firmy, strona www, strona dla firmy, strona widoczna w google, strona dla rzemieślnika, strona dla freelancera, strona dla gabinetu, cms dla firmy"
        schema={homeSchema}
      />
      {/* Skip to Content Link for Accessibility */}
      <Box
        as="a"
        href="#main-content"
        position="absolute"
        left="-9999px"
        top="4"
        zIndex="9999"
        bg="accent.600"
        color="white"
        px="6"
        py="3"
        rounded="md"
        fontWeight="bold"
        _focus={{ left: "4" }}
        transition="left 0.2s ease-in-out"
      >
        Przejdź do głównej treści
      </Box>

      <Header />
      <Box as="main" id="main-content" tabIndex={-1} outline="none">
        <HeroSection />
        <TrustLogosSection />
        <TemplatesShowcaseSection />
        <AISiteBuilderSection />
        <StatsSection />
        <WhyChooseSection />
        <ClientResultsSection />
        <GoogleReviewsSection />
        <ProblemSection />
        <CustomDesignSection />
        <TargetAudienceSection />
        <DeferredRender fallback={<Box minH={{ base: "320px", md: "480px" }} bg="white" />}>
          <Suspense fallback={<Box minH={{ base: "320px", md: "480px" }} bg="white" />}>
            <SolutionSection />
            <ModulosSection />
            <PricingSection />
            <GrowWithYouSection />
            <SEOSection />
            <FAQSection />
            <FinalCTASection />
          </Suspense>
        </DeferredRender>
      </Box>
      <DeferredRender fallback={<Box as="footer" minH="320px" bg="fg.default" />}>
        <Suspense fallback={<Box as="footer" minH="320px" bg="fg.default" />}>
          <Footer />
        </Suspense>
      </DeferredRender>
    </Box>
  )
}

// v7 ships the full data router (loaders, fetchers, hydration, scroll restoration)
// by default with <BrowserRouter>, which evaluates ~90KB of code on init even for
// plain declarative routes. `unstable_HistoryRouter` reuses the lighter v6-style
// history API and skips the data router machinery — same <Routes>/<Route>/<Link>
// ergonomics, much less JS to parse on mobile.
const history = createBrowserHistory()

function App() {
  return (
    <HistoryRouter history={history}>
      <ScrollToTop />
      <CookieBanner />
      <FloatingCallButton />
      <DeferredRender>
        <PrefetchLinks />
      </DeferredRender>
      <Suspense fallback={<Box minH="100vh" bg="bg.subtle" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wsparcie" element={<SupportPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/zamowienie" element={<OrderPage />} />
          <Route path="/zamowienie/:plan/configure" element={<OrderConfigPage />} />
          <Route path="/zamowienie/:plan/payment" element={<PaymentPage />} />
          <Route path="/zamowienie/:plan/intake" element={<IntakeFormPage />} />
          <Route path="/zamowienie/:plan/dziekujemy" element={<ThankYouPage />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
          <Route path="/polityka-cookies" element={<CookiesPolicyPage />} />
          <Route path="/przetwarzanie-danych" element={<DataProcessingPage />} />
          <Route path="/regulamin" element={<RegulaminPage />} />
          <Route path="/cms-seo" element={<CMSSESPage />} />
          <Route path="/cms-seo-pequenas-empresas" element={<CMSSESPequePage />} />
          <Route path="/cms-con-seo-automatico" element={<CMSAutoSEOPage />} />
          <Route path="/crear-pagina-web-seo" element={<CrearPaginaWebSEOPage />} />
          <Route path="/alternativa-wordpress-seo" element={<AlternativaWordPressPage />} />
          <Route path="/wordpress-vs-seogrow" element={<WordPressVsPage />} />
          <Route path="/wix-vs-seogrow" element={<WixVsPage />} />
          <Route path="/dlaczego-moja-strona-nie-pojawia-sie-w-google" element={<DlaczegoNiePojawiaPage />} />
          <Route path="/jak-szybko-wyjsc-w-google" element={<JakSzybkoWyjscPage />} />
          <Route path="/najczestsze-bledy-seo" element={<NajczestszeBledyPage />} />
          <Route path="/strona-dla-prawnika" element={<StronaDlaPrawnikaPage />} />
          <Route path="/strona-dla-kliniki" element={<StronaDlaKlinikiPage />} />
          <Route path="/strona-dla-gabinetu-stomatologicznego" element={<StronaDlaGabinetuStomatologicznegoPage />} />
          <Route path="/strona-dla-restauracji" element={<StronaDlaRestauracjiPage />} />
          <Route path="/strona-dla-freelancera" element={<StronaDlaFreelanceraPage />} />
          <Route path="/strona-dla-warsztatu-samochodowego" element={<StronaDlaWarsztatuSamochodowegoPage />} />
          <Route path="/strona-dla-kosmetyczki" element={<StronaDlaKosmetyczkiPage />} />
          <Route path="/strona-dla-fryzjera" element={<StronaDlaFryzjeraPage />} />
          <Route path="/strona-dla-psychologa" element={<StronaDlaPsychologaPage />} />
          <Route path="/strona-dla-fizjoterapeuty" element={<StronaDlaFizjoterapeutyPage />} />
          <Route path="/strona-internetowa-warszawa" element={<StronaInternetowaWarszawaPage />} />
          <Route path="/strona-internetowa-krakow" element={<StronaInternetowaKrakowPage />} />
          <Route path="/strona-internetowa-lodz" element={<StronaInternetowaLodzPage />} />
          <Route path="/strona-internetowa-wroclaw" element={<StronaInternetowaWroclawPage />} />
          {cityRoutePaths.map(({ path, component: C }) => (
            <Route key={path} path={path} element={<C />} />
          ))}
          <Route path="/warminsko-mazurskie" element={<WarminskoMazurskieHubPage />} />
          <Route path="/pomorskie" element={<PomorskieHubPage />} />
          <Route path="/wielkopolskie" element={<WielkopolskieHubPage />} />
          <Route path="/podkarpackie" element={<PodkarpackieHubPage />} />
          <Route path="/lodzkie" element={<LodzkieHubPage />} />
          <Route path="/dolnoslaskie" element={<DolnoslaskieHubPage />} />
          <Route path="/zachodniopomorskie" element={<ZachodniopomorskieHubPage />} />
          <Route path="/swietokrzyskie" element={<SwietokrzyskieHubPage />} />
          <Route path="/kujawsko-pomorskie" element={<KujawskoPomorskieHubPage />} />
          <Route path="/mazowieckie" element={<MazowieckieHubPage />} />
          <Route path="/podlaskie" element={<PodlaskieHubPage />} />
          <Route path="/lubelskie" element={<LubelskieHubPage />} />
          <Route path="/malopolskie" element={<MalopolskieHubPage />} />
          <Route path="/pozycjonowanie-stron-dla-firm" element={<PozycjonowanieStronDlaFirmPage />} />
          <Route path="/tania-strona-internetowa-dla-firmy" element={<TaniaStronaInternetowaDlaFirmyPage />} />
          <Route path="/obsluga-strony-internetowej" element={<ObslugaStronyInternetowejPage />} />
          <Route path="/seo-lokalne-dla-firm" element={<SeoLokalneDlaFirmPage />} />
          <Route path="/cennik" element={<CennikPage />} />
          <Route path="/press" element={<PressKitPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/realizacje" element={<RealizacjePage />} />
          <Route path="/kariera" element={<KarieraPage />} />
          <Route path="/strona-dla-fotografa" element={<StronaDlaFotografaPage />} />
          <Route path="/strona-dla-hotelu" element={<StronaDlaHoteluPage />} />
          <Route path="/strona-dla-architekta" element={<StronaDlaArchitektaPage />} />
          <Route path="/strona-dla-agencji-nieruchomosci" element={<StronaDlaAgencjiNieruchomosciPage />} />
          <Route path="/strona-dla-kancelarii-prawnej" element={<StronaDlaKancelariiPrawnejPage />} />
          <Route path="/strona-dla-mechanika" element={<StronaDlaMechanikaPage />} />
          <Route path="/strona-dla-trenera-personalnego" element={<StronaDlaTreneraPersonalnegoPage />} />
          <Route path="/strona-dla-projektanta-wnetrz" element={<StronaDlaProjektantaWnetrzPage />} />
          <Route path="/strona-dla-dentysty" element={<StronaDlaDentystyPage />} />
          <Route path="/strona-dla-weterynarza" element={<StronaDlaWeterynarzaPage />} />
          <Route path="/sklep-online" element={<SklepOnlinePage />} />
          <Route path="/akademia-kursow" element={<AkademiaKursowPage />} />
          <Route path="/rezerwacje-i-terminy" element={<RezerwacjeTerminyPage />} />
          <Route path="/menu-cyfrowe" element={<MenuCyfrowePage />} />
          <Route path="/ekspansja-globalna" element={<EkspansjaGlobalnaPage />} />
          <Route path="/comparacion-con-wordpress" element={<ComparisonConWordPressPage />} />
          <Route path="/wizytowka-prac" element={<WizytowkaPracPage />} />
        </Routes>
      </Suspense>
    </HistoryRouter>
  )
}

export default App
