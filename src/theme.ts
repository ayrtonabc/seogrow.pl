import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

/**
 * DESIGN SYSTEM — SEO GROW
 *
 * Principios:
 * - Profesionalidad via generosidad (whitespace, type scale, line-height)
 * - Confianza via consistencia (tokens semánticos, no valores sueltos)
 * - Conversión via jerarquía (color, tamaño y peso guiando el ojo)
 *
 * Paleta psicológica:
 * - Indigo #4F46E5  → autoridad + confianza SaaS B2B
 * - Dark #191C32    → premium, reduce ansiedad
 * - White #FFFFFF   → claridad
 * - Slate-50/100    → calma, jerarquía sin contraste agresivo
 * - Green-600       → validación (rare → memorable)
 * - Yellow-400      → urgencia (sólo founder banner)
 */

// Escala tipográfica con line-height + letter-spacing calibrados por tamaño
const typography = {
  // Display — para hero H1 principal
  display: {
    fontSize: { base: "40px", md: "56px", lg: "64px" },
    lineHeight: "1.05",
    letterSpacing: "-0.04em",
    fontWeight: "800",
  },
  h1: {
    fontSize: { base: "36px", md: "44px", lg: "52px" },
    lineHeight: "1.1",
    letterSpacing: "-0.035em",
    fontWeight: "800",
  },
  h2: {
    fontSize: { base: "30px", md: "38px", lg: "44px" },
    lineHeight: "1.15",
    letterSpacing: "-0.03em",
    fontWeight: "800",
  },
  h3: {
    fontSize: { base: "22px", md: "26px", lg: "30px" },
    lineHeight: "1.25",
    letterSpacing: "-0.025em",
    fontWeight: "700",
  },
  h4: {
    fontSize: { base: "18px", md: "20px" },
    lineHeight: "1.35",
    letterSpacing: "-0.015em",
    fontWeight: "700",
  },
  body: {
    fontSize: "16px",
    lineHeight: "1.65",
    letterSpacing: "-0.005em",
    fontWeight: "400",
  },
  bodyLg: {
    fontSize: "18px",
    lineHeight: "1.6",
    letterSpacing: "-0.005em",
    fontWeight: "400",
  },
  bodySm: {
    fontSize: "14px",
    lineHeight: "1.6",
    letterSpacing: "0",
    fontWeight: "400",
  },
  caption: {
    fontSize: "13px",
    lineHeight: "1.5",
    letterSpacing: "0.01em",
    fontWeight: "500",
  },
  eyebrow: {
    fontSize: "12px",
    lineHeight: "1",
    letterSpacing: "0.12em",
    fontWeight: "700",
    textTransform: "uppercase" as const,
  },
  // Stats / números grandes
  metric: {
    fontSize: { base: "36px", md: "44px", lg: "52px" },
    lineHeight: "1",
    letterSpacing: "-0.04em",
    fontWeight: "800",
  },
}

