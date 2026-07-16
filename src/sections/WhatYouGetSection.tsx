import { Box, Container, Flex, Grid, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react"
import { FaCheck } from "react-icons/fa"

const points = [
  {
    title: "Strona zaprojektowana wyłącznie dla Twojej firmy",
    desc: "Twoja branża, Twoi klienci, Twoja marka. Wszystko dopasowane do tego, czym jest Twoja firma.",
  },
  {
    title: "Platforma, którą my utrzymujemy i rozwijamy",
    desc: "Kiedy Twoja firma rośnie, strona rośnie razem z nią. Bez zmiany platformy, bez stresu.",
  },
  {
    title: "Strona, która zawsze działa",
    desc: "Szybka, bezpieczna, dostępna 24/7. My pilnujemy — Ty nie musisz o tym myśleć.",
  },
  {
    title: "Strona, która pomaga zdobywać nowych klientów",
    desc: "Twoja strona przyciąga zapytania, generuje telefony i rośnie z miesiąca na miesiąc. To inwestycja, która się zwraca.",
  },
]

const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const WhatYouGetSection = () => {
  return (
    <Box bg="white" py={{ base: "16", md: "22" }}>
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
              Co tak naprawdę kupujesz
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "30px", md: "42px" }}
              fontWeight="800"
              letterSpacing="-0.035em"
              color="#0F172A"
              lineHeight="1.1"
            >
              Kupujesz{" "}
              <Box as="span" color="#4F46E5">znacznie więcej</Box>{" "}
              niż stronę.
            </Heading>
          </VStack>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={{ base: "4", md: "5" }}
            w="full"
          >
            {points.map((point, i) => (
              <Box
                key={i}
                p={{ base: "6", md: "7" }}
                bg="#F8FAFC"
                rounded="2xl"
                border="1px solid #E2E8F0"
                transition="all 0.2s"
                _hover={{ borderColor: "#C7D2FE", bg: "#FAFAFF" }}
              >
                <HStack align="start" gap="4">
                  <Box
                    flexShrink={0}
                    w="9"
                    h="9"
                    rounded="lg"
                    bg="#4F46E5"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt="0.5"
                  >
                    <CheckIcon size={16} />
                  </Box>
                  <VStack align="start" gap="1.5">
                    <Text fontSize="md" fontWeight="700" color="#0F172A" lineHeight="1.3">
                      {point.title}
                    </Text>
                    <Text fontSize="sm" color="#475569" lineHeight="1.55">
                      {point.desc}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </Grid>

          <Box
            bg="white"
            color="#0F172A"
            p={{ base: "7", md: "10" }}
            rounded="2xl"
            textAlign="center"
            maxW="3xl"
            w="full"
            border="1px solid #E2E8F0"
            boxShadow="0 12px 30px -10px rgba(15, 23, 42, 0.12)"
          >
            <Text
              fontSize={{ base: "20px", md: "28px" }}
              fontWeight="800"
              lineHeight="1.3"
              letterSpacing="-0.02em"
            >
              Ty zajmujesz się swoim biznesem.
              <br />
              <Box as="span" color="#4F46E5">My zajmujemy się Twoją stroną.</Box>
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
