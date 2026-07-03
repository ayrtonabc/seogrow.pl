// src/pages/ServicePages.tsx
// Landings SEO Tier 1 — páginas por servicio con misma estructura que el home.
// Tono tranquilo, lenguaje llano, precios acordes con cennik (Start 1500/49, Standard 2200/69, Premium 4500/99).
// Schema Service con provider Organization.

import { SEOLandingPage } from "../components/SEOLandingPage"

const serviceSchema = (slug: string, serviceName: string, serviceType: string, description: string) => [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://seogrow.pl/${slug}#service`,
    "name": serviceName,
    "serviceType": serviceType,
    "description": description,
    "provider": {
      "@id": "https://seogrow.pl/#organization",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Polska",
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Start",
        "price": "1500.00",
        "priceCurrency": "PLN",
        "url": "https://seogrow.pl/zamowienie?plan=start",
        "availability": "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        "name": "Standard",
        "price": "2200.00",
        "priceCurrency": "PLN",
        "url": "https://seogrow.pl/zamowienie?plan=express",
        "availability": "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        "name": "Premium",
        "price": "4500.00",
        "priceCurrency": "PLN",
        "url": "https://seogrow.pl/zamowienie?plan=premium",
        "availability": "https://schema.org/InStock",
      },
    ],
  },
]

// ────────────────────────────────────────────────────────────────────────────
// POZYCJONOWANIE STRON DLA FIRM
// ────────────────────────────────────────────────────────────────────────────

