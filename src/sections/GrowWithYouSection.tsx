import { Box, Container, Flex, Heading, Text, VStack, HStack } from "@chakra-ui/react"
import { SECTION_TITLE_PROPS, SECTION_TITLE_COLOR_DARK } from "../lib/typography"

const etapas = [
  {
    icon: "📄",
    title: "Prosta strona firmowa",
    desc: "To, czego potrzebujesz dziś — wizytówka, która pracuje dla Twojej firmy 24/7.",
  },
  {
    icon: "📅",
    title: "Rezerwacje i terminy",
    desc: "Kiedy telefon nie wystarcza — klienci sami wybierają termin online.",
  },
  {
    icon: "🛒",
    title: "Sklep online",
    desc: "Kiedy zaczniesz sprzedawać przez internet — bez zmiany platformy.",
  },
  {
    icon: "✍️",
    title: "Blog i treści",
    desc: "Żeby Google sam przyprowadzał klientów — bez płacenia za reklamy.",
  },
  {
    icon: "🎓",
    title: "Kursy, CRM, automatyzacje",
    desc: "Kiedy Twoja firma urośnie do skali — wszystko aktywujesz w tej samej stronie.",
  },
]

export const GrowWithYouSection = () => {
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
              Rośnie razem z Tobą
            </Text>
            <Heading
              as="h2"
              {...SECTION_TITLE_PROPS}
              color={SECTION_TITLE_COLOR_DARK}
            >
              Zaczynasz od prostej strony.
              <br />
              <Box as="span" color="#4F46E5">Kiedy Twoja firma rośnie</Box>{" "}
              — Twoja strona rośnie razem z nią.
            </Heading>
            <Text color="#475569" fontSize="md" lineHeight="1.6" maxW="2xl">
              Nie musisz od razu mieć sklepu, rezerwacji ani bloga. Włączasz je,
              kiedy naprawdę ich potrzebujesz. Bez zmiany platformy, bez nowego projektu.
            </Text>
          </VStack>

          <VStack gap="0" w="full" maxW="3xl" position="relative">
            {/* Línea vertical conectora */}
            <Box
              position="absolute"
              left={{ base: "19px", md: "50%" }}
              top="0"
              bottom="0"
              w="2px"
              bg="linear-gradient(180deg, #C7D2FE 0%, #4F46E5 100%)"
              transform={{ base: "none", md: "translateX(-50%)" }}
              display={{ base: "block", md: "block" }}
            />

            {etapas.map((etapa, i) => (
              <Flex
                key={i}
                w="full"
                direction={{ base: "row", md: i % 2 === 0 ? "row" : "row-reverse" }}
                align="center"
                gap={{ base: "4", md: "8" }}
                py={{ base: "4", md: "6" }}
              >
                {/* Número + ícono */}
                <HStack flex="1" justify={{ base: "flex-start", md: "flex-end" }} gap="4">
                  <Box
                    w="10"
                    h="10"
                    rounded="full"
                    bg="white"
                    border="2px solid #4F46E5"
                    color="#4F46E5"
                    fontWeight="800"
                    fontSize="sm"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    zIndex={1}
                    position="relative"
                    boxShadow="0 0 0 6px white"
                  >
                    {i + 1}
                  </Box>
                  {i % 2 === 0 && (
                    <Box display={{ base: "none", md: "block" }} flex="1" />
                  )}
                </HStack>

                {/* Card */}
                <Box
                  flex="1"
                  p={{ base: "4", md: "5" }}
                  bg="white"
                  border="1px solid #E2E8F0"
                  rounded="xl"
                  _hover={{ borderColor: "#C7D2FE", boxShadow: "0 4px 14px -4px rgba(79, 70, 229, 0.15)" }}
                  transition="all 0.2s"
                >
                  <HStack gap="3" align="start">
                    <Text fontSize="2xl" flexShrink={0} mt="-2px">
                      {etapa.icon}
                    </Text>
                    <VStack align="start" gap="1">
                      <Text fontSize="md" fontWeight="700" color="#0F172A" lineHeight="1.3">
                        {etapa.title}
                      </Text>
                      <Text fontSize="sm" color="#475569" lineHeight="1.5">
                        {etapa.desc}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </Flex>
            ))}
          </VStack>

          <Box
            bg="#F8FAFC"
            p={{ base: "6", md: "8" }}
            rounded="2xl"
            border="1px solid #E2E8F0"
            textAlign="center"
            maxW="3xl"
            w="full"
          >
            <Text fontSize="md" color="#0F172A" fontWeight="600" lineHeight="1.5">
              Większość firm po 2-3 latach zaczyna od zera:{" "}
              <Box as="span" color="#94A3B8" textDecoration="line-through">
                nowa strona, nowy budżet, nowy chaos.
              </Box>
              <br />
              <Box as="span" color="#4F46E5" fontWeight="800">
                Z nami tego nie robisz.
              </Box>{" "}
              Twoja strona żyje tak długo, jak Twoja firma — i cały czas przyprowadza nowych klientów.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
