import { Box, Container, Heading, Text, VStack, Flex, Grid, Badge } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaCheck, FaTimes, FaArrowRight } from "react-icons/fa"

const options = [
  {
    name: "WordPress",
    bestFor: "Dobry, gdy potrzebujesz dużej elastyczności i masz kogoś do konfiguracji.",
    pluses: ["Duża liczba wtyczek", "Popularny system", "Możliwość rozbudowy"],
    minuses: ["Wymaga aktualizacji", "Panel bywa złożony", "Łatwo o chaos we wtyczkach"],
  },
  {
    name: "Strona statyczna",
    bestFor: "Dobra, gdy treść prawie się nie zmienia i najważniejsza jest prosta obecność online.",
    pluses: ["Szybka", "Prosta technicznie", "Mało elementów do utrzymania"],
    minuses: ["Każda zmiana wymaga programisty", "Brak wygodnego bloga", "Brak CMS dla właściciela"],
  },
  {
    name: "SEO Grow",
    bestFor: "Dla małych firm, które chcą stronę, blog i łatwą edycję bez WordPressa.",
    pluses: ["Prosty CMS", "Blog, hosting i SSL", "SEO techniczne i doradztwo", "Indywidualne funkcje na zamówienie"],
    minuses: ["Wszystko zintegrowane — zero wtyczek do aktualizacji", "Bez umowy, bez ukrytych kosztów", "100% polski zespół i wsparcie po polsku"],
    highlighted: true,
  },
]

const integrations = [
  { name: "Google Search Console", desc: "Monitorowanie indeksacji i widoczności" },
  { name: "Google Analytics", desc: "Analityka ruchu i konwersji" },
  { name: "IndexNow", desc: "Natychmiastowe zgłaszanie nowych treści" },
  { name: "Stripe / PayU / Tpay", desc: "Bramki płatności dla sklepu" },
  { name: "DPD / InPost / Poczta Polska", desc: "Integracje kurierskie" },
  { name: "Mailchimp / Brevo", desc: "Synchronizacja list mailingowych" },
]

const docs = [
  { name: "schema.org", url: "https://schema.org/docs/gs.html", desc: "Standard danych strukturalnych" },
  { name: "Google Search Central", url: "https://developers.google.com/search/docs", desc: "Oficjalna dokumentacja Google" },
  { name: "Meta description", url: "https://developers.google.com/search/docs/appearance/snippet", desc: "Wytyczne opisu strony" },
  { name: "Rich results", url: "https://developers.google.com/search/results/snippet", desc: "Rozszerzone wyniki wyszukiwania" },
  { name: "Core Web Vitals", url: "https://web.dev/vitals/", desc: "Wskaźniki wydajności strony" },
  { name: "llm.txt", url: "https://llmstxt.org/", desc: "Standardowy plik dla modeli AI — opis firmy w formacie czytelnym dla LLM" },
]

const CheckIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const MinusIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" focusable="false">
    <path d="M5 12h14" />
  </svg>
)

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

