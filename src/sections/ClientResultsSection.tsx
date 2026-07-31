// src/sections/ClientResultsSection.tsx
// "Prawdziwi klienci. Prawdziwe liczby." — 3 cards con logos de clientes reales.
// Tipografía consistente con el hero (weight 600 base + 700 en palabra destacada).

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Image } from "@chakra-ui/react"

type Result = {
  name: string
  industry: string
  city: string
  logo: string
  metric: string
  metricLabel: string
  quote: string
  quoteAuthor: string
  accent: string
}

const RESULTS: Result[] = [
  {
    name: "Asmed",
    industry: "Sklep z aparatami słuchowymi",
    city: "Ostróda",
    logo: "/clientes/asmed.webp",
    metric: "Nowa strona",
    metricLabel: "zasięg rozszerzony na 100 km w okolicy",
    quote: "Profesjonalna obsługa, szybko i sprawnie, strona zrobiona tak jak chciałem. Jestem zadowolony i polecam wszystkim.",
    quoteAuthor: "Mariusz Liebert · właściciel",
    accent: "#10B981",
  },
  {
    name: "Inteligentne Folie",
    industry: "Montaż folii PPF i przyciemnianie szyb",
    city: "Poznań",
    logo: "/clientes/inteligentnefolie.webp",
    metric: "Top 3 Google",
    metricLabel: "na 8 fraz kluczowych w 4 miesiące",
    quote: "Chcieliśmy być w top 3 w Poznaniu. SEO Grow zrobił dokładnie to, co obiecał — dziś telefon nie przestaje dzwonić, a my mamy kalendarz wypełniony na tygodnie do przodu.",
    quoteAuthor: "Michał Janczak · założyciel",
    accent: "#215AFF",
  },
  {
    name: "Tio Bigotes",
    industry: "Restauracja argentyńska",
    city: "Warszawa",
    logo: "/clientes/tiobigotes.webp",
    metric: "+3× zamówień online",
    metricLabel: "dzięki widoczności w Google Maps",
    quote: "After extensive searching with various companies, we finally found SeoGrow. Customers can easily view, purchase, and the entire process runs without complications. Highly recommended.",
    quoteAuthor: "Peko Parello · właściciel",
    accent: "#8B5CF6",
  },
]

const QuoteIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" focusable="false">
    <path d="M9.5 7C7 7 5 9 5 11.5c0 2.5 2 4.5 4.5 4.5H10c0 2-1 3-3 3v2c4 0 6-2.5 6-6.5V11.5C13 9 11.5 7 9.5 7zm9 0C16 7 14 9 14 11.5c0 2.5 2 4.5 4.5 4.5h.5c0 2-1 3-3 3v2c4 0 6-2.5 6-6.5V11.5C22 9 20.5 7 18.5 7z" />
  </svg>
)

