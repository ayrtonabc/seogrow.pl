// src/pages/VerticalPagesTier2.tsx
// Tier 2 — verticales long-tail priorizadas por volumen (keyword research).
// Mismo patrón que Tier 1 (SEOLandingPage + schema LocalBusiness + FAQ + CTA tranquilo).

import { SEOLandingPage } from "../components/SEOLandingPage"

// ────────────────────────────────────────────────────────────────────────────
// 1. FOTOGRAF — 890/mes (volumen más alto de Tier 2)
// ────────────────────────────────────────────────────────────────────────────

export const StronaDlaFotografaPage = () => (
  <SEOLandingPage
    path="/strona-dla-fotografa"
    title="Strona dla fotografa | Portfolio, galeria, SEO lokalne | SEO Grow"
    description="Strona dla fotografa z portfolio, galerią zdjęć, SEO lokalnym i formularzem rezerwacji sesji. Od 1500 zł, edycja z telefonu, bez umowy."
    keywords="strona dla fotografa, strona fotografa, portfolio fotografa, strona dla fotografa ślubnego, strona dla fotografa portfolio, galeria fotografa"
    h1="Strona dla fotografa"
    h1Accent="portfolio, które przyciąga klientów"
    h1Sub="Twoje najlepsze ujęcia pracują na Ciebie 24/7 — klienci rezerwują sesję w 30 sekund."
    intro="Pary młode szukają fotografa ślubnego w Google: 'fotograf ślubny [miasto]', 'sesja narzeczeńska [dzielnica]', 'reportaż weselny [okolica]'. Bez portfolio widocznego w wynikach wyszukiwania i rezerwacji sesji online, przegrywasz z fotografem obok, który już to ma. Twoja strona pokaże najlepsze ujęcia w galerii, cennik pakietów i pozwoli zarezerwować termin sesji w 30 sekund."
    heroImage="/fotografo.webp"
    heroImageAlt="Strona dla fotografa — fotograf z aparatem w trakcie sesji"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla fotografa", href: "/strona-dla-fotografa" }]}
    sections={[
      {
        heading: "Co powinna mieć strona fotografa, żeby przyciągać klientów",
        content: "Portfolio z kategoriami (śluby, rodzinne, biznesowe, produktowe) i podglądem na pełnym ekranie. Formularz rezerwacji sesji z pytaniami o termin, typ sesji i budżet. SEO lokalne — żebyś pojawiał się w Google, gdy ktoś w Twoim mieście szuka fotografa. Blog z poradami, który edukuje klientów i pozycjonuje Twoją stronę.",
        image: "/fotografoweb.webp",
        imageAlt: "Pełny widok strony fotografa — portfolio z kategoriami, galeria pełnoekranowa i formularz rezerwacji sesji",
        highlights: [
          "Galeria z kategoriami i lightbox na pełny ekran",
          "Formularz rezerwacji sesji z pytaniami kwalifikacyjnymi",
          "Schema Photographer — Google rozumie, że jesteś fotografem",
          "SEO lokalne — fotografia w Twoim mieście",
        ],
      },
      {
        heading: "Dlaczego SEO lokalne jest ważniejsze niż reklama",
        content: "Reklama daje efekt tylko gdy płacisz. SEO lokalne daje efekt organiczny, który rośnie z miesiąca na miesiąc. Klient, który szuka fotografa w Google, jest o wiele bardziej zdecydowany niż ten, kto zobaczył Twoją reklamę na Facebooku.",
        highlights: [
          "Ruch organiczny rośnie z miesiąca na miesiąc",
          "Klient szuka fotografa — gotowy na sesję",
          "Niższy koszt pozyskania klienta niż reklama",
          "Widoczność 24/7, bez płacenia za kliknięcia",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "fotograf ślubny Kraków",
              yourSite: {
                domain: "fotografia-kowalski.pl",
                title: "Fotografia Kowalski — Fotograf Ślubny Kraków i Małopolska",
                description: "Profesjonalny fotograf ślubny z Krakowa. Reportaże ślubne, sesje narzeczeńskie, plenery. 12 lat doświadczenia, 300+ zrealizowanych ślubów.",
              },
              competitors: [
                { domain: "fotograf-slubny-krakow.pl", title: "Fotograf Ślubny Kraków — Studio Foto Nowak", description: "Fotograf ślubny z Krakowa. Reportaże ślubne, sesje plenerowe, filmy z drona." },
                { domain: "krakow-foto.pl", title: "Kraków Foto — Fotograf na Ślub i Eventy", description: "Fotograf na śluby i eventy w Krakowie i okolicach. Reportaże, sesje plenerowe." },
              ],
            },
            {
              query: "fotograf na ślub Kraków",
              yourSite: {
                domain: "fotografia-kowalski.pl",
                title: "Fotograf na Ślub — Kraków | Fotografia Kowalski",
                description: "Fotograf ślubny w Krakowie. Reportaże z przygotowań, ceremonii i wesela. 12 lat doświadczenia.",
              },
              competitors: [
                { domain: "slub-fotograf-krakow.pl", title: "Fotograf Ślubny Kraków — 500+ ślubów", description: "Profesjonalny fotograf ślubny w Krakowie. 500+ zrealizowanych reportaży." },
                { domain: "foto-amor.pl", title: "Foto Amor — Fotograf Ślubny Kraków", description: "Fotograf ślubny z Krakowa. Reportaże ślubne, sesje narzeczeńskie, albumy." },
              ],
            },
            {
              query: "sesja zdjęciowa Kraków",
              yourSite: {
                domain: "fotografia-kowalski.pl",
                title: "Sesja Zdjęciowa Kraków — Fotograf Kowalski",
                description: "Sesje zdjęciowe w Krakowie: rodzinne, portretowe, biznesowe. Studio + plener. 12 lat doświadczenia.",
              },
              competitors: [
                { domain: "sesje-krakow.pl", title: "Sesje Zdjęciowe Kraków — Studio Foto", description: "Sesje zdjęciowe w Krakowie: rodzinne, portretowe, par. Studio + plener." },
                { domain: "foto-portret-krakow.pl", title: "Fotograf Portret Kraków — Studio", description: "Profesjonalne sesje portretowe w Krakowie. Studio + plener." },
              ],
            },
          ],
        },
      },
    ]}
    showModules={true}
    showPricing={true}
    features={[
      { title: "Portfolio z galerią", description: "Prezentacja zdjęć z kategoriami, lightbox, opisem sesji." },
      { title: "Formularz rezerwacji", description: "Klient wybiera termin, typ sesji i zostawia kontakt." },
      { title: "SEO lokalne", description: "Fotograf Warszawa/Kraków — w wynikach Google z mapą." },
      { title: "Schema Photographer", description: "Google rozumie, że jesteś fotografem i wyświetla Cię poprawnie." },
      { title: "Blog z poradami", description: "SEO-friendly blog, który edukuje klientów i pozycjonuje." },
      { title: "Szybkość 90+ PageSpeed", description: "Zdjęcia ładują się szybko nawet na telefonie klienta." },
      { title: "Edycja z telefonu", description: "Dodajesz nową sesję w 30 sekund, bez laptopa." },
      { title: "Bez umowy", description: "Płacisz co miesiąc, rezygnujesz jednym mailem." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "1500 zł", label: "jednorazowo" },
      { number: "49 zł", label: "miesięcznie, bez umowy" },
      { number: "90+", label: "PageSpeed mobile" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla fotografa?", a: "Od 1500 zł jednorazowo (plan Start) i 49 zł miesięcznie. Plan Standard (2200 zł + 69 zł/mies.) daje Ci 15 podstron, idealne na duże portfolio w kategoriach. Wszystko bez ukrytych opłat." },
      { q: "Czy mogę wgrać dużo zdjęć w wysokiej jakości?", a: "Tak. Galeria obsługuje setki zdjęć w wysokiej rozdzielczości. System automatycznie je optymalizuje (kompresja + lazy loading), żeby strona ładowała się szybko." },
      { q: "Czy strona pomoże mi pojawiać się w Google na \"fotograf [moje miasto]\"?", a: "Tak. SEO lokalne z schema Photographer, Google Business Profile i mapą Google. Twoja strona startuje zoptymalizowana pod Twoje miasto." },
      { q: "Czy mogę sam dodawać nowe sesje?", a: "Tak. Dodajesz nową sesję w panelu, wybierasz kategorię, wgrywasz zdjęcia, dodajesz opis. Z telefonu zajmuje to 30 sekund." },
      { q: "Co jeśli mam już domenę i hosting gdzie indziej?", a: "Możesz przenieść domenę do nas lub zostawić u siebie — pomagamy z konfiguracją. Hosting musi być nasz, bo jest częścią planu (w tej cenie masz hosting, SSL i wsparcie)." },
    ]}
    cta={{
      title: "Stwórz stronę dla fotografa, która zdobywa klientów",
      description: "Portfolio, galeria, rezerwacje sesji — wszystko w jednym, gotowe w 5 dni.",
      primaryLabel: "Zadzwoń: 517 105 423",
    }}









  />
)

// ────────────────────────────────────────────────────────────────────────────
// Páginas reconstruidas — 9 landings Tier 2 (recovered from dist HTML)
// ────────────────────────────────────────────────────────────────────────────

