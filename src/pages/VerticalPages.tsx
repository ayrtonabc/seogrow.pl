import { SEOLandingPage } from "../components/SEOLandingPage"

export const StronaDlaPrawnikaPage = () => (
  <SEOLandingPage
    path="/strona-dla-prawnika"
    title="Strona dla prawnika i adwokata | SEO lokalne, cennik, rezerwacje online — gotowa w 5 dni"
    description="Strona dla prawnika, adwokata i kancelarii prawnej z SEO lokalnym, schema LegalService, cennikiem usług i rezerwacją konsultacji online. Od 1500 zł, bez umowy."
    keywords="strona dla prawnika, strona dla adwokata, strona dla kancelarii prawnej, strona dla radcy prawnego, strona dla kancelarii, wizytówka prawnika, strona www prawnik"
    h1="Strona dla prawnika:"
    h1Accent="klienci znajdują Cię w Google"
    h1Sub="Cennik konsultacji, opinie Google i rezerwacja online — klient wybiera Ciebie, nie konkurencję."
    heroImage="/lawyer.webp"
    heroImageAlt="Strona dla prawnika — adwokat prowadzący konsultację z klientem"
    breadcrumb={[{ name: "Strony dla branż", href: "#" }, { name: "Strona dla prawnika", href: "/strona-dla-prawnika" }]}
    sections={[
      {
        heading: "Jak powinna wyglądać strona kancelarii, żeby klient do Ciebie zadzwonił",
        content: "Klient szukający prawnika chce szybko sprawdzić trzy rzeczy: czy ta kancelaria zajmuje się jego sprawą, ile kosztuje pierwsza konsultacja i czy może ją umówić bez czekania na telefon w godzinach pracy. Dlatego strona powinna od razu pokazywać listę specjalizacji z cennikiem, opinie klientów z Google i prosty formularz rezerwacji — wszystko czytelne na telefonie, bo większość osób szuka prawnika właśnie stamtąd, często w nocy.",
        image: "/lawyerweb.webp",
        imageAlt: "Strona dla prawnika — cennik, opinie Google i rezerwacja konsultacji online",
        highlights: [
          "Klient widzi Twoje specjalizacje i ceny przed pierwszym telefonem",
          "Opinie z Google widoczne od razu — budują zaufanie",
          "Konsultacja umawiana online, nawet w nocy",
          "Strona działa na telefonie — tam szukają klienci w potrzebie",
        ],
      },
      {
        heading: 'Dlaczego SEO lokalne jest kluczowe dla kancelarii',
        content: 'Klient, który szuka prawnika w Google, jest gotowy na rozmowę. SEO lokalne sprawia, że Twoja kancelaria pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka prawnika — 24/7, bez płacenia za kliknięcia.',
        highlights: [
          "Klient szuka prawnika — gotowy na rozmowę",
          "Widoczność 24/7, bez płacenia za kliknięcia",
          "Wyprzedzasz konkurencję w Google Maps",
          "Budujesz markę kancelarii na lata",
        ],
                imageAnimation: {
          rounds: [
              {
                query: 'adwokat Warszawa',
                yourSite: {
                  domain: 'kancelaria-prawnik-warszawa.pl',
                  title: 'Kancelaria Adwokacka — Prawnik Warszawa Centrum',
                  description: 'Kancelaria adwokacka w centrum Warszawy. Prawo cywilne, karne, rodzinne, gospodarcze. Bezpłatna konsultacja wstępna.',
                },
                competitors: [
                  { domain: 'prawnik-warszawa.com', title: 'Prawnik Warszawa — Kancelaria 24h', description: 'Kancelaria prawna w Warszawie. Prawo cywilne, karne, rodzinne. Konsultacje w dniu zgłoszenia.' },
                  { domain: 'adwokat-waw.pl', title: 'Adwokat Warszawa — Kancelaria Prawna', description: 'Kancelaria adwokacka w Warszawie. Specjalizacja: prawo spadkowe, rodzinne, nieruchomości.' },
                ],
              },
              {
                query: 'prawnik Warszawa',
                yourSite: {
                  domain: 'kancelaria-prawnik-warszawa.pl',
                  title: 'Kancelaria Adwokacka — Prawnik Warszawa Centrum',
                  description: 'Kancelaria adwokacka w centrum Warszawy. Prawo cywilne, karne, rodzinne, gospodarcze. Bezpłatna konsultacja wstępna.',
                },
                competitors: [
                  { domain: 'prawnik-warszawa.com', title: 'Prawnik Warszawa — Kancelaria 24h', description: 'Kancelaria prawna w Warszawie. Prawo cywilne, karne, rodzinne. Konsultacje w dniu zgłoszenia.' },
                  { domain: 'adwokat-waw.pl', title: 'Adwokat Warszawa — Kancelaria Prawna', description: 'Kancelaria adwokacka w Warszawie. Specjalizacja: prawo spadkowe, rodzinne, nieruchomości.' },
                ],
              },
              {
                query: 'kancelaria prawna Warszawa',
                yourSite: {
                  domain: 'kancelaria-prawnik-warszawa.pl',
                  title: 'Kancelaria Adwokacka — Prawnik Warszawa Centrum',
                  description: 'Kancelaria adwokacka w centrum Warszawy. Prawo cywilne, karne, rodzinne, gospodarcze. Bezpłatna konsultacja wstępna.',
                },
                competitors: [
                  { domain: 'prawnik-warszawa.com', title: 'Prawnik Warszawa — Kancelaria 24h', description: 'Kancelaria prawna w Warszawie. Prawo cywilne, karne, rodzinne. Konsultacje w dniu zgłoszenia.' },
                  { domain: 'adwokat-waw.pl', title: 'Adwokat Warszawa — Kancelaria Prawna', description: 'Kancelaria adwokacka w Warszawie. Specjalizacja: prawo spadkowe, rodzinne, nieruchomości.' },
                ],
              },
          ],
        },
      },
    ]}
    features={[
      { title: "SEO lokalne", description: "Google Business Profile, NAP consistency, mapa." },
      { title: "Schema LegalService", description: "Automatyczny znacznik dla usług prawnych." },
      { title: "Podstrony usługowe", description: "Każda dziedzina prawa jako osobna podstrona." },
      { title: "Blog prawniczy", description: "Publikuj bez wiedzy SEO." },
      { title: "RODO compliance", description: "Wszystkie strony prawne w cenie." },
      { title: "Szybkość 90+", description: "Mobile-first na telefonie klienta." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "24/7", label: "rezerwacje konsultacji" },
      { number: "69 zł", label: "miesięcznie z SEO" },
      { number: "RODO", label: "pełna zgodność w cenie" },
    ]}
    faq={[
      { q: "Czy strona wymaga RODO compliance?", a: "Tak. W cenie wdrożenia: polityka prywatności, klauzula informacyjna RODO, strona cookies." },
      { q: "Ile kosztuje strona dla kancelarii?", a: "Wdrożenie od 2200 zł, hosting od 69 zł/miesięcznie." },
    ]}
    cta={{
      title: "Stwórz stronę dla kancelarii przygotowaną pod Google",
      description: "SEO techniczne, schema LegalService, blog i prosty CMS.",
      primaryLabel: "Złóż zamówienie →",
    }}
    internalLinks={[
      { label: "Strona dla kliniki", href: "/strona-dla-kliniki" },
      { label: "Strona dla gabinetu stomatologicznego", href: "/strona-dla-gabinetu-stomatologicznego" },
      { label: "Strona dla restauracji", href: "/strona-dla-restauracji" },
    ]}
    showModules={true}
    showPricing={true}
  />
)

