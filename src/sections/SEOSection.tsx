import { Box, Container, Heading, Text, VStack, Flex, Grid } from "@chakra-ui/react"
import { SECTION_TITLE_PROPS, SECTION_TITLE_COLOR_DARK } from "../lib/typography"
import { FaPhoneAlt, FaMousePointer, FaChartLine, FaBolt, FaMobileAlt } from "react-icons/fa"

const benefits = [
  {
    icon: FaPhoneAlt,
    title: "Więcej telefonów i zapytań dzięki lepszej widoczności",
    description:
      "Twoja firma pojawia się wyżej w Google, kiedy ktoś szuka usługi takiej jak Twoja. Efekt: więcej telefonów, więcej zapytań, więcej klientów.",
    technical: "Dodajemy znaczniki Schema.org, żeby Google rozumiał Twoją firmę i mógł ją wyżej pokazywać.",
  },
  {
    icon: FaMousePointer,
    title: "Twoja strona wyświetla się w Google z przyciągającymi tytułami",
    description:
      "Kiedy ktoś szuka Twojej usługi, widzi tytuł i opis, które zachęcają do kliknięcia — nie generyczne, nie suche.",
    technical: "Optymalizujemy meta tagi (tytuł + opis) dla każdej podstrony Twojej witryny.",
  },
  {
    icon: FaChartLine,
    title: "Wiesz, ile osób Cię znajduje — i jak to rośnie",
    description:
      "Widzisz konkretne liczby: ile osób wpisało Twoją usługę w Google, ile kliknęło, ile zadzwoniło. Bez zgadywania.",
    technical: "Podłączamy Google Search Console i analitykę, żebyś miał pełny obraz sytuacji.",
  },
  {
    icon: FaBolt,
    title: "Strona ładuje się natychmiast — nawet na telefonie w słabym zasięgu",
    description:
      "Klient nie czeka 5 sekund na biały ekran. Strona jest gotowa zanim zdąży się zniecierpliwić i wyjść.",
    technical: "Optymalizujemy Core Web Vitals (najważniejsze wskaźniki szybkości wg Google) i kompresujemy wszystko, co się da.",
  },
  {
    icon: FaMobileAlt,
    title: "Wygląda idealnie na telefonie — czyli tam, gdzie są Twoi klienci",
    description:
      "Większość osób szuka usług lokalnych z telefonu. Twoja strona musi wyglądać i działać perfekcyjnie na małym ekranie.",
    technical: "Projektujemy mobile-first (najpierw telefon, potem desktop) — bo tam są Twoi klienci.",
  },
]

export const SEOSection = () => {
  return (
    <Box as="section" id="seo" bg="#F8FAFC" py={{ base: "20", md: "28" }} aria-label="Widoczność w Google">
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
              Widoczność w Google
            </Text>
            <Heading
              as="h2"
              {...SECTION_TITLE_PROPS}
              color={SECTION_TITLE_COLOR_DARK}
            >
              Twoja strona jest gotowa na to, żeby{" "}
              <Box as="span" color="#4F46E5">Google ją rozumiał</Box>{" "}
              — od pierwszego dnia.
            </Heading>
            <Text color="#475569" fontSize="md" lineHeight="1.6" mt="2" maxW="2xl">
              Nie musisz znać się na SEO. My dbamy o to, żeby Twoja strona spełniała wszystko,
              czego Google wymaga.{" "}
              <Box as="span" fontWeight="700" color="#0F172A">
                Ty widzisz tylko efekt: więcej osób, które same Cię znajdują.
              </Box>
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap="5"
            w="full"
          >
            {benefits.map((benefit, i) => (
              <Box
                key={i}
                bg="white"
                rounded="2xl"
                border="1px solid #E2E8F0"
                p={{ base: "6", md: "7" }}
                display="flex"
                flexDirection="column"
                _hover={{
                  borderColor: "#4F46E5",
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 30px -10px rgba(79, 70, 229, 0.2)",
                }}
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
                  flexShrink={0}
                >
                  <Box color="#4F46E5" fontSize="xl">
                    <benefit.icon />
                  </Box>
                </Flex>

                <Heading as="h3" fontSize="md" fontWeight="700" color="#0F172A" mb="3" lineHeight="1.3">
                  {benefit.title}
                </Heading>

                <Text color="#475569" fontSize="sm" lineHeight="1.55" mb="4" flex="1">
                  {benefit.description}
                </Text>

                <Box
                  bg="transparent"
                  borderTop="1px solid #F1F5F9"
                  rounded="0"
                  p="2.5"
                  mt="3"
                  pt="3"
                >
                  <Text
                    fontSize="10px"
                    fontWeight="600"
                    color="#94A3B8"
                    textTransform="uppercase"
                    letterSpacing="0.08em"
                    mb="0.5"
                  >
                    Jak to działa
                  </Text>
                  <Text fontSize="xs" color="#64748B" lineHeight="1.45">
                    {benefit.technical}
                  </Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}
