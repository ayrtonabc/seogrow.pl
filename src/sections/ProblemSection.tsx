import { Box, Container, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react"
import { FaTachometerAlt, FaSearchLocation, FaMoneyBillWave, FaClock } from "react-icons/fa"

const problems = [
  {
    icon: FaTachometerAlt,
    title: "Strona ładuje się wieki",
    desc: "Klient otwiera link, widzi biały ekran i wraca do wyników wyszukiwania. Każda sekunda opóźnienia to klient, który odchodzi do konkurencji.",
  },
  {
    icon: FaSearchLocation,
    title: "Nie ma Cię w Google",
    desc: "Klient szuka Twojej usługi w Google. Znajduje konkurencję. Ciebie nie.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Każda zmiana kosztuje majątek",
    desc: "Chcesz zmienić cenę albo dodać zdjęcie — agencja liczy 200 zł za godzinę i każe czekać 2 tygodnie.",
  },
  {
    icon: FaClock,
    title: "Programista trzyma Cię jako zakładnika",
    desc: "On kontroluje Twoje hasła, pliki i stronę. Bez niego nie ruszysz. To wygodne — dla niego, nie dla Ciebie.",
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
              fontSize={{ base: "36px", md: "52px" }}
              fontWeight="800"
              letterSpacing="-0.04em"
              color="#0F172A"
              lineHeight="1.1"
            >
              Prowadzenie strony{" "}
              <Box as="span" color="#EF4444">jest stresujące i drogie.</Box>
              <br />
              <Box as="span">Ale nie musi takie być.</Box>
            </Heading>
            <Text color="#475569" fontSize="18px" lineHeight="1.6" maxW="2xl" mx="auto">
              Tysiące właścicieli firm w Polsce ma ten sam problem: płacą za stronę,
              która nie działa i nie przyprowadza klientów.
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
                _hover={{ borderColor: "#EF4444", boxShadow: "0 8px 20px -8px rgba(239, 68, 68, 0.15)" }}
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
          >
            <Text fontSize={{ base: "md", md: "lg" }} color="#0F172A" fontWeight="700" mb="2">
              Strona, która pracuje dla Ciebie — nie przeciwko Tobie.
            </Text>
            <Text fontSize="md" color="#475569">
              Bez agencji. Bez programisty. Bez stresu.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}