export const StronaDlaHoteluPage = () => (
  <SEOLandingPage
    path="/strona-dla-hotelu"
    title="Strona dla hotelu | Rezerwacje, SEO lokalne, Google Maps | SEO Grow"
    description="Strona dla hotelu, pensjonatu i obiektu noclegowego z modułem rezerwacji, SEO lokalnym, Google Maps i opiniami gości. Od 1500 zł, bez umowy."
    keywords="strona dla hotelu, strona dla pensjonatu, strona dla obiektu noclegowego, strona hotelu, rezerwacje hotelowe online, strona dla hoteliku"
    h1="Strona dla hotelu"
    h1Accent="rezerwacje online i widoczność w Google"
h1Sub="Gość rezerwuje pokój bezpośrednio — Ty nie płacisz 15-20% prowizji Booking."
    intro="Goście szukają noclegu w Google: 'hotel [miasto]', 'nocleg z dziećmi [dzielnica]', 'pensjonat [okolica]'. Bez strony z modułem rezerwacji bezpośredniej, trafiają na Booking i płacisz 15-20% prowizji od każdego gościa — przy 50 rezerwacjach miesięcznie to nawet 4000 zł prowizji, które zostają u Ciebie. Twoja strona pozwoli rezerwować pokój bezpośrednio, z płatnością online lub na miejscu."
heroImage="/hotel.webp"
    heroImageAlt="Strona dla hotelu — hotel z widokiem na pokoje"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla hotelu", href: "/strona-dla-hotelu" }]}
sections={[
      {
        heading: "Co powinna mieć strona dla hotelu, żeby przyciągać gości",
        content: "Galeria pokoi w wysokiej jakości z lightbox, moduł rezerwacji online 24/7, mapa Google z dojazdem i sekcja z opiniami gości — wszystko, żeby gość zarezerwował bezpośrednio, bez prowizji Booking.",
        image: "/hotelweb.webp",
        imageAlt: "Strona hotelu — galeria pokoi, rezerwacje online, opinie gości i mapa Google",
        highlights: [
          "Galeria pokoi z podglądem na pełnym ekranie",
          "Rezerwacje online 24/7",
          "Mapa Google z dojazdem",
          "Sekcja z opiniami gości",
        ],
      },
      {
        heading: "Jak Twój hotel pojawia się w Google",
        content: "Goście szukający noclegu wpisują w Google „hotel Warszawa\", „hotel w centrum Warszawy\" albo „nocleg Warszawa\". Dzięki schema Hotel, SEO lokalnemu i artykułom blogowym Twój hotel wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema Hotel",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Blog z poradami",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "hotel Warszawa",
              yourSite: {
                domain: "hotel-bellavistawarszawa.pl",
                title: "Hotel Bella Vista — Warszawa Centrum",
                description: "Hotel 4-gwiazdkowy w centrum Warszawy. Komfortowe pokoje, śniadanie w cenie, blisko metra. Rezerwacje online bez prowizji.",
              },
              competitors: [
                { domain: "hotel-warszawa-centrum.pl", title: "Hotel Warszawa Centrum — 4 gwiazdki", description: "Hotel w centrum Warszawy. Pokoje z łazienką, WiFi, śniadanie. Recepcja 24/7." },
                { domain: "noclegi-warszawa.pl", title: "Noclegi Warszawa — Hotel i Apartamenty", description: "Noclegi w Warszawie. Hotel, apartamenty, pokoje. Rezerwacja online, opinie gości." },
              ],
            },
            {
              query: "hotel w centrum Warszawy",
              yourSite: {
                domain: "hotel-bellavistawarszawa.pl",
                title: "Hotel w Centrum Warszawy — Bella Vista",
                description: "Hotel w samym centrum Warszawy. Blisko Starówki, metra, restauracji. Idealny na city break i delegacje.",
              },
              competitors: [
                { domain: "hotel-centrum-waw.pl", title: "Hotel Centrum Waw — Pokoje i Apartamenty", description: "Hotel w centrum Warszawy. Różne standardy pokoi, śniadanie, parking. Rezerwacja online." },
                { domain: "city-hotel-warszawa.pl", title: "City Hotel Warszawa — Ścisłe Centrum", description: "City hotel w centrum Warszawy. Pokoje 3-4 gwiazdki, restauracja, centrum biznesowe." },
              ],
            },
            {
              query: "nocleg Warszawa",
              yourSite: {
                domain: "hotel-bellavistawarszawa.pl",
                title: "Nocleg Warszawa — Hotel Bella Vista",
                description: "Nocleg w Warszawie w hotelu Bella Vista. Komfortowe pokoje, śniadanie bufetowe, WiFi. Blisko centrum i atrakcji.",
              },
              competitors: [
                { domain: "nocleg-warszawa-centrum.pl", title: "Nocleg Warszawa Centrum — Tanio i Komfortowo", description: "Nocleg w centrum Warszawy. Pokoje 1-4 osobowe, apartamenty. Rezerwacja 24/7." },
                { domain: "pokoje-warszawa.pl", title: "Pokoje Warszawa — Noclegi i Kwatery", description: "Pokoje do wynajęcia w Warszawie. Krótkoterminowo, na noce, tygodnie. Atrakcyjne ceny." },
              ],
            },
          ],
        },
      },
    ]}
    features={[
      { title: "Rezerwacje online", description: "Gość wybiera termin, pokój, płaci online lub na miejscu." },
      { title: "Schema Hotel", description: "Google rozumie Twój obiekt i pokazuje go w wynikach z ceną i opiniami." },
      { title: "Galeria pokoi", description: "Zdjęcia pokoi w wysokiej jakości z lightbox." },
      { title: "SEO lokalne", description: "Hotel w Twoim mieście - widoczny w Google Maps i organicznie." },
      { title: "Opinie gości", description: "Sekcja z opiniami, która buduje zaufanie." },
      { title: "Blog z poradami", description: "SEO-friendly blog, który przyciąga gości szukających atrakcji w okolicy." },
      { title: "Mapa Google", description: "Gość widzi lokalizację i dojazd bez opuszczania strony." },
      { title: "Multi-język", description: "W planie Premium - strona w kilku językach (PL + EN/DE/UK)." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "49 zł", label: "miesięcznie, bez umowy" },
      { number: "0%", label: "prowizji od rezerwacji" },
    ]}
    faq={[
      { q: "Czy mogę sam zarządzać dostępnością pokoi?", a: "Tak. Moduł rezerwacji ma kalendarz, w którym oznaczasz zajętość pokoi. Gość widzi tylko dostępne terminy." },
      { q: "Czy gość może płacić online?", a: "Tak. Integracja ze Stripe, PayU i Tpay. Możesz też umożliwić płatność na miejscu - decydujesz Ty." },
      { q: "Ile kosztuje strona dla hotelu?", a: "Od 1500 zł jednorazowo (plan Start) i 49 zł miesięcznie. Plan Premium (4500 zł + 99 zł/mies.) daje Ci moduł rezerwacji, multi-język i analitykę." },
      { q: "Czy mogę zintegrować stronę z Booking.com?", a: "Tak, możesz zostawić Booking jako dodatkowy kanał. Twoja strona z modułem rezerwacji będzie tańszym kanałem bez prowizji." },
      { q: "Co jeśli mam już stronę na WordPress?", a: "Możemy przenieść treści i domenę. W planie Premium migracja jest w cenie." },
    ]}
    cta={{
      title: "Stwórz stronę dla hotelu, która przyciąga gości",
      description: "Rezerwacje bezpośrednie, SEO lokalne, galeria - gotowe w 5 dni.",
      primaryLabel: "Zadzwoń: 517 105 423",
    }}
    showModules={true}
    showPricing={true}
  />
)


