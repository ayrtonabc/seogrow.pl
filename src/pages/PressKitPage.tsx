// src/pages/PressKitPage.tsx
// Press kit público. Lo que un periodista necesita para escribir sobre SEO Grow
// en menos de 5 minutos. AI Overviews también puede extraer estos datos.

import { Box, Container, Flex, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react"
import { SEO, SITE_URL } from "../components/SEO"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const downloadIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
)

const pressSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/press#webpage`,
    url: `${SITE_URL}/press`,
    name: "Press kit — SEO Grow",
    description: "Materiały prasowe SEO Grow: bio foundera, logotypy, dane firmy, statystyki, kontakt dla mediów.",
    inLanguage: "pl-PL",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Press kit", item: `${SITE_URL}/press` },
    ],
  },
]

const facts = [
  { label: "Nazwa firmy", value: "Grow Solutions (JDG)" },
  { label: "Marka komercyjna", value: "SEO Grow" },
  { label: "NIP", value: "7412176947" },
  { label: "REGON", value: "545084609" },
  { label: "Siedziba", value: "Ostróda, Polska" },
  { label: "Założona", value: "2026" },
  { label: "Founder", value: "Martyna Cieśniewska (poliglota: PL · EN · ES)" },
  { label: "Rozmiar firmy", value: "Jednoosobowa działalność gospodarcza" },
]

const pressQuotes = [
  '"Profesjonalna strona dla małej firmy nie musi kosztować 15 000 zł" — filozofia SEO Grow',
  '"97 miast, 13 województw, ta sama cena" — model skalowania usługi bez agencji',
  '"CMS, którym zarządzasz z telefonu" — produkt flagowy',
]

