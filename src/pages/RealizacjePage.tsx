// src/pages/RealizacjePage.tsx
// Galeria de proyectos reales construidos con SEO Grow.
// Lista los 8 sitios web del carrusel del cliente.

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Image, Badge } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SEO } from "../components/SEO"

type Project = {
  name: string
  domain: string
  url: string
  industry: string
  city: string
  description: string
  logo: string | null
  year: number
}

const PROJECTS: Project[] = [
  {
    name: "Inteligentne Folie",
    domain: "inteligentnefolie.pl",
    url: "https://inteligentnefolie.pl",
    industry: "Montaż folii PPF i przyciemnianie szyb",
    city: "Poznań",
    description: "Strona firmowa z wizytówką, SEO lokalne na Poznań i okolice, top 3 Google na 8 fraz kluczowych.",
    logo: "/clientes/inteligentnefolie.webp",
    year: 2026,
  },
  {
    name: "Tio Bigotes",
    domain: "tiobigotes.pl",
    url: "https://tiobigotes.pl",
    industry: "Restauracja argentyńska",
    city: "Warszawa",
    description: "Strona z menu, rezerwacjami i integracją Google Maps. Wzrost zamówień online 3x po wdrożeniu.",
    logo: "/clientes/tiobigotes.webp",
    year: 2026,
  },
  {
    name: "Med Vitox",
    domain: "med-vitox.pl",
    url: "https://med-vitox.pl",
    industry: "Medycyna estetyczna i kosmetologia",
    city: "Warszawa",
    description: "Strona z wizytówką, SEO na frazy medyczne, formularz rezerwacji konsultacji.",
    logo: "/clientes/med-vitox.webp",
    year: 2026,
  },
  {
    name: "Atrakcje Party",
    domain: "atrakcje-party.pl",
    url: "https://atrakcje-party.pl",
    industry: "Organizacja imprez i eventów",
    city: "Polska",
    description: "Strona z wizytówką i formularzem wyceny, SEO na „atrakcje na imprezę” i podobne.",
    logo: null,
    year: 2026,
  },
  {
    name: "Dafor",
    domain: "dafor.pl",
    url: "https://dafor.pl",
    industry: "Usługi dla firm",
    city: "Polska",
    description: "Strona korporacyjna z prezentacją usług, blogiem i SEO technicznym.",
    logo: null,
    year: 2026,
  },
  {
    name: "Asmed",
    domain: "asmed-ostroda.pl",
    url: "https://asmed-ostroda.pl/",
    industry: "Sklep z aparatami słuchowymi",
    city: "Ostróda",
    description: "Strona z wizytówką i sklepem, SEO lokalne na Ostródę i okolice 100 km.",
    logo: "/clientes/asmed.webp",
    year: 2026,
  },
  {
    name: "Wiktorski Ubezpieczenia",
    domain: "wiktorskiubezpieczenia.pl",
    url: "https://wiktorskiubezpieczenia.pl/",
    industry: "Ubezpieczenia",
    city: "Ostróda",
    description: "Strona agencyjna z kalkulatorem, formularzem wyceny i SEO na „ubezpieczenia Ostróda”.",
    logo: null,
    year: 2026,
  },
  {
    name: "Anko Olsztyn",
    domain: "ankoolsztyn.pl",
    url: "https://ankoolsztyn.pl",
    industry: "Usługi lokalne",
    city: "Olsztyn",
    description: "Strona z wizytówką dla lokalnej firmy z Warmii i Mazur, SEO na „usługi Olsztyn”.",
    logo: "/clientes/anko.eu.webp",
    year: 2026,
  },
]

