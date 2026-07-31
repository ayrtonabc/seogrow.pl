import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

/**
 * DESIGN SYSTEM — SEO GROW (Wix-inspired hybrid)
 *
 * Principios:
 * - Profesionalidad via generosidad (whitespace, type scale, line-height)
 * - Confianza via consistencia (tokens semánticos, no valores sueltos)
 * - Conversión via jerarquía (color, tamaño y peso guiando el ojo)
 *
 * Estilo: Híbrido "wix-style" — limpio (blanco + negro + slate) con 1 acento
 * profesional teal (verde-azulado), tipo SaaS premium B2B.
 *
 * Paleta psicológica:
 * - Teal-600 #0D9488 → acento (CTA, links, badges) — serio + moderno
 * - Teal-50/100 → fondos sutiles, hovers
 * - Ink #0A0A0A → negro premium (text principal, dark sections)
 * - Cream #FAF7F2 → fondo alternado cálido (separa secciones sin contraste duro)
 * - White bg.canvas → claridad, espacios de respiración
 * - Slate-50/100/200 → grises neutros, jerarquía sin contraste agresivo
 */

// Escala tipográfica wix.com.pl REAL
// Wix usa H1 ~64-80px con line-height 1.05 (NO 0.92 ultra-condensado)
// Letter-spacing -0.02em (NO -0.05em agresivo)
const typography = {
  // Display — para hero H1 principal (wix-style: 56-80px, line-height 1.05)
  display: {
    fontSize: { base: "44px", md: "60px", lg: "80px" },
    lineHeight: { base: "1.1", md: "1.05", lg: "1.05" },
    letterSpacing: "-0.02em",
    fontWeight: "700",
  },
  h1: {
    fontSize: { base: "36px", md: "48px", lg: "64px" },
    lineHeight: { base: "1.15", md: "1.1", lg: "1.05" },
    letterSpacing: "-0.02em",
    fontWeight: "700",
  },
  h2: {
    fontSize: { base: "30px", md: "40px", lg: "52px" },
    lineHeight: { base: "1.2", md: "1.1", lg: "1.1" },
    letterSpacing: "-0.02em",
    fontWeight: "700",
  },
  h3: {
    fontSize: { base: "22px", md: "28px", lg: "32px" },
    lineHeight: "1.25",
    letterSpacing: "-0.015em",
    fontWeight: "700",
  },
  h4: {
    fontSize: { base: "18px", md: "20px" },
    lineHeight: "1.3",
    letterSpacing: "-0.01em",
    fontWeight: "600",
  },
  h5: {
    fontSize: { base: "16px", md: "17px" },
    lineHeight: "1.4",
    letterSpacing: "0",
    fontWeight: "600",
  },
  body: {
    fontSize: "16px",
    lineHeight: "1.6",
    letterSpacing: "0",
    fontWeight: "400",
  },
  bodyLg: {
    fontSize: "18px",
    lineHeight: "1.6",
    letterSpacing: "0",
    fontWeight: "400",
  },
  bodySm: {
    fontSize: "14px",
    lineHeight: "1.55",
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
    fontSize: "13px",
    lineHeight: "1",
    letterSpacing: "0.08em",
    fontWeight: "600",
    textTransform: "uppercase" as const,
  },
  // Stats / números grandes
  metric: {
    fontSize: { base: "40px", md: "56px", lg: "72px" },
    lineHeight: "1.05",
    letterSpacing: "-0.02em",
    fontWeight: "700",
  },
  // Eyebrow con acento de color
  eyebrowAccent: {
    fontSize: "13px",
    lineHeight: "1",
    letterSpacing: "0.08em",
    fontWeight: "600",
    textTransform: "uppercase" as const,
  },
}

