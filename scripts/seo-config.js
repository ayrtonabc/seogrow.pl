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
  title: 'SEO Grow | Strona firmowa z prostym CMS i SEO technicznym',
  description:
    'SEO Grow to strona firmowa z prostym CMS, blogiem, hostingiem, SSL i automatyczną optymalizacją techniczną SEO dla małych firm.',
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
      name: 'SEO Grow',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.webp`,
      email: 'kontakt@seogrow.pl',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'SEO Grow',
      url: SITE_URL,
      inLanguage: 'pl-PL',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'SEO Grow',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: SITE_URL,
      image: `${SITE_URL}/panel.webp`,
      description:
        'Prosty CMS dla małych firm z blogiem, hostingiem, SSL i automatyczną optymalizacją techniczną SEO.',
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

export const getRouteDefinitions = () => {
  const blogPosts = extractBlogPostsMeta();

  return [
    HOME_ROUTE,
    BLOG_ROUTE,
    SUPPORT_ROUTE,
    ORDER_ROUTE,
    PRIVACY_POLICY_ROUTE,
    COOKIES_POLICY_ROUTE,
    DATA_PROCESSING_ROUTE,
    ...CONTENT_ROUTES,
    ...blogPosts.map((post) => ({
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
