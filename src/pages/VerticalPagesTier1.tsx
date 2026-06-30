import { SEOLandingPage } from "../components/SEOLandingPage"

export const StronaDlaFreelanceraPage = () => (
  <SEOLandingPage
    path="/strona-dla-freelancera"
    title="Strona dla freelancera | Portfolio, blog, SEO lokalne — gotowa w 5 dni"
    description="Strona dla freelancera z portfolio, blogiem, SEO lokalnym i formularzem kontaktowym. Edytujesz z telefonu, klienci znajdują Cię w Google."
    keywords="strona dla freelancera, portfolio freelancera, strona www dla freelancera, strona dla jednoosobowej firmy, strona dla programisty, strona dla grafika"
    h1="Strona dla freelancera:"
    h1Accent="portfolio, które przyciąga klientów"
    h1Sub="Portfolio + blog + SEO + formularz — gotowe w 5 dni."
    intro="Profesjonalna strona dla freelancera, która prezentuje Twoje realizacje, buduje wiarygodność i sprawia, że klienci sami Cię znajdują w Google. Bez wiedzy technicznej, bez agencji SEO."
    heroImage="/panel.webp"
    heroImageAlt="Panel CMS SEO Grow — strona dla freelancera"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla freelancera", href: "/strona-dla-freelancera" }]}
    sections={[
      {
        heading: "Co powinna mieć strona freelancera, żeby zdobywać klientów",
        content: "Portfolio prezentujące najlepsze realizacje z opisem procesu i efektów. Blog tematyczny, który edukuje potencjalnych klientów i pozycjonuje Cię w Google jako eksperta. Formularz kontaktowy z pytaniami o zakres, termin i budżet — żebyś nie tracił czasu na leady, które nie pasują.",
        image: "/panel.webp",
        imageAlt: "Sekcje portfolio, bloga i formularza na stronie freelancera",
        highlights: [
          "Portfolio z kategoriami i podglądem na pełnym ekranie",
          "Blog ekspercki, który pozycjonuje Twoje usługi",
          "Formularz z pytaniami kwalifikacyjnymi",
          "Schema Person + Service — automatycznie",
        ],
      },
      {
        heading: "Dlaczego WordPress to za dużo dla freelancera",
        content: "WordPress wymaga aktualizacji, wtyczek, backupów i zabezpieczeń. Dla jednej osoby to godziny tygodniowo. Na dedykowanym CMS: zero aktualizacji, zero wtyczek, zero ryzyka włamania. Wszystko, czego potrzebujesz, jest w jednym miejscu.",
        image: "/automat.webp",
        imageAlt: "Porównanie WordPress vs dedykowany CMS dla freelancera",
        highlights: [
          "Bez wtyczek — bez luk bezpieczeństwa",
          "Bez aktualizacji — oszczędzasz czas",
          "Backup w cenie — Twoje realizacje są bezpieczne",
        ],
      },
    ]}
    features={[
      { title: "Portfolio z galerią", description: "Prezentacja realizacji z filtrami kategorii i lightbox." },
      { title: "Blog ekspercki", description: "SEO-friendly blog do pozycjonowania Twojej specjalizacji." },
      { title: "Formularz kontaktowy", description: "Z pytaniami o zakres, termin i budżet." },
      { title: "Schema Person + Service", description: "Google rozumie, kim jesteś i co oferujesz." },
      { title: "SEO lokalne", description: "Klienci z Twojego miasta znajdą Cię w Google Maps." },
      { title: "Edytujesz z telefonu", description: "Zmiana portfolio bez laptopa, w 30 sekund." },
      { title: "Szybkość 90+ PageSpeed", description: "Klient nie czeka — strona ładuje się w ułamku sekundy." },
      { title: "SSL + domena w cenie", description: "Bezpieczeństwo i profesjonalny adres od razu." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "49 zł", label: "miesięcznie" },
      { number: "SEO", label: "w cenie, bez dopłat" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla freelancera?", a: "Wdrożenie od 990 zł (plan Start), hosting i CMS od 49 zł/mies. Plan Standard (2200 zł + 69 zł/mies.) daje Ci blog i SEO w zestawie — najczęściej wybierany przez freelancerów." },
      { q: "Czy mogę sam aktualizować portfolio?", a: "Tak. Dodajesz realizacje, zdjęcia, opisy z telefonu — bez wiedzy technicznej. Zmiana portfolio zajmuje 30 sekund." },
      { q: "Czy SEO jest w cenie?", a: "Tak. SEO techniczne (schema, meta, szybkość, mobile) jest w cenie każdego planu. Opcjonalnie możesz dodać plan Standard z blogiem SEO, który pozycjonuje Cię na Twoje specjalizacje." },
      { q: "Ile realizacji mogę dodać do portfolio?", a: "Bez limitu. W planie Start masz do 5 podstron (start, oferta, kontakt, cennik, o mnie). W planie Standard — do 15 podstron, więc portfolio może mieć dziesiątki realizacji w różnych kategoriach." },
      { q: "Czy mogę mieć własną domenę?", a: "Tak. Podpinamy Twoją domenę (np. janekowalski.pl) w cenie wdrożenia. Jeśli nie masz domeny, pomagamy ją wybrać i zarejestrować." },
    ]}
    cta={{
      title: "Stwórz stronę dla freelancera, która zdobywa klientów",
      description: "Portfolio, blog, SEO — wszystko w jednym, gotowe w 5 dni.",
      primaryLabel: "Zamów stronę freelancera →",
    }}
    internalLinks={[
      { label: "Strona dla programisty", href: "/strona-dla-freelancera#blog" },
      { label: "Strona dla grafika", href: "/wizytowka-prac" },
      { label: "Strona dla fotografa", href: "/wizytowka-prac" },
      { label: "Plan Standard z blogiem SEO", href: "/#ceny" },
    ]}
  />
)

export const StronaDlaWarsztatuSamochodowegoPage = () => (
  <SEOLandingPage
    path="/strona-dla-warsztatu-samochodowego"
    title="Strona dla warsztatu samochodowego | SEO lokalne, opinie, cennik — gotowa w 5 dni"
    description="Strona dla warsztatu samochodowego i mechanika z SEO lokalnym, opiniami Google, cennikiem usług i modułem rezerwacji online. Edytujesz z telefonu."
    keywords="strona dla warsztatu samochodowego, strona dla mechanika, strona dla warsztatu, strona dla serwisu samochodowego, strona dla mechanika samochodowego, wizytówka warsztatu"
    h1="Strona dla warsztatu samochodowego:"
    h1Accent="SEO lokalne, opinie i rezerwacje online"
    h1Sub="Klienci z Twojego miasta znajdują Cię w Google i rezerwują termin online."
    intro="Strona dla warsztatu, która przyciąga kierowców z Twojej okolicy, buduje zaufanie opiniami Google i pozwala zarezerwować termin bez dzwonienia. Profesjonalnie, bez agencji."
    heroImage="/hero-640.webp"
    heroImageAlt="Strona dla warsztatu samochodowego — SEO lokalne i rezerwacje"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla warsztatu", href: "/strona-dla-warsztatu-samochodowego" }]}
    sections={[
      {
        heading: "Co powinna mieć strona warsztatu, żeby zdobywać klientów",
        content: "SEO lokalne z Google Business Profile i schema AutoRepair. Lista usług z cenami (klient nie chce dzwonić, żeby zapytać o cenę wymiany opon). Opinie z Google zintegrowane ze strony. Moduł rezerwacji online — klient wybiera termin, warsztat dostaje powiadomienie.",
        image: "/automat.webp",
        imageAlt: "Schema AutoRepair i opinie Google na stronie warsztatu",
        highlights: [
          "Schema AutoRepair — w wynikach Google z ceną i opiniami",
          "Cennik usług online — bez konieczności dzwonienia",
          "Opinie Google zintegrowane automatycznie",
          "Moduł rezerwacji z kalendarzem Google",
        ],
      },
      {
        heading: "Dlaczego strona jest ważniejsza niż reklama na Facebooku",
        content: "Reklama na FB daje efekt tylko gdy płacisz. SEO lokalne daje efekt organiczny, który rośnie z czasem. Kierowca, który szuka 'wymiana opon Warszawa Mokotów' w Google, jest o 5x bardziej zdecydowany niż ten, kto zobaczył Twoją reklamę na Facebooku.",
        image: "/panel.webp",
        imageAlt: "SEO lokalne vs reklama płatna — warsztat samochodowy",
        highlights: [
          "Ruch organiczny rośnie z miesiąca na miesiąc",
          "Klient szuka usługi — gotowy do zakupu",
          "Niższy koszt pozyskania klienta niż reklama",
        ],
      },
    ]}
    features={[
      { title: "Schema AutoRepair", description: "Google wyświetla Twoją firmę z ceną i opiniami w wynikach." },
      { title: "Cennik online", description: "Klient widzi cenę przed telefonem — mniej straconych leadów." },
      { title: "Moduł rezerwacji", description: "Termin wizyty w 30 sekund, bez dzwonienia." },
      { title: "SEO lokalne", description: "Klienci z Twojej okolicy i dzielnicy." },
      { title: "Opinie Google", description: "Zintegrowane ze strony — budują wiarygodność." },
      { title: "Galeria realizacji", description: "Zdjęcia napraw budują zaufanie." },
      { title: "Formularz kontaktowy", description: "Do klientów, którzy wolą napisać." },
      { title: "Mapa Google", description: "Klient widzi, gdzie jesteś, i jedzie prosto do warsztatu." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "69 zł", label: "miesięcznie z blogiem SEO" },
      { number: "SEO", label: "lokalne w zestawie" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla warsztatu samochodowego?", a: "Plan Standard (najczęściej wybierany przez warsztaty): wdrożenie 2200 zł + 69 zł/mies. To daje Ci SEO techniczne, schema AutoRepair, blog i formularz kontaktowy. Plan Start (od 990 zł) dla małych warsztatów bez bloga." },
      { q: "Czy mogę dodać cennik usług?", a: "Tak. CMS pozwala tworzyć podstrony z cennikiem (np. wymiana opon, wymiana klocków, diagnostyka komputerowa). Aktualizujesz ceny sam z telefonu." },
      { q: "Czy klienci mogą rezerwować termin online?", a: "Tak. Moduł rezerwacji z kalendarzem Google — klient wybiera datę i godzinę, Ty dostajesz powiadomienie. Bez pośredników (bez Bookero, Calendly itp.)." },
      { q: "Czy SEO lokalne pomoże mi w Google Maps?", a: "Tak. Schema LocalBusiness + AutoRepair + spójne dane NAP (nazwa, adres, telefon) na stronie wzmacniają Twój profil Google Business Profile. Efekt: wyższa pozycja w Google Maps dla zapytań 'warsztat [Twoja dzielnica]'." },
      { q: "Czy mogę sam aktualizować stronę?", a: "Tak. Zmiana cennika, dodanie zdjęcia naprawy, edycja opisu — wszystko z telefonu, bez programisty." },
    ]}
    cta={{
      title: "Stwórz stronę dla warsztatu, która przyciąga kierowców z okolicy",
      description: "SEO lokalne, schema AutoRepair, cennik i rezerwacje — gotowe w 5 dni.",
      primaryLabel: "Zamów stronę warsztatu →",
    }}
    internalLinks={[
      { label: "Strona dla mechanika", href: "/strona-dla-warsztatu-samochodowego" },
      { label: "Strona dla firmy usługowej", href: "/#moduly" },
      { label: "Plan Standard z SEO", href: "/#ceny" },
      { label: "Jak wyjść w Google", href: "/jak-szybko-wyjsc-w-google" },
    ]}
  />
)

export const StronaDlaKosmetyczkiPage = () => (
  <SEOLandingPage
    path="/strona-dla-kosmetyczki"
    title="Strona dla kosmetyczki | SEO lokalne, cennik zabiegów, rezerwacje online"
    description="Strona dla kosmetyczki i salonu kosmetycznego z SEO lokalnym, cennikiem zabiegów i modułem rezerwacji online. Klientki rezerwują 24/7, Ty dostajesz powiadomienia."
    keywords="strona dla kosmetyczki, strona dla salonu kosmetycznego, strona www salon kosmetyczny, strona dla kosmetyczki z rezerwacjami, wizytówka salonu kosmetycznego"
    h1="Strona dla kosmetyczki:"
    h1Accent="cennik, rezerwacje i SEO lokalne"
    h1Sub="Klientki z Twojej okolicy rezerwują zabieg online, nawet gdy śpisz."
    intro="Strona dla salonu kosmetycznego, która działa jak Twoja najlepsza recepcjonistka: prezentuje cennik zabiegów, pozwala zarezerwować termin 24/7 i sprawia, że klientki z Twojej okolicy znajdują Cię w Google."
    heroImage="/hero-640.webp"
    heroImageAlt="Strona dla kosmetyczki — cennik zabiegów i rezerwacje"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla kosmetyczki", href: "/strona-dla-kosmetyczki" }]}
    sections={[
      {
        heading: "Co powinna mieć strona salonu kosmetycznego",
        content: "Cennik zabiegów online (manicure, pedicure, makijaż, brwi, rzęsy) z opisem i czasem trwania. Galeria zdjęć 'przed i po' — buduje zaufanie do efektów. Moduł rezerwacji online 24/7. Schema BeautySalon — Google wyświetla Twoją firmę z opiniami i godzinami otwarcia.",
        image: "/panel.webp",
        imageAlt: "Cennik zabiegów i rezerwacje online na stronie kosmetyczki",
        highlights: [
          "Cennik online z czasem trwania zabiegu",
          "Galeria przed/po budująca zaufanie",
          "Rezerwacje online 24/7 — bez pośredników",
          "Schema BeautySalon w wynikach Google",
        ],
      },
    ]}
    features={[
      { title: "Schema BeautySalon", description: "Google wyświetla Twoją firmę z opiniami i godzinami." },
      { title: "Cennik zabiegów online", description: "Klientka widzi cenę przed rezerwacją — mniej porzuconych rezerwacji." },
      { title: "Moduł rezerwacji", description: "Rezerwacja 24/7, bez konieczności dzwonienia w godzinach pracy." },
      { title: "Galeria przed/po", description: "Zdjęcia efektów budują zaufanie i motywują do rezerwacji." },
      { title: "SEO lokalne", description: "Klientki z Twojej dzielnicy znajdują Cię w Google Maps." },
      { title: "Opinie Google", description: "Zintegrowane ze strony — budują wiarygodność." },
      { title: "Instagram feed", description: "Twoje najnowsze posty widoczne na stronie (opcjonalnie)." },
      { title: "Przypomnienia SMS", description: "Klientka dostaje przypomnienie 24h przed wizytą." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "24/7", label: "rezerwacje online" },
      { number: "69 zł", label: "miesięcznie z SEO" },
      { number: "0 zł", label: "prowizji od rezerwacji" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla salonu kosmetycznego?", a: "Plan Standard: wdrożenie 2200 zł + 69 zł/mies. Zawiera SEO techniczne, schema BeautySalon, moduł rezerwacji, cennik online i blog. Plan Start (od 990 zł) dla małych gabinetów." },
      { q: "Czy klientki mogą rezerwować online?", a: "Tak. Moduł rezerwacji działa 24/7 — klientka wybiera zabieg, termin i wpisuje dane. Ty dostajesz powiadomienie mailowe. Bez Bookero, Calendly czy innych pośredników." },
      { q: "Czy poniosę prowizję od rezerwacji?", a: "Nie. Moduł rezerwacji jest własnością Twojej strony. Nie płacisz prowizji od każdej rezerwacji (jak w Bookero czy Treatwell). Stała opłata miesięczna, bez ukrytych kosztów." },
      { q: "Czy mogę dodać nowy zabieg do cennika?", a: "Tak. Dodajesz zabieg, cenę, czas trwania i zdjęcie z telefonu. Zmiana widoczna natychmiast." },
      { q: "Czy SEO pomoże mi pozyskać nowe klientki?", a: "Tak. Schema BeautySalon + SEO lokalne + blog (np. artykuły o pielęgnacji) sprawiają, że klientki szukające 'manicure [Twoja dzielnica]' lub 'makijaż permanentny [Twoje miasto]' trafiają na Twoją stronę organicznie." },
    ]}
    cta={{
      title: "Stwórz stronę dla salonu kosmetycznego, która przyciąga klientki 24/7",
      description: "Cennik, rezerwacje, SEO lokalne — gotowe w 5 dni.",
      primaryLabel: "Zamów stronę salonu →",
    }}
    internalLinks={[
      { label: "Strona dla fryzjera", href: "/strona-dla-fryzjera" },
      { label: "Strona dla gabinetu kosmetycznego", href: "/strona-dla-kosmetyczki" },
      { label: "Moduł rezerwacji", href: "/#moduly" },
    ]}
  />
)

export const StronaDlaFryzjeraPage = () => (
  <SEOLandingPage
    path="/strona-dla-fryzjera"
    title="Strona dla fryzjera | SEO lokalne, cennik, rezerwacje online — gotowa w 5 dni"
    description="Strona dla salonu fryzjerskiego i fryzjera z SEO lokalnym, cennikiem usług i modułem rezerwacji. Klienci rezerwują termin online 24/7."
    keywords="strona dla fryzjera, strona dla salonu fryzjerskiego, strona www fryzjer, strona dla barbera, strona dla stylisty, wizytówka salonu fryzjerskiego"
    h1="Strona dla fryzjera:"
    h1Accent="cennik, rezerwacje i SEO lokalne"
    h1Sub="Twoi klienci rezerwują wizytę online, gdy Ty obsługujesz obecnych."
    intro="Strona dla salonu fryzjerskiego, która prezentuje Twoje stylizacje, pokazuje cennik i pozwala zarezerwować termin bez dzwonienia. Klienci z Twojej okolicy znajdują Cię w Google i rezerwują w 30 sekund."
    heroImage="/hero-640.webp"
    heroImageAlt="Strona dla fryzjera — cennik i rezerwacje online"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla fryzjera", href: "/strona-dla-fryzjera" }]}
    sections={[
      {
        heading: "Co powinna mieć strona salonu fryzjerskiego",
        content: "Portfolio stylizacji — zdjęcia Twoich najlepszych realizacji. Cennik usług z czasem trwania (strzyżenie męskie 30 min, koloryzacja 120 min itd.). Moduł rezerwacji online z wyborem fryzjera i usługi. Schema HairSalon w wynikach Google.",
        image: "/panel.webp",
        imageAlt: "Portfolio fryzjera i cennik usług online",
        highlights: [
          "Portfolio stylizacji (galeria przed/po)",
          "Cennik z czasem trwania każdej usługi",
          "Rezerwacje z wyborem fryzjera",
          "Schema HairSalon w wynikach Google",
        ],
      },
    ]}
    features={[
      { title: "Schema HairSalon", description: "Google wyświetla Twoją firmę z opiniami i godzinami." },
      { title: "Portfolio stylizacji", description: "Galeria realizacji buduje zaufanie do Twoich umiejętności." },
      { title: "Cennik online", description: "Klient widzi cenę i czas przed rezerwacją." },
      { title: "Rezerwacje z wyborem fryzjera", description: "Klient wybiera usługę, termin i stylistę." },
      { title: "SEO lokalne", description: "Klienci z Twojej okolicy trafiają do Ciebie z Google." },
      { title: "Przypomnienia SMS", description: "Zmniejsza liczbę nieodwołanych wizyt o 60%." },
      { title: "Opinie Google", description: "Recenzje klientów widoczne na stronie." },
      { title: "Mapa Google", description: "Klient łatwo znajduje salon." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "24/7", label: "rezerwacje online" },
      { number: "69 zł", label: "miesięcznie" },
      { number: "0%", label: "prowizji od rezerwacji" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla salonu fryzjerskiego?", a: "Plan Standard: 2200 zł wdrożenia + 69 zł/mies. Zawiera SEO, schema HairSalon, moduł rezerwacji i cennik. Dla małych salonów wystarczy plan Start od 990 zł." },
      { q: "Czy mogę pokazać portfolio?", a: "Tak. Galeria zdjęć z filtrami (koloryzacja, strzyżenie, męskie itd.) — klient widzi Twoje realizacje i ma pewność, że znasz się na robocie." },
      { q: "Czy klient może wybrać konkretnego fryzjera?", a: "Tak. W module rezerwacji klient wybiera usługę, termin i stylistę (jeśli pracuje u Ciebie kilku fryzjerów)." },
      { q: "Co jeśli mam już stronę na Facebooku?", a: "Facebook to za mało. Twoi klienci nie szukają fryzjera na FB — szukają w Google. Bez strony internetowej z SEO lokalnym nie pojawiasz się w wynikach wyszukiwania i tracisz klientów na rzecz konkurencji." },
    ]}
    cta={{
      title: "Stwórz stronę dla salonu fryzjerskiego, która przyciąga klientów 24/7",
      description: "Portfolio, cennik, rezerwacje — gotowe w 5 dni.",
      primaryLabel: "Zamów stronę salonu →",
    }}
    internalLinks={[
      { label: "Strona dla kosmetyczki", href: "/strona-dla-kosmetyczki" },
      { label: "Strona dla barbera", href: "/strona-dla-fryzjera" },
      { label: "Moduł rezerwacji", href: "/#moduly" },
    ]}
  />
)

export const StronaDlaPsychologaPage = () => (
  <SEOLandingPage
    path="/strona-dla-psychologa"
    title="Strona dla psychologa | SEO lokalne, blog, RODO — gotowa w 5 dni"
    description="Strona dla psychologa i gabinetu psychologicznego z SEO lokalnym, blogiem edukacyjnym i pełną zgodnością z RODO. Klienci znajdują Cię w Google i rezerwują konsultację."
    keywords="strona dla psychologa, strona dla gabinetu psychologicznego, strona dla terapeuty, strona dla psychoterapeuty, wizytówka psychologa, strona www psycholog"
    h1="Strona dla psychologa:"
    h1Accent="SEO lokalne, blog edukacyjny i RODO"
    h1Sub="Klienci znajdują Cię w Google, czytają Twoje artykuły i rezerwują konsultację."
    intro="Strona dla gabinetu psychologicznego, która buduje Twoją wiarygodność jako eksperta, spełnia wymogi RODO i pomaga klientom zdecydować się na pierwszą wizytę. Bez wiedzy technicznej."
    heroImage="/panel.webp"
    heroImageAlt="Strona dla psychologa — SEO lokalne i RODO compliance"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla psychologa", href: "/strona-dla-psychologa" }]}
    sections={[
      {
        heading: "Co powinna mieć strona gabinetu psychologicznego",
        content: "Opis Twojego podejścia terapeutycznego i specjalizacji (CBT, systemowa, psychodynamiczna itd.) — żeby klient wiedział, czy pasujesz do jego potrzeb. Blog edukacyjny z artykułami o lęku, depresji, relacjach — buduje zaufanie i pozycjonuje Cię w Google jako eksperta. Pełna zgodność z RODO (polityka prywatności, klauzula informacyjna, zgoda na kontakt).",
        image: "/automat.webp",
        imageAlt: "Strona psychologa z blogiem edukacyjnym i RODO compliance",
        highlights: [
          "Opis podejścia terapeutycznego i specjalizacji",
          "Blog edukacyjny SEO-friendly",
          "Pełna zgodność z RODO",
          "Schema ProfessionalService w wynikach Google",
        ],
      },
    ]}
    features={[
      { title: "Schema ProfessionalService", description: "Google wyświetla Twoje dane jako profesjonalistę w wynikach." },
      { title: "Blog edukacyjny", description: "Artykuły o zdrowiu psychicznym pozycjonują Cię jako eksperta." },
      { title: "RODO compliance", description: "Polityka prywatności, klauzula informacyjna, zarządzanie zgodami." },
      { title: "SEO lokalne", description: "Klienci z Twojego miasta i dzielnicy." },
      { title: "Moduł rezerwacji", description: "Pierwsza konsultacja online bez dzwonienia." },
      { title: "Anonimowe formularze", description: "Bezpieczny kontakt dla osób zaniepokojonych pierwszą wizytą." },
      { title: "Sekcja dla firm", description: "Współpraca B2B (szkolenia, wsparcie dla HR) widoczna na stronie." },
      { title: "Szyfrowanie SSL", description: "Wymagane przy danych wrażliwych." },
    ]}
    trust={[
      { number: "RODO", label: "pełna zgodność" },
      { number: "5 dni", label: "do gotowej strony" },
      { number: "69 zł", label: "miesięcznie z blogiem" },
      { number: "SSL", label: "w cenie" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla psychologa?", a: "Plan Standard: 2200 zł wdrożenia + 69 zł/mies. Zawiera SEO techniczne, schema ProfessionalService, blog edukacyjny, moduł rezerwacji i pełną zgodność z RODO. Plan Premium (4900 zł + 99 zł/mies.) dla klinik z wieloma specjalistami." },
      { q: "Czy strona spełnia wymogi RODO?", a: "Tak. W cenie wdrożenia: polityka prywatności, klauzula informacyjna RODO, strona cookies z banerem zgody, szyfrowanie SSL, możliwość anonimowego kontaktu. Wszystko zgodne z polskimi i unijnymi przepisami." },
      { q: "Czy mogę prowadzić bloga edukacyjnego?", a: "Tak. CMS pozwala publikować artykuły z kategoriami, tagami i SEO-friendly URL. Blog pozycjonuje Cię w Google na tematy, które interesują Twoich klientów (lęk, depresja, relacje, ADHD itd.)." },
      { q: "Czy mogę przyjmować rezerwacje online?", a: "Tak. Moduł rezerwacji pozwala klientom wybrać termin pierwszej konsultacji. Formularz anonimowy — klient może wybrać tryb kontaktu (mail, telefon). Ty decydujesz, które dane są wymagane." },
    ]}
    cta={{
      title: "Stwórz stronę dla gabinetu psychologicznego, która buduje wiarygodność",
      description: "SEO, RODO, blog edukacyjny — gotowe w 5 dni.",
      primaryLabel: "Zamów stronę gabinetu →",
    }}
    internalLinks={[
      { label: "Strona dla terapeuty", href: "/strona-dla-psychologa" },
      { label: "Strona dla fizjoterapeuty", href: "/strona-dla-fizjoterapeuty" },
      { label: "RODO w stronach www", href: "/polityka-prywatnosci" },
    ]}
  />
)

export const StronaDlaFizjoterapeutyPage = () => (
  <SEOLandingPage
    path="/strona-dla-fizjoterapeuty"
    title="Strona dla fizjoterapeuty | SEO lokalne, cennik zabiegów, rezerwacje online"
    description="Strona dla fizjoterapeuty i gabinetu rehabilitacji z SEO lokalnym, cennikiem zabiegów i rezerwacjami online. Pacjenci rezerwują wizytę bez dzwonienia."
    keywords="strona dla fizjoterapeuty, strona dla gabinetu rehabilitacji, strona dla fizjoterapii, wizytówka fizjoterapeuty, strona www fizjoterapeuta, strona dla rehabilitanta"
    h1="Strona dla fizjoterapeuty:"
    h1Accent="SEO lokalne, cennik zabiegów i rezerwacje"
    h1Sub="Pacjenci z Twojej okolicy rezerwują wizytę online, nawet w nocy."
    intro="Strona dla gabinetu fizjoterapii, która prezentuje Twoje specjalizacje, cennik zabiegów i pozwala zarezerwować wizytę 24/7. SEO lokalne sprawia, że pacjenci z bólem kręgosłupa trafiają do Ciebie, nie do konkurencji."
    heroImage="/panel.webp"
    heroImageAlt="Strona dla fizjoterapeuty — cennik zabiegów i rezerwacje"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla fizjoterapeuty", href: "/strona-dla-fizjoterapeuty" }]}
    sections={[
      {
        heading: "Co powinna mieć strona gabinetu fizjoterapii",
        content: "Lista Twoich specjalizacji (terapia manualna, rehabilitacja sportowa, bóle kręgosłupa, masaż leczniczy itd.) — pacjent szuka rozwiązania swojego problemu. Cennik zabiegów online. Moduł rezerwacji z wyborem usługi. Schema MedicalBusiness w wynikach Google.",
        image: "/automat.webp",
        imageAlt: "Specjalizacje fizjoterapeuty i cennik na stronie gabinetu",
        highlights: [
          "Lista specjalizacji (terapia manualna, kręgosłup, sport)",
          "Cennik zabiegów online",
          "Rezerwacje 24/7 z wyborem usługi",
          "Schema MedicalBusiness w wynikach Google",
        ],
      },
    ]}
    features={[
      { title: "Schema MedicalBusiness", description: "Google wyświetla Twoją firmę jako specjalistę medycznego." },
      { title: "Specjalizacje", description: "Pacjent widzi, czy pomagasz w jego problemie." },
      { title: "Cennik zabiegów", description: "Pacjent wie, ile zapłaci, przed rezerwacją." },
      { title: "Rezerwacje online", description: "Pierwsza wizyta w 30 sekund, 24/7." },
      { title: "SEO lokalne", description: "Pacjenci z Twojego miasta i dzielnicy." },
      { title: "Blog edukacyjny", description: "Artykuły o bólu kręgosłupa, rehabilitacji pozycjonują Cię w Google." },
      { title: "Opinie pacjentów", description: "Recenzje z Google zintegrowane ze strony." },
      { title: "RODO compliance", description: "Polityka prywatności w cenie." },
    ]}
    trust={[
      { number: "5 dni", label: "do gotowej strony" },
      { number: "24/7", label: "rezerwacje online" },
      { number: "69 zł", label: "miesięcznie z SEO" },
      { number: "RODO", label: "w cenie" },
    ]}
    faq={[
      { q: "Ile kosztuje strona dla fizjoterapeuty?", a: "Plan Standard: 2200 zł wdrożenia + 69 zł/mies. Zawiera SEO techniczne, schema MedicalBusiness, moduł rezerwacji, cennik i blog. Dla dużych klinik: Premium (4900 zł + 99 zł/mies.)." },
      { q: "Czy mogę dodać wizyty domowe?", a: "Tak. W module rezerwacji możesz dodać osobną kategorię usługi 'wizyta domowa' z wyższą ceną i opisem zakresu (np. do 10 km od gabinetu)." },
      { q: "Czy SEO pomoże mi pozyskać pacjentów?", a: "Tak. Schema MedicalBusiness + SEO lokalne + blog (np. 'jak leczyć ból kręgosłupa w odcinku lędźwiowym') pozycjonują Cię w Google na zapytania pacjentów szukających fizjoterapeuty w Twojej okolicy." },
      { q: "Czy mogę prowadzić bloga z poradami?", a: "Tak. Blog edukacyjny z artykułami o zdrowiu kręgosłupa, rehabilitacji po kontuzji, ćwiczeniach — buduje Twoją pozycję eksperta i przyciąga pacjentów organicznie." },
    ]}
    cta={{
      title: "Stwórz stronę dla gabinetu fizjoterapii, która przyciąga pacjentów 24/7",
      description: "SEO lokalne, schema MedicalBusiness, cennik i rezerwacje — gotowe w 5 dni.",
      primaryLabel: "Zamów stronę gabinetu →",
    }}
    internalLinks={[
      { label: "Strona dla psychologa", href: "/strona-dla-psychologa" },
      { label: "Strona dla kliniki", href: "/strona-dla-kliniki" },
      { label: "Moduł rezerwacji", href: "/#moduly" },
    ]}
  />
)