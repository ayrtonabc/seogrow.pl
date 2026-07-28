import { Box, Container, Heading, Text, SimpleGrid, HStack, VStack } from "@chakra-ui/react"
import { SECTION_TITLE_PROPS } from "../lib/typography"

type IncludedItem = {
  title: string
  description: string
}

const items: IncludedItem[] = [
  {
    title: "Szybka strona",
    description: "Twoi klienci nie czekają — strona ładuje się w ułamku sekundy.",
  },
  {
    title: "Bezpieczna i zawsze online",
    description: "Strona działa 24/7 i jest chroniona przed atakami. Nie musisz się o nic martwić — my o wszystko dbamy.",
  },
  {
    title: "Responsywna i mobilna",
    description: "Strona prezentuje się świetnie na każdym urządzeniu — a to tam klienci Cię szukają.",
  },
  {
    title: "Klienci znajdą Cię w Google",
    description: "Twoja strona jest zbudowana tak, by Google prezentował ją dokładnie tym, którzy szukają Twoich usług.",
  },
  {
    title: "Aktualizacje bez stresu",
    description: "Zmiana ceny, nowe zdjęcie, dodatkowa usługa — zrobisz to w 30 sekund, bez pomocy programisty.",
  },
  {
    title: "Jesteśmy, gdy nas potrzebujesz",
    description: "Piszesz albo dzwonisz — odpowiadamy w ciągu godziny w dni robocze.",
  },
]

export const StatsSection = () => {
  return (
    <Box
      as="section"
      bg="#191C32"
      py={{ base: "20", md: "28" }}
      position="relative"
      overflow="hidden"
      aria-label="Co jest w każdym planie"
    >
      {/* Decoración: grid sutil + glow superior */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="600px"
        h="600px"
        bg="radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, transparent 60%)"
        filter="blur(60px)"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex="1">
        <Box textAlign="center" mb={{ base: "12", md: "16" }} maxW="2xl" mx="auto">
          <VStack gap="4">
            <Text
              fontSize="12px"
              fontWeight="700"
              color="#A5B4FC"
              letterSpacing="0.12em"
              textTransform="uppercase"
            >
              Co jest w każdym planie
            </Text>
            <Heading
              as="h2"
              {...SECTION_TITLE_PROPS}
              color="white"
            >
              Wszystko w cenie —{" "}
              <Box as="span" color="#A5B4FC">bez ukrytych opłat</Box>
            </Heading>
          </VStack>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={{ base: "3", md: "4" }}>
          {items.map((item, i) => (
            <Box
              key={i}
              p={{ base: "7", md: "8" }}
              bg="rgba(255, 255, 255, 0.04)"
              rounded="xl"
              border="1px solid rgba(255, 255, 255, 0.08)"
              transition="all 0.22s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                bg: "rgba(255, 255, 255, 0.06)",
                borderColor: "rgba(165, 180, 252, 0.25)",
                transform: "translateY(-2px)",
              }}
            >
              <HStack gap="4" align="start">
                <Text
                  fontSize="32px"
                  fontWeight="800"
                  color="#A5B4FC"
                  lineHeight="1"
                  letterSpacing="-0.04em"
                  flexShrink={0}
                  minW="44px"
                >
                  {String(i + 1).padStart(2, "0")}
                </Text>
                <Box>
                  <Text
                    fontSize="17px"
                    fontWeight="700"
                    color="white"
                    mb="2"
                    letterSpacing="-0.015em"
                    lineHeight="1.3"
                  >
                    {item.title}
                  </Text>
                  <Text fontSize="14px" color="rgba(255, 255, 255, 0.65)" lineHeight="1.6">
                    {item.description}
                  </Text>
                </Box>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}