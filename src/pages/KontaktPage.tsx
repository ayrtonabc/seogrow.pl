// src/pages/KontaktPage.tsx
// Página de contacto — para E-E-A-T (Trust signals + NAP consistente + mapa)
import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Link } from "@chakra-ui/react"
import { SECTION_TITLE_PROPS, SECTION_TITLE_COLOR_DARK } from "../lib/typography"

const ContactIcon = ({ children }: { children: React.ReactNode }) => (
  <Box
    w="48px"
    h="48px"
    rounded="2xl"
    bg="linear-gradient(135deg, accent.50 0%, accent.100 100%)"
    color="accent.600"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexShrink={0}
  >
    {children}
  </Box>
)

export const KontaktPage = () => {
  return (
    <Box bg="white" py={{ base: "12", md: "20" }}>
      <Container maxW="6xl">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* ─── HEADER ─── */}
          <VStack gap="4" textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontSize="13px"
              fontWeight="700"
              color="accent.600"
              letterSpacing="0.18em"
              textTransform="uppercase"
            >
              Kontakt
            </Text>
            <Heading
              as="h1"
              {...SECTION_TITLE_PROPS}
              color={SECTION_TITLE_COLOR_DARK}
            >
              Napisz lub zadzwoń.{" "}
              <Box as="span" color="accent.600">Odpowiadam w 24h.</Box>
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              lineHeight="1.65"
              maxW="2xl"
            >
              Jednoosobowa firma technologiczna z Ostródy. Bez pośredników, bez call center — piszesz do mnie, ja odpisuję. Wsparcie po polsku, hiszpańsku, portugalsku lub angielsku.
            </Text>
          </VStack>

          {/* ─── GRID: info de contacto + mapa ─── */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "6", md: "8" }} w="full">
            {/* Columna izquierda: info */}
            <VStack
              align="stretch"
              gap="5"
              bg="bg.subtle"
              p={{ base: "7", md: "9" }}
              rounded="3xl"
              border="1px solid border.default"
            >
              {/* Email */}
              <HStack gap="4" align="start">
                <ContactIcon>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                </ContactIcon>
                <VStack align="start" gap="0.5">
                  <Text fontSize="xs" fontWeight="700" color="fg.subtle" textTransform="uppercase" letterSpacing="0.08em">
                    Email
                  </Text>
                  <Link
                    href="mailto:kontakt@seogrow.pl"
                    fontSize="lg"
                    fontWeight="700"
                    color="fg.default"
                    textDecoration="none"
                    _hover={{ color: "accent.600" }}
                    transition="color 0.18s"
                  >
                    kontakt@seogrow.pl
                  </Link>
                  <Text fontSize="sm" color="fg.subtle">
                    Odpowiadam w ciągu 24 godzin, zwykle szybciej.
                  </Text>
                </VStack>
              </HStack>

              {/* Teléfono */}
              <HStack gap="4" align="start">
                <ContactIcon>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </ContactIcon>
                <VStack align="start" gap="0.5">
                  <Text fontSize="xs" fontWeight="700" color="fg.subtle" textTransform="uppercase" letterSpacing="0.08em">
                    Telefon
                  </Text>
                  <Link
                    href="tel:+48517105423"
                    fontSize="lg"
                    fontWeight="700"
                    color="fg.default"
                    textDecoration="none"
                    _hover={{ color: "accent.600" }}
                    transition="color 0.18s"
                  >
                    +48 517 105 423
                  </Link>
                  <Text fontSize="sm" color="fg.subtle">
                    Pn–Pt, 8:00–17:00 (czas PL). WhatsApp również.
                  </Text>
                </VStack>
              </HStack>

              {/* Dirección */}
              <HStack gap="4" align="start">
                <ContactIcon>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </ContactIcon>
                <VStack align="start" gap="0.5">
                  <Text fontSize="xs" fontWeight="700" color="fg.subtle" textTransform="uppercase" letterSpacing="0.08em">
                    Adres
                  </Text>
                  <Text fontSize="md" fontWeight="700" color="fg.default" lineHeight="1.4">
                    Grow Solutions — JDG<br />
                    ul. Czarnieckiego 13/12<br />
                    14-100 Ostróda, Polska
                  </Text>
                  <Text fontSize="sm" color="fg.subtle">
                    NIP 7412176947 · warmińsko-mazurskie
                  </Text>
                </VStack>
              </HStack>

              {/* Google Business */}
              <HStack gap="4" align="start">
                <ContactIcon>
                  <Box fontSize="20px" lineHeight="1" fontWeight="800" color="accent.600">
                    G
                  </Box>
                </ContactIcon>
                <VStack align="start" gap="0.5">
                  <Text fontSize="xs" fontWeight="700" color="fg.subtle" textTransform="uppercase" letterSpacing="0.08em">
                    Google Business
                  </Text>
                  <Link
                    href="https://www.google.com/maps/place/SeoGrow+-+Strony+WWW+i+SEO/@53.6990252,19.9613923,17z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    fontSize="md"
                    fontWeight="700"
                    color="fg.default"
                    textDecoration="none"
                    _hover={{ color: "accent.600" }}
                    transition="color 0.18s"
                  >
                    Znajdź nas w Google Maps →
                  </Link>
                  <Text fontSize="sm" color="fg.subtle">
                    Zostaw opinię, sprawdź naszą lokalizację.
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            {/* Columna derecha: mapa */}
            <Box
              rounded="3xl"
              overflow="hidden"
              border="1px solid border.default"
              h={{ base: "320px", md: "100%" }}
              minH="320px"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.079733253519!2d19.9613923!3d53.6990252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa7c650aa17bbb98b%3A0x6c74584a55c5f019!2sSEO%20Grow%20-%20Strony%20WWW%20i%20SEO!5e0!3m2!1spl!2spl!4v1785210000000!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa dojazdu do SEO Grow — ul. Czarnieckiego 13/12, 14-100 Ostróda"
              />
            </Box>
          </SimpleGrid>

          {/* ─── FAQ mini ─── */}
          <VStack
            align="stretch"
            gap="4"
            bg="bg.subtle"
            p={{ base: "7", md: "9" }}
            rounded="3xl"
            border="1px solid border.default"
            w="full"
            maxW="4xl"
            mx="auto"
          >
            <Text fontSize="13px" fontWeight="700" color="accent.600" letterSpacing="0.18em" textTransform="uppercase" textAlign="center">
              Często pytane
            </Text>
            <VStack align="stretch" gap="3" mt="2">
              <Text fontSize="md" color="fg.default" lineHeight="1.5">
                <Box as="span" fontWeight="700">Ile kosztuje strona?</Box>{" "}
                <Box as="span" color="fg.muted">— Od 1 500 zł jednorazowo (pakiet Start) lub 2 200 zł (pakiet Standard). Opłata miesięczna 49 zł obejmuje hosting, CMS, SSL i wsparcie.</Box>
              </Text>
              <Text fontSize="md" color="fg.default" lineHeight="1.5">
                <Box as="span" fontWeight="700">Ile trwa realizacja?</Box>{" "}
                <Box as="span" color="fg.muted">— 5 dni roboczych od pierwszej 15-minutowej rozmowy.</Box>
              </Text>
              <Text fontSize="md" color="fg.default" lineHeight="1.5">
                <Box as="span" fontWeight="700">Czy obsługujecie moje miasto?</Box>{" "}
                <Box as="span" color="fg.muted">— Tak. Działamy w 97 miastach w całej Polsce, ta sama cena, ta sama jakość.</Box>
              </Text>
              <Text fontSize="md" color="fg.default" lineHeight="1.5">
                <Box as="span" fontWeight="700">Czy mogę płacić online?</Box>{" "}
                <Box as="span" color="fg.muted">— Tak, przez Tpay (karta, BLIK, przelew).</Box>
              </Text>
            </VStack>
            <Box textAlign="center" pt="2">
              <Link
                href="/cennik"
                fontSize="sm"
                fontWeight="700"
                color="accent.600"
                textDecoration="none"
                _hover={{ textDecoration: "underline" }}
              >
                Zobacz pełny cennik →
              </Link>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default KontaktPage
