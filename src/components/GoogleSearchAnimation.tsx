// src/components/GoogleSearchAnimation.tsx
// Animación de Google Search que muestra al cliente cómo aparecería su
// empresa en Google cuando alguien busca su servicio.
// Re-creado el 22/07/2026.

import { useEffect, useRef, useState } from "react"
import { Box, HStack, Text, VStack } from "@chakra-ui/react"

type Competitor = {
  domain: string
  title: string
  description: string
}

type YourSite = {
  domain: string
  title: string
  description: string
}

export type QueryRound = {
  query: string
  /** Result count que muestra Google */
  resultCount?: string
  /** Tu sitio (del cliente) */
  yourSite: YourSite
  /** 2 competidores (uno arriba, otro abajo del tuyo) */
  competitors: [Competitor, Competitor]
}

type GoogleSearchAnimationProps = {
  /** Una o varias rondas de búsqueda. Si hay varias, rotan cada rotationInterval ms. */
  rounds: QueryRound[]
  /**
   * Duración TOTAL del ciclo por ronda (ms).
   * Incluye typewriter + transición + tiempo de lectura de resultados.
   * Default 5500ms — reparte ~2s para search, ~3.5s para results.
   */
  rotationInterval?: number
}

const PHASE = {
  SEARCH: "search",
  RESULTS: "results",
} as const
type Phase = (typeof PHASE)[keyof typeof PHASE]

const GoogleLogo = () => (
  <Text
    fontSize={{ base: "26px", md: "34px" }}
    fontWeight="500"
    lineHeight="1"
    whiteSpace="nowrap"
    letterSpacing="-0.02em"
    aria-label="Google"
  >
    <Box as="span" color="#4285F4">G</Box>
    <Box as="span" color="#EA4335">o</Box>
    <Box as="span" color="#FBBC05">o</Box>
    <Box as="span" color="#4285F4">g</Box>
    <Box as="span" color="#34A853">l</Box>
    <Box as="span" color="#EA4335">e</Box>
  </Text>
)

const MagnifyingGlassIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const LockIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a4 4 0 0 1 8 0v4" />
  </svg>
)

const CURSOR_BLINK = {
  "@keyframes cursorBlink": {
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0 },
  },
}

const SEARCHING_DOT = {
  "@keyframes searchingDot": {
    "0%, 100%": { opacity: 0.25, transform: "scale(0.85)" },
    "50%": { opacity: 1, transform: "scale(1.1)" },
  },
}

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)"