const ProjectCard = ({ p }: { p: Project }) => (
  <Box
    bg="bg.canvas"
    border="1px solid"
    borderColor="border.default"
    rounded="2xl"
    overflow="hidden"
    transition="all 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
    _hover={{
      borderColor: "accent.500",
      transform: "translateY(-2px)",
      boxShadow: "lg",
    }}
    display="flex"
    flexDirection="column"
  >
    {/* Header with logo or placeholder */}
    <Box
      position="relative"
      w="full"
      h="160px"
      bg="bg.subtle"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="6"
      overflow="hidden"
    >
      {p.logo ? (
        <Image
          src={p.logo}
          alt={`Logo ${p.name}`}
          maxW="180px"
          maxH="80px"
          w="auto"
          h="auto"
          objectFit="contain"
          loading="lazy"
        />
      ) : (
        <VStack gap="1" align="center">
          <Box w="14" h="14" rounded="full" bg="bg.cream" border="1px solid" borderColor="border.subtle" display="flex" alignItems="center" justifyContent="center" color="accent.600" fontSize="xl" fontWeight="700">
            {p.name.charAt(0)}
          </Box>
          <Text fontSize="xs" color="fg.muted" textAlign="center" maxW="180px" fontWeight="600">
            {p.name}
          </Text>
        </VStack>
      )}

      {/* City badge */}
      <Box position="absolute" top="3" left="3" bg="rgba(10, 10, 10, 0.7)" backdropFilter="blur(8px)" rounded="full" px="3" py="1.5">
        <Text fontSize="xs" fontWeight="700" color="white" letterSpacing="0.04em" lineHeight="1">
          {p.city}
        </Text>
      </Box>

      {/* Year badge */}
      <Box position="absolute" top="3" right="3" bg="rgba(255, 255, 255, 0.9)" rounded="full" px="2.5" py="1">
        <Text fontSize="xs" fontWeight="700" color="fg.default" lineHeight="1">
          {p.year}
        </Text>
      </Box>
    </Box>

    {/* Body */}
    <VStack align="stretch" gap="4" p="6" flex="1">
      <Box>
        <Text
          fontSize="10px"
          fontWeight="800"
          color="accent.600"
          textTransform="uppercase"
          letterSpacing="0.14em"
          mb="1.5"
        >
          {p.industry}
        </Text>
        <Heading
          as="h3"
          fontSize="xl"
          fontWeight="700"
          color="fg.default"
          letterSpacing="-0.02em"
          lineHeight="1.2"
        >
          {p.name}
        </Heading>
        <Text fontSize="xs" color="fg.muted" mt="1.5" fontWeight="600">
          {p.domain}
        </Text>
      </Box>

      <Text fontSize="sm" color="fg.muted" lineHeight="1.6" flex="1">
        {p.description}
      </Text>

      <Box
        as="a"
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        mt="2"
        display="inline-flex"
        alignItems="center"
        gap="2"
        color="accent.700"
        fontSize="sm"
        fontWeight="700"
        textDecoration="none"
        _hover={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
      >
        Zobacz strone
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </Box>
    </VStack>
  </Box>
)

export const RealizacjePage = () => {
  return (
    <Box bg="bg.canvas" minH="100vh">
      <SEO
        title="Realizacje — strony zrobione przez SEO Grow"
        description="Osiem prawdziwych stron zbudowanych przez SEO Grow dla firm z Polski: wizytówki, sklepy, restauracje, ubezpieczenia. Sprawdź projekty."
        path="/realizacje"
        keywords="realizacje SEO Grow, portfolio stron, strony dla firm, przykłady stron, klient SEO Grow"
      />
      <Header />

      <Box as="main" id="main-content" tabIndex={-1} outline="none">
        {/* Hero */}
        <Box bg="bg.cream" borderBottom="1px solid" borderColor="border.default" pt={{ base: "20", md: "28" }} pb={{ base: "10", md: "14" }}>
          <Container maxW="5xl">
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
                Realizacje
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "32px", md: "44px", lg: "52px" }}
                fontWeight="600"
                color="fg.default"
                letterSpacing="-0.02em"
                lineHeight="1.1"
              >
                Osiem stron,{" "}
                <Box as="span" color="accent.700" fontWeight="700">
                  ktore dzialaja.
                </Box>
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" lineHeight="1.65" maxW="3xl">
                Klienci SEO Grow z różnych branż: od sklepu z aparatami słuchowymi w Ostródzie, przez restaurację argentyńską w Warszawie, po firmę PPF w Poznaniu. Każda strona gotowa w 5 dni, z SEO technicznym włącznie.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Grid */}
        <Box py={{ base: "12", md: "16" }}>
          <Container maxW="6xl">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: "5", md: "6" }} w="full">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.domain} p={p} />
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* CTA */}
        <Box bg="bg.cream" borderTop="1px solid" borderColor="border.default" py={{ base: "12", md: "16" }}>
          <Container maxW="3xl">
            <VStack gap="4" textAlign="center">
              <Heading
                as="h2"
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="600"
                color="fg.default"
                letterSpacing="-0.015em"
                lineHeight="1.2"
              >
                Twoja strona moze byc nastepna
              </Heading>
              <Text color="fg.muted" fontSize="md" lineHeight="1.65" maxW="2xl">
                Gotowa w 5 dni, z SEO włącznie, od 1 500 zł netto. Zadzwoń, żeby zacząć.
              </Text>
              <HStack gap="3" flexWrap="wrap" justify="center" pt="2">
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
                  textDecoration="none"
                  _hover={{ bg: "accent.600" }}
                  transition="background 0.15s"
                >
                  517 105 423
                </Box>
                <Box
                  as="a"
                  href="mailto:kontakt@seogrow.pl"
                  bg="bg.canvas"
                  color="fg.default"
                  border="1px solid"
                  borderColor="border.default"
                  px="6"
                  h="12"
                  rounded="full"
                  fontSize="sm"
                  fontWeight="600"
                  display="inline-flex"
                  alignItems="center"
                  textDecoration="none"
                  _hover={{ borderColor: "accent.500" }}
                  transition="border-color 0.15s"
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

export default RealizacjePage
