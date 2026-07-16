import { Box, Container, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react"
import { FaTachometerAlt, FaSearchLocation, FaMoneyBillWave, FaClock } from "react-icons/fa"

const problems = [
  {
    icon: FaMoneyBillWave,
    title: "Każda zmiana to koszt i czekanie",
    desc: "Chcesz zmienić cenę albo dodać zdjęcie — agencja liczy godziny, a Ty czekasz tygodniami na efekt.",
  },
  {
    icon: FaSearchLocation,
    title: "Nie ma Cię tam, gdzie szukają klienci",
    desc: "Ktoś wpisuje Twoją usługę w Google. Znajduje konkurencję. Ciebie — nie.",
  },
  {
    icon: FaTachometerAlt,
    title: "Strona kosztuje — i nic nie zarabia",
    desc: "Płacisz za hosting, aktualizacje, certyfikaty, poprawki — a mimo to nowi klienci nie przychodzą.",
  },
  {
    icon: FaClock,
    title: "Jesteś zależny od jednej osoby",
    desc: "Twój programista trzyma hasła, pliki i dostęp do strony. Bez niego nie ruszysz.",
  },
]

export const ProblemSection = () => {
  return (
    <Box bg="#F8FAFC" py={{ base: "20", md: "28" }}>
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          <VStack gap="6" textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontSize="12px"
              fontWeight="700"
              color="#EF4444"
              letterSpacing="0.12em"
              textTransform="uppercase"
            >
              Brzmi znajomo?
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "32px", md: "46px" }}
              fontWeight="800"
              letterSpacing="-0.04em"
              color="#0F172A"
              lineHeight="1.12"
            >
              Strona, która miała pomagać,{" "}
              <Box as="span" color="#EF4444">tylko przeszkadza.</Box>
              <br />
              <Box as="span">Da się to zmienić.</Box>
            </Heading>
            <Text color="#475569" fontSize="md" lineHeight="1.6" maxW="2xl" mx="auto">
              Większość firm w Polsce płaci za stronę, która nie przyprowadza klientów,
              kosztuje coraz więcej i wymaga ciągłej uwagi. To nie musi być Twoja historia.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="5" w="full">
            {problems.map((problem, i) => (
              <Box
                key={i}
                p={{ base: "6", md: "7" }}
                bg="white"
                rounded="2xl"
                border="1px solid #E2E8F0"
                _hover={{ borderColor: "#FECACA", boxShadow: "0 8px 20px -8px rgba(239, 68, 68, 0.15)" }}
                transition="all 0.25s"
              >
                <Flex gap="4" align="start">
                  <Box
                    p="3"
                    bg="#FEE2E2"
                    rounded="xl"
                    color="#EF4444"
                    fontSize="lg"
                    flexShrink={0}
                  >
                    <problem.icon />
                  </Box>
                  <VStack align="start" gap="2">
                    <Text fontWeight="700" fontSize="lg" color="#0F172A">
                      {problem.title}
                    </Text>
                    <Text fontSize="sm" color="#475569" lineHeight="1.55">
                      {problem.desc}
                    </Text>
                  </VStack>
                </Flex>
              </Box>
            ))}
          </Grid>

          <Box
            bg="white"
            p={{ base: "6", md: "8" }}
            rounded="2xl"
            border="1px solid #E2E8F0"
            textAlign="center"
            maxW="3xl"
            w="full"
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="#0F172A"
              fontWeight="800"
              mb="3"
              lineHeight="1.3"
            >
              Twoja strona przestaje być kosztem.
              <br />
              <Box as="span" color="#4F46E5">Zaczyna pracować dla Twojej firmy.</Box>
            </Text>
            <Text fontSize="md" color="#475569" lineHeight="1.6">
              Płacisz raz za projekt, potem jedną stałą kwotę miesięcznie — i tyle.
              Hosting, aktualizacje, bezpieczeństwo, wsparcie, rozwój: wszystko jest w tej kwocie.
              <Box as="span" fontWeight="700" color="#0F172A"> My pilnujemy. Ty robisz swoje.</Box>
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
