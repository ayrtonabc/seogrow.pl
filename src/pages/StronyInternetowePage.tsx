import { SEOLandingPage } from "../components/SEOLandingPage"

export const StronyInternetowePage = () => (
  <SEOLandingPage
    path="/strony-internetowe"
    title="Strony internetowe dla firmy — gotowe w 5 dni, od 1 500 zł | SEO Grow"
    description="Strony internetowe dla firm małych i średnich. Od 1500 zł jednorazowo, gotowe w 5 dni, z CMS-em i SEO. Bez abonamentu, bez umowy. Sprawdź plany →"
    keywords="strony internetowe, strona internetowa dla firmy, tworzenie stron www, strona www dla firmy, strona internetowa cena, strona www firmowa"
    h1="Strony internetowe"
    h1Accent="dla firmy"
    h1Sub="Gotowe w 5 dni. Z CMS-em i SEO. Od 1 500 zł."
    heroImage="/panel.webp"
    heroImageAlt="Strony internetowe dla firmy — panel SEO Grow"
    breadcrumb={[{ name: "Strona główna", href: "/" }, { name: "Strony internetowe", href: "/strony-internetowe" }]}
    sections={[
      {
        heading: "Jak wygląda realizacja strony internetowej w SEO Grow?",
        content: "Każda strona przechodzi te same 5 etapów: brief (15 min rozmowy), projekt (mockup strony głównej), realizacja (kod + treść), testy (mobile, PageSpeed, formularze), publikacja. Od podpisania do działającej strony mija 5 dni roboczych. Bez niespodzianek, bez opóźnień.",
        image: "/automat.webp",
        imageAlt: "Jak powstaje strona internetowa",
        highlights: [
          "Dzień 1: brief, cel, grupa docelowa, słowa kluczowe",
          "Dzień 2-3: projekt graficzny + realizacja",
          "Dzień 4: treść + SEO + testy",
          "Dzień 5: publikacja + podpięcie Search Console",
        ],
      },
      {
        heading: "Ile kosztuje strona internetowa dla firmy?",
        content: "W SEO Grow strona zaczyna się od 1 500 zł (plan Start) i rośnie do 4 500 zł (plan Premium z blogiem i modułami). W cenę wliczone: domena na rok, hosting, CMS, SEO techniczne, wsparcie po polsku. Nie ma opłat ukrytych, nie ma prowizji od zapytań.",
        image: "/copy.webp",
        imageAlt: "Cennik stron internetowych",
        imagePosition: "left",
        highlights: [
          "Start: 1 500 zł — landing page do 1 strony",
          "Standard: 2 200 zł — strona firmowa 3-5 podstron",
          "Premium: 4 500 zł — pełna strona z blogiem i modułami",
          "Abonament miesięczny: 49 / 69 / 99 zł (hosting + CMS + wsparcie)",
        ],
      },
      {
        heading: "Co dostajesz w każdym planie?",
        content: "Każda strona w SEO Grow ma: własną domenę, certyfikat SSL, CMS do edycji z telefonu, SEO techniczne (schema, Core Web Vitals, szybkość), Google Search Console i Analytics, formularz kontaktowy, mapę Google, integrację z social media. Różnica między planami to liczba podstron i modułów, nie 'co jest w środku'.",
        image: "/panel.webp",
        imageAlt: "Co zawiera każda strona SEO Grow",
        highlights: [
          "Domena .pl na rok (40-100 zł)",
          "Hosting Vercel (szybki, darmowy plan)",
          "CMS z edycją z telefonu",
          "SEO techniczne od dnia 1",
          "Google Search Console + Analytics",
        ],
      },
      {
        heading: "Dla kogo są nasze strony?",
        content: "Dla małych i średnich firm, które chcą być widoczne w Google, a nie chcą bawić się w aktualizacje WordPressa. Dla rzemieślników, gabinetów, freelancerów, sklepów lokalnych, kancelarii, salonów. Dla każdego, kto chce stronę szybką, edytowalną, w polskim CMS i z polskim supportem.",
        image: "/automat.webp",
        imageAlt: "Dla kogo jest SEO Grow",
        imagePosition: "left",
        highlights: [
          "Małe firmy usługowe (hydraulik, elektryk, salon)",
          "Gabinety (kosmetyczny, stomatologiczny, masażu)",
          "Freelancerzy (programiści, graficy, copywriterzy)",
          "Sklepy lokalne (rękodzieło, żywność, vintage)",
          "Kancelarie i biura (prawnicy, księgowi, doradcy)",
        ],
      },
    ]}
    features={[
      {
        icon: "🚀",
        title: "Gotowe w 5 dni",
        description: "Od briefu do publikacji — 5 dni roboczych. Bez opóźnień, bez 'kolejnej iteracji projektu'.",
      },
      {
        icon: "📱",
        title: "Mobile-first",
        description: "Strona testowana na telefonie, tablecie i komputerze. 70% Twoich klientów wejdzie z telefonu.",
      },
      {
        icon: "🔍",
        title: "SEO w cenie",
        description: "Schema, szybkość, treść, linkowanie wewnętrzne. Nie trzeba płacić osobno za 'optymalizację'.",
      },
      {
        icon: "💼",
        title: "Strona Twoja",
        description: "Pełen dostęp do kodu, CMS-a, panelu. Po 5 latach nadal Twoja. Bez vendor lock-in.",
      },
    ]}
    faq={[
      {
        q: "Ile kosztuje strona internetowa dla małej firmy w 2026?",
        a: "W Polsce ceny wahają się od 500 zł (szablon z Allegro) do 50 000 zł (agencja z indywidualnym projektem). Realna strona firmowa z SEO: 2 000 - 5 000 zł. W SEO Grow: 1 500 - 4 500 zł + 49-99 zł/mies. za hosting i CMS.",
      },
      {
        q: "Ile trwa zrobienie strony internetowej?",
        a: "W SEO Grow: 5 dni roboczych. W agencji: 4-12 tygodni. U freelancera: 2-6 tygodni. Wix/Squarespace: 1-2 dni samodzielnie, ale SEO jest ograniczone.",
      },
      {
        q: "Czy dostanę dostęp do CMS-a i kodu strony?",
        a: "Tak. Pełen dostęp do CMS-a (edycja treści z telefonu), kodu źródłowego (na GitHub), panelu Vercel (hosting). Strona jest Twoja od dnia 1.",
      },
      {
        q: "Czy mogę przenieść stronę do innej firmy?",
        a: "Tak. Dostajesz kod, dokumentację, dostęp do wszystkiego. Nowa firma może rozwijać stronę bez nas.",
      },
    ]}
    ctaTitle="Strona internetowa dla Twojej firmy"
    ctaDescription="Sprawdź plany od 1 500 zł. Bez abonamentu, gotowa w 5 dni, z CMS-em i SEO."
    ctaButtonText="Zobacz plany"
    ctaButtonHref="/cennik"
  />
)