export const StronaDlaArchitektaPage = () => (
  <SEOLandingPage
    path="/strona-dla-architekta"
    title="Strona dla architekta | Portfolio, SEO lokalne | SEO Grow"
    description="Strona dla architekta z portfolio projektów, SEO lokalnym i formularzem kontaktowym. Od 1500 zł, edycja z telefonu, bez umowy."
    keywords="strona dla architekta, portfolio architekta, strona dla pracowni architektonicznej, strona architekta wnętrz, strona dla architekta krajobrazu"
    h1="Strona dla architekta"
    h1Accent="portfolio, które zdobywa klientów"
h1Sub="Inwestorzy widzą Twoje realizacje w Google — zanim wyślą pierwszego maila."
    intro="Inwestorzy szukają architekta w Google: 'architekt [miasto]', 'projekt domu [dzielnica]', 'pracownia architektoniczna [specjalizacja]'. Bez portfolio widocznego w wynikach z opisem stylu i budżetu, trafiają do pracowni obok, która to ma. Twoja strona pokaże realizacje, cennik usług i pozwoli umówić konsultację online w 30 sekund."
    heroImage="/arquitecto.webp"
    heroImageAlt="Strona dla architekta — architekt prezentujący projekt w pracowni"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla architekta", href: "/strona-dla-architekta" }]}
    sections={[
{
        heading: "Co powinna mieć strona dla architekta, żeby przyciągać klientów",
        content: "SEO lokalne z Google Business Profile i schema Architect. Portfolio projektów z opisem procesu, lokalizacji i budżetu — klient widzi Twój styl i zakres realizacji przed pierwszą rozmową. Cennik usług online (projekt domu, projekt wnętrz, konsultacja, nadzór autorski) — klient nie chce dzwonić, żeby zapytać o cenę. Opinie Google zintegrowane ze strony. Moduł rezerwacji konsultacji online — klient wybiera termin, pracownia dostaje powiadomienie.",
        image: "/arquitectura.webp",
        imageAlt: "Strona dla architekta — portfolio projektów z cennikiem i rezerwacją konsultacji",
highlights: [
          "Inwestorzy z Twojego miasta trafiają do Ciebie z Google",
          "Portfolio z opisem projektu, lokalizacji i budżetu",
          "Cena projektu widoczna bez rozmowy telefonicznej",
          "Umówienie konsultacji online w 30 sekund",
        ],
      },
      {
        heading: "Jak Twoja pracownia architektoniczna pojawia się w Google",
        content: "Klienci szukający architekta wpisują w Google „architekt Warszawa\", „pracownia architektoniczna Warszawa\" albo „projekt domu Warszawa\". Dzięki schema Architect, SEO lokalnemu i artykułom blogowym Twoja pracownia wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema Architect",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Blog ekspercki",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "architekt Warszawa",
              yourSite: {
                domain: "pracownia-architektoniczna-waw.pl",
                title: "Pracownia Architektoniczna — Warszawa",
                description: "Pracownia architektoniczna w Warszawie. Projekty domów, mieszkań, wnętrz. 15 lat doświadczenia, 200+ realizacji.",
              },
              competitors: [
                { domain: "architekt-warszawa-waw.pl", title: "Architekt Warszawa — Studio Projektowe", description: "Studio projektowe w Warszawie. Architektura mieszkaniowa, komercyjna, wnętrza. Pełen zakres usług." },
                { domain: "biuro-architektoniczne-waw.pl", title: "Biuro Architektoniczne Waw — Projekty", description: "Biuro architektoniczne w Warszawie. Projekty budowlane, aranżacje, nadzory. Licencjonowani architekci." },
              ],
            },
            {
              query: "biuro architektoniczne Warszawa",
              yourSite: {
                domain: "pracownia-architektoniczna-waw.pl",
                title: "Biuro Architektoniczne Warszawa — Pracownia",
                description: "Biuro architektoniczne w Warszawie. Projekty indywidualne, modernizacje, wnętrza. Konsultacje i doradztwo.",
              },
              competitors: [
                { domain: "studio-architektoniczne-warszawa.pl", title: "Studio Architektoniczne Warszawa", description: "Studio architektoniczne w Warszawie. Projekty domów, mieszkań, biur. Pełna obsługa inwestycji." },
                { domain: "architekci-warszawa.pl", title: "Architekci Warszawa — Zespół Projektowy", description: "Zespół architektów w Warszawie. Projekty budowlane, wnętrza, urbanistyka. Wieloletnie doświadczenie." },
              ],
            },
            {
              query: "projekt domu Warszawa",
              yourSite: {
                domain: "pracownia-architektoniczna-waw.pl",
                title: "Projekt Domu Warszawa — Pracownia",
                description: "Projekt domu w Warszawie. Indywidualne projekty, nowoczesne rozwiązania, energooszczędność. Od koncepcji do pozwolenia.",
              },
              competitors: [
                { domain: "projekty-domow-waw.pl", title: "Projekty Domów Waw — Gotowe i Indywidualne", description: "Projekty domów w Warszawie. Gotowe projekty, adaptacje, indywidualne rozwiązania. Architekci z uprawnieniami." },
                { domain: "dom-projekt-warszawa.pl", title: "Dom Projekt Warszawa — Architekt", description: "Dom projekt w Warszawie. Projektowanie domów jednorodzinnych, energooszczędnych, nowoczesnych." },
              ],
            },
          ],
        },
      },
    ]}
    features={[
      { title: "Portfolio z galerią", description: "Prezentacja projektów z filtrami kategorii i lightbox." },
      { title: "Blog ekspercki", description: "SEO-friendly blog do pozycjonowania Twojej specjalizacji." },
      { title: "Formularz kontaktowy", description: "Z pytaniami o zakres, termin i budżet." },
      { title: "Schema Architect", description: "Google rozumie, że jesteś architektem." },
      { title: "SEO lokalne", description: "Klienci z Twojego miasta znajdą Cię w Google Maps." },
      { title: "Edytujesz z telefonu", description: "Dodajesz nowy projekt w 30 sekund." },
      { title: "Szybkość 90+ PageSpeed", description: "Strona ładuje się w ułamku sekundy." },
      { title: "SSL + domena w cenie", description: "Bezpieczeństwo i profesjonalny adres." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "49 zł", label: "miesięcznie" },
      { number: "SEO", label: "w cenie, bez dopłat" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla architekta?", a: "Od 1500 zł jednorazowo (plan Start) i 49 zł miesięcznie. Plan Standard (2200 zł + 69 zł/mies.) daje Ci blog i SEO w zestawie." },
      { q: "Czy mogę sam aktualizować portfolio?", a: "Tak. Dodajesz realizacje, zdjęcia, opisy z telefonu - bez wiedzy technicznej." },
      { q: "Czy SEO jest w cenie?", a: "Tak. SEO techniczne (schema, meta, szybkość, mobile) jest w cenie każdego planu." },
      { q: "Ile realizacji mogę dodać do portfolio?", a: "Bez limitu. W planie Standard - do 15 podstron, więc portfolio może mieć dziesiątki realizacji." },
      { q: "Czy mogę mieć własną domenę?", a: "Tak. Podpinamy Twoją domenę w cenie wdrożenia." },
    ]}
    cta={{
      title: "Stwórz stronę dla architekta, która zdobywa klientów",
      description: "Portfolio, blog, SEO - wszystko w jednym, gotowe w 5 dni.",
      primaryLabel: "Zamów stronę architekta →",
    }}
    showModules={true}
    showPricing={true}
  />
)


export const StronaDlaAgencjiNieruchomosciPage = () => (
  <SEOLandingPage
    path="/strona-dla-agencji-nieruchomosci"
    title="Strona dla agencji nieruchomości | Oferty, SEO lokalne | SEO Grow"
    description="Strona dla agencji nieruchomości i pośrednika z ofertami, SEO lokalnym, mapą i formularzem kontaktowym. Od 1500 zł, bez umowy."
    keywords="strona dla agencji nieruchomosci, strona dla pośrednika nieruchomosci, strona biura nieruchomosci, strona agencji nieruchomosci, oferty nieruchomosci"
    h1="Strona dla agencji nieruchomości"
    h1Accent="oferty widoczne w Google"
    h1Sub="Twoje oferty pojawiają się w Google i na mapie — klienci sami się zgłaszają."
intro="Klienci szukają mieszkania w Google: 'mieszkanie na sprzedaż [dzielnica]', 'dom z ogrodem [miasto]', 'wynajem [okolica]'. Bez bazy ofert z ceną, zdjęciami i mapą widocznymi w wynikach wyszukiwania, przegrywasz z portalem, który już to ma. Twoja strona pokaże Twoje oferty, prowizję i pozwoli umówić prezentację mieszkania online."
    heroImage="/inmobiliaria.webp"
    heroImageAlt="Strona dla agencji nieruchomości — agent prezentujący ofertę mieszkania klientowi"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla agencji nieruchomości", href: "/strona-dla-agencji-nieruchomosci" }]}
    sections={[
{
        heading: "Co powinna mieć strona dla agencji nieruchomości, żeby przyciągać klientów",
        content: "SEO lokalne z Google Business Profile i schema RealEstateAgent. Baza ofert z ceną, zdjęciami, lokalizacją i metrażem — klient szukający mieszkania w Twoim mieście trafia prosto do oferty. Cennik prowizji online — klient nie chce dzwonić, żeby zapytać o warunki współpracy. Opinie Google zintegrowane ze strony. Moduł rezerwacji prezentacji mieszkania — klient wybiera termin, agencja dostaje powiadomienie.",
        image: "/inmobiliariaweb.webp",
        imageAlt: "Strona dla agencji nieruchomości — baza ofert z ceną, zdjęciami i rezerwacją prezentacji",
highlights: [
          "Klienci szukający mieszkania trafiają do Ciebie z Google",
          "Oferty z ceną, zdjęciami i lokalizacją na mapie",
          "Prowizja i warunki współpracy widoczne bez dzwonienia",
          "Prezentacja mieszkania umawiana online — bez telefonu",
        ],
      },
      {
        heading: "Jak Twoja agencja nieruchomości pojawia się w Google",
        content: "Klienci szukający mieszkania wpisują w Google „mieszkanie na sprzedaż Warszawa\", „agencja nieruchomości Warszawa\" albo „wynajem mieszkania Warszawa\". Dzięki schema RealEstateAgent, SEO lokalnemu i artykułom blogowym Twoja agencja wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema RealEstateAgent",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Blog o nieruchomościach",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "agencja nieruchomości Warszawa",
              yourSite: {
                domain: "agencja-nieruchomosci-waw.pl",
                title: "Agencja Nieruchomości Warszawa — Centrum Pośrednictwa",
                description: "Agencja nieruchomości w Warszawie. Sprzedaż, wynajem, doradztwo kredytowe. 500+ transakcji rocznie.",
              },
              competitors: [
                { domain: "nieruchomosci-warszawa-waw.pl", title: "Nieruchomości Warszawa — Biuro Pośrednictwa", description: "Biuro nieruchomości w Warszawie. Mieszkania, domy, lokale. Profesjonalni pośrednicy." },
                { domain: "biuro-nieruchomosci-waw.pl", title: "Biuro Nieruchomości Waw — Oferty", description: "Biuro nieruchomości w Warszawie. Oferty sprzedaży i wynajmu. Pomoc w uzyskaniu kredytu." },
              ],
            },
            {
              query: "mieszkanie na sprzedaż Warszawa",
              yourSite: {
                domain: "agencja-nieruchomosci-waw.pl",
                title: "Mieszkanie na Sprzedaż Warszawa — Oferty",
                description: "Mieszkania na sprzedaż w Warszawie. Wszystkie dzielnice, różne metraże. Pomoc w negocjacjach i formalnościach.",
              },
              competitors: [
                { domain: "sprzedaz-mieszkan-warszawa.pl", title: "Sprzedaż Mieszkań Warszawa — Baza Ofert", description: "Baza mieszkań na sprzedaż w Warszawie. Nowe i wtórne, różne dzielnice, filtry wyszukiwania." },
                { domain: "mieszkania-warszawa-sprzedaz.pl", title: "Mieszkania Warszawa Sprzedaż — Oferty", description: "Mieszkania na sprzedaż w Warszawie. Wszystkie lokalizacje, ceny, metraże. Aktualna baza ofert." },
              ],
            },
            {
              query: "pośrednik nieruchomości Warszawa",
              yourSite: {
                domain: "agencja-nieruchomosci-waw.pl",
                title: "Pośrednik Nieruchomości Warszawa — Agencja",
                description: "Pośrednik nieruchomości w Warszawie. Licencjonowany agent, doświadczenie 10 lat. Pomoc w sprzedaży i wynajmie.",
              },
              competitors: [
                { domain: "posrednik-warszawa.pl", title: "Pośrednik Warszawa — Nieruchomości", description: "Pośrednik nieruchomości w Warszawie. Sprzedaż, wynajem, doradztwo. Licencja i ubezpieczenie OC." },
                { domain: "agent-nieruchomosci-waw.pl", title: "Agent Nieruchomości Waw — Usługi", description: "Agent nieruchomości w Warszawie. Profesjonalna obsługa sprzedaży i wynajmu. Znajomość rynku lokalnego." },
              ],
            },
          ],
        },
      },
    ]}
    features={[
      { title: "Baza ofert", description: "Prezentacja mieszkań i domów z filtrami (cena, metraż, lokalizacja)." },
      { title: "SEO lokalne", description: "Oferty w Twoim mieście - widoczne w Google Maps i organicznie." },
      { title: "Schema RealEstate", description: "Google rozumie, że jesteś agencją nieruchomości." },
      { title: "Formularz kontaktowy", description: "Klient zostawia zapytanie, Ty dostajesz maila." },
      { title: "Galeria zdjęć", description: "Profesjonalne zdjęcia nieruchomości z lightbox." },
      { title: "Blog z poradami", description: "SEO-friendly blog, który pozycjonuje Twoje oferty." },
      { title: "Mapa Google", description: "Klient widzi lokalizację nieruchomości." },
      { title: "Edytujesz z telefonu", description: "Dodajesz nową ofertę w 30 sekund." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "49 zł", label: "miesięcznie" },
      { number: "SEO", label: "w cenie, bez dopłat" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla agencji nieruchomości?", a: "Od 1500 zł jednorazowo (plan Start) i 49 zł miesięcznie. Plan Standard z bazą ofert i SEO - 2200 zł + 69 zł/mies." },
      { q: "Czy mogę sam dodawać oferty?", a: "Tak. Dodajesz ofertę z telefonu w 30 sekund - ze zdjęciami, opisem, ceną i lokalizacją." },
      { q: "Czy SEO pomoże w Google Maps?", a: "Tak. Schema RealEstate + SEO lokalne + spójne dane NAP wzmacniają Twój profil Google Business Profile." },
      { q: "Ile ofert mogę dodać?", a: "Bez limitu. W planie Standard - do 15 podstron, więc możesz mieć setki ofert w różnych kategoriach." },
      { q: "Czy mogę mieć własną domenę?", a: "Tak. Podpinamy Twoją domenę w cenie wdrożenia." },
    ]}
    cta={{
      title: "Stwórz stronę dla agencji nieruchomości, która zdobywa klientów",
      description: "Oferty, SEO, formularz - wszystko w jednym, gotowe w 5 dni.",
      primaryLabel: "Zamów stronę agencji →",
    }}
    showModules={true}
    showPricing={true}
  />
)


