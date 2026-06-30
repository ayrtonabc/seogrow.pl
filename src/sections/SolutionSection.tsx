import { Box, Container, Heading, Text, VStack, Flex, Grid } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ArrowRightIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const CheckIcon = ({ size = 12 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const SearchIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const TrendUpIcon = ({ size = 12 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="m22 7-8.5 8.5-5-5L2 17" />
    <path d="M16 7h6v6" />
  </svg>
)

const BrainIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
  </svg>
)

const PenNibIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
)

const ZapIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const ChartIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-5" />
  </svg>
)

const PlusIcon = ({ size = 10 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" focusable="false">
    <path d="M12 5v14M5 12h14" />
  </svg>
)

type ToolItem = {
  label: string
  description: string
  icon: (size: number) => JSX.Element
  accentBg: string
  accentColor: string
}

const intelligentTools: ToolItem[] = [
  {
    label: "Analiza branży",
    description: "strategie, które przyciągają klientów",
    icon: (size) => <BrainIcon size={size} />,
    accentBg: "rgba(99, 102, 241, 0.2)",
    accentColor: "#A5B4FC",
  },
  {
    label: "Treści SEO",
    description: "artykuły po polsku pod Google",
    icon: (size) => <PenNibIcon size={size} />,
    accentBg: "rgba(16, 185, 129, 0.2)",
    accentColor: "#6EE7B7",
  },
  {
    label: "SEO techniczne",
    description: "schema, meta, szybkość",
    icon: (size) => <ZapIcon size={size} />,
    accentBg: "rgba(245, 158, 11, 0.2)",
    accentColor: "#FCD34D",
  },
  {
    label: "Analityka",
    description: "wiesz, co działa",
    icon: (size) => <ChartIcon size={size} />,
    accentBg: "rgba(236, 72, 153, 0.2)",
    accentColor: "#F9A8D4",
  },
]

export const SolutionSection = () => {
  return (
    <Box as="section" id="jak-to-dziala" py={{ base: "20", md: "28" }} bg="white">
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }} align="stretch">
          {/* Top row — H2 izquierda + descripción derecha */}
          <Flex
            justify="space-between"
            align={{ base: "flex-start", md: "flex-end" }}
            gap={{ base: "5", md: "10" }}
            direction={{ base: "column", md: "row" }}
          >
            <VStack gap="6" align="flex-start" maxW="2xl">
              <Text
                fontSize="12px"
                fontWeight="700"
                color="#4F46E5"
                letterSpacing="0.12em"
                textTransform="uppercase"
              >
                Jak to działa
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "36px", md: "52px" }}
                fontWeight="800"
                letterSpacing="-0.04em"
                color="#0F172A"
                lineHeight="1.05"
              >
                Wystartuj w 5 dni. Z pełnym wsparciem po polsku.
              </Heading>
            </VStack>
            <Text
              color="#475569"
              fontSize="18px"
              lineHeight="1.6"
              maxW="md"
            >
              Od pierwszej rozmowy do gotowej strony w 5 dni. Ty decydujesz o
              treściach, my dajemy Ci system, który działa.{" "}
              <Box as={Link} to="/blog" color="#4F46E5" fontWeight="600" textDecoration="underline" textUnderlineOffset="3px">
                Zobacz jak to działa
              </Box>
              {" "}albo{" "}
              <Box as={Link} to="/comparacion-con-wordpress" color="#4F46E5" fontWeight="600" textDecoration="underline" textUnderlineOffset="3px">
                porównaj z WordPressem
              </Box>.
            </Text>
          </Flex>

          {/* Grid asimétrico: 1 card grande oscura izq + 2 cards claras apiladas der */}
          <Grid
            templateColumns={{ base: "1fr", lg: "1.35fr 1fr" }}
            gap={{ base: "5", md: "6" }}
          >
            {/* Featured dark card */}
            <Box
              position="relative"
              bg="#191C32"
              rounded="2xl"
              p={{ base: "7", md: "9" }}
              minH={{ base: "420px", lg: "500px" }}
              overflow="hidden"
              display="flex"
              flexDirection="column"
            >
              {/* Glow decorations */}
              <Box
                position="absolute"
                top="-100px"
                right="-100px"
                w="380px"
                h="380px"
                rounded="full"
                bg="#4F46E5"
                opacity={0.35}
                filter="blur(100px)"
                pointerEvents="none"
              />
              <Box
                position="absolute"
                bottom="-150px"
                left="-50px"
                w="300px"
                h="300px"
                rounded="full"
                bg="#2563EB"
                opacity={0.25}
                filter="blur(90px)"
                pointerEvents="none"
              />

              {/* Floating tags REEMPLAZADOS por módulos grid limpio */}

              {/* Content top */}
              <VStack align="flex-start" gap="4" position="relative" zIndex={1} maxW="md">
                <Text
                  fontSize="11px"
                  fontWeight="700"
                  color="#A5B4FC"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                >
                  Start
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: "26px", md: "34px" }}
                  fontWeight="800"
                  color="white"
                  letterSpacing="-0.03em"
                  lineHeight="1.1"
                >
                  15-minutowa rozmowa. Zero zobowiązań.
                </Heading>
                <Text color="rgba(255,255,255,0.78)" fontSize="15px" lineHeight="1.6">
                  Poznajemy Twoją firmę, branżę i cele. Bez ankiet, bez formularzy,
                  bez czekania na wycenę. Od razu wiesz, ile to kosztuje i kiedy startujesz.
                </Text>
              </VStack>

              {/* Intelligent tools — identificación + solución */}
              <Box position="relative" zIndex={1} mt="auto" pb="16">
                <Flex justify="space-between" align="center" mb="3" gap="3">
                  <Text
                    fontSize="10px"
                    fontWeight="700"
                    color="rgba(255,255,255,0.55)"
                    textTransform="uppercase"
                    letterSpacing="0.16em"
                  >
                    Identyfikujemy + rozwiązujemy
                  </Text>
                  <Text fontSize="10px" fontWeight="600" color="rgba(255,255,255,0.5)">
                    Wszystko w cenie
                  </Text>
                </Flex>

                <Grid templateColumns="1fr 1fr" gap="2.5">
                  {intelligentTools.map((tool) => (
                    <Flex
                      key={tool.label}
                      align="center"
                      gap="2.5"
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid rgba(255, 255, 255, 0.08)"
                      backdropFilter="blur(8px)"
                      rounded="lg"
                      px="3"
                      py="2.5"
                      transition="all 0.2s"
                      _hover={{
                        bg: "rgba(255, 255, 255, 0.1)",
                        borderColor: "rgba(255, 255, 255, 0.18)",
                        transform: "translateY(-1px)",
                      }}
                      cursor="default"
                    >
                      <Flex
                        w="28px"
                        h="28px"
                        rounded="md"
                        bg={tool.accentBg}
                        color={tool.accentColor}
                        align="center"
                        justify="center"
                        flexShrink={0}
                        position="relative"
                      >
                        {tool.icon(14)}
                        <Box
                          position="absolute"
                          top="-3px"
                          right="-3px"
                          w="12px"
                          h="12px"
                          rounded="full"
                          bg="white"
                          color="#0F172A"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize="9px"
                          fontWeight="800"
                          boxShadow="0 2px 4px rgba(0,0,0,0.2)"
                        >
                          <PlusIcon size={7} />
                        </Box>
                      </Flex>
                      <Box flex="1" minW="0">
                        <Text fontSize="13px" fontWeight="700" color="white" lineHeight="1.2">
                          {tool.label}
                        </Text>
                        <Text fontSize="10px" color="rgba(255,255,255,0.55)" lineHeight="1.3" mt="0.5">
                          {tool.description}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Grid>
              </Box>

              {/* Arrow button */}
              <Box
                as={Link}
                to="/#kontakt"
                position="absolute"
                bottom={{ base: "6", md: "8" }}
                right={{ base: "6", md: "8" }}
                w="48px"
                h="48px"
                rounded="full"
                bg="white"
                color="#191C32"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex={3}
                _hover={{ bg: "#4F46E5", color: "white", transform: "scale(1.05)" }}
                transition="all 0.2s ease"
                aria-label="Umów rozmowę"
              >
                <ArrowRightIcon />
              </Box>
            </Box>

            {/* Columna derecha — 2 cards apiladas */}
            <VStack gap={{ base: "5", md: "6" }} align="stretch">
              {/* Card 1 — Wdrożenie */}
              <Box
                position="relative"
                bg="#F8FAFC"
                rounded="2xl"
                p={{ base: "7", md: "8" }}
                border="1px solid #E2E8F0"
                flex="1"
                display="flex"
                flexDirection="column"
                transition="all 0.2s"
                _hover={{ borderColor: "#4F46E5", bg: "white" }}
              >
                <VStack align="flex-start" gap="3" flex="1">
                  <Text
                    fontSize="11px"
                    fontWeight="700"
                    color="#4F46E5"
                    letterSpacing="0.14em"
                    textTransform="uppercase"
                  >
                    Wdrożenie
                  </Text>
                  <Heading
                    as="h3"
                    fontSize={{ base: "20px", md: "22px" }}
                    fontWeight="800"
                    color="#0F172A"
                    letterSpacing="-0.025em"
                    lineHeight="1.2"
                  >
                    Pełne wdrożenie w 5 dni roboczych
                  </Heading>
                  <Text color="#475569" fontSize="14px" lineHeight="1.6">
                    System generuje stronę pod Twoją firmę, konfiguruje SEO,
                    Google Analytics i Search Console. Ty dodajesz treści
                    i akceptujesz gotowy efekt.
                  </Text>
                </VStack>
                <Box
                  as={Link}
                  to="/#moduly"
                  position="absolute"
                  bottom={{ base: "5", md: "6" }}
                  right={{ base: "5", md: "6" }}
                  w="40px"
                  h="40px"
                  rounded="full"
                  bg="white"
                  color="#0F172A"
                  border="1px solid #E2E8F0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ bg: "#0F172A", color: "white", borderColor: "#0F172A" }}
                  transition="all 0.2s"
                  aria-label="Zobacz moduły"
                >
                  <ArrowRightIcon size={16} />
                </Box>
              </Box>

              {/* Card 2 — Wsparcie */}
              <Box
                position="relative"
                bg="#F8FAFC"
                rounded="2xl"
                p={{ base: "7", md: "8" }}
                border="1px solid #E2E8F0"
                flex="1"
                display="flex"
                flexDirection="column"
                transition="all 0.2s"
                _hover={{ borderColor: "#4F46E5", bg: "white" }}
              >
                <VStack align="flex-start" gap="3" flex="1">
                  <Text
                    fontSize="11px"
                    fontWeight="700"
                    color="#4F46E5"
                    letterSpacing="0.14em"
                    textTransform="uppercase"
                  >
                    Wsparcie
                  </Text>
                  <Heading
                    as="h3"
                    fontSize={{ base: "20px", md: "22px" }}
                    fontWeight="800"
                    color="#0F172A"
                    letterSpacing="-0.025em"
                    lineHeight="1.2"
                  >
                    Wsparcie, które faktycznie wspiera
                  </Heading>
                  <Text color="#475569" fontSize="14px" lineHeight="1.6">
                    Po polsku, w dni robocze. Telefon, mail, czat — czas reakcji: max 4h.
                    Nie zbywamy Cię żargonem. Mówimy po ludzku i rozwiązujemy sprawę od razu.
                  </Text>
                </VStack>
                <Box
                  as={Link}
                  to="/#kontakt"
                  position="absolute"
                  bottom={{ base: "5", md: "6" }}
                  right={{ base: "5", md: "6" }}
                  w="40px"
                  h="40px"
                  rounded="full"
                  bg="white"
                  color="#0F172A"
                  border="1px solid #E2E8F0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ bg: "#0F172A", color: "white", borderColor: "#0F172A" }}
                  transition="all 0.2s"
                  aria-label="Skontaktuj się"
                >
                  <ArrowRightIcon size={16} />
                </Box>
              </Box>
            </VStack>
          </Grid>

          {/* Bottom wide card — Google positioning */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            bg="#F8FAFC"
            rounded="2xl"
            border="1px solid #E2E8F0"
            overflow="hidden"
            position="relative"
          >
            {/* Lado izquierdo — texto */}
            <VStack
              align="flex-start"
              gap="5"
              p={{ base: "7", md: "9" }}
              flex="1.1"
              justify="center"
            >
              <Text
                fontSize="11px"
                fontWeight="700"
                color="#4F46E5"
                letterSpacing="0.14em"
                textTransform="uppercase"
              >
                Pozycjonowanie
              </Text>
              <Heading
                as="h3"
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="800"
                color="#0F172A"
                letterSpacing="-0.03em"
                lineHeight="1.15"
              >
                Twoja firma w Google. Bez płacenia za kliknięcia.
              </Heading>
              <Text color="#475569" fontSize="15px" lineHeight="1.6" maxW="lg">
                Twoja strona pojawia się w wynikach Google, gdy klienci szukają Twojej usługi.
                Bez reklam, na lata — organicznie. Pierwsze pozycje w 30 dni, nie po pół roku.
              </Text>
              <Box
                as={Link}
                to="/#seo"
                display="inline-flex"
                alignItems="center"
                gap="2"
                color="#4F46E5"
                fontSize="14px"
                fontWeight="700"
                textDecoration="none"
                _hover={{ color: "#4338CA", gap: "3" }}
                transition="all 0.2s"
                mt="1"
              >
                Zobacz jak pozycjonujemy
                <Box display="flex" alignItems="center"><ArrowRightIcon size={14} /></Box>
              </Box>
            </VStack>

            {/* Lado derecho — mockup Google search */}
            <Box
              flex="1"
              bg="white"
              borderLeft={{ base: "none", lg: "1px solid" }}
              borderTop={{ base: "1px solid", lg: "none" }}
              borderColor="#E2E8F0"
              p={{ base: "7", md: "9" }}
              position="relative"
            >
              <VStack align="stretch" gap="3.5">
                {/* Google search bar */}
                <Flex
                  align="center"
                  gap="2.5"
                  bg="white"
                  border="1px solid #E2E8F0"
                  rounded="full"
                  px="3.5"
                  py="2.5"
                  boxShadow="0 1px 3px rgba(15, 23, 42, 0.04)"
                >
                  {/* G logo mini */}
                  <Flex
                    w="20px"
                    h="20px"
                    rounded="full"
                    bg="white"
                    border="1px solid #E2E8F0"
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <Text fontSize="12px" fontWeight="800" color="#4285F4" lineHeight="1">
                      G
                    </Text>
                  </Flex>
                  <Text fontSize="13px" color="#1E293B" fontWeight="500">
                    hydraulik Warszawa
                  </Text>
                  <Box ml="auto" color="#94A3B8" display="flex"><SearchIcon /></Box>
                </Flex>

                {/* Result #1 — featured (cliente) */}
                <Box
                  bg="#FAFBFF"
                  border="1px solid #C7D2FE"
                  rounded="md"
                  p="3"
                  position="relative"
                >
                  <Flex
                    align="center"
                    gap="1.5"
                    position="absolute"
                    top="-8px"
                    left="10px"
                    bg="#4F46E5"
                    color="white"
                    px="2"
                    py="0.5"
                    rounded="full"
                    fontSize="9px"
                    fontWeight="700"
                    letterSpacing="0.06em"
                    textTransform="uppercase"
                  >
                    <Box display="flex"><TrendUpIcon size={9} /></Box>
                    Twoja firma · #1
                  </Flex>
                  <Text fontSize="13px" color="#1E40AF" fontWeight="700" mt="2" mb="0.5" lineHeight="1.3">
                    Hydraulik Warszawa 24h — HydraulikExpress.pl
                  </Text>
                  <Text fontSize="11px" color="#10B981" mb="1.5">
                    hydraulik-warszawa-24.pl › usługi
                  </Text>
                  <Text fontSize="11px" color="#475569" lineHeight="1.45">
                    Profesjonalny hydraulik w Warszawie. Naprawy 24/7, gwarancja, faktura VAT.
                    Dojazd w 30 minut. Sprawdź opinie.
                  </Text>
                </Box>

                {/* Result #2 — competidor */}
                <Box pl="1">
                  <Text fontSize="12px" color="#1E293B" fontWeight="500" mb="0.5" lineHeight="1.3">
                    Najlepszy hydraulik w Warszawie — Ranking 2024
                  </Text>
                  <Text fontSize="10px" color="#10B981">
                    ranking-hydraulikow.pl
                  </Text>
                </Box>

                {/* Result #3 — competidor */}
                <Box pl="1">
                  <Text fontSize="12px" color="#1E293B" fontWeight="500" mb="0.5" lineHeight="1.3">
                    Hydraulik Warszawa — cennik, opinie, kontakt
                  </Text>
                  <Text fontSize="10px" color="#10B981">
                    znajdź-firmę.pl/warszawa/hydraulik
                  </Text>
                </Box>

                {/* Footer — KPI */}
                <Box pt="3" mt="1" borderTop="1px dashed" borderColor="#E2E8F0">
                  <Flex justify="space-between" align="center" gap="3" wrap="wrap">
                    <Flex align="center" gap="2">
                      <Box color="#10B981" display="flex"><TrendUpIcon /></Box>
                      <Text fontSize="11px" color="#475569" fontWeight="500">
                        <Box as="span" color="#0F172A" fontWeight="700">+247%</Box> ruchu w 90 dni
                      </Text>
                    </Flex>
                    <Flex align="flex-end" gap="0.5" h="22px">
                      <Box w="6px" h="14px" bg="#E2E8F0" rounded="sm" />
                      <Box w="6px" h="16px" bg="#C7D2FE" rounded="sm" />
                      <Box w="6px" h="12px" bg="#A5B4FC" rounded="sm" />
                      <Box w="6px" h="18px" bg="#818CF8" rounded="sm" />
                      <Box w="6px" h="11px" bg="#6366F1" rounded="sm" />
                      <Box w="6px" h="22px" bg="#4F46E5" rounded="sm" />
                    </Flex>
                  </Flex>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}