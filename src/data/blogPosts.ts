export type BlogPost = {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  author: string
  image: string
  imageWidth: number
  imageHeight: number
  tags: string[]
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "seo-lokalne-dla-malych-firm",
    category: "SEO lokalne",
    title: "SEO lokalne dla małych firm: 7 rzeczy, które poprawią widoczność szybciej",
    excerpt: "Praktyczny przewodnik dla lokalnych biznesów, które chcą zdobywać więcej zapytań z Google bez przepalania budżetu na reklamy.",
    date: "25 kwietnia 2026",
    readTime: "6 min",
    author: "Zespół SEO Grow",
    image: "/hero.webp",
    imageWidth: 960,
    imageHeight: 720,
    tags: ["SEO lokalne", "Google", "Mała firma"],
    content: [
      "SEO lokalne nie polega wyłącznie na posiadaniu estetycznej strony. Google musi rozumieć, gdzie działasz, jakie usługi oferujesz i dlaczego to właśnie Twoja firma powinna pojawiać się przed konkurencją.",
      "Zacznij od uporządkowania tytułów, opisów i nagłówków z uwzględnieniem miasta lub obszaru działania. Zadbaj też o spójne dane kontaktowe na stronie, w katalogach i w profilu firmy w Google.",
      "Dobrze przygotowany Google Business Profile, szybka strona oraz jasne podstrony usługowe bardzo często przekładają się na wzrost wyświetleń, telefonów i formularzy kontaktowych.",
      "Jeśli dodatkowo publikujesz treści odpowiadające na konkretne pytania klientów, budujesz topical authority i zwiększasz szanse na wejścia z zapytaniami o wysokiej intencji zakupowej."
    ]
  },
  {
    slug: "jak-pisac-artykuly-seo-ktore-generuja-leady",
    category: "Content SEO",
    title: "Jak pisać artykuły przygotowane pod SEO i leady",
    excerpt: "Dobra struktura, intencja wyszukiwania i sensowne CTA sprawiają, że blog zaczyna realnie wspierać sprzedaż.",
    date: "20 kwietnia 2026",
    readTime: "5 min",
    author: "Zespół SEO Grow",
    image: "/panel.webp",
    imageWidth: 1280,
    imageHeight: 853,
    tags: ["Blog", "Lead generation", "Content"],
    content: [
      "Dobry artykuł SEO nie zaczyna się od pisania, tylko od rozpoznania intencji. Zanim stworzysz treść, musisz wiedzieć, czego szuka użytkownik i na jakim etapie decyzji zakupowej się znajduje.",
      "Przejrzysta struktura z nagłówkami H1, H2 i H3, konkretne przykłady oraz odpowiedzi bez lania wody poprawiają komfort czytania i pomagają Google lepiej zrozumieć stronę.",
      "Każdy wpis powinien mieć cel biznesowy: skierowanie do demo, formularza, podstrony usługi albo zapisu do newslettera. Sam ruch nie wystarczy, jeśli nie pracuje na wynik.",
      "Połączenie wartościowej treści, przemyślanego linkowania wewnętrznego i naturalnego CTA zamienia blog z dodatku marketingowego w kanał pozyskiwania klientów."
    ]
  },
  {
    slug: "blog-firmowy-jako-kanal-sprzedazy",
    category: "Strategia",
    title: "Blog firmowy jako kanał sprzedaży: jak go planować, żeby zarabiał",
    excerpt: "Blog nie powinien być zbiorem przypadkowych wpisów. Najlepiej działa wtedy, gdy wspiera konkretne usługi i pytania klientów.",
    date: "15 kwietnia 2026",
    readTime: "7 min",
    author: "Zespół SEO Grow",
    image: "/seogrow.webp",
    imageWidth: 960,
    imageHeight: 720,
    tags: ["Strategia", "Blog", "Sprzedaż"],
    content: [
      "Blog firmowy to nie miejsce na luźne przemyślenia, tylko strategiczne narzędzie do przyciągania klientów na różnych etapach lejka sprzedażowego.",
      "Planując treści, zacznij od mapowania pytań, jakie zadają Twoi potencjalni klienci. Następnie stwórz serię artykułów odpowiadających na te pytania w logicznej kolejności.",
      "Linkowanie wewnętrzne między artykułami buduje strukturę, która pomaga zarówno użytkownikom, jak i robotom Google w nawigacji po stronie.",
      "Regularność publikacji i konsekwencja w tematyce budują权威 (autorytet) w oczach Google i sprawiają, że strona zyskuje na wartości z czasem."
    ]
  },
  {
    slug: "ile-kosztuje-strona-internetowa-2026",
    category: "Cennik",
    title: "Ile kosztuje strona internetowa w 2026? Przewodnik po cenach",
    excerpt: "Konkrety: 990 - 4900 zł za wdrożenie + 49 - 99 zł miesięcznie. Bez ukrytych kosztów. Porównanie z agencjami i freelancerami.",
    date: "28 czerwca 2026",
    readTime: "8 min",
    author: "Zespół SEO Grow",
    image: "/hero.webp",
    imageWidth: 960,
    imageHeight: 720,
    tags: ["Cennik", "Strona internetowa", "Cena"],
    content: [
      "Ile kosztuje strona internetowa w 2026 roku? Krótka odpowiedź: od 990 zł do 20 000 zł za wdrożenie, w zależności od zakresu. Dlaczego taka rozpiętość? Bo strona stronie nie równa — wizytówka kosztuje inaczej niż sklep internetowy z 1000 produktów.",
      "W tym przewodniku rozbijamy ceny na czynniki pierwsze, porównujemy modele rozliczeń (jednorazowe vs abonament) i pokazujemy, co wchodzi w cenę u różnych dostawców.",
      "Strona wizytówka (1 - 5 podstron): 990 - 3000 zł. Tyle płacisz za stronę z sekcjami typu 'o nas', 'oferta', 'kontakt', 'cennik'. W tej cenie dostajesz responsywny design, podstawowe SEO i formularz kontaktowy. W agencji: 2000 - 8000 zł. U freelancera: 1500 - 4000 zł. W SEO Grow (model SaaS): 990 zł wdrożenia + 49 zł/mies.",
      "Strona z blogiem i SEO (5 - 15 podstron): 2200 - 6000 zł. Dodajesz blog z artykułami SEO, schema markup dla Twojej branży, integrację z Google Search Console. To minimum dla firm, które chcą zdobywać klientów z Google. W agencji: 5000 - 15000 zł. U freelancera: 3500 - 8000 zł. W SEO Grow: 2200 zł + 69 zł/mies.",
      "Sklep internetowy (do 100 produktów): 3000 - 10000 zł. Integracja z bramką płatności (Stripe, PayU, Tpay), zarządzanie stanami magazynowymi, integracja z kurierami, automatyczne fakturowanie. W agencji: 8000 - 30000 zł. U freelancera: 5000 - 15000 zł. W SEO Grow: od 4900 zł + 99 zł/mies.",
      "Indywidualny projekt graficzny: od 8000 zł. Robiony od zera według Twojej identyfikacji wizualnej — unikalne ilustracje, animacje, customowe elementy UI. Sensowne tylko dla dużych marek z budżetem 20 000 zł + na branding.",
      "Co wchodzi w cenę, a co nie? Zawsze pytaj o: domenę (.pl ~ 40 - 100 zł/rok), hosting (50 - 300 zł/mies.), SSL (zwykle w cenie hostingu), certyfikat RODO (polityka prywatności, klauzula cookies — wartość 800 - 2000 zł u prawnika), wdrożenie SEO technicznego (schema, meta, szybkość — wartość 1000 - 3000 zł).",
      "Dlaczego model SaaS jest tańszy? Bo hosting, SSL, kopie zapasowe, aktualizacje bezpieczeństwa i wsparcie techniczne są w cenie abonamentu. Nie musisz płacić za osobnego admina. Koszt rozkłada się na miesiące zamiast jednorazowej dużej kwoty.",
      "Ile kosztuje strona w SEO Grow? Start: 990 zł wdrożenia + 49 zł/mies. Standard (najczęściej wybierany): 2200 zł + 69 zł/mies. Premium: 4900 zł + 99 zł/mies. Każdy plan zawiera: hosting, SSL, domenę (pomagamy ją wybrać), CMS, SEO techniczne, wsparcie po polsku, brak umowy.",
      "Kiedy warto zapłacić więcej? Gdy potrzebujesz indywidualnego designu (marki premium), integracji z systemami ERP / CRM, bardzo dużego sklepu (1000 + produktów), customowych funkcji specyficznych dla Twojej branży. Dla 90% małych firm Standard w zupełności wystarcza.",
      "Kiedy NIE warto przepłacać? Gdy agencja oferuje Ci 'stronę od 10000 zł' dla zwykłej wizytówki. W 99% przypadków to koszt ich marki, nie wartości dla Ciebie. Bezpieczna zasada: jeśli ktoś chce 5x więcej niż konkurencja za podobny zakres, powinien mieć bardzo dobry powód.",
      "Najczęstszy błąd: płacisz 8000 zł za stronę u agencji, nie masz budżetu na aktualizacje treści, strona umiera po 6 miesiącach. Lepiej: zapłać 2200 zł + 69 zł/mies., aktualizuj treści co tydzień, strona rośnie w Google, klienci przychodzą organicznie.",
      "Sprawdź nasz kalkulator: zadzwoń 517 105 423 i powiedz, jakiej strony potrzebujesz. 15 minut rozmowy, konkretna wycena, zero zobowiązań."
    ]
  },
  {
    slug: "jak-zalozyc-strone-internetowa",
    category: "Poradnik",
    title: "Jak założyć stronę internetową w 2026? Krok po kroku",
    excerpt: "9 kroków od zera do działającej strony z SEO. Bez wiedzy technicznej, bez programisty. Konkretny plan na 5 dni.",
    date: "28 czerwca 2026",
    readTime: "9 min",
    author: "Zespół SEO Grow",
    image: "/panel.webp",
    imageWidth: 1280,
    imageHeight: 853,
    tags: ["Strona internetowa", "Poradnik", "SEO"],
    content: [
      "Założenie strony internetowej w 2026 roku jest łatwiejsze niż kiedykolwiek, ale tylko jeśli wiesz, od czego zacząć. Ten przewodnik prowadzi Cię krok po kroku — od pomysłu do działającej strony z SEO, bez programisty, bez agencji za 15 000 zł.",
      "Krok 1: Określ cel strony. Co ma robić Twoja strona? Prezentować firmę (wizytówka)? Sprzedawać produkty (sklep)? Zdobywać klientów przez blog (pozycjonowanie)? Rezerwować wizyty (usługi)? Odpowiedź wpływa na każdy kolejny krok. Cel = 'Klienci mają mnie znaleźć w Google i zadzwonić' to najczęstszy przypadek małej firmy.",
      "Krok 2: Wybierz nazwę domeny. Nazwa domeny powinna być krótka, łatwa do zapamiętania, zawierać Twoją firmę lub branżę. Unikaj: literówek, myślników, liczb. Sprawdź dostępność na nazwa.pl lub OVH.pl (.pl ~ 40 zł/rok, .com.pl ~ 60 zł/rok). Jeśli domena jest zajęta, nie próbuj jej odkupywać — wymyśl nową.",
      "Krok 3: Wybierz technologię (CMS). Masz 3 opcje: a) WordPress — popularny, ale wymaga aktualizacji, wtyczek, zabezpieczeń. Koszt utrzymania: 100 - 300 zł/mies. b) Wix / Squarespace — proste, ale ograniczone i trudne do przeniesienia. Koszt: 80 - 250 zł/mies. c) Dedykowany CMS (np. SEO Grow) — zero aktualizacji, zero wtyczek, optymalizacja SEO wbudowana. Koszt: 49 - 99 zł/mies.",
      "Krok 4: Zaprojektuj layout. Każda dobra strona ma te same sekcje: nagłówek z logo i menu, hero (główny przekaz), sekcja 'o nas' lub 'oferta', sekcja social proof (opinie, case studies), CTA (wezwanie do działania), stopka z danymi kontaktowymi. Nie komplikuj — prosta struktura = wyższa konwersja.",
      "Krok 5: Napisz treści. Teksty na stronę to nie jest copywriting artystyczny. Mają być konkretne, zrozumiałe i zawierać odpowiedzi na pytania Twoich klientów. Każda podstrona: 1 H1 + 2-4 H2 + 300-500 słów treści + 1 CTA. Pisz jak rozmawiasz z klientem, nie jak do komisji egzaminacyjnej.",
      "Krok 6: Dodaj SEO techniczne. SEO techniczne to fundament, bez którego strona nie pojawi się w Google. Co musisz mieć: schema markup (LocalBusiness, Service, FAQ), meta description (155-160 znaków), przyjazne URLe (np. /uslugi/strony-internetowe), szybkość ładowania (PageSpeed 80 +), mobile-first design, SSL (HTTPS), sitemap.xml, robots.txt. W dedykowanym CMS to wszystko jest automatyczne.",
      "Krok 7: Podłącz analitykę. Bez Google Analytics 4 i Google Search Console nie wiesz, czy Twoja strona działa. GA4 pokazuje, kto wchodzi, skąd przychodzi, co robi na stronie. Search Console pokazuje, na jakie zapytania Google wyświetla Twoją stronę i jakie masz pozycje. Oba narzędzia są darmowe i powinny być podpięte dzień po publikacji.",
      "Krok 8: Testuj i publikuj. Sprawdź stronę na telefonie, tablecie i komputerze. Sprawdź, czy formularz kontaktowy działa. Sprawdź, czy mapa Google się ładuje. Sprawdź, czy SSL działa (zielona kłódka). Sprawdź PageSpeed Insights (cel: 80 + mobile, 90 + desktop). Dopiero gdy wszystko działa — publikuj.",
      "Krok 9: Aktualizuj regularnie. Strona nie jest jednorazowym projektem — to żywy organizm. Dodawaj nowe treści co tydzień (blog), aktualizuj cennik gdy się zmienia, dodawaj nowe zdjęcia realizacji. Strona, która się rozwija, rośnie w Google. Strona, która stoi — umiera.",
      "Ile to kosztuje łącznie? Realistyczny budżet na start: 990 - 2200 zł za wdrożenie + 49 - 69 zł/mies. za hosting i CMS. Porównaj z agencją (5000 - 15000 zł + 200 - 500 zł/mies.) i freelancerem (3000 - 8000 zł + sam musisz ogarniać technikalia).",
      "Ile to trwa? W SEO Grow: 5 dni roboczych od podpisania umowy do działającej strony. W agencji: 4 - 12 tygodni. U freelancera: 2 - 6 tygodni (jeśli ma czas). Jeśli potrzebujesz strony na wczoraj, dedykowany SaaS z gotowym wdrożeniem to jedyna sensowna opcja.",
      "Co dalej? Sprawdź naszą ofertę na seogrow.pl/#ceny albo zadzwoń 517 105 423. 15 minut rozmowy, konkretna wycena, strona gotowa w 5 dni."
    ]
  }
]