// Sombras profesionales — sutiles y profundas, no agresivas
// Inspirado en wix.com.pl: sombras suaves, nunca negras duras
const shadows = {
  xs: "0 1px 2px rgba(10, 10, 10, 0.04)",
  sm: "0 1px 3px rgba(10, 10, 10, 0.05), 0 1px 2px rgba(10, 10, 10, 0.04)",
  md: "0 4px 12px rgba(10, 10, 10, 0.06), 0 2px 4px rgba(10, 10, 10, 0.04)",
  lg: "0 12px 28px rgba(10, 10, 10, 0.08), 0 4px 8px rgba(10, 10, 10, 0.04)",
  xl: "0 24px 56px rgba(10, 10, 10, 0.12), 0 8px 16px rgba(10, 10, 10, 0.06)",
  // Sombras con acento teal para CTAs y cards destacadas
  accentSm: "0 2px 8px rgba(13, 148, 136, 0.18)",
  accentMd: "0 8px 24px rgba(13, 148, 136, 0.24)",
  accentLg: "0 16px 40px rgba(13, 148, 136, 0.32)",
  // Sombras para cards sobre fondo cream
  warmSm: "0 1px 3px rgba(120, 80, 30, 0.05), 0 1px 2px rgba(120, 80, 30, 0.03)",
  warmMd: "0 6px 16px rgba(120, 80, 30, 0.07), 0 2px 4px rgba(120, 80, 30, 0.04)",
  // Sombra header sticky (wix-style: header flotante con sombra muy sutil al scroll)
  header: "0 1px 0 rgba(10, 10, 10, 0.06), 0 4px 12px rgba(10, 10, 10, 0.04)",
}

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        // Inter — la tipografía de wix.com.pl. Moderna, neutra, muy legible
        body: { value: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" },
        heading: { value: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" },
        mono: { value: "'JetBrains Mono', 'SF Mono', Menlo, monospace" },
      },
      // Border radius — wix usa 8-12px en cards, 9999px en pills
      radii: {
        none: { value: "0" },
        xs: { value: "4px" },
        sm: { value: "6px" },
        md: { value: "10px" },
        lg: { value: "14px" },
        xl: { value: "20px" },
        "2xl": { value: "28px" },
        "3xl": { value: "36px" },
        full: { value: "9999px" },
      },
      // Color tokens — paleta wix-style híbrido
      colors: {
        // Acento teal — verde-azulado profesional
        accent: {
          50: { value: "#F0FDFA" },
          100: { value: "#CCFBF1" },
          200: { value: "#99F6E4" },
          300: { value: "#5EEAD4" },
          400: { value: "#2DD4BF" },
          500: { value: "#14B8A6" },
          600: { value: "#0D9488" }, // primary accent
          700: { value: "#0F766E" },
          800: { value: "#115E59" },
          900: { value: "#134E4A" },
          950: { value: "#042F2E" },
        },
        // Slate — grises neutros (valores hex reales para que NO se autoreferencien)
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
        // Ink — negro premium para texto principal
        ink: { value: "#0A0A0A" },
        // Cream — fondo alternado cálido (wix-style)
        cream: { value: "#FAF7F2" },
        creamDark: { value: "#F5F0E8" },
        // Color secundario para badges/etiquetas (wix usa varios)
        warm: {
          50: { value: "#FFF7ED" },
          100: { value: "#FFEDD5" },
          500: { value: "#F97316" },
          600: { value: "#EA580C" },
        },
        // Estados
        success: {
          50: { value: "#F0FDF4" },
          500: { value: "#22C55E" },
          600: { value: "#16A34A" },
          700: { value: "#15803D" },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Backgrounds — wix-style alternancia: canvas → subtle → cream → dark
        // ⚠️ Todos los values deben ser hex/rgba REALES (no autoreferencias)
        "bg.canvas": { value: "#FFFFFF" },
        "bg.subtle": { value: "#F8FAFC" },
        "bg.muted": { value: "#F1F5F9" },
        "bg.cream": { value: "#FAF7F2" },
        "bg.creamDark": { value: "#F5F0E8" },
        "bg.dark": { value: "#0A0A0A" },
        "bg.darkSubtle": { value: "#171717" },
        "bg.accent": { value: "#0D9488" },
        "bg.accentSubtle": { value: "#F0FDFA" },
        "bg.accentHover": { value: "#0F766E" },
        // Texto
        "fg.default": { value: "#0A0A0A" },
        "fg.muted": { value: "#475569" },
        "fg.subtle": { value: "#64748B" },
        "fg.faint": { value: "#94A3B8" },
        "fg.inverse": { value: "#FFFFFF" },
        "fg.inverseMuted": { value: "rgba(255, 255, 255, 0.75)" },
        "fg.inverseFaint": { value: "rgba(255, 255, 255, 0.55)" },
        "fg.accent": { value: "#0D9488" },
        "fg.accentHover": { value: "#0F766E" },
        "fg.success": { value: "#15803D" },
        // Borders
        "border.default": { value: "#E2E8F0" },
        "border.subtle": { value: "#F1F5F9" },
        "border.muted": { value: "rgba(10, 10, 10, 0.06)" },
        "border.strong": { value: "#CBD5E1" },
        "border.accent": { value: "#0D9488" },
        "border.inverse": { value: "rgba(255, 255, 255, 0.12)" },
        "border.inverseMuted": { value: "rgba(255, 255, 255, 0.08)" },
      },
    },
    recipes: {
      // Botón primario — sólido teal con sombra (wix-style: bold, con lift en hover)
      button: {
        base: {
          fontFamily: "body",
          fontWeight: "600",
          letterSpacing: "-0.01em",
          borderRadius: "full",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          _focusVisible: {
            outline: "2px solid",
            outlineColor: "fg.accent",
            outlineOffset: "3px",
          },
        },
        variants: {
          solid: {
            bg: "bg.accent",
            color: "fg.inverse",
            boxShadow: "accentSm",
            _hover: {
              bg: "bg.accentHover",
              transform: "translateY(-1px)",
              boxShadow: "accentMd",
              _disabled: { transform: "none" },
            },
            _active: { transform: "translateY(0)" },
          },
          // Variante dark — negro sólido para CTAs principales en hero
          dark: {
            bg: "bg.dark",
            color: "fg.inverse",
            boxShadow: "md",
            _hover: {
              bg: "bg.darkSubtle",
              transform: "translateY(-1px)",
              boxShadow: "lg",
              _disabled: { transform: "none" },
            },
            _active: { transform: "translateY(0)" },
          },
          outline: {
            bg: "transparent",
            color: "fg.default",
            borderWidth: "1px",
            borderColor: "border.strong",
            _hover: {
              bg: "bg.subtle",
              borderColor: "fg.default",
              _disabled: { transform: "none" },
            },
          },
          // Ghost para CTAs secundarios en hero
          ghost: {
            bg: "transparent",
            color: "fg.default",
            _hover: { bg: "bg.subtle" },
          },
          // Ghost inverso para usar sobre fondos dark
          ghostInverse: {
            bg: "transparent",
            color: "fg.inverse",
            borderWidth: "1px",
            borderColor: "border.inverse",
            _hover: {
              bg: "rgba(255, 255, 255, 0.08)",
              borderColor: "rgba(255, 255, 255, 0.24)",
            },
          },
        },
        sizes: {
          sm: { h: "36px", px: "4", fontSize: "14px" },
          md: { h: "44px", px: "5", fontSize: "15px" },
          lg: { h: "52px", px: "7", fontSize: "16px" },
          xl: { h: "60px", px: "8", fontSize: "17px" },
        },
      },
      // Card base — wix-style: bordes suaves, sombra mínima, hover lift
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
              transform: "translateY(-3px)",
            },
          },
          flat: {
            _hover: {
              borderColor: "border.accent",
              transform: "translateY(-2px)",
              boxShadow: "accentSm",
            },
          },
          // Card sobre fondo cream — sombra cálida sutil
          warm: {
            boxShadow: "warmSm",
            borderColor: "border.subtle",
            _hover: {
              boxShadow: "warmMd",
              borderColor: "border.default",
              transform: "translateY(-3px)",
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
        scrollPaddingTop: "100px",
        // Smooth scrolling para usuarios sin prefers-reduced-motion
        scrollBehavior: "smooth",
      },
      "h1, h2": {
        scrollMarginTop: "100px",
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
        bg: "accent.200",
        color: "accent.900",
      },
      // IndustrySearch component animations
      "@keyframes fadeUp": {
        from: { opacity: "0", transform: "translateY(16px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      "@keyframes fadeUpSmall": {
        from: { opacity: "0", transform: "translateY(8px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      "@keyframes slideInLeft": {
        from: { opacity: "0", transform: "translateX(-24px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
      "@keyframes slideInRight": {
        from: { opacity: "0", transform: "translateX(24px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
      "@keyframes scaleIn": {
        from: { opacity: "0", transform: "scale(0.96)" },
        to: { opacity: "1", transform: "scale(1)" },
      },
      "@keyframes float": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-8px)" },
      },
      "@keyframes blink": {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0" },
      },
      "@keyframes marqueeScroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-50%)" },
      },
      "@keyframes pulse": {
        "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
        "50%": { transform: "scale(1.15)", opacity: "1" },
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
      // Wix-style reveal animations: aplicadas al cargar la página
      ".wix-fade-up": {
        animation: "fadeUp 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      ".wix-fade-up-1": {
        animation: "fadeUp 600ms 80ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      ".wix-fade-up-2": {
        animation: "fadeUp 600ms 160ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      ".wix-fade-up-3": {
        animation: "fadeUp 600ms 240ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      ".wix-fade-up-4": {
        animation: "fadeUp 600ms 320ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      ".wix-slide-left": {
        animation: "slideInLeft 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      ".wix-slide-right": {
        animation: "slideInRight 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      ".wix-scale-in": {
        animation: "scaleIn 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      ".wix-float": {
        animation: "float 4s ease-in-out infinite",
      },
      ".wix-pulse": {
        animation: "pulse 2.4s ease-in-out infinite",
      },
      // Logo carousel: usa marquee infinito
      ".logo-marquee": {
        display: "flex",
        animation: "marqueeScroll 30s linear infinite",
        willChange: "transform",
      },
      ".logo-marquee:hover": {
        animationPlayState: "paused",
      },
      ".wix-float-slow": {
        animation: "float 6s ease-in-out infinite",
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
