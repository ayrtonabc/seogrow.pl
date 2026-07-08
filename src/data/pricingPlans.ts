// src/data/pricingPlans.ts — Planos con modelo annual + monthly
// Las 49/69/99 zł son SOLO con pago anual. Pago mes a mes lleva un recargo
// configurable (MONTHLY_BILLING_SURCHARGE_PERCENT) que se aplica sobre la cuota mensual.

export type PricingPlan = {
  slug: string
  name: string
  title: string
  description: string
  /** Jednorazowa cena za stronę (klient ją zachowuje na zawsze) */
  sitePrice: number
  /** Cena miesięcznego abonamentu za CMS, hosting i wsparcie (precio anual) */
  monthlyPrice: number
  /** Co dokładnie klient dostaje za cenę strony */
  siteIncludes: string
  /** Co dokładnie klient dostaje w abonamencie co miesiąc */
  monthlyIncludes: string
  features: string[]
  notIncluded?: string[]
  recommended?: boolean
  badge?: string
}

/** Recargo por pago mes a mes sobre la cuota mensual base (en %). Modificable. */
export const MONTHLY_BILLING_SURCHARGE_PERCENT = 20

/** Stawka VAT dla usług elektronicznych (PL). 23% = stawka podstawowa dla JDG. */
export const VAT_PERCENT = 23

/** Cuota mensual real que paga el cliente según modalidad */
export const monthlyRate = (
  plan: Pick<PricingPlan, "monthlyPrice">,
  billing: "annual" | "monthly",
): number => {
  if (billing === "annual") return plan.monthlyPrice
  return Math.round(plan.monthlyPrice * (1 + MONTHLY_BILLING_SURCHARGE_PERCENT / 100) * 100) / 100
}

/** Total a pagar en el primer cobro (NETTO, sin VAT):
 *  - annual: setup + 12 meses al precio base (un solo cobro por todo el año)
 *  - monthly: setup + primera cuota con recargo
 */
export const firstInvoiceTotal = (
  plan: Pick<PricingPlan, "sitePrice" | "monthlyPrice">,
  billing: "annual" | "monthly",
): number => {
  if (billing === "annual") return plan.sitePrice + plan.monthlyPrice * 12
  return plan.sitePrice + monthlyRate(plan, billing)
}

/** Total anualizado (útil para mostrar equivalencia) */
export const annualEquivalent = (
  plan: Pick<PricingPlan, "sitePrice" | "monthlyPrice">,
  billing: "annual" | "monthly",
): number => {
  if (billing === "annual") return plan.sitePrice + plan.monthlyPrice * 12
  return plan.sitePrice + monthlyRate(plan, billing) * 12
}

/** Kwota VAT (PLN) dla kwoty netto */
export const vatAmount = (net: number): number =>
  Math.round(net * (VAT_PERCENT / 100) * 100) / 100

/** Kwota brutto = netto + VAT (zaokrąglone do 2 miejsc) */
export const grossTotal = (net: number): number =>
  Math.round((net + vatAmount(net)) * 100) / 100

/** Format zł */
export const formatPLN = (n: number): string =>
  `${n.toLocaleString("pl-PL", { maximumFractionDigits: 0 })} zł`

export const pricingPlans: PricingPlan[] = [
  {
    slug: "start",
    name: "Start",
    title: "Dla jednoosobowej firmy",
    description:
      "Twoja strona internetowa z systemem do zmiany treści i podstawowym SEO. Idealna dla rzemieślników, freelancerów i małych firm usługowych.",
    sitePrice: 1500,
    monthlyPrice: 49,
    siteIncludes: "Twoja strona wygenerowana pod Twoją firmę + podstawowe SEO",
    monthlyIncludes: "CMS, hosting, SSL i wsparcie e-mail",
    features: [
      "Do 5 podstron (start, oferta, kontakt, cennik, o mnie)",
      "Blog SEO (bez limitu artykułów)",
      "Formularz kontaktowy + mapa Google",
      "Pełna responsywność (telefon i komputer)",
      "Edytor wizualny — łatwiejszy niż dodawanie posta na Facebooku",
      "Podstawowe SEO (schema, meta tagi, szybkość)",
      "Integracja z Google Search Console i Analytics",
      "Wsparcie e-mail w dni robocze",
    ],
  },
  {
    slug: "standard",
    name: "Standard",
    title: "Dla rozwijającej się firmy",
    description:
      "Strona internetowa z systemem do rezerwacji, newsletterów i obsługi klientów. Dla firm, które chcą regularnie pojawiać się w Google i rozwijać się online.",
    sitePrice: 2200,
    monthlyPrice: 69,
    siteIncludes: "Twoja strona wygenerowana pod Twoją firmę + pełne SEO techniczne",
    monthlyIncludes: "CMS, hosting, SSL + wsparcie chat i e-mail",
    badge: "Najczęściej wybierany",
    recommended: true,
    features: [
      "Wszystko z planu Start, plus:",
      "Rozbudowa do 15 podstron (idealne na rozbudowaną ofertę i usługi)",
      "Zaawansowany Blog SEO (bez limitu artykułów, pełna optymalizacja pod wyszukiwarki)",
      "Pełne SEO techniczne (optymalizacja obrazów, zaawansowana struktura nagłówków)",
      "Szybsze wsparcie techniczne (czat i e-mail w dni robocze)",
      "Comiesięczny raport SEO z widocznością w Google",
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    title: "Dla firmy z dużymi wymaganiami",
    description:
      "Strona z systemem dla firm z rozbudowaną ofertą, wieloma usługami lub sklepem. Zaawansowana analityka, priorytetowe wsparcie, wszystkie integracje.",
    sitePrice: 4500,
    monthlyPrice: 99,
    siteIncludes: "Twoja strona wygenerowana pod Twoją firmę + pełne SEO + wszystkie integracje",
    monthlyIncludes: "CMS, hosting, SSL + priorytetowe wsparcie (telefon + czat) + raporty SEO",
    features: [
      "Wszystko z planu Standard, plus:",
      "Rozbudowa do 30 podstron (dla dużych firm i rozbudowanych serwisów)",
      "Zaawansowana analityka: raport widoczności w Google + analiza konkurencji w branży",
      "Dedykowane wsparcie priorytetowe (bezpośredni kontakt telefoniczny i czat)",
      "Gwarancja priorytetowej realizacji zleceń, modyfikacji i aktualizacji",
    ],
  },
]