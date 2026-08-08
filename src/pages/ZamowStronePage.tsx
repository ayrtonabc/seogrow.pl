import { SEOLandingPage } from "../components/SEOLandingPage"

export const ZamowStronePage = () => (
  <SEOLandingPage
    path="/zamow-strone-internetowa"
    title="Zamów stronę internetową — gotowa w 5 dni, od 1 500 zł | SEO Grow"
    description="Zamów stronę internetową dla firmy z CMS-em i SEO. Trzy plany od 1 500 zł, gotowe w 5 dni. Bez umowy, wsparcie po polsku. Wypełnij brief, resztą zajmiemy się my."
    keywords="zamów stronę internetową, zamowienie strony www, strona internetowa dla firmy zamowienie, jak zamowic strone, strona www na zamowienie, cms seo cena"
    h1="Zamów stronę internetową"
    h1Accent="w 5 dni, od 1 500 zł"
    h1Sub="Wypełnij krótki brief. Resztą zajmiemy się my."
    heroImage="/panel.webp"
    heroImageAlt="Zamów stronę internetową z CMS i SEO"
    breadcrumb={[{ name: "Strona główna", href: "/" }, { name: "Zamów stronę", href: "/zamow-strone-internetowa" }]}
    sections={[
      {
        heading: "Jak wygląda zamówienie strony internetowej w SEO Grow?",
        content: "Zamówienie strony to nie formularz na 50 pól. Wystarczy 5 minut: podaj nazwę firmy, email, krótko opisz co robisz. Oddzwonimy w 24h, ustalimy plan, dostarczymy stronę w 5 dni. Bez stresu, bez niespodzianek.",
        image: "/automat.webp",
        imageAlt: "Jak zamowic strone internetowa",
        highlights: [
          "Krok 1: Krótki brief online (5 min)",
          "Krok 2: Rozmowa 15 min, ustalenie planu i treści",
          "Krok 3: Realizacja (5 dni roboczych)",
          "Krok 4: Testy + publikacja + podpięcie GSC",
        ],
      },
      {
        heading: "Ile kosztuje zamówienie strony?",
        content: "Strona startuje od 1 500 zł jednorazowo (plan Start z 1 podstroną) i rośnie do 4 500 zł (plan Premium z blogiem, modułami i FAQ). Płacisz raz. Strona jest Twoja. Abonament miesięczny (49-99 zł) tylko jeśli chcesz, żebym ja utrzymywał hosting i CMS — bez tego możesz sam.",
        image: "/copy.webp",
        imageAlt: "Cena strony internetowej dla firmy",
        imagePosition: "left",
        highlights: [
          "Start: 1 500 zł — landing page, 1-5 dni",
          "Standard: 2 200 zł — strona firmowa 3-5 podstron, 5 dni",
          "Premium: 4 500 zł — strona z blogiem i modułami, 7-10 dni",
          "Bez ukrytych kosztów, bez prowizji od leadów",
        ],
      },
      {
        heading: "Co dostajesz po zamówieniu?",
        content: "Każda strona w SEO Grow zawiera: domenę .pl na rok, hosting Vercel, certyfikat SSL, CMS do edycji z telefonu, SEO techniczne (schema, szybkość, Core Web Vitals), Google Search Console + Analytics, formularz kontaktowy, mapę Google, integrację z social media. Różnica między planami to liczba podstron, nie jakość.",
        image: "/panel.webp",
        imageAlt: "Co zawiera strona po zamowieniu",
        highlights: [
          "Domena + hosting + SSL",
          "CMS z edycją z telefonu",
          "SEO techniczne od dnia 1",
          "Google Search Console + Analytics",
        ],
      },
      {
        heading: "Dlaczego warto zamówić stronę z SEO, a nie bez?",
        content: "Strona bez SEO to plik, nie strona — Google jej nie pokazuje, klienci Cię nie znajdują. Strona z SEO jest widoczna w wyszukiwarce od dnia 1, daje ruch organiczny, kumuluje pozycje z czasem. Bez SEO płacisz za reklamy. Z SEO raz zainwestujesz i masz klientów z Google na lata.",
        image: "/automat.webp",
        imageAlt: "Strona z SEO vs bez SEO",
        imagePosition: "left",
        highlights: [
          "Bez SEO: płacisz za każdego klienta z reklam",
          "Z SEO: klienci znajdują Cię sami w Google",
          "Bez SEO: po wyłączeniu reklam — cisza",
          "Z SEO: ruch rośnie latami, po roku darmowy",
        ],
      },
    ]}
    features={[
      {
        icon: "🚀",
        title: "Gotowe w 5 dni",
        description: "Od briefu do działającej strony — 5 dni roboczych. Bez opóźnień.",
      },
      {
        icon: "💰",
        title: "Od 1 500 zł",
        description: "Płacisz raz, nie miesięcznie. Strona Twoja od dnia 1.",
      },
      {
        icon: "🔍",
        title: "SEO w cenie",
        description: "Schema, szybkość, treść, linkowanie. Gotowe do rankingu w Google.",
      },
      {
        icon: "📱",
        title: "CMS z telefonu",
        description: "Edytujesz tekst, zmieniasz ceny, dodajesz zdjęcia z telefonu.",
      },
    ]}
    faq={[
      {
        q: "Ile kosztuje zamówienie strony internetowej dla firmy?",
        a: "W SEO Grow od 1 500 zł (plan Start) do 4 500 zł (plan Premium). Ceny obejmują stronę z CMS, SEO techniczne, domenę na rok, hosting, SSL i wsparcie. Bez ukrytych opłat.",
      },
      {
        q: "Ile trwa realizacja strony po zamówieniu?",
        a: "5 dni roboczych dla planu Start i Standard, 7-10 dni dla Premium. Od podpisania briefu do działającej strony. Bez 'kolejnej iteracji' — dostajesz gotowy produkt.",
      },
      {
        q: "Czy mogę zamówić stronę bez podawania danych firmy?",
        a: "Nie — potrzebuję nazwy firmy, branży i miasta, żeby stworzyć treść pod SEO. Wszystko inne (kolory, styl, preferencje) ustalimy w rozmowie po złożeniu briefu.",
      },
      {
        q: "Co się stanie po zamówieniu?",
        a: "W 24h oddzwaniam, ustalamy szczegóły. W 2-3 dni dostajesz projekt strony. Po akceptacji — realizacja. Po testach — publikacja. Po publikacji — strona jest Twoja, z dostępem do CMS-a, kodu i panelu.",
      },
    ]}
    ctaTitle="Zamów swoją stronę internetową"
    ctaDescription="Wypełnij brief online, 5 minut. Oddzwonimy w 24h z propozycją."
    ctaButtonText="Zamów teraz"
    ctaButtonHref="/zamowienie?plan=standard"
  />
)
