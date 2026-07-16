import { Box, Container, Flex, Grid, Heading, Text, VStack, HStack } from "@chakra-ui/react"
import { FaTimes, FaCheck } from "react-icons/fa"

const noEs = [
  "Kreator stron, w którym sam wybierasz motyw",
  "Gotowy szablon z Twoim logo na górze",
  "Strona zrobiona w godzinę za 500 zł",
]

const es = [
  "Strona zaprojektowana wyłącznie dla Twojej firmy",
  "Struktura, kolory, typografia dopasowane do Twojej marki",
  "Dostarczona w systemie, którym sam możesz zarządzać",
  "Gotowa na rozwój, gdy Twoja firma urośnie",
]

export const CustomDesignSection = () => {
  return (
    <Box bg="#F8FAFC" py={{ base: "16", md: "22" }}>
      <Container maxW="6xl">
        <VStack gap={{ base: "10", md: "14" }}>
          <VStack gap="4" textAlign="center" maxW="3xl">
            <Text
              fontSize="11px"
              fontWeight="700"
              color="#4F46E5"
              letterSpacing="0.14em"
              textTransform="uppercase"
            >
              Projekt na miarę
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "30px", md: "42px" }}
              fontWeight="800"
              letterSpacing="-0.035em"
              color="#0F172A"
              lineHeight="1.12"
            >
              Twoja strona jest{" "}
              <Box as="span" color="#4F46E5">zaprojektowana od zera</Box>{" "}
              specjalnie dla Twojej firmy.
            </Heading>
            <Text color="#475569" fontSize="md" lineHeight="1.6" maxW="2xl">
              Nie zaczynamy od projektowania.{" "}
              <Box as="span" fontWeight="700" color="#0F172A">
                Zaczynamy od zrozumienia, jak Twoja firma zdobywa klientów.
              </Box>{" "}
              Dopiero potem nasz projektant tworzy strukturę, układ i treści, które mają jeden cel: zamieniać odwiedzających w zapytania.
            </Text>
            <Text
              mt="2"
              fontSize={{ base: "md", md: "lg" }}
              color="#4F46E5"
              fontWeight="700"
              lineHeight="1.4"
              maxW="2xl"
            >
              Nie projektujemy strony po to, żeby była ładna.
              <br />
              Projektujemy ją po to, żeby ludzie zostawiali zapytania.
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={{ base: "4", md: "5" }}
            w="full"
          >
            {/* Lo que NO es */}
            <Box
              p={{ base: "6", md: "7" }}
              bg="white"
              rounded="2xl"
              border="1px solid #FECACA"
            >
              <Text
                fontSize="11px"
                fontWeight="700"
                color="#DC2626"
                letterSpacing="0.14em"
                textTransform="uppercase"
                mb="5"
              >
                To nie jest
              </Text>
              <VStack gap="3.5" align="stretch">
                {noEs.map((item, i) => (
                  <HStack key={i} align="start" gap="3">
                    <Box
                      flexShrink={0}
                      w="6"
                      h="6"
                      rounded="full"
                      bg="#FEE2E2"
                      color="#DC2626"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mt="0.5"
                    >
                      <FaTimes size={11} />
                    </Box>
                    <Text fontSize="sm" color="#334155" lineHeight="1.5" fontWeight="500">
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>

            {/* Lo que SÍ es */}
            <Box
              p={{ base: "6", md: "7" }}
              bg="white"
              rounded="2xl"
              border="1px solid #C7D2FE"
            >
              <Text
                fontSize="11px"
                fontWeight="700"
                color="#4F46E5"
                letterSpacing="0.14em"
                textTransform="uppercase"
                mb="5"
              >
                To jest
              </Text>
              <VStack gap="3.5" align="stretch">
                {es.map((item, i) => (
                  <HStack key={i} align="start" gap="3">
                    <Box
                      flexShrink={0}
                      w="6"
                      h="6"
                      rounded="full"
                      bg="#EEF2FF"
                      color="#4F46E5"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mt="0.5"
                    >
                      <FaCheck size={11} />
                    </Box>
                    <Text fontSize="sm" color="#334155" lineHeight="1.5" fontWeight="500">
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
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
              fontSize={{ base: "md", md: "lg" }}
              color="#0F172A"
              fontWeight="700"
              lineHeight="1.4"
            >
              Dlatego profesjonalna strona kosztuje więcej niż taka „zrobiona w godzinę".
              <br />
              <Box as="span" color="#4F46E5">I dlatego działa.</Box>
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
