// src/sections/GrowWithYouSection.tsx
// "Strona rośnie z Twoim biznesem." — 3-stage timeline with accent connecting line.
// Wix-style: light section, eyebrow pill, accent word in teal, hover lift, vertical timeline on mobile.

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react"

type Stage = {
  tag: string
  title: string
  description: string
  features: string[]
}

const STAGES: Stage[] = [
  {
    tag: "Dzień 1",
    title: "Wizytówka firmy.",
    description: "Prosta strona, która pracuje dla Ciebie 24/7. To wszystko, czego potrzebujesz na start.",
    features: ["Strona gotowa w 5 dni", "Działa na telefonie", "Widoczna w Google"],
  },
  {
    tag: "Miesiąc 1-3",
    title: "Pierwsi klienci.",
    description: "Dodaj rezerwacje, formularze, integracje. Strona zaczyna przyprowadzać klientów sama.",
    features: ["Rezerwacje online", "Formularz kontaktowy", "Google Maps"],
  },
  {
    tag: "Miesiąc 6+",
    title: "Pełna automatyzacja.",
    description: "Sklep, blog SEO, CRM, kursy. Wszystko aktywujesz w tej samej stronie — bez migracji.",
    features: ["Sklep internetowy", "Blog SEO", "CRM i automatyzacje"],
  },
]

const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const StageCard = ({ stage, index }: { stage: Stage; index: number }) => (
  <Box
    bg="bg.canvas"
    rounded="2xl"
    p={{ base: "6", md: "8" }}
    border="1px solid"
    borderColor="border.default"
    position="relative"
    h="full"
    _hover={{
      borderColor: "accent.500",
      transform: "translateY(-2px)",
      boxShadow: "xl",
    }}
    transition="all 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
    className={`wix-fade-up-${(index % 4) + 1}`}
  >
    {/* Stage number badge */}
    <HStack gap="3" mb="5" align="center">
      <Box
        w="10"
        h="10"
        rounded="full"
        bg="accent.500"
        color="fg.inverse"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="sm"
        fontWeight="800"
        flexShrink={0}
      >
        {index + 1}
      </Box>
      <Text
        fontSize="xs"
        fontWeight="800"
        color="accent.600"
        textTransform="uppercase"
        letterSpacing="0.12em"
        lineHeight="1"
      >
        {stage.tag}
      </Text>
    </HStack>

    {/* Title */}
    <Heading
      as="h3"
      fontSize={{ base: "24px", md: "28px" }}
      fontWeight="800"
      color="fg.default"
      letterSpacing="-0.03em"
      lineHeight="1.2"
      mb="3"
    >
      {stage.title}
    </Heading>

    {/* Description */}
    <Text fontSize="sm" color="fg.muted" lineHeight="1.6" mb="5">
      {stage.description}
    </Text>

    {/* Features list */}
    <VStack align="stretch" gap="2.5" pt="4" borderTop="1px solid" borderColor="border.subtle">
      {stage.features.map((f) => (
        <HStack key={f} gap="2.5" align="center">
          <Box color="accent.500" display="flex" flexShrink={0}>
            <CheckIcon size={14} />
          </Box>
          <Text fontSize="13px" color="fg.default" fontWeight="500" lineHeight="1.4">
            {f}
          </Text>
        </HStack>
      ))}
    </VStack>
  </Box>
)

export const GrowWithYouSection = () => {
  return (
    <Box
      as="section"
      bg="bg.canvas"
      py={{ base: "20", md: "28" }}
      aria-label="Strona rośnie z Twoim biznesem"
    >
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* Header */}
          <VStack gap="4" textAlign="center" maxW="3xl" mx="auto" className="wix-fade-up">
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="bg.subtle"
              borderWidth="1px"
              borderColor="border.default"
              rounded="full"
            >
              <Box w="1.5" h="1.5" rounded="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" letterSpacing="0.08em" textTransform="uppercase" color="fg.default">
                Rośniemy razem
              </Text>
            </HStack>
            <Heading
              as="h2"
              fontSize={{ base: "36px", md: "48px", lg: "60px" }}
              fontWeight="800"
              letterSpacing="-0.04em"
              lineHeight={{ base: "1.1", md: "1.05", lg: "1.0" }}
              color="fg.default"
            >
              Strona rośnie{" "}
              <Box as="span" color="accent.600">z Twoim biznesem.</Box>
            </Heading>
            <Text color="fg.muted" fontSize="lg" lineHeight="1.6" maxW="2xl">
              Nie musisz od razu mieć sklepu, rezerwacji ani bloga. Włączasz je, kiedy naprawdę ich potrzebujesz.
            </Text>
          </VStack>

          {/* Timeline cards with accent connecting line on desktop */}
          <Box position="relative" w="full">
            {/* Connecting accent line (desktop only, behind cards) */}
            <Box
              display={{ base: "none", lg: "block" }}
              position="absolute"
              top="44px"
              left="10%"
              right="10%"
              h="2px"
              bgGradient="linear(to-r, accent.200, accent.500, accent.200)"
              zIndex={0}
            />

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "6" }} position="relative" zIndex={1}>
              {STAGES.map((s, i) => (
                <StageCard key={s.tag} stage={s} index={i} />
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
