// src/pages/CityPages.tsx
// Landings SEO Tier 1 — páginas por ciudad con misma estructura que el home.
// Cada landing transmite tranquilidad (sin urgencia), sin lenguaje técnico,
// precios acordes con el cennik del home (Start 1500/49, Standard 2200/69, Premium 4500/99).
// Schema LocalBusiness con areaServed específico por ciudad.

import { SEOLandingPage } from "../components/SEOLandingPage"
import { GoogleSearchAnimation } from "../components/GoogleSearchAnimation"

const localBusinessSchema = (cityName: string, slug: string, lat: number, lng: number) => [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://seogrow.pl/${slug}#local`,
    "name": `SEO Grow — ${cityName}`,
    "image": "https://seogrow.pl/logo-320.webp",
    "url": `https://seogrow.pl/${slug}`,
    "telephone": "+48-517-105-423",
    "email": "kontakt@seogrow.pl",
    "priceRange": "1500-4500 PLN",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": "PL",
    },
    "areaServed": {
      "@type": "City",
      "name": cityName,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": lat,
      "longitude": lng,
    },
    "parentOrganization": {
      "@id": "https://seogrow.pl/#organization",
    },
  },
]

// ────────────────────────────────────────────────────────────────────────────
// WARSZAWA
// ────────────────────────────────────────────────────────────────────────────

