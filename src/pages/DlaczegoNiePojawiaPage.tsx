import { SEOLandingPage } from "../components/SEOLandingPage"

export const DlaczegoNiePojawiaPage = () => (
  <SEOLandingPage
    path="/dlaczego-moja-strona-nie-pojawia-sie-w-google"
    title="Dlaczego moja strona nie pojawia się w Google | 7 najczęstszych powodów"
    description="Strona nie pojawia się w Google? Sprawdź 7 najczęstszych powodów i jak to naprawić. Praktyczny przewodnik bez żargonu."
    keywords="strona nie pojawia sie w google, dlaczego strona nie indeksuje, problem z indeksacja google"
    h1="Dlaczego moja strona"
    h1Accent="nie pojawia się w Google"
    h1Sub="7 powodów. Większość łatwa do naprawy."
    heroImage="/panel.webp"
    heroImageAlt="Strona nie pojawia się w Google — diagnoza problemu"
    breadcrumb={[{ name: "Wiedza SEO", href: "/blog" }, { name: "Dlaczego strona nie pojawia się w Google", href: "/dlaczego-moja-strona-nie-pojawia-sie-w-google" }]}
    sections={[
      {
        heading: "1. Strona nie została zgłoszona",
        content: "Google nie automatycznie wie, że Twoja strona istnieje. Nowe strony czekają tygodniami na pierwsze wejście robota.",
        image: "/automat.webp",
        imageAlt: "Zgłaszanie strony w Google Search Console",
        highlights: [
          "Dodaj stronę w Google Search Console",
          "Wyślij sitemap.xml",
          "Poczekaj na reakcję Google — czas indeksacji zależy od Google",
        ],
      },
      {
        heading: "2. Robots.txt blokuje Googlebot",
        content: "Plik robots.txt może blokować dostęp robota do strony. Sprawdź to w Search Console.",
        image: "/panel.webp",
        imageAlt: "Sprawdzanie robots.txt w Search Console",
        imagePosition: "left",
        highlights: [
          "Wejdź w 'Inspekcja URL' w Search Console",
          "Jeśli widzisz 'Zablokowane' — to jest problem",
        ],
      },
      {
        heading: "3. Brak lub złe meta title i description",
        content: "Google nie rozpoznaje tematyki strony, jeśli każda podstrona ma ten sam tytuł.",
        image: "/copy.webp",
        imageAlt: "Meta title i description w Google Search Console",
        highlights: [
          "Każda podstrona: unikalny title (50-60 znaków)",
          "Każda podstrona: unikalny description (140-155 znaków)",
        ],
      },
      {
        heading: "4. Strona jest zbyt wolna",
        content: "Wolna strona pogarsza doświadczenie użytkownika i może ograniczać potencjał SEO. Sprawdź wynik w PageSpeed Insights.",
        image: "/automat.webp",
        imageAlt: "Test szybkości strony w PageSpeed Insights",
        imagePosition: "left",
        highlights: [
          "Jeśli masz poniżej 50 — szybkość jest poważnym problemem",
          "Na CMS z Core Web Vitals — szybkość nie jest problemem",
        ],
      },
    ]}
    features={[
      { title: "Automatyczne meta tagi", description: "Każda podstrona dostaje unikalny title i description." },
      { title: "Sitemap w cenie", description: "Mapa strony pomaga Google znajdować podstrony." },
      { title: "Core Web Vitals", description: "90+ w PageSpeed — szybkość nie jest problemem." },
      { title: "Search Console", description: "Połączenie z Google Search Console pomaga zgłaszać stronę i sitemapę." },
      { title: "Zero ukrytych problemów", description: "System sprawdza podstawowe błędy automatycznie." },
      { title: "Canonical URL", description: "Automatyczna ochrona przed duplikatami." },
    ]}
    trust={[
      { number: "7", label: "powszechnych przyczyn — większość łatwa do naprawy" },
      { number: "Sitemap", label: "struktura gotowa do zgłoszenia" },
      { number: "90+", label: "PageSpeed w standardzie" },
      { number: "0 zł", label: "na audyty i naprawy SEO" },
    ]}
    faq={[
      { q: "Ile czasu zajmuje pojawienie się strony w Google?", a: "Search Console i sitemap pomagają zgłosić stronę, ale o indeksacji decyduje Google. Nie ma jednego stałego terminu dla każdej strony." },
      { q: "Czy muszę płacić za audyt SEO?", a: "Większość podstawowych problemów (meta tagi, sitemap, szybkość) można sprawdzić samemu w Search Console i PageSpeed Insights." },
    ]}
    cta={{
      title: "Stwórz stronę przygotowaną pod Google",
      description: "SEO techniczne, szybkość, sitemap i możliwość połączenia z Google Search Console.",
      primaryLabel: "Złóż zamówienie →",
    }}
    internalLinks={[
      { label: "Jak szybko wyjść w Google", href: "/jak-szybko-wyjsc-w-google" },
      { label: "Najczęstsze błędy SEO", href: "/najczestsze-bledy-seo" },
      { label: "CMS SEO — jak to działa", href: "/cms-seo" },
    ]}
  />
)