const ResultCard = ({ r, index }: { r: Result; index: number }) => (
  <Box
    bg="bg.canvas"
    rounded="2xl"
    overflow="hidden"
    border="1px solid"
    borderColor="border.default"
    display="flex"
    flexDirection="column"
    _hover={{
      borderColor: r.accent,
      transform: "translateY(-2px)",
      boxShadow: "xl",
    }}
    transition="all 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
    className={`wix-fade-up-${(index % 4) + 1}`}
  >
    {/* Header con logo + ciudad */}
    <Box position="relative" w="full" h="160px" overflow="hidden" bg="bg.subtle" display="flex" alignItems="center" justifyContent="center" px="6">
      {/* Logo centrado */}
      <Box
        maxW="180px"
        maxH="80px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="1"
      >
        <Image
          src={r.logo}
          alt={`Logo ${r.name}`}
          maxW="100%"
          maxH="80px"
          w="auto"
          h="auto"
          objectFit="contain"
          loading="lazy"
          style={{ filter: "grayscale(0%)" }}
        />
      </Box>
      {/* City badge */}
      <Box
        position="absolute"
        top="3"
        left="3"
        bg="rgba(10, 10, 10, 0.7)"
        backdropFilter="blur(8px)"
        rounded="full"
        px="3"
        py="1.5"
      >
        <Text fontSize="xs" fontWeight="700" color="white" letterSpacing="0.04em" lineHeight="1">
          {r.city}
        </Text>
      </Box>
    </Box>

    {/* Body */}
    <VStack align="stretch" gap="4" p="6" flex="1">
      <Box>
        <Text
          fontSize="10px"
          fontWeight="800"
          color="accent.600"
          textTransform="uppercase"
          letterSpacing="0.14em"
          mb="1.5"
        >
          {r.industry}
        </Text>
        <Heading
          as="h3"
          fontSize="xl"
          fontWeight="700"
          color="fg.default"
          letterSpacing="-0.02em"
          lineHeight="1.2"
        >
          {r.name}
        </Heading>
      </Box>

      {/* Big metric */}
      <Box bg="bg.subtle" rounded="xl" p="5" position="relative" overflow="hidden" borderTop="2px solid" borderColor={r.accent}>
        <Box
          position="absolute"
          top="-20px"
          right="-20px"
          w="100px"
          h="100px"
          bg={r.accent}
          opacity={0.08}
          filter="blur(30px)"
          rounded="full"
          pointerEvents="none"
        />
        <Text
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight="600"
          color="fg.default"
          letterSpacing="-0.015em"
          lineHeight="1.25"
        >
          {r.metric}
        </Text>
        <Text fontSize="xs" color="fg.muted" fontWeight="500" mt="1.5" lineHeight="1.45">
          {r.metricLabel}
        </Text>
      </Box>

      {/* Quote */}
      <Box
        flex="1"
        bg="bg.subtle"
        rounded="lg"
        p="4"
        position="relative"
        borderLeft="3px solid"
        borderColor={r.accent}
      >
        <Box position="absolute" top="2" right="2" color="border.subtle">
          <QuoteIcon size={16} />
        </Box>
        <Text fontSize="13px" color="fg.default" lineHeight="1.55" fontStyle="italic" pr="5" mb="2">
          „{r.quote}"
        </Text>
        <Text fontSize="11px" color="fg.muted" fontWeight="600" pr="5">
          — {r.quoteAuthor}
        </Text>
      </Box>
    </VStack>
  </Box>
)

export const ClientResultsSection = () => {
  return (
    <Box
      as="section"
      bg="bg.canvas"
      py={{ base: "20", md: "28" }}
      aria-label="Realne wyniki klientów"
    >
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* Header — tipografía consistente con hero */}
          <VStack gap="5" textAlign="center" maxW="3xl" mx="auto" className="wix-fade-up">
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="bg.cream"
              borderWidth="1px"
              borderColor="border.subtle"
              rounded="full"
            >
              <Box w="1.5" h="1.5" rounded="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" letterSpacing="0.08em" textTransform="uppercase" color="fg.default">
                Realne wyniki
              </Text>
            </HStack>

            {/* H2 — mismo estilo que el hero (weight 600, palabra destacada en #215AFF + 700) */}
            <Heading
              as="h2"
              fontSize={{ base: "32px", md: "40px", lg: "46px" }}
              fontWeight="600"
              letterSpacing="-0.015em"
              lineHeight="1.1"
              color="fg.default"
              maxW="640px"
              mx="auto"
            >
              Prawdziwi klienci.{" "}
              <Box as="span" color="accent.700" fontWeight="700">
                Prawdziwe liczby.
              </Box>
            </Heading>

            <Text color="fg.muted" fontSize="md" lineHeight="1.55" maxW="2xl">
              Trzy firmy, które zaufały nam w pierwszym kwartale 2026. Mierzymy efekt i raportujemy konkretne liczby.
            </Text>
          </VStack>

          {/* 3 result cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "5" }} w="full">
            {RESULTS.map((r, i) => (
              <ResultCard key={r.name} r={r} index={i} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
