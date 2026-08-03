// src/pages/AboutPage.tsx
// Pagina "O nas" — narracion del sistema SEO Grow para usuarios no tecnicos.
// Marca comercial: SEO Grow. Prestador: MARTYNA CIEŚNIEWSKA GROW SOLUTIONS.

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Badge } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SEO } from "../components/SEO"

const PILLARS = [
  {
    title: "Dla osób, nie dla techników",
    body: "SEO Grow jest stworzony dla właścicieli małych firm, freelancerów i rzemieślników, którzy nie chcą uczyć się HTML-a, wtyczek ani skomplikowanych paneli. Jeśli potrafisz wysłać SMS-a, potrafisz obsługiwać swoją stronę.",
    accent: "accent.500",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.5 6.5 18 3l3 3-3.5 3.5" />
      </svg>
    ),
  },
  {
    title: "SEO automatyczne z AI",
    body: "System sam generuje schema.org, meta tagi, sitemapę i optymalizację on-page. Twoja strona pojawia się w Google, bez konieczności wiedzenia, czym jest meta description.",
    accent: "accent.600",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
        <path d="m4.93 4.93 14.14 14.14" />
      </svg>
    ),
  },
  {
    title: "Edytor wizualny bez kodu",
    body: "Zmieniaj teksty, zdjęcia, cenniki i usługi z telefonu w edytorze wizualnym. Bez kodu, bez ryzyka popsucia wyglądu, bez dzwonienia do technika przy każdej zmianie.",
    accent: "accent.700",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Moduły preinstalowane",
    body: "Sklep online, rezerwacje, menu cyfrowe, blog, formularz kontaktowy — wszystko w zestawie i skonfigurowane. Nie trzeba instalować zewnętrznych wtyczek ani martwić się o aktualizacje.",
    accent: "accent.800",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Bez zależności od wtyczek",
    body: "System jest zbudowany jako całość: design, SEO, moduły, hosting. Nie ma wtyczek do aktualizowania ani elementów firm trzecich, które mogą paść albo stać się przestarzałe.",
    accent: "accent.500",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Wsparcie w Twoim języku",
    body: "Osobista obsługa po polsku, hiszpańsku lub angielsku. Bez call center, bez botów. Rozmawiasz z osobą, która zbudowała Twoją stronę.",
    accent: "accent.600",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

const PillarCard = ({ p }: { p: typeof PILLARS[number] }) => (
  <Box
    bg="bg.canvas"
    border="1px solid"
    borderColor="border.default"
    rounded="2xl"
    p={{ base: "6", md: "7" }}
    transition="all 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
    _hover={{
      borderColor: p.accent,
      transform: "translateY(-2px)",
      boxShadow: "lg",
    }}
  >
    <HStack gap="3" align="start" mb="4">
      <Box
        w="11"
        h="11"
        rounded="xl"
        bg="bg.cream"
        color={p.accent}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
      >
        {p.icon}
      </Box>
      <Heading
        as="h3"
        fontSize="lg"
        fontWeight="700"
        color="fg.default"
        letterSpacing="-0.02em"
        lineHeight="1.25"
      >
        {p.title}
      </Heading>
    </HStack>
    <Text color="fg.muted" fontSize="sm" lineHeight="1.65">
      {p.body}
    </Text>
  </Box>
)

export const AboutPage = () => {
  return (
    <Box bg="bg.canvas" minH="100vh">
      <SEO
        title="O nas — SEO Grow dla osób nietechnicznych"
        description="SEO Grow to system do tworzenia stron internetowych dla osób nietechnicznych. SEO automatyczne z AI, edytor wizualny, moduły preinstalowane. Zarządzanie stroną tak proste jak wysłanie SMS-a."
        path="/o-nas"
        keywords="SEO Grow, o nas, system CMS dla firm, SEO automatyczne, edytor wizualny, moduły, strona dla nietechnicznych"
      />
      <Header />

      <Box as="main" id="main-content" tabIndex={-1} outline="none">
        {/* Hero */}
        <Box bg="bg.cream" borderBottom="1px solid" borderColor="border.default" pt={{ base: "20", md: "28" }} pb={{ base: "12", md: "16" }}>
          <Container maxW="4xl">
            <VStack gap="6" align="flex-start">
              <Badge
                bg="white"
                color="accent.700"
                border="1px solid"
                borderColor="border.subtle"
                rounded="full"
                px="3"
                py="1.5"
                fontSize="xs"
                fontWeight="700"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                O nas
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "32px", md: "44px", lg: "52px" }}
                fontWeight="600"
                color="fg.default"
                letterSpacing="-0.02em"
                lineHeight="1.1"
              >
                Strona internetowa tak prosta{" "}
                <Box as="span" color="accent.700" fontWeight="700">
                  jak wyslanie SMS-a.
                </Box>
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" lineHeight="1.65" maxW="3xl">
                SEO Grow to system stworzony z mysla o osobach, ktore nie chca byc webmasterami, programistami ani SEO-wcami. Cala zlozonosc techniczna — SEO, schema, meta tagi, optymalizacja wydajnosci — dzieje sie w tle. Klient dostaje strone, ktora po prostu dziala.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color="fg.default" lineHeight="1.65" maxW="3xl" fontWeight="500">
                Naszym wyzwaniem było sprawić, by obsługa strony była{" "}
                <Box as="span" color="accent.700" fontWeight="700">równie prosta jak wysłanie SMS-a</Box>{" "}
                — bez żadnych technicznych pojęć, bez funkcji, które mogą coś zepsuć, bez zależności od wtyczek.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Pillars */}
        <Box py={{ base: "16", md: "24" }}>
          <Container maxW="6xl">
            <VStack gap={{ base: "10", md: "14" }}>
              <VStack gap="4" textAlign="center" maxW="3xl" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: "28px", md: "36px" }}
                  fontWeight="600"
                  color="fg.default"
                  letterSpacing="-0.015em"
                  lineHeight="1.15"
                >
                  Czym rozni sie{" "}
                  <Box as="span" color="accent.700" fontWeight="700">SEO Grow</Box>
                </Heading>
                <Text color="fg.muted" fontSize="md" lineHeight="1.65">
                  Szesc filarow, ktore sprawiaja, ze system jest naprawde prosty w obsludze.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: "5", md: "6" }} w="full">
                {PILLARS.map((p) => (
                  <PillarCard key={p.title} p={p} />
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* Como funciona */}
        <Box bg="bg.cream" py={{ base: "16", md: "20" }} borderTop="1px solid" borderBottom="1px solid" borderColor="border.default">
          <Container maxW="4xl">
            <VStack gap="8" align="stretch">
              <VStack gap="4" textAlign="center">
                <Heading
                  as="h2"
                  fontSize={{ base: "28px", md: "36px" }}
                  fontWeight="600"
                  color="fg.default"
                  letterSpacing="-0.015em"
                  lineHeight="1.15"
                >
                  Jak to dziala{" "}
                  <Box as="span" color="accent.700" fontWeight="700">w praktyce</Box>
                </Heading>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "6", md: "8" }}>
                <VStack align="flex-start" gap="3" bg="bg.canvas" p="6" rounded="2xl" border="1px solid" borderColor="border.default">
                  <Box w="10" h="10" rounded="full" bg="accent.500" color="white" display="flex" alignItems="center" justifyContent="center" fontSize="lg" fontWeight="700">1</Box>
                  <Heading as="h3" fontSize="md" fontWeight="700" color="fg.default" letterSpacing="-0.01em">15-minutowa rozmowa</Heading>
                  <Text fontSize="sm" color="fg.muted" lineHeight="1.6">Poznajemy Twoja firme, branze, miasto i cele. Bez ankiet, bez czekania na wycene.</Text>
                </VStack>

                <VStack align="flex-start" gap="3" bg="bg.canvas" p="6" rounded="2xl" border="1px solid" borderColor="border.default">
                  <Box w="10" h="10" rounded="full" bg="accent.600" color="white" display="flex" alignItems="center" justifyContent="center" fontSize="lg" fontWeight="700">2</Box>
                  <Heading as="h3" fontSize="md" fontWeight="700" color="fg.default" letterSpacing="-0.01em">Strona gotowa w 5 dni</Heading>
                  <Text fontSize="sm" color="fg.muted" lineHeight="1.6">System generuje strone, konfiguruje SEO, Google Analytics i Search Console. Ty dostarczasz tresci.</Text>
                </VStack>

                <VStack align="flex-start" gap="3" bg="bg.canvas" p="6" rounded="2xl" border="1px solid" borderColor="border.default">
                  <Box w="10" h="10" rounded="full" bg="accent.700" color="white" display="flex" alignItems="center" justifyContent="center" fontSize="lg" fontWeight="700">3</Box>
                  <Heading as="h3" fontSize="md" fontWeight="700" color="fg.default" letterSpacing="-0.01em">Edytujesz sam</Heading>
                  <Text fontSize="sm" color="fg.muted" lineHeight="1.6">Z telefonu, jednym kliknieciem. Bez kodowania, bez proszenia technika o kazda zmiane.</Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* CTAs */}
        <Box py={{ base: "12", md: "16" }}>
          <Container maxW="3xl">
            <VStack
              gap="5"
              align="center"
              bg="bg.dark"
              color="fg.inverse"
              rounded="3xl"
              p={{ base: "8", md: "12" }}
              position="relative"
              overflow="hidden"
            >
              <Box position="absolute" top="-50%" right="-10%" w="400px" h="400px" bg="accent.500" opacity={0.18} filter="blur(120px)" rounded="full" pointerEvents="none" />
              <Heading
                as="h2"
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="600"
                color="fg.inverse"
                letterSpacing="-0.015em"
                lineHeight="1.2"
                textAlign="center"
                position="relative"
                zIndex="1"
              >
                Sprawdz jak wyglada{" "}
                <Box as="span" color="accent.500" fontWeight="700">SEO Grow</Box>{" "}
                w praktyce
              </Heading>
              <Text color="fg.inverseMuted" fontSize="md" textAlign="center" position="relative" zIndex="1" maxW="2xl">
                Zadzwon lub napisz — chetnie opowiemy jak dziala system i ile trwa wdrozenie dla Twojej firmy.
              </Text>
              <HStack gap="3" flexWrap="wrap" justify="center" position="relative" zIndex="1" pt="2">
                <Box
                  as="a"
                  href="tel:+48517105423"
                  bg="accent.500"
                  color="fg.inverse"
                  px="6"
                  h="12"
                  rounded="full"
                  fontSize="sm"
                  fontWeight="600"
                  display="inline-flex"
                  alignItems="center"
                  gap="2"
                  textDecoration="none"
                  _hover={{ bg: "accent.600" }}
                  transition="background 0.15s"
                >
                  517 105 423
                </Box>
                <Box
                  as="a"
                  href="mailto:kontakt@seogrow.pl"
                  bg="rgba(255,255,255,0.08)"
                  color="fg.inverse"
                  border="1px solid"
                  borderColor="rgba(255,255,255,0.18)"
                  px="6"
                  h="12"
                  rounded="full"
                  fontSize="sm"
                  fontWeight="600"
                  display="inline-flex"
                  alignItems="center"
                  textDecoration="none"
                  _hover={{ bg: "rgba(255,255,255,0.14)" }}
                  transition="background 0.15s"
                >
                  kontakt@seogrow.pl
                </Box>
              </HStack>
            </VStack>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

export default AboutPage
