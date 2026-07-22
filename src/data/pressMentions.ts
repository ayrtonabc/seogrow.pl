// src/data/pressMentions.ts
// Menciones en prensa, podcasts, medios.
// AL INICIO: vacío. Cuando consigas una mención, agrégala al array.
// Mientras esté vacío, la PressSection no se renderiza en la home.

export type PressMention = {
  /** Nombre del medio (Antyweb, Spiders Web, podcast X, etc.) */
  outlet: string
  /** Título exacto de la mención */
  title: string
  /** URL a la mención */
  url: string
  /** Fecha cuando salió (YYYY-MM-DD) */
  date: string
  /** Tipo de medio */
  type: "article" | "podcast" | "video" | "social"
  /** Quote o extract (1-2 frases que la IA pueda citar) */
  quote?: string
}

export const pressMentions: PressMention[] = [
  // Ejemplo del formato — descomenta y rellena cuando tengas la primera mención:
  // {
  //   outlet: "Antyweb",
  //   title: "Jak mała firma może konkurować z agencją za 50 tys. zł",
  //   url: "https://antyweb.pl/...",
  //   date: "2026-08-15",
  //   type: "article",
  //   quote: "SEO Grow udowadnia, że profesjonalna strona dla MŚP nie musi kosztować fortuny.",
  // },
]