export const PozycjonowanieStronDlaFirmPage = () => (
  <SEOLandingPage
    path="/pozycjonowanie-stron-dla-firm"
    title="Pozycjonowanie stron dla firm | SEO bez agencji, od 99 zł/mies. | SEO Grow"
    description="Pozycjonowanie stron dla małych firm. Comiesięczne raporty widoczności, optymalizacja treści i techniki. Bez umowy, od 99 zł miesięcznie w planie Premium."
    keywords="pozycjonowanie stron dla firm, pozycjonowanie stron, seo dla firm, pozycjonowanie małych firm, pozycjonowanie stron cena"
    h1="Pozycjonowanie stron dla firm"
    h1Accent="Twoi klienci znajdują Cię w Google"
    h1Sub="Bez agencji. Bez żargonu. Z comiesięcznym raportem, który rozumiesz."
    intro="Chcesz, żeby Twoja firma pojawiała się w Google, gdy ktoś w Twojej okolicy szuka Twojej usługi? W SEO Grow dbamy o to spokojnie, krok po kroku. Co miesiąc dostajesz raport w przystępnej formie — bez technicznego żargonu, bez obietnic bez pokrycia."
    heroImage="/panel.webp"
    heroImageAlt="Panel SEO Grow — raport widoczności strony w Google"
    breadcrumb={[{ name: "SEO", href: "/cms-seo" }, { name: "Pozycjonowanie stron dla firm", href: "/pozycjonowanie-stron-dla-firm" }]}
    schema={serviceSchema(
      "pozycjonowanie-stron-dla-firm",
      "Pozycjonowanie stron dla firm",
      "Pozycjonowanie stron w Google dla małych firm",
      "Comiesięczne pozycjonowanie stron dla małych firm w Polsce. Raporty widoczności, optymalizacja treści i techniki SEO bez żargonu.",
    )}
    sections={[
      {
        heading: "Co to właściwie jest pozycjonowanie",
        content: "Gdy ktoś wpisuje w Google hasło związane z Twoją firmą — na przykład \"mechanik Wrocław\" albo \"korepetycje angielski Kraków\" — chcesz, żeby Twoja strona pojawiła się wysoko. Pozycjonowanie to wszystko, co robimy, żeby tak się stało: techniczne przygotowanie strony, treści odpowiadające na pytania klientów, lokalne informacje o firmie.",
        image: "/automat.webp",
        imageAlt: "Jak działa pozycjonowanie strony w Google — proste wyjaśnienie",
        highlights: [
          "Twoja strona pojawia się w Google na pytania Twoich klientów",
          "Klienci sami Cię znajdują — bez płacenia za kliknięcia",
          "Działasz lokalnie, więc trafiasz do klientów z Twojej okolicy",
          "Efekty narastają z czasem — inwestycja, nie wydatek",
        ],
      },
      {
        heading: "Co robimy co miesiąc",
        content: "Co miesiąc dbamy o widoczność Twojej strony. Sprawdzamy, na jakie pytania Google ją pokazuje, poprawiamy treści, dodajemy nowe artykuły na blogu. Wszystko spokojnie, bez pośpiechu. Efekty widoczne są zwykle po 2-4 miesiącach — tak po prostu działa SEO.",
        image: "/hero-640.webp",
        imageAlt: "Comiesięczny raport pozycjonowania — widok panelu SEO Grow",
        imagePosition: "left",
        highlights: [
          "Raport widoczności w przystępnej formie",
          "Aktualizacja treści i dodawanie nowych artykułów",
          "Sprawdzanie, jak Twoja strona radzi sobie w Google",
          "Rekomendacje, co poprawić",
        ],
      },
      {
        heading: "Dlaczego nie agencja, tylko SEO Grow",
        content: "Agencje SEO biorą zwykle 1000-5000 zł miesięcznie i raportują w języku, którego nie rozumiesz. U nas dostajesz to samo — comiesięczną pracę nad widocznością — w planie Premium za 99 zł miesięcznie, z raportem, który rozumiesz i z ludźmi, do których możesz zadzwonić.",
        image: "/seogrow.webp",
        imageAlt: "Pozycjonowanie stron — przewaga SEO Grow nad agencją",
        imagePosition: "left",
        highlights: [
          "99 zł/mies. zamiast 1000-5000 zł w agencji",
          "Raport w przystępnej formie",
          "Możesz zadzwonić i zapytać",
          "Bez umowy — rezygnujesz, kiedy chcesz",
        ],
      },
      {
        heading: 'Dlaczego SEO lokalne jest kluczowe dla Twojej firmy',
        content: 'Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka tego, co oferujesz — 24/7, bez płacenia za kliknięcia.',
        highlights: [
          "Klient szuka w Google — gotowy do kontaktu",
          "Widoczność 24/7, bez płacenia za kliknięcia",
          "Wyprzedzasz konkurencję w Google Maps",
          "Budujesz markę firmy na lata",
        ],
                imageAnimation: {
          rounds: [
              {
                query: 'firma SEO Wrocław',
                yourSite: {
                  domain: 'twoja-agencja-seo.pl',
                  title: 'Twoja Agencja SEO — Pozycjonowanie stron Wrocław',
                  description: 'Agencja SEO z Wrocławia. Comiesięczne pozycjonowanie stron, optymalizacja techniczna i treści. Raporty widoczności w Google.',
                },
                competitors: [
                  { domain: 'agencja-seo-wroclaw.pl', title: 'Agencja SEO Wrocław — Pozycjonowanie Stron', description: 'Profesjonalna agencja SEO z Wrocławia. Pozycjonowanie stron, optymalizacja techniczna, link building.' },
                  { domain: 'seo-wroclaw.com', title: 'SEO Wrocław — Skuteczne Pozycjonowanie', description: 'Firma SEO z Wrocławia. Kompleksowe pozycjonowanie stron, content marketing, analityka.' },
                ],
              },
              {
                query: 'agencja SEO Polska',
                yourSite: {
                  domain: 'twoja-agencja-seo.pl',
                  title: 'Twoja Agencja SEO — Pozycjonowanie stron Wrocław',
                  description: 'Agencja SEO z Wrocławia. Comiesięczne pozycjonowanie stron, optymalizacja techniczna i treści. Raporty widoczności w Google.',
                },
                competitors: [
                  { domain: 'agencja-seo-wroclaw.pl', title: 'Agencja SEO Wrocław — Pozycjonowanie Stron', description: 'Profesjonalna agencja SEO z Wrocławia. Pozycjonowanie stron, optymalizacja techniczna, link building.' },
                  { domain: 'seo-wroclaw.com', title: 'SEO Wrocław — Skuteczne Pozycjonowanie', description: 'Firma SEO z Wrocławia. Kompleksowe pozycjonowanie stron, content marketing, analityka.' },
                ],
              },
              {
                query: 'pozycjonowanie stron cena',
                yourSite: {
                  domain: 'twoja-agencja-seo.pl',
                  title: 'Twoja Agencja SEO — Pozycjonowanie stron Wrocław',
                  description: 'Agencja SEO z Wrocławia. Comiesięczne pozycjonowanie stron, optymalizacja techniczna i treści. Raporty widoczności w Google.',
                },
                competitors: [
                  { domain: 'agencja-seo-wroclaw.pl', title: 'Agencja SEO Wrocław — Pozycjonowanie Stron', description: 'Profesjonalna agencja SEO z Wrocławia. Pozycjonowanie stron, optymalizacja techniczna, link building.' },
                  { domain: 'seo-wroclaw.com', title: 'SEO Wrocław — Skuteczne Pozycjonowanie', description: 'Firma SEO z Wrocławia. Kompleksowe pozycjonowanie stron, content marketing, analityka.' },
                ],
              },
          ],
        },
      },
    ]}
    features={[
      { title: "Comiesięczny raport", description: "Dostajesz raport w przystępnej formie — bez żargonu, z konkretnymi liczbami." },
      { title: "Aktualizacja treści", description: "Co miesiąc dbamy o to, żeby treści na Twojej stronie były aktualne i odpowiadały na pytania klientów." },
      { title: "Nowe artykuły na blogu", description: "Piszemy artykuły, które przyciągają klientów z Google. Bez limitu w planie Premium." },
      { title: "Lokalne SEO", description: "Dbamy o to, żeby Twoja firma pojawiała się w Google na hasła z Twoją okolicą." },
      { title: "Wsparcie po polsku", description: "W dni robocze odbieramy telefon. Bez tajemnic, bez żargonu." },
      { title: "Brak umowy", description: "Płacisz co miesiąc. Rezygnujesz jednym mailem." },
    ]}
    trust={[
      { number: "99 zł", label: "miesięcznie (plan Premium)" },
      { number: "2-4 mies.", label: "do pierwszych efektów" },
      { number: "0 zł", label: "za prowizje agencji" },
      { number: "∞", label: "artykułów SEO w Premium" },
    ]}
    faq={[
      { q: "Ile kosztuje pozycjonowanie strony?", a: "W planie Premium masz pozycjonowanie w cenie (99 zł miesięcznie). W planie Standard płacisz 69 zł miesięcznie za stronę i możesz dokupić pozycjonowanie osobno. Agencje SEO w Polsce biorą zwykle 1000-5000 zł miesięcznie." },
      { q: "Kiedy zobaczę efekty pozycjonowania?", a: "Realnie — po 2-4 miesiącach. SEO nie działa jak reklama, gdzie efekty są od razu. To inwestycja, która narasta z czasem. Po roku masz zwykle stały dopływ klientów z Google." },
      { q: "Czy pozycjonowanie zastąpi reklamy w Google?", a: "Dla większości małych firm — tak. SEO daje trwalsze efekty i jest tańsze w dłuższej perspektywie. Jeśli potrzebujesz klientów już jutro, reklamy mają sens. Jeśli myślisz o roku do przodu, SEO się opłaca bardziej." },
      { q: "Co dostanę w raporcie miesięcznym?", a: "Prosty raport: ile osób zobaczyło Twoją stronę w Google, na jakie pytania, w którym miejscu wyników. Wszystko w przystępnej formie — bez żargonu, z konkretnymi liczbami i rekomendacjami." },
      { q: "Czy muszę coś podpisywać?", a: "Nie. Nie ma żadnej umowy na lata. Płacisz co miesiąc. Jeśli chcesz zrezygnować — wystarczy jeden mail." },
    ]}
    cta={{
      title: "Porozmawiajmy o pozycjonowaniu Twojej strony",
      description: "15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, co ma sens dla Twojej firmy.",
      primaryLabel: "Zadzwoń: 517 105 423",
    }}
    internalLinks={[
      { label: "Strona internetowa Warszawa", href: "/strona-internetowa-warszawa" },
      { label: "Strona internetowa Kraków", href: "/strona-internetowa-krakow" },
      { label: "CMS z SEO automatycznym", href: "/cms-con-seo-automatico" },
      { label: "Strona dla freelancera", href: "/strona-dla-freelancera" },
      { label: "Sklep internetowy", href: "/sklep-online" },
    ]}
    showModules={true}
    showPricing={true}
  />
)

