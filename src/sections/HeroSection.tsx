// src/sections/HeroSection.tsx
// "Twój biznes. Twoja strona. W 5 dni." — wix.com.pl pattern
// Fondo claro con gradient violeta pastel, tipografía relajada, CTA oscuro sólido

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

const StarIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" focusable="false">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const HeroVisual = () => (
  <Box
    position="relative"
    w="full"
    aspectRatio={{ base: "4 / 3", md: "16 / 10", lg: "3 / 2" }}
    borderRadius="2xl"
    overflow="hidden"
    boxShadow="xl"
    bg="#F1F5F9"
  >
    <Image
      src="/zespol/panel.webp"
      alt="Panel administracyjny SEO Grow — PageSpeed, ruch na stronie i statystyki klienta"
      w="100%"
      h="100%"
      objectFit="cover"
      objectPosition="center 35%"
      loading="eager"
    />
  </Box>
)

export const HeroSection = () => {
  return (
    <Box
      as="section"
      bg="bg.canvas"
      position="relative"
      overflow="hidden"
      aria-label="Sekcja powitalna"
      minH="100vh"
      display="flex"
      alignItems="center"
      pt={{ base: "24", md: "28", lg: "32" }}
      pb={{ base: "12", md: "16", lg: "20" }}
    >
      {/* Halo violeta pastel wix-style */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="700px"
        h="700px"
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
        w="600px"
        h="600px"
        bg="rgba(244, 114, 182, 0.12)"
        filter="blur(120px)"
        rounded="full"
        pointerEvents="none"
        zIndex="0"
      />

      <Container maxW="7xl" position="relative" zIndex="1">
        <Box display={{ base: "block", lg: "grid" }} gridTemplateColumns={{ lg: "1fr 1fr" }} gap={{ lg: "10", xl: "14" }} alignItems="center">
          {/* Columna izquierda: texto */}
          <VStack align={{ base: "center", lg: "flex-start" }} gap={{ base: "5", md: "6" }} textAlign={{ base: "center", lg: "left" }} maxW={{ base: "3xl", lg: "none" }} mx={{ base: "auto", lg: "0" }}>
            {/* Eyebrow con dot pulsante — dolor del cliente PyME */}
            <HStack
              className="wix-fade-up"
              gap="2"
              px="3"
              py="1.5"
              bg="bg.canvas"
              borderWidth="1px"
              borderColor="border.default"
              rounded="full"
            >
              <Box w="1.5" h="1.5" rounded="full" bg="accent.500" className="wix-pulse" />
              <Text fontSize="xs" fontWeight="600" letterSpacing="0.08em" textTransform="uppercase" color="fg.default">
                Jedna platforma · Bez WordPressa · Bez chaosu w narzędziach
              </Text>
            </HStack>

            {/* H1 — wix-style: 48-56px max, line-height 1.1, letter-spacing -0.015em */}
            <Heading
              as="h1"
              className="wix-fade-up-1"
              fontWeight="600"
              color="fg.default"
              letterSpacing="-0.015em"
              lineHeight="1.1"
              fontSize={{ base: "34px", md: "44px", lg: "50px" }}
              maxW="680px"
            >
              Jedna platforma, która zastępuje{" "}
              <Box as="span" color="#215AFF" fontWeight="700">
                cały chaos.
              </Box>
            </Heading>

            {/* Subclaim — punchy, una línea, keyword-rich para SEO */}
            <Text
              className="wix-fade-up-2"
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              lineHeight="1.55"
              maxW="560px"
              fontWeight="400"
            >
              Strona, panel do zarządzania, SEO, hosting, domena i wsparcie — <Box as="span" fontWeight="600" color="fg.default">w jednym miejscu, w jednej racie</Box>. Gotowe w 5 dni od dostarczenia materiałów. Od <Box as="span" fontWeight="600" color="#215AFF">1 500 zł</Box>. Bez WordPressa, bez 14 wtyczek, bez Booksy.
            </Text>

            {/* CTAs */}
            <HStack
              className="wix-fade-up-3"
              gap="3"
              wrap="wrap"
              pt="2"
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

            {/* Trust strip con avatares */}
            <HStack
              className="wix-fade-up-4"
              gap="4"
              pt={{ base: "6", md: "8" }}
              wrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
              align="center"
            >
              <HStack spacing="-2">
                {["/zespol/founder-1.webp", "/zespol/founder-2.webp", "/zespol/customer-1.webp", "/zespol/customer-2.webp", "/zespol/customer-3.webp"].map((src, i) => (
                  <Box
                    key={i}
                    w="8"
                    h="8"
                    rounded="full"
                    borderWidth="2px"
                    borderColor="bg.canvas"
                    overflow="hidden"
                    ml={i > 0 ? "-2" : "0"}
                    zIndex={1}
                  >
                    <Image src={src} alt="" w="100%" h="100%" objectFit="cover" loading="lazy" />
                  </Box>
                ))}
              </HStack>
              <VStack align={{ base: "center", lg: "flex-start" }} gap="0" spacing="0">
                <HStack gap="0.5" color="warm.500">
                  {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} size={12} />)}
                </HStack>
                <Text fontSize="xs" color="fg.muted" mt="0.5">
                  <Box as="span" fontWeight="600" color="fg.default">47 osób</Box> wybrało nas w tym tygodniu
                </Text>
              </VStack>
            </HStack>
          </VStack>

          {/* Columna derecha: visual */}
          <Box className="wix-slide-right" display={{ base: "none", lg: "block" }} mt={{ base: "12", lg: "0" }}>
            <HeroVisual />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