// Sombras profesionales — sutiles y profundas, no agresivas
const shadows = {
  xs: "0 1px 2px rgba(15, 23, 42, 0.04)",
  sm: "0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)",
  md: "0 4px 12px rgba(15, 23, 42, 0.06), 0 2px 4px rgba(15, 23, 42, 0.04)",
  lg: "0 12px 28px rgba(15, 23, 42, 0.08), 0 4px 8px rgba(15, 23, 42, 0.04)",
  xl: "0 24px 56px rgba(15, 23, 42, 0.12), 0 8px 16px rgba(15, 23, 42, 0.06)",
  // Sombras con color primario para CTAs
  primarySm: "0 2px 6px rgba(79, 70, 229, 0.2)",
  primaryMd: "0 6px 20px rgba(79, 70, 229, 0.28)",
  primaryLg: "0 12px 32px rgba(79, 70, 229, 0.36)",
}

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
        heading: { value: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
        mono: { value: "'JetBrains Mono', 'SF Mono', Menlo, monospace" },
      },
      // Border radius sutil — menos "AI default"
      radii: {
        none: { value: "0" },
        sm: { value: "4px" },
        md: { value: "8px" },
        lg: { value: "12px" },
        xl: { value: "16px" },
        "2xl": { value: "20px" },
        "3xl": { value: "24px" },
        full: { value: "9999px" },
      },
      // Color tokens explícitos
      colors: {
        brand: {
          50: { value: "#EEF2FF" },
          100: { value: "#E0E7FF" },
          200: { value: "#C7D2FE" },
          300: { value: "#A5B4FC" },
          400: { value: "#818CF8" },
          500: { value: "#6366F1" },
          600: { value: "#4F46E5" }, // primary
          700: { value: "#4338CA" },
          800: { value: "#3730A3" },
          900: { value: "#312E81" },
          950: { value: "#1E1B4B" },
        },
        slate: {
          50: { value: "#F8FAFC" },
          100: { value: "#F1F5F9" },
          200: { value: "#E2E8F0" },
          300: { value: "#CBD5E1" },
          400: { value: "#94A3B8" },
          500: { value: "#64748B" },
          600: { value: "#475569" },
          700: { value: "#334155" },
          800: { value: "#1E293B" },
          900: { value: "#0F172A" },
          950: { value: "#020617" },
        },
        ink: { value: "#191C32" }, // dark principal
        success: {
          50: { value: "#ECFDF5" },
          500: { value: "#10B981" },
          600: { value: "#059669" },
          700: { value: "#047857" },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Backgrounds
        "bg.canvas": { value: "#FFFFFF" },
        "bg.subtle": { value: "#F8FAFC" },
        "bg.muted": { value: "#F1F5F9" },
        "bg.dark": { value: "#191C32" },
        "bg.darkSubtle": { value: "#0F1124" },
        "bg.brand": { value: "#4F46E5" },
        "bg.brandSubtle": { value: "#EEF2FF" },
        // Texto
        "fg.default": { value: "#0F172A" },
        "fg.muted": { value: "#475569" },
        "fg.subtle": { value: "#64748B" },
        "fg.faint": { value: "#94A3B8" },
        "fg.inverse": { value: "#FFFFFF" },
        "fg.inverseMuted": { value: "rgba(255, 255, 255, 0.7)" },
        "fg.inverseFaint": { value: "rgba(255, 255, 255, 0.55)" },
        "fg.brand": { value: "#4F46E5" },
        "fg.brandHover": { value: "#4338CA" },
        "fg.success": { value: "#059669" },
        // Borders
        "border.default": { value: "#E2E8F0" },
        "border.subtle": { value: "#F1F5F9" },
        "border.muted": { value: "rgba(15, 23, 42, 0.06)" },
        "border.strong": { value: "#CBD5E1" },
        "border.brand": { value: "#4F46E5" },
        "border.inverse": { value: "rgba(255, 255, 255, 0.1)" },
      },
    },
    recipes: {
      // Botón primario — sólido indigo con sombra
      button: {
        base: {
          fontFamily: "body",
          fontWeight: "600",
          letterSpacing: "-0.005em",
          borderRadius: "lg",
          transition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          _focusVisible: {
            outline: "2px solid",
            outlineColor: "fg.brand",
            outlineOffset: "3px",
          },
        },
        variants: {
          solid: {
            bg: "fg.brand",
            color: "fg.inverse",
            boxShadow: "primarySm",
            _hover: {
              bg: "fg.brandHover",
              transform: "translateY(-1px)",
              boxShadow: "primaryMd",
              _disabled: { transform: "none" },
            },
            _active: { transform: "translateY(0)" },
          },
          outline: {
            bg: "transparent",
            color: "fg.default",
            borderWidth: "1px",
            borderColor: "border.strong",
            _hover: { bg: "bg.subtle", borderColor: "border.default" },
          },
          ghost: {
            bg: "transparent",
            color: "fg.default",
            _hover: { bg: "bg.subtle" },
          },
        },
        sizes: {
          md: { h: "44px", px: "5", fontSize: "15px" },
          lg: { h: "52px", px: "7", fontSize: "16px" },
          xl: { h: "60px", px: "8", fontSize: "17px" },
        },
      },
      // Card base — superficie elevada sutil
      card: {
        base: {
          bg: "bg.canvas",
          borderRadius: "xl",
          borderWidth: "1px",
          borderColor: "border.default",
          transition: "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        variants: {
          elevated: {
            boxShadow: "sm",
            _hover: {
              boxShadow: "lg",
              borderColor: "border.muted",
              transform: "translateY(-2px)",
            },
          },
          flat: {
            _hover: {
              borderColor: "border.brand",
              transform: "translateY(-2px)",
              boxShadow: "primarySm",
            },
          },
        },
      },
    },
    globalCss: {
      // Reset universal
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      "html, body": {
        fontFamily: "body",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
        bg: "bg.canvas",
        color: "fg.default",
        // Previene scroll horizontal accidental por elementos anchos
        overflowX: "hidden",
        // iOS: previene zoom no intencional en inputs (font-size mínimo 16px)
        WebkitTextSizeAdjust: "100%",
      },
      body: {
        lineHeight: "1.65",
        // Touch optimizado: reduce delay de 300ms en tap (legacy iOS)
        touchAction: "manipulation",
      },
      "h1, h2, h3, h4, h5, h6": {
        fontFamily: "heading",
        letterSpacing: "-0.025em",
        fontWeight: "800",
        color: "fg.default",
        // Previene que los títulos largos rompan layout
        overflowWrap: "break-word",
        wordWrap: "break-word",
      },
      // Sticky nav offset for scroll-anchors + scrollIntoView
      html: {
        scrollPaddingTop: "120px",
        // Smooth scrolling para usuarios sin prefers-reduced-motion
        scrollBehavior: "smooth",
      },
      "h1, h2": {
        scrollMarginTop: "120px",
      },
      // Inputs: font-size mínimo 16px para evitar zoom en iOS
      "input, textarea, select, button": {
        fontSize: "16px",
      },
      // Imágenes responsivas por defecto
      img: {
        maxWidth: "100%",
        height: "auto",
        display: "block",
      },
      // iOS safe-area: respeta notch / home indicator
      ".safe-top": {
        paddingTop: "env(safe-area-inset-top)",
      },
      ".safe-bottom": {
        paddingBottom: "env(safe-area-inset-bottom)",
      },
      // Tap target mínimo 44x44px (Apple HIG + WCAG)
      "button, a[role='button']": {
        minHeight: "44px",
      },
      // Modulos carousel — ocultar scrollbar cross-browser (Firefox + WebKit + IE)
      ".modulos-scroll-track": {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      },
      ".modulos-scroll-track::-webkit-scrollbar": {
        display: "none !important",
        width: "0 !important",
        height: "0 !important",
        background: "transparent !important",
      },
      ".modulos-scroll-track::-webkit-scrollbar-track": { display: "none !important" },
      ".modulos-scroll-track::-webkit-scrollbar-thumb": { display: "none !important" },
      ".modulos-scroll-track *::-webkit-scrollbar": { display: "none !important" },
      "::selection": {
        bg: "brand.200",
        color: "brand.900",
      },
      // IndustrySearch component animations
      "@keyframes fadeUp": {
        from: { opacity: "0", transform: "translateY(12px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      "@keyframes blink": {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0" },
      },
      ".industry-fade-up": {
        animation: "fadeUp 380ms ease-out both",
      },
      ".industry-fade-up-delay": {
        animation: "fadeUp 380ms 70ms ease-out both",
      },
      ".industry-search-cursor": {
        animation: "blink 1s step-end infinite",
      },
      ".group-hover-underline:hover": {
        textDecoration: "underline",
      },
      // Reduced motion accessibility — crítico para usuarios con vestibular disorders
      "@media (prefers-reduced-motion: reduce)": {
        "html": {
          scrollBehavior: "auto",
        },
        "*, *::before, *::after": {
          animationDuration: "0.01ms !important",
          animationIterationCount: "1 !important",
          transitionDuration: "0.01ms !important",
          scrollBehavior: "auto !important",
        },
      },
      // Print: optimiza para imprimir
      "@media print": {
        "*, *::before, *::after": {
          background: "transparent !important",
          color: "#000 !important",
          boxShadow: "none !important",
          textShadow: "none !important",
        },
        "a, a:visited": {
          textDecoration: "underline",
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
export { typography, shadows }
export type Typography = typeof typography