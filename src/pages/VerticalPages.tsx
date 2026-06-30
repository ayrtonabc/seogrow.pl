import { SEOLandingPage } from "../components/SEOLandingPage"

export const StronaDlaPrawnikaPage = () => (
  <SEOLandingPage
    path="/strona-dla-prawnika"
    title="Strona dla kancelarii prawnej | SEO lokalne, blog, formularz kontaktowy"
    description="Strona dla prawnika z SEO technicznym, schema markup i blogiem prawniczym."
    keywords="strona dla prawnika seo, strona www dla adwokata, kancelaria prawna strona internetowa"
    h1="Strona dla kancelarii prawnej:"
    h1Accent="prosty CMS i SEO lokalne"
    h1Sub="SEO lokalne, schema markup, blog prawniczy."
    heroImage="/panel.webp"
    heroImageAlt="Strona dla kancelarii prawnej — widok CMS"
    breadcrumb={[{ name: "Strony dla branż", href: "#" }, { name: "Strona dla prawnika", href: "/strona-dla-prawnika" }]}
    sections={[
      {
        heading: "Co powinna mieć strona kancelarii przygotowana pod Google",
        content: "SEO lokalne: Google Business Profile, spójne dane NAP na stronie. Schema markup LegalService z adresem i godzinami. Podstrony usługowe i blog prawniczy.",
        image: "/automat.webp",
        imageAlt: "SEO lokalne dla kancelarii prawnej",
        highlights: [
          "Schema LegalService — automatycznie",
          "Google Business Profile w standardzie",
          "Blog prawniczy bez wiedzy SEO",
        ],
      },
      {
        heading: "Dlaczego WordPress generuje koszty",
        content: "Wtyczki SEO, aktualizacje, backupy — każde z tych to dodatkowy koszt lub czas. Na dedykowanym CMS: SEO lokalne w cenie, schema LegalService automatycznie.",
        image: "/hero-640.webp",
        imageAlt: "Koszty utrzymania strony na WordPressie",
        imagePosition: "left",
        highlights: [
          "69 zł/mies. zamiast 200-500 zł na WordPressie",
          "Realny harmonogram wdrożenia po mini-audycie",
        ],
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
      { number: "CMS", label: "edycja treści bez WordPressa" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "69 zł", label: "miesięcznie" },
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
    ]}
    features={[
      { title: "Schema Healthcare", description: "Automatyczny znacznik dla placówek medycznych." },
      { title: "Moduł rezerwacji", description: "Online booking z synchronizacją kalendarza." },
      { title: "SEO lokalne", description: "Google Business Profile, NAP consistency." },
      { title: "RODO compliance", description: "Wszystkie strony prawne w cenie." },
    ]}
    trust={[
      { number: "CMS", label: "edycja treści bez WordPressa" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "69 zł", label: "miesięcznie" },
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
    heroImage="/panel.webp"
    heroImageAlt="Strona dla gabinetu stomatologicznego"
    breadcrumb={[{ name: "Strony dla branż", href: "#" }, { name: "Strona dla dentysty", href: "/strona-dla-gabinetu-stomatologicznego" }]}
    sections={[
      {
        heading: "Co wyróżnia stronę gabinetu przygotowaną pod Google",
        content: "Schema DentalClinic: godziny otwarcia, średnia ocena i zakres cen w wynikach wyszukiwania. Galeria przed/po buduje zaufanie. Mobile-first: pacjent przegląda stronę przed wizytą.",
        image: "/automat.webp",
        imageAlt: "Schema DentalClinic dla gabinetu stomatologicznego",
        highlights: [
          "Schema DentalClinic — automatycznie",
          "Galeria przed/po w cenie",
          "Moduł rezerwacji z przypomnieniami",
        ],
      },
    ]}
    features={[
      { title: "Schema DentalClinic", description: "Automatyczny znacznik dla gabinetów stomatologicznych." },
      { title: "Galeria przed/po", description: "Portfolio budujące zaufanie." },
      { title: "Moduł rezerwacji", description: "Online booking z przypomnieniami." },
      { title: "RODO compliance", description: "Wszystkie strony prawne w cenie." },
    ]}
    trust={[
      { number: "CMS", label: "edycja treści bez WordPressa" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "69 zł", label: "miesięcznie" },
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
  />
)

export const StronaDlaRestauracjiPage = () => (
  <SEOLandingPage
    path="/strona-dla-restauracji"
    title="Strona dla restauracji | Menu cyfrowe, SEO lokalne, schema Restaurant, rezerwacje"
    description="Strona dla restauracji z SEO technicznym, menu cyfrowym i rezerwacjami online."
    keywords="strona dla restauracji seo, menu cyfrowe seo, cms dla restauracji"
    h1="Strona dla restauracji:"
    h1Accent="SEO lokalne, menu online i rezerwacje"
    h1Sub="SEO lokalne, schema Restaurant, menu QR."
    heroImage="/hero-640.webp"
    heroImageAlt="Strona dla restauracji — menu cyfrowe"
    breadcrumb={[{ name: "Strony dla branż", href: "#" }, { name: "Strona dla restauracji", href: "/strona-dla-restauracji" }]}
    sections={[
      {
        heading: "Co wyróżnia stronę restauracji przygotowaną pod Google",
        content: "Schema Restaurant: godziny otwarcia, oceny i ceny w wynikach wyszukiwania. Menu cyfrowe: QR na stolik z cenami i alergenami. Rezerwacje online bez pośredników.",
        image: "/panel.webp",
        imageAlt: "Schema Restaurant i menu QR dla restauracji",
        highlights: [
          "Schema Restaurant — w wynikach Google",
          "Menu QR na stolik",
          "Rezerwacje bez pośredników",
        ],
      },
    ]}
    features={[
      { title: "Schema Restaurant", description: "Godziny, oceny, ceny — w wynikach Google." },
      { title: "Menu cyfrowe", description: "QR na stolik z cenami i alergenami." },
      { title: "SEO lokalne", description: "Google Business Profile, NAP, mapa." },
      { title: "Rezerwacje online", description: "Bez pośredników, z przypomnieniami." },
    ]}
    trust={[
      { number: "CMS", label: "edycja menu bez WordPressa" },
      { number: "90+", label: "PageSpeed mobile" },
      { number: "69 zł", label: "miesięcznie" },
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
  />
)
