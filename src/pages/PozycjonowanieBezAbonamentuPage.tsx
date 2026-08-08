import { SEOLandingPage } from "../components/SEOLandingPage"

export const PozycjonowanieBezAbonamentuPage = () => (
  <SEOLandingPage
    path="/pozycjonowanie-stron-bez-abonamentu"
    title="Pozycjonowanie stron bez abonamentu — płać raz, strona Twoja | SEO Grow"
    description="Strona z pozycjonowaniem bez miesięcznego abonamentu. Płacisz raz, strona i SEO są Twoje. Bez umów, bez ukrytych opłat. Od 1 500 zł, gotowa w 5 dni →"
    keywords="pozycjonowanie stron bez abonamentu, strona www bez abonamentu, seo bez umowy, jednorazowe pozycjonowanie, strona internetowa jednorazowa oplata"
    h1="Pozycjonowanie stron"
    h1Accent="bez abonamentu"
    h1Sub="Płacisz raz. Strona i SEO są Twoje. Bez umowy."
    heroImage="/panel.webp"
    heroImageAlt="Pozycjonowanie stron bez abonamentu — strona własnością klienta"
    breadcrumb={[{ name: "Strona główna", href: "/" }, { name: "Pozycjonowanie bez abonamentu", href: "/pozycjonowanie-stron-bez-abonamentu" }]}
    sections={[
      {
        heading: "Czym różni się pozycjonowanie bez abonamentu od agencji SEO?",
        content: "Tradycyjna agencja SEO pobiera 800-3000 zł miesięcznie za 'utrzymanie pozycjonowania'. W praktyce oznacza to comiesięczne opłaty za raporty i drobne poprawki — a strona po zakończeniu umowy traci pozycje. W SEO Grow płacisz raz za stronę z wbudowanym SEO. Strona jest Twoja, SEO zostaje w kodzie.",
        image: "/automat.webp",
        imageAlt: "Porównanie agencja SEO vs jednorazowa strona z SEO",
        highlights: [
          "Brak umowy na 12 miesięcy",
          "Brak comiesięcznych opłat 'za utrzymanie'",
          "Strona jest Twoja — po 5 latach nadal Twoja",
          "Edytujesz sam, bez udziału 'specjalisty SEO'",
        ],
      },
      {
        heading: "Co dostajesz za jednorazową opłatę?",
        content: "Każda strona, którą buduję, jest od początku zoptymalizowana pod kątem wyszukiwarek. SEO nie jest osobnym produktem — to fundament, na którym stoi strona. Dlatego nie naliczasz za nie osobno.",
        image: "/panel.webp",
        imageAlt: "Co zawiera strona z pozycjonowaniem",
        imagePosition: "left",
        highlights: [
          "Szybka, mobilna strona (Core Web Vitals w normie)",
          "Schema.org Organization + LocalBusiness",
          "Treść pisana pod zapytania Twoich klientów",
          "Google Search Console + Analytics skonfigurowane",
          "Sitemap.xml + robots.txt wygenerowane",
        ],
      },
      {
        heading: "Czy SEO z czasem nie 'wygasa'?",
        content: "Nie, jeśli strona jest technicznie poprawna. SEO zrobione raz (szybkość, schema, dobra treść) działa latami. To, co w agencjach nazywa się 'utrzymaniem', to zazwyczaj: dodawanie nowych treści, pozyskiwanie backlinków, raporty. To możesz robić sam albo wynająć kogoś na godziny.",
        image: "/copy.webp",
        imageAlt: "Dlaczego SEO nie wygasa",
        highlights: [
          "Schema działą wiecznie",
          "Core Web Vitals nie psują się same z siebie",
          "Treść możesz aktualizować sam z CMS-a",
          "Backlinki opcjonalne, ale z czasem naturalnie przychodzą",
        ],
      },
    ]}
    features={[
      {
        icon: "💰",
        title: "Bez abonamentu",
        description: "Płacisz raz — 1 500 / 2 200 / 4 500 zł. Koniec. Strona zostaje Twoja, SEO zostaje w niej.",
      },
      {
        icon: "📜",
        title: "Bez umowy",
        description: "Żadnych 12-miesięcznych zobowiązań. Żadnych klauzul ukrytych w regulaminie.",
      },
      {
        icon: "🔓",
        title: "Strona Twoja",
        description: "Dostajesz dostęp do CMS-a, panelu, plików. Możesz ją przenieść, edytować, rozwijać — z nami lub bez.",
      },
      {
        icon: "📈",
        title: "SEO trwałe",
        description: "Pozycjonowanie jest w kodzie strony, nie w 'usłudze'. Szybkość, schema, treść — to działa latami.",
      },
    ]}
    faq={[
      {
        q: "A co jeśli po roku moja strona spadnie w Google?",
        a: "Jeśli spadnie, to zazwyczaj dlatego, że konkurencja dodała lepszą treść albo Ty nie aktualizujesz strony. Spadek pozycji NIE jest powodem do płacenia abonamentu. Wystarczy zaktualizować treść lub dodać nowe podstrony — sam, w CMS-ie, w 10 minut.",
      },
      {
        q: "A co z linkami zwrotnymi (backlinkami)?",
        a: "Backlinki pomagają, ale nie są obowiązkowe dla lokalnych stron. Dobrze zoptymalizowana strona z poprawnym schema i realną treścią w Ostródzie, Elblągu, Iławie rankuje bez żadnych backlinków. W dużych miastach (Warszawa, Kraków) backlinki są ważniejsze — ale to osobna decyzja inwestycyjna.",
      },
      {
        q: "Czy mogę przenieść stronę do innej firmy SEO?",
        a: "Tak. Dostajesz pełen dostęp do plików, CMS-a, panelu Vercel. Strona to Twoja własność. Nowa firma SEO może ją rozwijać od dnia 1.",
      },
      {
        q: "A co z aktualizacjami algorytmu Google?",
        a: "Strona zbudowana zgodnie z oficjalnymi wytycznymi Google (schema, Core Web Vitals, dobra treść) jest odporna na większość aktualizacji. Jeśli Google wprowadzi zmianę, która wymaga poprawek technicznych, robię to za symboliczną opłatą lub w ramach follow-up opieki.",
      },
    ]}
    ctaTitle="Strona z pozycjonowaniem, bez abonamentu"
    ctaDescription="Sprawdź, ile kosztuje strona z wbudowanym SEO dla Twojej firmy. Bez umowy, bez ukrytych opłat."
    ctaButtonText="Zobacz plany"
    ctaButtonHref="/cennik"
  />
)