// ────────────────────────────────────────────────────────────────────────────
// TANIA STRONA INTERNETOWA DLA FIRMY
// ────────────────────────────────────────────────────────────────────────────

export const TaniaStronaInternetowaDlaFirmyPage = () => (
  <SEOLandingPage
    path="/tania-strona-internetowa-dla-firmy"
    title="Tania strona internetowa dla firmy | Od 49 zł/mies. | SEO Grow"
    description="Tania strona internetowa dla małej firmy bez utraty jakości. Od 1500 zł jednorazowo + 49 zł miesięcznie. Bez umowy, ze wsparciem po polsku."
    keywords="tania strona internetowa, tania strona www, tania strona dla firmy, niedroga strona internetowa, strona internetowa cena, strona www tanio"
    h1="Tania strona internetowa dla firmy"
    h1Accent="od 1500 zł, bez utraty jakości"
    h1Sub="Profesjonalna strona w dobrej cenie. Bez umowy, z wsparciem po polsku."
    intro="Szukasz strony internetowej, która nie kosztuje fortuny, ale wygląda profesjonalnie i działa? W SEO Grow masz profesjonalną stronę od 1500 zł jednorazowo i 49 zł miesięcznie. Bez ukrytych opłat, bez umowy na lata. To dobra cena — bo w tej cenie dostajesz wszystko, czego potrzebujesz."
    heroImage="/panel.webp"
    heroImageAlt="Tania strona internetowa dla firmy — panel SEO Grow"
    breadcrumb={[{ name: "Strony internetowe", href: "/#moduly" }, { name: "Tania strona dla firmy", href: "/tania-strona-internetowa-dla-firmy" }]}
    schema={serviceSchema(
      "tania-strona-internetowa-dla-firmy",
      "Tania strona internetowa dla firmy",
      "Tworzenie stron internetowych w niskiej cenie dla małych firm",
      "Profesjonalna strona internetowa dla małych firm od 1500 zł jednorazowo i 49 zł miesięcznie. Wszystko w jednym planie, bez ukrytych opłat.",
    )}
    sections={[
      {
        heading: "Dlaczego nasza strona może być tania, a dobra",
        content: "Nie mamy biura w centrum Warszawy, nie zlecamy pracy agencjom, nie kopiujemy cudzych projektów. Mamy sprawdzony system, który generuje stronę szybko i sprawnie. Dlatego możemy zaoferować dobrą cenę — i dlatego możemy poświęcić Ci czas na spokojną rozmowę.",
        image: "/automat.webp",
        imageAlt: "Tania strona internetowa — jak SEO Grow utrzymuje dobrą cenę",
        highlights: [
          "Sprawdzony system, zero przepłacania",
          "Bez pośredników i podwykonawców",
          "Spokojna rozmowa, bez nacisku",
          "Faktura VAT — koszt firmy",
        ],
      },
      {
        heading: "Co dostajesz w najniższym planie",
        content: "Plan Start to strona wizytówka z 5 podstronami, blogiem SEO, formularzem kontaktowym, mapą Google i edycją z telefonu. Wszystko w 1500 zł jednorazowo i 49 zł miesięcznie. Dla większości małych firm to wystarczający start.",
        image: "/hero-640.webp",
        imageAlt: "Plan Start SEO Grow — tania strona internetowa dla firmy",
        imagePosition: "left",
        highlights: [
          "Strona wizytówka z 5 podstronami",
          "Blog SEO bez limitu wpisów",
          "Formularz kontaktowy + mapa Google",
          "Edycja z telefonu",
          "Hosting + SSL w cenie",
        ],
      },
      {
        heading: "Kiedy warto dopłacić do Standard lub Premium",
        content: "Jeśli potrzebujesz więcej niż 5 podstron, regularnych artykułów SEO albo sklepu internetowego — wtedy Standard lub Premium mają sens. Ale nie przepłacaj, jeśli nie musisz. 70% naszych klientów zaczyna od Startu i to im wystarcza.",
        image: "/seogrow.webp",
        imageAlt: "Plan Standard i Premium — kiedy warto dopłacić",
        imagePosition: "left",
        highlights: [
          "Start wystarczy dla większości małych firm",
          "Standard ma sens, gdy rośniesz (15 podstron + raporty SEO)",
          "Premium dla sklepów i dużych serwisów",
          "Zawsze możesz zmienić plan",
        ],
      },
      {
        heading: 'Dlaczego warto wybrać tanią stronę z prawdziwym SEO',
        content: 'Tania strona bez SEO to wyrzucone pieniądze. SEO lokalne sprawia, że Twoja strona pojawia się w Google, gdy klient szuka Twojej usługi — tania strona z SEO to inwestycja, nie wydatek.',
        highlights: [
          "Tania strona + SEO = klienci z Google",
          "Widoczność 24/7, bez płacenia za kliknięcia",
          "Jeden klient zwraca koszt strony na lata",
          "Profesjonalna, tania, bez utraty jakości",
        ],
                imageAnimation: {
          rounds: [
              {
                query: 'tania strona internetowa dla firmy',
                yourSite: {
                  domain: 'tania-strona-firmowa.pl',
                  title: 'Tania Strona Firmowa — Strony dla Firm od 49 zł/mies.',
                  description: 'Tania strona internetowa dla małej firmy od 49 zł miesięcznie. Profesjonalna, edycja z telefonu, SEO w cenie.',
                },
                competitors: [
                  { domain: 'taniastr.pl', title: 'TaniaStr.pl — Strony Internetowe od 300 zł', description: 'Tanie strony internetowe dla firm. Realizacja w 3 dni, płatność jednorazowa. Ponad 500 stron.' },
                  { domain: 'strony-firmowe-tanio.pl', title: 'Strony Firmowe Tanio — Realizacja 24h', description: 'Tanie strony dla małych firm. Realizacja w 24h, płatność jednorazowa.' },
                ],
              },
              {
                query: 'tania strona www dla firmy',
                yourSite: {
                  domain: 'tania-strona-firmowa.pl',
                  title: 'Tania Strona Firmowa — Strony dla Firm od 49 zł/mies.',
                  description: 'Tania strona internetowa dla małej firmy od 49 zł miesięcznie. Profesjonalna, edycja z telefonu, SEO w cenie.',
                },
                competitors: [
                  { domain: 'taniastr.pl', title: 'TaniaStr.pl — Strony Internetowe od 300 zł', description: 'Tanie strony internetowe dla firm. Realizacja w 3 dni, płatność jednorazowa. Ponad 500 stron.' },
                  { domain: 'strony-firmowe-tanio.pl', title: 'Strony Firmowe Tanio — Realizacja 24h', description: 'Tanie strony dla małych firm. Realizacja w 24h, płatność jednorazowa.' },
                ],
              },
              {
                query: 'strona internetowa dla firmy tanio',
                yourSite: {
                  domain: 'tania-strona-firmowa.pl',
                  title: 'Tania Strona Firmowa — Strony dla Firm od 49 zł/mies.',
                  description: 'Tania strona internetowa dla małej firmy od 49 zł miesięcznie. Profesjonalna, edycja z telefonu, SEO w cenie.',
                },
                competitors: [
                  { domain: 'taniastr.pl', title: 'TaniaStr.pl — Strony Internetowe od 300 zł', description: 'Tanie strony internetowe dla firm. Realizacja w 3 dni, płatność jednorazowa. Ponad 500 stron.' },
                  { domain: 'strony-firmowe-tanio.pl', title: 'Strony Firmowe Tanio — Realizacja 24h', description: 'Tanie strony dla małych firm. Realizacja w 24h, płatność jednorazowa.' },
                ],
              },
          ],
        },
      },
    ]}
    features={[
      { title: "1500 zł jednorazowo", description: "Tyle kosztuje Twoja strona. Płacisz raz, strona zostaje Twoja na zawsze." },
      { title: "49 zł miesięcznie", description: "Tyle kosztuje hosting, panel i wsparcie. Bez ukrytych opłat." },
      { title: "Bez umowy", description: "Płacisz co miesiąc. Rezygnujesz jednym mailem. Strona zostaje Twoja." },
      { title: "Edycja z telefonu", description: "Zmiana ceny, dodanie zdjęcia, nowy wpis — wszystko z aplikacji w telefonie." },
      { title: "Blog SEO", description: "Pisz artykuły, które przyciągają klientów z Google. Bez limitu wpisów." },
      { title: "Faktura VAT", description: "Na każdą płatność. Łatwo wrzucić w koszty firmy." },
    ]}
    trust={[
      { number: "1500 zł", label: "jednorazowo" },
      { number: "49 zł", label: "miesięcznie" },
      { number: "5 dni", label: "do gotowej strony" },
      { number: "0 zł", label: "ukrytych opłat" },
    ]}
    faq={[
      { q: "Ile naprawdę kosztuje najtańsza strona dla firmy?", a: "W SEO Grow — 1500 zł jednorazowo i 49 zł miesięcznie. To kompletny plan Start: strona, panel, hosting, SSL i wsparcie. Bez ukrytych opłat." },
      { q: "Czy tania strona będzie dobrze wyglądać?", a: "Tak. Nie robimy stron \"tanio wyglądających\". Robimy strony, które wyglądają profesjonalnie — niezależnie od planu." },
      { q: "Co jeśli potrzebuję czegoś więcej niż najtańszy plan?", a: "Masz dwa wyższe plany: Standard (2200 zł + 69 zł/mies.) i Premium (4500 zł + 99 zł/mies.). Zawsze możesz zmienić plan w trakcie." },
      { q: "Czy mogę zobaczyć efekty przed zapłatą?", a: "Tak. Najpierw rozmawiamy 15 minut, potem przygotowujemy projekt. Pokazujemy Ci efekty przed publikacją. Nic nie płacisz, dopóki nie będziesz zadowolony." },
      { q: "Czy jest jakaś umowa?", a: "Nie ma żadnej umowy na lata. Płacisz co miesiąc. Jeśli chcesz zrezygnować — jeden mail. Strona i tak zostaje Twoja." },
    ]}
    cta={{
      title: "Porozmawiajmy o Twojej stronie",
      description: "15 minut rozmowy, bez zobowiązań. Powiemy Ci szczerze, jaki plan ma sens dla Twojej firmy.",
      primaryLabel: "Zadzwoń: 517 105 423",
    }}
    internalLinks={[
      { label: "Plan Standard (2200 zł)", href: "/#ceny" },
      { label: "Plan Premium (4500 zł)", href: "/#ceny" },
      { label: "Strona internetowa Warszawa", href: "/strona-internetowa-warszawa" },
      { label: "Strona dla freelancera", href: "/strona-dla-freelancera" },
      { label: "Jak założyć stronę internetową", href: "/blog/jak-zalozyc-strone-internetowa" },
    ]}
    showModules={true}
    showPricing={true}
  />
)

