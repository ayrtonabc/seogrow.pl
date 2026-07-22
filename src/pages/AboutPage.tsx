// src/pages/AboutPage.tsx
// Página "O nas" — la pieza más importante de E-E-A-T (Experience, Expertise,
// Authority, Trust) y por tanto de GEO (Generative Engine Optimization).
// AI Overviews extraen la bio del founder para responder "¿quién hace X en Polonia?".
// Estructura: hero con credenciales → mission → founder bio → certs/awards → press CTA.

import { Box, Container, Flex, Heading, Text, VStack, HStack, SimpleGrid, Avatar } from "@chakra-ui/react"
import { SEO, SITE_URL } from "../components/SEO"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Link } from "react-router-dom"

const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

// Schema rico en E-E-A-T para el founder y la organización
const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/o-nas#webpage`,
    url: `${SITE_URL}/o-nas`,
    name: "O nas — SEO Grow",
    description: "Kim jesteśmy, dlaczego robimy SEO Grow i jak pracujemy. Poznaj foundera, misję i standardy obsługi klienta.",
    inLanguage: "pl-PL",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.webp`,
      width: 1200,
      height: 630,
    },
    lastReviewed: "2026-07-22",
    reviewedBy: { "@id": `${SITE_URL}/#founder` },
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: [
        "/html/head/title",
        "/html/head/meta[@name='description']/@content",
        "//section[@id='misja']//h2",
        "//section[@id='founder']//h2",
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "O nas", item: `${SITE_URL}/o-nas` },
    ],
  },
]

const credentials = [
  { label: "5+ lat w SEO i marketingu cyfrowym" },
  { label: "Google Search Console + Analytics certified" },
  { label: "Schema.org / JSON-LD expert" },
  { label: "Core Web Vitals optimization" },
  { label: "Poliglota: PL · EN · ES · PT" },
  { label: "Członek społeczności Indie Hackers PL" },
]

const milestones = [
  { year: "2024", title: "Powstanie Grow Solutions (JDG)", desc: "Rejestracja firmy w Ostródzie, pierwszy klient w 2 tygodnie od startu." },
  { year: "2024", title: "Pierwsze 10 stron dla MŚP", desc: "Od aptek po warsztaty samochodowe. Wszystkie z CMS-em własnej produkcji." },
  { year: "2025", title: "Wdrożenie autorskiego CMS-a", desc: "System łączący zarządzanie treścią z automatycznym SEO — bez wtyczek, bez aktualizacji." },
  { year: "2026", title: "97 miast w 13 województwach", desc: "Skalowaliśmy usługę bez biura i bez agencji. 100% zdalnie." },
]

