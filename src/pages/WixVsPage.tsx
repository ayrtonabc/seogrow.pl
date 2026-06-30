import { SEOLandingPage } from "../components/SEOLandingPage"

export const WixVsPage = () => (
  <SEOLandingPage
    path="/wix-vs-seogrow"
    title="Wix vs SEO Grow | Porównanie kreatora i prostego CMS"
    description="Wix to popularny kreator stron. SEO Grow to prosty CMS dla firm z blogiem, hostingiem i SEO technicznym w cenie."
    keywords="wix vs cms seo, wix czy cms, prosty cms"
    h1="Wix vs SEO Grow:"
    h1Accent="kreator czy prosty CMS z SEO technicznym"
    h1Sub="Wix jest dobry do prototypów. Do biznesu — wybierasz mądrze."
    heroImage="/hero-640.webp"
    heroImageAlt="Wix vs SEO Grow — porównanie platform"
    breadcrumb={[{ name: "CMS SEO", href: "/cms-seo" }, { name: "Wix vs SEO Grow", href: "/wix-vs-seogrow" }]}
    sections={[
      {
        heading: "Jakie ograniczenia SEO ma Wix",
        content: "URL-e bazują na ID użytkownika — długie i nieczytelne. Ograniczona kontrola nad strukturą podstron. Dodatkowe funkcje SEO wymagają planu premium. Na darmowym planie — wolne ładowanie i reklamy Wix.",
        image: "/panel.webp",
        imageAlt: "Ograniczenia SEO w Wix",
        highlights: [
          "Długie URL-e generowane automatycznie",
          "Brak pełnej kontroli nad strukturą podstron",
          "Wolne ładowanie na darmowym planie",
          "Reklamy Wix na darmowym planie",
        ],
      },
      {
        heading: "Co dostajesz z SEO Grow",
        content: "Czytelne URL-e, automatyczne meta tagi, szybkość mobile i możliwość połączenia z Google Search Console.",
        image: "/automat.webp",
        imageAlt: "SEO Grow — pełna kontrola nad SEO",
        imagePosition: "left",
        highlights: [
          "URL-e odzwierciedlające hierarchię strony",
          "Automatyczne meta tagi, sitemap, schema",
          "90+ PageSpeed na każdym planie",
          "Zero reklam Wix",
        ],
      },
    ]}
    features={[
      { title: "Czytelne URL-e", description: "Struktura URL odzwierciedla hierarchię strony." },
      { title: "SEO techniczne", description: "Meta tagi, sitemap, schema — w cenie." },
      { title: "Szybkość w standardzie", description: "90+ PageSpeed na każdym planie." },
      { title: "Bez reklam Wix", description: "Twoja marka, twoja strona." },
      { title: "Skalowalność", description: "Od wizytówki do sklepu — bez migracji." },
      { title: "Search Console", description: "Struktura strony gotowa do zgłoszenia w Google." },
    ]}
    trust={[
      { number: "0", label: "ograniczeń SEO jak w Wix" },
      { number: "90+", label: "PageSpeed na każdym planie" },
      { number: "69 zł", label: "miesięcznie z SEO w cenie" },
      { number: "CMS", label: "edycja bez WordPressa" },
    ]}
    faq={[
      { q: "Czy Wix nadaje się do pozycjonowania?", a: "Może, ale ma fundamentalne ograniczenia: długie URL-e, ograniczona struktura, wolne ładowanie na darmowym planie. Dla firmy, która polega na ruchu organicznym — zbyt duże kompromisy." },
      { q: "Ile kosztuje Wix z SEO?", a: "Wix Premium: od ok. 100 zł/mies. + dodatki SEO. Na SEO Grow: 69 zł/mies. z pełnym SEO w cenie." },
    ]}
    cta={{
      title: "Wybierz platformę z SEO technicznym w cenie",
      description: "Bez reklam Wix. Bez ręcznej konfiguracji wtyczek SEO.",
      primaryLabel: "Zobacz jak to działa →",
      secondaryLabel: "Porównaj z WordPressem",
      secondaryHref: "/wordpress-vs-seogrow",
    }}
    internalLinks={[
      { label: "Alternatywa dla WordPressa", href: "/alternativa-wordpress-seo" },
      { label: "CMS SEO — pełna technologia", href: "/cms-seo" },
      { label: "WordPress vs SEO Grow", href: "/wordpress-vs-seogrow" },
    ]}
  />
)