export const PressKitPage = () => {
  return (
    <Box bg="white" minH="100vh">
      <SEO
        title="Press kit — materiały dla mediów | SEO Grow"
        description="Press kit SEO Grow: bio foundera, logotypy w wysokiej rozdzielczości, statystyki firmy, fakty, cytaty i kontakt dla mediów. Materiały gotowe do publikacji."
        path="/press"
        image="/og-image.webp"
        keywords="press kit seo grow, bio foundera, logo seogrow, dane firmy, kontakt dla mediów, grow solutions"
        schema={pressSchema}
      />
      <Header />

      <Box as="main" pt={{ base: "28", md: "32" }} pb={{ base: "14", md: "20" }}>
        <Container maxW="5xl">
          <VStack gap="12" align="stretch">
            {/* HERO */}
            <VStack gap="4" align="flex-start" maxW="3xl">
              <Text
                fontSize="11px"
                fontWeight="700"
                color="accent.600"
                textTransform="uppercase"
                letterSpacing="0.14em"
              >
                Press kit
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: "34px", md: "48px" }}
                fontWeight="800"
                color="fg.default"
                letterSpacing="-0.035em"
                lineHeight="1.08"
              >
                Wszystko, czego potrzebujesz, żeby napisać o SEO Grow.
              </Heading>
              <Text fontSize="md" color="fg.muted" lineHeight="1.6">
                Bio foundera, logotypy, statystyki, cytaty i kontakt — gotowe do publikacji. Jeśli czegoś brakuje, napisz do nas.
              </Text>
            </VStack>

            {/* CONTACT BANNER */}
            <Box bg="linear-gradient(135deg, fg.default 0%, slate.800 100%)" rounded="2xl" p={{ base: "6", md: "8" }} color="white" position="relative" overflow="hidden">
              <Box position="absolute" top="-100px" right="-100px" w="300px" h="300px" bg="radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)" borderRadius="full" filter="blur(60px)" />
              <Flex direction={{ base: "column", md: "row" }} align={{ base: "flex-start", md: "center" }} justify="space-between" gap="5" position="relative" zIndex="1">
                <VStack align="flex-start" gap="2" maxW="md">
                  <Text fontSize="xs" fontWeight="700" color="accent.300" textTransform="uppercase" letterSpacing="0.12em">
                    Kontakt dla mediów
                  </Text>
                  <Text fontSize="lg" fontWeight="700" lineHeight="1.3">
                    Wywiad, komentarz ekspercki, test CMS-a? Napisz — odpowiadamy w 24h.
                  </Text>
                  <Text fontSize="sm" color="rgba(255,255,255,0.75)" lineHeight="1.5">
                    kontakt@seogrow.pl · +48 517 105 423
                  </Text>
                </VStack>
                <Box
                  as="a"
                  href="mailto:kontakt@seogrow.pl?subject=Zapytanie%20prasowe%20%E2%80%93%20SEO%20Grow"
                  display="inline-flex"
                  alignItems="center"
                  gap="2"
                  bg="white"
                  color="fg.default"
                  px="5"
                  py="3"
                  rounded="lg"
                  fontWeight="700"
                  fontSize="13px"
                  textDecoration="none"
                  _hover={{ bg: "border.subtle" }}
                  flexShrink={0}
                >
                  Napisz do nas
                </Box>
              </Flex>
            </Box>

            {/* BIO FOUNDER */}
            <Box>
              <Text fontSize="11px" fontWeight="700" color="accent.600" textTransform="uppercase" letterSpacing="0.14em" mb="3">
                Bio foundera — krótka wersja
              </Text>
              <Text fontSize="md" color="slate.700" lineHeight="1.7" mb="3" p="5" bg="bg.subtle" rounded="xl" border="1px solid" borderColor="border.default">
                Martyna Cieśniewska jest założycielką Grow Solutions — jednoosobowej firmy technologicznej zarejestrowanej w Ostródzie (Polska). Od 2019 roku zajmuje się SEO, tworzeniem stron i automatyzacją marketingu dla małych firm. Wcześniej pracowała przy projektach digitalowych w Hiszpanii i Polsce. Mówi w trzech językach (polski, hiszpański, angielski) i prowadzi SEO Grow w modelu 100% zdalnym, obsługując firmy w 97 miastach Polski.
              </Text>
              <Text fontSize="11px" fontWeight="700" color="accent.600" textTransform="uppercase" letterSpacing="0.14em" mb="3" mt="6">
                Bio foundera — pełna wersja
              </Text>
              <Text fontSize="sm" color="slate.700" lineHeight="1.7" p="5" bg="bg.subtle" rounded="xl" border="1px solid" borderColor="border.default">
                Martyna Cieśniewska to founder i CEO SEO Grow — marki komercyjnej firmy Grow Solutions (polska jednoosobowa działalność gospodarcza, NIP 7412176947, zarejestrowana w 2026 roku w Ostródzie, województwo warmińsko-mazurskie). Zajmuje się profesjonalnym tworzeniem stron internetowych i pozycjonowaniem w Google dla małych polskich firm. Jej specjalizacja to własny CMS łączący zarządzanie treścią z automatycznym SEO technicznym (schema.org JSON-LD, Core Web Vitals, LocalBusiness markup). Mówi po polsku, hiszpańsku i angielsku. Prowadzi firmę w 100% zdalnie, bez biura i bez pracowników. Misja SEO Grow: udowodnić, że profesjonalna strona dla MŚP nie musi kosztować fortuny.
              </Text>
            </Box>

            {/* FAKTS */}
            <Box>
              <Text fontSize="11px" fontWeight="700" color="accent.600" textTransform="uppercase" letterSpacing="0.14em" mb="4">
                Fakty w pigułce
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap="3">
                {facts.map((f) => (
                  <Flex key={f.label} p="4" bg="white" border="1px solid border.default" rounded="md" justify="space-between" align="center" gap="3">
                    <Text fontSize="xs" color="fg.subtle" fontWeight="600" textTransform="uppercase" letterSpacing="0.04em">
                      {f.label}
                    </Text>
                    <Text fontSize="sm" color="fg.default" fontWeight="700" textAlign="right">
                      {f.value}
                    </Text>
                  </Flex>
                ))}
              </SimpleGrid>
            </Box>

            {/* CYTATY */}
            <Box>
              <Text fontSize="11px" fontWeight="700" color="accent.600" textTransform="uppercase" letterSpacing="0.14em" mb="4">
                Cytaty do publikacji (z atrybucją)
              </Text>
              <VStack gap="3" align="stretch">
                {pressQuotes.map((q, i) => (
                  <Box key={i} p="4" bg="accent.50" border="1px solid accent.100" rounded="md" position="relative">
                    <Text
                      position="absolute"
                      top="2"
                      right="3"
                      fontSize="3xl"
                      fontWeight="800"
                      color="accent.200"
                      lineHeight="1"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </Text>
                    <Text fontSize="sm" color="slate.700" lineHeight="1.6" fontStyle="italic">
                      {q}
                    </Text>
                    <Text fontSize="xs" color="fg.faint" mt="2">
                      — Martyna Cieśniewska, founder SEO Grow
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* LOGOTYPES */}
            <Box>
              <Text fontSize="11px" fontWeight="700" color="accent.600" textTransform="uppercase" letterSpacing="0.14em" mb="3">
                Logotypy
              </Text>
              <Text fontSize="sm" color="fg.muted" lineHeight="1.6" mb="4">
                Dostępne w wersji kolorowej (PNG) i białej na ciemnym tle. Użyj wersji PNG z przezroczystym tłem do publikacji cyfrowych.
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 3 }} gap="4">
                <Box p="6" bg="white" border="1px solid border.default" rounded="xl" textAlign="center">
                  <img src="/logo-320.webp" alt="SEO Grow logo — wersja kolorowa" width={180} height={48} style={{ margin: "0 auto", display: "block" }} />
                  <Text fontSize="xs" color="fg.faint" mt="3">PNG · przezroczyste tło</Text>
                  <Box as="a" href="/logo-320.webp" download display="inline-flex" alignItems="center" gap="1.5" mt="3" fontSize="xs" fontWeight="700" color="accent.600" textDecoration="none">
                    {downloadIcon()} Pobierz
                  </Box>
                </Box>
                <Box p="6" bg="fg.default" border="1px solid slate.800" rounded="xl" textAlign="center">
                  <img src="/logo-320.webp" alt="SEO Grow logo — wersja biała" width={180} height={48} style={{ margin: "0 auto", display: "block", filter: "brightness(0) invert(1)" }} />
                  <Text fontSize="xs" color="rgba(255,255,255,0.6)" mt={3}>Na ciemnym tle</Text>
                  <Box as="a" href="/logo-320.webp" download display="inline-flex" alignItems="center" gap="1.5" mt="3" fontSize="xs" fontWeight="700" color="accent.300" textDecoration="none">
                    {downloadIcon()} Pobierz
                  </Box>
                </Box>
                <Box p="6" bg="accent.600" border="1px solid accent.700" rounded="xl" textAlign="center">
                  <Text fontSize="22px" fontWeight="800" color="white" lineHeight="1" mb="2">SEO Grow</Text>
                  <Text fontSize="9px" color="rgba(255,255,255,0.7)" letterSpacing="0.14em" textTransform="uppercase">press kit</Text>
                  <Text fontSize="xs" color="rgba(255,255,255,0.7)" mt={3}>Wersja na tle firmowym</Text>
                </Box>
              </SimpleGrid>
            </Box>

            <Box h="1px" w="full" bg="border.default" />

            {/* LAST NOTE */}
            <Box bg="bg.subtle" p="6" rounded="xl" border="1px solid border.default">
              <Text fontSize="sm" color="fg.muted" lineHeight="1.6">
                <Box as="span" fontWeight="700" color="fg.default">Zasady współpracy z mediami:</Box> nie wymagamy akceptacji tekstu przed publikacją. Używaj naszych materiałów bezpłatnie z atrybucją „SEO Grow / Grow Solutions". Jeśli potrzebujesz eksperckiego komentarza o rynku stron w Polsce, automatyzacji marketingu w MŚP lub cenach w branży — jestem dostępny mailowo i telefonicznie.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}
