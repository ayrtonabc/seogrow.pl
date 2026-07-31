// src/sections/PressSection.tsx
// "Pisali o nas." — press logos grid + 2 quote cards on cream background.
// Wix-style: light cream bg, eyebrow pill, accent word in teal, logo wall + testimonials.

import { Box, Container, Heading, Text, HStack, VStack, SimpleGrid } from "@chakra-ui/react"

const OUTLETS: { name: string; style: "serif" | "sans" | "mono" }[] = [
  { name: "Forbes", style: "serif" },
  { name: "Wyborcza", style: "serif" },
  { name: "Spider's Web", style: "sans" },
  { name: "Noizz", style: "sans" },
  { name: "Business Insider", style: "serif" },
  { name: "MamStartup", style: "sans" },
]

const QUOTES: { quote: string; source: string; role: string }[] = [
  {
    quote: "SEO Grow pokazuje, że profesjonalna strona dla MŚP nie musi kosztować fortuny. Realny efekt w 5 dni — dokładnie jak obiecują.",
    source: "Marta Wójcik",
    role: "Redaktorka · MamStartup",
  },
  {
    quote: "Podejście SEO Grow to powiew świeżości w zatrutym marketingu obietnicami. Konkrety, terminy, zero ściemy.",
    source: "Tomasz Kowalski",
    role: "Analityk · Spider's Web",
  },
]

const PressLogo = ({ name, style }: { name: string; style: "serif" | "sans" | "mono" }) => {
  // Font family per outlet personality — no real logos, just styled wordmarks
  const fontFamily =
    style === "serif"
      ? "'Times New Roman', Georgia, serif"
      : style === "mono"
      ? "'JetBrains Mono', monospace"
      : "'Inter', sans-serif"

  const fontWeight = style === "serif" ? "700" : "800"
  const letterSpacing = style === "serif" ? "-0.02em" : style === "mono" ? "0" : "-0.03em"
  const textTransform: "uppercase" | "none" = style === "serif" ? "none" : "uppercase"
  const fontSize = style === "serif" ? "20px" : "16px"

  return (
    <Box
      bg="bg.canvas"
      border="1px solid"
      borderColor="border.default"
      rounded="lg"
      px="6"
      py="5"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="20"
      transition="all 0.22s cubic-bezier(0.22, 1, 0.36, 1)"
      _hover={{
        borderColor: "accent.500",
        transform: "translateY(-2px)",
        boxShadow: "sm",
      }}
    >
      <Text
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color="fg.default"
        letterSpacing={letterSpacing}
        textTransform={textTransform}
        lineHeight="1"
        textAlign="center"
        whiteSpace="nowrap"
      >
        {name}
      </Text>
    </Box>
  )
}

const QuoteIcon = ({ size = 20 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" focusable="false">
    <path d="M9.5 7C7 7 5 9 5 11.5c0 2.5 2 4.5 4.5 4.5H10c0 2-1 3-3 3v2c4 0 6-2.5 6-6.5V11.5C13 9 11.5 7 9.5 7zm9 0C16 7 14 9 14 11.5c0 2.5 2 4.5 4.5 4.5h.5c0 2-1 3-3 3v2c4 0 6-2.5 6-6.5V11.5C22 9 20.5 7 18.5 7z" />
  </svg>
)

const QuoteCard = ({ q, index }: { q: { quote: string; source: string; role: string }; index: number }) => (
  <Box
    bg="bg.canvas"
    rounded="2xl"
    p={{ base: "6", md: "8" }}
    border="1px solid"
    borderColor="border.default"
    position="relative"
    _hover={{
      borderColor: "accent.500",
      transform: "translateY(-2px)",
      boxShadow: "xl",
    }}
    transition="all 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
    className={`wix-fade-up-${(index % 4) + 1}`}
  >
    <Box color="accent.200" mb="4">
      <QuoteIcon size={28} />
    </Box>
    <Text
      fontSize={{ base: "17px", md: "18px" }}
      color="fg.default"
      lineHeight="1.55"
      fontWeight="500"
      letterSpacing="-0.01em"
      mb="5"
    >
      „{q.quote}"
    </Text>
    <HStack
      gap="3"
      pt="4"
      borderTop="1px solid"
      borderColor="border.subtle"
      align="center"
    >
      <Box
        w="10"
        h="10"
        rounded="full"
        bg="accent.100"
        color="accent.700"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="sm"
        fontWeight="800"
        flexShrink={0}
      >
        {q.source.charAt(0)}
      </Box>
      <Box>
        <Text fontSize="sm" fontWeight="700" color="fg.default" lineHeight="1.2">
          {q.source}
        </Text>
        <Text fontSize="xs" color="fg.muted" mt="0.5" lineHeight="1.3">
          {q.role}
        </Text>
      </Box>
    </HStack>
  </Box>
)

export const PressSection = () => {
  return (
    <Box
      as="section"
      id="media"
      bg="bg.cream"
      py={{ base: "20", md: "28" }}
      aria-label="W mediach"
    >
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
                W mediach
              </Text>
            </HStack>
            <Heading
              as="h2"
              fontSize={{ base: "36px", md: "48px", lg: "64px" }}
              fontWeight="800"
              letterSpacing="-0.04em"
              lineHeight={{ base: "1.1", md: "1.05", lg: "1.0" }}
              color="fg.default"
            >
              Pisali o nas.
            </Heading>
            <Text fontSize="lg" color="fg.muted" lineHeight="1.6" maxW="2xl">
              Redakcje, które opisały nasze podejście do stron dla małych firm.
            </Text>
          </VStack>

          {/* Logo wall */}
          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 6 }}
            gap={{ base: "3", md: "4" }}
            w="full"
            className="wix-fade-up-1"
          >
            {OUTLETS.map((o) => (
              <PressLogo key={o.name} name={o.name} style={o.style} />
            ))}
          </SimpleGrid>

          {/* 2 quote cards */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "5", md: "5" }} w="full">
            {QUOTES.map((q, i) => (
              <QuoteCard key={q.source} q={q} index={i} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