export const StronaDlaKlinikiPage = () => (
  <SEOLandingPage
    path="/strona-dla-kliniki"
    title="Strona dla kliniki medycznej | SEO lokalne, rezerwacje online, schema Healthcare"
    description="Strona dla kliniki z automatycznym SEO lokalnym, schema Healthcare i modułem rezerwacji."
    keywords="strona dla kliniki seo, strona przychodni, cms dla placowki medycznej"
    h1="Strona dla kliniki medycznej:"
    h1Accent="SEO lokalne i rezerwacje online"
    h1Sub="SEO lokalne, schema Healthcare, moduł rezerwacji."
    heroImage="/panel.webp"
    heroImageAlt="Strona dla kliniki — panel CMS"
    breadcrumb={[{ name: "Strony dla branż", href: "#" }, { name: "Strona dla kliniki", href: "/strona-dla-kliniki" }]}
    sections={[
      {
        heading: "Co wyróżnia stronę kliniki przygotowaną pod Google",
        content: "Schema Healthcare: LocalBusiness + Physician + MedicalOrganization. Godziny, adres, numer — w structured data. Blog zdrowotny: treści odpowiadające na pytania pacjentów.",
        image: "/automat.webp",
        imageAlt: "Schema Healthcare dla kliniki",
        highlights: [
          "Schema Healthcare — automatycznie",
          "Moduł rezerwacji z kalendarzem Google",
          "Blog zdrowotny bez wiedzy SEO",
        ],
      },
      {
        heading: 'Dlaczego SEO lokalne jest kluczowe dla kliniki',
        content: 'Pacjent, który szuka lekarza w Google, jest gotowy na wizytę. SEO lokalne sprawia, że Twoja klinika pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka lekarza — 24/7, bez płacenia za kliknięcia.',
        highlights: [
          "Pacjent szuka lekarza — gotowy na wizytę",
          "Widoczność 24/7, bez płacenia za kliknięcia",
          "Wyprzedzasz konkurencję w Google Maps",
          "Budujesz markę kliniki na lata",
        ],
                imageAnimation: {
          rounds: [
              {
                query: 'lekarz rodzinny Mokotów',
                yourSite: {
                  domain: 'klinika-moja-rodzina.pl',
                  title: 'Klinika Moja Rodzina — Lekarz Rodzinny Mokotów',
                  description: 'Klinika medyczna na Mokotowie. Lekarz rodzinny, pediatria, internista. Rejestracja online, krótkie terminy.',
                },
                competitors: [
                  { domain: 'przychodnia-mokotow.pl', title: 'Przychodnia Mokotów — Lekarz Rodzinny i Specjaliści', description: 'Przychodnia na Mokotowie. Lekarz rodzinny, pediatria, kardiolog, dermatolog. Rejestracja online.' },
                  { domain: 'medico-warszawa.pl', title: 'Medico Warszawa — Klinika Mokotów', description: 'Klinika medyczna w centrum Mokotowa. Lekarz rodzinny, specjaliści, diagnostyka. Krótkie terminy.' },
                ],
              },
              {
                query: 'przychodnia Mokotów',
                yourSite: {
                  domain: 'klinika-moja-rodzina.pl',
                  title: 'Klinika Moja Rodzina — Lekarz Rodzinny Mokotów',
                  description: 'Klinika medyczna na Mokotowie. Lekarz rodzinny, pediatria, internista. Rejestracja online, krótkie terminy.',
                },
                competitors: [
                  { domain: 'przychodnia-mokotow.pl', title: 'Przychodnia Mokotów — Lekarz Rodzinny i Specjaliści', description: 'Przychodnia na Mokotowie. Lekarz rodzinny, pediatria, kardiolog, dermatolog. Rejestracja online.' },
                  { domain: 'medico-warszawa.pl', title: 'Medico Warszawa — Klinika Mokotów', description: 'Klinika medyczna w centrum Mokotowa. Lekarz rodzinny, specjaliści, diagnostyka. Krótkie terminy.' },
                ],
              },
              {
                query: 'lekarz Mokotów',
                yourSite: {
                  domain: 'klinika-moja-rodzina.pl',
                  title: 'Klinika Moja Rodzina — Lekarz Rodzinny Mokotów',
                  description: 'Klinika medyczna na Mokotowie. Lekarz rodzinny, pediatria, internista. Rejestracja online, krótkie terminy.',
                },
                competitors: [
                  { domain: 'przychodnia-mokotow.pl', title: 'Przychodnia Mokotów — Lekarz Rodzinny i Specjaliści', description: 'Przychodnia na Mokotowie. Lekarz rodzinny, pediatria, kardiolog, dermatolog. Rejestracja online.' },
                  { domain: 'medico-warszawa.pl', title: 'Medico Warszawa — Klinika Mokotów', description: 'Klinika medyczna w centrum Mokotowa. Lekarz rodzinny, specjaliści, diagnostyka. Krótkie terminy.' },
                ],
              },
          ],
        },
      },
    ]}
    features={[
      { title: "Schema Healthcare", description: "Automatyczny znacznik dla placówek medycznych." },
      { title: "Moduł rezerwacji", description: "Online booking z synchronizacją kalendarza." },
      { title: "SEO lokalne", description: "Google Business Profile, NAP consistency." },
      { title: "RODO compliance", description: "Wszystkie strony prawne w cenie." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "24/7", label: "rezerwacje konsultacji" },
      { number: "69 zł", label: "miesięcznie z SEO" },
      { number: "RODO", label: "pełna zgodność w cenie" },
    ]}
    faq={[
      { q: "Czy można dodać moduł rezerwacji online?", a: "Tak. Moduł z kalendarzem Google, przypomnieniami SMS — aktywacja w dowolnym momencie." },
      { q: "Czy strona spełnia RODO?", a: "Tak. W cenie wdrożenia: polityka prywatności, klauzula RODO, strona cookies." },
    ]}
    cta={{
      title: "Stwórz stronę dla kliniki przygotowaną pod Google",
      description: "SEO techniczne, schema Healthcare, rezerwacje online.",
      primaryLabel: "Złóż zamówienie →",
    }}
    internalLinks={[
      { label: "Strona dla gabinetu stomatologicznego", href: "/strona-dla-gabinetu-stomatologicznego" },
      { label: "Strona dla prawnika", href: "/strona-dla-prawnika" },
      { label: "Strona dla restauracji", href: "/strona-dla-restauracji" },
    ]}
    showModules={true}
    showPricing={true}
  />
)

