// src/sections/AISeoSection.tsx
// Sprzedaje niewidzialna konserwacje. Zero technicznego jezyka.
// Duzy tytul + 1 zdanie + 3 proste karty.
// Przekaz: "Twoja strona poprawia sie sama. Nie musisz rozumiec SEO."

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react"

const CARES = [
  {
    title: "Lepsze tytuły",
    body: "Żeby Google rozumiał Twoją stronę i pokazywał ją tym, którzy Cię szukają.",
  },
  {
    title: "Szybsze ładowanie",
    body: "Żeby nikt nie opuszczał Twojej strony, bo musi czekać.",
  },
  {
    title: "Lepsze zdjęcia",
    body: "Żeby ładowały się szybko i pojawiały się w Google Grafika.",
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
          Sprawdzanie Twojej strony
        </Text>
      </HStack>
      <Text fontSize="xs" color="fg.muted" fontWeight="600">
        Ostatnie sprawdzenie: 3 min temu
      </Text>
    </Box>

    <VStack gap="3" p={{ base: "5", md: "6" }} align="stretch">
      <Box bg="white" border="1px solid" borderColor="border.subtle" rounded="xl" p="4">
        <HStack justify="space-between" align="center" mb="1">
          <Text fontSize="sm" fontWeight="700" color="fg.default">Optymalizacja wykonana</Text>
          <HStack gap="1.5">
            <Box w="2" h="2" rounded="full" bg="success.500" />
            <Text fontSize="xs" color="success.700" fontWeight="700">Gotowe</Text>
          </HStack>
        </HStack>
        <Text fontSize="xs" color="fg.muted" lineHeight="1.5">
          Twoja strona ładuje się szybciej. Google pokazuje ją wyżej.
        </Text>
      </Box>

      <Box bg="accent.50" border="1px solid" borderColor="accent.200" rounded="xl" p="4">
        <HStack justify="space-between" align="center" mb="2">
          <Text fontSize="sm" fontWeight="700" color="fg.default">Sugerowana zmiana</Text>
          <Box
            as="button"
            bg="accent.500"
            color="white"
            px="3.5"
            h="8"
            rounded="full"
            fontSize="xs"
            fontWeight="700"
            display="inline-flex"
            alignItems="center"
            cursor="pointer"
            border="none"
            _hover={{ bg: "accent.600" }}
            transition="background 0.15s"
          >
            Zastosuj
          </Box>
        </HStack>
        <Text fontSize="xs" color="fg.muted" lineHeight="1.5">
          Jedno kliknięcie i gotowe. Bez spotkań, bez raportów, bez technicznego żargonu.
        </Text>
      </Box>
    </VStack>
  </Box>
)

export const AISeoSection = () => {
  return (
    <Box
      as="section"
      id="seo-ai"
      bg="bg.cream"
      py={{ base: "20", md: "28" }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        bottom="10%"
        left="-10%"
        w="500px"
        h="500px"
        bg="accent.50"
        opacity={0.6}
        filter="blur(140px)"
        rounded="full"
        pointerEvents="none"
      />

      <Container maxW="6xl" position="relative" zIndex="1">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "16" }} alignItems="center">
          {/* Mockup */}
          <Box order={{ base: 1, lg: 0 }} className="wix-fade-up">
            <PanelMockup />
          </Box>

          {/* Copy */}
          <VStack align="flex-start" gap="8" className="wix-fade-up-1">
            <VStack align="flex-start" gap="5">
              <Heading
                as="h2"
                fontSize={{ base: "32px", md: "44px", lg: "52px" }}
                fontWeight="600"
                color="fg.default"
                letterSpacing="-0.02em"
                lineHeight="1.05"
              >
                Twoja strona{" "}
                <Box as="span" color="accent.700" fontWeight="700">
                  poprawia się sama.
                </Box>
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" lineHeight="1.55" maxW="2xl">
                Nie musisz rozumieć SEO. SEO Grow pracuje w tle i cały czas sprawdza Twoją stronę. Wszystko, co może poprawić sam, poprawia automatycznie. A kiedy decyzja zależy od Ciebie, pojawia się jeden przycisk: <Box as="span" fontWeight="700" color="fg.default">Zastosuj</Box>.
              </Text>
            </VStack>

            <VStack align="stretch" gap="4" w="full" maxW="2xl">
              {CARES.map((c, idx) => (
                <HStack
                  key={c.title}
                  gap="4"
                  align="start"
                  p="4"
                  bg="bg.canvas"
                  border="1px solid"
                  borderColor="border.subtle"
                  rounded="xl"
                  className={`wix-fade-up-${(idx % 4) + 1}`}
                >
                  <Box
                    w="9"
                    h="9"
                    rounded="full"
                    bg="success.100"
                    color="success.700"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    mt="0.5"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </Box>
                  <Box>
                    <Text fontSize="md" fontWeight="700" color="fg.default" mb="1">
                      {c.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted" lineHeight="1.5">
                      {c.body}
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

export default AISeoSection
