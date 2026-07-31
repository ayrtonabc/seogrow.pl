// src/components/ValueBundleIllustration.tsx
// Ilustración SVG personalizada para la sección "Co dostajesz w cenie".
// Diseño "package unboxing":
//   - Header: caja 3D visual + eyebrow "PAKIET" + título + subtítulo
//   - Grid 3×2 de items: cada card con ícono custom, título, descripción
//     y check verde que refuerza la promesa "todo incluido"
//
// 100% SVG inline, sin assets externos, sin hydration issues, sin CLS.
// Animación sutil de entrada (fade-in) y micro-interacción de hover en cards.

import { Box } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"
import { useEffect, useRef, useState } from "react"

type ValueBundleIllustrationProps = {
  /** Si true, anima la entrada cuando entra en viewport */
  animated?: boolean
}

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`

type ItemKey = "strona" | "panel" | "hosting" | "ssl" | "wsparcie" | "faktura"

const ITEMS: Array<{
  key: ItemKey
  title: string
  desc: string
}> = [
  { key: "strona", title: "Strona", desc: "gotowa w 5 dni roboczych" },
  { key: "panel", title: "Panel CMS", desc: "edycja z telefonu" },
  { key: "hosting", title: "Hosting", desc: "szybki, stabilny, PL" },
  { key: "ssl", title: "SSL", desc: "bezpieczne HTTPS" },
  { key: "wsparcie", title: "Wsparcie PL", desc: "telefon, dni robocze" },
  { key: "faktura", title: "Faktura VAT", desc: "na każdą płatność" },
]

// ─── ICONOS SVG (paths custom, no emojis) ──────────────────────────────────

const ItemIcon = ({ k }: { k: ItemKey }) => {
  const stroke = "accent.600"
  const fill = "accent.50"
  switch (k) {
    case "strona":
      return (
        <g>
          <rect x="2" y="3" width="32" height="22" rx="3" fill={fill} stroke={stroke} strokeWidth="1.6" />
          <rect x="2" y="3" width="32" height="5" rx="3" fill={stroke} />
          <circle cx="6" cy="5.5" r="0.8" fill="bg.canvas" />
          <circle cx="9" cy="5.5" r="0.8" fill="bg.canvas" />
          <circle cx="12" cy="5.5" r="0.8" fill="bg.canvas" />
          <line x1="6" y1="14" x2="20" y2="14" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
          <line x1="6" y1="18" x2="14" y2="18" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
          <line x1="6" y1="22" x2="16" y2="22" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
        </g>
      )
    case "panel":
      return (
        <g>
          <rect x="9" y="2" width="18" height="32" rx="3.5" fill={fill} stroke={stroke} strokeWidth="1.6" />
          <rect x="11" y="6" width="14" height="22" rx="1" fill="bg.canvas" stroke={stroke} strokeWidth="1" />
          {/* mini "content" lines inside the screen */}
          <line x1="13" y1="10" x2="20" y2="10" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
          <line x1="13" y1="13" x2="22" y2="13" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
          <rect x="13" y="16" width="6" height="6" rx="1" fill={stroke} />
          <line x1="21" y1="17" x2="23" y2="17" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
          <line x1="21" y1="20" x2="23" y2="20" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
          <circle cx="18" cy="31" r="1.2" fill={stroke} />
        </g>
      )
    case "hosting":
      return (
        <g>
          {/* Nube con check + servidor abajo */}
          <path
            d="M 8 14 a 6 6 0 0 1 0 -12 a 8 8 0 0 1 15 -2 a 5 5 0 0 1 5 14 z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M 13 8 l 3 3 l 6 -6"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* servidor pequeño abajo */}
          <rect x="4" y="22" width="14" height="3" rx="0.6" fill={stroke} />
          <rect x="4" y="26" width="14" height="3" rx="0.6" fill={stroke} />
          <rect x="4" y="30" width="14" height="3" rx="0.6" fill={stroke} />
          <circle cx="6" cy="23.5" r="0.5" fill="bg.canvas" />
          <circle cx="6" cy="27.5" r="0.5" fill="bg.canvas" />
          <circle cx="6" cy="31.5" r="0.5" fill="bg.canvas" />
          <rect x="22" y="24" width="10" height="10" rx="1" fill={stroke} />
          <path d="M 25 29 l 2 2 l 4 -4" fill="none" stroke="bg.canvas" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )
    case "ssl":
      return (
        <g>
          {/* Arco superior del candado (más estilizado) */}
          <path
            d="M 11 14 v -5 a 7 7 0 0 1 14 0 v 5"
            fill="none"
            stroke="success.600"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Cuerpo del candado */}
          <rect x="6" y="13" width="24" height="19" rx="3" fill={fill} stroke="success.600" strokeWidth="1.8" />
          {/* Keyhole */}
          <circle cx="18" cy="21" r="2.6" fill="success.600" />
          <rect x="17" y="21" width="2" height="6.5" rx="0.6" fill="success.600" />
          {/* Mini escudo/check badge en bottom-right */}
          <circle cx="29" cy="29" r="5" fill="success.600" />
          <path
            d="M 26.5 29 l 1.7 1.7 l 3.3 -3.3"
            fill="none"
            stroke="bg.canvas"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )
    case "wsparcie":
      return (
        <g>
          <path
            d="M 2 7 a 3 3 0 0 1 3 -3 h 22 a 3 3 0 0 1 3 3 v 14 a 3 3 0 0 1 -3 3 h -15 l -6 5 v -5 h -1 a 3 3 0 0 1 -3 -3 z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="13" r="1.2" fill={stroke} />
          <circle cx="16" cy="13" r="1.2" fill={stroke} />
          <circle cx="22" cy="13" r="1.2" fill={stroke} />
          {/* mini "phone" badge abajo a la derecha */}
          <circle cx="26" cy="28" r="6" fill="success.600" />
          <path
            d="M 23 25.5 a 4 4 0 0 0 4 4 l 1 -1.5 l -1.5 -1 l -0.5 0.3 a 2.5 2.5 0 0 1 -1.5 -1.5 l 0.3 -0.5 l -1 -1.5 l -1.5 1 z"
            fill="bg.canvas"
          />
        </g>
      )
    case "faktura":
      return (
        <g>
          <path
            d="M 7 2 h 16 l 6 6 v 22 a 2 2 0 0 1 -2 2 h -20 a 2 2 0 0 1 -2 -2 v -26 a 2 2 0 0 1 2 -2 z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M 23 2 v 6 h 6" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
          {/* líneas de "factura" */}
          <line x1="11" y1="14" x2="25" y2="14" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
          <line x1="11" y1="18" x2="25" y2="18" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
          <line x1="11" y1="22" x2="20" y2="22" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
          {/* Total + VAT badge */}
          <rect x="11" y="25" width="14" height="6" rx="1" fill={stroke} />
          <text x="18" y="29.6" textAnchor="middle" fontSize="4" fontWeight="800" fill="bg.canvas" fontFamily="Inter, system-ui, sans-serif">
            VAT 23%
          </text>
        </g>
      )
  }
}

// ─── HEADER: CAJA 3D (isometric) ────────────────────────────────────────────

const Package3D = () => (
  <g>
    {/* Sombra elíptica debajo */}
    <ellipse cx="60" cy="76" rx="48" ry="5" fill="fg.default" opacity="0.08" />
    {/* Cara superior (techo) */}
    <path
      d="M 20 30 L 60 14 L 100 30 L 60 46 Z"
      fill="accent.300"
      stroke="accent.600"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Cara frontal */}
    <path
      d="M 20 30 L 20 60 L 60 76 L 60 46 Z"
      fill="accent.500"
      stroke="accent.600"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Cara lateral */}
    <path
      d="M 100 30 L 100 60 L 60 76 L 60 46 Z"
      fill="accent.600"
      stroke="accent.800"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Cinta superior (decoración) */}
    <path
      d="M 20 30 L 60 46 L 100 30"
      fill="none"
      stroke="accent.900"
      strokeWidth="1.2"
      strokeDasharray="2 2"
      opacity="0.6"
    />
    {/* Checkmark en la cara frontal */}
    <circle cx="40" cy="50" r="6" fill="bg.canvas" opacity="0.95" />
    <path
      d="M 36.5 50 l 2.5 2.5 l 5 -5"
      fill="none"
      stroke="success.600"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
)

// ─── COMPONENTE PRINCIPAL ───────────────────────────────────────────────────

export const ValueBundleIllustration = ({
  animated = true,
}: ValueBundleIllustrationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [hoveredKey, setHoveredKey] = useState<ItemKey | null>(null)

  useEffect(() => {
    if (!animated) {
      setInView(true)
      return
    }
    const node = containerRef.current
    if (!node) return
    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [animated])

  return (
    <Box
      ref={containerRef}
      w="full"
      maxW="640px"
      mx="auto"
      role="img"
      aria-label="Pakiet zawiera: strona, panel CMS, hosting, certyfikat SSL, wsparcie po polsku, faktura VAT. Wszystko w jednym planie, bez ukrytych opłat."
      bg="linear-gradient(135deg, bg.subtle 0%, accent.50 100%)"
      borderRadius="2xl"
      p={{ base: "5", md: "7" }}
      border="1px solid"
      borderColor="border.default"
      boxShadow="0 12px 40px rgba(15, 23, 42, 0.06)"
      opacity={inView ? 1 : 0}
      transform={inView ? "translateY(0)" : "translateY(8px)"}
      transition="opacity 0.6s ease-out, transform 0.6s ease-out"
    >
      {/* ─── HEADER: package + título ─── */}
      <Box display="flex" alignItems="center" gap="4" mb="6">
        <Box
          as="svg"
          viewBox="0 0 120 84"
          w={{ base: "72px", md: "92px" }}
          h={{ base: "50px", md: "64px" }}
          flexShrink={0}
          aria-hidden="true"
        >
          <Package3D />
        </Box>
        <Box>
          <Box
            as="span"
            display="block"
            fontSize="2xs"
            fontWeight="800"
            color="accent.600"
            letterSpacing="0.18em"
            textTransform="uppercase"
            mb="1"
          >
            PAKIET
          </Box>
          <Box
            as="h3"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="800"
            color="fg.default"
            letterSpacing="-0.02em"
            lineHeight="1.2"
          >
            Wszystko w jednym planie
          </Box>
          <Box
            as="p"
            fontSize="sm"
            color="fg.muted"
            mt="1"
            lineHeight="1.5"
          >
            Bez ukrytych opłat, bez umowy na lata
          </Box>
        </Box>
      </Box>

      {/* ─── GRID 3×2 de items ─── */}
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap="3"
      >
        {ITEMS.map((item, idx) => {
          const isHovered = hoveredKey === item.key
          return (
            <Box
              key={item.key}
              bg="white"
              borderRadius="lg"
              p="4"
              border="1px solid"
              borderColor={isHovered ? "accent.600" : "border.default"}
              boxShadow={
                isHovered
                  ? "0 8px 20px rgba(79, 70, 229, 0.15)"
                  : "0 2px 8px rgba(15, 23, 42, 0.04)"
              }
              position="relative"
              onMouseEnter={() => setHoveredKey(item.key)}
              onMouseLeave={() => setHoveredKey(null)}
              transition="all 0.2s ease"
              cursor="default"
              opacity={inView ? 1 : 0}
              style={{
                animation: inView
                  ? `${fadeUp} 0.4s ease-out ${idx * 60}ms backwards`
                  : undefined,
              }}
            >
              {/* Check badge verde (top-right) */}
              <Box
                position="absolute"
                top="2"
                right="2"
                w="18px"
                h="18px"
                borderRadius="full"
                bg="success.600"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  as="svg"
                  viewBox="0 0 12 12"
                  w="10px"
                  h="10px"
                  aria-hidden="true"
                >
                  <path
                    d="M 2.5 6 L 5 8.5 L 9.5 4"
                    fill="none"
                    stroke="bg.canvas"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Box>
              </Box>

              {/* Icon */}
              <Box
                as="svg"
                viewBox="0 0 36 36"
                w="36px"
                h="36px"
                mb="2"
                aria-hidden="true"
              >
                <ItemIcon k={item.key} />
              </Box>

              {/* Title */}
              <Box
                as="span"
                display="block"
                fontSize="sm"
                fontWeight="800"
                color="fg.default"
                lineHeight="1.3"
                mb="0.5"
              >
                {item.title}
              </Box>

              {/* Description */}
              <Box
                as="span"
                display="block"
                fontSize="xs"
                color="fg.subtle"
                lineHeight="1.4"
              >
                {item.desc}
              </Box>
            </Box>
          )
        })}
      </Box>

      {/* ─── FOOTER sutil ─── */}
      <Box
        mt="5"
        pt="4"
        borderTop="1px dashed"
        borderColor="border.strong"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="2"
        fontSize="xs"
        color="fg.muted"
        fontWeight="600"
      >
        <Box
          as="svg"
          viewBox="0 0 16 16"
          w="14px"
          h="14px"
          aria-hidden="true"
        >
          <path
            d="M 4 8 L 7 11 L 12 5"
            fill="none"
            stroke="accent.600"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Box>
        Jednorazowo 1 500 zł · od 49 zł / mies.
      </Box>
    </Box>
  )
}

export default ValueBundleIllustration
