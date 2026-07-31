// src/sections/TargetAudienceSection.tsx
// "Dla tych, którzy chcą działać." — Split 50/50.
// Izquierda: header + grid de 9 oficios. Derecha: quote card con testimonial.
// Sin botones rotos a /zamowienie. CTA tel: en su lugar.

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react"

type Persona = {
  name: string
  icon: JSX.Element
}

const PERSONAS: Persona[] = [
  {
    name: "Hydraulik",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" /><path d="m4 20 4-4 4 4 8-8-2.5-2.5" /><path d="m14 11 2.5 2.5" />
      </svg>
    ),
  },
  {
    name: "Dentysta",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 5.5a4.5 4.5 0 0 0-9 0c0 2 1 3 1 5.5s0 5 1.5 6.5c.5.5 1 .5 1.5-.5s.5-2 0-3" /><path d="M12 5.5a4.5 4.5 0 0 1 9 0c0 2-1 3-1 5.5s0 5-1.5 6.5c-.5.5-1 .5-1.5-.5s-.5-2 0-3" />
      </svg>
    ),
  },
  {
    name: "Fotograf",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" />
      </svg>
    ),
  },
  {
    name: "Restaurator",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2" /><path d="M7 2v7" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
  },
  {
    name: "Mechanik",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5z" />
      </svg>
    ),
  },
  {
    name: "Prawnik",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v18" /><path d="M5 7h14M5 7c0 2 2 3 4 3s4-1 4-3M19 7c0 2-2 3-4 3" /><path d="M8 21h8" />
      </svg>
    ),
  },
  {
    name: "Architekt",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18" /><path d="M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    name: "Trener",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="2" /><path d="m6 21 2-7 4-2 4 2 2 7" /><path d="M9 14h6" />
      </svg>
    ),
  },
  {
    name: "Fryzjer",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
      </svg>
    ),
  },
]

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" opacity="0.18" aria-hidden="true">
    <path d="M9.13 4.32c-3.86 1.97-6.13 6.18-6.13 10.68 0 3.43 2.07 4.83 4.13 4.83 2.07 0 4.13-1.4 4.13-3.96 0-2.55-1.4-3.96-3.26-3.96-.35 0-.7.05-1.05.16.7-2.55 2.55-4.46 5.13-5.5l-2.95-2.25zm10 0c-3.86 1.97-6.13 6.18-6.13 10.68 0 3.43 2.07 4.83 4.13 4.83 2.07 0 4.13-1.4 4.13-3.96 0-2.55-1.4-3.96-3.26-3.96-.35 0-.7.05-1.05.16.7-2.55 2.55-4.46 5.13-5.5l-2.95-2.25z" />
  </svg>
)