export const StronaDlaKancelariiPrawnejPage = () => (
  <SEOLandingPage
    path="/strona-dla-kancelarii-prawnej"
    title="Strona dla kancelarii prawnej | SEO lokalne, RODO | SEO Grow"
    description="Strona dla kancelarii prawnej z SEO lokalnym, schema LegalService, blogiem prawniczym i zgodnością RODO. Od 1500 zł, bez umowy."
    keywords="strona dla kancelarii prawnej, strona dla kancelarii, strona dla adwokata, strona dla radcy prawnego, strona dla kancelarii prawnej seo"
    h1="Strona dla kancelarii prawnej"
    h1Accent="klienci znajdują Cię w Google"
h1Sub="Klienci szukający pomocy prawnej trafiają bezpośrednio do Ciebie — z cennikiem i formularzem."
    intro="Klienci szukają prawnika w Google w najgorszym momencie życia — rozwód, wypadek, spadek. Wpisują 'adwokat [miasto]', 'prawnik [dzielnica]', 'kancelaria prawna [specjalizacja]'. Bez strony z schema LegalService, cennikiem online i RODO, trafiają do konkurencji, która to ma. Twoja strona pokaże specjalizacje, cennik konsultacji i pozwoli umówić wizytę 24/7."
    heroImage="/lawyer.webp"
    heroImageAlt="Strona dla kancelarii prawnej — adwokat prowadzący konsultację z klientem"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla kancelarii prawnej", href: "/strona-dla-kancelarii-prawnej" }]}
    sections={[
      {
        heading: "Co powinna mieć strona dla kancelarii prawnej, żeby przyciągać klientów",
        content: "SEO lokalne z Google Business Profile i schema LegalService. Lista specjalizacji (prawo rodzinne, karne, spadkowe, nieruchomości, B2B) z cennikiem konsultacji — klient nie chce dzwonić, żeby zapytać o stawkę. Opinie Google zintegrowane ze strony. Moduł rezerwacji konsultacji online — klient wybiera termin, kancelaria dostaje powiadomienie. Pełna zgodność z RODO w cenie.",
        image: "/lawyerweb.webp",
        imageAlt: "Strona dla kancelarii prawnej — panel SEO Grow z modułem rezerwacji konsultacji i cennikiem",
        highlights: [
          "Schema LegalService — w wynikach Google ze specjalizacją i opiniami",
          "Cennik konsultacji online — bez konieczności dzwonienia",
          "Opinie Google zintegrowane automatycznie",
          "Moduł rezerwacji konsultacji z RODO compliance",
        ],
      },
      {
        heading: "Jak Twoja kancelaria pojawia się w Google",
        content: "Klienci szukający pomocy prawnej wpisują w Google „kancelaria prawna Warszawa\", „adwokat Warszawa\" albo „prawnik Warszawa\". Dzięki schema LegalService, SEO lokalnemu i artykułom blogowym Twoja kancelaria wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema LegalService",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Artykuły blogowe",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "kancelaria prawna Warszawa",
              yourSite: {
                domain: "kancelaria-prawna-warszawa.pl",
                title: "Kancelaria Prawna Warszawa — Adwokat i Radca",
                description: "Kancelaria prawna w Warszawie. Adwokat, radca prawny, doradztwo prawne. Prawo cywilne, karne, gospodarcze, rodzinne.",
              },
              competitors: [
                { domain: "adwokat-warszawa-waw.pl", title: "Adwokat Warszawa — Kancelaria Adwokacka", description: "Kancelaria adwokacka w Warszawie. Adwokat z doświadczeniem, prawo karne, cywilne, rodzinne. Bezpłatna konsultacja." },
                { domain: "prawnik-warszawa.pl", title: "Prawnik Warszawa — Kancelaria Prawna", description: "Kancelaria prawna w Warszawie. Prawnik, radca prawny, doradztwo. Sprawy sądowe i pozasądowe." },
              ],
            },
            {
              query: "adwokat Warszawa",
              yourSite: {
                domain: "kancelaria-prawna-warszawa.pl",
                title: "Adwokat Warszawa — Kancelaria Prawna",
                description: "Adwokat w Warszawie. Obrona w sprawach karnych, rozwody, spadki, odszkodowania. Bezpłatna pierwsza rozmowa.",
              },
              competitors: [
                { domain: "adwokat-waw.pl", title: "Adwokat Waw — Sprawy Karne i Cywilne", description: "Adwokat w Warszawie. Obrona w sprawach karnych, rozwody, spadki, odszkodowania. Doświadczenie sądowe." },
                { domain: "kancelaria-adwokacka-warszawa.pl", title: "Kancelaria Adwokacka Warszawa", description: "Kancelaria adwokacka w Warszawie. Prawo karne, cywilne, gospodarcze, rodzinne. Bezpłatna konsultacja wstępna." },
              ],
            },
            {
              query: "prawnik Warszawa",
              yourSite: {
                domain: "kancelaria-prawna-warszawa.pl",
                title: "Prawnik Warszawa — Porady i Reprezentacja",
                description: "Prawnik w Warszawie. Porady prawne, pisma procesowe, reprezentacja przed sądami. Wszystkie dziedziny prawa.",
              },
              competitors: [
                { domain: "porady-prawne-warszawa.pl", title: "Porady Prawne Warszawa — Prawnik", description: "Porady prawne w Warszawie. Prawnik z doświadczeniem, prawo cywilne, karne, rodzinne. Pierwsza porada bezpłatna." },
                { domain: "prawnik-waw.pl", title: "Prawnik Waw — Kancelaria", description: "Prawnik w Warszawie. Konsultacje, porady, pisma procesowe. Szybka pomoc prawna, przystępne ceny." },
              ],
            },
          ],
        },
      },
    ]}
    features={[
      { title: "Schema LegalService", description: "Google rozumie, że jesteś kancelarią prawną." },
      { title: "RODO w cenie", description: "Polityka prywatności i klauzule zgodne z RODO." },
      { title: "SEO lokalne", description: "Kancelaria w Twoim mieście - widoczna w Google." },
      { title: "Formularz kontaktowy", description: "Klient zostawia zapytanie, Ty dostajesz maila." },
      { title: "Blog ekspercki", description: "Artykuły prawne, które pozycjonują Twoją kancelarię." },
      { title: "Opinie klientów", description: "Sekcja z referencjami, która buduje zaufanie." },
      { title: "Mapa Google", description: "Klient widzi lokalizację kancelarii." },
      { title: "Edytujesz z telefonu", description: "Dodajesz artykuł w 30 sekund." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "69 zł", label: "miesięcznie z RODO" },
      { number: "RODO", label: "w cenie, bez dopłat" },
    ]}
    faq={[
      { q: "Czy strona jest zgodna z RODO?", a: "Tak. Polityka prywatności, klauzule informacyjne i formularze są zgodne z RODO. Wszystko w cenie." },
      { q: "Ile kosztuje strona dla kancelarii prawnej?", a: "Od 1500 zł jednorazowo (plan Start) i 49 zł miesięcznie. Plan Standard z RODO i SEO - 2200 zł + 69 zł/mies." },
      { q: "Czy mogę sam dodawać artykuły?", a: "Tak. Dodajesz artykuły prawne z telefonu - bez wiedzy technicznej." },
      { q: "Czy SEO pomoże mi pozyskać klientów?", a: "Tak. Schema LegalService + SEO lokalne + blog pozycjonują Twoją kancelarię." },
      { q: "Czy mogę mieć własną domenę?", a: "Tak. Podpinamy Twoją domenę w cenie wdrożenia." },
    ]}
    cta={{
      title: "Stwórz stronę dla kancelarii prawnej, która zdobywa klientów",
      description: "SEO, RODO, schema LegalService - wszystko w jednym, gotowe w 5 dni.",
      primaryLabel: "Zamów stronę kancelarii →",
    }}
    showModules={true}
    showPricing={true}
  />
)