export const StronaInternetowaWarszawaPage = () => (
  <SEOLandingPage
    path="/strona-internetowa-warszawa"
    title="Strona internetowa Warszawa | Gotowa w 5 dni, od 1500 zł | SEO Grow"
    description="Profesjonalna strona internetowa dla firm z Warszawy. Gotowa w 5 dni, edycja z telefonu, widoczność w Google bez płacenia za reklamy. Od 1500 zł jednorazowo."
    keywords="strona internetowa warszawa, strona www warszawa, strona dla firmy warszawa, projekt strony warszawa, strona z seo warszawa"
    h1="Strona internetowa w Warszawie"
    h1Accent="gotowa w 5 dni, bez stresu"
    h1Sub="Profesjonalna strona dla Twojej firmy. Bez technicznego żargonu, bez pośredników."
    intro="Prowadzisz firmę w Warszawie lub okolicach i chcesz, żeby Twoi klienci znajdowali Cię w Google? W SEO Grow zajmujemy się wszystkim — od pierwszej rozmowy po publikację strony. Ty dostajesz gotową stronę, którą edytujesz z telefonu jak zwykłą aplikację."
    heroImage="/panel.webp"
    heroImageAlt="Panel administracyjny SEO Grow — widok edycji strony klienta z Warszawy"
    breadcrumb={[{ name: "Strony internetowe", href: "/#moduly" }, { name: "Warszawa", href: "/strona-internetowa-warszawa" }]}
    schema={localBusinessSchema("Warszawa", "strona-internetowa-warszawa", 52.2297, 21.0122)}
    sections={[
      {
        heading: "Jak wygląda współpraca krok po kroku",
        content: "Najpierw rozmawiamy przez 15 minut — poznajemy Twoją firmę, branżę i to, co chcesz osiągnąć. Potem przygotowujemy stronę pod Twoje potrzeby. Po Twojej akceptacji publikujemy. Pięć dni roboczych, bez ankiet, bez czekania na wyceny od trzech agencji.",
        image: "/automat.webp",
        imageAlt: "Automatyczne generowanie strony internetowej dla firmy w Warszawie",
        highlights: [
          "15 minut rozmowy, żebyśmy poznali Twoją firmę",
          "Gotowa strona w 5 dni roboczych",
          "Akceptacja z telefonu, jednym kliknięciem",
          "Strona zostaje Twoja na zawsze",
        ],
      },
      {
        heading: "Co dostajesz w cenie — bez niespodzianek",
        content: "W każdym planie masz stronę, panel do edycji, hosting, certyfikat SSL i wsparcie po polsku. Nie musisz nic dokupować osobno. Nie ma ukrytych opłat, nie ma umowy na lata.",
        image: "/hero-640.webp",
        imageAlt: "Panel CMS SEO Grow — edycja treści strony z telefonu",
        imagePosition: "left",
        highlights: [
          "Strona + panel do edycji + hosting + SSL w jednym",
          "Wsparcie po polsku, w dni robocze",
          "Brak umowy — możesz zrezygnować w każdej chwili",
          "Faktura VAT na każdą płatność",
        ],
      },
      {
        heading: "Dlaczego firmy z Warszawy wybierają SEO Grow",
        content: "Bo łączymy rozmowę z ludźmi z porządną technologią. Nie zostawiamy Cię z dokumentacją do przeczytania — tłumaczymy wszystko po ludzku. Stronę dostajesz gotową do użycia, a my dbamy o to, żeby działała bez problemów.",
        image: "/seogrow.webp",
        imageAlt: "Klienci SEO Grow z Warszawy — spokojna obsługa i gotowa strona",
        imagePosition: "left",
        highlights: [
          "Mówimy po polsku, bez technicznego żargonu",
          "Pomagamy z domeną i konfiguracją poczty",
          "Pomoc telefoniczna, gdy czegoś nie wiesz",
          "Działamy w całej Warszawie i okolicach",
        ],
      },
      {
        heading: 'Dlaczego SEO lokalne jest kluczowe dla firmy w Warszawie',
        content: 'Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś w Warszawie szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.',
        highlights: [
          "Klient szuka w Google — gotowy do kontaktu",
          "Widoczność 24/7, bez płacenia za kliknięcia",
          "Wyprzedzasz konkurencję w Google Maps",
          "Budujesz markę firmy na lata",
        ],
                imageAnimation: {
          rounds: [
              {
                query: 'firma remontowa Warszawa',
                yourSite: {
                  domain: 'twoja-firma-warszawa.pl',
                  title: 'Twoja Firma — Remonty i Wykończenia Warszawa | Mokotów',
                  description: 'Firma remontowa z Warszawy. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 10 lat doświadczenia, 200+ projektów.',
                },
                competitors: [
                  { domain: 'remonty-express-waw.pl', title: 'Remonty Warszawa — Express Remonty 24h', description: 'Firma remontowa z Warszawy. Remonty mieszkań, łazienek, biur. Bezpłatna wycena, szybka realizacja.' },
                  { domain: 'budrem-warszawa.pl', title: 'Budrem Warszawa — Remonty i Wykończenia', description: 'Firma budowlana z Warszawy. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
                ],
              },
              {
                query: 'remonty mieszkań Warszawa',
                yourSite: {
                  domain: 'twoja-firma-warszawa.pl',
                  title: 'Twoja Firma — Remonty i Wykończenia Warszawa | Mokotów',
                  description: 'Firma remontowa z Warszawy. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 10 lat doświadczenia, 200+ projektów.',
                },
                competitors: [
                  { domain: 'remonty-express-waw.pl', title: 'Remonty Warszawa — Express Remonty 24h', description: 'Firma remontowa z Warszawy. Remonty mieszkań, łazienek, biur. Bezpłatna wycena, szybka realizacja.' },
                  { domain: 'budrem-warszawa.pl', title: 'Budrem Warszawa — Remonty i Wykończenia', description: 'Firma budowlana z Warszawy. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
                ],
              },
              {
                query: 'ekipa remontowa Warszawa',
                yourSite: {
                  domain: 'twoja-firma-warszawa.pl',
                  title: 'Twoja Firma — Remonty i Wykończenia Warszawa | Mokotów',
                  description: 'Firma remontowa z Warszawy. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 10 lat doświadczenia, 200+ projektów.',
                },
                competitors: [
                  { domain: 'remonty-express-waw.pl', title: 'Remonty Warszawa — Express Remonty 24h', description: 'Firma remontowa z Warszawy. Remonty mieszkań, łazienek, biur. Bezpłatna wycena, szybka realizacja.' },
                  { domain: 'budrem-warszawa.pl', title: 'Budrem Warszawa — Remonty i Wykończenia', description: 'Firma budowlana z Warszawy. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
                ],
              },
          ],
        },
      },
    ]}
    features={[
      { title: "Widoczność w Google", description: "Twoja strona startuje zoptymalizowana pod wyszukiwarkę — od pierwszego dnia." },
      { title: "Edycja z telefonu", description: "Zmiana ceny, dodanie zdjęcia, nowy wpis na blogu — wszystko z aplikacji w telefonie." },
      { title: "Blog bez limitu", description: "Pisz artykuły, które przyciągają klientów z Google. Bez wiedzy technicznej." },
      { title: "Wsparcie po polsku", description: "W dni robocze odbieramy telefon i pomagamy, gdy czegoś nie wiesz." },
      { title: "Brak umowy", description: "Płacisz co miesiąc. Jeśli chcesz zrezygnować — wystarczy jeden mail. Strona zostaje Twoja." },
      { title: "Faktura VAT", description: "Dostajesz fakturę na każdą płatność. Łatwo wrzucić w koszty firmy." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "1500 zł", label: "jednorazowo" },
      { number: "49 zł", label: "miesięcznie, bez umowy" },
      { number: "100%", label: "Twoja strona na zawsze" },
    ]}
    faq={[
      { q: "Czy obsługujecie firmy z całej Warszawy?", a: "Tak. Działamy w całej Warszawie i okolicach. Wszystko ustalamy telefonicznie lub mailowo — nie musisz do nas przyjeżdżać." },
      { q: "Ile kosztuje strona dla warszawskiej firmy?", a: "Od 1500 zł jednorazowo (pakiet Start) do 4500 zł (pakiet Premium). Co miesiąc płacisz od 49 zł. Konkretna kwota zależy od wybranego planu i zakresu strony." },
      { q: "Czy mogę zobaczyć stronę przed zapłatą?", a: "Tak. Najpierw rozmawiamy przez 15 minut, potem przygotowujemy projekt. Pokazujemy Ci efekty przed publikacją — nic nie płacisz, dopóki nie będziesz zadowolony." },
      { q: "Co jeśli nie znam się na komputerach?", a: "Nie musisz. Panel jest zaprojektowany dla osób nietechnicznych — wygląda jak zwykła aplikacja w telefonie. Na start pokazujemy Ci krok po kroku, jak dodawać treści. W dni robocze odbieramy telefon i pomagamy." },
      { q: "Czy strona będzie widoczna w Google?", a: "Strona startuje zoptymalizowana technicznie — szybka, mobilna, z odpowiednimi znacznikami dla Google. Nie obiecujemy pierwszego miejsca (w SEO to po prostu nie działa), ale dajemy Ci wszystko, żeby Google mógł Cię znaleźć." },
    ]}
    cta={{
      title: "Porozmawiajmy o Twojej stronie",
      description: "15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, co ma sens dla Twojej firmy.",
      primaryLabel: "Zadzwoń: 517 105 423",
    }}
    internalLinks={[
      { label: "Strona internetowa Kraków", href: "/strona-internetowa-krakow", note: "Małopolska" },
      { label: "Strona internetowa Łódź", href: "/strona-internetowa-lodz", note: "Łódzkie" },
      { label: "Strona internetowa Wrocław", href: "/strona-internetowa-wroclaw", note: "Dolnośląskie" },
      { label: "Strona dla freelancera", href: "/strona-dla-freelancera" },
      { label: "Strona dla warsztatu", href: "/strona-dla-warsztatu-samochodowego" },
      { label: "Sklep internetowy", href: "/sklep-online" },
    ]}
    showModules={true}
    showPricing={true}
  />
)

// ────────────────────────────────────────────────────────────────────────────
// KRAKÓW
// ────────────────────────────────────────────────────────────────────────────

export const StronaInternetowaKrakowPage = () => (
  <SEOLandingPage
    path="/strona-internetowa-krakow"
    title="Strona internetowa Kraków | Gotowa w 5 dni, od 1500 zł | SEO Grow"
    description="Profesjonalna strona internetowa dla firm z Krakowa i Małopolski. Gotowa w 5 dni, edycja z telefonu, widoczność w Google. Od 1500 zł jednorazowo, bez umowy."
    keywords="strona internetowa kraków, strona www kraków, strona dla firmy kraków, projekt strony kraków, strona z seo kraków, małopolska"
    h1="Strona internetowa w Krakowie"
    h1Accent="gotowa w 5 dni, bez stresu"
    h1Sub="Profesjonalna strona dla Twojej firmy. Bez technicznego żargonu, bez pośredników."
    intro="Działasz w Krakowie albo w okolicach i chcesz, żeby Twoi klienci znajdowali Twoją firmę w Google? W SEO Grow rozmawiamy po ludzku, wyjaśniamy wszystko spokojnie i oddajemy Ci gotową stronę, którą prowadzisz sam z telefonu."
    heroImage="/panel.webp"
    heroImageAlt="Panel CMS SEO Grow — widok dla klienta z Krakowa"
    breadcrumb={[{ name: "Strony internetowe", href: "/#moduly" }, { name: "Kraków", href: "/strona-internetowa-krakow" }]}
    schema={localBusinessSchema("Kraków", "strona-internetowa-krakow", 50.0647, 19.945)}
    sections={[
      {
        heading: "Jak wygląda współpraca krok po kroku",
        content: "Najpierw rozmawiamy 15 minut — żebyśmy poznali Twoją firmę, branżę i cele. Potem przygotowujemy stronę pod Twoje potrzeby. Po Twojej akceptacji publikujemy. Pięć dni roboczych, bez ankiet, bez czekania na wyceny.",
        image: "/automat.webp",
        imageAlt: "Generowanie strony internetowej dla firmy z Krakowa",
        highlights: [
          "15 minut rozmowy startowej",
          "Gotowa strona w 5 dni roboczych",
          "Akceptacja z telefonu, jednym kliknięciem",
          "Strona zostaje Twoja na zawsze",
        ],
      },
      {
        heading: "Co dostajesz w cenie — bez niespodzianek",
        content: "W każdym planie masz stronę, panel do edycji, hosting, certyfikat SSL i wsparcie po polsku. Nie musisz nic dokupować osobno. Żadnych ukrytych opłat.",
        image: "/hero-640.webp",
        imageAlt: "Strona internetowa dla krakowskiej firmy — widok panelu CMS",
        imagePosition: "left",
        highlights: [
          "Strona + panel + hosting + SSL w jednym",
          "Wsparcie po polsku, w dni robocze",
          "Brak umowy — jeden mail i rezygnujesz",
          "Faktura VAT na każdą płatność",
        ],
      },
      {
        heading: "Dlaczego firmy z Małopolski wybierają SEO Grow",
        content: "Bo łączymy spokojną rozmowę z porządną technologią. Nie zostawiamy Cię z dokumentacją. Stronę dostajesz gotową do użycia, a my dbamy o to, żeby działała bez problemów.",
        image: "/seogrow.webp",
        imageAlt: "Krakovska firma — obsługa SEO Grow",
        imagePosition: "left",
        highlights: [
          "Mówimy po polsku, bez żargonu",
          "Pomagamy z domeną i pocztą",
          "Pomoc telefoniczna, gdy czegoś nie wiesz",
          "Działamy w Krakowie, Wieliczce, Niepołomicach i całej Małopolsce",
        ],
      },
      {
        heading: 'Dlaczego SEO lokalne jest kluczowe dla firmy w Krakowie',
        content: 'Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś w Krakowie szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.',
        highlights: [
          "Klient szuka w Google — gotowy do kontaktu",
          "Widoczność 24/7, bez płacenia za kliknięcia",
          "Wyprzedzasz konkurencję w Google Maps",
          "Budujesz markę firmy na lata",
        ],
                imageAnimation: {
          rounds: [
              {
                query: 'firma remontowa Kraków',
                yourSite: {
                  domain: 'twoja-firma-krakow.pl',
                  title: 'Twoja Firma — Remonty i Wykończenia Kraków | Podgórze',
                  description: 'Firma remontowa z Krakowa. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 8 lat doświadczenia, 150+ projektów.',
                },
                competitors: [
                  { domain: 'remonty-krakow-express.pl', title: 'Remonty Kraków — Express Remonty 24h', description: 'Firma remontowa z Krakowa. Remonty mieszkań, łazienek, biur. Szybka realizacja.' },
                  { domain: 'budrem-krakow.pl', title: 'Budrem Kraków — Remonty i Wykończenia', description: 'Firma budowlana z Krakowa. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
                ],
              },
              {
                query: 'remonty mieszkań Kraków',
                yourSite: {
                  domain: 'twoja-firma-krakow.pl',
                  title: 'Twoja Firma — Remonty i Wykończenia Kraków | Podgórze',
                  description: 'Firma remontowa z Krakowa. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 8 lat doświadczenia, 150+ projektów.',
                },
                competitors: [
                  { domain: 'remonty-krakow-express.pl', title: 'Remonty Kraków — Express Remonty 24h', description: 'Firma remontowa z Krakowa. Remonty mieszkań, łazienek, biur. Szybka realizacja.' },
                  { domain: 'budrem-krakow.pl', title: 'Budrem Kraków — Remonty i Wykończenia', description: 'Firma budowlana z Krakowa. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
                ],
              },
              {
                query: 'ekipa remontowa Kraków',
                yourSite: {
                  domain: 'twoja-firma-krakow.pl',
                  title: 'Twoja Firma — Remonty i Wykończenia Kraków | Podgórze',
                  description: 'Firma remontowa z Krakowa. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 8 lat doświadczenia, 150+ projektów.',
                },
                competitors: [
                  { domain: 'remonty-krakow-express.pl', title: 'Remonty Kraków — Express Remonty 24h', description: 'Firma remontowa z Krakowa. Remonty mieszkań, łazienek, biur. Szybka realizacja.' },
                  { domain: 'budrem-krakow.pl', title: 'Budrem Kraków — Remonty i Wykończenia', description: 'Firma budowlana z Krakowa. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
                ],
              },
          ],
        },
      },
    ]}
    features={[
      { title: "Widoczność w Google", description: "Strona startuje zoptymalizowana — od pierwszego dnia widoczna dla Twoich klientów." },
      { title: "Edycja z telefonu", description: "Zmiana ceny, nowe zdjęcie, wpis na blogu — wszystko z aplikacji w telefonie." },
      { title: "Blog bez limitu", description: "Pisz artykuły, które przyciągają klientów z Google. Bez wiedzy technicznej." },
      { title: "Wsparcie po polsku", description: "W dni robocze odbieramy telefon i pomagamy, gdy czegoś nie wiesz." },
      { title: "Brak umowy", description: "Płacisz co miesiąc. Rezygnujesz jednym mailem. Strona zostaje Twoja." },
      { title: "Faktura VAT", description: "Na każdą płatność. Łatwo wrzucić w koszty firmy." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "1500 zł", label: "jednorazowo" },
      { number: "49 zł", label: "miesięcznie, bez umowy" },
      { number: "100%", label: "Twoja strona na zawsze" },
    ]}
    faq={[
      { q: "Czy obsługujecie firmy z całej Małopolski?", a: "Tak. Działamy w Krakowie, Wieliczce, Niepołomicach, Tarnowie, Nowym Sączu i całym województwie. Wszystko ustalamy telefonicznie lub mailowo." },
      { q: "Ile kosztuje strona dla krakowskiej firmy?", a: "Od 1500 zł jednorazowo (pakiet Start). Co miesiąc płacisz od 49 zł. Konkretna kwota zależy od wybranego planu i zakresu strony." },
      { q: "Czy mogę zobaczyć stronę przed zapłatą?", a: "Tak. Najpierw rozmawiamy przez 15 minut, potem przygotowujemy projekt. Pokazujemy Ci efekty przed publikacją. Nic nie płacisz, dopóki nie będziesz zadowolony." },
      { q: "Co jeśli nie znam się na komputerach?", a: "Nie musisz. Panel jest zaprojektowany dla osób nietechnicznych — jak zwykła aplikacja w telefonie. Na start pokazujemy Ci krok po kroku, jak dodawać treści. W dni robocze odbieramy telefon i pomagamy." },
      { q: "Czy strona będzie widoczna w Google?", a: "Strona startuje zoptymalizowana technicznie. Nie obiecujemy pierwszego miejsca w Google (w SEO to nie działa), ale dajemy Ci wszystko, żeby Google mógł Cię znaleźć." },
    ]}
    cta={{
      title: "Porozmawiajmy o Twojej stronie",
      description: "15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, co ma sens dla Twojej firmy.",
      primaryLabel: "Zadzwoń: 517 105 423",
    }}
    internalLinks={[
      { label: "Strona internetowa Warszawa", href: "/strona-internetowa-warszawa", note: "Mazowieckie" },
      { label: "Strona internetowa Łódź", href: "/strona-internetowa-lodz", note: "Łódzkie" },
      { label: "Strona internetowa Wrocław", href: "/strona-internetowa-wroclaw", note: "Dolnośląskie" },
      { label: "Strona dla kosmetyczki", href: "/strona-dla-kosmetyczki" },
      { label: "Strona dla restauracji", href: "/strona-dla-restauracji" },
      { label: "Sklep internetowy", href: "/sklep-online" },
    ]}
    showModules={true}
    showPricing={true}
  />
)

// ────────────────────────────────────────────────────────────────────────────
// ŁÓDŹ
// ────────────────────────────────────────────────────────────────────────────

export const StronaInternetowaLodzPage = () => (
  <SEOLandingPage
    path="/strona-internetowa-lodz"
    title="Strona internetowa Łódź | Gotowa w 5 dni, od 1500 zł | SEO Grow"
    description="Profesjonalna strona internetowa dla firm z Łodzi i okolic. Gotowa w 5 dni, edycja z telefonu, widoczność w Google. Od 1500 zł jednorazowo."
    keywords="strona internetowa łódź, strona www łódź, strona dla firmy łódź, projekt strony łódź, strona z seo łódź"
    h1="Strona internetowa w Łodzi"
    h1Accent="gotowa w 5 dni, bez stresu"
    h1Sub="Profesjonalna strona dla Twojej firmy. Bez technicznego żargonu, bez pośredników."
    intro="Prowadzisz firmę w Łodzi albo w okolicach i chcesz, żeby Twoi klienci znajdowali Cię w Google? W SEO Grow rozmawiamy po ludzku, tłumaczymy wszystko spokojnie i oddajemy Ci gotową stronę, którą prowadzisz sam z telefonu."
    heroImage="/panel.webp"
    heroImageAlt="Panel CMS SEO Grow — widok dla klienta z Łodzi"
    breadcrumb={[{ name: "Strony internetowe", href: "/#moduly" }, { name: "Łódź", href: "/strona-internetowa-lodz" }]}
    schema={localBusinessSchema("Łódź", "strona-internetowa-lodz", 51.7592, 19.456)}
    sections={[
      {
        heading: "Jak wygląda współpraca krok po kroku",
        content: "Najpierw rozmawiamy 15 minut — żebyśmy poznali Twoją firmę, branżę i cele. Potem przygotowujemy stronę pod Twoje potrzeby. Po Twojej akceptacji publikujemy. Pięć dni roboczych, bez ankiet.",
        image: "/automat.webp",
        imageAlt: "Generowanie strony internetowej dla firmy z Łodzi",
        highlights: [
          "15 minut rozmowy startowej",
          "Gotowa strona w 5 dni roboczych",
          "Akceptacja z telefonu",
          "Strona zostaje Twoja na zawsze",
        ],
      },
      {
        heading: "Co dostajesz w cenie — bez niespodzianek",
        content: "Strona, panel do edycji, hosting, certyfikat SSL i wsparcie po polsku w jednym planie. Nie musisz nic dokupować osobno. Żadnych ukrytych opłat, żadnej umowy na lata.",
        image: "/hero-640.webp",
        imageAlt: "Strona internetowa dla łódzkiej firmy — panel CMS",
        imagePosition: "left",
        highlights: [
          "Strona + panel + hosting + SSL w jednym",
          "Wsparcie po polsku",
          "Brak umowy — rezygnujesz jednym mailem",
          "Faktura VAT na każdą płatność",
        ],
      },
      {
        heading: "Dlaczego firmy z Łodzi wybierają SEO Grow",
        content: "Bo łączymy spokojną rozmowę z porządną technologią. Tłumaczymy wszystko po ludzku. Stronę dostajesz gotową do użycia, a my dbamy o to, żeby działała.",
        image: "/seogrow.webp",
        imageAlt: "Łódzka firma — obsługa SEO Grow",
        imagePosition: "left",
        highlights: [
          "Mówimy po polsku, bez żargonu",
          "Pomagamy z domeną i pocztą",
          "Pomoc telefoniczna w dni robocze",
          "Działamy w Łodzi, Zgierzu, Pabianicach i całym regionie",
        ],
      },
      {
        heading: 'Dlaczego SEO lokalne jest kluczowe dla firmy w Łodzi',
        content: 'Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś w Łodzi szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.',
        highlights: [
          "Klient szuka w Google — gotowy do kontaktu",
          "Widoczność 24/7, bez płacenia za kliknięcia",
          "Wyprzedzasz konkurencję w Google Maps",
          "Budujesz markę firmy na lata",
        ],
                imageAnimation: {
          rounds: [
              {
                query: 'firma remontowa Łódź',
                yourSite: {
                  domain: 'twoja-firma-lodz.pl',
                  title: 'Twoja Firma — Remonty i Wykończenia Łódź | Widzew',
                  description: 'Firma remontowa z Łodzi. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 7 lat doświadczenia, 120+ projektów.',
                },
                competitors: [
                  { domain: 'remonty-lodz-express.pl', title: 'Remonty Łódź — Express Remonty 24h', description: 'Firma remontowa z Łodzi. Remonty mieszkań, łazienek, biur. Szybka realizacja.' },
                  { domain: 'budrem-lodz.pl', title: 'Budrem Łódź — Remonty i Wykończenia', description: 'Firma budowlana z Łodzi. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
                ],
              },
              {
                query: 'remonty mieszkań Łódź',
                yourSite: {
                  domain: 'twoja-firma-lodz.pl',
                  title: 'Twoja Firma — Remonty i Wykończenia Łódź | Widzew',
                  description: 'Firma remontowa z Łodzi. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 7 lat doświadczenia, 120+ projektów.',
                },
                competitors: [
                  { domain: 'remonty-lodz-express.pl', title: 'Remonty Łódź — Express Remonty 24h', description: 'Firma remontowa z Łodzi. Remonty mieszkań, łazienek, biur. Szybka realizacja.' },
                  { domain: 'budrem-lodz.pl', title: 'Budrem Łódź — Remonty i Wykończenia', description: 'Firma budowlana z Łodzi. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
                ],
              },
              {
                query: 'ekipa remontowa Łódź',
                yourSite: {
                  domain: 'twoja-firma-lodz.pl',
                  title: 'Twoja Firma — Remonty i Wykończenia Łódź | Widzew',
                  description: 'Firma remontowa z Łodzi. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 7 lat doświadczenia, 120+ projektów.',
                },
                competitors: [
                  { domain: 'remonty-lodz-express.pl', title: 'Remonty Łódź — Express Remonty 24h', description: 'Firma remontowa z Łodzi. Remonty mieszkań, łazienek, biur. Szybka realizacja.' },
                  { domain: 'budrem-lodz.pl', title: 'Budrem Łódź — Remonty i Wykończenia', description: 'Firma budowlana z Łodzi. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
                ],
              },
          ],
        },
      },
    ]}
    features={[
      { title: "Widoczność w Google", description: "Strona startuje zoptymalizowana — od pierwszego dnia widoczna dla Twoich klientów." },
      { title: "Edycja z telefonu", description: "Zmiana ceny, nowe zdjęcie, wpis na blogu — wszystko z aplikacji w telefonie." },
      { title: "Blog bez limitu", description: "Pisz artykuły, które przyciągają klientów z Google." },
      { title: "Wsparcie po polsku", description: "W dni robocze odbieramy telefon i pomagamy, gdy czegoś nie wiesz." },
      { title: "Brak umowy", description: "Płacisz co miesiąc. Rezygnujesz jednym mailem. Strona zostaje Twoja." },
      { title: "Faktura VAT", description: "Na każdą płatność. Łatwo wrzucić w koszty firmy." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "1500 zł", label: "jednorazowo" },
      { number: "49 zł", label: "miesięcznie, bez umowy" },
      { number: "100%", label: "Twoja strona na zawsze" },
    ]}
    faq={[
      { q: "Czy obsługujecie firmy z całej Łodzi?", a: "Tak. Działamy w Łodzi, Zgierzu, Pabianicach, Konstantynowie Łódzkim i całym regionie. Wszystko ustalamy telefonicznie lub mailowo." },
      { q: "Ile kosztuje strona dla łódzkiej firmy?", a: "Od 1500 zł jednorazowo (pakiet Start). Co miesiąc płacisz od 49 zł. Konkretna kwota zależy od wybranego planu." },
      { q: "Czy mogę zobaczyć stronę przed zapłatą?", a: "Tak. Najpierw rozmawiamy 15 minut, potem przygotowujemy projekt. Pokazujemy Ci efekty przed publikacją." },
      { q: "Co jeśli nie znam się na komputerach?", a: "Nie musisz. Panel jest jak zwykła aplikacja w telefonie. Na start pokazujemy Ci krok po kroku, jak dodawać treści. W dni robocze odbieramy telefon i pomagamy." },
      { q: "Czy strona będzie widoczna w Google?", a: "Strona startuje zoptymalizowana technicznie. Nie obiecujemy pierwszego miejsca, ale dajemy Ci wszystko, żeby Google mógł Cię znaleźć." },
    ]}
    cta={{
      title: "Porozmawiajmy o Twojej stronie",
      description: "15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, co ma sens dla Twojej firmy.",
      primaryLabel: "Zadzwoń: 517 105 423",
    }}
    internalLinks={[
      { label: "Strona internetowa Warszawa", href: "/strona-internetowa-warszawa", note: "Mazowieckie" },
      { label: "Strona internetowa Kraków", href: "/strona-internetowa-krakow", note: "Małopolska" },
      { label: "Strona internetowa Wrocław", href: "/strona-internetowa-wroclaw", note: "Dolnośląskie" },
      { label: "Strona dla warsztatu", href: "/strona-dla-warsztatu-samochodowego" },
      { label: "Strona dla psychologa", href: "/strona-dla-psychologa" },
      { label: "Sklep internetowy", href: "/sklep-online" },
    ]}
    showModules={true}
    showPricing={true}
  />
)

// ────────────────────────────────────────────────────────────────────────────
// WROCŁAW
// ────────────────────────────────────────────────────────────────────────────

export const StronaInternetowaWroclawPage = () => (
  <SEOLandingPage
    path="/strona-internetowa-wroclaw"
    title="Strona internetowa Wrocław | Gotowa w 5 dni, od 1500 zł | SEO Grow"
    description="Profesjonalna strona internetowa dla firm z Wrocławia i Dolnego Śląska. Gotowa w 5 dni, edycja z telefonu, widoczność w Google. Od 1500 zł jednorazowo."
    keywords="strona internetowa wrocław, strona www wrocław, strona dla firmy wrocław, projekt strony wrocław, strona z seo wrocław, dolny śląsk"
    h1="Strona internetowa we Wrocławiu"
    h1Accent="gotowa w 5 dni, bez stresu"
    h1Sub="Profesjonalna strona dla Twojej firmy. Bez technicznego żargonu, bez pośredników."
    intro="Prowadzisz firmę we Wrocławiu albo w okolicach i chcesz, żeby Twoi klienci znajdowali Cię w Google? W SEO Grow rozmawiamy po ludzku, tłumaczymy wszystko spokojnie i oddajemy Ci gotową stronę, którą prowadzisz sam z telefonu."
    heroImage="/panel.webp"
    heroImageAlt="Panel CMS SEO Grow — widok dla klienta z Wrocławia"
    breadcrumb={[{ name: "Strony internetowe", href: "/#moduly" }, { name: "Wrocław", href: "/strona-internetowa-wroclaw" }]}
    schema={localBusinessSchema("Wrocław", "strona-internetowa-wroclaw", 51.1079, 17.0385)}
    sections={[
      {
        heading: "Jak wygląda współpraca krok po kroku",
        content: "Najpierw rozmawiamy 15 minut — żebyśmy poznali Twoją firmę. Potem przygotowujemy stronę pod Twoje potrzeby. Po Twojej akceptacji publikujemy. Pięć dni roboczych, bez ankiet.",
        image: "/automat.webp",
        imageAlt: "Generowanie strony internetowej dla firmy z Wrocławia",
        highlights: [
          "15 minut rozmowy startowej",
          "Gotowa strona w 5 dni roboczych",
          "Akceptacja z telefonu",
          "Strona zostaje Twoja na zawsze",
        ],
      },
      {
        heading: "Co dostajesz w cenie — bez niespodzianek",
        content: "Strona, panel do edycji, hosting, certyfikat SSL i wsparcie po polsku w jednym planie. Nie musisz nic dokupować osobno. Żadnych ukrytych opłat.",
        image: "/hero-640.webp",
        imageAlt: "Strona internetowa dla wrocławskiej firmy — panel CMS",
        imagePosition: "left",
        highlights: [
          "Strona + panel + hosting + SSL w jednym",
          "Wsparcie po polsku",
          "Brak umowy — rezygnujesz jednym mailem",
          "Faktura VAT na każdą płatność",
        ],
      },
      {
        heading: "Dlaczego firmy z Dolnego Śląska wybierają SEO Grow",
        content: "Bo łączymy spokojną rozmowę z porządną technologią. Tłumaczymy wszystko po ludzku. Stronę dostajesz gotową do użycia, a my dbamy o to, żeby działała.",
        image: "/seogrow.webp",
        imageAlt: "Wrocławska firma — obsługa SEO Grow",
        imagePosition: "left",
        highlights: [
          "Mówimy po polsku, bez żargonu",
          "Pomagamy z domeną i pocztą",
          "Pomoc telefoniczna w dni robocze",
          "Działamy we Wrocławiu, Legnicy, Wałbrzychu i całym Dolnym Śląsku",
        ],
      },
      {
        heading: 'Dlaczego SEO lokalne jest kluczowe dla firmy we Wrocławiu',
        content: 'Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś we Wrocławiu szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.',
        highlights: [
          "Klient szuka w Google — gotowy do kontaktu",
          "Widoczność 24/7, bez płacenia za kliknięcia",
          "Wyprzedzasz konkurencję w Google Maps",
          "Budujesz markę firmy na lata",
        ],
                imageAnimation: {
          rounds: [
              {
                query: 'firma budowlana Wrocław',
                yourSite: {
                  domain: 'twoja-firma-wroclaw.pl',
                  title: 'Twoja Firma — Budowa i Remonty Wrocław | Krzyki',
                  description: 'Firma budowlana z Wrocławia. Budowy domów, remonty mieszkań, prace wykończeniowe. 12 lat doświadczenia, 200+ projektów.',
                },
                competitors: [
                  { domain: 'budrem-wroclaw.pl', title: 'Budrem Wrocław — Budowy i Remonty', description: 'Firma budowlana z Wrocławia. Budowy domów, remonty mieszkań. 15 lat doświadczenia.' },
                  { domain: 'remonty-wroclaw-express.pl', title: 'Remonty Wrocław — Express Remonty 24h', description: 'Firma remontowa z Wrocławia. Szybka realizacja, ponad 300 pozytywnych opinii.' },
                ],
              },
              {
                query: 'budowa domu Wrocław',
                yourSite: {
                  domain: 'twoja-firma-wroclaw.pl',
                  title: 'Twoja Firma — Budowa i Remonty Wrocław | Krzyki',
                  description: 'Firma budowlana z Wrocławia. Budowy domów, remonty mieszkań, prace wykończeniowe. 12 lat doświadczenia, 200+ projektów.',
                },
                competitors: [
                  { domain: 'budrem-wroclaw.pl', title: 'Budrem Wrocław — Budowy i Remonty', description: 'Firma budowlana z Wrocławia. Budowy domów, remonty mieszkań. 15 lat doświadczenia.' },
                  { domain: 'remonty-wroclaw-express.pl', title: 'Remonty Wrocław — Express Remonty 24h', description: 'Firma remontowa z Wrocławia. Szybka realizacja, ponad 300 pozytywnych opinii.' },
                ],
              },
              {
                query: 'ekipa budowlana Wrocław',
                yourSite: {
                  domain: 'twoja-firma-wroclaw.pl',
                  title: 'Twoja Firma — Budowa i Remonty Wrocław | Krzyki',
                  description: 'Firma budowlana z Wrocławia. Budowy domów, remonty mieszkań, prace wykończeniowe. 12 lat doświadczenia, 200+ projektów.',
                },
                competitors: [
                  { domain: 'budrem-wroclaw.pl', title: 'Budrem Wrocław — Budowy i Remonty', description: 'Firma budowlana z Wrocławia. Budowy domów, remonty mieszkań. 15 lat doświadczenia.' },
                  { domain: 'remonty-wroclaw-express.pl', title: 'Remonty Wrocław — Express Remonty 24h', description: 'Firma remontowa z Wrocławia. Szybka realizacja, ponad 300 pozytywnych opinii.' },
                ],
              },
          ],
        },
      },
    ]}
    features={[
      { title: "Widoczność w Google", description: "Strona startuje zoptymalizowana — od pierwszego dnia widoczna dla Twoich klientów." },
      { title: "Edycja z telefonu", description: "Zmiana ceny, nowe zdjęcie, wpis na blogu — wszystko z aplikacji w telefonie." },
      { title: "Blog bez limitu", description: "Pisz artykuły, które przyciągają klientów z Google." },
      { title: "Wsparcie po polsku", description: "W dni robocze odbieramy telefon i pomagamy, gdy czegoś nie wiesz." },
      { title: "Brak umowy", description: "Płacisz co miesiąc. Rezygnujesz jednym mailem. Strona zostaje Twoja." },
      { title: "Faktura VAT", description: "Na każdą płatność. Łatwo wrzucić w koszty firmy." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "1500 zł", label: "jednorazowo" },
      { number: "49 zł", label: "miesięcznie, bez umowy" },
      { number: "100%", label: "Twoja strona na zawsze" },
    ]}
    faq={[
      { q: "Czy obsługujecie firmy z całego Dolnego Śląska?", a: "Tak. Działamy we Wrocławiu, Legnicy, Wałbrzychu, Jeleniej Górze i całym województwie. Wszystko ustalamy telefonicznie lub mailowo." },
      { q: "Ile kosztuje strona dla wrocławskiej firmy?", a: "Od 1500 zł jednorazowo (pakiet Start). Co miesiąc płacisz od 49 zł. Konkretna kwota zależy od wybranego planu." },
      { q: "Czy mogę zobaczyć stronę przed zapłatą?", a: "Tak. Najpierw rozmawiamy 15 minut, potem przygotowujemy projekt. Pokazujemy Ci efekty przed publikacją." },
      { q: "Co jeśli nie znam się na komputerach?", a: "Nie musisz. Panel jest jak zwykła aplikacja w telefonie. Na start pokazujemy Ci krok po kroku, jak dodawać treści. W dni robocze odbieramy telefon." },
      { q: "Czy strona będzie widoczna w Google?", a: "Strona startuje zoptymalizowana technicznie. Nie obiecujemy pierwszego miejsca, ale dajemy Ci wszystko, żeby Google mógł Cię znaleźć." },
    ]}
    cta={{
      title: "Porozmawiajmy o Twojej stronie",
      description: "15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, co ma sens dla Twojej firmy.",
      primaryLabel: "Zadzwoń: 517 105 423",
    }}
    internalLinks={[
      { label: "Strona internetowa Warszawa", href: "/strona-internetowa-warszawa", note: "Mazowieckie" },
      { label: "Strona internetowa Kraków", href: "/strona-internetowa-krakow", note: "Małopolska" },
      { label: "Strona internetowa Łódź", href: "/strona-internetowa-lodz", note: "Łódzkie" },
      { label: "Strona dla prawnika", href: "/strona-dla-prawnika" },
      { label: "Strona dla fizjoterapeuty", href: "/strona-dla-fizjoterapeuty" },
      { label: "Sklep internetowy", href: "/sklep-online" },
    ]}
    showModules={true}
    showPricing={true}
  />
)