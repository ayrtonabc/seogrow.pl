import { Box, Container, VStack, Flex, Grid, Text, Heading } from "@chakra-ui/react"
import { IndustrySearch } from "../components/IndustrySearch"

const sectors = [
  {
    title: "GABINETY MEDYCZNE I STOMATOLOGICZNE",
    searches: ["Dentysta Olsztyn", "Stomatolog Lublin", "Ortodonta Białystok"],
    description: "Pacjenci z Twojej okolicy sami Cię znajdą. Automatyczne lokalne SEO.",
  },
  {
    title: "KANCELARIE PRAWNE I DORADCY",
    searches: ["Adwokat Warszawa", "Kancelaria prawna Wrocław", "Radca prawny Poznań"],
    description: "Strona, która buduje zaufanie i przyprowadza klientów szukających pomocy prawnej.",
  },
  {
    title: "RESTAURACJE I LOKALE GASTRONOMICZNE",
    searches: ["Restauracja Kraków", "Pizza na dowóz Gdańsk", "Obiad w centrum Łódź"],
    description: "Menu cyfrowe z QR i rezerwacje online. Klienci szukający miejsca na obiad trafią do Ciebie.",
  },
  {
    title: "SKLEPY INTERNETOWE",
    searches: ["buty damskie sklep", "kosmetyki naturalne online", "sklep z zabawkami"],
    description: "Sklep zoptymalizowany pod sprzedaż i pozycjonowanie. Produkty automatycznie wyświetlają się w wynikach wyszukiwania.",
  },
  {
    title: "FIRMY USŁUGOWE I RZEMIEŚLNICZE",
    searches: ["Ślusarz Olsztyn", "Hydraulik Katowice", "Elektryk Wrocław 24h"],
    description: "Klienci z Twojej okolicy sami Cię znajdą. Lokalne SEO działa automatycznie — Ty tylko odbierasz zlecenia.",
  },
  {
    title: "FIRMY SZKOLENIOWE I EDUKACYJNE",
    searches: ["kurs angielskiego online", "szkolenie BHP dla pracowników", "kurs programowania dla początkujących"],
    description: "Prowadź kursy online i przyjmuj zapisy automatycznie. Osoby szukające szkoleń trafią na Twoją stronę.",
  },
]

const carouselImages: { src: string; alt: string }[] = []

export const TargetAudienceSection = () => {
  return (
    <Box as="section" id="dla-kogo" bg="#F8FAFC" py={{ base: "20", md: "28" }} borderTop="1px solid" borderColor="#E2E8F0">
      <Container maxW="7xl">
        <VStack gap={{ base: "12", md: "16" }}>
          {/* IndustrySearch component (incluye su propio header "Idealne dla") */}
          <IndustrySearch />

          {/* 6 sector cards */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="6" w="full">
            {sectors.map((sector, index) => (
              <Box
                key={index}
                bg="white"
                rounded="xl"
                p={{ base: "7", md: "8" }}
                border="1px solid"
                borderColor="#E2E8F0"
                position="relative"
                _hover={{
                  borderColor: "#2563EB",
                  boxShadow: "0 8px 30px rgba(37, 99, 235, 0.1)",
                  transform: "translateY(-4px)",
                }}
                transition="all 0.3s"
              >
                <VStack align="start" gap="4">
                  <Text
                    fontSize="sm"
                    fontWeight="700"
                    color="#2563EB"
                    letterSpacing="0.05em"
                    lineHeight="1"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Text>

                  <Box>
                    <Heading as="h3" fontSize="lg" fontWeight="700" color="#0F172A" mb="2" lineHeight="1.3">
                      {sector.title}
                    </Heading>
                    <Text color="#64748B" fontSize="sm" lineHeight="1.7">
                      {sector.description}
                    </Text>
                  </Box>

                  <Box bg="#F8FAFC" rounded="lg" p="3" w="full">
                    <Text fontSize="xs" color="#94A3B8" fontWeight="700" textTransform="uppercase" letterSpacing="0.05em" mb="2">
                      Jak Cię znajdują klienci
                    </Text>
                    <VStack gap="1.5" align="stretch">
                      {sector.searches.map((search, k) => (
                        <Flex key={k} gap="2" align="center">
                          <Box w="1.5" h="1.5" rounded="full" bg="#4F46E5" flexShrink={0} />
                          <Text fontSize="xs" color="#1E293B" lineHeight="1.4" fontStyle="italic">
                            „{search}"
                          </Text>
                        </Flex>
                      ))}
                    </VStack>
                  </Box>
                </VStack>
              </Box>
            ))}
          </Grid>

          {/* Banner inferior CTA */}
          <Box
            as="a"
            href="/zamowienie?plan=express"
            display="block"
            w="full"
            rounded="2xl"
            overflow="hidden"
            textDecoration="none"
            transition="all 0.25s"
            _hover={{ transform: "translateY(-2px)", boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <Box
              as="img"
              src="/banner1.webp"
              alt="Skontaktuj się z nami — przygotujemy stronę dopasowaną do Twojej branży"
              w="full"
              h="auto"
              aspectRatio="752 / 240"
              display="block"
              loading="lazy"
              decoding="async"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}