export const StronaDlaGabinetuStomatologicznegoPage = () => (
  <SEOLandingPage
    path="/strona-dla-gabinetu-stomatologicznego"
    title="Strona dla gabinetu stomatologicznego | Dental Clinic schema, rezerwacje"
    description="Strona dla gabinetu stomatologicznego z SEO technicznym, schema Dental Clinic i modułem rezerwacji."
    keywords="strona dla dentysty seo, gabinet stomatologiczny strona www"
    h1="Strona dla gabinetu stomatologicznego:"
    h1Accent="SEO lokalne i rezerwacje online"
    h1Sub="SEO lokalne, schema Dental Clinic, szybkość mobile."
    heroImage="/dentista.webp"
    heroImageAlt="Strona dla gabinetu stomatologicznego — dentysta podczas konsultacji w gabinecie"
    breadcrumb={[{ name: "Strony dla branż", href: "#" }, { name: "Strona dla dentysty", href: "/strona-dla-gabinetu-stomatologicznego" }]}
    sections={[
      {
        heading: "Co wyróżnia stronę gabinetu przygotowaną pod Google",
        content: "Schema DentalClinic: godziny otwarcia, średnia ocena i zakres cen w wynikach wyszukiwania. Galeria przed/po buduje zaufanie. Mobile-first: pacjent przegląda stronę przed wizytą.",
        image: "/dentistaweb.webp",
        imageAlt: "Schema DentalClinic dla gabinetu stomatologicznego",
        highlights: [
          "Schema DentalClinic — automatycznie",
          "Galeria przed/po w cenie",
          "Moduł rezerwacji z przypomnieniami",
        ],
      },
      {
        heading: 'Dlaczego SEO lokalne jest kluczowe dla gabinetu stomatologicznego',
        content: 'Pacjent, który szuka dentysty w Google, jest gotowy na wizytę. SEO lokalne sprawia, że Twój gabinet pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka dentysty — 24/7, bez płacenia za kliknięcia.',
        highlights: [
          "Pacjent szuka dentysty — gotowy na wizytę",
          "Widoczność 24/7, bez płacenia za kliknięcia",
          "Wyprzedzasz konkurencję w Google Maps",
          "Budujesz markę gabinetu na lata",
        ],
                imageAnimation: {
          rounds: [
              {
                query: 'dentysta Mokotów',
                yourSite: {
                  domain: 'moj-dentysta-mokotow.pl',
                  title: 'Mój Dentysta — Gabinet Stomatologiczny Mokotów',
                  description: 'Gabinet stomatologiczny na Mokotowie. Stomatologia zachowawcza, protetyka, ortodoncja, implanty. Bezpłatna konsultacja.',
                },
                competitors: [
                  { domain: 'dentysta-w-mokotowie.pl', title: 'Dentysta Mokotów — Gabinet Stomatologiczny 24h', description: 'Gabinet stomatologiczny w dzielnicy Mokotów. Stomatologia zachowawcza, protetyka, ortodoncja. Dyżur 24h.' },
                  { domain: 'mokotow-dental.pl', title: 'Mokotów Dental Clinic — Stomatolog Warszawa', description: 'Klinika dentystyczna w centrum Mokotowa. Pełen zakres usług: od profilaktyki po chirurgię.' },
                ],
              },
              {
                query: 'stomatolog Mokotów',
                yourSite: {
                  domain: 'moj-dentysta-mokotow.pl',
                  title: 'Mój Dentysta — Gabinet Stomatologiczny Mokotów',
                  description: 'Gabinet stomatologiczny na Mokotowie. Stomatologia zachowawcza, protetyka, ortodoncja, implanty. Bezpłatna konsultacja.',
                },
                competitors: [
                  { domain: 'dentysta-w-mokotowie.pl', title: 'Dentysta Mokotów — Gabinet Stomatologiczny 24h', description: 'Gabinet stomatologiczny w dzielnicy Mokotów. Stomatologia zachowawcza, protetyka, ortodoncja. Dyżur 24h.' },
                  { domain: 'mokotow-dental.pl', title: 'Mokotów Dental Clinic — Stomatolog Warszawa', description: 'Klinika dentystyczna w centrum Mokotowa. Pełen zakres usług: od profilaktyki po chirurgię.' },
                ],
              },
              {
                query: 'gabinet dentystyczny Mokotów',
                yourSite: {
                  domain: 'moj-dentysta-mokotow.pl',
                  title: 'Mój Dentysta — Gabinet Stomatologiczny Mokotów',
                  description: 'Gabinet stomatologiczny na Mokotowie. Stomatologia zachowawcza, protetyka, ortodoncja, implanty. Bezpłatna konsultacja.',
                },
                competitors: [
                  { domain: 'dentysta-w-mokotowie.pl', title: 'Dentysta Mokotów — Gabinet Stomatologiczny 24h', description: 'Gabinet stomatologiczny w dzielnicy Mokotów. Stomatologia zachowawcza, protetyka, ortodoncja. Dyżur 24h.' },
                  { domain: 'mokotow-dental.pl', title: 'Mokotów Dental Clinic — Stomatolog Warszawa', description: 'Klinika dentystyczna w centrum Mokotowa. Pełen zakres usług: od profilaktyki po chirurgię.' },
                ],
              },
          ],
        },
      },
    ]}
    features={[
      { title: "Schema DentalClinic", description: "Automatyczny znacznik dla gabinetów stomatologicznych." },
      { title: "Galeria przed/po", description: "Portfolio budujące zaufanie." },
      { title: "Moduł rezerwacji", description: "Online booking z przypomnieniami." },
      { title: "RODO compliance", description: "Wszystkie strony prawne w cenie." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "24/7", label: "rezerwacje konsultacji" },
      { number: "69 zł", label: "miesięcznie z SEO" },
      { number: "RODO", label: "pełna zgodność w cenie" },
    ]}
    faq={[
      { q: "Czy mogę dodawać galerie zdjęć?", a: "Tak. CMS pozwala dodawać zdjęcia bez wiedzy technicznej." },
      { q: "Czy strona spełnia RODO?", a: "Tak. W cenie: polityka prywatności, klauzula RODO, strona cookies." },
    ]}
    cta={{
      title: "Stwórz stronę dla gabinetu przygotowaną pod Google",
      description: "SEO techniczne, schema Dental Clinic, rezerwacje online.",
      primaryLabel: "Złóż zamówienie →",
    }}
    internalLinks={[
      { label: "Strona dla kliniki", href: "/strona-dla-kliniki" },
      { label: "Strona dla prawnika", href: "/strona-dla-prawnika" },
      { label: "Strona dla restauracji", href: "/strona-dla-restauracji" },
    ]}
    showModules={true}
    showPricing={true}
  />
)

