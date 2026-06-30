import { SEOLandingPage } from "../components/SEOLandingPage"

export const WordPressVsPage = () => (
  <SEOLandingPage
    path="/wordpress-vs-seogrow"
    title="WordPress vs SEO Grow | Porownanie CMS dla malej firmy"
    description="WordPress wymaga wtyczek SEO, aktualizacji i konfiguracji. SEO Grow laczy prosty CMS, blog i SEO techniczne w jednym systemie."
    keywords="wordpress vs cms seo, wordpress czy seo grow, porownanie wordpress cms"
    h1="WordPress vs SEO Grow:"
    h1Accent="prosty CMS czy rozbudowany WordPress"
    h1Sub="Rzeczowe porownanie. Bez obietnic na skroty."
    heroImage="/panel.webp"
    heroImageAlt="Porownanie WordPress vs SEO Grow"
    breadcrumb={[{ name: "CMS SEO", href: "/cms-seo" }, { name: "WordPress vs SEO Grow", href: "/wordpress-vs-seogrow" }]}
    sections={[
      {
        heading: "Szybkie porownanie",
        content: "WordPress wymaga wtyczki SEO, recznej konfiguracji, ciaglych aktualizacji. SEO Grow ma SEO w cenie hostingu.",
        image: "/automat.webp",
        imageAlt: "WordPress vs SEO Grow — porownanie SEO technicznego",
        highlights: [
          "Meta tagi, sitemap, schema — w cenie",
          "90+ PageSpeed w standardzie",
          "Zero aktualizacji — system dba o siebie",
          "Sitemap i Search Console w standardzie",
        ],
      },
      {
        heading: "Kiedy WordPress wygrywa",
        content: "WordPress ma sens przy: zespole IT odpowiedzialnym za utrzymanie, specyficznych funkcjach, duzej stronie z tysiacami podstron.",
        image: "/hero-640.webp",
        imageAlt: "Kiedy WordPress jest lepszym wyborem",
        imagePosition: "left",
        highlights: [
          "W kazdej innej sytuacji — dedykowany CMS jest szybszy i tanszy",
          "Realny harmonogram wdrozenia po mini-audycie",
          "69 zl/mies. vs 200-800 zl na WordPressie",
        ],
      },
    ]}
    features={[
      { title: "SEO w cenie hostingu", description: "Meta tagi, sitemap, schema markup — bez wtyczek." },
      { title: "90+ PageSpeed", description: "Szybkosc strony w standardzie." },
      { title: "Zero aktualizacji", description: "System aktualizuje sie sam." },
      { title: "Search Console", description: "Struktura strony gotowa do zgloszenia w Google." },
      { title: "Zero wtyczek SEO", description: "SEO dziala bez konfiguracji." },
      { title: "Prosty CMS", description: "Dla osob bez wiedzy technicznej." },
    ]}
    trust={[
      { number: "69 zl", label: "miesiecznie vs 200-800 zl na WordPressie" },
      { number: "0 wtyczek", label: "SEO do zainstalowania" },
      { number: "CMS", label: "edycja bez WordPressa" },
      { number: "0", label: "aktualizacji do recznego wykonania" },
    ]}
    faq={[
      { q: "Czy WordPress moze miec dobre SEO techniczne?", a: "Tak, ale zwykle wymaga wtyczek SEO, dobrego hostingu i regularnych aktualizacji. Kazdy element to dodatkowy koszt i ryzyko. SEO Grow upraszcza te podstawy w jednym systemie." },
      { q: "Ile kosztuje utrzymanie WordPressa miesiecznie?", a: "Hosting (50-150 zl) + wtyczki (30-200 zl) + wsparcie (opcjonalne, 100-500 zl) = 80-850 zl/mies. Na SEO Grow: 69 zl/mies. wszystko w cenie." },
    ]}
    cta={{
      title: "Wybierz CMS z SEO w cenie",
      description: "Bez wtyczek. Bez aktualizacji. Bez audytow. 69 zl/mies.",
      primaryLabel: "Sprawdz ceny i zamow",
    }}
    internalLinks={[
      { label: "Alternatywa dla WordPressa", href: "/alternativa-wordpress-seo" },
      { label: "Wix vs SEO Grow", href: "/wix-vs-seogrow" },
      { label: "CMS SEO — jak to dziala", href: "/cms-seo" },
    ]}
  />
)
