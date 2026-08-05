// src/sections/AIBlogSection.tsx
// Sprzedaje rezultaty biznesowe. Zero technicznego jezyka.
// Duzy tytul + 1 zdanie + makieta panelu + 3 duze korzysci.
// Przekaz: "Twoja strona rosnie sama. Ty prowadzisz swoj biznes."

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react"

const BENEFITS = [
  {
    title: "Więcej wizyt z Google",
    body: "Co tydzień pojawiają się nowe treści powiązane z Twoimi usługami. Więcej oczu na Twojej stronie.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 17l6-6 4 4 8-8" />
        <polyline points="14 7 21 7 21 14" />
      </svg>
    ),
  },
  {
    title: "Więcej szans na sprzedaż",
    body: "Każdy artykuł odpowiada dokładnie na to, czego szukają Twoi przyszli klienci. Więcej zapytań, więcej telefonów.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Ty nie robisz nic",
    body: "Włącz tryb automatyczny i zapomnij. Twoja strona pracuje dla Ciebie — w dzień i w nocy.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

const PanelMockup = () => (
  <Box
    bg="bg.canvas"
    border="1px solid"
    borderColor="border.default"
    rounded="3xl"
    overflow="hidden"
    boxShadow="0 30px 80px -30px rgba(15, 118, 110, 0.25)"
    position="relative"
  >
    <Box
      bg="bg.cream"
      borderBottom="1px solid"
      borderColor="border.subtle"
      px="5"
      py="3.5"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack gap="2">
        <Box w="2" h="2" rounded="full" bg="success.500" />
        <Text fontSize="xs" fontWeight="700" color="fg.muted" letterSpacing="0.04em">
          Pracuje teraz
        </Text>
      </HStack>
      <Text fontSize="xs" color="fg.muted" fontWeight="600">
        Tryb automatyczny · ON
      </Text>
    </Box>

    <VStack gap="3" p={{ base: "5", md: "6" }} align="stretch">
      <Box bg="white" border="1px solid" borderColor="border.subtle" rounded="xl" p="4">
        <Text fontSize="10px" fontWeight="800" color="accent.600" letterSpacing="0.1em" textTransform="uppercase" mb="2">
          Nowy artykuł opublikowany
        </Text>
        <Text fontSize="md" fontWeight="700" color="fg.default" lineHeight="1.3" mb="2">
          5 błędów przy wyborze folii PPF, które kosztują Cię 2000 zł
        </Text>
        <HStack gap="3" color="fg.muted">
          <HStack gap="1.5">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <Text fontSize="xs" fontWeight="600">4 min</Text>
          </HStack>
          <HStack gap="1.5">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <Text fontSize="xs" fontWeight="600">+3 zapytania</Text>
          </HStack>
        </HStack>
      </Box>

      <Box bg="white" border="1px solid" borderColor="border.subtle" rounded="xl" p="4">
        <Text fontSize="10px" fontWeight="800" color="accent.600" letterSpacing="0.1em" textTransform="uppercase" mb="2">
          Następny w kolejce
        </Text>
        <Text fontSize="sm" fontWeight="600" color="fg.default" lineHeight="1.4">
          Jak dbać o lakier samochodu zimą
        </Text>
      </Box>
    </VStack>
  </Box>
)

export const AIBlogSection = () => {
  return (
    <Box
      as="section"
      id="blog-ai"
      bg="bg.canvas"
      py={{ base: "20", md: "28" }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="10%"
        right="-10%"
        w="500px"
        h="500px"
        bg="accent.50"
        opacity={0.7}
        filter="blur(140px)"
        rounded="full"
        pointerEvents="none"
      />

      <Container maxW="6xl" position="relative" zIndex="1">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "16" }} alignItems="center">
          {/* Copy */}
          <VStack align="flex-start" gap="6" className="wix-fade-up">
            <Heading
              as="h2"
              fontSize={{ base: "32px", md: "44px", lg: "52px" }}
              fontWeight="600"
              color="fg.default"
              letterSpacing="-0.02em"
              lineHeight="1.05"
            >
              Twoja strona rośnie,{" "}
              <Box as="span" color="accent.700" fontWeight="700">
                nawet gdy jest zamknięta.
              </Box>
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" lineHeight="1.55" maxW="2xl">
              Gdy obsługujesz klientów, Twoja strona dalej pracuje. Dziś publikuje artykuł. Jutro pojawia się na kolejną frazę. W przyszłym tygodniu ktoś trafia z Google i do Ciebie dzwoni.
            </Text>
            <Text fontSize="sm" color="fg.muted" lineHeight="1.6" maxW="2xl">
              Twoja konkurencja będzie musiała zapłacić agencji, żeby robić to samo. Ty tylko włączasz przełącznik.
            </Text>
          </VStack>

          {/* Mockup + 3 beneficios apilados */}
          <VStack align="stretch" gap="8" className="wix-fade-up-1">
            <PanelMockup />

            <VStack align="stretch" gap="3">
              {BENEFITS.map((b, idx) => (
                <HStack
                  key={b.title}
                  gap="4"
                  align="center"
                  className={`wix-fade-up-${(idx % 4) + 1}`}
                >
                  <Box
                    w="11"
                    h="11"
                    rounded="xl"
                    bg="accent.50"
                    color="accent.700"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    {b.icon}
                  </Box>
                  <Box>
                    <Text fontSize="md" fontWeight="700" color="fg.default" lineHeight="1.2" mb="0.5">
                      {b.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted" lineHeight="1.5">
                      {b.body}
                    </Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default AIBlogSection
