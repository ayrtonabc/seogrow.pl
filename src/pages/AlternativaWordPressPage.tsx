import { SEOLandingPage } from "../components/SEOLandingPage"

export const AlternativaWordPressPage = () => (
  <SEOLandingPage
    path="/alternativa-wordpress-seo"
    title="Alternatywa dla WordPressa | Prosty CMS z SEO technicznym bez wtyczek"
    description="WordPress wymaga wtyczek, aktualizacji i konfiguracji. Sprawdź alternatywę z prostym CMS i SEO technicznym w cenie."
    keywords="alternatywa dla wordpressa, cms zamiast wordpressa, wordpress czy cms seo"
    h1="Alternatywa dla WordPressa:"
    h1Accent="prosty CMS z SEO technicznym"
    h1Sub="Bez comiesięcznych audytów. Bez konfiguracji SEO. Bez dodatkowych kosztów."
    heroImage="/hero-640.webp"
    heroImageAlt="SEO Grow vs WordPress — porównanie systemów"
    breadcrumb={[{ name: "CMS SEO", href: "/cms-seo" }, { name: "Alternatywa dla WordPressa", href: "/alternativa-wordpress-seo" }]}
    sections={[
      {
        heading: "Czego WordPress nie robi automatycznie",
        content: "WordPress wymaga: wyboru i konfiguracji wtyczki SEO, ręcznego uzupełnienia meta tagów, ręcznego dodania alt textów, regularnych aktualizacji wtyczek.",
        image: "/panel.webp",
        imageAlt: "WordPress wymaga wtyczek — CMS SEO Grow nie",
        imagePosition: "right",
        highlights: [
          "Zero wtyczek SEO do zainstalowania",
          "Automatyczne meta tagi — bez konfiguracji",
          "Bez aktualizacji, które psują stronę",
        ],
      },
      {
        heading: "Kiedy WordPress ma sens",
        content: "WordPress ma sens przy: zespole IT odpowiedzialnym za utrzymanie, bardzo specyficznych funkcjach, istniejącej stronie z tysiącami podstron.",
        image: "/automat.webp",
        imageAlt: "Kiedy warto wybrać WordPress a kiedy dedykowany CMS",
        imagePosition: "left",
        highlights: [
          "W każdej innej sytuacji — dedykowany CMS jest szybszy i tańszy",
          "69 zł/mies. vs 200-800 zł na WordPressie",
          "Realny harmonogram wdrożenia po mini-audycie",
        ],
      },
    ]}
    features={[
      { title: "SEO w cenie", description: "Meta tagi, sitemap i schema markup — bez wtyczek." },
      { title: "Bez aktualizacji", description: "System aktualizuje się sam, bez ryzyka." },
      { title: "Szybkość w standardzie", description: "90+ PageSpeed, nie jako dodatek." },
      { title: "Zero backupów", description: "Automatyczne kopie zapasowe w cenie hostingu." },
      { title: "Search Console", description: "Struktura strony gotowa do zgłoszenia w Google." },
      { title: "Edycja bez kodowania", description: "Zmieniasz treści bez wiedzy technicznej." },
    ]}
    trust={[
      { number: "0", label: "wtyczek SEO do zainstalowania" },
      { number: "0 zł", label: "na comiesięczne audyty SEO" },
      { number: "69 zł", label: "miesięcznie — wszystko w cenie" },
      { number: "CMS", label: "edycja treści bez WordPressa" },
    ]}
    faq={[
      { q: "Czy mogę przenieść stronę z WordPressa?", a: "Tak. Migracja treści z zachowaniem struktury URL i pozycji w Google." },
      { q: "Czy strona na dedykowanym CMS jest widoczna w Google?", a: "Tak. SEO Grow przygotowuje techniczne podstawy: meta tagi, sitemap, strukturę strony i możliwość zgłoszenia w Search Console." },
    ]}
    cta={{
      title: "Wybierz system, który ma SEO w cenie",
      description: "Bez wtyczek. Bez konfiguracji. Bez comiesięcznych audytów.",
      primaryLabel: "Zobacz jak to działa →",
      secondaryLabel: "Porównaj z WordPressem",
      secondaryHref: "/wordpress-vs-seogrow",
    }}
    internalLinks={[
      { label: "CMS SEO — pełna technologia", href: "/cms-seo" },
      { label: "WordPress vs SEO Grow — porównanie", href: "/wordpress-vs-seogrow" },
      { label: "CMS dla małych firm", href: "/cms-seo-pequenas-empresas" },
    ]}
  />
)
