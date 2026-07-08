import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ROOT_DIR = path.resolve(__dirname, '..');
export const BUILD_DIR = path.resolve(ROOT_DIR, 'dist');
export const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');
export const BLOG_POSTS_PATH = path.resolve(ROOT_DIR, 'src/data/blogPosts.ts');
export const SITE_URL = 'https://seogrow.pl';

const HOME_ROUTE = {
  route: '/',
  title: 'Twoja strona widoczna w Google | Bez agencji SEO, gotowa w 5 dni | SEO Grow',
  description:
    'Twoja strona internetowa widoczna w Google bez agencji SEO. Gotowa w 5 dni, edycja z telefonu, klienci znajdują Cię sami bez płacenia za reklamy. Od 1 500 zł.',
  selectors: ['#main-content', 'main'],
  includeInSitemap: true,
  noindex: false,
  expectJsonLd: true,
  changefreq: 'daily',
  priority: '1.0',
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://seogrow.pl/#organization',
      name: 'SEO Grow',
      alternateName: 'SEOGrow',
      legalName: 'Grow Solutions',
      additionalType: 'https://schema.org/SelfEmployed',
      url: 'https://seogrow.pl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://seogrow.pl/logo-320.webp',
        width: 320,
        height: 85,
      },
      image: 'https://seogrow.pl/panel-1280.webp',
      description:
        'Profesjonalne strony internetowe z automatycznym SEO dla małych firm w Polsce.',
      email: 'kontakt@seogrow.pl',
      telephone: '+48-517-105-423',
      taxID: '7412176947',
      vatID: 'PL7412176947',
      iso6523Code: '0204:7412176947',
      foundingDate: '2024',
      founder: { '@id': 'https://seogrow.pl/#founder' },
      areaServed: [{ '@type': 'Country', name: 'Polska' }],
      serviceType: [
        'Tworzenie stron internetowych',
        'Pozycjonowanie stron',
        'CMS dla firm',
        'Blog firmowy SEO',
      ],
      knowsLanguage: ['pl-PL', 'en-US'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+48-517-105-423',
          contactType: 'customer service',
          email: 'kontakt@seogrow.pl',
          availableLanguage: ['Polish', 'English'],
          areaServed: 'PL',
          hoursAvailable: 'Mo-Fr 08:00-17:00',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+48-517-105-423',
          contactType: 'sales',
          email: 'kontakt@seogrow.pl',
          availableLanguage: ['Polish'],
          areaServed: 'PL',
          hoursAvailable: 'Mo-Fr 08:00-17:00',
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ul. Czarnieckiego 13/12',
        addressLocality: 'Ostróda',
        postalCode: '14-100',
        addressRegion: 'warmińsko-mazurskie',
        addressCountry: 'PL',
      },
      sameAs: [
        'https://www.facebook.com/seogrow',
        'https://www.linkedin.com/company/seogrow',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://seogrow.pl/#founder',
      name: 'SEO Grow Founder',
      jobTitle: 'Founder & CEO',
      worksFor: { '@id': 'https://seogrow.pl/#organization' },
      url: 'https://seogrow.pl',
      email: 'kontakt@seogrow.pl',
      telephone: '+48-517-105-423',
      knowsLanguage: ['pl-PL', 'en-US', 'pt-BR', 'es-ES'],
      sameAs: ['https://www.linkedin.com/company/seogrow'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://seogrow.pl/#website',
      url: 'https://seogrow.pl',
      name: 'SEO Grow',
      description: 'Strona internetowa z automatycznym SEO dla małych firm',
      publisher: { '@id': 'https://seogrow.pl/#organization' },
      inLanguage: 'pl-PL',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://seogrow.pl/blog?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://seogrow.pl/#webpage',
      url: 'https://seogrow.pl/',
      name: 'Strona internetowa z SEO dla małych firm | SEO Grow',
      isPartOf: { '@id': 'https://seogrow.pl/#website' },
      about: { '@id': 'https://seogrow.pl/#organization' },
      description:
        'Profesjonalna strona internetowa z automatycznym SEO dla małych firm, freelancerów i rzemieślników. Gotowa w 5 dni.',
      inLanguage: 'pl-PL',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://seogrow.pl/panel-1280.webp',
        width: 1280,
        height: 720,
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        xpath: [
          '/html/head/title',
          "/html/head/meta[@name='description']/@content",
          "//section[@id='jak-to-dziala']//h2",
          "//section[@id='ceny']//h2",
        ],
      },
      lastReviewed: '2026-07-09',
      reviewedBy: { '@id': 'https://seogrow.pl/#founder' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Tworzenie stron internetowych z SEO',
      provider: { '@id': 'https://seogrow.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Polska' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Pakiety SeoGrow',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Start - Strona wizytówka',
            price: '1500.00',
            priceCurrency: 'PLN',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '49.00',
              priceCurrency: 'PLN',
              referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitText: 'miesiąc' },
            },
            availability: 'https://schema.org/InStock',
            url: 'https://seogrow.pl/zamowienie?plan=start',
            eligibleCustomerType: 'https://schema.org/BusinessEntity',
          },
          {
            '@type': 'Offer',
            name: 'Standard - Strona z blogiem i SEO',
            price: '2200.00',
            priceCurrency: 'PLN',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '69.00',
              priceCurrency: 'PLN',
              referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitText: 'miesiąc' },
            },
            availability: 'https://schema.org/InStock',
            url: 'https://seogrow.pl/zamowienie?plan=express',
            eligibleCustomerType: 'https://schema.org/BusinessEntity',
          },
          {
            '@type': 'Offer',
            name: 'Premium - Indywidualny projekt',
            price: '4500.00',
            priceCurrency: 'PLN',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '99.00',
              priceCurrency: 'PLN',
              referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitText: 'miesiąc' },
            },
            availability: 'https://schema.org/InStock',
            url: 'https://seogrow.pl/zamowienie?plan=premium',
            eligibleCustomerType: 'https://schema.org/BusinessEntity',
          },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': 'https://seogrow.pl/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Ile naprawdę kosztuje strona u was?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Od 1 500 zł jednorazowo + 49 zł miesięcznie za pakiet Start. Dokładna cena zależy od wybranego pakietu (Standard lub Premium). W każdej opcji masz już stronę, CMS, hosting, SSL i wsparcie. Żadnych ukrytych opłat ani niespodzianek na fakturze.',
          },
        },
        {
          '@type': 'Question',
          name: 'Czy moja strona będzie widoczna w Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Strona startuje zoptymalizowana technicznie pod Google — schema, meta tagi, szybkość, mobilna. Realne wyniki zależą od Twojej branży i konkurencji. W planie Premium dostajesz comiesięczny raport widoczności.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ile trwa stworzenie strony internetowej?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardowo 5 dni roboczych od 15-minutowej rozmowy startowej. W tym czasie generujemy stronę, konfigurujemy SEO, Google Analytics i Search Console.',
          },
        },
        {
          '@type': 'Question',
          name: 'Czy muszę umieć programować, żeby prowadzić stronę?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nie. Panel jest zaprojektowany dla osób nietechnicznych. Zmiana ceny, dodanie zdjęcia, nowa usługa czy wpis na blogu zajmuje chwilę. W dni robocze odbieramy telefony i pomagamy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ile kosztuje strona internetowa w Polsce w 2026 roku?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ceny stron dla małych firm wahają się od 1 000 zł (szablony) do 20 000+ zł (agencje). Gotowe CMS-y z blogiem SEO i wsparciem kosztują zwykle 1 500-3 000 zł jednorazowo + 50-100 zł miesięcznie. SEO Grow wpisuje się w środek tego rynku.',
          },
        },
        {
          '@type': 'Question',
          name: 'Co to jest CMS i czy go potrzebuję?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CMS (Content Management System) to panel, w którym sam zmieniasz treści na stronie — bez programisty. Każdy plan SEO Grow ma CMS w cenie, z edycją z telefonu.',
          },
        },
        {
          '@type': 'Question',
          name: 'Czy mogę zrezygnować w każdej chwili?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tak. Nie ma żadnej umowy na lata. Płacisz co miesiąc, jeśli chcesz zrezygnować — robisz to jednym mailem. Strona zostaje Twoja na zawsze.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      '@id': 'https://seogrow.pl/#howto',
      name: 'Jak wygląda wdrożenie strony w SEO Grow',
      description:
        'Twoja strona internetowa gotowa w 5 dni roboczych — pełne wdrożenie z konfiguracją SEO, Google Analytics i Search Console.',
      totalTime: 'P5D',
      estimatedCost: { '@type': 'MonetaryAmount', currency: 'PLN', minValue: 1500, maxValue: 4500 },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: '15-minutowa rozmowa',
          text: 'Poznajemy Twoją firmę, branżę i cele. Bez ankiet, bez formularzy, bez czekania na wycenę.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Generowanie strony',
          text: 'System generuje stronę pod Twoją firmę, konfiguruje SEO, Google Analytics i Search Console. Ty dostarczasz treści.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Akceptacja',
          text: 'Ty akceptujesz gotowy efekt — wszystko z telefonu, jednym kliknięciem.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Publikacja w 5 dni',
          text: 'Strona gotowa w 5 dni roboczych. System dba o aktualizacje, bezpieczeństwo i szybkość.',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      '@id': 'https://seogrow.pl/#panel-demo-video',
      name: 'Demo panelu SEO Grow - edycja strony z telefonu',
      description:
        'Krótkie demo panelu administracyjnego SEO Grow: zmiana treści, edycja modułów i publikacja wpisów z telefonu.',
      thumbnailUrl: 'https://seogrow.pl/panel-1280.webp',
      contentUrl: 'https://seogrow.pl/panel.webm',
      embedUrl: 'https://seogrow.pl/#moduly',
      uploadDate: '2026-04-15',
      duration: 'PT18S',
      inLanguage: 'pl-PL',
      publisher: { '@id': 'https://seogrow.pl/#organization' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://seogrow.pl/#local',
      name: 'SEO Grow',
      image: 'https://seogrow.pl/logo-320.webp',
      url: 'https://seogrow.pl',
      telephone: '+48-517-105-423',
      email: 'kontakt@seogrow.pl',
      priceRange: '1500-4500 PLN',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ul. Czarnieckiego 13/12',
        addressLocality: 'Ostróda',
        postalCode: '14-100',
        addressRegion: 'warmińsko-mazurskie',
        addressCountry: 'PL',
      },
      areaServed: { '@type': 'Country', name: 'Polska' },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 53.6961, longitude: 19.9649 },
    },
  ],
};