export const StronaDlaMechanikaPage = () => (
  <SEOLandingPage
    path="/strona-dla-mechanika"
    title="Strona dla mechanika | SEO lokalne, cennik, opinie | SEO Grow"
    description="Strona dla mechanika samochodowego z SEO lokalnym, cennikiem usług, opiniami Google i formularzem kontaktowym. Od 1500 zł, bez umowy."
    keywords="strona dla mechanika, strona dla mechanika samochodowego, strona mechanika, wizytówka mechanika, strona dla serwisu samochodowego"
    h1="Strona dla mechanika"
    h1Accent="kierowcy trafiają do Ciebie z Google"
h1Sub="Kierowcy rezerwują wizytę w 30 sekund — nawet gdy jesteś pod autem."
    intro="Kierowcy szukają mechanika w Google: 'mechanik [dzielnica]', 'wymiana klocków [miasto]', 'diagnostyka komputerowa [okolica]'. Bez strony z schema AutoRepair, cennikiem i opiniami, jadą do warsztatu obok, który już to ma. Twoja strona pokaże specjalizacje, ceny usług i pozwoli zarezerwować wizytę w 30 sekund — bez czekania, aż odbierzesz telefon z rękami w silniku."
heroImage="/mecanico.webp"
    heroImageAlt="Strona dla mechanika — mechanik podczas naprawy samochodu w warsztacie"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla mechanika", href: "/strona-dla-mechanika" }]}
    sections={[
{
        heading: "Co powinna mieć strona dla mechanika, żeby przyciągać klientów",
        content: "SEO lokalne z Google Business Profile i schema AutoRepair. Cennik usług online (wymiana opon, wymiana oleju, diagnostyka komputerowa, hamulce, klimatyzacja) — klient nie chce dzwonić, żeby zapytać o cenę. Opinie Google zintegrowane ze strony. Moduł rezerwacji online — klient wybiera termin, warsztat dostaje powiadomienie.",
        image: "/mecanicoweb.webp",
        imageAlt: "Strona dla mechanika — widok panelu SEO Grow",
highlights: [
          "Kierowcy z Twojej okolicy trafiają do warsztatu z Google",
          "Cena wymiany opon, oleju i hamulców widoczna bez dzwonienia",
          "Opinie klientów z Google widać od razu na stronie",
          "Rezerwacja online — klient wybiera termin wizyty",
        ],
      },
      {
        heading: "Jak Twój warsztat samochodowy pojawia się w Google",
        content: "Kierowcy szukający mechanika wpisują w Google „mechanik Warszawa\", „warsztat samochodowy Warszawa\" albo „wymiana opon Warszawa\". Dzięki schema AutoRepair, SEO lokalnemu i artykułom blogowym Twój warsztat wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema AutoRepair",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Blog motoryzacyjny",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "mechanik samochodowy Warszawa",
              yourSite: {
                domain: "mechanik-samochodowy-waw.pl",
                title: "Mechanik Samochodowy Warszawa — Serwis",
                description: "Mechanik samochodowy w Warszawie. Naprawa bieżąca i główna, diagnostyka komputerowa. Wszystkie marki, gwarancja.",
              },
              competitors: [
                { domain: "mechanik-w-warszawie.pl", title: "Mechanik w Warszawie — Auto Serwis", description: "Mechanik w Warszawie. Naprawa samochodów osobowych i dostawczych. Pełen zakres usług mechanicznych." },
                { domain: "auto-naprawa-warszawa.pl", title: "Auto Naprawa Warszawa — Mechanika", description: "Auto naprawa w Warszawie. Mechanika ogólna, elektryka, klimatyzacja. Wieloletnie doświadczenie." },
              ],
            },
            {
              query: "naprawa samochodu Warszawa",
              yourSite: {
                domain: "mechanik-samochodowy-waw.pl",
                title: "Naprawa Samochodu Warszawa — Mechanik",
                description: "Naprawa samochodu w Warszawie. Silnik, skrzynia biegów, zawieszenie, hamulce. Szybka diagnoza, uczciwe ceny.",
              },
              competitors: [
                { domain: "naprawa-aut-waw.pl", title: "Naprawa Aut Waw — Serwis", description: "Naprawa aut w Warszawie. Mechanika, elektryka, klimatyzacja. Wszystkie marki, gwarancja na naprawy." },
                { domain: "serwis-naprawczy-warszawa.pl", title: "Serwis Naprawczy Warszawa — Auto", description: "Serwis naprawczy w Warszawie. Naprawa samochodów, przeglądy, diagnostyka. Konkurencyjne ceny, szybka realizacja." },
              ],
            },
            {
              query: "wymiana opon Warszawa",
              yourSite: {
                domain: "mechanik-samochodowy-waw.pl",
                title: "Wymiana Opon Warszawa — Serwis Opon",
                description: "Wymiana opon w Warszawie. Sezonowa i całoroczna, przechowalnia opon, wyważanie. Szybka obsługa, konkurencyjne ceny.",
              },
              competitors: [
                { domain: "wymiana-opon-waw.pl", title: "Wymiana Opon Waw — Serwis", description: "Wymiana opon w Warszawie. Opony letnie, zimowe, całoroczne. Przechowalnia, wyważanie, geometria." },
                { domain: "opony-warszawa-serwis.pl", title: "Opony Warszawa Serwis — Wymiana", description: "Serwis opon w Warszawie. Wymiana, przechowalnia, wyważanie, naprawa. Szybka obsługa bez kolejki." },
              ],
            },
          ],
        },
      },
    ]}
    features={[
      { title: "Schema AutoRepair", description: "Google rozumie, że jesteś warsztatem samochodowym." },
      { title: "Cennik usług", description: "Klient widzi cenę przed wizytą." },
      { title: "SEO lokalne", description: "Warsztat w Twojej dzielnicy - widoczny w Google Maps." },
      { title: "Formularz kontaktowy", description: "Klient zostawia zapytanie, Ty dostajesz maila." },
      { title: "Opinie klientów", description: "Recenzje budują zaufanie do Twojego warsztatu." },
      { title: "Mapa Google", description: "Klient łatwo znajduje warsztat." },
      { title: "Rezerwacje online", description: "Klient rezerwuje termin wizyty." },
      { title: "Edytujesz z telefonu", description: "Zmiana cennika w 30 sekund." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "49 zł", label: "miesięcznie" },
      { number: "SEO", label: "w cenie, bez dopłat" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla mechanika?", a: "Od 1500 zł jednorazowo (plan Start) i 49 zł miesięcznie. Plan Standard z cennikiem i SEO - 2200 zł + 69 zł/mies." },
      { q: "Czy mogę sam aktualizować cennik?", a: "Tak. Dodajesz usługi, ceny, opisy z telefonu." },
      { q: "Czy SEO pomoże mi w Google Maps?", a: "Tak. Schema AutoRepair + SEO lokalne + opinie wzmacniają Twój profil." },
      { q: "Czy klienci mogą rezerwować online?", a: "Tak. Moduł rezerwacji z kalendarzem - klient wybiera termin." },
      { q: "Czy mogę mieć własną domenę?", a: "Tak. Podpinamy Twoją domenę w cenie wdrożenia." },
    ]}
    cta={{
      title: "Stwórz stronę dla mechanika, która przyciąga kierowców z okolicy",
      description: "SEO lokalne, schema AutoRepair, cennik - gotowe w 5 dni.",
      primaryLabel: "Zamów stronę mechanika →",
    }}
    showModules={true}
    showPricing={true}
  />
)


