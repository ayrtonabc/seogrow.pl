// src/sections/WhatYouGetSection.tsx
// "Co tak naprawdę kupujesz" — calco del patrón de biznes.olx.pl:
//   - Fondo verde menta
//   - Grid 3×2 con cards de texto intercaladas con cards de imagen (SVG decorativos)
//   - Las cards de texto son blancas con border-radius
//   - Las cards de imagen usan clip-path hexagonal para look "out of bounds"

import { Box, Container, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { SECTION_TITLE_PROPS, SECTION_TITLE_COLOR_DARK } from "../lib/typography"

type Point = {
  title: string
  desc: string
}

const POINTS: Point[] = [
  {
    title: "Strona zaprojektowana dla Twojej firmy",
    desc: "Twoja branża, Twoi klienci, Twoja marka. Każdy element dopasowany do tego, czym jest Twoja firma.",
  },
  {
    title: "Platforma, którą utrzymujemy",
    desc: "Kiedy Twoja firma rośnie, strona rośnie razem z nią. Bez zmiany platformy, bez stresu.",
  },
  {
    title: "Zawsze dostępna, 24/7",
    desc: "Szybka, bezpieczna, dostępna całą dobę. My pilnujemy infrastruktury — Ty nie musisz o tym myśleć.",
  },
  {
    title: "Pomaga zdobywać nowych klientów",
    desc: "Twoja strona przyciąga zapytania, generuje telefony i rośnie z miesiąca na miesiąc. To inwestycja, która się zwraca.",
  },
]

// ─── SVGs decorativos (placeholders de imagen con gradiente) ─────────────

const ImageDesign = () => (
  <Box
    w="full"
    h="full"
    position="relative"
    overflow="hidden"
    rounded="3xl"
    style={{
      background: "linear-gradient(135deg, #595ADF 0%, #3D3F8F 100%)",
    }}
  >
    {/* Capa 1: gradiente explícito como background image */}
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      style={{
        background: "linear-gradient(135deg, #595ADF 0%, #3D3F8F 100%)",
        zIndex: 0,
      }}
    />
    {/* Capa 2: animación Lottie encima */}
    <DotLottieReact
      src="/Web Design.lottie"
      autoplay
      loop
      speed={0.5}
      backgroundColor="transparent"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        display: "block",
      }}
    />
  </Box>
)

const ImageGrowth = () => (
  <Box
    w="full"
    h="full"
    position="relative"
    overflow="hidden"
    rounded="3xl"
    style={{
      background: "linear-gradient(135deg, #0F172A 0%, #334155 100%)",
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
        background: "linear-gradient(135deg, #0F172A 0%, #334155 100%)",
        zIndex: 0,
      }}
    />
    {/* Capa 2: animación Lottie transparente */}
    <DotLottieReact
      src="/Graphic.lottie"
      autoplay
      loop
      speed={0.5}
      backgroundColor="transparent"
      style={{
        position: "absolute",
        top: "15%",
        left: "15%",
        width: "70%",
        height: "70%",
        zIndex: 1,
        display: "block",
      }}
    />
  </Box>
)

// ─── Card de texto ───

const TextCard = ({ title, desc }: Point) => (
  <Box bg="white" rounded="3xl" p={{ base: "7", md: "9" }} h="full" display="flex" flexDirection="column" justifyContent="center">
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

// ─── Card de imagen ───

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

export const WhatYouGetSection = () => {
  return (
    <Box bg="#F5F3FF" py={{ base: "16", md: "24" }} position="relative" overflow="hidden">
      <Container maxW="6xl" position="relative" zIndex="1">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* ─── HEADER ─── */}
          <VStack gap="4" textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontSize="13px"
              fontWeight="700"
              color="#4F46E5"
              letterSpacing="0.18em"
              textTransform="uppercase"
            >
              Co tak naprawdę kupujesz
            </Text>
            <Heading
              as="h2"
              {...SECTION_TITLE_PROPS}
              color={SECTION_TITLE_COLOR_DARK}
            >
              Kupujesz{" "}
              <Box as="span" color="#4F46E5">znacznie więcej</Box>{" "}
              niż stronę.
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#475569"
              lineHeight="1.65"
              maxW="2xl"
            >
              Cztery rzeczy, które dostajesz poza samą stroną. Wszystkie utrzymywane przez nas, wszystkie zaprojektowane pod Twoją firmę.
            </Text>
          </VStack>

          {/* ─── GRID 3×2 con cards de texto + imágenes intercaladas ─── */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={{ base: "6", md: "8" }}
            w="full"
            alignItems="stretch"
          >
            {/* Fila 1 */}
            <TextCard {...POINTS[0]} />
            <ImageCard>
              <ImageDesign />
            </ImageCard>
            <TextCard {...POINTS[1]} />

            {/* Fila 2 */}
            <ImageCard>
              <ImageGrowth />
            </ImageCard>
            <TextCard {...POINTS[2]} />
            <TextCard {...POINTS[3]} />
          </SimpleGrid>

          {/* ─── CIERRE (2 líneas) ─── */}
          <Text
            textAlign="center"
            fontSize={{ base: "20px", md: "26px" }}
            fontWeight="600"
            color="#0F172A"
            lineHeight="1.45"
            letterSpacing="-0.01em"
            maxW="2xl"
            pt="6"
          >
            <Box as="span" display="block">
              Ty zajmujesz się swoim biznesem.
            </Box>
            <Box as="span" display="block" color="#4F46E5" fontWeight="700" mt="1">
              My zajmujemy się Twoją stroną.
            </Box>
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
