// src/pages/CityPagesTier1.tsx
// Las 4 ciudades Tier-1 originales (Warszawa/Kraków/Łódź/Wrocław) — páginas
// más elaboradas con contenido único. Las otras 95 ciudades se generan en
// CityPages.tsx usando el mismo template pero con datos del data/cities.ts.

import { SEOLandingPage } from "../components/SEOLandingPage"

// ────────────────────────────────────────────────────────────────────────────
// WARSZAWA
// ────────────────────────────────────────────────────────────────────────────

export const StronaInternetowaWarszawaPage = () => (
  <SEOLandingPage
    path="/strona-internetowa-warszawa"
    title={`Strona internetowa Warszawa | Gotowa w 5 dni, od 1500 zł | SEO Grow`}
    description={`Profesjonalna strona internetowa dla firm z Warszawy. Gotowa w 5 dni, edycja z telefonu, widoczność w Google bez płacenia za reklamy. Od 1500 zł jednorazowo.`}
    keywords={`strona internetowa warszawa, strona www warszawa, strona dla firmy warszawa, projekt strony warszawa, strona z seo warszawa`}
    h1={`Strona internetowa w Warszawie`}
    h1Accent={`gotowa w 5 dni, bez stresu`}
    h1Sub={`Profesjonalna strona dla Twojej firmy. Bez technicznego żargonu, bez pośredników.`}
    intro={`Prowadzisz firmę w Warszawie lub okolicach i chcesz, żeby Twoi klienci znajdowali Cię w Google? W SEO Grow zajmujemy się wszystkim — od pierwszej rozmowy po publikację strony. Ty dostajesz gotową stronę, którą edytujesz z telefonu jak zwykłą aplikację.`}
    heroImage={null}
    breadcrumb={[{"name":"Strony internetowe","href":"/#moduly"},{"name":"Warszawa","href":"/strona-internetowa-warszawa"}]}
    schema={[
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://seogrow.pl/strona-internetowa-warszawa#local",
    "name": "SEO Grow - Warszawa",
    "image": "https://seogrow.pl/logo-320.webp",
    "url": "https://seogrow.pl/strona-internetowa-warszawa",
    "telephone": "+48-517-105-423",
    "email": "kontakt@seogrow.pl",
    "priceRange": "1500-4500 PLN",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Warszawa",
      "addressCountry": "PL",
    },
    "areaServed": {
      "@type": "City",
      "name": "Warszawa",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.2297,
      "longitude": 21.0122,
    },
    "parentOrganization": {
      "@id": "https://seogrow.pl/#organization",
    },
  },
]}
    sections={[
      {
  heading: "Dlaczego SEO lokalne jest kluczowe dla firmy w Warszawa",
  content: "Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś w Warszawa szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.",
  imageAnimation: {
    rounds: [
      {
        query: "firma remontowa Warszawa",
        yourSite: {
          domain: "twoja-firma-warszawa.pl",
          title: "Twoja Firma — firma remontowa Warszawa Warszawa | Centrum",
          description: "Firma z Warszawa. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-warszawa-express.pl", title: "firma remontowa Warszawa Warszawa — Express 24h", description: "Firma z Warszawa. Szybka realizacja, doświadczeni specjaliści." },
          { domain: "budrem-warszawa.pl", title: "firma remontowa Warszawa Warszawa — Profesjonalne realizacje", description: "Firma z Warszawa. Kompleksowe usługi, indywidualne podejście do klienta." },
        ],
      },
      {
        query: "remonty mieszkań Warszawa",
        yourSite: {
          domain: "twoja-firma-warszawa.pl",
          title: "Twoja Firma — remonty mieszkań Warszawa Warszawa | Centrum",
          description: "Firma z Warszawa. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-warszawa-express.pl", title: "remonty mieszkań Warszawa Warszawa — Express 24h", description: "Firma z Warszawa. Szybka realizacja." },
          { domain: "budrem-warszawa.pl", title: "remonty mieszkań Warszawa Warszawa — Profesjonalne realizacje", description: "Firma z Warszawa. Kompleksowe usługi." },
        ],
      },
      {
        query: "ekipa remontowa Warszawa",
        yourSite: {
          domain: "twoja-firma-warszawa.pl",
          title: "Twoja Firma — ekipa remontowa Warszawa Warszawa | Centrum",
          description: "Firma z Warszawa. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-warszawa-express.pl", title: "ekipa remontowa Warszawa Warszawa — Express 24h", description: "Firma z Warszawa. Szybka realizacja." },
          { domain: "budrem-warszawa.pl", title: "ekipa remontowa Warszawa Warszawa — Profesjonalne realizacje", description: "Firma z Warszawa. Kompleksowe usługi." },
        ],
      },
    ],
  },
  imagePosition: "left" as const,
  highlights: [
    "Klient szuka w Google — gotowy do kontaktu",
    "Widoczność 24/7, bez płacenia za kliknięcia",
    "Wyprzedzasz konkurencję w Google Maps",
    "Budujesz markę firmy na lata",
  ],
},
      {
  heading: "Jak wygląda współpraca krok po kroku",
  content: "Najpierw rozmawiamy 15 minut — poznajemy Twoją firmę, branżę i to, co chcesz osiągnąć. Potem przygotowujemy stronę pod Twoje potrzeby. Po Twojej akceptacji publikujemy. Pięć dni roboczych, bez ankiet, bez czekania na wyceny od trzech agencji. Wszystko ustalamy telefonicznie lub mailowo — nie musisz do nas przyjeżdżać.",
  processSteps: [
    { step: "01", title: "15 minut rozmowy", description: "żebyśmy poznali Twoją firmę" },
    { step: "02", title: "Gotowa strona", description: "w 5 dni roboczych" },
    { step: "03", title: "Akceptacja z telefonu", description: "jednym kliknięciem" },
    { step: "04", title: "Strona zostaje Twoja", description: "na zawsze" },
  ],
},
      {
  heading: "Co dostajesz w cenie — bez niespodzianek",
  content: "Strona, panel do edycji, hosting, certyfikat SSL i wsparcie po polsku w jednym planie. Nie musisz nic dokupować osobno. Żadnych ukrytych opłat.",
  valueBundle: true,
  imagePosition: "left" as const,
  highlights: [
    "Strona + panel + hosting + SSL w jednym",
    "Wsparcie po polsku",
    "Brak umowy — rezygnujesz jednym mailem",
    "Faktura VAT na każdą płatność",
  ],
},
      {
  heading: "Dlaczego firmy w Warszawa wybierają SEO Grow",
  content: "Bo łączymy spokojną rozmowę z porządną technologią. Tłumaczymy wszystko po ludzku. Stronę dostajesz gotową do użycia, a my dbamy o to, żeby działała.",
  image: "/soporte.webp",
  imageAlt: "Klient SEO Grow w Warszawa — spokojna obsługa i gotowa strona",
  imagePosition: "left" as const,
  highlights: [
    "Mówimy po polsku, bez żargonu",
    "Pomagamy z domeną i pocztą",
    "Pomoc telefoniczna w dni robocze",
    "Działamy w Warszawa i całym Mazowszu",
  ],
},
    ]}
    features={[{"title":"Widoczność w Google","description":"Strona startuje zoptymalizowana — od pierwszego dnia widoczna dla Twoich klientów."},{"title":"Edycja z telefonu","description":"Zmiana ceny, nowe zdjęcie, wpis na blogu — wszystko z aplikacji w telefonie."},{"title":"Blog bez limitu","description":"Pisz artykuły, które przyciągają klientów z Google."},{"title":"Wsparcie po polsku","description":"W dni robocze odbieramy telefon i pomagamy, gdy czegoś nie wiesz."},{"title":"Brak umowy","description":"Płacisz co miesiąc. Rezygnujesz jednym mailem. Strona zostaje Twoja."},{"title":"Faktura VAT","description":"Na każdą płatność. Łatwo wrzucić w koszty firmy."}]}
    trust={[{"number":"5 dni","label":"do gotowej strony"},{"number":"1500 zł","label":"jednorazowo"},{"number":"49 zł","label":"miesięcznie, bez umowy"},{"number":"100%","label":"Twoja strona na zawsze"}]}
    faq={[{"q":"Czy obsługujecie firmy z całego Mazowsza?","a":"Tak. Działamy w Warszawie i całym województwie mazowieckim. Wszystko ustalamy telefonicznie lub mailowo."},{"q":"Ile kosztuje strona dla warszawskiej firmy?","a":"Od 1500 zł jednorazowo (pakiet Start). Co miesiąc płacisz od 49 zł. Konkretna kwota zależy od wybranego planu."},{"q":"Czy mogę zobaczyć stronę przed zapłatą?","a":"Tak. Najpierw rozmawiamy 15 minut, potem przygotowujemy projekt. Pokazujemy Ci efekty przed publikacją."},{"q":"Co jeśli nie znam się na komputerach?","a":"Nie musisz. Panel jest jak zwykła aplikacja w telefonie. Na start pokazujemy Ci krok po kroku, jak dodawać treści. W dni robocze odbieramy telefon."},{"q":"Czy strona będzie widoczna w Google?","a":"Strona startuje zoptymalizowana technicznie. Nie obiecujemy pierwszego miejsca, ale dajemy Ci wszystko, żeby Google mógł Cię znaleźć."}]}
    cta={{"title":"Porozmawiajmy o Twojej stronie","description":"15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, co ma sens dla Twojej firmy.","primaryLabel":"Zadzwoń: 517 105 423"}}
    internalLinks={[{"label":"Strona internetowa Kraków","href":"/strona-internetowa-krakow","note":"Małopolska"},{"label":"Strona internetowa Łódź","href":"/strona-internetowa-lodz","note":"Łódzkie"},{"label":"Strona internetowa Wrocław","href":"/strona-internetowa-wroclaw","note":"Dolnośląskie"},{"label":"Strona dla prawnika","href":"/strona-dla-prawnika"},{"label":"Strona dla fizjoterapeuty","href":"/strona-dla-fizjoterapeuty"},{"label":"Sklep internetowy","href":"/sklep-online"}]}
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
    title={`Strona internetowa Kraków | Gotowa w 5 dni, od 1500 zł | SEO Grow`}
    description={`Profesjonalna strona internetowa dla firm z Krakowa. Gotowa w 5 dni, edycja z telefonu, widoczność w Google bez płacenia za reklamy. Od 1500 zł jednorazowo.`}
    keywords={`strona internetowa kraków, strona www kraków, strona dla firmy kraków, projekt strony kraków, strona z seo kraków`}
    h1={`Strona internetowa w Krakowie`}
    h1Accent={`gotowa w 5 dni, bez stresu`}
    h1Sub={`Profesjonalna strona dla Twojej firmy. Bez technicznego żargonu, bez pośredników.`}
    intro={`Prowadzisz firmę w Krakowie lub okolicach i chcesz, żeby Twoi klienci znajdowali Cię w Google? W SEO Grow zajmujemy się wszystkim — od pierwszej rozmowy po publikację strony. Ty dostajesz gotową stronę, którą edytujesz z telefonu jak zwykłą aplikację.`}
    heroImage={null}
    breadcrumb={[{"name":"Strony internetowe","href":"/#moduly"},{"name":"Kraków","href":"/strona-internetowa-krakow"}]}
    schema={[
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://seogrow.pl/strona-internetowa-krakow#local",
    "name": "SEO Grow - Kraków",
    "image": "https://seogrow.pl/logo-320.webp",
    "url": "https://seogrow.pl/strona-internetowa-krakow",
    "telephone": "+48-517-105-423",
    "email": "kontakt@seogrow.pl",
    "priceRange": "1500-4500 PLN",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kraków",
      "addressCountry": "PL",
    },
    "areaServed": {
      "@type": "City",
      "name": "Kraków",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.0647,
      "longitude": 19.945,
    },
    "parentOrganization": {
      "@id": "https://seogrow.pl/#organization",
    },
  },
]}
    sections={[
      {
  heading: "Dlaczego SEO lokalne jest kluczowe dla firmy w Kraków",
  content: "Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś w Kraków szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.",
  imageAnimation: {
    rounds: [
      {
        query: "firma remontowa Kraków",
        yourSite: {
          domain: "twoja-firma-krakow.pl",
          title: "Twoja Firma — firma remontowa Kraków Kraków | Centrum",
          description: "Firma z Kraków. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-krakow-nowa-huta.pl", title: "firma remontowa Kraków Kraków — Express 24h", description: "Firma z Kraków. Szybka realizacja, doświadczeni specjaliści." },
          { domain: "budrem-krakow.pl", title: "firma remontowa Kraków Kraków — Profesjonalne realizacje", description: "Firma z Kraków. Kompleksowe usługi, indywidualne podejście do klienta." },
        ],
      },
      {
        query: "remonty mieszkań Kraków",
        yourSite: {
          domain: "twoja-firma-krakow.pl",
          title: "Twoja Firma — remonty mieszkań Kraków Kraków | Centrum",
          description: "Firma z Kraków. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-krakow-nowa-huta.pl", title: "remonty mieszkań Kraków Kraków — Express 24h", description: "Firma z Kraków. Szybka realizacja." },
          { domain: "budrem-krakow.pl", title: "remonty mieszkań Kraków Kraków — Profesjonalne realizacje", description: "Firma z Kraków. Kompleksowe usługi." },
        ],
      },
      {
        query: "ekipa remontowa Kraków",
        yourSite: {
          domain: "twoja-firma-krakow.pl",
          title: "Twoja Firma — ekipa remontowa Kraków Kraków | Centrum",
          description: "Firma z Kraków. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-krakow-nowa-huta.pl", title: "ekipa remontowa Kraków Kraków — Express 24h", description: "Firma z Kraków. Szybka realizacja." },
          { domain: "budrem-krakow.pl", title: "ekipa remontowa Kraków Kraków — Profesjonalne realizacje", description: "Firma z Kraków. Kompleksowe usługi." },
        ],
      },
    ],
  },
  imagePosition: "left" as const,
  highlights: [
    "Klient szuka w Google — gotowy do kontaktu",
    "Widoczność 24/7, bez płacenia za kliknięcia",
    "Wyprzedzasz konkurencję w Google Maps",
    "Budujesz markę firmy na lata",
  ],
},
      {
  heading: "Jak wygląda współpraca krok po kroku",
  content: "Najpierw rozmawiamy 15 minut — poznajemy Twoją firmę, branżę i to, co chcesz osiągnąć. Potem przygotowujemy stronę pod Twoje potrzeby. Po Twojej akceptacji publikujemy. Pięć dni roboczych, bez ankiet, bez czekania na wyceny od trzech agencji. Wszystko ustalamy telefonicznie lub mailowo — nie musisz do nas przyjeżdżać.",
  processSteps: [
    { step: "01", title: "15 minut rozmowy", description: "żebyśmy poznali Twoją firmę" },
    { step: "02", title: "Gotowa strona", description: "w 5 dni roboczych" },
    { step: "03", title: "Akceptacja z telefonu", description: "jednym kliknięciem" },
    { step: "04", title: "Strona zostaje Twoja", description: "na zawsze" },
  ],
},
      {
  heading: "Co dostajesz w cenie — bez niespodzianek",
  content: "Strona, panel do edycji, hosting, certyfikat SSL i wsparcie po polsku w jednym planie. Nie musisz nic dokupować osobno. Żadnych ukrytych opłat.",
  valueBundle: true,
  imagePosition: "left" as const,
  highlights: [
    "Strona + panel + hosting + SSL w jednym",
    "Wsparcie po polsku",
    "Brak umowy — rezygnujesz jednym mailem",
    "Faktura VAT na każdą płatność",
  ],
},
      {
  heading: "Dlaczego firmy w Kraków wybierają SEO Grow",
  content: "Bo łączymy spokojną rozmowę z porządną technologią. Tłumaczymy wszystko po ludzku. Stronę dostajesz gotową do użycia, a my dbamy o to, żeby działała.",
  image: "/soporte.webp",
  imageAlt: "Klient SEO Grow w Kraków — spokojna obsługa i gotowa strona",
  imagePosition: "left" as const,
  highlights: [
    "Mówimy po polsku, bez żargonu",
    "Pomagamy z domeną i pocztą",
    "Pomoc telefoniczna w dni robocze",
    "Działamy w Kraków i całym Małopolsce",
  ],
},
    ]}
    features={[{"title":"Widoczność w Google","description":"Strona startuje zoptymalizowana — od pierwszego dnia widoczna dla Twoich klientów."},{"title":"Edycja z telefonu","description":"Zmiana ceny, nowe zdjęcie, wpis na blogu — wszystko z aplikacji w telefonie."},{"title":"Blog bez limitu","description":"Pisz artykuły, które przyciągają klientów z Google."},{"title":"Wsparcie po polsku","description":"W dni robocze odbieramy telefon i pomagamy, gdy czegoś nie wiesz."},{"title":"Brak umowy","description":"Płacisz co miesiąc. Rezygnujesz jednym mailem. Strona zostaje Twoja."},{"title":"Faktura VAT","description":"Na każdą płatność. Łatwo wrzucić w koszty firmy."}]}
    trust={[{"number":"5 dni","label":"do gotowej strony"},{"number":"1500 zł","label":"jednorazowo"},{"number":"49 zł","label":"miesięcznie, bez umowy"},{"number":"100%","label":"Twoja strona na zawsze"}]}
    faq={[{"q":"Czy obsługujecie firmy z całej Małopolski?","a":"Tak. Działamy w Krakowie i całym województwie małopolskim. Wszystko ustalamy telefonicznie lub mailowo."},{"q":"Ile kosztuje strona dla krakowskiej firmy?","a":"Od 1500 zł jednorazowo (pakiet Start). Co miesiąc płacisz od 49 zł. Konkretna kwota zależy od wybranego planu."},{"q":"Czy mogę zobaczyć stronę przed zapłatą?","a":"Tak. Najpierw rozmawiamy 15 minut, potem przygotowujemy projekt. Pokazujemy Ci efekty przed publikacją."},{"q":"Co jeśli nie znam się na komputerach?","a":"Nie musisz. Panel jest jak zwykła aplikacja w telefonie. Na start pokazujemy Ci krok po kroku, jak dodawać treści. W dni robocze odbieramy telefon."},{"q":"Czy strona będzie widoczna w Google?","a":"Strona startuje zoptymalizowana technicznie. Nie obiecujemy pierwszego miejsca, ale dajemy Ci wszystko, żeby Google mógł Cię znaleźć."}]}
    cta={{"title":"Porozmawiajmy o Twojej stronie","description":"15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, co ma sens dla Twojej firmy.","primaryLabel":"Zadzwoń: 517 105 423"}}
    internalLinks={[{"label":"Strona internetowa Warszawa","href":"/strona-internetowa-warszawa","note":"Mazowieckie"},{"label":"Strona internetowa Łódź","href":"/strona-internetowa-lodz","note":"Łódzkie"},{"label":"Strona internetowa Wrocław","href":"/strona-internetowa-wroclaw","note":"Dolnośląskie"},{"label":"Strona dla prawnika","href":"/strona-dla-prawnika"},{"label":"Strona dla restauracji","href":"/strona-dla-restauracji"},{"label":"Sklep internetowy","href":"/sklep-online"}]}
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
    title={`Strona internetowa Łódź | Gotowa w 5 dni, od 1500 zł | SEO Grow`}
    description={`Profesjonalna strona internetowa dla firm z Łodzi. Gotowa w 5 dni, edycja z telefonu, widoczność w Google bez płacenia za reklamy. Od 1500 zł jednorazowo.`}
    keywords={`strona internetowa łódź, strona www łódź, strona dla firmy łódź, projekt strony łódź, strona z seo łódź`}
    h1={`Strona internetowa w Łodzi`}
    h1Accent={`gotowa w 5 dni, bez stresu`}
    h1Sub={`Profesjonalna strona dla Twojej firmy. Bez technicznego żargonu, bez pośredników.`}
    intro={`Prowadzisz firmę w Łodzi lub okolicach i chcesz, żeby Twoi klienci znajdowali Cię w Google? W SEO Grow zajmujemy się wszystkim — od pierwszej rozmowy po publikację strony. Ty dostajesz gotową stronę, którą edytujesz z telefonu jak zwykłą aplikację.`}
    heroImage={null}
    breadcrumb={[{"name":"Strony internetowe","href":"/#moduly"},{"name":"Łódź","href":"/strona-internetowa-lodz"}]}
    schema={[
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://seogrow.pl/strona-internetowa-lodz#local",
    "name": "SEO Grow - Łódź",
    "image": "https://seogrow.pl/logo-320.webp",
    "url": "https://seogrow.pl/strona-internetowa-lodz",
    "telephone": "+48-517-105-423",
    "email": "kontakt@seogrow.pl",
    "priceRange": "1500-4500 PLN",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Łódź",
      "addressCountry": "PL",
    },
    "areaServed": {
      "@type": "City",
      "name": "Łódź",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.7592,
      "longitude": 19.456,
    },
    "parentOrganization": {
      "@id": "https://seogrow.pl/#organization",
    },
  },
]}
    sections={[
      {
  heading: "Dlaczego SEO lokalne jest kluczowe dla firmy w Łódź",
  content: "Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś w Łódź szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.",
  imageAnimation: {
    rounds: [
      {
        query: "firma remontowa Łódź",
        yourSite: {
          domain: "twoja-firma-lodz.pl",
          title: "Twoja Firma — firma remontowa Łódź Łódź | Centrum",
          description: "Firma z Łódź. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-lodz-baluty.pl", title: "firma remontowa Łódź Łódź — Express 24h", description: "Firma z Łódź. Szybka realizacja, doświadczeni specjaliści." },
          { domain: "budrem-lodz.pl", title: "firma remontowa Łódź Łódź — Profesjonalne realizacje", description: "Firma z Łódź. Kompleksowe usługi, indywidualne podejście do klienta." },
        ],
      },
      {
        query: "remonty mieszkań Łódź",
        yourSite: {
          domain: "twoja-firma-lodz.pl",
          title: "Twoja Firma — remonty mieszkań Łódź Łódź | Centrum",
          description: "Firma z Łódź. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-lodz-baluty.pl", title: "remonty mieszkań Łódź Łódź — Express 24h", description: "Firma z Łódź. Szybka realizacja." },
          { domain: "budrem-lodz.pl", title: "remonty mieszkań Łódź Łódź — Profesjonalne realizacje", description: "Firma z Łódź. Kompleksowe usługi." },
        ],
      },
      {
        query: "ekipa remontowa Łódź",
        yourSite: {
          domain: "twoja-firma-lodz.pl",
          title: "Twoja Firma — ekipa remontowa Łódź Łódź | Centrum",
          description: "Firma z Łódź. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-lodz-baluty.pl", title: "ekipa remontowa Łódź Łódź — Express 24h", description: "Firma z Łódź. Szybka realizacja." },
          { domain: "budrem-lodz.pl", title: "ekipa remontowa Łódź Łódź — Profesjonalne realizacje", description: "Firma z Łódź. Kompleksowe usługi." },
        ],
      },
    ],
  },
  imagePosition: "left" as const,
  highlights: [
    "Klient szuka w Google — gotowy do kontaktu",
    "Widoczność 24/7, bez płacenia za kliknięcia",
    "Wyprzedzasz konkurencję w Google Maps",
    "Budujesz markę firmy na lata",
  ],
},
      {
  heading: "Jak wygląda współpraca krok po kroku",
  content: "Najpierw rozmawiamy 15 minut — poznajemy Twoją firmę, branżę i to, co chcesz osiągnąć. Potem przygotowujemy stronę pod Twoje potrzeby. Po Twojej akceptacji publikujemy. Pięć dni roboczych, bez ankiet, bez czekania na wyceny od trzech agencji. Wszystko ustalamy telefonicznie lub mailowo — nie musisz do nas przyjeżdżać.",
  processSteps: [
    { step: "01", title: "15 minut rozmowy", description: "żebyśmy poznali Twoją firmę" },
    { step: "02", title: "Gotowa strona", description: "w 5 dni roboczych" },
    { step: "03", title: "Akceptacja z telefonu", description: "jednym kliknięciem" },
    { step: "04", title: "Strona zostaje Twoja", description: "na zawsze" },
  ],
},
      {
  heading: "Co dostajesz w cenie — bez niespodzianek",
  content: "Strona, panel do edycji, hosting, certyfikat SSL i wsparcie po polsku w jednym planie. Nie musisz nic dokupować osobno. Żadnych ukrytych opłat.",
  valueBundle: true,
  imagePosition: "left" as const,
  highlights: [
    "Strona + panel + hosting + SSL w jednym",
    "Wsparcie po polsku",
    "Brak umowy — rezygnujesz jednym mailem",
    "Faktura VAT na każdą płatność",
  ],
},
      {
  heading: "Dlaczego firmy w Łódź wybierają SEO Grow",
  content: "Bo łączymy spokojną rozmowę z porządną technologią. Tłumaczymy wszystko po ludzku. Stronę dostajesz gotową do użycia, a my dbamy o to, żeby działała.",
  image: "/soporte.webp",
  imageAlt: "Klient SEO Grow w Łódź — spokojna obsługa i gotowa strona",
  imagePosition: "left" as const,
  highlights: [
    "Mówimy po polsku, bez żargonu",
    "Pomagamy z domeną i pocztą",
    "Pomoc telefoniczna w dni robocze",
    "Działamy w Łódź i całym Łódzkiem",
  ],
},
    ]}
    features={[{"title":"Widoczność w Google","description":"Strona startuje zoptymalizowana — od pierwszego dnia widoczna dla Twoich klientów."},{"title":"Edycja z telefonu","description":"Zmiana ceny, nowe zdjęcie, wpis na blogu — wszystko z aplikacji w telefonie."},{"title":"Blog bez limitu","description":"Pisz artykuły, które przyciągają klientów z Google."},{"title":"Wsparcie po polsku","description":"W dni robocze odbieramy telefon i pomagamy, gdy czegoś nie wiesz."},{"title":"Brak umowy","description":"Płacisz co miesiąc. Rezygnujesz jednym mailem. Strona zostaje Twoja."},{"title":"Faktura VAT","description":"Na każdą płatność. Łatwo wrzucić w koszty firmy."}]}
    trust={[{"number":"5 dni","label":"do gotowej strony"},{"number":"1500 zł","label":"jednorazowo"},{"number":"49 zł","label":"miesięcznie, bez umowy"},{"number":"100%","label":"Twoja strona na zawsze"}]}
    faq={[{"q":"Czy obsługujecie firmy z całego Łódzkiego?","a":"Tak. Działamy w Łodzi i całym województwie łódzkim. Wszystko ustalamy telefonicznie lub mailowo."},{"q":"Ile kosztuje strona dla łódzkiej firmy?","a":"Od 1500 zł jednorazowo (pakiet Start). Co miesiąc płacisz od 49 zł. Konkretna kwota zależy od wybranego planu."},{"q":"Czy mogę zobaczyć stronę przed zapłatą?","a":"Tak. Najpierw rozmawiamy 15 minut, potem przygotowujemy projekt. Pokazujemy Ci efekty przed publikacją."},{"q":"Co jeśli nie znam się na komputerach?","a":"Nie musisz. Panel jest jak zwykła aplikacja w telefonie. Na start pokazujemy Ci krok po kroku, jak dodawać treści. W dni robocze odbieramy telefon."},{"q":"Czy strona będzie widoczna w Google?","a":"Strona startuje zoptymalizowana technicznie. Nie obiecujemy pierwszego miejsca, ale dajemy Ci wszystko, żeby Google mógł Cię znaleźć."}]}
    cta={{"title":"Porozmawiajmy o Twojej stronie","description":"15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, co ma sens dla Twojej firmy.","primaryLabel":"Zadzwoń: 517 105 423"}}
    internalLinks={[{"label":"Strona internetowa Warszawa","href":"/strona-internetowa-warszawa","note":"Mazowieckie"},{"label":"Strona internetowa Kraków","href":"/strona-internetowa-krakow","note":"Małopolska"},{"label":"Strona internetowa Wrocław","href":"/strona-internetowa-wroclaw","note":"Dolnośląskie"},{"label":"Strona dla prawnika","href":"/strona-dla-prawnika"},{"label":"Strona dla freelancera","href":"/strona-dla-freelancera"},{"label":"Sklep internetowy","href":"/sklep-online"}]}
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
    title={`Strona internetowa Wrocław | Gotowa w 5 dni, od 1500 zł | SEO Grow`}
    description={`Profesjonalna strona internetowa dla firm z Wrocławia. Gotowa w 5 dni, edycja z telefonu, widoczność w Google bez płacenia za reklamy. Od 1500 zł jednorazowo.`}
    keywords={`strona internetowa wrocław, strona www wrocław, strona dla firmy wrocław, projekt strony wrocław, strona z seo wrocław`}
    h1={`Strona internetowa we Wrocławiu`}
    h1Accent={`gotowa w 5 dni, bez stresu`}
    h1Sub={`Profesjonalna strona dla Twojej firmy. Bez technicznego żargonu, bez pośredników.`}
    intro={`Prowadzisz firmę we Wrocławiu lub okolicach i chcesz, żeby Twoi klienci znajdowali Cię w Google? W SEO Grow zajmujemy się wszystkim — od pierwszej rozmowy po publikację strony. Ty dostajesz gotową stronę, którą edytujesz z telefonu jak zwykłą aplikację.`}
    heroImage={null}
    breadcrumb={[{"name":"Strony internetowe","href":"/#moduly"},{"name":"Wrocław","href":"/strona-internetowa-wroclaw"}]}
    schema={[
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://seogrow.pl/strona-internetowa-wroclaw#local",
    "name": "SEO Grow - Wrocław",
    "image": "https://seogrow.pl/logo-320.webp",
    "url": "https://seogrow.pl/strona-internetowa-wroclaw",
    "telephone": "+48-517-105-423",
    "email": "kontakt@seogrow.pl",
    "priceRange": "1500-4500 PLN",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wrocław",
      "addressCountry": "PL",
    },
    "areaServed": {
      "@type": "City",
      "name": "Wrocław",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.1079,
      "longitude": 17.0385,
    },
    "parentOrganization": {
      "@id": "https://seogrow.pl/#organization",
    },
  },
]}
    sections={[
      {
  heading: "Dlaczego SEO lokalne jest kluczowe dla firmy we Wrocław",
  content: "Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś we Wrocław szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.",
  imageAnimation: {
    rounds: [
      {
        query: "firma remontowa Wrocław",
        yourSite: {
          domain: "twoja-firma-wroclaw.pl",
          title: "Twoja Firma — firma remontowa Wrocław Wrocław | Centrum",
          description: "Firma z Wrocław. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-wroclaw-krzyki.pl", title: "firma remontowa Wrocław Wrocław — Express 24h", description: "Firma z Wrocław. Szybka realizacja, doświadczeni specjaliści." },
          { domain: "budrem-wroclaw.pl", title: "firma remontowa Wrocław Wrocław — Profesjonalne realizacje", description: "Firma z Wrocław. Kompleksowe usługi, indywidualne podejście do klienta." },
        ],
      },
      {
        query: "remonty mieszkań Wrocław",
        yourSite: {
          domain: "twoja-firma-wroclaw.pl",
          title: "Twoja Firma — remonty mieszkań Wrocław Wrocław | Centrum",
          description: "Firma z Wrocław. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-wroclaw-krzyki.pl", title: "remonty mieszkań Wrocław Wrocław — Express 24h", description: "Firma z Wrocław. Szybka realizacja." },
          { domain: "budrem-wroclaw.pl", title: "remonty mieszkań Wrocław Wrocław — Profesjonalne realizacje", description: "Firma z Wrocław. Kompleksowe usługi." },
        ],
      },
      {
        query: "ekipa remontowa Wrocław",
        yourSite: {
          domain: "twoja-firma-wroclaw.pl",
          title: "Twoja Firma — ekipa remontowa Wrocław Wrocław | Centrum",
          description: "Firma z Wrocław. Kompleksowe usługi, 7 lat doświadczenia, 120+ realizacji. Bezpłatna wycena.",
        },
        competitors: [
          { domain: "remonty-wroclaw-krzyki.pl", title: "ekipa remontowa Wrocław Wrocław — Express 24h", description: "Firma z Wrocław. Szybka realizacja." },
          { domain: "budrem-wroclaw.pl", title: "ekipa remontowa Wrocław Wrocław — Profesjonalne realizacje", description: "Firma z Wrocław. Kompleksowe usługi." },
        ],
      },
    ],
  },
  imagePosition: "left" as const,
  highlights: [
    "Klient szuka w Google — gotowy do kontaktu",
    "Widoczność 24/7, bez płacenia za kliknięcia",
    "Wyprzedzasz konkurencję w Google Maps",
    "Budujesz markę firmy na lata",
  ],
},
      {
  heading: "Jak wygląda współpraca krok po kroku",
  content: "Najpierw rozmawiamy 15 minut — poznajemy Twoją firmę, branżę i to, co chcesz osiągnąć. Potem przygotowujemy stronę pod Twoje potrzeby. Po Twojej akceptacji publikujemy. Pięć dni roboczych, bez ankiet, bez czekania na wyceny od trzech agencji. Wszystko ustalamy telefonicznie lub mailowo — nie musisz do nas przyjeżdżać.",
  processSteps: [
    { step: "01", title: "15 minut rozmowy", description: "żebyśmy poznali Twoją firmę" },
    { step: "02", title: "Gotowa strona", description: "w 5 dni roboczych" },
    { step: "03", title: "Akceptacja z telefonu", description: "jednym kliknięciem" },
    { step: "04", title: "Strona zostaje Twoja", description: "na zawsze" },
  ],
},
      {
  heading: "Co dostajesz w cenie — bez niespodzianek",
  content: "Strona, panel do edycji, hosting, certyfikat SSL i wsparcie po polsku w jednym planie. Nie musisz nic dokupować osobno. Żadnych ukrytych opłat.",
  valueBundle: true,
  imagePosition: "left" as const,
  highlights: [
    "Strona + panel + hosting + SSL w jednym",
    "Wsparcie po polsku",
    "Brak umowy — rezygnujesz jednym mailem",
    "Faktura VAT na każdą płatność",
  ],
},
      {
  heading: "Dlaczego firmy we Wrocław wybierają SEO Grow",
  content: "Bo łączymy spokojną rozmowę z porządną technologią. Tłumaczymy wszystko po ludzku. Stronę dostajesz gotową do użycia, a my dbamy o to, żeby działała.",
  image: "/soporte.webp",
  imageAlt: "Klient SEO Grow we Wrocław — spokojna obsługa i gotowa strona",
  imagePosition: "left" as const,
  highlights: [
    "Mówimy po polsku, bez żargonu",
    "Pomagamy z domeną i pocztą",
    "Pomoc telefoniczna w dni robocze",
    "Działamy we Wrocław i całym Dolnym Śląsku",
  ],
},
    ]}
    features={[{"title":"Widoczność w Google","description":"Strona startuje zoptymalizowana — od pierwszego dnia widoczna dla Twoich klientów."},{"title":"Edycja z telefonu","description":"Zmiana ceny, nowe zdjęcie, wpis na blogu — wszystko z aplikacji w telefonie."},{"title":"Blog bez limitu","description":"Pisz artykuły, które przyciągają klientów z Google."},{"title":"Wsparcie po polsku","description":"W dni robocze odbieramy telefon i pomagamy, gdy czegoś nie wiesz."},{"title":"Brak umowy","description":"Płacisz co miesiąc. Rezygnujesz jednym mailem. Strona zostaje Twoja."},{"title":"Faktura VAT","description":"Na każdą płatność. Łatwo wrzucić w koszty firmy."}]}
    trust={[{"number":"5 dni","label":"do gotowej strony"},{"number":"1500 zł","label":"jednorazowo"},{"number":"49 zł","label":"miesięcznie, bez umowy"},{"number":"100%","label":"Twoja strona na zawsze"}]}
    faq={[{"q":"Czy obsługujecie firmy z całego Dolnego Śląska?","a":"Tak. Działamy we Wrocławiu, Legnicy, Wałbrzychu, Jeleniej Górze i całym województwie. Wszystko ustalamy telefonicznie lub mailowo."},{"q":"Ile kosztuje strona dla wrocławskiej firmy?","a":"Od 1500 zł jednorazowo (pakiet Start). Co miesiąc płacisz od 49 zł. Konkretna kwota zależy od wybranego planu."},{"q":"Czy mogę zobaczyć stronę przed zapłatą?","a":"Tak. Najpierw rozmawiamy 15 minut, potem przygotowujemy projekt. Pokazujemy Ci efekty przed publikacją."},{"q":"Co jeśli nie znam się na komputerach?","a":"Nie musisz. Panel jest jak zwykła aplikacja w telefonie. Na start pokazujemy Ci krok po kroku, jak dodawać treści. W dni robocze odbieramy telefon."},{"q":"Czy strona będzie widoczna w Google?","a":"Strona startuje zoptymalizowana technicznie. Nie obiecujemy pierwszego miejsca, ale dajemy Ci wszystko, żeby Google mógł Cię znaleźć."}]}
    cta={{"title":"Porozmawiajmy o Twojej stronie","description":"15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, co ma sens dla Twojej firmy.","primaryLabel":"Zadzwoń: 517 105 423"}}
    internalLinks={[{"label":"Strona internetowa Warszawa","href":"/strona-internetowa-warszawa","note":"Mazowieckie"},{"label":"Strona internetowa Kraków","href":"/strona-internetowa-krakow","note":"Małopolska"},{"label":"Strona internetowa Łódź","href":"/strona-internetowa-lodz","note":"Łódzkie"},{"label":"Strona dla prawnika","href":"/strona-dla-prawnika"},{"label":"Strona dla fizjoterapeuty","href":"/strona-dla-fizjoterapeuty"},{"label":"Sklep internetowy","href":"/sklep-online"}]}
    showModules={true}
    showPricing={true}
  />
)



// ─── MAPEO PARA ROUTER ──────────────────────────────────────────────────────
// (no se usa en router; los imports se hacen por nombre)