export const AboutPage = () => {
  return (
    <Box bg="white" minH="100vh">
      <SEO
        title="O nas — kim jesteśmy i dlaczego robimy SEO Grow | SEO Grow"
        description="SEO Grow to jednoosobowa firma technologiczna z Ostródy. Budujemy strony internetowe z własnym CMS-em dla małych polskich firm. 5+ lat doświadczenia, 97 miast, ta sama cena wszędzie."
        path="/o-nas"
        image="/og-image.webp"
        keywords="o nas seo grow, founder seo grow, grow solutions, agencja seo ostróda, cms dla firm, twórca strony internetowej, kto robi seo grow"
        schema={aboutSchema}
      />
      <Header />

      <Box as="main">
        {/* HERO */}
        <Box bg="linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 100%)" pt={{ base: "28", md: "36" }} pb={{ base: "12", md: "16" }}>
          <Container maxW="4xl">
            <VStack gap="5" align="start" textAlign="left">
              <Text
                fontSize="11px"
                fontWeight="700"
                color="#4F46E5"
                textTransform="uppercase"
                letterSpacing="0.14em"
              >
                O nas
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: "34px", md: "48px", lg: "56px" }}
                fontWeight="800"
                letterSpacing="-0.035em"
                lineHeight="1.08"
                color="#0F172A"
              >
                Jednoosobowa firma technologiczna.
                <Box as="span" color="#4F46E5"> Bez biura, bez korporacji, bez ściemy.</Box>
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="#475569" lineHeight="1.65" maxW="3xl">
                Zbudowałem SEO Grow, bo widziałem, jak polskie małe firmy przepłacają za strony, które nie działają. Postanowiłem zrobić to inaczej: ten sam CMS, ta sama cena, ten sam zespół — niezależnie od miasta.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* FOUNDER */}
        <Box as="section" id="founder" bg="white" py={{ base: "14", md: "20" }}>
          <Container maxW="5xl">
            <Flex direction={{ base: "column", md: "row" }} gap={{ base: "10", md: "16" }} align="flex-start">
              <Box flexShrink={0} textAlign="center">
                <Avatar
                  name="Ayrton — Founder SEO Grow"
                  size="2xl"
                  bg="#4F46E5"
                  color="white"
                  fontWeight="800"
                  fontSize="3xl"
                />
                <Text fontSize="xs" color="#94A3B8" mt="3" textTransform="uppercase" letterSpacing="0.1em">
                  Founder & CEO
                </Text>
                <Text fontSize="sm" color="#475569" mt="1" fontWeight="600">
                  Ayrton — Grow Solutions
                </Text>
              </Box>

              <VStack align="flex-start" gap="5" flex="1">
                <Heading as="h2" fontSize={{ base: "24px", md: "32px" }} color="#0F172A" fontWeight="800" letterSpacing="-0.025em" lineHeight="1.2">
                  Cześć, jestem Ayrton. Buduję strony, które pracują dla Twojej firmy.
                </Heading>
                <Text color="#475569" fontSize="md" lineHeight="1.7">
                  Jestem założycielem Grow Solutions — jednoosobowej firmy zarejestrowanej w Ostródzie. Zajmuję się SEO i tworzeniem stron od 2019 roku. Wcześniej pracowałem przy projektach digitalowych w Hiszpanii, Portugalii i Polsce.
                </Text>
                <Text color="#475569" fontSize="md" lineHeight="1.7">
                  Mówię po polsku, hiszpańsku, portugalsku i angielsku. Dla małych firm z Ostródy, Iławy, Ełku, Kwidzynia czy Dębicy — różnica jest tylko jedna: miasto. CMS jest ten sam, cena jest ta sama, jakość jest ta sama.
                </Text>
                <Text color="#475569" fontSize="md" lineHeight="1.7">
                  Nie jestem agencją. Nie mam zespołu 20 osób. Mam własny system, własne procesy i jedną zasadę:{" "}
                  <Box as="span" fontWeight="700" color="#0F172A">
                    klient ma dostać stronę, która zarabia, nie stronę, która ładnie wygląda na prezentacji.
                  </Box>
                </Text>

                <SimpleGrid columns={{ base: 1, sm: 2 }} gap="2.5" pt="3" w="full">
                  {credentials.map((c, i) => (
                    <HStack key={i} align="start" gap="2.5" p="3" bg="#F8FAFC" rounded="md" border="1px solid" borderColor="#E2E8F0">
                      <Box color="#4F46E5" mt="1px" flexShrink={0} display="flex">
                        <CheckIcon size={12} />
                      </Box>
                      <Text fontSize="xs" color="#334155" lineHeight="1.45" fontWeight="500">
                        {c.label}
                      </Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </VStack>
            </Flex>
          </Container>
        </Box>

        {/* MISSION */}
        <Box as="section" id="misja" bg="#0F1124" py={{ base: "16", md: "20" }} position="relative" overflow="hidden">
          <Box
            position="absolute"
            top="-150px"
            left="50%"
            transform="translateX(-50%)"
            w="700px"
            h="400px"
            bg="radial-gradient(ellipse, rgba(79, 70, 229, 0.25) 0%, transparent 70%)"
            filter="blur(60px)"
            pointerEvents="none"
          />
          <Container maxW="4xl" position="relative" zIndex="1">
            <VStack gap="6" textAlign="center">
              <Text
                fontSize="11px"
                fontWeight="700"
                color="#A5B4FC"
                textTransform="uppercase"
                letterSpacing="0.14em"
              >
                Nasza misja
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "26px", md: "40px" }}
                fontWeight="800"
                color="white"
                letterSpacing="-0.03em"
                lineHeight="1.18"
              >
                Profesjonalna strona powinna kosztować tyle, co dwa miesiące abonamentu za agencję.
                <Box as="span" color="#A5B4FC"> Bez utraty jakości.</Box>
              </Heading>
              <Text fontSize="md" color="rgba(255,255,255,0.7)" lineHeight="1.7" maxW="2xl">
                Wierzymy, że 90% małych polskich firm nie potrzebuje strony za 15 000 zł. Potrzebuje strony, która działa, jest widoczna w Google i rośnie razem z firmą. Dokładnie to dostarczamy — w 5 dni, od 1 500 zł.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* TIMELINE */}
        <Box bg="white" py={{ base: "16", md: "20" }}>
          <Container maxW="4xl">
            <VStack gap="10" align="stretch">
              <VStack gap="3" align="start">
                <Text fontSize="11px" fontWeight="700" color="#4F46E5" textTransform="uppercase" letterSpacing="0.14em">
                  Jak to się zaczęło
                </Text>
                <Heading as="h2" fontSize={{ base: "26px", md: "34px" }} color="#0F172A" fontWeight="800" letterSpacing="-0.025em">
                  4 kamienie milowe
                </Heading>
              </VStack>

              <VStack gap="0" align="stretch" position="relative">
                <Box
                  position="absolute"
                  left="20px"
                  top="0"
                  bottom="0"
                  w="2px"
                  bg="linear-gradient(180deg, #C7D2FE 0%, #4F46E5 100%)"
                />
                {milestones.map((m, i) => (
                  <Flex key={i} align="flex-start" gap="5" py="5">
                    <Box
                      w="10"
                      h="10"
                      rounded="full"
                      bg="white"
                      border="2px solid #4F46E5"
                      color="#4F46E5"
                      fontWeight="800"
                      fontSize="sm"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      position="relative"
                      zIndex="1"
                      boxShadow="0 0 0 4px white"
                    >
                      {i + 1}
                    </Box>
                    <VStack align="flex-start" gap="1" pt="1.5">
                      <Text fontSize="xs" fontWeight="700" color="#4F46E5" textTransform="uppercase" letterSpacing="0.08em">
                        {m.year}
                      </Text>
                      <Text fontSize="md" fontWeight="700" color="#0F172A" lineHeight="1.3">
                        {m.title}
                      </Text>
                      <Text fontSize="sm" color="#475569" lineHeight="1.55">
                        {m.desc}
                      </Text>
                    </VStack>
                  </Flex>
                ))}
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* PRESS / CONTACT CTA */}
        <Box bg="#F8FAFC" py={{ base: "14", md: "18" }} borderTop="1px solid" borderColor="#E2E8F0">
          <Container maxW="4xl">
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="space-between"
              gap="6"
              bg="white"
              p={{ base: "7", md: "9" }}
              rounded="2xl"
              border="1px solid #E2E8F0"
              boxShadow="0 8px 20px -10px rgba(15,23,42,0.08)"
            >
              <VStack align="flex-start" gap="2" maxW="md">
                <Text fontSize="md" fontWeight="800" color="#0F172A">
                  Jesteś dziennikarzem albo prowadzisz podcast?
                </Text>
                <Text fontSize="sm" color="#475569" lineHeight="1.55">
                  Mamy press kit, zdjęcia, dane firmy i foundera dostępne dla mediów. Odpowiadamy w 24h.
                </Text>
              </VStack>
              <HStack gap="2" flexShrink={0}>
                <Box
                  as={Link}
                  to="/press"
                  display="inline-flex"
                  alignItems="center"
                  gap="2"
                  bg="#0F172A"
                  color="white"
                  px="5"
                  py="3"
                  rounded="lg"
                  fontWeight="700"
                  fontSize="13px"
                  textDecoration="none"
                  _hover={{ bg: "#1E293B" }}
                >
                  Press kit
                  <Box display="flex"><ArrowRightIcon size={14} /></Box>
                </Box>
                <Box
                  as="a"
                  href="mailto:kontakt@seogrow.pl?subject=Wywiad%20%E2%80%93%20SEO%20Grow"
                  display="inline-flex"
                  alignItems="center"
                  gap="2"
                  bg="white"
                  color="#0F172A"
                  px="5"
                  py="3"
                  rounded="lg"
                  fontWeight="600"
                  fontSize="13px"
                  border="1px solid #E2E8F0"
                  textDecoration="none"
                  _hover={{ bg: "#F8FAFC" }}
                >
                  Napisz maila
                </Box>
              </HStack>
            </Flex>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}
