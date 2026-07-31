// src/sections/ModulosSection.tsx
// "Wszystko, czego potrzebujesz. W jednym miejscu." — Grid 3x3 con cards wix-style.
// Background cream alternado, halo teal, iconos SVG (sin emojis), hover lift.

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react"

type IconKey =
  | "store" | "blog" | "calendar" | "form" | "gallery"
  | "seo" | "chart" | "globe"

type Feature = {
  title: string
  desc: string
  icon: IconKey
}

const ICONS: Record<IconKey, JSX.Element> = {
  store: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9 4 4h16l1 5" /><path d="M3 9v11h18V9" /><path d="M3 9h18" /><path d="M9 14h6" />
    </svg>
  ),
  blog: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h14a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V4z" /><path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" />
    </svg>
  ),
  form: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  ),
  gallery: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /><path d="M11 8v6M8 11h6" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
}

const FEATURES: Feature[] = [
  { title: "Sklep online", desc: "Sprzedawaj produkty. Bez prowizji od transakcji.", icon: "store" },
  { title: "Blog", desc: "Pisz artykuły. Przyciągaj ruch z Google.", icon: "blog" },
  { title: "Rezerwacje", desc: "Klienci sami wybierają termin. SMS przypomni.", icon: "calendar" },
  { title: "Formularze", desc: "Zbieraj zapytania prosto na maila.", icon: "form" },
  { title: "Galeria", desc: "Pokaż realizacje. Lekka, szybka, zoptymalizowana.", icon: "gallery" },
  { title: "SEO", desc: "Lokalne pozycje w Google. Bez dopłat co miesiąc.", icon: "seo" },
  { title: "Analityka", desc: "Sprawdź kto wchodzi. Co klika. Co kupuje.", icon: "chart" },
  { title: "Wielojęzyczność", desc: "Jedna strona. Wiele wersji językowych.", icon: "globe" },
]

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => (
  <Box
    display="flex"
    flexDirection="column"
    bg="bg.canvas"
    rounded="2xl"
    p={{ base: "6", md: "7" }}
    border="1px solid"
    borderColor="border.subtle"
    position="relative"
    overflow="hidden"
    role="group"
    _hover={{
      transform: "translateY(-2px)",
      boxShadow: "xl",
      borderColor: "border.muted",
    }}
    transition="all 0.22s cubic-bezier(0.22, 1, 0.36, 1)"
    className={`wix-fade-up-${(index % 4) + 1}`}
  >
    {/* Halo sutil teal en hover */}
    <Box
      position="absolute"
      top="-40px"
      right="-40px"
      w="140px"
      h="140px"
      bg="accent.100"
      opacity={0.55}
      filter="blur(40px)"
      rounded="full"
      pointerEvents="none"
      transition="opacity 0.25s"
      _groupHover={{ opacity: 0.85 }}
    />

    <Box
      w="12"
      h="12"
      rounded="xl"
      bg="bg.subtle"
      color="fg.accent"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
      mb="5"
    >
      {ICONS[feature.icon]}
    </Box>

    <Heading
      as="h3"
      fontSize="17px"
      fontWeight="700"
      color="fg.default"
      letterSpacing="-0.02em"
      lineHeight="1.3"
      mb="2"
    >
      {feature.title}
    </Heading>
    <Text fontSize="13px" color="fg.muted" lineHeight="1.55" flex="1">
      {feature.desc}
    </Text>
  </Box>
)

export const ModulosSection = () => {
  return (
    <Box as="section" id="moduly" bg="bg.cream" py={{ base: "20", md: "28" }} aria-label="Dostępne moduły">
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* Header */}
          <VStack gap="4" textAlign="center" maxW="3xl" mx="auto" className="wix-fade-up">
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="bg.canvas"
              borderWidth="1px"
              borderColor="border.default"
              rounded="full"
            >
              <Box w="1.5" h="1.5" rounded="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" letterSpacing="0.08em" textTransform="uppercase" color="fg.default">
                Moduły
              </Text>
            </HStack>
            <Heading
              as="h2"
              fontSize={{ base: "36px", md: "48px", lg: "56px" }}
              fontWeight="800"
              letterSpacing="-0.04em"
              lineHeight={{ base: "1.1", md: "1.05", lg: "1.0" }}
              color="fg.default"
            >
              Wszystko, czego potrzebujesz.{" "}
              <Box as="span" color="fg.accent">W jednym miejscu.</Box>
            </Heading>
            <Text color="fg.muted" fontSize="lg" lineHeight="1.6" maxW="2xl">
              Włączasz tylko to, co dziś działa. Resztę dodasz, gdy Twoja firma urośnie.
            </Text>
          </VStack>

          {/* Grid 4x2 */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={{ base: "4", md: "5" }} w="full">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
