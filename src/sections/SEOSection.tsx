import { Box, Container, Heading, Text, VStack, Flex, Grid, Badge } from "@chakra-ui/react"
import { FaBolt, FaSearch, FaCheckCircle } from "react-icons/fa"

const benefits = [
  {
    icon: FaBolt,
    title: "Automatyczne tytuły i opisy w Google",
    description: "System sam tworzy tytuły i opisy stron, idealnie dopasowane do Twoich słów kluczowych. Wszystko gotowe od pierwszego dnia.",
  },
  {
    icon: FaSearch,
    title: "Struktura strony i mapa gotowe dla Google",
    description: "Google od razu rozumie, o czym jest Twoja strona. Mapa strony aktualizuje się sama, więc wszystkie podstrony są automatycznie indeksowane.",
  },
  {
    icon: FaCheckCircle,
    title: "Automatyczna naprawa błędów 24/7",
    description: "System non-stop monitoruje stronę. Wykrywa problemy techniczne i naprawia je w tle, zanim Google to zauważy.",
  },
]

export const SEOSection = () => {
  return (
    <Box as="section" id="seo" bg="#F8FAFC" py={{ base: "20", md: "28" }} aria-label="SEO automatyczne">
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          <VStack gap="4" textAlign="center" maxW="3xl">
            <Text
              fontSize="12px"
              fontWeight="700"
              color="#4F46E5"
              letterSpacing="0.12em"
              textTransform="uppercase"
            >
              SEO automatyczne
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "36px", md: "52px" }}
              fontWeight="800"
              letterSpacing="-0.04em"
              color="#0F172A"
              lineHeight="1.05"
            >
              Bądź widoczny w Google bez nauki SEO
            </Heading>
            <Text color="#475569" fontSize="18px" lineHeight="1.6" mt="2">
              Trzy rzeczy, które SEO Grow robi za Ciebie automatycznie.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="5" w="full">
            {benefits.map((benefit, i) => (
              <Box
                key={i}
                bg="white"
                rounded="2xl"
                border="1px solid #E2E8F0"
                p={{ base: "6", md: "7" }}
                display="flex"
                flexDirection="column"
                _hover={{ borderColor: "#4F46E5", transform: "translateY(-3px)", boxShadow: "0 12px 30px -10px rgba(79, 70, 229, 0.2)" }}
                transition="all 0.25s"
              >
                <Flex
                  w="12"
                  h="12"
                  bg="#EEF2FF"
                  rounded="xl"
                  align="center"
                  justify="center"
                  mb="5"
                >
                  <Box color="#4F46E5" fontSize="xl">
                    <benefit.icon />
                  </Box>
                </Flex>

                <Heading as="h3" fontSize="md" fontWeight="700" color="#0F172A" mb="3" lineHeight="1.3">
                  {benefit.title}
                </Heading>

                <Text color="#475569" fontSize="sm" lineHeight="1.55">
                  {benefit.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}