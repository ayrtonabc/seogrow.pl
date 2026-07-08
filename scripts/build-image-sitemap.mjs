// scripts/build-image-sitemap.mjs
// Genera dist/sitemap-images.xml listando las imágenes SEO-importantes
// y las páginas donde aparecen. Google Images indexa este sitemap por separado
// del sitemap.xml principal.
//
// Por qué existe: Google Images es tráfico gratis. Un sitemap-images.xml dedicado
// le dice a Google exactamente qué imágenes rankear y en qué página están.
// Sin él, Google tiene que descubrir las imágenes crawleando el HTML.
//
// Output: dist/sitemap-images.xml (formato XML compatible con schema.org/image)

import fs from 'fs';
import path from 'path';
import { BUILD_DIR, SITE_URL, getCanonicalUrl } from './seo-config.js';

// Mapeo de imágenes SEO-importantes a las páginas donde aparecen.
// Prioridad: panel, logo, hero, vertical-pages hero images.
// Cada imagen debe tener un <image:title> y <image:caption> para que
// Google entienda de qué trata (equivalente al alt text en HTML).
const IMAGE_ENTRIES = [
  // ── Imágenes globales (todas las páginas) ──
  {
    url: '/panel-1280.webp',
    title: 'Panel administracyjny SEO Grow — edycja stron z telefonu',
    caption: 'Widok panelu SEO Grow: edytor treści, moduły, raport widoczności w Google. Strony dla małych firm edytowane z telefonu bez kodowania.',
    pages: ['/'], // Home la referencia en schema primaryImageOfPage
  },
  {
    url: '/panel.webp',
    title: 'Panel SEO Grow — raport widoczności strony w Google',
    caption: 'Comiesięczny raport widoczności strony w Google dla małych firm. Pokazuje pozycje, kliknięcia i telefony z wyszukiwarki.',
    pages: ['/'],
  },
  {
    url: '/logo-320.webp',
    title: 'Logo SEO Grow — tworzenie stron internetowych dla małych firm',
    caption: 'Logo firmy SEO Grow z siedzibą w Ostródzie. Tworzymy strony internetowe z systemem CMS dla małych firm w Polsce.',
    pages: ['/'],
  },

  // ── Hero home ──
  {
    url: '/hero-960.webp',
    title: 'Strona internetowa dla firmy widoczna w Google — przykład panelu SEO Grow',
    caption: 'Strona internetowa dla małej firmy zoptymalizowana pod Google. Pokazuje pozycję strony klienta w wynikach wyszukiwania oraz panel edycji.',
    pages: ['/'],
  },
  {
    url: '/hero-640.webp',
    title: 'Strona SEO Grow — podgląd gotowej strony klienta z raportem SEO',
    caption: 'Gotowa strona internetowa klienta SEO Grow z comiesięcznym raportem widoczności w Google. Wszystko w panelu edytowanym z telefonu.',
    pages: ['/'],
  },

  // ── Vertical pages — dentists ──
  {
    url: '/dentista.webp',
    title: 'Strona dla dentysty — gabinet stomatologiczny',
    caption: 'Przykład strony internetowej dla gabinetu dentystycznego. SEO lokalne, cennik zabiegów, rezerwacja wizyty online.',
    pages: ['/strona-dla-dentysty', '/strona-dla-gabinetu-stomatologicznego'],
  },
  {
    url: '/dentistaweb.webp',
    title: 'Strona dla dentysty — pełny widok z cennikiem i opiniami',
    caption: 'Gotowa strona internetowa dla dentysty: cennik zabiegów, opinie pacjentów z Google, formularz rezerwacji wizyty, schema DentalClinic.',
    pages: ['/strona-dla-dentysty', '/strona-dla-gabinetu-stomatologicznego'],
  },

  // ── Vertical pages — workshops ──
  {
    url: '/mecanico.webp',
    title: 'Strona dla warsztatu samochodowego',
    caption: 'Przykład strony dla warsztatu samachodowego: lista usług, cennik, opinie klientów, mapa Google z lokalizacją warsztatu.',
    pages: ['/strona-dla-warsztatu-samochodowego', '/strona-dla-mechanika'],
  },
  {
    url: '/mecanicoweb.webp',
    title: 'Strona dla warsztatu samochodowego — widok pełny',
    caption: 'Gotowa strona internetowa dla warsztatu samochodowego z galerią realizacji, cennikiem usług i formularzem kontaktowym.',
    pages: ['/strona-dla-warsztatu-samochodowego', '/strona-dla-mechanika'],
  },

  // ── Vertical pages — beauty ──
  {
    url: '/peluquero.webp',
    title: 'Strona dla fryzjera — salon fryzjerski',
    caption: 'Przykład strony dla salonu fryzjerskiego: cennik usług, galeria fryzur, rezerwacja wizyty online, opinie klientek.',
    pages: ['/strona-dla-fryzjera'],
  },
  {
    url: '/peluqueroweb.webp',
    title: 'Strona dla fryzjera — widok pełny z cennikiem i rezerwacją',
    caption: 'Gotowa strona dla salonu fryzjerskiego z kalendarzem rezerwacji online, cennikiem strzyżenia i koloryzacji, opiniami Google.',
    pages: ['/strona-dla-fryzjera'],
  },

  // ── Vertical pages — lawyer ──
  {
    url: '/lawyer.webp',
    title: 'Strona dla kancelarii prawnej — adwokat, prawnik',
    caption: 'Przykład strony dla kancelarii prawnej: specjalizacje, cennik konsultacji, opinie klientów, rezerwacja konsultacji online.',
    pages: ['/strona-dla-prawnika', '/strona-dla-kancelarii-prawnej'],
  },
  {
    url: '/lawyerweb.webp',
    title: 'Strona dla prawnika — widok pełny z formularzem konsultacji',
    caption: 'Gotowa strona dla adwokata z formularzem rezerwacji konsultacji, cennikiem usług prawnych i opiniami klientów.',
    pages: ['/strona-dla-prawnika', '/strona-dla-kancelarii-prawnej'],
  },

  // ── Vertical pages — hotel ──
  {
    url: '/hotel.webp',
    title: 'Strona dla hotelu w Mazurach',
    caption: 'Przykład strony dla hotelu lub pensjonatu na Mazurach: galeria pokoi, cennik sezonowy, moduł rezerwacji bez prowizji Booking.com.',
    pages: ['/strona-dla-hotelu'],
  },
  {
    url: '/hotelweb.webp',
    title: 'Strona hotelu w Warmii i Mazurach — widok pełny z modułem rezerwacji',
    caption: 'Gotowa strona dla hotelu z kalendarzem dostępności, modułem rezerwacji online bez prowizji i galerią pokoi.',
    pages: ['/strona-dla-hotelu'],
  },

  // ── Vertical pages — restaurant ──
  {
    url: '/restaurante.webp',
    title: 'Strona dla restauracji — menu cyfrowe QR',
    caption: 'Przykład strony dla restauracji z menu cyfrowym QR, rezerwacją stolików online i galerią dań.',
    pages: ['/strona-dla-restauracji'],
  },
  {
    url: '/restaurante web.webp',
    title: 'Strona restauracji — widok pełny z menu QR i rezerwacjami',
    caption: 'Gotowa strona dla restauracji z kodem QR do menu, formularzem rezerwacji stolika i opiniami gości.',
    pages: ['/strona-dla-restauracji'],
  },

  // ── Vertical pages — clinic ──
  {
    url: '/estetica.webp',
    title: 'Strona dla kliniki medycznej',
    caption: 'Przykład strony dla kliniki medycznej: specjalizacje, lekarze, cennik zabiegów, rezerwacja wizyty online.',
    pages: ['/strona-dla-kliniki'],
  },
  {
    url: '/esteticaweb.webp',
    title: 'Strona dla kliniki medycznej — widok pełny z cennikiem usług',
    caption: 'Gotowa strona dla kliniki medycznej z prezentacją specjalizacji, cennikiem zabiegów i formularzem rezerwacji wizyty.',
    pages: ['/strona-dla-kliniki'],
  },

  // ── Vertical pages — freelancer ──
  {
    url: '/freelancer.webp',
    title: 'Strona dla freelancera — portfolio online',
    caption: 'Przykład strony dla freelancera z portfolio realizacji, blogiem eksperckim i formularzem kontaktowym.',
    pages: ['/strona-dla-freelancera'],
  },
  {
    url: '/freelancerweb.webp',
    title: 'Strona dla freelancera — widok pełny portfolio',
    caption: 'Gotowa strona dla freelancera z portfolio z kategoriami, blogiem tematycznym i formularzem kontaktowym z pytaniami.',
    pages: ['/strona-dla-freelancera'],
  },

  // ── Vertical pages — photographer ──
  {
    url: '/fotografo.webp',
    title: 'Strona dla fotografa — portfolio fotografii',
    caption: 'Przykład strony dla fotografa z portfolio sesji zdjęciowych, galerią i formularzem rezerwacji sesji.',
    pages: ['/strona-dla-fotografa'],
  },
  {
    url: '/fotografoweb.webp',
    title: 'Strona fotografa — portfolio z galerią pełnoekranową',
    caption: 'Gotowa strona dla fotografa z galerią kategorii, lightbox na pełny ekran i rezerwacją sesji zdjęciowej online.',
    pages: ['/strona-dla-fotografa'],
  },

  // ── Vertical pages — architect ──
  {
    url: '/arquitecto.webp',
    title: 'Strona dla architekta — portfolio projektów',
    caption: 'Przykład strony dla architekta z portfolio projektów, galerią realizacji i formularzem kontaktowym.',
    pages: ['/strona-dla-architekta'],
  },
  {
    url: '/arquitectura.webp',
    title: 'Strona architekta — widok pełny portfolio',
    caption: 'Gotowa strona dla architekta z portfolio projektów architektonicznych, opiniami klientów i formularzem wyceny projektu.',
    pages: ['/strona-dla-architekta'],
  },

  // ── Vertical pages — interior designer ──
  {
    url: '/dise�adorinterior.webp',
    title: 'Strona dla projektanta wnętrz',
    caption: 'Przykład strony dla projektanta wnętrz z portfolio realizacji, galerią projektów i formularzem kontaktowym.',
    pages: ['/strona-dla-projektanta-wnetrz'],
  },
  {
    url: '/dise�adorinteriorweb.webp',
    title: 'Strona projektanta wnętrz — widok pełny',
    caption: 'Gotowa strona dla projektanta wnętrz z portfolio projektów, cennikiem usług i formularzem kontaktowym.',
    pages: ['/strona-dla-projektanta-wnetrz'],
  },

  // ── Vertical pages — physiotherapist ──
  {
    url: '/fisioterapeuta.webp',
    title: 'Strona dla fizjoterapeuty',
    caption: 'Przykład strony dla fizjoterapeuty: specjalizacje, cennik zabiegów, rezerwacja wizyty online.',
    pages: ['/strona-dla-fizjoterapeuty'],
  },
  {
    url: '/fisioterapeutaweb.webp',
    title: 'Strona dla fizjoterapeuty — widok pełny z cennikiem',
    caption: 'Gotowa strona dla fizjoterapeuty z prezentacją zabiegów, cennikiem i formularzem rezerwacji wizyty.',
    pages: ['/strona-dla-fizjoterapeuty'],
  },

  // ── Vertical pages — psychologist ──
  {
    url: '/psicologo.webp',
    title: 'Strona dla psychologa',
    caption: 'Przykład strony dla psychologa z informacjami o specjalizacjach, cennikiem konsultacji i formularzem rezerwacji.',
    pages: ['/strona-dla-psychologa'],
  },
  {
    url: '/psicologoweb.webp',
    title: 'Strona dla psychologa — widok pełny',
    caption: 'Gotowa strona dla psychologa z opisem specjalizacji, opiniami pacjentów i formularzem rezerwacji konsultacji online.',
    pages: ['/strona-dla-psychologa'],
  },

  // ── Vertical pages — trainer ──
  {
    url: '/trainer.webp',
    title: 'Strona dla trenera personalnego',
    caption: 'Przykład strony dla trenera personalnego z ofertą treningów, cennikiem pakietów i formularzem rezerwacji.',
    pages: ['/strona-dla-trenera-personalnego'],
  },
  {
    url: '/trainerweb.webp',
    title: 'Strona trenera personalnego — widok pełny',
    caption: 'Gotowa strona dla trenera personalnego z galerią efektów treningów, cennikiem i formularzem kontaktowym.',
    pages: ['/strona-dla-trenera-personalnego'],
  },

  // ── Vertical pages — real estate ──
  {
    url: '/inmobiliaria.webp',
    title: 'Strona dla agencji nieruchomości',
    caption: 'Przykład strony dla agencji nieruchomości z ofertą mieszkań, formularzem kontaktowym i mapą Google.',
    pages: ['/strona-dla-agencji-nieruchomosci'],
  },
  {
    url: '/inmobiliariaweb.webp',
    title: 'Strona agencji nieruchomości — widok pełny z ofertami',
    caption: 'Gotowa strona dla agencji nieruchomości z listą ofert, wyszukiwarką i formularzem kontaktowym.',
    pages: ['/strona-dla-agencji-nieruchomosci'],
  },

  // ── Vertical pages — vet ──
  {
    url: '/veterinario.webp',
    title: 'Strona dla weterynarza',
    caption: 'Przykład strony dla gabinetu weterynaryjnego z cennikiem usług i rezerwacją wizyty online.',
    pages: ['/strona-dla-weterynarza'],
  },
  {
    url: '/veterinarioweb.webp',
    title: 'Strona weterynarza — widok pełny z usługami',
    caption: 'Gotowa strona dla weterynarza z listą usług, cennikiem i formularzem rezerwacji wizyty.',
    pages: ['/strona-dla-weterynarza'],
  },

  // ── Blog hero ──
  {
    url: '/automat.webp',
    title: 'Jak działa SEO — automatyczna optymalizacja strony',
    caption: 'Schemat działania automatycznej optymalizacji SEO strony: meta tagi, schema, szybkość, mobile, blog firmowy.',
    pages: ['/pozycjonowanie-stron-dla-firm', '/seo-lokalne-dla-firm'],
  },
  {
    url: '/seogrow.webp',
    title: 'SEO Grow vs agencja SEO — porównanie',
    caption: 'Porównanie SeoGrow z agencją SEO: cena, raporty, wsparcie, brak umowy. Strona internetowa z SEO od 1500 zł.',
    pages: ['/pozycjonowanie-stron-dla-firm', '/seo-lokalne-dla-firm'],
  },
  {
    url: '/banner1.webp',
    title: 'Zamów stronę SEO Grow — gotowa w 5 dni',
    caption: 'Banner z wezwaniem do działania: zamów stronę internetową SEO Grow, gotową w 5 dni roboczych, od 1500 zł.',
    pages: ['/'],
  },
];

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const buildSitemap = () => {
  const entries = IMAGE_ENTRIES.flatMap((img) =>
    img.pages.map((pageRoute) => ({
      pageUrl: getCanonicalUrl(pageRoute),
      imageUrl: `${SITE_URL}${img.url}`,
      imageTitle: img.title,
      imageCaption: img.caption,
    }))
  );

  // Dedupe por combinación (pageUrl, imageUrl)
  const seen = new Set();
  const unique = entries.filter((e) => {
    const key = `${e.pageUrl}::${e.imageUrl}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const urls = unique
    .map(
      (e) => `  <url>
    <loc>${escapeXml(e.pageUrl)}</loc>
    <image:image>
      <image:loc>${escapeXml(e.imageUrl)}</image:loc>
      <image:title>${escapeXml(e.imageTitle)}</image:title>
      <image:caption>${escapeXml(e.imageCaption)}</image:caption>
    </image:image>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
};

const main = () => {
  if (!fs.existsSync(BUILD_DIR)) {
    throw new Error(`No existe ${BUILD_DIR}. Ejecuta primero vite build.`);
  }

  const xml = buildSitemap();
  const outputPath = path.join(BUILD_DIR, 'sitemap-images.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');

  const urlCount = (xml.match(/<url>/g) || []).length;
  console.log(`✅ sitemap-images.xml generated with ${urlCount} image URLs`);
};

main();