// src/sections/StatsSection.tsx
// "Trzy liczby. Jedna decyzja." — wix-style light bg, eyebrow + 3 metric cards.
// Cards con color sólido tipo wix (no todos blancos).

import { Box, Container, Heading, Text, SimpleGrid, HStack, VStack } from "@chakra-ui/react"

type Metric = {
  value: string
  label: string
  description: string
  bg: string
  fg: string
}

const METRICS: Metric[] = [
  {
    value: "5 dni",
    label: "realizacja",
    description: "Od pierwszej rozmowy do opublikowanej strony. Bez opóźnień, bez przestojów.",
    bg: "rgba(13, 148, 136, 0.10)",
    fg: "accent.700",
  },
  {
    value: "1 500 zł",
    label: "od",
    description: "Płacisz raz za projekt strony. Hosting i wsparcie to osobna, niska opłata.",
    bg: "rgba(167, 139, 250, 0.10)",
    fg: "#6D28D9",
  },
  {
    value: "47+",
    label: "klientów w 2026",
    description: "Od hydraulików po kancelarie prawne. Każda strona inna, każda skuteczna.",
    bg: "rgba(244, 114, 182, 0.10)",
    fg: "#BE185D",
  },
]

const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const StatsSection = () => {
  return (
    <Box
      as="section"
      bg="bg.canvas"
      py={{ base: "20", md: "24" }}
      aria-label="Trzy liczby. Jedna decyzja."
    >
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }} align="stretch">
          {/* Header */}
          <Box textAlign="center" maxW="3xl" mx="auto">
            <HStack
              className="wix-fade-up"
              gap="2"
              px="3"
              py="1.5"
              bg="bg.subtle"
              borderWidth="1px"
              borderColor="border.subtle"
              rounded="full"
              justify="center"
              mb="5"
              display="inline-flex"
            >
              <Box w="1.5" h="1.5" rounded="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="600" color="fg.default" letterSpacing="0.08em" textTransform="uppercase">
                W liczbach
              </Text>
            </HStack>

            <Heading
              as="h2"
              className="wix-fade-up-1"
              fontWeight="700"
              color="fg.default"
              letterSpacing="-0.02em"
              lineHeight="1.1"
              fontSize={{ base: "32px", md: "44px", lg: "56px" }}
            >
              Trzy liczby.{" "}
              <Box as="span" color="accent.600">Jedna decyzja.</Box>
            </Heading>

            <Text
              className="wix-fade-up-2"
              mt="4"
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              lineHeight="1.6"
              maxW="2xl"
              mx="auto"
            >
              Zero ukrytych kosztów. Zero obietnic bez pokrycia. Konkrety, które możesz zweryfikować.
            </Text>
          </Box>

          {/* 3 metric cards con color pastel */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "4", md: "5" }} w="full">
            {METRICS.map((m, i) => (
              <Box
                key={m.label}
                className={`wix-fade-up-${(i % 4) + 1}`}
                p={{ base: "7", md: "9" }}
                bg={m.bg}
                borderRadius="2xl"
                transition="all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
                _hover={{
                  transform: "translateY(-3px)",
                  boxShadow: "lg",
                }}
              >
                <Text
                  fontSize={{ base: "48px", md: "60px", lg: "72px" }}
                  fontWeight="700"
                  color="fg.default"
                  letterSpacing="-0.02em"
                  lineHeight="1.05"
                  mb="2"
                >
                  {m.value}
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="600"
                  color={m.fg}
                  mb="3"
                  letterSpacing="-0.005em"
                >
                  {m.label}
                </Text>
                <Text fontSize="sm" color="fg.muted" lineHeight="1.6">
                  {m.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* Trust strip */}
          <HStack
            className="wix-fade-up-3"
            gap={{ base: "4", md: "8" }}
            wrap="wrap"
            justify="center"
            align="center"
            pt="4"
          >
            {[
              "Gotowa w 5 dni",
              "Wsparcie po polsku",
              "Bez umowy długoterminowej",
              "Edytujesz z telefonu",
            ].map((item) => (
              <HStack key={item} gap="2" align="center">
                <Box color="accent.500" display="flex"><CheckIcon size={16} /></Box>
                <Text fontSize="sm" color="fg.muted" fontWeight="500">
                  {item}
                </Text>
              </HStack>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}