// ────────────────────────────────────────────────────────────────────────────
// OBSŁUGA STRONY INTERNETOWEJ
// ────────────────────────────────────────────────────────────────────────────

export const ObslugaStronyInternetowejPage = () => (
  <SEOLandingPage
    path="/obsluga-strony-internetowej"
    title="Obsługa strony internetowej | Aktualizacje i wsparcie | SEO Grow"
    description="Obsługa strony internetowej dla firm: aktualizacje treści, poprawki techniczne, drobne zmiany. W planie Premium bez limitu, w Standard do 10 zmian miesięcznie."
    keywords="obsługa strony internetowej, obsługa strony www, aktualizacja strony, administracja strony, opieka nad stroną"
    h1="Obsługa strony internetowej"
    h1Accent="aktualizacje, poprawki, spokój"
    h1Sub="Nie musisz sam dbać o stronę — my to robimy za Ciebie."
    intro="Masz stronę, ale nie masz czasu jej pilnować? W SEO Grow dbamy o Twoją stronę — aktualizujemy treści, dodajemy zdjęcia, poprawiamy drobne rzeczy. Ty prowadzisz firmę, my dbamy o to, żeby strona działała i wyglądała aktualnie."
    heroImage="/panel.webp"
    heroImageAlt="Obsługa strony internetowej — panel aktualizacji SEO Grow"
    breadcrumb={[{ name: "Strony internetowe", href: "/#moduly" }, { name: "Obsługa strony", href: "/obsluga-strony-internetowej" }]}
    schema={serviceSchema(
      "obsluga-strony-internetowej",
      "Obsługa strony internetowej",
      "Administración y mantenimiento de páginas web",
      "Comiesięczna obsługa strony internetowej: aktualizacje treści, poprawki techniczne, drobne zmiany. W planie Premium bez limitu.",
    )}
    sections={[
      {
        heading: "Co robimy w ramach obsługi",
        content: "Aktualizujemy treści (zmiana cen, nowe usługi, informacje o firmie). Dodajemy zdjęcia. Poprawiamy drobne błędy. Piszemy nowe artykuły na blog. Dbamy o to, żeby strona była aktualna i działała bez problemów. Wszystko spokojnie, bez pośpiechu.",
        image: "/automat.webp",
        imageAlt: "Obsługa strony internetowej — aktualizacje treści",
        highlights: [
          "Zmiana cen i opisów usług",
          "Dodawanie zdjęć i nowych podstron",
          "Drobne poprawki techniczne",
          "Nowe artykuły na blogu",
        ],
      },
      {
        heading: "Ile zmian w miesiącu",
        content: "Plan Standard: do 10 zmian w miesiącu. Plan Premium: bez limitu. W praktyce 90% klientów mieści się w 10 zmianach — ale jeśli prowadzisz sklep albo regularnie dodajesz nowości, Premium daje spokój.",
        image: "/hero-640.webp",
        imageAlt: "Obsługa strony — ile zmian w miesiącu",
        imagePosition: "left",
        highlights: [
          "Standard: do 10 zmian w miesiącu",
          "Premium: bez limitu zmian",
          "90% klientów mieści się w Standard",
          "Zmiany zgłaszasz mailem lub telefonicznie",
        ],
      },
      {
        heading: "Jak wygląda współpraca",
        content: "Piszesz do nas maila albo dzwonisz — mówisz, co chcesz zmienić. My robimy to zwykle w ciągu 24 godzin w dni robocze. Nie musisz znać się na technice, nie musisz pisać instrukcji. Wystarczy krótki opis, np. \"zmień cenę usługi X z 200 na 220 zł\".",
        image: "/seogrow.webp",
        imageAlt: "Jak wygląda obsługa strony — współpraca z SEO Grow",
        imagePosition: "left",
        highlights: [
          "Mail lub telefon wystarczy",
          "Zmiana zwykle w 24h w dni robocze",
          "Nie musisz znać się na technice",
          "Bez zgłaszania ticketów i systemów",
        ],
      },
      {
        heading: 'Dlaczego warto powierzyć obsługę strony specjalistom',
        content: 'Strona bez regularnej obsługi traci pozycje w Google. Comiesięczna obsługa sprawia, że Twoja strona jest zawsze aktualna, działa szybko i pojawia się w wynikach, gdy klient szuka Twojej usługi.',
        highlights: [
          "Strona zawsze aktualna i działająca",
          "Widoczność w Google rośnie z miesiąca na miesiąc",
          "Ty prowadzisz firmę, my dbamy o stronę",
          "Bez stresu, bez umowy",
        ],
                imageAnimation: {
          rounds: [
              {
                query: 'obsługa strony internetowej dla firmy',
                yourSite: {
                  domain: 'obsluga-stron-firmowych.pl',
                  title: 'Obsługa Stron Firmowych — Aktualizacje i Wsparcie',
                  description: 'Comiesięczna obsługa strony internetowej: aktualizacje treści, poprawki techniczne, drobne zmiany.',
                },
                competitors: [
                  { domain: 'administracja-stron.pl', title: 'Administracja Stron WWW — Aktualizacje i Wsparcie', description: 'Profesjonalna administracja stron internetowych. Aktualizacje treści, poprawki techniczne, monitoring.' },
                  { domain: 'opieka-nad-strona.pl', title: 'Opieka nad Stroną Internetową — Pakiety Miesięczne', description: 'Comiesięczna opieka nad stroną WWW. Aktualizacje CMS, poprawki, wsparcie techniczne.' },
                ],
              },
              {
                query: 'administracja strony internetowej',
                yourSite: {
                  domain: 'obsluga-stron-firmowych.pl',
                  title: 'Obsługa Stron Firmowych — Aktualizacje i Wsparcie',
                  description: 'Comiesięczna obsługa strony internetowej: aktualizacje treści, poprawki techniczne, drobne zmiany.',
                },
                competitors: [
                  { domain: 'administracja-stron.pl', title: 'Administracja Stron WWW — Aktualizacje i Wsparcie', description: 'Profesjonalna administracja stron internetowych. Aktualizacje treści, poprawki techniczne, monitoring.' },
                  { domain: 'opieka-nad-strona.pl', title: 'Opieka nad Stroną Internetową — Pakiety Miesięczne', description: 'Comiesięczna opieka nad stroną WWW. Aktualizacje CMS, poprawki, wsparcie techniczne.' },
                ],
              },
              {
                query: 'opieka nad stroną www',
                yourSite: {
                  domain: 'obsluga-stron-firmowych.pl',
                  title: 'Obsługa Stron Firmowych — Aktualizacje i Wsparcie',
                  description: 'Comiesięczna obsługa strony internetowej: aktualizacje treści, poprawki techniczne, drobne zmiany.',
                },
                competitors: [
                  { domain: 'administracja-stron.pl', title: 'Administracja Stron WWW — Aktualizacje i Wsparcie', description: 'Profesjonalna administracja stron internetowych. Aktualizacje treści, poprawki techniczne, monitoring.' },
                  { domain: 'opieka-nad-strona.pl', title: 'Opieka nad Stroną Internetową — Pakiety Miesięczne', description: 'Comiesięczna opieka nad stroną WWW. Aktualizacje CMS, poprawki, wsparcie techniczne.' },
                ],
              },
          ],
        },
      },
    ]}
    features={[
      { title: "Aktualizacje treści", description: "Zmiana cen, opisów, dodawanie nowych usług — robimy to za Ciebie." },
      { title: "Nowe zdjęcia", description: "Dodajemy zdjęcia, optymalizujemy je, dbamy o to, żeby strona wyglądała aktualnie." },
      { title: "Poprawki techniczne", description: "Drobne błędy, literówki, niedziałające linki — naprawiamy, zanim zauważysz." },
      { title: "Nowe artykuły SEO", description: "Piszemy artykuły, które przyciągają klientów z Google. Bez limitu w Premium." },
      { title: "Wsparcie po polsku", description: "W dni robocze odbieramy telefon. Bez ticketów, bez czekania." },
      { title: "Brak umowy", description: "Płacisz co miesiąc. Rezygnujesz jednym mailem. Strona zostaje Twoja." },
    ]}
    trust={[
      { number: "24h", label: "realizacja w dni robocze" },
      { number: "10", label: "zmian w planie Standard" },
      { number: "∞", label: "zmian w planie Premium" },
      { number: "0 zł", label: "dodatkowych opłat" },
    ]}
    faq={[
      { q: "Co wchodzi w obsługę strony?", a: "Aktualizacje treści (zmiana cen, opisów, usług), dodawanie zdjęć, drobne poprawki techniczne, nowe artykuły na blogu. Wszystko, co sprawia, że Twoja strona jest aktualna i działa." },
      { q: "Ile kosztuje obsługa strony?", a: "Obsługa jest wliczona w plany Standard (69 zł/mies., do 10 zmian) i Premium (99 zł/mies., bez limitu). W planie Start (49 zł/mies.) nie ma obsługi — musisz sam edytować lub dokupić pakiet zmian." },
      { q: "Co to znaczy \"jedna zmiana\"?", a: "Jedna zmiana to jedna konkretna rzecz — np. \"zmień cenę usługi X z 200 na 220 zł\" albo \"dodaj nową podstronę o usłudze Y\". Drobne korekty (literówka, zmiana jednego zdjęcia) liczą się jako jedna zmiana." },
      { q: "Co jeśli potrzebuję więcej niż 10 zmian w miesiącu?", a: "W planie Standard masz do 10 zmian. Jeśli potrzebujesz więcej, możesz przejść na Premium (bez limitu) albo dokupić pakiet dodatkowych zmian za 30-50 zł." },
      { q: "Jak szybko realizujecie zmiany?", a: "Zwykle w ciągu 24 godzin w dni robocze. Jeśli zmiana jest pilna — napisz, zrobimy szybciej. W weekendy odpowiadamy na maile, ale realizujemy zmiany od poniedziałku." },
    ]}
    cta={{
      title: "Spokojna głowa z obsługą strony",
      description: "15 minut rozmowy, bez zobowiązań. Powiemy Ci, jaki plan ma sens dla Twojej firmy.",
      primaryLabel: "Zadzwoń: 517 105 423",
    }}
    internalLinks={[
      { label: "Plan Standard (z obsługą)", href: "/#ceny" },
      { label: "Plan Premium (bez limitu)", href: "/#ceny" },
      { label: "Strona dla freelancera", href: "/strona-dla-freelancera" },
      { label: "Strona dla warsztatu", href: "/strona-dla-warsztatu-samochodowego" },
      { label: "Blog firmowy jako kanał sprzedaży", href: "/blog/blog-firmowy-jako-kanal-sprzedazy" },
    ]}
    showModules={true}
    showPricing={true}
  />
)