export const ComparisonConWordPressPage = () => {
  return (
    <Box bg="white" minH="100vh">
      <Container maxW="6xl" py={{ base: "12", md: "20" }}>
        <VStack gap={{ base: "12", md: "20" }} align="stretch">

          {/* Header */}
          <VStack gap="4" textAlign="center" maxW="3xl" mx="auto">
            <Badge bg="#EEF2FF" color="#3730A3" px="3" py="1" rounded="full" fontSize="xs" fontWeight="700">
              Porównanie
            </Badge>
            <Heading as="h1" fontSize={{ base: "32px", md: "48px" }} fontWeight="800" letterSpacing="-0.03em" color="#0F172A">
              SEO Grow vs WordPress vs strona statyczna
            </Heading>
            <Text color="#475569" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7">
              Szczegółowe porównanie trzech podejść do tworzenia stron internetowych dla małych firm.
            </Text>
            <Box
              as={Link}
              to="/"
              display="inline-flex"
              alignItems="center"
              gap="2"
              color="#4F46E5"
              fontSize="sm"
              fontWeight="700"
              textDecoration="none"
              mt="2"
              _hover={{ color: "#4338CA", gap: "3" }}
              transition="all 0.2s"
            >
              ← Wróć na stronę główną
            </Box>
          </VStack>

          {/* Comparison Cards */}
          <Box>
            <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color="#0F172A" mb="6" textAlign="center">
              Trzy podejścia, trzy filozofie
            </Heading>
            <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap="5">
              {options.map((option) => (
                <Box
                  key={option.name}
                  bg="white"
                  rounded="2xl"
                  border="1px solid"
                  borderColor={option.highlighted ? "#4F46E5" : "#E2E8F0"}
                  boxShadow={option.highlighted ? "0 18px 40px rgba(79, 70, 229, 0.10)" : "none"}
                  p="6"
                >
                  <VStack align="stretch" gap="5" h="full">
                    <Box>
                      {option.highlighted && (
                        <Text display="inline-flex" bg="#DBEAFE" color="#1D4ED8" px="3" py="1" rounded="full" fontSize="xs" fontWeight="800" mb="3">
                          Najprostszy start
                        </Text>
                      )}
                      <Heading as="h3" fontSize="xl" fontWeight="800" color="#0F172A" mb="2">
                        {option.name}
                      </Heading>
                      <Text fontSize="sm" color="#64748B" lineHeight="1.7">
                        {option.bestFor}
                      </Text>
                    </Box>

                    <Box>
                      <Text fontSize="xs" fontWeight="800" color={option.highlighted ? "#4F46E5" : "#64748B"} textTransform="uppercase" letterSpacing="0.08em" mb="3">
                        Plusy
                      </Text>
                      <VStack align="stretch" gap="2">
                        {option.pluses.map((item) => (
                          <Flex key={item} gap="2" align="start">
                            <Box color={option.highlighted ? "#10B981" : "#10B981"} mt="0.5" flexShrink={0}>
                              <CheckIcon />
                            </Box>
                            <Text fontSize="sm" color="#334155" lineHeight="1.5">
                              {item}
                            </Text>
                          </Flex>
                        ))}
                      </VStack>
                    </Box>

                    <Box>
                      <Text fontSize="xs" fontWeight="800" color={option.highlighted ? "#4F46E5" : "#64748B"} textTransform="uppercase" letterSpacing="0.08em" mb="3">
                        {option.highlighted ? "Co w zamian" : "Ograniczenia"}
                      </Text>
                      <VStack align="stretch" gap="2">
                        {option.minuses.map((item) => (
                          <Flex key={item} gap="2" align="start">
                            <Box color={option.highlighted ? "#10B981" : "#94A3B8"} mt="0.5" flexShrink={0}>
                              {option.highlighted ? <CheckIcon /> : <MinusIcon />}
                            </Box>
                            <Text fontSize="sm" color={option.highlighted ? "#1E293B" : "#475569"} lineHeight="1.5" fontWeight={option.highlighted ? "500" : "400"}>
                              {item}
                            </Text>
                          </Flex>
                        ))}
                      </VStack>
                    </Box>
                  </VStack>
                </Box>
              ))}
            </Grid>
          </Box>

          {/* Integrations */}
          <Box>
            <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color="#0F172A" mb="4">
              Integracje, które działają od razu
            </Heading>
            <Text color="#475569" fontSize="md" mb="6">
              SEO Grow łączy się z narzędziami, których Twoi klienci już używają.
            </Text>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="4">
              {integrations.map((integration, i) => (
                <Flex
                  key={i}
                  gap="3"
                  align="start"
                  bg="#F8FAFC"
                  p="5"
                  rounded="xl"
                  border="1px solid #E2E8F0"
                  _hover={{ borderColor: "#4F46E5", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <Box w="2" h="2" mt="2" rounded="full" bg="#4F46E5" flexShrink={0} />
                  <Box>
                    <Text fontSize="sm" fontWeight="700" color="#0F172A" mb="1">
                      {integration.name}
                    </Text>
                    <Text fontSize="xs" color="#64748B" lineHeight="1.5">
                      {integration.desc}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Grid>
          </Box>

          {/* Documentation */}
          <Box>
            <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color="#0F172A" mb="4">
              Dokumentacja techniczna
            </Heading>
            <Text color="#475569" fontSize="md" mb="6">
              Standardy, na których opiera się SEO Grow.
            </Text>
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
              {docs.map((doc, i) => (
                <a
                  key={i}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Flex
                    gap="3"
                    align="center"
                    bg="white"
                    p="5"
                    rounded="xl"
                    border="1px solid #E2E8F0"
                    _hover={{ borderColor: "#4F46E5" }}
                    transition="all 0.2s"
                  >
                    <Box flex="1">
                      <Text fontSize="sm" fontWeight="700" color="#0F172A" mb="0.5">
                        {doc.name}
                      </Text>
                      <Text fontSize="xs" color="#64748B">
                        {doc.desc}
                      </Text>
                    </Box>
                    <Box color="#4F46E5" flexShrink={0}>
                      <ArrowIcon />
                    </Box>
                  </Flex>
                </a>
              ))}
            </Grid>
          </Box>

          {/* CTA final */}
          <Box
            bg="#191C32"
            rounded="2xl"
            p={{ base: "7", md: "9" }}
            textAlign="center"
          >
            <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color="white" mb="3">
              Przekonałeś się?
            </Heading>
            <Text color="rgba(255,255,255,0.75)" fontSize={{ base: "md", md: "lg" }} mb="5">
              Wróć na stronę główną i zacznij od wyceny.
            </Text>
            <Box
              as={Link}
              to="/zamowienie?plan=express"
              display="inline-flex"
              alignItems="center"
              gap="2"
              bg="linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)"
              color="white"
              px="7"
              py="3.5"
              rounded="xl"
              fontWeight="700"
              fontSize="md"
              textDecoration="none"
              boxShadow="0 4px 14px rgba(79, 70, 229, 0.35)"
              _hover={{ bg: "linear-gradient(135deg, #4338CA 0%, #1D4ED8 100%)", transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              Zamów stronę
              <ArrowIcon />
            </Box>
          </Box>

        </VStack>
      </Container>
    </Box>
  )
}