const BLOG_ROUTE = {
  route: '/blog',
  title: 'Blog SEO Grow | SEO, content i konwersja dla firm',
  description:
    'Czytaj praktyczne poradniki o SEO, treści, blogu firmowym i zwiększaniu konwersji. Konkretne wskazówki dla firm, które chcą zdobywać więcej klientów z Google.',
  selectors: ['main', 'article', '#root:not(:empty)'],
  includeInSitemap: true,
  noindex: false,
  expectJsonLd: true,
  changefreq: 'weekly',
  priority: '0.9',
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Blog SEO Grow',
      url: `${SITE_URL}/blog`,
      inLanguage: 'pl-PL',
      description:
        'Praktyczne artykuły o SEO, content marketingu, konwersji i technologii dla firm, które chcą rosnąć w Google.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Start', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      ],
    },
  ],
};

const SUPPORT_ROUTE = {
  route: '/wsparcie',
  title: 'Wsparcie i dokumentacja | SEO Grow',
  description:
    'Dokumentacja SEO Grow: szybki start, moduł bloga, SEO automatyczne, integracje, bezpieczeństwo i wsparcie techniczne dla użytkowników systemu.',
  selectors: ['main', '#overview', '#root:not(:empty)'],
  includeInSitemap: false,
  noindex: true,
  expectJsonLd: false,
  changefreq: 'monthly',
  priority: '0.2',
};

