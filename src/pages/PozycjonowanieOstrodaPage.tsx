import { SEOLandingPage } from "../components/SEOLandingPage"

export const PozycjonowanieOstrodaPage = () => (
  <SEOLandingPage
    path="/pozycjonowanie-ostroda"
    title="Pozycjonowanie Ostróda — strony z SEO dla firm, od 1 500 zł | SEO Grow"
    description="Pozycjonowanie stron dla firm z Ostródy i okolic. Lokalne SEO, widoczność w Google Maps i wynikach organicznych. Bez abonamentu, bez agencji. Sprawdź plany →"
    keywords="pozycjonowanie ostróda, pozycjonowanie stron ostróda, seo ostróda, agencja seo ostróda, strona internetowa ostróda, lokalne seo, pozycjonowanie warmia"
    h1="Pozycjonowanie stron"
    h1Accent="dla firm z Ostródy"
    h1Sub="Bez abonamentu. Bez agencji. Z pełną kontrolą nad stroną."
    heroImage="/panel.webp"
    heroImageAlt="Pozycjonowanie Ostróda — strona SEO dla lokalnej firmy"
    breadcrumb={[{ name: "Strona główna", href: "/" }, { name: "Pozycjonowanie Ostróda", href: "/pozycjonowanie-ostroda" }]}
    sections={[
      {
        heading: "Lokalne SEO, które przyciąga klientów z Ostródy i okolic",
        content: "Pozycjonowanie Ostróda to nie magia — to konkretny zestaw działań technicznych i treściowych, dzięki którym Twoja firma pojawia się w Google, gdy ktoś w Ostródzie szuka Twojej usługi. Bez subskrypcji, bez długich umów.",
        image: "/automat.webp",
        imageAlt: "Lokalne SEO Ostróda — jak działa",
        highlights: [
          "Widoczność w Google Maps (pakiet lokalny 3-pak)",
          "Pozycje w organicznych wynikach na frazy 'firma + usługa + Ostróda'",
          "Pełna treść strony dostosowana do Twojej branży i regionu",
        ],
      },
      {
        heading: "Co obejmuje pozycjonowanie strony z SEO Grow?",
        content: "Każda strona, którą buduję, jest od początku zoptymalizowana pod kątem SEO. Nie sprzedaję 'pozycjonowania' jako osobnej usługi — to fundament, na którym stoi cała strona.",
        image: "/panel.webp",
        imageAlt: "Co zawiera strona z pozycjonowaniem SEO",
        imagePosition: "left",
        highlights: [
          "Strona techniczna: szybka, mobilna, zgodna z Core Web Vitals",
          "Schema.org LocalBusiness z adresem firmy w Ostródzie",
          "Treść pisana pod konkretne zapytania klientów z regionu",
          "Google Search Console + Analytics skonfigurowane od dnia 1",
        ],
      },
      {
        heading: "Ile kosztuje pozycjonowanie w Ostródzie?",
        content: "Strona internetowa z pełnym SEO dla małej firmy z Ostródy zaczyna się od 1 500 zł. To jednorazowa inwestycja, nie miesięczny abonament. Strona jest Twoja — nie leasingujesz jej od agencji.",
        image: "/copy.webp",
        imageAlt: "Cennik stron z pozycjonowaniem Ostróda",
        highlights: [
          "Plan Start: 1 500 zł — landing page z SEO, gotowa w 5 dni",
          "Plan Standard: 2 200 zł — strona firmowa do 5 podstron, idealna dla lokalnych usług",
          "Plan Premium: 4 500 zł — pełna strona z blogiem i modułami",
        ],
      },
    ]}
    features={[
      {
        icon: "📍",
        title: "Lokalne SEO",
        description: "Twoja firma pojawia się w Google, gdy ktoś w Ostródzie szuka Twojej usługi. W Google Maps i w wynikach organicznych.",
      },
      {
        icon: "⚡",
        title: "Bez abonamentu",
        description: "Płacisz raz za stronę. Nie ma miesięcznych opłat za 'utrzymanie pozycjonowania'. Strona jest Twoja, edytujesz ją sam.",
      },
      {
        icon: "🛠️",
        title: "Techniczne SEO od dnia 1",
        description: "Schema, Core Web Vitals, szybkość, mobile-first. Wszystko zrobione przed oddaniem strony, nie 'po indeksacji'.",
      },
      {
        icon: "🇵🇱",
        title: "Copy po polsku",
        description: "Treść pisana naturalnym polskim językiem, bez lorem ipsum i bez 'AI generowało'. Copy, które sprzedaje.",
      },
    ]}
    faq={[
      {
        q: "Czy pozycjonowanie w Ostródzie różni się od pozycjonowania w Warszawie?",
        a: "Tak, ogromnie. W Ostródzie konkurencja na lokalne frazy jest 5-10x mniejsza niż w dużych miastach. To znaczy, że strona z poprawnym SEO może wejść na pierwszą stronę Google w 30-90 dni — w Warszawie na to samo pytanie potrzebujesz 6-12 miesięcy i backlinków.",
      },
      {
        q: "Ile trwa, zanim moja strona będzie widoczna w Google?",
        a: "Zazwyczaj 2-4 tygodnie od opublikowania. Google musi najpierw zaindeksować stronę, potem ocenić jej jakość. Dla stron z poprawnym schema i szybkim ładowaniem ten proces jest krótszy.",
      },
      {
        q: "Czy mogę sam edytować treść pozycjonowanej strony?",
        a: "Tak, dostajesz CMS, w którym edytujesz teksty, dodajesz zdjęcia, zmieniasz ceny. Z telefonu, bez programisty. Pozycjonowanie z tego nie ucieka — każda zmiana zostaje od razu zaindeksowana.",
      },
      {
        q: "A co z Google Maps i wizytówką Google Moja Firma?",
        a: "Schema LocalBusiness na stronie pomaga Google połączyć Twoją stronę z wizytówką. Pomagam też w konfiguracji Google Moja Firma, żebyś był widoczny w Google Maps z recenzjami klientów.",
      },
    ]}
    ctaTitle="Zacznij od darmowej wyceny"
    ctaDescription="Powiedz, czym zajmuje się Twoja firma. W 24h dostaniesz plan widoczności w Google dla Ostródy i okolic."
    ctaButtonText="Zamów wycenę"
    ctaButtonHref="/zamowienie?plan=standard"
  />
)

