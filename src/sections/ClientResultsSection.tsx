import { Box, Container, Flex, Heading, Text, VStack, HStack, SimpleGrid, Badge } from "@chakra-ui/react"

type CaseStudy = {
  name: string
  industry: string
  logo: string
  url?: string
  situation: string
  whatWeDid: string
  result: string
  resultNote?: string
}

const cases: CaseStudy[] = [
  {
    name: "Asmed",
    industry: "Aparaty słuchowe · Ostróda",
    logo: "/clientes/asmed.webp",
    url: "https://asmed.example",
    situation: "Sklep z aparatami słuchowymi w Ostródzie potrzebował strony, która buduje zaufanie starszych klientów i ich rodzin, oraz pojawia się w Google, kiedy ktoś szuka aparatu słuchowego w regionie warmińsko-mazurskim.",
    whatWeDid: "Zaprojektowaliśmy stronę od zera z myślą o dwóch grupach odbiorców: osobach starszych (czytelność, duże przyciski, prosty kontakt telefoniczny) i ich rodzinach (które szukają w imieniu rodziców). Konfiguracja schema LocalBusiness, meta tagów i Google Search Console.",
    result: "Strona ładuje się poniżej 1.5s. Indeksacja w Google w 9 dni. Pierwsze zapytania lokalne typu 'aparat słuchowy Ostróda' zaczęły pojawiać się po 4 tygodniach.",
    resultNote: "Klient założyciel · wyniki w trakcie pomiaru",
  },
  {
    name: "Artur Wiktorski",
    industry: "Doradca ubezpieczeniowy · Olsztyn",
    logo: "/clientes/wiktorski.webp",
    url: "https://wiktorskiubezpieczenia.pl",
    situation: "Doradca ubezpieczeniowy MDRT Junior z Olsztyna. Klient docelowy: rodziny i przedsiębiorcy z Warmii i Mazur. Potrzebował strony, która pozwoli pozyskiwać klientów z całego regionu, a nie tylko z Olsztyna.",
    whatWeDid: "Stworzyliśmy strukturę strony dopasowaną do dwóch grup odbiorców (klient indywidualny vs firma), osobne podstrony SEO dla 8 miast regionu (Ostróda, Elbląg, Iława, Ełk, Mrągowo, Giżycko, Szczytno), schema InsuranceAgency + LocalBusiness + Person oraz formularz kontaktowy z wyborem typu klienta.",
    result: "Strona świeżo zaindeksowana. Oczekujemy pierwszych zapytań z regionu Warmii i Mazur w najbliższych tygodniach. Współpracujemy dalej — będziemy optymalizować w oparciu o dane z Search Console, gdy się pojawią.",
    resultNote: "Klient założyciel · wiktorskiubezpieczenia.pl · wyniki w trakcie pomiaru",
  },
  {
    name: "Inteligentne Folie",
    industry: "Sklep z folią inteligentną",
    logo: "/clientes/inteligentnefolie.webp",
    url: "https://inteligentnefolie.example",
    situation: "Sklep internetowy sprzedający folię inteligentną w całej Polsce. Produkt mało znany, wymagał wyjaśnienia zastosowań przed specyfikacją. Konkurencja mocno osadzona w Google.",
    whatWeDid: "Przeprowadziliśmy analizę konkurencji pod kątem SEO. Przebudowaliśmy strukturę strony tak, żeby zaczynała od zastosowań (co można zrobić z folią), a nie od specyfikacji. Wydzieliliśmy sekcję B2B i B2C. Zoptymalizowaliśmy treści pod główne zapytania produktowe.",
    result: "Po 2 tygodniach od publikacji klient zaczął otrzymywać telefony i zapytania ofertowe z całej Polski. Wyszukujemy się lepiej niż konkurencja w kluczowych zapytaniach. Współpracujemy dalej — optymalizujemy na bieżąco w oparciu o dane z Search Console.",
    resultNote: "Klient założyciel · dane w trakcie pomiaru",
  },
]

