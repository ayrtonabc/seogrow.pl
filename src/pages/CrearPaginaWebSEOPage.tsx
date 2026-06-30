import { SEOLandingPage } from "../components/SEOLandingPage"

export const CrearPaginaWebSEOPage = () => (
  <SEOLandingPage
    path="/crear-pagina-web-seo"
    title="Tworzenie strony internetowej zoptymalizowanej pod SEO | Od briefu do publikacji"
    description="Jak stworzyć stronę przygotowaną pod SEO techniczne. Praktyczny przewodnik krok po kroku."
    keywords="tworzenie strony www seo, jak stworzyc strone zoptymalizowana, strona www seo techniczne"
    h1="Jak stworzyć stronę,"
    h1Accent="przygotowaną pod SEO techniczne"
    h1Sub="Bez wtyczek. Bez specjalisty. Bez comiesięcznych faktur."
    heroImage="/hero-640.webp"
    heroImageAlt="Tworzenie strony z SEO — panel CMS"
    breadcrumb={[{ name: "Zasoby", href: "#" }, { name: "Tworzenie strony z SEO", href: "/crear-pagina-web-seo" }]}
    sections={[
      {
        heading: "5 elementów, które pomagają Google zrozumieć stronę",
        content: "Szybkość ładowania, struktura URL, schema markup, mobile-first, linkowanie wewnętrzne. Każdy z tych elementów w tradycyjnym CMS często wymaga ręcznej konfiguracji.",
        image: "/panel.webp",
        imageAlt: "5 elementów SEO technicznego",
        highlights: [
          "Szybkość ładowania — wolne strony tracą użytkowników",
          "Struktura URL — prosta i czytelna",
          "Mobile-first — 60% ruchu z telefonu",
        ],
      },
      {
        heading: "Dlaczego wiele stron startuje bez podstaw SEO",
        content: "Projektant robi design, programista wdraża — i łatwo pominąć meta tagi, strukturę, sitemapę oraz podstawową analitykę. Później pojawiają się dodatkowe koszty.",
        image: "/automat.webp",
        imageAlt: "Dlaczego strony startują bez podstaw SEO",
        imagePosition: "left",
        highlights: [
          "Wybór CMS determinuje, czy SEO będzie dodatkowym kosztem",
          "System z wbudowanym SEO eliminuje ten problem na starcie",
          "Wdrożenie + 69 zł/mies. = hosting, SSL i utrzymanie w cenie",
        ],
      },
    ]}
    features={[
      { title: "Strona od briefu do publikacji", description: "Realny harmonogram po mini-audycie i otrzymaniu materiałów." },
      { title: "Automatyczna optymalizacja techniczna", description: "Meta tagi, sitemap, schema — bez ręcznej konfiguracji." },
      { title: "Szybkość 90+ PageSpeed", description: "W standardzie, nie jako dodatek." },
      { title: "CMS do samodzielnej edycji", description: "Zmieniasz treści bez wiedzy technicznej." },
      { title: "Search Console", description: "Strona przygotowana do zgłoszenia w Google." },
      { title: "Zero wtyczek", description: "SEO działa bez dodatkowych instalacji." },
    ]}
    trust={[
      { number: "CMS", label: "samodzielna edycja treści" },
      { number: "90+", label: "PageSpeed bez dodatkowej pracy" },
      { number: "0 zł", label: "na wtyczki i audyty SEO" },
      { number: "69 zł", label: "miesięcznie — całość w cenie" },
    ]}
    faq={[
      { q: "Czy mogę samodzielnie edytować stronę?", a: "Tak. CMS jest zaprojektowany dla osób bez wiedzy technicznej." },
      { q: "Jak długo trwa stworzenie strony?", a: "Termin zależy od zakresu strony i materiałów. Podajemy go po mini-audycie." },
    ]}
    cta={{
      title: "Stwórz stronę przygotowaną pod Google",
      description: "Bez wtyczek. Bez WordPressa. Z technicznymi podstawami SEO w cenie.",
      primaryLabel: "Złóż zamówienie →",
      secondaryLabel: "Sprawdź ceny",
      secondaryHref: "/zamowienie",
    }}
    internalLinks={[
      { label: "CMS SEO — jak to działa", href: "/cms-seo" },
      { label: "Automatyczne SEO — jak to działa", href: "/cms-con-seo-automatico" },
      { label: "Alternatywy dla WordPressa", href: "/alternativa-wordpress-seo" },
    ]}
  />
)
