import { SEOLandingPage } from "../components/SEOLandingPage"

export const CMSSESPequePage = () => (
  <SEOLandingPage
    path="/cms-seo-pequenas-empresas"
    title="CMS SEO dla małych firm | Prosty panel i SEO techniczne"
    description="CMS SEO dla małych firm pomaga uporządkować treści, meta tagi, sitemap i strukturę strony bez nauki WordPressa."
    keywords="cms seo dla małych firm, cms dla małej firmy, prosty cms, seo techniczne"
    h1="CMS SEO dla małych firm:"
    h1Accent="SEO techniczne bez agencyjnego budżetu"
    h1Sub="Od 1-osobowej działalności do 50-pracownikowej firmy."
    heroImage="/hero-640.webp"
    heroImageAlt="Firma korzystająca z CMS SEO Grow na tablecie"
    breadcrumb={[{ name: "CMS SEO", href: "/cms-seo" }, { name: "Dla małych firm", href: "/cms-seo-pequenas-empresas" }]}
    sections={[
      {
        heading: "Ile kosztuje widoczność w Google bez agencji",
        content: "Typowa agencja SEO: 1500-4000 zł miesięcznie za raporty i zalecenia. CMS SEO przenosi tę odpowiedzialność na system — techniczna warstwa SEO działa non-stop w cenie hostingu.",
        image: "/panel.webp",
        imageAlt: "Porównanie kosztów: agencja vs CMS SEO Grow",
        highlights: [
          "Brak comiesięcznej faktury za SEO",
          "Jednorazowe wdrożenie + stały hosting = 69 zł/mies.",
          "Czas zaoszczędzony na raportach = czas na klientów",
        ],
      },
      {
        heading: "Co dostajesz w cenie",
        content: "Techniczne podstawy SEO, które często wymagają dodatkowej konfiguracji, w CMS SEO Grow są częścią systemu.",
        image: "/automat.webp",
        imageAlt: "Automatyczne SEO w CMS SEO Grow — wszystko w cenie",
        imagePosition: "left",
        highlights: [
          "Meta tagi, sitemap, schema markup — w standardzie",
          "90+ PageSpeed — szybkość bez dodatkowej pracy",
          "Sitemap i struktura strony gotowe do zgłoszenia w Search Console",
        ],
      },
    ]}
    features={[
      { title: "Bez comiesięcznej faktury", description: "SEO w cenie hostingu — jedna płatność za wdrożenie." },
      { title: "Techniczna warstwa non-stop", description: "Meta tagi, sitemap, schema — działają całodobowo." },
      { title: "Strona z harmonogramem", description: "Termin wdrożenia ustalamy po mini-audycie i otrzymaniu materiałów." },
      { title: "Search Console", description: "Pomagamy przygotować stronę do zgłoszenia w Google." },
      { title: "Moduły pod biznes", description: "Sklep, rezerwacje, blog — dobierasz tylko to, co wykorzystasz." },
      { title: "Edycja bez kodowania", description: "Zmieniasz treści samodzielnie, bez wiedzy technicznej." },
    ]}
    trust={[
      { number: "69 zł", label: "miesięcznie — całe SEO w cenie" },
      { number: "CMS", label: "edycja bez WordPressa" },
      { number: "0 zł", label: "na wtyczki, audyty i raporty SEO" },
      { number: "SEO", label: "techniczne podstawy w cenie" },
    ]}
    faq={[
      { q: "Czy mała firma potrzebuje SEO?", a: "Jeśli chcesz, żeby klienci znajdowali cię przez Google zamiast przez reklamy — tak. Ruch organiczny jest trwały i darmowy." },
      { q: "Ile kosztuje CMS SEO dla małej firmy?", a: "Wdrożenie od 2200 zł + hosting od 69 zł/mies. W cenie: SEO techniczne, hosting, SSL, domeny." },
    ]}
    cta={{
      title: "Załóż stronę przygotowaną pod Google",
      description: "Bez comiesięcznych faktur za samą technikę SEO. Bez wtyczek. Bez WordPressa.",
      primaryLabel: "Złóż zamówienie →",
    }}
    internalLinks={[
      { label: "CMS SEO — strona główna", href: "/cms-seo", note: "cała technologia" },
      { label: "Automatyczne SEO — jak to działa", href: "/cms-con-seo-automatico" },
      { label: "WordPress vs SEO Grow", href: "/wordpress-vs-seogrow" },
    ]}
  />
)