export const ClientResultsSection = () => {
  return (
    <Box bg="white" py={{ base: "16", md: "22" }}>
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          <VStack gap="4" textAlign="center" maxW="3xl">
            <Text
              fontSize="11px"
              fontWeight="700"
              color="#4F46E5"
              letterSpacing="0.14em"
              textTransform="uppercase"
            >
              Pierwsze wdrożenia
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "30px", md: "42px" }}
              fontWeight="800"
              letterSpacing="-0.035em"
              color="#0F172A"
              lineHeight="1.12"
            >
              Nie obiecujemy.{" "}
              <Box as="span" color="#4F46E5">Pokazujemy.</Box>
            </Heading>
            <Text color="#475569" fontSize="md" lineHeight="1.6" maxW="2xl">
              Kilka firm, które zaufały nam na starcie. Z każdym klientem mierzymy efekt i raportujemy konkretne liczby — bez ściemy i bez pustych obietnic.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "4", md: "5" }} w="full">
            {cases.map((c, i) => (
              <Box
                key={i}
                bg="white"
                border="1px solid #E2E8F0"
                rounded="2xl"
                overflow="hidden"
                display="flex"
                flexDirection="column"
                _hover={{
                  borderColor: "#C7D2FE",
                  boxShadow: "0 12px 30px -10px rgba(79, 70, 229, 0.15)",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.25s"
              >
                {/* Header: logo + sector */}
                <Flex
                  align="center"
                  justify="space-between"
                  p="5"
                  bg="#F8FAFC"
                  borderBottom="1px solid #E2E8F0"
                >
                  <HStack gap="3" align="center">
                    <Box
                      w="10"
                      h="10"
                      bg="white"
                      border="1px solid #E2E8F0"
                      rounded="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      overflow="hidden"
                      flexShrink={0}
                    >
                      <img
                        src={c.logo}
                        alt={`${c.name} — logo`}
                        width={32}
                        height={32}
                        loading="lazy"
                        style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </Box>
                    <VStack align="start" gap="0" spacing="0">
                      <Text fontSize="sm" fontWeight="700" color="#0F172A" lineHeight="1.2">
                        {c.name}
                      </Text>
                      <Text fontSize="xs" color="#64748B" lineHeight="1.3">
                        {c.industry}
                      </Text>
                    </VStack>
                  </HStack>
                </Flex>

                {/* Body */}
                <VStack align="stretch" gap="3" p="5" flex="1">
                  <Box>
                    <Text
                      fontSize="10px"
                      fontWeight="700"
                      color="#94A3B8"
                      textTransform="uppercase"
                      letterSpacing="0.1em"
                      mb="1"
                    >
                      Sytuacja
                    </Text>
                    <Text fontSize="xs" color="#475569" lineHeight="1.5">
                      {c.situation}
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="10px"
                      fontWeight="700"
                      color="#94A3B8"
                      textTransform="uppercase"
                      letterSpacing="0.1em"
                      mb="1"
                    >
                      Co zrobiliśmy
                    </Text>
                    <Text fontSize="xs" color="#475569" lineHeight="1.5">
                      {c.whatWeDid}
                    </Text>
                  </Box>

                  <Box bg="#EEF2FF" rounded="md" p="3" mt="1">
                    <Text
                      fontSize="10px"
                      fontWeight="700"
                      color="#4F46E5"
                      textTransform="uppercase"
                      letterSpacing="0.1em"
                      mb="1"
                    >
                      Efekt
                    </Text>
                    <Text fontSize="sm" color="#0F172A" lineHeight="1.45" fontWeight="600">
                      {c.result}
                    </Text>
                    {c.resultNote && (
                      <Text
                        fontSize="10px"
                        color="#64748B"
                        fontStyle="italic"
                        mt="1.5"
                        lineHeight="1.4"
                      >
                        {c.resultNote}
                      </Text>
                    )}
                  </Box>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Box
            bg="#F8FAFC"
            border="1px solid #E2E8F0"
            rounded="xl"
            p={{ base: "5", md: "6" }}
            textAlign="center"
            maxW="3xl"
            w="full"
          >
            <Text fontSize="sm" color="#475569" lineHeight="1.5">
              Wszystkie powyższe wyniki są{" "}
              <Box as="span" fontWeight="700" color="#0F172A">
                mierzone i raportowane
              </Box>
              .{" "}
              <Box as="span" fontWeight="600" color="#4F46E5">
                Nie obiecujemy konkretnych wyników, zanim poznamy Twoją firmę i branżę.
              </Box>{" "}
              Każdy klient dostaje plan z konkretnymi celami i datą ich weryfikacji.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