export const StronaDlaTreneraPersonalnegoPage = () => (
  <SEOLandingPage
    path="/strona-dla-trenera-personalnego"
    title="Strona dla trenera personalnego | SEO lokalne, oferta | SEO Grow"
    description="Strona dla trenera personalnego z SEO lokalnym, opisem usług, cennikiem i formularzem kontaktowym. Od 1500 zł, bez umowy."
    keywords="strona dla trenera personalnego, strona trenera, strona dla trenera fitness, strona dla trenera, portfolio trenera, strona dla dietetyka"
    h1="Strona dla trenera personalnego"
    h1Accent="klienci szukają trenera — trafiają do Ciebie"
    h1Sub="Klienci szukają trenera w Google — trafiają do Ciebie, nie do konkurencji obok."
intro="Klienci szukają trenera w Google: 'trener personalny [miasto]', 'treningi indywidualne [dzielnica]', 'odchudzanie z trenerem [okolica]'. Bez strony z ofertą, opiniami i SEO lokalnym, trafiają do trenera obok, który to ma. Twoja strona pokaże Twoje specjalizacje, cennik pakietów i pozwoli zarezerwować sesję próbną online — klient decyduje się w 30 sekund."
    heroImage="/trainer.webp"
    heroImageAlt="Strona dla trenera personalnego — trener prowadzący sesję treningową z klientem"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla trenera personalnego", href: "/strona-dla-trenera-personalnego" }]}
    sections={[
{
        heading: "Co powinna mieć strona dla trenera personalnego, żeby przyciągać klientów",
        content: "SEO lokalne z Google Business Profile i schema HealthClub. Oferta treningów online (indywidualny, grupowy, online, dla par, dla seniorów) z cennikiem pakietów — klient nie chce dzwonić, żeby zapytać o cenę. Opinie Google zintegrowane ze strony. Moduł rezerwacji sesji treningowej — klient wybiera termin, trener dostaje powiadomienie.",
        image: "/trainerweb.webp",
        imageAlt: "Strona dla trenera personalnego — oferta treningów z cennikiem i rezerwacją sesji",
highlights: [
          "Klienci szukający trenera trafiają do Ciebie z Google",
          "Oferta treningów i ceny pakietów widoczne bez pytań",
          "Opinie klientów z Google widać od razu na stronie",
          "Rezerwacja sesji treningowej online, nawet w nocy",
        ],
      },
      {
        heading: "Jak Twoje usługi trenerskie pojawiają się w Google",
        content: "Klienci szukający trenera wpisują w Google „trener personalny Warszawa\", „trener fitness Warszawa\" albo „dietetyk Warszawa\". Dzięki schema HealthClub, SEO lokalnemu i artykułom blogowym Twoja oferta wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema HealthClub",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Blog o treningach",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "trener personalny Warszawa",
              yourSite: {
                domain: "trener-personalny-waw.pl",
                title: "Trener Personalny Warszawa — Studio Treningu",
                description: "Trener personalny w Warszawie. Indywidualne plany treningowe, dieta, monitoring postępów. 10 lat doświadczenia, 200+ podopiecznych.",
              },
              competitors: [
                { domain: "trening-personalny-warszawa.pl", title: "Trening Personalny Warszawa — Trener", description: "Trening personalny w Warszawie. Indywidualne sesje, plany żywieniowe, pomiary. Certyfikowani trenerzy." },
                { domain: "osobisty-trener-waw.pl", title: "Osobisty Trener Waw — Fitness", description: "Osobisty trener w Warszawie. Treningi personalne, odchudzanie, masa. Nowoczesne studio, dobra atmosfera." },
              ],
            },
            {
              query: "trening personalny Warszawa",
              yourSite: {
                domain: "trener-personalny-waw.pl",
                title: "Trening Personalny Warszawa — Indywidualne Sesje",
                description: "Trening personalny w Warszawie. Sesje 1-na-1, plany treningowe, konsultacje żywieniowe. Dla każdego poziomu zaawansowania.",
              },
              competitors: [
                { domain: "treningi-personalne-warszawa.pl", title: "Treningi Personalne Warszawa", description: "Treningi personalne w Warszawie. Indywidualne podejście, profesjonalny sprzęt, doświadczeni trenerzy." },
                { domain: "fitness-trener-waw.pl", title: "Fitness Trener Waw — Personalny", description: "Fitness trener personalny w Warszawie. Budowa masy, redukcja, siła. Plany treningowe i dietetyczne." },
              ],
            },
            {
              query: "siłownia z trenerem Warszawa",
              yourSite: {
                domain: "trener-personalny-waw.pl",
                title: "Siłownia z Trenerem Warszawa — Studio",
                description: "Siłownia z trenerem w Warszawie. Kameralne studio, indywidualne podejście, profesjonalny sprzęt. Treningi personalne i w małych grupach.",
              },
              competitors: [
                { domain: "silownia-personalna-waw.pl", title: "Siłownia Personalna Waw — Trener", description: "Siłownia personalna w Warszawie. Treningi 1-na-1 z trenerem, kameralne studio, indywidualne podejście." },
                { domain: "studio-treningu-warszawa.pl", title: "Studio Treningu Warszawa", description: "Studio treningu w Warszawie. Treningi personalne, małe grupy, indywidualne plany. Profesjonalni trenerzy." },
              ],
            },
          ],
        },
      },
    ]}
    features={[
      { title: "SEO lokalne", description: "Trener w Twoim mieście - widoczny w Google Maps." },
      { title: "Oferta treningów", description: "Klient widzi pakiety i ceny przed kontaktem." },
      { title: "Formularz kontaktowy", description: "Klient zostawia zapytanie, Ty dostajesz maila." },
      { title: "Opinie klientów", description: "Przed i po - buduje wiarygodność." },
      { title: "Galeria zdjęć", description: "Zdjęcia z treningów z lightbox." },
      { title: "Blog ekspercki", description: "Artykuły o treningach, które pozycjonują." },
      { title: "Mapa Google", description: "Klient widzi lokalizację Twojego studio." },
      { title: "Edytujesz z telefonu", description: "Dodajesz nowy trening w 30 sekund." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "49 zł", label: "miesięcznie" },
      { number: "SEO", label: "w cenie, bez dopłat" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla trenera personalnego?", a: "Od 1500 zł jednorazowo (plan Start) i 49 zł miesięcznie. Plan Standard z ofertą i SEO - 2200 zł + 69 zł/mies." },
      { q: "Czy mogę sam dodawać oferty treningów?", a: "Tak. Dodajesz pakiety, ceny, opisy z telefonu." },
      { q: "Czy SEO pomoże mi pozyskać klientów?", a: "Tak. SEO lokalne + opinie + blog pozycjonują Twoją ofertę." },
      { q: "Czy mogę zbierać opinie klientów?", a: "Tak. Sekcja z opiniami i przed/po buduje wiarygodność." },
      { q: "Czy mogę mieć własną domenę?", a: "Tak. Podpinamy Twoją domenę w cenie wdrożenia." },
    ]}
    cta={{
      title: "Stwórz stronę dla trenera personalnego, która zdobywa klientów",
      description: "SEO, oferta, opinie - wszystko w jednym, gotowe w 5 dni.",
      primaryLabel: "Zamów stronę trenera →",
    }}
    showModules={true}
    showPricing={true}
  />
)


export const StronaDlaProjektantaWnetrzPage = () => (
  <SEOLandingPage
    path="/strona-dla-projektanta-wnetrz"
    title="Strona dla projektanta wnętrz | Portfolio, SEO lokalne | SEO Grow"
    description="Strona dla projektanta wnętrz z portfolio realizacji, SEO lokalnym i formularzem kontaktowym. Od 1500 zł, edycja z telefonu, bez umowy."
    keywords="strona dla projektanta wnętrz, strona dla dekoratora wnętrz, portfolio projektanta wnętrz, strona dla designera wnętrz, strona dla studia wnętrz"
    h1="Strona dla projektanta wnętrz"
    h1Accent="portfolio, które zdobywa klientów"
h1Sub="Klienci widzą Twoje aranżacje w Google — zanim zadzwonią po konsultację."
    intro="Klienci szukają projektanta wnętrz w Google: 'projektant wnętrz [miasto]', 'aranżacja mieszkania [dzielnica]', 'home staging [okolica]'. Bez portfolio widocznego w wynikach z opisem stylu i metrażu, trafiają do studia obok, które to ma. Twoja strona pokaże realizacje, cennik usług i pozwoli umówić konsultację online w 30 sekund."
    heroImage="/diseñadorinterior.webp"
    heroImageAlt="Strona dla projektanta wnętrz — projektant prezentujący aranżację wnętrza klientowi"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla projektanta wnętrz", href: "/strona-dla-projektanta-wnetrz" }]}
    sections={[
      {
heading: "Co powinna mieć strona dla projektanta wnętrz, żeby przyciągać klientów",
        content: "SEO lokalne z Google Business Profile i schema InteriorDesign. Portfolio realizacji z opisem stylu, metrażu i zakresu — klient widzi Twój styl przed pierwszą rozmową. Cennik usług online (projekt wnętrz, konsultacja, home staging, projekt oświetlenia) — klient nie chce dzwonić, żeby zapytać o cenę. Opinie Google zintegrowane ze strony. Moduł rezerwacji konsultacji online — klient wybiera termin, studio dostaje powiadomienie.",
        image: "/diseñadorinteriorweb.webp",
        imageAlt: "Strona dla projektanta wnętrz — portfolio realizacji z cennikiem i rezerwacją konsultacji",
highlights: [
          "Klienci szukający projektanta trafiają do Ciebie z Google",
          "Portfolio ze zdjęciami, stylem i zakresem projektu",
          "Cena projektu i konsultacji widoczna bez rozmowy telefonicznej",
          "Umówienie konsultacji online w 30 sekund",
        ],
      },
      {
        heading: "Jak Twoje studio projektowania wnętrz pojawia się w Google",
        content: "Klienci szukający projektanta wnętrz wpisują w Google „projektant wnętrz Warszawa\", „projektowanie wnętrz Warszawa\" albo „studio wnętrz Warszawa\". Dzięki schema InteriorDesign, SEO lokalnemu i artykułom blogowym Twoje studio wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema InteriorDesign",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Blog o designie",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "projektant wnętrz Warszawa",
              yourSite: {
                domain: "projektowanie-wnetrz-waw.pl",
                title: "Projektant Wnętrz Warszawa — Studio",
                description: "Projektant wnętrz w Warszawie. Aranżacje mieszkań, domów, biur. 12 lat doświadczenia, 300+ realizacji. Pełen zakres usług.",
              },
              competitors: [
                { domain: "projekt-wnetrz-warszawa.pl", title: "Projekt Wnętrz Warszawa — Studio", description: "Studio projektowania wnętrz w Warszawie. Mieszkania, domy, biura. Indywidualne projekty, profesjonalne realizacje." },
                { domain: "biuro-projektowe-waw.pl", title: "Biuro Projektowe Waw — Wnętrza", description: "Biuro projektowe wnętrz w Warszawie. Kompleksowe projekty, wizualizacje 3D, nadzór autorski." },
              ],
            },
            {
              query: "biuro projektowe Warszawa",
              yourSite: {
                domain: "projektowanie-wnetrz-waw.pl",
                title: "Biuro Projektowe Warszawa — Wnętrza",
                description: "Biuro projektowe w Warszawie. Projektowanie wnętrz mieszkalnych i komercyjnych. Koncepcja, wizualizacje, realizacja.",
              },
              competitors: [
                { domain: "studio-aranzacji-waw.pl", title: "Studio Aranżacji Waw — Wnętrza", description: "Studio aranżacji wnętrz w Warszawie. Projekty mieszkań, domów, biur. Doświadczeni projektanci, nowoczesne podejście." },
                { domain: "projektowanie-wnetrz-waw.com.pl", title: "Projektowanie Wnętrz Waw", description: "Projektowanie wnętrz w Warszawie. Indywidualne podejście, kompleksowa obsługa, profesjonalne wizualizacje 3D." },
              ],
            },
            {
              query: "aranżacja wnętrz Warszawa",
              yourSite: {
                domain: "projektowanie-wnetrz-waw.pl",
                title: "Aranżacja Wnętrz Warszawa — Studio",
                description: "Aranżacja wnętrz w Warszawie. Kompleksowe projekty, dobór materiałów, nadzór nad realizacją. Od koncepcji do efektu końcowego.",
              },
              competitors: [
                { domain: "aranzacja-wnetrz-warszawa.pl", title: "Aranżacja Wnętrz Warszawa", description: "Aranżacja wnętrz w Warszawie. Profesjonalni projektanci, indywidualne podejście, realizacja pod klucz." },
                { domain: "dekorator-wnetrz-waw.pl", title: "Dekorator Wnętrz Waw — Aranżacje", description: "Dekorator wnętrz w Warszawie. Aranżacje mieszkań i domów. Dobór kolorów, mebli, dodatków. Konsultacje online." },
              ],
            },
          ],
        },
      },
    ]}
    features={[
      { title: "Portfolio z galerią", description: "Prezentacja projektów z filtrami kategorii i lightbox." },
      { title: "Blog ekspercki", description: "SEO-friendly blog do pozycjonowania Twojej specjalizacji." },
      { title: "Formularz kontaktowy", description: "Z pytaniami o zakres, termin i budżet." },
      { title: "Schema InteriorDesign", description: "Google rozumie Twoją specjalizację." },
      { title: "SEO lokalne", description: "Klienci z Twojego miasta znajdą Cię w Google Maps." },
      { title: "Edytujesz z telefonu", description: "Dodajesz nowy projekt w 30 sekund." },
      { title: "Szybkość 90+ PageSpeed", description: "Strona ładuje się w ułamku sekundy." },
      { title: "SSL + domena w cenie", description: "Bezpieczeństwo i profesjonalny adres." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "49 zł", label: "miesięcznie" },
      { number: "SEO", label: "w cenie, bez dopłat" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla projektanta wnętrz?", a: "Od 1500 zł jednorazowo (plan Start) i 49 zł miesięcznie. Plan Standard z portfolio i SEO - 2200 zł + 69 zł/mies." },
      { q: "Czy mogę sam aktualizować portfolio?", a: "Tak. Dodajesz projekty, zdjęcia, opisy z telefonu." },
      { q: "Czy SEO jest w cenie?", a: "Tak. SEO techniczne jest w cenie każdego planu." },
      { q: "Ile realizacji mogę dodać?", a: "Bez limitu. W planie Standard - do 15 podstron." },
      { q: "Czy mogę mieć własną domenę?", a: "Tak. Podpinamy Twoją domenę w cenie wdrożenia." },
    ]}
    cta={{
      title: "Stwórz stronę dla projektanta wnętrz, która zdobywa klientów",
      description: "Portfolio, blog, SEO - wszystko w jednym, gotowe w 5 dni.",
      primaryLabel: "Zamów stronę projektanta →",
    }}
    showModules={true}
    showPricing={true}
  />
)