export const StronaDlaRestauracjiPage = () => (
  <SEOLandingPage
    path="/strona-dla-restauracji"
    title="Strona dla restauracji | Menu cyfrowe QR, SEO lokalne, rezerwacje online — gotowa w 5 dni"
    description="Strona dla restauracji, kawiarni i bistro z menu cyfrowym QR, SEO lokalnym, schema Restaurant, rezerwacjami online i opiniami Google. Od 1500 zł, bez umowy."
    keywords="strona dla restauracji, strona dla kawiarni, strona dla bistro, menu cyfrowe, menu qr, rezerwacje online, strona dla gastronomii, wizytówka restauracji"
    h1="Strona dla restauracji:"
    h1Accent="menu QR i rezerwacje bez pośredników"
    h1Sub="Menu cyfrowe z alergenami, opinie Google i stoliki rezerwowane online — gość wybiera Ciebie, nie konkurencję."
    heroImage="/restaurante.webp"
    heroImageAlt="Strona dla restauracji — wnętrze restauracji z menu cyfrowym"
    breadcrumb={[{ name: "Strony dla branż", href: "#" }, { name: "Strona dla restauracji", href: "/strona-dla-restauracji" }]}
    sections={[
      {
        heading: "Co wyróżnia stronę restauracji przygotowaną pod Google",
        content: "Schema Restaurant: godziny otwarcia, oceny i ceny w wynikach wyszukiwania. Menu cyfrowe: QR na stolik z cenami i alergenami. Rezerwacje online bez pośredników.",
        image: "/restaurante web.webp",
        imageAlt: "Schema Restaurant i menu QR dla restauracji",
        highlights: [
          "Schema Restaurant — w wynikach Google",
          "Menu QR na stolik",
          "Rezerwacje bez pośredników",
        ],
      },
      {
        heading: 'Dlaczego SEO lokalne jest kluczowe dla restauracji',
        content: 'Gość, który szuka restauracji w Google, jest gotowy zarezerwować stolik. SEO lokalne sprawia, że Twoja restauracja pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka miejsca na obiad — 24/7, bez płacenia za kliknięcia.',
        highlights: [
          "Gość szuka restauracji — gotowy zarezerwować",
          "Widoczność 24/7, bez płacenia za kliknięcia",
          "Wyprzedzasz konkurencję w Google Maps",
          "Budujesz markę restauracji na lata",
        ],
                imageAnimation: {
          rounds: [
              {
                query: 'restauracja włoska Kraków',
                yourSite: {
                  domain: 'trattoria-bella-krakow.pl',
                  title: 'Trattoria Bella — Restauracja Włoska Kraków Kazimierz',
                  description: 'Autentyczna kuchnia włoska w sercu Kazimierza. Pizza z pieca opalanego drewnem, świeże makarony. Rezerwacja online. 400+ opinii.',
                },
                competitors: [
                  { domain: 'pizzeria-roma-krakow.pl', title: 'Pizzeria Roma — Kraków Centrum', description: 'Pizzeria w centrum Krakowa. Pizza neapolitańska z pieca opalanego drewnem, świeże składniki. Dostawa i rezerwacja.' },
                  { domain: 'bistro-wloskie-krakow.pl', title: 'Bistro Włoskie Kraków — Kuchnia Półwyspu', description: 'Bistro z autentyczną kuchnią włoską w Krakowie. Makarony robione na miejscu, desery włoskie. Rezerwacja online.' },
                ],
              },
              {
                query: 'pizzeria Kraków',
                yourSite: {
                  domain: 'trattoria-bella-krakow.pl',
                  title: 'Trattoria Bella — Restauracja Włoska Kraków Kazimierz',
                  description: 'Autentyczna kuchnia włoska w sercu Kazimierza. Pizza z pieca opalanego drewnem, świeże makarony. Rezerwacja online. 400+ opinii.',
                },
                competitors: [
                  { domain: 'pizzeria-roma-krakow.pl', title: 'Pizzeria Roma — Kraków Centrum', description: 'Pizzeria w centrum Krakowa. Pizza neapolitańska z pieca opalanego drewnem, świeże składniki. Dostawa i rezerwacja.' },
                  { domain: 'bistro-wloskie-krakow.pl', title: 'Bistro Włoskie Kraków — Kuchnia Półwyspu', description: 'Bistro z autentyczną kuchnią włoską w Krakowie. Makarony robione na miejscu, desery włoskie. Rezerwacja online.' },
                ],
              },
              {
                query: 'kuchnia włoska Kraków',
                yourSite: {
                  domain: 'trattoria-bella-krakow.pl',
                  title: 'Trattoria Bella — Restauracja Włoska Kraków Kazimierz',
                  description: 'Autentyczna kuchnia włoska w sercu Kazimierza. Pizza z pieca opalanego drewnem, świeże makarony. Rezerwacja online. 400+ opinii.',
                },
                competitors: [
                  { domain: 'pizzeria-roma-krakow.pl', title: 'Pizzeria Roma — Kraków Centrum', description: 'Pizzeria w centrum Krakowa. Pizza neapolitańska z pieca opalanego drewnem, świeże składniki. Dostawa i rezerwacja.' },
                  { domain: 'bistro-wloskie-krakow.pl', title: 'Bistro Włoskie Kraków — Kuchnia Półwyspu', description: 'Bistro z autentyczną kuchnią włoską w Krakowie. Makarony robione na miejscu, desery włoskie. Rezerwacja online.' },
                ],
              },
          ],
        },
      },
    ]}
    features={[
      { title: "Schema Restaurant", description: "Godziny, oceny, ceny — w wynikach Google." },
      { title: "Menu cyfrowe", description: "QR na stolik z cenami i alergenami." },
      { title: "SEO lokalne", description: "Google Business Profile, NAP, mapa." },
      { title: "Rezerwacje online", description: "Bez pośredników, z przypomnieniami." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "QR", label: "menu cyfrowe na stolik" },
      { number: "69 zł", label: "miesięcznie z SEO" },
      { number: "0 zł", label: "prowizji od rezerwacji" },
    ]}
    faq={[
      { q: "Czy mogę samodzielnie aktualizować menu?", a: "Tak. Zmieniasz ceny i opisy bez wiedzy technicznej." },
      { q: "Czy menu QR jest w cenie?", a: "Tak. Generujemy kod QR do pobrania." },
    ]}
    cta={{
      title: "Stwórz stronę dla restauracji przygotowaną pod Google",
      description: "Menu cyfrowe, SEO techniczne, schema Restaurant, rezerwacje.",
      primaryLabel: "Złóż zamówienie →",
    }}
    internalLinks={[
      { label: "Strona dla gabinetu stomatologicznego", href: "/strona-dla-gabinetu-stomatologicznego" },
      { label: "Strona dla kliniki", href: "/strona-dla-kliniki" },
      { label: "Strona dla prawnika", href: "/strona-dla-prawnika" },
    ]}
    showModules={true}
    showPricing={true}
  />
)
