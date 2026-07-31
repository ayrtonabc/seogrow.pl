// src/sections/FinalCTASection.tsx
// "Stwórz stronę. Zacznij dziś." — wix-style split-screen w/ text + image
// Fondo claro con gradient violeta pastel, NO dark.

import { Box, Container, Heading, Text, HStack, VStack, Image } from "@chakra-ui/react"

const ArrowRightIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const PhoneIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const StarIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" focusable="false">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export const FinalCTASection = () => {
  return (
    <Box
      as="section"
      bg="bg.cream"
      position="relative"
      overflow="hidden"
      aria-label="Ostatni krok"
    >
      {/* Halo violeta pastel wix-style */}
      <Box
        position="absolute"
        top="-15%"
        right="-10%"
        w="600px"
        h="600px"
        bg="rgba(167, 139, 250, 0.18)"
        filter="blur(120px)"
        rounded="full"
        pointerEvents="none"
        zIndex="0"
      />
      <Box
        position="absolute"
        bottom="-20%"
        left="-10%"
        w="500px"
        h="500px"
        bg="rgba(13, 148, 136, 0.12)"
        filter="blur(120px)"
        rounded="full"
        pointerEvents="none"
        zIndex="0"
      />

      <Container maxW="7xl" position="relative" zIndex="1" py={{ base: "20", md: "28" }}>
        <VStack gap={{ base: "10", md: "14" }} align="stretch">
          {/* Header center */}
          <VStack gap="4" textAlign="center" maxW="3xl" mx="auto" className="wix-fade-up">
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="bg.canvas"
              borderWidth="1px"
              borderColor="border.subtle"
              rounded="full"
            >
              <Box w="1.5" h="1.5" rounded="full" bg="accent.500" className="wix-pulse" />
              <Text fontSize="xs" fontWeight="600" color="fg.default" letterSpacing="0.08em" textTransform="uppercase">
                Zacznij w 15 minut
              </Text>
            </HStack>

            <Heading
              as="h2"
              fontWeight="700"
              color="fg.default"
              letterSpacing="-0.02em"
              lineHeight="1.1"
              fontSize={{ base: "36px", md: "48px", lg: "64px" }}
            >
              Stwórz stronę.{" "}
              <Box as="span" color="accent.600">Zacznij dziś.</Box>
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              lineHeight="1.6"
              maxW="2xl"
              mx="auto"
            >
              15-minutowa rozmowa, zero ankiet, zero czekania. W 5 dni masz stronę, która pracuje dla Twojej firmy.
            </Text>
          </VStack>

          {/* Split: texto izquierda, visual derecha */}
          <Box display={{ base: "block", lg: "grid" }} gridTemplateColumns={{ lg: "1fr 1fr" }} gap={{ lg: "12" }} alignItems="center">
            {/* Lado izquierdo: bullets + CTAs */}
            <VStack align={{ base: "center", lg: "flex-start" }} gap="6" textAlign={{ base: "center", lg: "left" }} className="wix-fade-up-1">
              <VStack align={{ base: "center", lg: "flex-start" }} gap="3" pt="2" w="full">
                {[
                  "Gotowa w 5 dni roboczych",
                  "Wsparcie po polsku, odpowiedź w 1h",
                  "Bez umowy długoterminowej",
                  "Edytujesz z telefonu",
                ].map((item) => (
                  <HStack key={item} gap="3" align="center">
                    <Box
                      w="7"
                      h="7"
                      rounded="full"
                      bg="accent.500"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <CheckIcon size={14} />
                    </Box>
                    <Text fontSize="md" color="fg.default" fontWeight="500">
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>

              <HStack
                className="wix-fade-up-3"
                gap="3"
                wrap="wrap"
                pt="4"
                justify={{ base: "center", lg: "flex-start" }}
              >
                <Box
                  as="a"
                  href="#ceny"
                  bg="fg.default"
                  color="fg.inverse"
                  px="7"
                  h="12"
                  rounded="full"
                  fontWeight="600"
                  fontSize="md"
                  display="inline-flex"
                  alignItems="center"
                  gap="2"
                  textDecoration="none"
                  _hover={{
                    bg: "bg.darkSubtle",
                    transform: "translateY(-1px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
                >
                  Stwórz swoją stronę
                  <ArrowRightIcon />
                </Box>

                <Box
                  as="a"
                  href="tel:+48517105423"
                  bg="bg.canvas"
                  color="fg.default"
                  px="6"
                  h="12"
                  rounded="full"
                  fontWeight="500"
                  fontSize="md"
                  display="inline-flex"
                  alignItems="center"
                  gap="2"
                  borderWidth="1px"
                  borderColor="border.strong"
                  textDecoration="none"
                  _hover={{
                    bg: "bg.subtle",
                    transform: "translateY(-1px)",
                  }}
                  transition="all 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
                >
                  <PhoneIcon />
                  517 105 423
                </Box>
              </HStack>

              {/* Social proof mini */}
              <HStack
                className="wix-fade-up-4"
                gap="3"
                pt="4"
                align="center"
              >
                <HStack spacing="-2">
                  {["/zespol/customer-1.webp", "/zespol/customer-2.webp", "/zespol/customer-3.webp", "/zespol/customer-4.webp"].map((src, i) => (
                    <Box
                      key={i}
                      w="8"
                      h="8"
                      rounded="full"
                      borderWidth="2px"
                      borderColor="bg.cream"
                      overflow="hidden"
                      ml={i > 0 ? "-2" : "0"}
                    >
                      <Image src={src} alt="" w="100%" h="100%" objectFit="cover" />
                    </Box>
                  ))}
                </HStack>
                <VStack align="start" gap="0">
                  <HStack gap="0.5" color="warm.500">
                    {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} size={11} />)}
                  </HStack>
                  <Text fontSize="xs" color="fg.muted" fontWeight="500">
                    <Box as="span" fontWeight="700" color="fg.default">5.0</Box> · 47 klientów
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            {/* Lado derecho: visual con card testimonio */}
            <Box position="relative" className="wix-slide-right" minH={{ base: "400px", md: "500px" }}>
              <Box
                position="relative"
                w="100%"
                h="100%"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
              >
                <Image
                  src="/ofertafooter.webp"
                  alt="Ejemplo de sitio web creado con SEO Grow"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  loading="lazy"
                />
              </Box>
              {/* Card flotante con testimonio */}
              <Box
                position="absolute"
                bottom={{ base: "6", md: "10" }}
                left={{ base: "6", md: "10" }}
                right={{ base: "6", md: "auto" }}
                maxW="320px"
                className="wix-fade-up-3"
                bg="bg.canvas"
                rounded="xl"
                p="5"
                boxShadow="2xl"
              >
                <HStack gap="3" align="start" mb="3">
                  <Box w="12" h="12" rounded="full" overflow="hidden" flexShrink={0}>
                    <Image src="/zespol/founder-1.webp" alt="Patrycja" w="100%" h="100%" objectFit="cover" />
                  </Box>
                  <Box>
                    <Text fontSize="sm" fontWeight="700" color="fg.default">Patrycja G.</Text>
                    <HStack gap="0.5" color="warm.500" mt="0.5">
                      {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} size={10} />)}
                    </HStack>
                  </Box>
                </HStack>
                <Text fontSize="sm" color="fg.muted" lineHeight="1.5" fontStyle="italic">
                  "Dostałam dokładnie to, czego potrzebowałam. Sama edytuję stronę z telefonu."
                </Text>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
