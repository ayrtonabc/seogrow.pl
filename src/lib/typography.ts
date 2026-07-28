// src/lib/typography.ts
// Tipografía unificada para títulos de sección. Mantiene el mismo "fuerza"
// y tamaño que el H1 del Hero en todos los H2 de las secciones de la home.
// Single source of truth: si cambia el H1 del Hero, se actualiza aquí.

// Hero H1 reference (HeroSection.tsx):
//   fontSize: { base: "30px", sm: "36px", md: "42px", lg: "48px" }
//   fontWeight: "800"
//   letterSpacing: "-0.025em"
//   lineHeight: "1.15"

export const SECTION_TITLE_PROPS = {
  fontSize: { base: "30px", sm: "36px", md: "42px", lg: "48px" },
  fontWeight: "800",
  letterSpacing: "-0.025em",
  lineHeight: "1.15",
} as const

export const SECTION_TITLE_COLOR_DARK = "#0F172A" // slate-900
export const SECTION_TITLE_COLOR_LIGHT = "#FFFFFF" // white (para fondos oscuros)
