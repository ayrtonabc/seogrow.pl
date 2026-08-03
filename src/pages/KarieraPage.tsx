// src/pages/KarieraPage.tsx
// Pagina "Kariera" — SEO Grow jest nowy, szybko rosnie.
// Szuka jednego dobrego handlowca zdalnego. Wspolpraca na prowizji 15-20%.

import { Box, Container, Heading, Text, VStack, HStack, Badge, SimpleGrid } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SEO } from "../components/SEO"

const PERKS = [
  {
    title: "Praca 100% zdalna",
    body: "Pracujesz skad chcesz. Wystarczy telefon i dobry internet.",
    accent: "accent.500",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
  {
    title: "Zarzadzasz swoim czasem",
    body: "Bez sztywnych godzin, bez obowiazkowych spotkan, bez codziennych quot. Sam/a planujesz swoj dzien.",
    accent: "accent.600",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Prowizja 15-20% od sprzedazy",
    body: "Konkretne stawki, widoczne ponizej. Sprzedajesz plan — dostajesz prowizje. Bez sufitu, bez progów.",
    accent: "accent.700",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Produkt, ktory sie broni sam",
    body: "Nie sprzedajesz obietnic — sprzedajesz konkret. Strona w 5 dni, SEO w panelu, brak ukrytych kosztow. Klient widzi wartosc od pierwszej rozmowy.",
    accent: "accent.800",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-3V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
  },
  {
    title: "Rosniemy szybko",
    body: "Jestesmy nowi, ale juz dzialamy. Zeby utrzymac jakosc, krotkie terminy i indywidualne podejscie — planujemy w krotkim czasie zaproponowac wiecej pozycji do pracy zdalnej.",
    accent: "accent.500",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Bez presji sprzedazowej",
    body: "Nie ma skryptow, nie ma KPI, nie ma szefow nad glowa. Twoja prowizja zalezy tylko od tego, czy klient placi.",
    accent: "accent.600",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

const PerksCard = ({ p }: { p: typeof PERKS[number] }) => (
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

const EXAMPLE_TABLE = [
  { plan: "Start", price: "1 500 zl", low: "225 zl", high: "300 zl" },
  { plan: "Standard", price: "2 200 zl", low: "330 zl", high: "440 zl" },
  { plan: "Premium", price: "4 500 zl", low: "675 zl", high: "900 zl" },
]

export const KarieraPage = () => {
  return (
    <Box bg="bg.canvas" minH="100vh">
      <SEO
        title="Kariera — SEO Grow, wspolpraca z prowizja 15-20%"
        description="SEO Grow jest nowy i szybko rosnie. Szukamy jednego dobrego handlowca zdalnego. Wspolpraca na prowizji 15-20% od sprzedazy, bez sztywnych godzin."
        path="/kariera"
        keywords="kariera, praca zdalna, handlowiec, prowizja, SEO Grow, wspolpraca, sprzedaz B2B"
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
                Szukamy handlowca
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "32px", md: "44px", lg: "52px" }}
                fontWeight="600"
                color="fg.default"
                letterSpacing="-0.02em"
                lineHeight="1.1"
              >
                Jestesmy nowi. Rosniemy szybko.{" "}
                <Box as="span" color="accent.700" fontWeight="700">
                  Szukamy jednej osoby.
                </Box>
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" lineHeight="1.65" maxW="3xl">
                SEO Grow dziala od niedawna, ale juz obsluguje male firmy w calej Polsce. Zeby utrzymac jakosc, krotkie terminy wdrozen i indywidualne podejscie do kazdego klienta — w najblizszym czasie planujemy zaproponowac wiecej pozycji do pracy zdalnej.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color="fg.default" lineHeight="1.65" maxW="3xl" fontWeight="500">
                Na ten moment nie ma u nas etatu ani wolnego stanowiska. Szukamy{" "}
                <Box as="span" color="accent.700" fontWeight="700">dobrego handlowca zdalnego</Box>{" "}
                do wspolpracy na prowizji. Zarzadzasz swoim czasem sam/a, bez sztywnych godzin, bez skryptow, bez codziennych quot. Prowizja od 15% do 20% od kazdego sprzedanego planu. Chcesz sprobowac? Zadzwon.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Perks */}
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
                  Co oferujemy
                </Heading>
                <Text color="fg.muted" fontSize="md" lineHeight="1.65">
                  Szesc powodow, zeby zainteresowac sie wspolpraca.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: "5", md: "6" }} w="full">
                {PERKS.map((p) => (
                  <PerksCard key={p.title} p={p} />
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* Comision table */}
        <Box bg="bg.cream" borderTop="1px solid" borderBottom="1px solid" borderColor="border.default" py={{ base: "16", md: "20" }}>
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
                  Ile mozna zarobic
                </Heading>
                <Text color="fg.muted" fontSize="md" lineHeight="1.65" maxW="2xl">
                  Konkretne liczby. Bez ukrytych progów. Sprzedajesz plan, dostajesz prowizje.
                </Text>
              </VStack>

              <Box bg="bg.canvas" border="1px solid" borderColor="border.default" rounded="2xl" overflow="hidden">
                {/* Header */}
                <Box display={{ base: "none", md: "grid" }} gridTemplateColumns="2fr 1.5fr 1.5fr 1.5fr" px="6" py="4" bg="bg.subtle" borderBottom="1px solid" borderColor="border.default">
                  <Text fontSize="xs" fontWeight="700" color="fg.muted" textTransform="uppercase" letterSpacing="0.08em">Plan</Text>
                  <Text fontSize="xs" fontWeight="700" color="fg.muted" textTransform="uppercase" letterSpacing="0.08em">Cena netto</Text>
                  <Text fontSize="xs" fontWeight="700" color="accent.700" textTransform="uppercase" letterSpacing="0.08em">Prowizja 15%</Text>
                  <Text fontSize="xs" fontWeight="700" color="accent.700" textTransform="uppercase" letterSpacing="0.08em">Prowizja 20%</Text>
                </Box>

                {EXAMPLE_TABLE.map((row, i) => (
                  <Box
                    key={row.plan}
                    display="grid"
                    gridTemplateColumns={{ base: "1fr 1fr", md: "2fr 1.5fr 1.5fr 1.5fr" }}
                    px="6"
                    py="5"
                    gap="3"
                    borderBottom={i < EXAMPLE_TABLE.length - 1 ? "1px solid" : "none"}
                    borderColor="border.default"
                    alignItems="center"
                  >
                    <Text fontSize="sm" fontWeight="700" color="fg.default">{row.plan}</Text>
                    <Text fontSize="sm" color="fg.muted" display={{ base: "none", md: "block" }}>{row.price}</Text>
                    <Box>
                      <Text fontSize="xs" color="fg.muted" display={{ base: "block", md: "none" }} mb="0.5">Prowizja 15%:</Text>
                      <Text fontSize="sm" fontWeight="700" color="accent.700">{row.low}</Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" color="fg.muted" display={{ base: "block", md: "none" }} mb="0.5">Prowizja 20%:</Text>
                      <Text fontSize="sm" fontWeight="700" color="accent.700">{row.high}</Text>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Text fontSize="sm" color="fg.muted" textAlign="center" maxW="2xl" mx="auto">
                Stawka 15% lub 20% ustalana indywidualnie przy pierwszej rozmowie. Bez progów, bez sufitu — im wiecej sprzedajesz, tym wiecej zarabiasz.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* CTA */}
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
                Chcesz sprobowac?{" "}
                <Box as="span" color="accent.500" fontWeight="700">
                  Zadzwon.
                </Box>
              </Heading>
              <Text color="fg.inverseMuted" fontSize="md" textAlign="center" position="relative" zIndex="1" maxW="2xl">
                Bez formularzy, bez czekania. Zadzwon na 517 105 423 i porozmawiajmy. Jesli masz doswiadczenie w sprzedazy B2B i lubisz kontakt z ludzmi — to moze byc poczatek dlugiej wspolpracy.
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

export default KarieraPage
