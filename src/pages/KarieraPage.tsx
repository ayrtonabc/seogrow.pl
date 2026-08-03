// src/pages/KarieraPage.tsx
// Pagina "Kariera" — Grow Solutions to JDG 1-osobowa, no contratamos.
// Informa a candidatos que somos un equipo pequeno y remoto.

import { Box, Container, Heading, Text, VStack, HStack, Badge } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SEO } from "../components/SEO"

export const KarieraPage = () => {
  return (
    <Box bg="bg.canvas" minH="100vh">
      <SEO
        title="Kariera — praca w SEO Grow"
        description="SEO Grow to jednoosobowa firma technologiczna prowadzona w modelu 100% zdalnym. W tej chwili nie prowadzimy rekrutacji."
        path="/kariera"
        keywords="kariera, praca, SEO Grow, jednoosobowa firma, praca zdalna"
      />
      <Header />

      <Box as="main" id="main-content" tabIndex={-1} outline="none">
        <Box bg="bg.cream" borderBottom="1px solid" borderColor="border.default" pt={{ base: "20", md: "28" }} pb={{ base: "10", md: "14" }}>
          <Container maxW="3xl">
            <VStack gap="5" align="flex-start">
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
                Kariera
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "32px", md: "44px" }}
                fontWeight="600"
                color="fg.default"
                letterSpacing="-0.02em"
                lineHeight="1.1"
              >
                Pracujemy{" "}
                <Box as="span" color="accent.700" fontWeight="700">inaczej.</Box>
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" lineHeight="1.65" maxW="2xl">
                SEO Grow to jednoosobowa dzialalnosc gospodarcza prowadzona w modelu 100% zdalnym. Nie mamy biura, nie mamy zespolu, nie prowadzimy rekrutacji.
              </Text>
            </VStack>
          </Container>
        </Box>

        <Box py={{ base: "12", md: "16" }}>
          <Container maxW="3xl">
            <VStack gap="8" align="stretch">
              <Box bg="bg.canvas" border="1px solid" borderColor="border.default" rounded="2xl" p={{ base: "6", md: "8" }}>
                <Heading as="h2" fontSize="xl" fontWeight="700" color="fg.default" letterSpacing="-0.02em" mb="4">
                  Dlaczego nie rekrutujemy?
                </Heading>
                <Text color="fg.muted" fontSize="md" lineHeight="1.65" mb="4">
                  Caly system SEO Grow — od projektowania stron po SEO i obsluge klienta — jest zarzadzany przez jedna osobe. To pozwala nam oferowac strony od 1 500 zl netto z 5-dniowym wdrozeniem, a nie 8 000 zl z 6-tygodniowym procesem w agencji z 5-etapowa struktura.
                </Text>
                <Text color="fg.muted" fontSize="md" lineHeight="1.65">
                  W tej chwili nie mamy otwartych pozycji. Jesli uwazasz, ze mozesz pomoc nam w okreslonym projekcie (np. SEO lokalne dla konkretnego miasta, video marketing, copy), napisz — zawsze jest miejsce na dobra wspolprace.
                </Text>
              </Box>

              <Box bg="bg.cream" border="1px solid" borderColor="border.default" rounded="2xl" p={{ base: "6", md: "8" }}>
                <Heading as="h2" fontSize="xl" fontWeight="700" color="fg.default" letterSpacing="-0.02em" mb="4">
                  Chcesz wspolpracowac?
                </Heading>
                <Text color="fg.muted" fontSize="md" lineHeight="1.65" mb="6">
                  Jesli jestes freelancerem, specjalista SEO, grafikiem lub programista i chcesz wspolpracowac przy projektach SEO Grow, napisz do nas. Nie obiecuje stalych zlecen, ale jesli sie zrozumiemy, mamy kilka-kilkanascie projektow miesiecznie.
                </Text>
                <HStack gap="3" flexWrap="wrap">
                  <Box
                    as="a"
                    href="mailto:kontakt@seogrow.pl"
                    bg="accent.500"
                    color="fg.inverse"
                    px="6"
                    h="11"
                    rounded="full"
                    fontSize="sm"
                    fontWeight="600"
                    display="inline-flex"
                    alignItems="center"
                    textDecoration="none"
                    _hover={{ bg: "accent.600" }}
                    transition="background 0.15s"
                  >
                    kontakt@seogrow.pl
                  </Box>
                  <Box
                    as="a"
                    href="/kontakt"
                    bg="bg.canvas"
                    color="fg.default"
                    border="1px solid"
                    borderColor="border.default"
                    px="6"
                    h="11"
                    rounded="full"
                    fontSize="sm"
                    fontWeight="600"
                    display="inline-flex"
                    alignItems="center"
                    textDecoration="none"
                    _hover={{ borderColor: "accent.500" }}
                    transition="border-color 0.15s"
                  >
                    Formularz kontaktowy
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

export default KarieraPage
