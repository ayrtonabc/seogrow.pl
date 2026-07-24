import { SEOLandingPage } from "../components/SEOLandingPage"

export const EkspansjaGlobalnaPage = () => (
  <SEOLandingPage
    path="/ekspansja-globalna"
    title="Ekspansja globalna | Strona w wielu jezykach i wielu walutach"
    description="Strona w wielu jezykach z automatycznym hreflang, domenami per kraj i cenami lokalnymi."
    keywords="strona wielojezyczna, ekspansja globalna, domeny per kraj, hreflang automatyczny"
    h1="Ekspansja globalna"
    h1Accent="Strona w wielu jezykach i walutach"
    h1Sub="Automatyczne tlumaczenie z weryfikacja przez czlowieka."
    heroImage="/moduly/multiidioma.webp"
    heroImageAlt="Ekspansja SEO Grow — wiele jezykow i walut"
    breadcrumb={[{ name: "Moduly", href: "/#moduly" }, { name: "Ekspansja Globalna", href: "/ekspansja-globalna" }]}
    sections={[
      {
        heading: "5 jezykow w cenie hostingu",
        content: "Polski, angielski, niemiecki, czeski, slowacki. Kazda wersja jezykowa pozycjonuje sie w danym kraju. Tlumaczenie maszynowe z weryfikacja native speakera.",
        image: "/panel.webp",
        imageAlt: "5 jezykow w cenie SEO Grow",
        highlights: [
          "Polski, angielski, niemiecki, czeski, slowacki",
          "hreflang automatyczny per jezyk",
          "Tlumaczenie maszynowe z weryfikacja native speakera",
          "Kazdy jezyk = osobna subdomena lub katalog",
        ],
      },
      {
        heading: "Domeny per kraj i ceny lokalne",
        content: "Konkretne domeny: seogrow.de, seogrow.com, seogrow.cz. Ceny wyswietlane w walucie lokalnej. Podatki lokalne. Kazda wersja pozycjonuje sie niezaleznie.",
        image: "/panel.webp",
        imageAlt: "Domeny per kraj i ceny lokalne w SEO Grow",
        imagePosition: "left",
        highlights: [
          "Domena per kraj lub wspolny katalog /en/, /de/, /cz/",
          "Ceny w walucie lokalnej",
          "hreflang automatyczny",
          "Sitemap per jezyk w cenie",
        ],
      },
    ]}
    features={[
      { title: "5 jezykow w cenie", description: "Polski, angielski, niemiecki, czeski, slowacki." },
      { title: "Domeny per kraj", description: "seogrow.de, .com, .cz w cenie hostingu." },
      { title: "Ceny lokalne", description: "Waluta i podatki per kraj." },
      { title: "hreflang automatyczny", description: "Poprawne tagi per wersja jezykowa." },
      { title: "Tlumaczenie z weryfikacja", description: "Maszyna robi, native speaker weryfikuje." },
    ]}
    trust={[
      { number: "5", label: "jezykow w cenie" },
      { number: "0 zl", label: "dodatkowych kosztow per jezyk" },
      { number: "hreflang", label: "poprawne tagi per wersja jezykowa" },
      { number: "domeny", label: "per kraj lub wspolna z katalogami" },
    ]}
    faq={[
      { q: "Czy tlumaczenie jest dobrej jakosci?", a: "Maszyna tlumaczy, native speaker weryfikuje. Mozesz samodzielnie poprawiac tresc w kazdym jezyku." },
      { q: "Czy musisz miec domeny per kraj?", a: "Nie. Mozesz uzyc katalogow /en/, /de/, /cz/." },
      { q: "Czy mozna dodawac kolejne jezyki?", a: "Tak. Kazdy nowy jezyk aktywowany w panelu." },
    ]}
    cta={{
      title: "Strona, ktora pozycjonuje sie globalnie",
      description: "5 jezykow, hreflang, domeny per kraj, ceny lokalne. W cenie hostingu.",
      primaryLabel: "Zloz zamowienie",
      secondaryLabel: "Sprawdz ceny",
      secondaryHref: "/zamowienie",
    }}
    internalLinks={[
      { label: "Sklep online wielojezyczny", href: "/sklep-online" },
      { label: "Menu cyfrowe", href: "/menu-cyfrowe" },
      { label: "Wizytowka prac", href: "/wizytowka-prac" },
      { label: "Akademia kursow", href: "/akademia-kursow" },
    ]}
  />
)

export const WizytowkaPracPage = EkspansjaGlobalnaPage