// src/sections/ProblemSection.tsx
// "Brzmi znajomo?" — los 4 problemas típicos que crean las agencias
// tradicionales, enmarcados como "esto es lo que hacen otros" y con un
// cierre explícito de que con SEO Grow ninguno de estos problemas existe.
// Mismo patrón visual 3×2 que WhatYouGetSection (cards de texto + 2 SVG
// decorativos), con paleta roja/coral para reforzar el tono de "problema".
// El cierre contrasta con la solución SEO Grow.

import { Box, Container, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { SECTION_TITLE_PROPS, SECTION_TITLE_COLOR_DARK } from "../lib/typography"

type Problem = {
  title: string
  desc: string
}

const PROBLEMS: Problem[] = [
  {
    title: "Każda zmiana to koszt i czekanie",
    desc: "Chcesz zmienić cenę albo dodać zdjęcie — agencja liczy godziny, a Ty czekasz tygodniami na efekt.",
  },
  {
    title: "Nie ma Cię tam, gdzie szukają klienci",
    desc: "Ktoś wpisuje Twoją usługę w Google. Znajduje konkurencję. Ciebie — nie.",
  },
  {
    title: "Strona kosztuje — i nic nie zarabia",
    desc: "Płacisz za hosting, aktualizacje, certyfikaty, poprawki — a mimo to nowi klienci nie przychodzą.",
  },
  {
    title: "Jesteś zależny od jednej osoby",
    desc: "Twój programista trzyma hasła, pliki i dostęp do strony. Bez niego nie ruszysz.",
  },
]

// ─── SVGs reemplazados por animaciones Lottie (mismo gradiente) ─────────

const ImageCosts = () => (
  <Box
    w="full"
    h="full"
    position="relative"
    overflow="hidden"
    rounded="3xl"
    style={{
      background: "linear-gradient(135deg, #FCA5A5 0%, #DC2626 100%)",
    }}
  >
    {/* Capa 1: gradiente explícito */}
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      style={{
        background: "linear-gradient(135deg, #FCA5A5 0%, #DC2626 100%)",
        zIndex: 0,
      }}
    />
    {/* Capa 2: animación Lottie transparente */}
    <DotLottieReact
      src="/no access.lottie"
      autoplay
      loop
      speed={0.5}
      backgroundColor="transparent"
      style={{
        position: "absolute",
        top: "10%",
        left: "10%",
        width: "80%",
        height: "80%",
        zIndex: 1,
        display: "block",
      }}
    />
  </Box>
)

const ImageDependence = () => (
  <Box
    w="full"
    h="full"
    position="relative"
    overflow="hidden"
    rounded="3xl"
    style={{
      background: "linear-gradient(135deg, #9CA3AF 0%, #374151 100%)",
    }}
  >
    {/* Capa 1: gradiente explícito */}
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      style={{
        background: "linear-gradient(135deg, #9CA3AF 0%, #374151 100%)",
        zIndex: 0,
      }}
    />
    {/* Capa 2: animación Lottie transparente */}
    <DotLottieReact
      src="/Sign for error _ Flat style.lottie"
      autoplay
      loop
      speed={0.5}
      backgroundColor="transparent"
      style={{
        position: "absolute",
        top: "10%",
        left: "10%",
        width: "80%",
        height: "80%",
        zIndex: 1,
        display: "block",
      }}
    />
  </Box>
)

// ─── Card de problema (con indicador visual sutil) ────────────────────────

const ProblemCard = ({ title, desc }: Problem) => (
  <Box
    bg="white"
    rounded="3xl"
    p={{ base: "7", md: "9" }}
    h="full"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    position="relative"
    borderTop="3px solid #EF4444"
  >
    <Text
      fontSize="xs"
      fontWeight="800"
      color="#EF4444"
      letterSpacing="0.18em"
      textTransform="uppercase"
      mb="3"
    >
      ✕ U innych
    </Text>
    <Heading
      as="h3"
      fontSize={{ base: "22px", md: "28px" }}
      fontWeight="800"
      color="#0F172A"
      letterSpacing="-0.02em"
      lineHeight="1.2"
      mb="3"
    >
      {title}
    </Heading>
    <Text fontSize="md" color="#475569" lineHeight="1.65">
      {desc}
    </Text>
  </Box>
)

// ─── Card de imagen ───────────────────────────────────────────────────────

const ImageCard = ({ children }: { children: React.ReactNode }) => (
  <Box
    h={{ base: "260px", md: "100%" }}
    minH={{ base: "260px", md: "320px" }}
    transition="transform 0.3s ease"
    _hover={{ transform: "scale(1.02)" }}
  >
    {children}
  </Box>
)

export const ProblemSection = () => {
  return (
    <Box bg="#F5F3FF" py={{ base: "16", md: "24" }} position="relative" overflow="hidden">
      <Container maxW="6xl" position="relative" zIndex="1">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* ─── HEADER ─── */}
          <VStack gap="4" textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontSize="13px"
              fontWeight="700"
              color="#DC2626"
              letterSpacing="0.18em"
              textTransform="uppercase"
            >
              To robią inne agencje
            </Text>
            <Heading
              as="h2"
              {...SECTION_TITLE_PROPS}
              color={SECTION_TITLE_COLOR_DARK}
            >
              Strona, która miała pomagać,{" "}
              <Box as="span" color="#DC2626">tylko przeszkadza.</Box>
              <Box as="span" display="block" mt="1">Da się to zmienić.</Box>
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#475569"
              lineHeight="1.65"
              maxW="2xl"
            >
              Brzmi znajomo? Większość firm w Polsce płaci za stronę, która nie przyprowadza klientów, kosztuje coraz więcej i wymaga ciągłej uwagi.{" "}
              <Box as="span" fontWeight="700" color="#0F172A">
                To nie musi być Twoja historia — bo z nami tych problemów po prostu nie ma.
              </Box>
            </Text>
          </VStack>

          {/* ─── GRID 3×2 con cards de problema + imágenes SVG ─── */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={{ base: "6", md: "8" }}
            w="full"
            alignItems="stretch"
          >
            {/* Fila 1 */}
            <ProblemCard {...PROBLEMS[0]} />
            <ImageCard>
              <ImageCosts />
            </ImageCard>
            <ProblemCard {...PROBLEMS[1]} />

            {/* Fila 2 */}
            <ImageCard>
              <ImageDependence />
            </ImageCard>
            <ProblemCard {...PROBLEMS[2]} />
            <ProblemCard {...PROBLEMS[3]} />
          </SimpleGrid>

          {/* ─── CIERRE: contraste "otros" vs "SEO Grow" ─── */}
          <Box
            mt="4"
            bg="white"
            rounded="3xl"
            p={{ base: "8", md: "12" }}
            w="full"
            textAlign="center"
            border="1px solid #E2E8F0"
            boxShadow="0 12px 30px -10px rgba(79, 70, 229, 0.15)"
          >
            <VStack gap="5">
              <Text
                fontSize={{ base: "22px", md: "32px" }}
                fontWeight="800"
                color="#0F172A"
                lineHeight="1.25"
                letterSpacing="-0.025em"
                maxW="2xl"
              >
                Z nami{" "}
                <Box as="span" color="#DC2626">żaden z tych problemów</Box>{" "}
                nie istnieje.
                <Box as="span" display="block" mt="1" color="#4F46E5">
                  Bo tak właśnie pracujemy.
                </Box>
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="#475569"
                lineHeight="1.6"
                maxW="2xl"
              >
                Płacisz raz za projekt, potem jedną stałą kwotę miesięcznie — i tyle.
                Hosting, aktualizacje, bezpieczeństwo, wsparcie, rozwój: wszystko jest w tej kwocie.{" "}
                <Box as="span" fontWeight="700" color="#0F172A">
                  My pilnujemy. Ty robisz swoje.
                </Box>
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