const ORDER_ROUTE = {
  route: '/zamowienie',
  title: 'Zamów wdrożenie | SEO Grow',
  description:
    'Wybierz plan, przekaż materiały i uruchom projekt z automatycznym SEO oraz blogiem firmowym.',
  selectors: ['main', 'form', '#root:not(:empty)'],
  includeInSitemap: false,
  noindex: true,
  expectJsonLd: false,
  changefreq: 'monthly',
  priority: '0.2',
};

const PRIVACY_POLICY_ROUTE = {
  route: '/polityka-prywatnosci',
  title: 'Polityka prywatnosci | SEO Grow',
  description:
    'Informacje o administratorze danych, celach przetwarzania, prawach uzytkownika i zasadach ochrony prywatnosci w SEO Grow.',
  selectors: ['main', 'h1', '#root:not(:empty)'],
  includeInSitemap: true,
  noindex: false,
  expectJsonLd: true,
  changefreq: 'yearly',
  priority: '0.3',
};

const COOKIES_POLICY_ROUTE = {
  route: '/polityka-cookies',
  title: 'Polityka cookies | SEO Grow',
  description:
    'Zasady wykorzystywania plikow cookie, kategorii zgody oraz sposobow zarzadzania preferencjami prywatnosci w SEO Grow.',
  selectors: ['main', 'h1', '#root:not(:empty)'],
  includeInSitemap: true,
  noindex: false,
  expectJsonLd: true,
  changefreq: 'yearly',
  priority: '0.3',
};

