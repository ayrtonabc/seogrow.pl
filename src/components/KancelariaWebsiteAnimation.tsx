// src/components/KancelariaWebsiteAnimation.tsx
// Simulación animada de la web de kancelaria adwokacka usando la imagen real
// /lawyerweb.webp (captura completa de la página).
//
// Hace scroll vertical lento a través de la imagen para mostrar las 4 secciones
// de la web (hero, lista usług, zespół, dojazd) como si se estuviera navegando.
//
// Mismo tamaño y posición que GoogleSearchAnimation (maxW="3xl", browser chrome,
// mismo minH). El texto descriptivo se mantiene a la izquierda en el section
// padre de SEOLandingPage — este componente solo renderiza el visual.
//
// Se usa SOLO en la página strona-dla-kancelarii-prawnej como prueba.
// Actívalo con websiteAnimation: true en el section de VerticalPagesTier2.

import { Box, HStack, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

// Mismas alturas que GoogleSearchAnimation para que ambos visuales tengan
// el mismo tamaño y posición en el section.
const VIEWPORT_H = { base: "380px", md: "400px" }

// Stops de scroll calibrados para /lawyerweb.webp (908×1363, ratio 1:1.5).
// Cuando la imagen se muestra a width=100% del container (maxW 3xl ≈ 768px),
// su altura final ≈ 1152px y viewportHeight ≈ 400px → 400/1152 ≈ 35% visible.
// Para mostrar 4 secciones (hero/lista/zespol/dojazd), scrolleo:
//   0%   = hero (top 0-35%)
//   -22% = lista usług
//   -44% = zespół
//   -60% = dojazd (cerca del final; -65% sería el máximo teórico)
const KANCELARIA_KEYFRAMES = `
@keyframes kancelariaScroll {
  0%,   22%  { transform: translateY(0); }
  29%,  47%  { transform: translateY(-22%); }
  54%,  72%  { transform: translateY(-44%); }
  79%,  95%  { transform: translateY(-60%); }
  100%       { transform: translateY(0); }
}
`

const LockIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="fg.subtle" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
)

export const KancelariaWebsiteAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Igual que GoogleSearchAnimation: arranca cuando entra al viewport.
  useEffect(() => {
    if (isPlaying) return
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return

    const node = containerRef.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    const inViewOnMount = rect.top < window.innerHeight && rect.bottom > 0
    if (inViewOnMount) {
      setIsPlaying(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsPlaying(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isPlaying])

  return (
    <Box
      ref={containerRef}
      bg="white"
      rounded="2xl"
      border="1px solid"
      borderColor="border.default"
      boxShadow="0 12px 40px rgba(15,23,42,0.12)"
      overflow="hidden"
      maxW="3xl"
      mx="auto"
      w="full"
    >
      {/* Keyframes globales — inyectados vía <style> para garantizar emisión */}
      <style>{KANCELARIA_KEYFRAMES}</style>

      {/* Browser chrome — siempre visible, idéntico al de GoogleSearchAnimation */}
      <Box bg="border.subtle" px="3" py="2.5" borderBottom="1px solid border.default">
        <HStack gap="2">
          <Box w="3" h="3" rounded="full" bg="#FF5F57" />
          <Box w="3" h="3" rounded="full" bg="#FEBC2E" />
          <Box w="3" h="3" rounded="full" bg="#28C840" />
          <Box
            bg="white"
            rounded="md"
            px="3"
            py="1.5"
            flex="1"
            border="1px solid border.default"
            ml="2"
            display="flex"
            alignItems="center"
            gap="2"
          >
            <LockIcon size={10} />
            <Text fontSize="xs" color="fg.subtle" fontWeight="500">
              kancelaria-adwokacka-warszawa.pl
            </Text>
          </Box>
        </HStack>
      </Box>

      {/* Viewport con scroll vertical animado */}
      <Box position="relative" minH={VIEWPORT_H} overflow="hidden" bg="#FAFBFC">
        {/* Wrapper con position:absolute para que el translateY no expanda el viewport */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          animation={isPlaying ? "kancelariaScroll 22s ease-in-out infinite" : "none"}
          willChange="transform"
        >
          <Box
            as="img"
            src="/lawyerweb.webp"
            alt="Strona kancelarii adwokackiej — widok pełnej strony z formularzem, listą usług, zespołem adwokatów i mapą Google"
            w="full"
            h="auto"
            display="block"
            loading="lazy"
            decoding="async"
          />
        </Box>
      </Box>

      {/* Inline hint, mismo patrón que GoogleSearchAnimation */}
      <Text fontSize="2xs" color="fg.faint" textAlign="center" py="3" fontStyle="italic">
        Tak wygląda strona Twojej kancelarii — z formularzem, listą usług, zespołem i mapą.
      </Text>
    </Box>
  )
}