export const StronaDlaDentystyPage = () => (
  <SEOLandingPage
    path="/strona-dla-dentysty"
title="Strona dla dentysty | SEO lokalne, cennik, rezerwacje online — gotowa w 5 dni"
    description="Strona dla dentysty i gabinetu stomatologicznego z SEO lokalnym, schema DentalClinic, cennikiem zabiegów, rezerwacjami online i opiniami Google. Od 1500 zł, bez umowy."
    keywords="strona dla dentysty, strona dla stomatologa, strona dentysty, wizytówka dentysty, strona dla gabinetu dentystycznego, strona dla kliniki dentystycznej, dentysta seo, gabinet dentystyczny rezerwacje"
    h1="Strona dla dentysty"
    h1Accent="pacjenci rezerwują wizytę 24/7"
h1Sub="Pacjenci rezerwują wizytę 24/7 — nawet w nocy, gdy boli ząb."
    intro="Pacjenci szukają dentysty w Google: 'dentysta [miasto]', 'implanty [dzielnica]', 'stomatolog z nagłymi przypadkami [okolica]'. Bez strony z schema DentalClinic, cennikiem i rezerwacją online, dzwonią do gabinetu obok, który już to ma. Twoja strona pokaże zabiegi, ceny i pozwoli zarezerwować wizytę 24/7 — pacjent z bólem zęba nie będzie szukał kontaktu na Facebooku."
    heroImage="/dentista.webp"
    heroImageAlt="Strona dla dentysty — dentysta podczas konsultacji w gabinecie"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla dentysty", href: "/strona-dla-dentysty" }]}
    sections={[
{
        heading: "Co powinna mieć strona dla dentysty, żeby przyciągać pacjentów",
        content: "SEO lokalne z Google Business Profile i schema Dentist. Cennik zabiegów online (przegląd, leczenie kanałowe, wybielanie, protetyka, implanty) — pacjent nie chce dzwonić, żeby zapytać o cenę. Opinie Google zintegrowane ze strony. Moduł rezerwacji online — pacjent wybiera termin, gabinet dostaje powiadomienie.",
        image: "/dentistaweb.webp",
        imageAlt: "Strona dla dentysty — cennik zabiegów i rezerwacja wizyty online",
highlights: [
          "Pacjenci szukający dentysty trafiają do Ciebie z Google",
          "Cena przeglądu i leczenia widoczna bez dzwonienia",
          "Opinie pacjentów z Google widać od razu na stronie",
          "Rezerwacja wizyty online 24/7, nawet w nocy",
        ],
      },
      {
        heading: "Jak Twój gabinet dentystyczny pojawia się w Google",
        content: "Pacjenci szukający dentysty wpisują w Google „dentysta Warszawa\", „gabinet stomatologiczny Warszawa\" albo „implanty Warszawa\". Dzięki schema Dentist, SEO lokalnemu i artykułom blogowym Twój gabinet wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema Dentist",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Blog o zdrowiu zębów",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "dentysta Warszawa",
              yourSite: {
                domain: "dentysta-warszawa-waw.pl",
                title: "Dentysta Warszawa — Gabinet Stomatologiczny",
                description: "Dentysta w Warszawie. Leczenie, protetyka, implanty, stomatologia estetyczna. Nowoczesny gabinet, bezbolesne zabiegi, rezerwacje online.",
              },
              competitors: [
                { domain: "stomatolog-warszawa.pl", title: "Stomatolog Warszawa — Dentysta", description: "Stomatolog w Warszawie. Dentysta z doświadczeniem, leczenie kanałowe, protetyka, implanty. Pierwsza wizyta bezpłatna." },
                { domain: "gabinet-dentystyczny-waw.pl", title: "Gabinet Dentystyczny Waw — Stomatologia", description: "Gabinet dentystyczny w Warszawie. Pełen zakres usług stomatologicznych, nowoczesny sprzęt, doświadczeni dentyści." },
              ],
            },
            {
              query: "gabinet stomatologiczny Warszawa",
              yourSite: {
                domain: "dentysta-warszawa-waw.pl",
                title: "Gabinet Stomatologiczny Warszawa — Dentysta",
                description: "Gabinet stomatologiczny w Warszawie. Leczenie zachowawcze, chirurgia, protetyka, ortodoncja. Stomatologia dla dorosłych i dzieci.",
              },
              competitors: [
                { domain: "klinika-stomatologiczna-warszawa.pl", title: "Klinika Stomatologiczna Warszawa", description: "Klinika stomatologiczna w Warszawie. Dentysta, ortodonta, implantolog. Kompleksowe leczenie w jednym miejscu." },
                { domain: "stomatologia-warszawa-waw.pl", title: "Stomatologia Warszawa Waw", description: "Gabinet stomatologiczny w Warszawie. Stomatologia zachowawcza, estetyczna, chirurgia. Nowoczesne metody leczenia." },
              ],
            },
            {
              query: "implanty Warszawa",
              yourSite: {
                domain: "dentysta-warszawa-waw.pl",
                title: "Implanty Warszawa — Dentysta Implantolog",
                description: "Implanty w Warszawie. Implantologia, protetyka na implantach, odbudowa uzębienia. Doświadczeni implantolodzy, nowoczesne systemy.",
              },
              competitors: [
                { domain: "implanty-warszawa-waw.pl", title: "Implanty Warszawa Waw — Stomatologia", description: "Implanty w Warszawie. Implanty zębowe, protetyka, odbudowa kości. Bezpłatna konsultacja, raty 0%." },
                { domain: "implantolog-warszawa.pl", title: "Implantolog Warszawa — Dentysta", description: "Implantolog w Warszawie. Implanty zębowe, podniesienie dna zatoki, regeneracja kości. Doświadczenie 15 lat." },
              ],
            },
          ],
        },
      },
    ]}
    features={[
      { title: "Schema Dentist", description: "Google rozumie, że jesteś gabinetem stomatologicznym." },
      { title: "Rezerwacje online", description: "Pacjent rezerwuje termin 24/7." },
      { title: "Cennik zabiegów", description: "Pacjent widzi cenę przed wizytą." },
      { title: "SEO lokalne", description: "Dentysta w Twoim mieście - widoczny w Google Maps." },
      { title: "Formularz kontaktowy", description: "Pacjent zostawia zapytanie, Ty dostajesz maila." },
      { title: "Opinie pacjentów", description: "Recenzje budują zaufanie do gabinetu." },
      { title: "Mapa Google", description: "Pacjent łatwo znajduje gabinet." },
      { title: "Przypomnienia SMS", description: "Zmniejsza liczbę nieodwołanych wizyt." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "24/7", label: "rezerwacje online" },
      { number: "69 zł", label: "miesięcznie z SEO" },
      { number: "0 zł", label: "prowizji od rezerwacji" },
    ]}
    faq={[
      { q: "Czy pacjenci mogą rezerwować online?", a: "Tak. Moduł rezerwacji działa 24/7 - pacjent wybiera zabieg, termin i wpisuje dane." },
      { q: "Ile kosztuje strona dla dentysty?", a: "Od 1500 zł jednorazowo (plan Start) i 49 zł miesięcznie. Plan Standard z rezerwacjami i SEO - 2200 zł + 69 zł/mies." },
      { q: "Czy poniosę prowizję od rezerwacji?", a: "Nie. Moduł rezerwacji jest własnością Twojej strony. Bez prowizji." },
      { q: "Czy mogę dodać nowy zabieg do cennika?", a: "Tak. Dodajesz zabieg, cenę, czas trwania z telefonu." },
      { q: "Czy SEO pomoże mi pozyskać pacjentów?", a: "Tak. Schema Dentist + SEO lokalne + opinie pozycjonują Twój gabinet." },
    ]}
    cta={{
      title: "Stwórz stronę dla dentysty, która przyciąga pacjentów 24/7",
      description: "SEO, rezerwacje, cennik - wszystko w jednym, gotowe w 5 dni.",
      primaryLabel: "Zamów stronę dentysty →",
    }}
    showModules={true}
    showPricing={true}
  />
)