export const GoogleSearchAnimation = ({
  rounds,
  rotationInterval = 5500,
}: GoogleSearchAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [roundIndex, setRoundIndex] = useState(0)
  const [typedQuery, setTypedQuery] = useState("")
  const [phase, setPhase] = useState<Phase>(PHASE.SEARCH)

  const currentRound = rounds[roundIndex] || rounds[0]
  const query = currentRound.query
  const resultCount = currentRound.resultCount ?? "Około 11 128 wyników"
  const yourSite = currentRound.yourSite
  const competitors = currentRound.competitors

  // ─── IntersectionObserver ───
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

  // Rotación automática entre rondas
  useEffect(() => {
    if (!isPlaying) return
    if (rounds.length <= 1) return

    const id = setInterval(() => {
      setRoundIndex((prev) => (prev + 1) % rounds.length)
    }, rotationInterval)
    return () => clearInterval(id)
  }, [rounds.length, rotationInterval, isPlaying])

  // Reset + typewriter cuando cambia la query
  useEffect(() => {
    if (!isPlaying) return

    setTypedQuery("")
    setPhase(PHASE.SEARCH)

    let i = 0
    const interval = setInterval(() => {
      i++
      setTypedQuery(query.slice(0, i))
      if (i >= query.length) {
        clearInterval(interval)
        setTimeout(() => setPhase(PHASE.RESULTS), 450)
      }
    }, 55)

    return () => clearInterval(interval)
  }, [query, roundIndex, isPlaying])

  const isSearch = phase === PHASE.SEARCH

  return (
    <Box
      ref={containerRef}
      bg="white"
      rounded="2xl"
      border="1px solid"
      borderColor="#E2E8F0"
      boxShadow="0 12px 40px rgba(15,23,42,0.12)"
      overflow="hidden"
      maxW="3xl"
      mx="auto"
      w="full"
    >
      {/* Browser bar (chrome) — siempre visible */}
      <Box bg="#F1F5F9" px="3" py="2.5" borderBottom="1px solid #E2E8F0">
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
            border="1px solid #E2E8F0"
            ml="2"
            display="flex"
            alignItems="center"
            gap="2"
          >
            <LockIcon size={10} />
            <Text fontSize="xs" color="#64748B" fontWeight="500">
              https://google.pl
            </Text>
          </Box>
        </HStack>
      </Box>

      {/* Contenido principal — ALTURA FIJA */}
      <Box
        position="relative"
        minH={{ base: "380px", md: "400px" }}
        overflow="hidden"
        px={{ base: "4", md: "8" }}
        pt={{ base: "5", md: "7" }}
        pb={{ base: "9", md: "10" }}
      >
        {/* ===== RESULTS ===== */}
        <Box
          opacity={isSearch ? 0 : 1}
          transform={isSearch ? "translateY(15px)" : "translateY(0)"}
          transition={`opacity 450ms ease-out, transform 500ms ${EASE}`}
          pointerEvents={isSearch ? "none" : "auto"}
          aria-hidden={isSearch}
        >
          <Text fontSize="xs" color="#6B7280" mb="3">
            {resultCount} (0,38 s)
          </Text>

          <VStack gap={{ base: "3", md: "4" }} align="stretch">
            {/* Competitor 1 — arriba */}
            <Box>
              <Text fontSize="xs" color="#202124" mb="0.5">
                {competitors[0].domain}
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="#1A0DAB"
                fontWeight="400"
                cursor="pointer"
                lineHeight="1.3"
                _hover={{ textDecoration: "underline" }}
              >
                {competitors[0].title}
              </Text>
              <Text fontSize="xs" color="#4D5156" mt="1" lineHeight="1.4">
                {competitors[0].description}
              </Text>
            </Box>

            {/* YOUR SITE — destacado en amarillo */}
            <Box
              position="relative"
              bg="#FEF3C7"
              border="2px solid"
              borderColor="#F59E0B"
              rounded="lg"
              p={{ base: "3", md: "4" }}
            >
              <Box
                position="absolute"
                top={{ base: "-9px", md: "-10px" }}
                right="3"
                bg="#F59E0B"
                color="white"
                px="2.5"
                py="0.5"
                rounded="full"
                fontSize="2xs"
                fontWeight="700"
                letterSpacing="0.02em"
                boxShadow="0 2px 6px rgba(245,158,11,0.4)"
              >
                Twoja strona
              </Box>
              <Text fontSize="xs" color="#92400E" mb="0.5" fontWeight="600">
                {yourSite.domain}
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="#1A0DAB"
                fontWeight="400"
                lineHeight="1.3"
                _hover={{ textDecoration: "underline" }}
                cursor="pointer"
              >
                {yourSite.title}
              </Text>
              <Text fontSize="xs" color="#4D5156" mt="1" lineHeight="1.4">
                {yourSite.description}
              </Text>
            </Box>

            {/* Competitor 2 — abajo */}
            <Box>
              <Text fontSize="xs" color="#202124" mb="0.5">
                {competitors[1].domain}
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="#1A0DAB"
                fontWeight="400"
                cursor="pointer"
                lineHeight="1.3"
                _hover={{ textDecoration: "underline" }}
              >
                {competitors[1].title}
              </Text>
              <Text fontSize="xs" color="#4D5156" mt="1" lineHeight="1.4">
                {competitors[1].description}
              </Text>
            </Box>
          </VStack>

          <Text
            fontSize="2xs"
            color="#94A3B8"
            textAlign="center"
            mt="4"
            fontStyle="italic"
          >
            Tak wygląda Twoja strona, gdy klient szuka Twojej usługi w Google.
          </Text>
        </Box>

        {/* ===== SEARCH UI ===== */}
        <Box
          position="absolute"
          top="0"
          bottom="0"
          left={{ base: "4", md: "8" }}
          right={{ base: "4", md: "8" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          pointerEvents={isSearch ? "auto" : "none"}
          aria-hidden={!isSearch}
        >
          <Box
            w="full"
            opacity={isSearch ? 1 : 0}
            transform={isSearch ? "translateY(0)" : "translateY(-15px)"}
            transition={`opacity 350ms ease-out, transform 500ms ${EASE}`}
          >
            <VStack gap={{ base: "4", md: "5" }} align="stretch">
              <Box textAlign="center">
                <Box display="inline-block">
                  <GoogleLogo />
                </Box>
              </Box>

              <Box
                bg="white"
                rounded="full"
                border="1px solid"
                borderColor="#D1D5DB"
                px={{ base: "4", md: "5" }}
                py="2.5"
                boxShadow="0 1px 6px rgba(32,33,36,0.18)"
                maxW="2xl"
                mx="auto"
                w="full"
              >
                <HStack gap="2.5" minH="22px">
                  <Box flexShrink={0}>
                    <MagnifyingGlassIcon />
                  </Box>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="#1F2937"
                    flex="1"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                  >
                    {typedQuery}
                    <Box
                      as="span"
                      display="inline-block"
                      w="2px"
                      h="16px"
                      bg="#1F2937"
                      ml="1"
                      verticalAlign="text-bottom"
                      sx={CURSOR_BLINK}
                      style={{
                        animation:
                          typedQuery.length < query.length
                            ? "cursorBlink 1s step-end infinite"
                            : "none",
                      }}
                    />
                  </Text>
                </HStack>
              </Box>

              <Box textAlign="center" pt={{ base: "2", md: "4" }}>
                <HStack justify="center" gap="1.5" mb="2">
                  {[0, 1, 2].map((i) => (
                    <Box
                      key={i}
                      w="1.5"
                      h="1.5"
                      rounded="full"
                      bg="#94A3B8"
                      sx={SEARCHING_DOT}
                      style={{
                        animation: `searchingDot 1.2s ease-in-out ${i * 200}ms infinite`,
                      }}
                    />
                  ))}
                </HStack>
                <Text fontSize="xs" color="#94A3B8">
                  Wyszukuję najlepsze wyniki...
                </Text>
              </Box>
            </VStack>
          </Box>
        </Box>

        {/* ===== DOTS ===== */}
        {rounds.length > 1 && (
          <Box
            position="absolute"
            bottom="3"
            left="0"
            right="0"
            display="flex"
            justifyContent="center"
            gap="1.5"
          >
            {rounds.map((_, i) => (
              <Box
                key={i}
                w={i === roundIndex ? "20px" : "6px"}
                h="6px"
                rounded="full"
                bg={i === roundIndex ? "#4F46E5" : "#CBD5E1"}
                transition="all 0.3s"
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}
