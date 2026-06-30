import { SEOLandingPage } from "../components/SEOLandingPage"

export const JakSzybkoWyjscPage = () => (
  <SEOLandingPage
    path="/jak-szybko-wyjsc-w-google"
    title="Jak zgłosić stronę do Google | 6 technicznych kroków"
    description="Chcesz pomóc Google znaleźć nową stronę? Oto 6 konkretnych kroków: Search Console, sitemap, meta dane i poprawna struktura."
    keywords="jak szybko wyjsc w google, przyspieszyc indeksacje, google szybko indeksuje"
    h1="Jak zgłosić stronę"
    h1Accent="do Google"
    h1Sub="6 technicznych kroków bez obietnic na skróty."
    heroImage="/automat.webp"
    heroImageAlt="Jak szybko wyjść w Google — 6 kroków"
    breadcrumb={[{ name: "Wiedza SEO", href: "/blog" }, { name: "Jak szybko wyjść w Google", href: "/jak-szybko-wyjsc-w-google" }]}
    sections={[
      {
        heading: "Krok 1: Połącz stronę z Google Search Console",
        content: "Search Console to darmowe narzędzie Google. Dodanie strony trwa 5 minut i informuje Google, że strona istnieje. Bez tego — może minąć tygodnie.",
        image: "/panel.webp",
        imageAlt: "Google Search Console — dodawanie strony",
        highlights: [
          "Darmowe narzędzie Google",
          "5 minut pracy",
          "Strona może zostać połączona z Google Search Console",
        ],
      },
      {
        heading: "Krok 2: Wyślij sitemap.xml",
        content: "Sitemap.xml to mapa strony. Informuje Google, które podstrony istnieją i jak często są aktualizowane. Z sitemap — Google dostaje gotową listę.",
        image: "/automat.webp",
        imageAlt: "Wysyłanie sitemap.xml w Search Console",
        imagePosition: "left",
        highlights: [
          "Zakładka 'Indeksacja > Sitemaps'",
          "Mapa obejmuje wszystkie podstrony",
        ],
      },
      {
        heading: "Krok 3: Napraw meta title i description",
        content: "Każda podstrona potrzebuje unikalnego title (50-60 znaków) i description (140-155 znaków). Bez tego — Google sam wymyśla opis i często źle.",
        image: "/copy.webp",
        imageAlt: "Meta title i description w Search Console",
        highlights: [
          "Title: 50-60 znaków z frazą kluczową",
          "Description: 140-155 znaków z call-to-action",
        ],
      },
      {
        heading: "Krok 4: Zgłoś podstrony w Inspekcji URL",
        content: "Możesz zgłosić podstrony ręcznie: 'Inspekcja URL' > wpisz adres > 'Zgłoś do indeksacji'. To nie ustala terminu indeksacji, ale pomaga Google szybciej poznać adres.",
        image: "/panel.webp",
        imageAlt: "Zgłaszanie podstrony do indeksacji",
        imagePosition: "left",
        highlights: [
          "Pojedyncze URL-e",
          "Sitemap pokrywa wszystkie podstrony naraz",
        ],
      },
    ]}
    features={[
      { title: "Search Console", description: "Strona może zostać przygotowana do zgłoszenia w Google." },
      { title: "Automatyczny sitemap", description: "Mapa strony aktualizuje się po każdej publikacji." },
      { title: "Meta tagi bez pracy", description: "Każda podstrona dostaje unikalny title i description." },
      { title: "Core Web Vitals", description: "90+ PageSpeed — szybkość w standardzie." },
      { title: "Zgłoszenie URL", description: "Sitemap i Search Console ułatwiają zgłaszanie nowych podstron." },
      { title: "Zero dodatkowych kosztów", description: "Wszystko w cenie hostingu." },
    ]}
    trust={[
      { number: "Sitemap", label: "mapa podstron dla Google" },
      { number: "90+", label: "PageSpeed — szybkość w standardzie" },
      { number: "0 zł", label: "na Search Console i sitemap" },
      { number: "0", label: "wtyczek do zainstalowania" },
    ]}
    faq={[
      { q: "Czy mogę przyspieszyć indeksację za darmo?", a: "Tak. Search Console jest darmowy. Dodanie strony + wysłanie sitemap = 5 minut pracy." },
      { q: "Czy strona na Wix/Shopify indeksuje się szybciej?", a: "Nie. Indeksacja zależy od technicznych aspektów strony, nie od platformy." },
    ]}
    cta={{
      title: "Stwórz stronę przygotowaną do zgłoszenia w Google",
      description: "Search Console, sitemap, meta tagi, szybkość i czytelna struktura — w cenie hostingu.",
      primaryLabel: "Złóż zamówienie →",
    }}
    internalLinks={[
      { label: "Dlaczego strona nie pojawia się w Google", href: "/dlaczego-moja-strona-nie-pojawia-sie-w-google" },
      { label: "Najczęstsze błędy SEO", href: "/najczestsze-bledy-seo" },
      { label: "CMS SEO — jak to działa", href: "/cms-seo" },
    ]}
  />
)
