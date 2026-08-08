import { SEOLandingPage } from "../components/SEOLandingPage"

export const SeoDlaMalychFirmPage = () => (
  <SEOLandingPage
    path="/seo-dla-malych-firm"
    title="SEO dla małych firm — strona widoczna w Google, od 1 500 zł | SEO Grow"
    description="SEO dla małych firm: strona zoptymalizowana pod Google od dnia 1. Schema, szybkość, treść, lokalne SEO. Bez abonamentu, bez agencji. Sprawdź plany →"
    keywords="seo dla małych firm, lokalne seo dla małych firm, pozycjonowanie małej firmy, seo lokalne, strona widoczna w google, cms seo dla firmy"
    h1="SEO dla"
    h1Accent="małych firm"
    h1Sub="Strona, która klienci znajdują w Google. Bez agencji i bez abonamentu."
    heroImage="/panel.webp"
    heroImageAlt="SEO dla małych firm — strona w Google"
    breadcrumb={[{ name: "Strona główna", href: "/" }, { name: "SEO dla małych firm", href: "/seo-dla-malych-firm" }]}
    sections={[
      {
        heading: "Czym jest SEO dla małej firmy i dlaczego różni się od agencji?",
        content: "Dla małej firmy SEO to nie 'abonament za 1000 zł miesięcznie'. To fundament strony, który powstaje raz i działa latami. Dobrze zrobiona strona ma poprawne schema, szybkie ładowanie, treść pod konkretne pytania klientów i linki wewnętrzne. Nic z tego nie wymaga co miesiąc dotykać.",
        image: "/automat.webp",
        imageAlt: "SEO dla małych firm — jak działa",
        highlights: [
          "Schema LocalBusiness, Service, FAQ na każdej podstronie",
          "Core Web Vitals w normie (PageSpeed 80+ mobile)",
          "Treść pisana pod zapytania klientów, nie pod 'lorem ipsum'",
          "Google Search Console + Analytics skonfigurowane",
        ],
      },
      {
        heading: "Co obejmuje SEO w każdej stronie SEO Grow?",
        content: "Każdy plan Start, Standard i Premium zawiera techniczne SEO strony. Różnica między planami to liczba podstron i modułów, a nie ilość 'funkcji SEO'. SEO jest fundamentem, na którym stoi strona — nie osobnym produktem, za który się dopłaca.",
        image: "/panel.webp",
        imageAlt: "Co zawiera strona z SEO",
        imagePosition: "left",
        highlights: [
          "Plan Start (1 500 zł): landing page z schema, szybka, mobile",
          "Plan Standard (2 200 zł): strona firmowa 3-5 podstron + blog",
          "Plan Premium (4 500 zł): pełna strona z modułami, blog, FAQ",
          "W każdym: techniczne SEO + zoptymalizowana treść + podpięty GSC",
        ],
      },
      {
        heading: "Ile czasu trwa, żeby mała firma pojawiła się w Top 10 Google?",
        content: "Zależy od konkurencji w Twojej niszy i regionie. W małych miastach (Ostróda, Iława, Ełk, Lubin, Krosno) — strona z poprawnym SEO wchodzi do Top 10 w 30-90 dni. W dużych miastach (Warszawa, Kraków, Wrocław) — 6-12 miesięcy. Lokalne SEO działa 5-10x szybciej niż ogólnopolskie.",
        image: "/copy.webp",
        imageAlt: "Czas pozycjonowania w Google dla małej firmy",
        highlights: [
          "Małe miasto / nisza: 30-90 dni do Top 10",
          "Średnie miasto: 3-6 miesięcy",
          "Duże miasto / ogólnopolskie: 6-12 miesięcy",
          "Google Maps: 14-30 dni dla wizytówki z opiniami",
        ],
      },
      {
        heading: "Co daje SEO małej firmie, czego nie daje reklama?",
        content: "Reklama (Google Ads, Facebook Ads) daje ruch od razu, ale płacisz za każdy klik i przestajesz gdy zatrzymasz budżet. SEO daje ruch organiczny, który kumuluje się z czasem. Po roku dobrej pracy SEO masz 'darmowy' ruch z Google, którego nie da się zatrzymać jednym wyłączeniem budżetu.",
        image: "/automat.webp",
        imageAlt: "SEO vs reklama dla małej firmy",
        imagePosition: "left",
        highlights: [
          "SEO: płacisz raz, ruch rośnie latami",
          "Ads: płacisz co miesiąc, ruch znika po wyłączeniu",
          "SEO: buduje zaufanie ('jestem w Google, więc istnieję')",
          "Ads: nie wpływa na autorytet domeny",
        ],
      },
    ]}
    features={[
      {
        icon: "🎯",
        title: "Lokalne SEO",
        description: "Twoja firma pojawia się w Google, gdy ktoś z Twojego miasta szuka Twojej usługi. Bez płacenia za kliknięcia.",
      },
      {
        icon: "⚙️",
        title: "Techniczne SEO od dnia 1",
        description: "Schema, Core Web Vitals, szybkość, mobile-first, indeksacja — zrobione przed oddaniem strony, nie po.",
      },
      {
        icon: "📍",
        title: "Google Maps",
        description: "Pomagam skonfigurować Google Moja Firma, żebyś pojawiał się w lokalnym 3-paku z opiniami klientów.",
      },
      {
        icon: "💼",
        title: "Bez abonamentu",
        description: "Płacisz raz za stronę. SEO zostaje w kodzie. Nie ma 'opłaty za utrzymanie pozycjonowania'.",
      },
    ]}
    faq={[
      {
        q: "Czy mała firma potrzebuje SEO?",
        a: "Jeśli Twoi klienci szukają Twojej usługi w Google — tak. W 2026 ponad 80% Polaków szuka lokalnych usług w Google, a 90% z nich klika w pierwsze 3 wyniki organiczne (nie reklamy). Bez SEO jesteś niewidoczny.",
      },
      {
        q: "Ile kosztuje SEO dla małej firmy?",
        a: "W modelu 'SEO wliczone w stronę' — od 1 500 zł jednorazowo (plan Start). W modelu 'abonament u agencji' — 800 - 3000 zł miesięcznie. Pierwszy model daje trwały efekt, drugi pieniądze agencji co miesiąc.",
      },
      {
        q: "Czy mogę sam zrobić SEO dla mojej firmy?",
        a: "Techniczne SEO (schema, szybkość, struktura URL) wymaga programisty. Content SEO (treść, blog) — możesz sam, jeśli masz czas i rozumiesz co Twoi klienci szukają. Local SEO (Google Maps, wizytówka) — możesz sam, to 1-2h pracy.",
      },
      {
        q: "Co jest lepsze: SEO czy Google Ads?",
        a: "SEO i Ads to różne narzędzia. SEO = wyniki długoterminowe, tańsze w przeliczeniu na klik, budują autorytet. Ads = wyniki natychmiastowe, ale płacisz za każdy klik. Dla małej firmy: zacznij od SEO (strona, fundament), dodaj Ads gdy chcesz testować konkretną usługę lub kampanię.",
      },
    ]}
    ctaTitle="Strona z SEO dla Twojej małej firmy"
    ctaDescription="Sprawdź plany. Od 1 500 zł, bez abonamentu, strona z SEO gotowa w 5 dni."
    ctaButtonText="Zobacz plany"
    ctaButtonHref="/cennik"
  />
)