export const StronaDlaWeterynarzaPage = () => (
  <SEOLandingPage
    path="/strona-dla-weterynarza"
title="Strona dla weterynarza | SEO lokalne, cennik, rezerwacje online — gotowa w 5 dni"
    description="Strona dla weterynarza i gabinetu weterynaryjnego z SEO lokalnym, schema Veterinarian, cennikiem usług, rezerwacjami online i opiniami Google. Od 1500 zł, bez umowy."
    keywords="strona dla weterynarza, strona dla gabinetu weterynaryjnego, strona weterynarza, wizytówka weterynarza, strona dla kliniki weterynaryjnej, weterynarz seo, lecznica weterynaryjna rezerwacje"
    h1="Strona dla weterynarza"
    h1Accent="właściciele zwierząt umawiają wizytę 24/7"
h1Sub="Właściciele zwierząt umawiają wizytę w 30 sekund — nawet w nocy, gdy pupil źle się poczuje."
    intro="Właściciele zwierząt szukają weterynarza w Google w panice: 'weterynarz 24h [miasto]', 'klinika weterynaryjna [dzielnica]', 'szczepienie psa [okolica]'. Bez strony z schema Veterinarian i rezerwacją online, dzwonią do lecznicy obok, która już to ma. Twoja strona pokaże usługi, ceny i pozwoli umówić wizytę w 30 sekund — bez czekania na odbiór telefonu w godzinach przyjęć."
    heroImage="/veterinario.webp"
    heroImageAlt="Strona dla weterynarza — weterynarz badający zwierzę w gabinecie"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla weterynarza", href: "/strona-dla-weterynarza" }]}
    sections={[
{
        heading: "Co powinna mieć strona dla weterynarza, żeby przyciągać klientów",
        content: "SEO lokalne z Google Business Profile i schema Veterinarian. Cennik usług online (konsultacja, szczepienie, sterylizacja, chipowanie, badania) — właściciel zwierzęcia nie chce dzwonić, żeby zapytać o cenę. Opinie Google zintegrowane ze strony. Moduł rezerwacji online — klient wybiera termin, gabinet dostaje powiadomienie.",
        image: "/veterinarioweb.webp",
        imageAlt: "Strona dla weterynarza — cennik usług i rezerwacja wizyty online",
highlights: [
          "Właściciele zwierząt z Twojej okolicy trafiają do Ciebie z Google",
          "Cena wizyty, szczepienia i sterylizacji widoczna bez dzwonienia",
          "Opinie właścicieli zwierząt z Google widać od razu na stronie",
          "Rezerwacja wizyty online 24/7, nawet w nocy",
        ],
      },
      {
        heading: "Jak Twój gabinet weterynaryjny pojawia się w Google",
        content: "Właściciele zwierząt szukający weterynarza wpisują w Google „weterynarz Warszawa\", „gabinet weterynaryjny Warszawa\" albo „klinika dla zwierząt Warszawa\". Dzięki schema Veterinarian, SEO lokalnemu i artykułom blogowym Twój gabinet wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema Veterinarian",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Blog o zdrowiu zwierząt",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "weterynarz Warszawa",
              yourSite: {
                domain: "weterynarz-warszawa-waw.pl",
                title: "Weterynarz Warszawa — Gabinet Weterynaryjny",
                description: "Weterynarz w Warszawie. Leczenie psów, kotów, zwierząt egzotycznych. Szczepienia, chirurgia, diagnostyka. Rezerwacje online 24/7.",
              },
              competitors: [
                { domain: "klinika-weterynaryjna-warszawa.pl", title: "Klinika Weterynaryjna Warszawa", description: "Klinika weterynaryjna w Warszawie. Weterynarz, chirurgia, diagnostyka, laboratorium. Całodobowa opieka." },
                { domain: "gabinet-weterynaryjny-waw.pl", title: "Gabinet Weterynaryjny Waw", description: "Gabinet weterynaryjny w Warszawie. Weterynarz z doświadczeniem, leczenie zwierząt domowych, szczepienia, chipowanie." },
              ],
            },
            {
              query: "gabinet weterynaryjny Warszawa",
              yourSite: {
                domain: "weterynarz-warszawa-waw.pl",
                title: "Gabinet Weterynaryjny Warszawa — Weterynarz",
                description: "Gabinet weterynaryjny w Warszawie. Nowoczesne wyposażenie, doświadczeni weterynarze, kompleksowa opieka. Wizyty domowe dostępne.",
              },
              competitors: [
                { domain: "weterynarz-waw.com.pl", title: "Weterynarz Waw — Leczenie Zwierząt", description: "Weterynarz w Warszawie. Leczenie psów, kotów, gryzoni. Szczepienia, odrobaczanie, chirurgia. Przyjazne podejście." },
                { domain: "przychodnia-weterynaryjna-warszawa.pl", title: "Przychodnia Weterynaryjna Warszawa", description: "Przychodnia weterynaryjna w Warszawie. Weterynarz, szczepienia, USG, RTG. Rezerwacje telefoniczne i online." },
              ],
            },
            {
              query: "klinika weterynaryjna Warszawa",
              yourSite: {
                domain: "weterynarz-warszawa-waw.pl",
                title: "Klinika Weterynaryjna Warszawa — Opieka 24/7",
                description: "Klinika weterynaryjna w Warszawie. Całodobowa opieka, chirurgia, diagnostyka, laboratorium. Dla psów, kotów, zwierząt egzotycznych.",
              },
              competitors: [
                { domain: "wet-warszawa.pl", title: "Wet Warszawa — Klinika Weterynaryjna", description: "Klinika weterynaryjna w Warszawie. Weterynarze specjaliści, nowoczesny sprzęt, całodobowa opieka. Nagłe przypadki 24/7." },
                { domain: "klinika-wet-waw.pl", title: "Klinika Wet Waw — Weterynarz", description: "Klinika weterynaryjna w Warszawie. Kompleksowa opieka, chirurgia, hospitalizacja. Doświadczeni lekarze weterynarii." },
              ],
            },
          ],
        },
      },
    ]}
    features={[
      { title: "Schema Veterinarian", description: "Google rozumie, że jesteś gabinetem weterynaryjnym." },
      { title: "Rezerwacje online", description: "Właściciel zwierzęcia rezerwuje termin 24/7." },
      { title: "Cennik usług", description: "Klient widzi cenę przed wizytą." },
      { title: "SEO lokalne", description: "Weterynarz w Twoim mieście - widoczny w Google Maps." },
      { title: "Formularz kontaktowy", description: "Właściciel zwierzęcia zostawia zapytanie." },
      { title: "Opinie klientów", description: "Recenzje budują zaufanie do gabinetu." },
      { title: "Mapa Google", description: "Klient łatwo znajduje gabinet." },
      { title: "Przypomnienia SMS", description: "Zmniejsza liczbę nieodwołanych wizyt." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "24/7", label: "rezerwacje online" },
      { number: "69 zł", label: "miesięcznie z SEO" },
      { number: "0 zł", label: "prowizji od rezerwacji" },
    ]}
    faq={[
      { q: "Czy właściciele zwierząt mogą rezerwować online?", a: "Tak. Moduł rezerwacji działa 24/7 - właściciel wybiera termin i usługę." },
      { q: "Ile kosztuje strona dla weterynarza?", a: "Od 1500 zł jednorazowo (plan Start) i 49 zł miesięcznie. Plan Standard z rezerwacjami i SEO - 2200 zł + 69 zł/mies." },
      { q: "Czy poniosę prowizję od rezerwacji?", a: "Nie. Moduł rezerwacji jest własnością Twojej strony. Bez prowizji." },
      { q: "Czy mogę dodać nową usługę do cennika?", a: "Tak. Dodajesz usługę, cenę, opis z telefonu." },
      { q: "Czy SEO pomoże mi pozyskać klientów?", a: "Tak. Schema Veterinarian + SEO lokalne + opinie pozycjonują Twój gabinet." },
    ]}
    cta={{
      title: "Stwórz stronę dla weterynarza, która przyciąga właścicieli zwierząt 24/7",
      description: "SEO, rezerwacje, cennik - wszystko w jednym, gotowe w 5 dni.",
      primaryLabel: "Zamów stronę weterynarza →",
    }}
    showModules={true}
    showPricing={true}
  />
)