const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export const TargetAudienceSection = () => {
  return (
    <Box
      as="section"
      id="dla-kogo"
      bg="bg.canvas"
      py={{ base: "20", md: "28" }}
      aria-label="Dla kogo jest SEO Grow"
    >
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "10", lg: "14" }} alignItems="center">
          {/* Izquierda: header + grid de oficios */}
          <VStack align="flex-start" gap="6" className="wix-fade-up">
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="rgba(13, 148, 136, 0.1)"
              borderWidth="1px"
              borderColor="rgba(13, 148, 136, 0.25)"
              borderRadius="full"
            >
              <Box w="1.5" h="1.5" borderRadius="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" letterSpacing="0.08em" textTransform="uppercase" color="accent.700">
                Dla kogo
              </Text>
            </HStack>

            <Heading
              as="h2"
              fontWeight="600"
              color="fg.default"
              letterSpacing="-0.015em"
              lineHeight="1.1"
              fontSize={{ base: "32px", sm: "38px", md: "44px", lg: "50px" }}
              maxW="540px"
            >
              Dla tych, którzy chcą{" "}
              <Box as="span" color="accent.700" fontWeight="700">
                działać.
              </Box>
            </Heading>

            <Text color="fg.muted" fontSize="lg" lineHeight="1.6" maxW="md">
              Mała firma, konkretny fach. Klienci z Twojej okolicy szukają Cię w Google. My sprawiamy, że Cię znajdują.
            </Text>

            {/* Grid 3×3 de oficios */}
            <SimpleGrid columns={{ base: 2, sm: 3 }} gap="3" w="full" pt="2">
              {PERSONAS.map((p, i) => (
                <HStack
                  key={p.name}
                  gap="2.5"
                  px="3.5"
                  py="3"
                  bg="bg.subtle"
                  borderWidth="1px"
                  borderColor="border.subtle"
                  borderRadius="xl"
                  _hover={{ borderColor: "accent.300", transform: "translateY(-1px)", boxShadow: "sm" }}
                  transition="all 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
                  className={`wix-fade-up-${(i % 4) + 1}`}
                >
                  <Box
                    w="8"
                    h="8"
                    borderRadius="lg"
                    bg="rgba(13, 148, 136, 0.1)"
                    color="accent.700"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    {p.icon}
                  </Box>
                  <Text fontSize="sm" fontWeight="700" color="fg.default" letterSpacing="-0.01em">
                    {p.name}
                  </Text>
                </HStack>
              ))}
            </SimpleGrid>

            {/* CTA tel: en lugar del botón roto a /zamowienie */}
            <Box
              as="a"
              href="tel:+48517105423"
              mt="3"
              display="inline-flex"
              alignItems="center"
              gap="2"
              bg="fg.default"
              color="white"
              px="6"
              h="12"
              borderRadius="full"
              fontWeight="600"
              fontSize="14px"
              textDecoration="none"
              _hover={{ bg: "bg.darkSubtle", transform: "translateY(-1px)", boxShadow: "lg" }}
              transition="all 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            >
              <PhoneIcon />
              Nie widzisz swojej branży? Zadzwoń: 517 105 423
            </Box>
          </VStack>

          {/* Derecha: quote card con testimonial — sin imagen rota */}
          <Box position="relative" className="wix-slide-right">
            <Box
              bg="bg.subtle"
              borderRadius="3xl"
              borderWidth="1px"
              borderColor="border.subtle"
              p={{ base: "7", md: "9" }}
              boxShadow="lg"
              position="relative"
              overflow="hidden"
            >
              {/* Halo teal de fondo */}
              <Box
                position="absolute"
                top="-10%"
                right="-10%"
                w="320px"
                h="320px"
                bg="accent.500"
                opacity={0.08}
                filter="blur(80px)"
                borderRadius="full"
                pointerEvents="none"
              />

              <VStack align="flex-start" gap="6" position="relative" zIndex="1">
                <Box color="accent.600">
                  <QuoteIcon />
                </Box>

                <Text
                  fontSize={{ base: "20px", md: "24px" }}
                  color="fg.default"
                  fontWeight="700"
                  lineHeight="1.4"
                  letterSpacing="-0.015em"
                >
                  „Klienci z mojej okolicy sami mnie znajdują w Google. Nie płacę już 1500 zł miesięcznie w reklamy."
                </Text>

                <HStack
                  gap="3"
                  pt="5"
                  borderTop="1px solid"
                  borderColor="border.subtle"
                  w="full"
                >
                  <Box
                    w="11"
                    h="11"
                    borderRadius="full"
                    bg="rgba(33, 90, 255, 0.1)"
                    color="#215AFF"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="sm"
                    fontWeight="700"
                    flexShrink={0}
                  >
                    MK
                  </Box>
                  <Box>
                    <Text fontSize="sm" fontWeight="700" color="fg.default" lineHeight="1.2">
                      Maksymilian Kołodziej
                    </Text>
                    <Box
                      as="a"
                      href="https://aukcjeszkody.pl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      fontSize="xs"
                      color="accent.700"
                      fontWeight="600"
                      lineHeight="1.2"
                      mt="0.5"
                      textDecoration="none"
                      _hover={{ textDecoration: "underline" }}
                    >
                      aukcjeszkody.pl
                    </Box>
                  </Box>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
