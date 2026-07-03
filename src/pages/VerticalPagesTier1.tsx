import { SEOLandingPage } from "../components/SEOLandingPage"

export const StronaDlaFreelanceraPage = () => (
  <SEOLandingPage
    path="/strona-dla-freelancera"
    title="Strona dla freelancera | Portfolio, blog, SEO lokalne — gotowa w 5 dni"
    description="Strona dla freelancera z portfolio, blogiem, SEO lokalnym i formularzem kontaktowym. Edytujesz z telefonu, klienci znajdują Cię w Google."
    keywords="strona dla freelancera, portfolio freelancera, strona www dla freelancera, strona dla jednoosobowej firmy, strona dla programisty, strona dla grafika"
    h1="Strona dla freelancera:"
    h1Accent="portfolio, które przyciąga klientów"
    h1Sub="Klienci sami Cię znajdują w Google — i widzą Twoje realizacje, zanim wyślą zapytanie."
    intro="Klienci szukają freelancerów w Google, nie na Facebooku. W Polsce ponad 60% zleceń B2B zaczyna się od wyszukiwarki — bez strony z SEO lokalnym nie pojawiasz się w wynikach i przegrywasz z konkurencją, która już to ma. Twoja nowa strona pokaże portfolio, cennik i specjalizacje tak, żeby klient wybrał Ciebie, nie kogoś innego."
    heroImage="/freelancer.webp"
    heroImageAlt="Strona dla freelancera — freelancer z laptopem przy pracy"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla freelancera", href: "/strona-dla-freelancera" }]}
    sections={[
      {
        heading: "Co powinna mieć strona freelancera, żeby zdobywać klientów",
        content: "Portfolio prezentujące najlepsze realizacje z opisem procesu i efektów. Blog tematyczny, który edukuje potencjalnych klientów i pozycjonuje Cię w Google jako eksperta. Formularz kontaktowy z pytaniami o zakres, termin i budżet — żebyś nie tracił czasu na leady, które nie pasują.",
        image: "/freelancerweb.webp",
        imageAlt: "Strona freelancera — pełny widok portfolio, bloga i formularza kontaktowego",
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
imageAnimation: {
          rounds: [
            {
              query: "grafik freelancer Warszawa",
              yourSite: {
                domain: "twoje-portfolio-freelancer.pl",
                title: "Twoje Portfolio — Grafik Freelancer Warszawa",
                description: "Profesjonalny grafik freelancer z Warszawy. Identyfikacja wizualna, branding, strony internetowe. 10 lat doświadczenia.",
              },
              competitors: [
                { domain: "grafik-freelancer-waw.pl", title: "Grafik Freelancer Warszawa — Studio Graficzne", description: "Grafik freelancer w Warszawie. Logo, identyfikacja wizualna, projekty graficzne. Szybka realizacja." },
                { domain: "design-studio-warszawa.pl", title: "Design Studio Warszawa — Grafik i Branding", description: "Studio projektowe z Warszawy. Grafika, branding, projektowanie stron. Portfolio znanych marek." },
              ],
            },
            {
              query: "programista freelancer Warszawa",
              yourSite: {
                domain: "twoje-portfolio-freelancer.pl",
                title: "Twoje Portfolio — Programista Freelancer Warszawa",
                description: "Programista freelancer z Warszawy. Aplikacje webowe, React, Node.js. 8 lat doświadczenia, 50+ projektów.",
              },
              competitors: [
                { domain: "programista-freelancer-waw.pl", title: "Programista Freelancer Warszawa — Full Stack", description: "Full stack developer z Warszawy. React, Node, Python. Realizacja w 2-4 tygodnie." },
                { domain: "dev-studio-warszawa.pl", title: "Dev Studio Warszawa — Aplikacje Webowe", description: "Studio developerskie z Warszawy. Aplikacje webowe, MVP, integracje API." },
              ],
            },
            {
              query: "freelancer Warszawa",
              yourSite: {
                domain: "twoje-portfolio-freelancer.pl",
                title: "Twoje Portfolio — Freelancer Warszawa",
                description: "Freelancer z Warszawy. Grafika, programowanie, consulting IT. Elastyczne terminy, profesjonalne realizacje.",
              },
              competitors: [
                { domain: "freelancer-waw.pl", title: "Freelancer Warszawa — Usługi IT i Graficzne", description: "Freelancer z Warszawy. Strony internetowe, grafika, marketing. Pełny zakres usług." },
                { domain: "uslugi-freelancer-warszawa.pl", title: "Usługi Freelancer Warszawa — Studio Nowak", description: "Studio freelancerskie. Projekty graficzne, web development, branding dla firm." },
              ],
            },
          ],
        },
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
  showModules={true}
  showPricing={true}
  />
)

export const StronaDlaWarsztatuSamochodowegoPage = () => (
  <SEOLandingPage
    path="/strona-dla-warsztatu-samochodowego"
    title="Strona dla warsztatu samochodowego | SEO lokalne, opinie, cennik — gotowa w 5 dni"
    description="Strona dla warsztatu samochodowego i mechanika z SEO lokalnym, opiniami Google, cennikiem usług i modułem rezerwacji online. Edytujesz z telefonu."
    keywords="strona dla warsztatu samochodowego, strona dla mechanika, strona dla warsztatu, strona dla serwisu samochodowego, strona dla mechanika samochodowego, wizytówka warsztatu"
    h1="Strona dla warsztatu samochodowego:"
    h1Accent="kierowcy trafiają do Ciebie z Google"
    h1Sub="Kierowcy z Twojej okolicy rezerwują termin w 30 sekund — bez czekania na odbiór telefonu."
    intro="Kierowcy w Twojej okolicy szukają warsztatu w Google: 'wymiana opon [dzielnica]', 'diagnostyka [miasto]', 'naprawa [okolica]'. Bez strony z cennikiem, opiniami i rezerwacją online, jadą do konkurencji obok, która już to ma. Twoja strona pokaże specjalizacje, ceny i opinie Google — kierowca rezerwuje termin sam, nawet gdy mechanik jest pod autem."
    heroImage="/mecanico.webp"
    heroImageAlt="Strona dla warsztatu samochodowego — mechanik w trakcie naprawy"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla warsztatu", href: "/strona-dla-warsztatu-samochodowego" }]}
    sections={[
      {
        heading: "Co powinna mieć strona warsztatu, żeby zdobywać klientów",
        content: "SEO lokalne z Google Business Profile i schema AutoRepair. Lista usług z cenami (klient nie chce dzwonić, żeby zapytać o cenę wymiany opon). Opinie z Google zintegrowane ze strony. Moduł rezerwacji online — klient wybiera termin, warsztat dostaje powiadomienie.",
        image: "/mecanicoweb.webp",
        imageAlt: "Pełny widok strony warsztatu — cennik usług, opinie Google i moduł rezerwacji online",
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
imageAnimation: {
          rounds: [
            {
              query: "warsztat samochodowy Warszawa",
              yourSite: {
                domain: "auto-serwis-warszawa.pl",
                title: "Auto Serwis Warszawa — Mechanik i Diagnostyka",
                description: "Profesjonalny warsztat samochodowy w Warszawie. Mechanika, diagnostyka komputerowa, klimatyzacja. 15 lat doświadczenia.",
              },
              competitors: [
                { domain: "mechanik-warszawa-waw.pl", title: "Mechanik Warszawa — Serwis Samochodowy", description: "Serwis samochodowy w Warszawie. Naprawy główne i bieżące, wymiana oleju, hamulce." },
                { domain: "warsztat-samochodowy-waw.pl", title: "Warsztat Samochodowy Waw — Auto Naprawa", description: "Warsztat w Warszawie. Pełen zakres napraw, klimatyzacja, geometria zawieszenia." },
              ],
            },
            {
              query: "mechanik Warszawa",
              yourSite: {
                domain: "auto-serwis-warszawa.pl",
                title: "Auto Serwis Warszawa — Mechanik z Doświadczeniem",
                description: "Doświadczony mechanik w Warszawie. Naprawa silników, skrzyń biegów, zawieszenia. Gwarancja na usługi.",
              },
              competitors: [
                { domain: "mechanik-waw.pl", title: "Mechanik Waw — Naprawa Samochodów", description: "Mechanik w Warszawie. Diagnostyka, naprawa bieżąca, wymiana części eksploatacyjnych." },
                { domain: "autoservice-warszawa.pl", title: "Auto Service Warszawa — Mechanika i Elektryka", description: "Auto serwis w Warszawie. Mechanika ogólna, elektryka samochodowa, wymiana oleju." },
              ],
            },
            {
              query: "serwis samochodowy Warszawa",
              yourSite: {
                domain: "auto-serwis-warszawa.pl",
                title: "Auto Serwis Warszawa — Serwis Mechaniczny",
                description: "Serwis samochodowy w Warszawie. Kompleksowa obsługa: od przeglądu po naprawy generalne. Nowoczesny sprzęt.",
              },
              competitors: [
                { domain: "serwis-aut-waw.pl", title: "Serwis Aut Waw — Wszystkie Marki", description: "Serwis samochodowy w Warszawie. Obsługa wszystkich marek, naprawa bieżąca i główna." },
                { domain: "auto-serwis-centrum-waw.pl", title: "Auto Serwis Centrum — Warszawa", description: "Serwis samochodowy w centrum Warszawy. Szybka obsługa, konkurencyjne ceny, gwarancja." },
              ],
            },
          ],
        },
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
  showModules={true}
  showPricing={true}
  />
)

export const StronaDlaKosmetyczkiPage = () => (
  <SEOLandingPage
    path="/strona-dla-kosmetyczki"
    title="Strona dla kosmetyczki | SEO lokalne, cennik zabiegów, rezerwacje online"
    description="Strona dla kosmetyczki i salonu kosmetycznego z SEO lokalnym, cennikiem zabiegów i modułem rezerwacji online. Klientki rezerwują 24/7, Ty dostajesz powiadomienia."
    keywords="strona dla kosmetyczki, strona dla salonu kosmetycznego, strona www salon kosmetyczny, strona dla kosmetyczki z rezerwacjami, wizytówka salonu kosmetycznego"
    h1="Strona dla kosmetyczki:"
    h1Accent="klientki rezerwują zabieg bez dzwonienia"
    h1Sub="Klientki rezerwują zabieg o 2 w nocy — i przychodzą rano."
    intro="Klientki szukające 'manicure [dzielnica]' albo 'makijaż permanentny [miasto]' znajdują salony w Google, nie na Instagramie. Bez strony z schema BeautySalon i SEO lokalnym nie pojawiasz się w tych wynikach — i przegrywasz z salonem obok, który już to ma. Twoja strona pokaże cennik, galerię i pozwoli zarezerwować zabieg 24/7."
    heroImage="/estetica.webp"
    heroImageAlt="Strona dla kosmetyczki — wnętrze salonu kosmetycznego z miejscem do zabiegów"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla kosmetyczki", href: "/strona-dla-kosmetyczki" }]}
    sections={[
      {
        heading: "Co powinna mieć strona salonu kosmetycznego, żeby przyciągać klientki",
        content: "SEO lokalne z Google Business Profile i schema BeautySalon. Cennik zabiegów online (manicure, pedicure, makijaż, brwi, rzęsy) z opisem i czasem trwania — klientka nie chce dzwonić, żeby zapytać o cenę. Opinie Google zintegrowane ze strony. Moduł rezerwacji online 24/7 — klientka wybiera zabieg i termin, salon dostaje powiadomienie.",
        image: "/esteticaweb.webp",
        imageAlt: "Pełny widok strony salonu kosmetycznego — cennik zabiegów, galeria przed/po i moduł rezerwacji 24/7",
        highlights: [
          "Klientki z Twojej dzielnicy znajdują salon w Google",
          "Cena i czas zabiegu widoczne przed wizytą — bez dzwonienia",
          "Opinie klientek z Google widać od razu na stronie",
          "Rezerwacja online w 30 sekund, nawet w nocy",
        ],
      },
      {
        heading: "Jak Twój salon kosmetyczny pojawia się w Google",
        content: "Klientki szukające usług kosmetycznych wpisują w Google „salon kosmetyczny Warszawa\", „manicure Warszawa\" albo „makijaż permanentny Warszawa\". Dzięki schema BeautySalon, SEO lokalnemu i artykułom blogowym Twój salon wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema BeautySalon",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Artykuły o pielęgnacji",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "salon kosmetyczny Warszawa",
              yourSite: {
                domain: "salon-kosmetyczny-warszawa.pl",
                title: "Salon Kosmetyczny Warszawa — Zabiegi i Pielęgnacja",
                description: "Profesjonalny salon kosmetyczny w Warszawie. Manicure, pedicure, makijaż, zabiegi na twarz. 12 lat doświadczenia.",
              },
              competitors: [
                { domain: "kosmetyczka-warszawa-waw.pl", title: "Kosmetyczka Warszawa — Salon Urody", description: "Salon urody w Warszawie. Manicure, pedicure, stylizacja paznokci, zabiegi kosmetyczne." },
                { domain: "beauty-salon-waw.pl", title: "Beauty Salon Waw — Kosmetyka i Pielęgnacja", description: "Beauty salon w Warszawie. Pełen zakres usług kosmetycznych, profesjonalna obsługa." },
              ],
            },
            {
              query: "manicure Warszawa",
              yourSite: {
                domain: "salon-kosmetyczny-warszawa.pl",
                title: "Manicure Warszawa — Salon Kosmetyczny",
                description: "Manicure w Warszawie — hybrydowy, klasyczny, żelowy. Profesjonalne stylistki, sterylne narzędzia.",
              },
              competitors: [
                { domain: "manicure-waw.pl", title: "Manicure Waw — Paznokcie i Stylizacja", description: "Manicure w Warszawie. Hybrydowy, żelowy, francuski. Szybka realizacja, konkurencyjne ceny." },
                { domain: "paznokcie-warszawa.pl", title: "Paznokcie Warszawa — Stylizacja i Pielęgnacja", description: "Salon paznokci w Warszawie. Manicure, pedicure, zdobienia, przedłużanie paznokci." },
              ],
            },
            {
              query: "makijaż permanentny Warszawa",
              yourSite: {
                domain: "salon-kosmetyczny-warszawa.pl",
                title: "Makijaż Permanentny Warszawa — Brwi i Usta",
                description: "Makijaż permanentny w Warszawie. Brwi, usta, eyeliner. Certyfikowane linergistki, sterylne warunki.",
              },
              competitors: [
                { domain: "maki-permanentny-waw.pl", title: "Maki Permanentny Waw — Brwi i Usta", description: "Makijaż permanentny w Warszawie. Brwi metodą włoskową, pudrową, ombre. Korekty i odświeżenia." },
                { domain: "linergistka-warszawa.pl", title: "Linergistka Warszawa — Makijaż Permanentny", description: "Linergistka w Warszawie. Makijaż permanentny brwi, ust, kreski. Doświadczenie 8 lat." },
              ],
            },
          ],
        },
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
  showModules={true}
  showPricing={true}
  />
)

export const StronaDlaFryzjeraPage = () => (
  <SEOLandingPage
    path="/strona-dla-fryzjera"
    title="Strona dla fryzjera | SEO lokalne, cennik, rezerwacje online — gotowa w 5 dni"
    description="Strona dla salonu fryzjerskiego i fryzjera z SEO lokalnym, cennikiem usług i modułem rezerwacji. Klienci rezerwują termin online 24/7."
    keywords="strona dla fryzjera, strona dla salonu fryzjerskiego, strona www fryzjer, strona dla barbera, strona dla stylisty, wizytówka salonu fryzjerskiego"
    h1="Strona dla fryzjera:"
    h1Accent="klienci rezerwują wizytę bez dzwonienia"
    h1Sub="Klienci rezerwują wizytę u wybranego stylisty — Ty skupiasz się na nożyczkach."
    intro="Klienci szukają fryzjera w Google: 'fryzjer [dzielnica]', 'koloryzacja [miasto]', 'balayage [okolica]'. Salon, który nie ma strony z schema HairSalon, portfolio i opiniami Google, przegrywa z salonem obok, który już to ma. Twoja strona pokaże stylizacje, cennik i pozwoli zarezerwować wizytę u konkretnego fryzjera w 30 sekund."
    heroImage="/peluquero.webp"
    heroImageAlt="Strona dla fryzjera — fryzjer prezentuje portfolio stylizacji z cennikiem online"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla fryzjera", href: "/strona-dla-fryzjera" }]}
    sections={[
      {
        heading: "Co powinna mieć strona salonu fryzjerskiego, żeby przyciągać klientów",
        content: "SEO lokalne z Google Business Profile i schema HairSalon. Portfolio stylizacji z cennikiem usług online (strzyżenie damskie i męskie, koloryzacja, modelowanie, broda) oraz czasem trwania — klient nie chce dzwonić, żeby zapytać o cenę. Opinie Google zintegrowane ze strony. Moduł rezerwacji z wyborem fryzjera i usługi — klient wybiera termin, salon dostaje powiadomienie.",
        image: "/peluqueroweb.webp",
        imageAlt: "Portfolio fryzjera i cennik usług online",
        highlights: [
          "Klienci z Twojej okolicy trafiają do salonu z Google",
          "Cena i czas strzyżenia widoczne bez dzwonienia i pytań",
          "Opinie klientów z Google widać od razu na stronie",
          "Rezerwacja online 24h — klient wybiera fryzjera i termin",
        ],
      },
      {
        heading: "Jak Twój salon fryzjerski pojawia się w Google",
        content: "Klienci szukający fryzjera wpisują w Google „fryzjer Warszawa\", „salon fryzjerski Warszawa\" albo „barber Warszawa\". Dzięki schema HairSalon, SEO lokalnemu i artykułom blogowym Twój salon wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema HairSalon",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Artykuły o stylizacji",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "fryzjer Warszawa",
              yourSite: {
                domain: "salon-fryzjerski-warszawa.pl",
                title: "Salon Fryzjerski Warszawa — Strzyżenie i Koloryzacja",
                description: "Profesjonalny salon fryzjerski w Warszawie. Strzyżenie damskie i męskie, koloryzacja, modelowanie. Doświadczeni styliści.",
              },
              competitors: [
                { domain: "fryzjer-waw.pl", title: "Fryzjer Waw — Salon i Barber", description: "Salon fryzjerski w Warszawie. Strzyżenie damskie, męskie, koloryzacja, balayage. Przystępne ceny." },
                { domain: "salon-fryzur-warszawa.pl", title: "Salon Fryzur Warszawa — Stylizacja", description: "Salon fryzur w Warszawie. Strzyżenie, koloryzacja, prostowanie, keratynowe zabiegi." },
              ],
            },
            {
              query: "salon fryzjerski Warszawa",
              yourSite: {
                domain: "salon-fryzjerski-warszawa.pl",
                title: "Salon Fryzjerski Warszawa — Profesjonalne Usługi",
                description: "Salon fryzjerski w Warszawie. Pełen zakres usług: strzyżenie, koloryzacja, modelowanie, regeneracja włosów.",
              },
              competitors: [
                { domain: "salon-fryzjerski-waw.pl", title: "Salon Fryzjerski Waw — Strzyżenie i Kolor", description: "Salon fryzjerski w Warszawie. Strzyżenie damskie i męskie, farbowanie, pasemka, balayage." },
                { domain: "fryzjer-damski-warszawa.pl", title: "Fryzjer Damski Warszawa — Stylizacja", description: "Fryzjer damski w Warszawie. Strzyżenie, koloryzacja, modelowanie, upięcia okolicznościowe." },
              ],
            },
            {
              query: "barber Warszawa",
              yourSite: {
                domain: "salon-fryzjerski-warszawa.pl",
                title: "Barber Warszawa — Strzyżenie Męskie",
                description: "Barber w Warszawie. Strzyżenie męskie, broda, golenie brzytwą. Klasyczny barber shop z nowoczesnym podejściem.",
              },
              competitors: [
                { domain: "barber-waw.pl", title: "Barber Waw — Męskie Strzyżenie", description: "Barber shop w Warszawie. Strzyżenie męskie, broda, golenie. Atmosfera, klasyka, nowoczesność." },
                { domain: "barber-shop-warszawa.pl", title: "Barber Shop Warszawa — Męski Salon", description: "Barber shop w Warszawie. Strzyżenie męskie, pielęgnacja brody, golenie klasyczne." },
              ],
            },
          ],
        },
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
  showModules={true}
  showPricing={true}
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
    h1Sub="Klienci czytają Twoje artykuły, ufają Twojemu podejściu i rezerwują pierwszą wizytę."
    intro="Klienci szukający pomocy psychologicznej wpisują w Google 'psycholog [miasto]', 'terapeuta [dzielnica]', 'CBT [specjalizacja]'. Bez strony zgodnej z RODO i widocznej w wynikach wyszukiwania, trafiają do konkurencji, która spełnia oba warunki. Twoja strona zbuduje Twoją wiarygodność jako eksperta, pokaże podejście terapeutyczne i pozwoli zarezerwować pierwszą konsultację anonimowo."
    heroImage="/psicologo.webp"
    heroImageAlt="Strona dla psychologa — psycholog prowadzący konsultację w gabinecie"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla psychologa", href: "/strona-dla-psychologa" }]}
    sections={[
      {
        heading: "Co powinna mieć strona gabinetu psychologicznego, żeby pozyskiwać klientów",
        content: "SEO lokalne z Google Business Profile i schema ProfessionalService. Opis podejścia terapeutycznego (CBT, systemowa, psychodynamiczna) i specjalizacji (lęk, depresja, relacje, ADHD) — klient widzi, czy pasujesz do jego potrzeb, bez konieczności dzwonienia. Blog edukacyjny SEO-friendly, który pozycjonuje Cię w Google jako eksperta. Moduł rezerwacji online z zachowaniem anonimowości — klient wybiera termin, Ty dostajesz powiadomienie. Pełna zgodność z RODO w cenie.",
        image: "/psicologoweb.webp",
        imageAlt: "Strona psychologa — opis specjalizacji, blog edukacyjny i moduł rezerwacji z RODO compliance",
        highlights: [
          "Pacjenci z Twojego miasta trafiają do Ciebie z Google",
          "Pacjent widzi Twój styl pracy przed pierwszą wizytą",
          "Artykuły na blogu budują Twoją wiarygodność jako eksperta",
          "Rezerwacja online z zachowaniem pełnej anonimowości",
        ],
      },
      {
        heading: "Jak Twój gabinet psychologiczny pojawia się w Google",
        content: "Klienci szukający pomocy psychologicznej wpisują w Google „psycholog Warszawa\", „psychoterapeuta Warszawa\" albo „terapia Warszawa\". Dzięki schema ProfessionalService, SEO lokalnemu i artykułom blogowym Twój gabinet wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema ProfessionalService",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Artykuły edukacyjne",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "psycholog Warszawa",
              yourSite: {
                domain: "psycholog-warszawa.pl",
                title: "Psycholog Warszawa — Terapia i Poradnictwo",
                description: "Psycholog w Warszawie. Indywidualne konsultacje, terapia par, terapia rodzinna. 15 lat doświadczenia klinicznego.",
              },
              competitors: [
                { domain: "psychoterapeuta-waw.pl", title: "Psychoterapeuta Waw — Gabinet Terapii", description: "Psychoterapeuta w Warszawie. CBT, terapia schematów, EMDR. Wizyty stacjonarne i online." },
                { domain: "poradnia-psychologiczna-warszawa.pl", title: "Poradnia Psychologiczna Warszawa", description: "Poradnia psychologiczna w Warszawie. Diagnoza, terapia, konsultacje. Certyfikowani specjaliści." },
              ],
            },
            {
              query: "psychoterapeuta Warszawa",
              yourSite: {
                domain: "psycholog-warszawa.pl",
                title: "Psychoterapeuta Warszawa — CBT i Terapia Schematów",
                description: "Psychoterapeuta w Warszawie. Specjalizacja: lęk, depresja, PTSD, zaburzenia osobowości. Podejście CBT i schemat.",
              },
              competitors: [
                { domain: "terapia-warszawa.pl", title: "Terapia Warszawa — Psychoterapeuta CBT", description: "Psychoterapeuta CBT w Warszawie. Terapia indywidualna, par, młodzieży. Podejście dowodowe." },
                { domain: "psycholog-online-warszawa.pl", title: "Psycholog Online Warszawa", description: "Psycholog online w Warszawie. Konsultacje wideo, terapia online, e-wizyty. Dyskrecja i wygoda." },
              ],
            },
            {
              query: "terapia Warszawa",
              yourSite: {
                domain: "psycholog-warszawa.pl",
                title: "Terapia Warszawa — Indywidualna i Par",
                description: "Terapia w Warszawie. Indywidualna, par, rodzinna. Pomoc w kryzysach, lęku, depresji, problemach relacyjnych.",
              },
              competitors: [
                { domain: "terapia-par-warszawa.pl", title: "Terapia Par Warszawa — Gabinet Terapii", description: "Terapia par w Warszawie. Kryzysy w związku, komunikacja, zdrada, rozwód. Certyfikowany terapeuta par." },
                { domain: "terapia-indywidualna-waw.pl", title: "Terapia Indywidualna Waw — Pomoc Psychologiczna", description: "Terapia indywidualna w Warszawie. Lęk, depresja, trauma, zaburzenia nastroju. Podejście integracyjne." },
              ],
            },
          ],
        },
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
  showModules={true}
  showPricing={true}
  />
)

export const StronaDlaFizjoterapeutyPage = () => (
  <SEOLandingPage
    path="/strona-dla-fizjoterapeuty"
    title="Strona dla fizjoterapeuty | SEO lokalne, cennik zabiegów, rezerwacje online"
    description="Strona dla fizjoterapeuty i gabinetu rehabilitacji z SEO lokalnym, cennikiem zabiegów i rezerwacjami online. Pacjenci rezerwują wizytę bez dzwonienia."
    keywords="strona dla fizjoterapeuty, strona dla gabinetu rehabilitacji, strona dla fizjoterapii, wizytówka fizjoterapeuty, strona www fizjoterapeuta, strona dla rehabilitanta"
    h1="Strona dla fizjoterapeuty:"
    h1Accent="pacjenci trafiają do Ciebie bez kolejki"
    h1Sub="Pacjenci z bólem kręgosłupa trafiają do Ciebie z Google — nie do gabinetu obok."
    intro="Pacjenci z bólem kręgosłupa szukają fizjoterapeuty w Google — teraz, w nocy, w weekend. Bez strony z schema MedicalBusiness i rezerwacją online, trafiają do gabinetu obok, który to ma. Twoja strona pokaże specjalizacje, cennik zabiegów i pozwoli umówić wizytę 24/7 — pacjent wchodzi z ulgi, nie po bezużytecznej próbie dodzwonienia się."
    heroImage="/fisioterapeuta.webp"
    heroImageAlt="Strona dla fizjoterapeuty — fizjoterapeuta prowadzący terapię manualną w gabinecie"
    breadcrumb={[{ name: "Strony dla branż", href: "/#moduly" }, { name: "Strona dla fizjoterapeuty", href: "/strona-dla-fizjoterapeuty" }]}
    sections={[
      {
        heading: "Co powinna mieć strona gabinetu fizjoterapii, żeby przyciągać pacjentów",
        content: "SEO lokalne z Google Business Profile i schema MedicalBusiness. Lista specjalizacji (terapia manualna, rehabilitacja sportowa, bóle kręgosłupa) i cennik zabiegów online — pacjent nie chce dzwonić, żeby zapytać o cenę wizyty. Opinie Google zintegrowane ze strony. Moduł rezerwacji z wyborem usługi — pacjent wybiera termin, gabinet dostaje powiadomienie.",
        image: "/fisioterapeutaweb.webp",
        imageAlt: "Specjalizacje fizjoterapeuty i cennik na stronie gabinetu",
        highlights: [
          "Pacjenci z bólem kręgosłupa trafiają do Ciebie z Google",
          "Twoje specjalizacje i ceny widoczne bez dzwonienia",
          "Opinie pacjentów z Google widać od razu na stronie",
          "Rezerwacja wizyty online 24/7, nawet w nocy",
        ],
      },
      {
        heading: "Jak Twój gabinet fizjoterapii pojawia się w Google",
        content: "Pacjenci szukający fizjoterapeuty wpisują w Google „fizjoterapeuta Warszawa\", „rehabilitacja Warszawa\" albo „terapia manualna Warszawa\". Dzięki schema MedicalBusiness, SEO lokalnemu i artykułom blogowym Twój gabinet wyprzedza konkurencję i pojawia się wysoko w wynikach wyszukiwania.",
        highlights: [
          "Schema MedicalBusiness",
          "SEO lokalne",
          "Wyprzedzasz konkurencję",
          "Artykuły o zdrowiu",
        ],
        imageAnimation: {
          rounds: [
            {
              query: "fizjoterapeuta Warszawa",
              yourSite: {
                domain: "fizjoterapeuta-warszawa.pl",
                title: "Fizjoterapeuta Warszawa — Rehabilitacja i Terapia",
                description: "Fizjoterapeuta w Warszawie. Rehabilitacja pourazowa, bóle kręgosłupa, terapia manualna. 12 lat doświadczenia.",
              },
              competitors: [
                { domain: "fizjo-waw.pl", title: "Fizjo Waw — Gabinet Fizjoterapii", description: "Gabinet fizjoterapii w Warszawie. Bóle pleców, urazy sportowe, rehabilitacja. Certyfikowani fizjoterapeuci." },
                { domain: "rehabilitacja-warszawa.pl", title: "Rehabilitacja Warszawa — Fizjoterapia", description: "Rehabilitacja w Warszawie. Stany pourazowe, pooperacyjne, przewlekłe bóle. Nowoczesne metody." },
              ],
            },
            {
              query: "rehabilitacja Warszawa",
              yourSite: {
                domain: "fizjoterapeuta-warszawa.pl",
                title: "Rehabilitacja Warszawa — Specjalistyczna",
                description: "Rehabilitacja w Warszawie. Pooperacyjna, pourazowa, neurologiczna, ortopedyczna. Indywidualne podejście.",
              },
              competitors: [
                { domain: "reh-waw.pl", title: "Reh Waw — Centrum Rehabilitacji", description: "Centrum rehabilitacji w Warszawie. Kinezyterapia, fizykoterapia, hydroterapia. Kompleksowa opieka." },
                { domain: "centrum-rehabilitacji-warszawa.pl", title: "Centrum Rehabilitacji Warszawa", description: "Centrum rehabilitacji w Warszawie. Specjaliści rehabilitacji, fizjoterapeuci, terapeuci zajęciowi." },
              ],
            },
            {
              query: "terapia manualna Warszawa",
              yourSite: {
                domain: "fizjoterapeuta-warszawa.pl",
                title: "Terapia Manualna Warszawa — Specjalista",
                description: "Terapia manualna w Warszawie. Leczenie bólów kręgosłupa, stawów, mięśni. Certyfikowany terapeuta manualny.",
              },
              competitors: [
                { domain: "terapia-manualna-waw.pl", title: "Terapia Manualna Waw — Kręgosłup", description: "Terapia manualna w Warszawie. Bóle kręgosłupa, dyskopatia, rwa kulszowa. Skuteczne metody." },
                { domain: "osteopata-warszawa.pl", title: "Osteopata Warszawa — Terapia Manualna", description: "Osteopata w Warszawie. Terapia manualna, osteopatia, diagnoza funkcjonalna. Holistyczne podejście." },
              ],
            },
          ],
        },
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
  showModules={true}
  showPricing={true}
  />
)