const DATA_PROCESSING_ROUTE = {
  route: '/przetwarzanie-danych',
  title: 'Zasady przetwarzania danych | SEO Grow',
  description:
    'Zakres, cele, odbiorcy i okresy przechowywania danych osobowych przetwarzanych przez SEO Grow.',
  selectors: ['main', 'h1', '#root:not(:empty)'],
  includeInSitemap: true,
  noindex: false,
  expectJsonLd: true,
  changefreq: 'yearly',
  priority: '0.3',
};

const CONTENT_ROUTES = [
  {
    route: '/cms-seo',
    title: 'CMS SEO | Prosty CMS z SEO technicznym bez WordPressa',
    description: 'CMS SEO to system, który automatycznie generuje meta tagi, schema markup i sitemapy. Dowiedz się, jak działa i kiedy WordPress nie jest potrzebny.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    route: '/cms-seo-pequenas-empresas',
    title: 'CMS SEO dla małych firm | Strona z prostym panelem i SEO technicznym',
    description: 'CMS SEO dla małych firm pomaga uporządkować treści, meta tagi, sitemap i strukturę strony bez nauki WordPressa.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/cms-con-seo-automatico',
    title: 'CMS z automatycznym SEO technicznym | Meta tagi, schema i sitemap',
    description: 'Dowiedz się, jak działa CMS z automatycznym SEO technicznym: meta tagi, schema markup, sitemap i czytelna struktura strony bez ręcznej konfiguracji.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/crear-pagina-web-seo',
    title: 'Tworzenie strony internetowej zoptymalizowanej pod SEO | Od briefu do publikacji',
    description: 'Jak stworzyć stronę internetową przygotowaną pod SEO techniczne. Praktyczny przewodnik krok po kroku bez żargonu.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/alternativa-wordpress-seo',
    title: 'Alternatywa dla WordPressa | Prosty CMS z SEO technicznym bez wtyczek',
    description: 'WordPress wymaga wtyczek, aktualizacji i konfiguracji. Sprawdź alternatywę, która ma prosty CMS i SEO techniczne w cenie.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/wordpress-vs-seogrow',
    title: 'WordPress vs SEO Grow | Porównanie CMS dla małej firmy',
    description: 'WordPress wymaga wtyczek SEO, aktualizacji i konfiguracji. SEO Grow łączy prosty CMS, blog i SEO techniczne w jednym systemie.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    route: '/wix-vs-seogrow',
    title: 'Wix vs SEO Grow | Porównanie kreatora i prostego CMS',
    description: 'Wix to popularny kreator stron. SEO Grow to prosty CMS dla firm z blogiem, hostingiem i SEO technicznym w cenie.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    route: '/dlaczego-moja-strona-nie-pojawia-sie-w-google',
    title: 'Dlaczego moja strona nie pojawia się w Google | 7 najczęstszych powodów',
    description: 'Strona nie pojawia się w Google? Sprawdź 7 najczęstszych powodów i dowiedz się, jak to naprawić. Praktyczny przewodnik bez żargonu.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    route: '/jak-szybko-wyjsc-w-google',
    title: 'Jak zgłosić stronę do Google | 6 technicznych kroków',
    description: 'Chcesz pomóc Google znaleźć nową stronę? Oto 6 konkretnych kroków: Search Console, sitemap, meta dane i poprawna struktura.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    route: '/najczestsze-bledy-seo',
    title: 'Najczęstsze błędy SEO | 10 problemów technicznych na stronie',
    description: 'Najczęstsze błędy SEO, które po cichu ograniczają widoczność strony. Sprawdź, które z nich możesz naprawić sam — bez audytu.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    route: '/strona-dla-prawnika',
    title: 'Strona internetowa dla kancelarii prawnej | SEO lokalne, blog, formularz kontaktowy',
    description: 'Strona dla prawnika lub kancelarii z prostym CMS, blogiem, schema markup i technicznymi podstawami SEO lokalnego.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    route: '/strona-dla-kliniki',
    title: 'Strona internetowa dla kliniki medycznej | SEO lokalne, rezerwacje online, schema Healthcare',
    description: 'Strona dla przychodni lub kliniki z automatycznym SEO lokalnym, schema markup Healthcare, modułem rezerwacji i blogiem zdrowotnym.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    route: '/strona-dla-gabinetu-stomatologicznego',
    title: 'Strona dla gabinetu stomatologicznego | SEO lokalne, Dental Clinic schema, rezerwacje',
    description: 'Strona dla gabinetu stomatologicznego z SEO technicznym, schema markup Dental Clinic i modułem rezerwacji.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    route: '/strona-dla-restauracji',
    title: 'Strona dla restauracji | Menu cyfrowe, SEO lokalne, schema Restaurant, rezerwacje',
    description: 'Strona dla restauracji z prostym CMS, menu cyfrowym, schema Restaurant i technicznymi podstawami SEO lokalnego.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    route: '/sklep-online',
    title: 'Sklep Online SEO | Sprzedaż przez internet bez prowizji od sprzedaży',
    description: 'Sklep internetowy przygotowany pod SEO techniczne, z płatnościami Stripe, PayU, Tpay i zarządzaniem zapasami.',
    selectors: ['main', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/akademia-kursow',
    title: 'Akademia Online z SEO | Twórz i sprzedawaj kursy bez wtyczek',
    description: 'Akademia kursów online z automatycznym SEO, certyfikatami PDF, egzaminami i zarządzaniem studentami.',
    selectors: ['main', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/rezerwacje-i-terminy',
    title: 'System rezerwacji online | Kalendarz, terminy i płatności bez pośredników',
    description: 'System rezerwacji z synchronizacją Kalendarza Google, przypomnieniami SMS i płatnością za wizytę.',
    selectors: ['main', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/menu-cyfrowe',
    title: 'Menu Cyfrowe QR | Menu restauracji widoczne w Google i na telefonie klienta',
    description: 'Menu cyfrowe QR dla restauracji z technicznymi podstawami SEO lokalnego, kartą dań i zintegrowanymi płatnościami.',
    selectors: ['main', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/ekspansja-globalna',
    title: 'Ekspansja Globalna | Strona w wielu językach i wielu walutach',
    description: 'Strona w wielu językach z automatycznym hreflang, domenami per kraj i cenami lokalnymi.',
    selectors: ['main', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    route: '/wizytowka-prac',
    title: 'Wizytówka Prac | Portfolio przygotowane pod Google',
    description: 'Profesjonalne portfolio z automatycznym SEO, galeriami, filtrami i formularzem kontaktowym.',
    selectors: ['main', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.6',
  },
  // ─── Tier 1 — páginas por ciudad (captura búsqueda local) ───
  {
    route: '/strona-internetowa-warszawa',
    title: 'Strona internetowa Warszawa | Gotowa w 5 dni, od 1500 zł | SEO Grow',
    description: 'Profesjonalna strona internetowa dla firm z Warszawy. Gotowa w 5 dni, edycja z telefonu, widoczność w Google bez płacenia za reklamy. Od 1500 zł jednorazowo.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-internetowa-krakow',
    title: 'Strona internetowa Kraków | Gotowa w 5 dni, od 1500 zł | SEO Grow',
    description: 'Profesjonalna strona internetowa dla firm z Krakowa i Małopolski. Gotowa w 5 dni, edycja z telefonu, widoczność w Google. Od 1500 zł jednorazowo.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-internetowa-lodz',
    title: 'Strona internetowa Łódź | Gotowa w 5 dni, od 1500 zł | SEO Grow',
    description: 'Profesjonalna strona internetowa dla firm z Łodzi i okolic. Gotowa w 5 dni, edycja z telefonu, widoczność w Google. Od 1500 zł jednorazowo.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-internetowa-wroclaw',
    title: 'Strona internetowa Wrocław | Gotowa w 5 dni, od 1500 zł | SEO Grow',
    description: 'Profesjonalna strona internetowa dla firm z Wrocławia i Dolnego Śląska. Gotowa w 5 dni, edycja z telefonu, widoczność w Google. Od 1500 zł jednorazowo.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: '2026-07-01',
  },
  // ─── Tier 1 — páginas por servicio ───
  {
    route: '/pozycjonowanie-stron-dla-firm',
    title: 'Pozycjonowanie stron dla firm | SEO bez agencji, od 99 zł/mies. | SEO Grow',
    description: 'Pozycjonowanie stron dla małych firm. Comiesięczne raporty widoczności, optymalizacja treści i techniki. Bez umowy, od 99 zł miesięcznie w planie Premium.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: '2026-07-01',
  },
  {
    route: '/seo-lokalne-dla-firm',
    title: 'SEO lokalne dla małych firm | Twoja firma w Google od 49 zł/mies. | SEO Grow',
    description: 'SEO lokalne dla małych firm — Twoi klienci z okolicy znajdują Cię w Google. Bez agencji, od 49 zł miesięcznie. Comiesięczne raporty, wsparcie po polsku, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: '2026-07-01',
  },
  {
    route: '/cennik',
    title: 'Cennik stron internetowych dla firm | od 1500 zł | SEO Grow',
    description: 'Cennik stron internetowych dla małych firm w Polsce. Trzy plany: Start od 1500 zł, Standard od 2200 zł, Premium od 4500 zł. Bez umowy, wsparcie po polsku.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: '2026-07-09',
  },
  {
    route: '/tania-strona-internetowa-dla-firmy',
    title: 'Tania strona internetowa dla firmy | Od 49 zł/mies. | SEO Grow',
    description: 'Tania strona internetowa dla małej firmy bez utraty jakości. Od 1500 zł jednorazowo + 49 zł miesięcznie. Bez umowy, ze wsparciem po polsku.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: '2026-07-01',
  },
  {
    route: '/obsluga-strony-internetowej',
    title: 'Obsługa strony internetowej | Aktualizacje i wsparcie | SEO Grow',
    description: 'Obsługa strony internetowej dla firm: aktualizacje treści, poprawki techniczne, drobne zmiany. W planie Premium bez limitu, w Standard do 10 zmian miesięcznie.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: '2026-07-01',
  },
  // ─── Tier 1 — páginas verticales existentes (bug fix: no se prerenderizaban) ───
  {
    route: '/strona-dla-freelancera',
    title: 'Strona dla freelancera | Portfolio, blog i SEO od 1500 zł | SEO Grow',
    description: 'Strona dla freelancera z portfolio, blogiem SEO, edycją z telefonu i formularzem kontaktowym. Od 1500 zł jednorazowo, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-warsztatu-samochodowego',
    title: 'Strona dla warsztatu samochodowego | SEO lokalne, od 1500 zł | SEO Grow',
    description: 'Strona dla warsztatu samochodowego z SEO lokalnym, mapą Google, formularzem i cennikiem usług. Od 1500 zł jednorazowo.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-kosmetyczki',
    title: 'Strona dla kosmetyczki | SEO lokalne, rezerwacje, od 1500 zł | SEO Grow',
    description: 'Strona dla salonu kosmetycznego z SEO lokalnym, rezerwacjami online, galerią i cennikiem. Od 1500 zł jednorazowo.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-fryzjera',
    title: 'Strona dla fryzjera | SEO lokalne, rezerwacje, od 1500 zł | SEO Grow',
    description: 'Strona dla salonu fryzjerskiego z SEO lokalnym, rezerwacjami online, galerią i cennikiem. Od 1500 zł jednorazowo.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-psychologa',
    title: 'Strona dla psychologa | SEO lokalne, blog, od 1500 zł | SEO Grow',
    description: 'Strona dla gabinetu psychologicznego z SEO lokalnym, blogiem, formularzem i mapą Google. Od 1500 zł jednorazowo.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-fizjoterapeuty',
    title: 'Strona dla fizjoterapeuty | SEO lokalne, rezerwacje, od 1500 zł | SEO Grow',
    description: 'Strona dla gabinetu fizjoterapii z SEO lokalnym, rezerwacjami online, cennikiem i formularzem. Od 1500 zł jednorazowo.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  // ─── Tier 2 — verticales long-tail priorizadas por volumen ───
  {
    route: '/strona-dla-fotografa',
    title: 'Strona dla fotografa | Portfolio, galeria, SEO lokalne | SEO Grow',
    description: 'Strona dla fotografa z portfolio, galerią zdjęć, SEO lokalnym i formularzem rezerwacji sesji. Od 1500 zł, edycja z telefonu, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-hotelu',
    title: 'Strona dla hotelu | Rezerwacje, SEO lokalne, Google Maps | SEO Grow',
    description: 'Strona dla hotelu, pensjonatu i obiektu noclegowego z modułem rezerwacji, SEO lokalnym, Google Maps i opiniami gości. Od 1500 zł, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-architekta',
    title: 'Strona dla architekta | Portfolio, SEO lokalne | SEO Grow',
    description: 'Strona dla architekta z portfolio projektów, SEO lokalnym i formularzem kontaktowym. Od 1500 zł, edycja z telefonu, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-agencji-nieruchomosci',
    title: 'Strona dla agencji nieruchomości | Oferty, SEO lokalne | SEO Grow',
    description: 'Strona dla agencji nieruchomości i pośrednika z ofertami, SEO lokalnym, mapą i formularzem kontaktowym. Od 1500 zł, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-kancelarii-prawnej',
    title: 'Strona dla kancelarii prawnej | SEO lokalne, RODO | SEO Grow',
    description: 'Strona dla kancelarii prawnej z SEO lokalnym, schema LegalService, blogiem prawniczym i zgodnością RODO. Od 1500 zł, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-mechanika',
    title: 'Strona dla mechanika | SEO lokalne, cennik, opinie | SEO Grow',
    description: 'Strona dla mechanika samochodowego z SEO lokalnym, cennikiem usług, opiniami Google i formularzem kontaktowym. Od 1500 zł, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-trenera-personalnego',
    title: 'Strona dla trenera personalnego | SEO lokalne, oferta | SEO Grow',
    description: 'Strona dla trenera personalnego z SEO lokalnym, opisem usług, cennikiem i formularzem kontaktowym. Od 1500 zł, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-projektanta-wnetrz',
    title: 'Strona dla projektanta wnętrz | Portfolio, SEO lokalne | SEO Grow',
    description: 'Strona dla projektanta wnętrz z portfolio realizacji, SEO lokalnym i formularzem kontaktowym. Od 1500 zł, edycja z telefonu, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-dentysty',
    title: 'Strona dla dentysty | SEO lokalne, rezerwacje | SEO Grow',
    description: 'Strona dla dentysty z SEO lokalnym, schema DentalClinic, rezerwacjami online i galerią. Od 1500 zł, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
  {
    route: '/strona-dla-weterynarza',
    title: 'Strona dla weterynarza | SEO lokalne, rezerwacje | SEO Grow',
    description: 'Strona dla weterynarza z SEO lokalnym, listą usług, rezerwacjami online i opiniami. Od 1500 zł, bez umowy.',
    selectors: ['main', 'h1', '#root:not(:empty)'],
    includeInSitemap: true,
    noindex: false,
    expectJsonLd: true,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2026-07-01',
  },
];

const monthMap = {
  stycznia: '01',
  lutego: '02',
  marca: '03',
  kwietnia: '04',
  maja: '05',
  czerwca: '06',
  lipca: '07',
  sierpnia: '08',
  wrzesnia: '09',
  września: '09',
  pazdziernika: '10',
  października: '10',
  listopada: '11',
  grudnia: '12',
};

export const escapeHtml = (value = '') =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const normalizePolishDate = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(',', '')
    .trim();

export const parsePolishDate = (value) => {
  if (!value) {
    return new Date().toISOString().split('T')[0];
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }

  if (/^\d{2}\.\d{2}\.\d{4}$/.test(value)) {
    const [day, month, year] = value.split('.');
    return `${year}-${month}-${day}`;
  }

  const [day, month, year] = normalizePolishDate(value).split(/\s+/);
  if (!day || !month || !year || !monthMap[month]) {
    return new Date().toISOString().split('T')[0];
  }

  return `${year}-${monthMap[month]}-${day.padStart(2, '0')}`;
};

export const extractBlogPostsMeta = () => {
  const tsContent = fs.readFileSync(BLOG_POSTS_PATH, 'utf-8');
  const postRegex =
    /slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?excerpt:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"/g;

  const posts = [];
  let match;

  while ((match = postRegex.exec(tsContent)) !== null) {
    const [, slug, title, excerpt, date] = match;
    posts.push({
      slug,
      title,
      description: excerpt,
      date,
      lastmod: parsePolishDate(date),
    });
  }

  return posts;
};

/**
 * Generate BreadcrumbList itemListElement for a given route path.
 * Handles special routes (/, /blog, /zamowienie, etc.) and deep paths.
 */
function generateBreadcrumbItemListElement(route) {
  const parts = route.split('/').filter(Boolean);
  const elements = [
    { '@type': 'ListItem', position: 1, name: 'Start', item: SITE_URL },
  ];

  // Breadcrumb name overrides for common prefixes
  const breadcrumbNames = {
    'blog': 'Blog',
    'zamowienie': 'Zamów',
    'wsparcie': 'Wsparcie',
    'polityka-prywatnosci': 'Polityka prywatności',
    'polityka-cookies': 'Polityka cookies',
    'przetwarzanie-danych': 'Przetwarzanie danych',
    'cms-seo': 'CMS SEO',
    'cms-seo-pequenas-empresas': 'CMS SEO dla małych firm',
    'cms-con-seo-automatico': 'CMS z SEO automatycznym',
    'crear-pagina-web-seo': 'Tworzenie strony z SEO',
    'alternativa-wordpress-seo': 'Alternatywa dla WordPress',
    'wordpress-vs-seogrow': 'WordPress vs SEO Grow',
    'wix-vs-seogrow': 'Wix vs SEO Grow',
    'dlaczego-moja-strona-nie-pojawia-sie-w-google': 'Dlaczego strona nie pojawia się w Google',
    'jak-szybko-wyjsc-w-google': 'Jak szybko wyjść w Google',
    'najczestsze-bledy-seo': 'Najczęstsze błędy SEO',
    'sklep-online': 'Sklep Online',
    'akademia-kursow': 'Akademia Kursów',
    'rezerwacje-i-terminy': 'Rezerwacje i Terminy',
    'menu-cyfrowe': 'Menu Cyfrowe',
    'ekspansja-globalna': 'Ekspansja Globalna',
    'wizytowka-prac': 'Wizytówka Prac',
    'strona-dla-prawnika': 'Strona dla prawnika',
    'strona-dla-kliniki': 'Strona dla kliniki',
    'strona-dla-gabinetu-stomatologicznego': 'Strona dla dentysty',
    'strona-dla-restauracji': 'Strona dla restauracji',
    'strona-dla-freelancera': 'Strona dla freelancera',
    'strona-dla-warsztatu-samochodowego': 'Strona dla warsztatu',
    'strona-dla-kosmetyczki': 'Strona dla kosmetyczki',
    'strona-dla-fryzjera': 'Strona dla fryzjera',
    'strona-dla-psychologa': 'Strona dla psychologa',
    'strona-dla-fizjoterapeuty': 'Strona dla fizjoterapeuty',
    'strona-dla-fotografa': 'Strona dla fotografa',
    'strona-dla-hotelu': 'Strona dla hotelu',
    'strona-dla-architekta': 'Strona dla architekta',
    'strona-dla-agencji-nieruchomosci': 'Strona dla agencji nieruchomości',
    'strona-dla-kancelarii-prawnej': 'Strona dla kancelarii prawnej',
    'strona-dla-mechanika': 'Strona dla mechanika',
    'strona-dla-trenera-personalnego': 'Strona dla trenera personalnego',
    'strona-dla-projektanta-wnetrz': 'Strona dla projektanta wnętrz',
    'strona-dla-dentysty': 'Strona dla dentysty',
    'strona-dla-weterynarza': 'Strona dla weterynarza',
    'strona-internetowa-warszawa': 'Strona Warszawa',
    'strona-internetowa-krakow': 'Strona Kraków',
    'strona-internetowa-lodz': 'Strona Łódź',
    'strona-internetowa-wroclaw': 'Strona Wrocław',
    'pozycjonowanie-stron-dla-firm': 'Pozycjonowanie stron',
    'tania-strona-internetowa-dla-firmy': 'Tania strona dla firmy',
    'obsluga-strony-internetowej': 'Obsługa strony',
    'seo-lokalne-dla-firm': 'SEO lokalne dla firm',
  };

  parts.forEach((part, index) => {
    const url = `${SITE_URL}/${parts.slice(0, index + 1).join('/')}`;
    const name = breadcrumbNames[part] || part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
    elements.push({
      '@type': 'ListItem',
      position: index + 2,
      name,
      item: url,
    });
  });

  return elements;
}

export const getRouteDefinitions = () => {
  const blogPosts = extractBlogPostsMeta();

  // Add BreadcrumbList to all CONTENT_ROUTES for prerender
  const contentRoutesWithSchema = CONTENT_ROUTES.map((route) => ({
    ...route,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: generateBreadcrumbItemListElement(route.route),
      },
    ],
  }));

  return [
    HOME_ROUTE,
    BLOG_ROUTE,
    SUPPORT_ROUTE,
    ORDER_ROUTE,
    PRIVACY_POLICY_ROUTE,
    COOKIES_POLICY_ROUTE,
    DATA_PROCESSING_ROUTE,
    ...contentRoutesWithSchema,
    ...blogPosts.map((post) => ({
      route: `/blog/${post.slug}`,
      route: `/blog/${post.slug}`,
      title: `${post.title} | SEO Grow`,
      description: post.description,
      selectors: ['article', 'main', '#root:not(:empty)'],
      includeInSitemap: true,
      noindex: false,
      expectJsonLd: true,
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: post.lastmod,
      articleTitle: post.title,
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          image: [`${SITE_URL}/panel.webp`],
          datePublished: post.lastmod,
          dateModified: post.lastmod,
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          author: {
            '@type': 'Organization',
            name: 'Zespół SEO Grow',
          },
          publisher: {
            '@type': 'Organization',
            name: 'SEO Grow',
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_URL}/logo.webp`,
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Start', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
          ],
        },
      ],
    })),
  ];
};

export const getRouteDefinitionMap = () =>
  new Map(getRouteDefinitions().map((routeDefinition) => [routeDefinition.route, routeDefinition]));

export const getCanonicalUrl = (route) => `${SITE_URL}${route === '/' ? '/' : route}`;

export const routeToFilePath = (route) =>
  route === '/' ? path.join(BUILD_DIR, 'index.html') : path.join(BUILD_DIR, route.slice(1), 'index.html');
