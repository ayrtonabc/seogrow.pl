import { Box, Container, Grid, Heading, Text, VStack, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { pricingPlans } from "../data/pricingPlans"

const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

const ArrowRightIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const LockIcon = ({ size = 12 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
)

export const PricingSection = () => {
  return (
    <Box id="ceny" bg="#F8FAFC" py={{ base: "16", md: "22" }}>
      <Container maxW="6xl">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* Header */}
          <VStack gap="4" textAlign="center" maxW="3xl">
            <Text
              fontSize="11px"
              fontWeight="700"
              color="#4F46E5"
              letterSpacing="0.14em"
              textTransform="uppercase"
            >
              Cennik
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "32px", md: "44px" }}
              fontWeight="800"
              letterSpacing="-0.035em"
              color="#0F172A"
              lineHeight="1.08"
            >
              Wybierz pakiet dla swojej firmy
            </Heading>
            <VStack gap="2" maxW="2xl">
              <Text color="#475569" fontSize="15px" lineHeight="1.55">
                Płacisz jednorazowo za stronę — zostaje Twoja na zawsze.
              </Text>
              <Text color="#475569" fontSize="15px" lineHeight="1.55">
                Co miesiąc płacisz tylko za CMS, hosting i wsparcie. Bez umowy,
                możesz zrezygnować w każdej chwili.
              </Text>
            </VStack>
          </VStack>

          {/* Grid de cards */}
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
            gap={{ base: "4", md: "5" }}
            w="full"
            alignItems="stretch"
          >
            {pricingPlans.map((plan) => {
              const isRec = plan.recommended
              return (
                <Box
                  key={plan.slug}
                  position="relative"
                  bg="white"
                  border="1px solid"
                  borderColor={isRec ? "#4F46E5" : "#E2E8F0"}
                  rounded="xl"
                  overflow="hidden"
                  display="flex"
                  flexDirection="column"
                  transition="all 0.2s ease"
                  boxShadow={isRec ? "0 4px 16px -4px rgba(79, 70, 229, 0.15)" : "none"}
                  _hover={isRec ? {} : { borderColor: "#CBD5E1", boxShadow: "0 4px 12px -4px rgba(15, 23, 42, 0.06)" }}
                >
                  {/* Recommended tag (dentro, no flotante) */}
                  {isRec && (
                    <Box bg="#4F46E5" color="white" py="1.5" textAlign="center" fontSize="10px" fontWeight="700" letterSpacing="0.1em" textTransform="uppercase">
                      Najczęściej wybierany
                    </Box>
                  )}

                  {/* Header: plan name */}
                  <Box px={{ base: "7", md: "8" }} pt={{ base: "7", md: "8" }} pb="3">
                    <Text
                      fontSize="11px"
                      fontWeight="700"
                      color={isRec ? "#4F46E5" : "#94A3B8"}
                      textTransform="uppercase"
                      letterSpacing="0.14em"
                    >
                      {plan.name}
                    </Text>
                  </Box>

                  {/* Title + description */}
                  <VStack
                    align="flex-start"
                    gap="2"
                    px={{ base: "7", md: "8" }}
                    pb="6"
                  >
                    <Heading
                      as="h3"
                      fontSize="20px"
                      fontWeight="700"
                      lineHeight="1.3"
                      color="#0F172A"
                      letterSpacing="-0.02em"
                    >
                      {plan.title}
                    </Heading>
                    <Text fontSize="13px" color="#64748B" lineHeight="1.55" minH="60px">
                      {plan.description}
                    </Text>
                  </VStack>

                  {/* Price block — dos columnas claras */}
                  <Box px={{ base: "7", md: "8" }} pb="6">
                    <Grid templateColumns="1fr 1fr" gap="3">
                      {/* Strona — jednorazowo */}
                      <Box
                        p="3.5"
                        rounded="lg"
                        bg={isRec ? "#FAFAFF" : "#F8FAFC"}
                        border="1px solid"
                        borderColor={isRec ? "#E0E7FF" : "#F1F5F9"}
                      >
                        <Text
                          fontSize="9px"
                          fontWeight="700"
                          color="#64748B"
                          textTransform="uppercase"
                          letterSpacing="0.1em"
                          mb="1.5"
                        >
                          Strona
                        </Text>
                        <Text
                          fontSize="22px"
                          fontWeight="800"
                          color="#0F172A"
                          letterSpacing="-0.03em"
                          lineHeight="1"
                          mb="1"
                        >
                          {plan.sitePrice}
                        </Text>
                        <Text fontSize="10px" color="#64748B" fontWeight="500">
                          jednorazowo
                        </Text>
                      </Box>

                      {/* Abonament — miesięcznie */}
                      <Box
                        p="3.5"
                        rounded="lg"
                        bg={isRec ? "#EEF2FF" : "#F8FAFC"}
                        border="1px solid"
                        borderColor={isRec ? "#C7D2FE" : "#F1F5F9"}
                      >
                        <Text
                          fontSize="9px"
                          fontWeight="700"
                          color={isRec ? "#4338CA" : "#64748B"}
                          textTransform="uppercase"
                          letterSpacing="0.1em"
                          mb="1.5"
                        >
                          Abonament
                        </Text>
                        <Flex align="baseline" gap="0.5" mb="1">
                          <Text
                            fontSize="22px"
                            fontWeight="800"
                            color={isRec ? "#4F46E5" : "#0F172A"}
                            letterSpacing="-0.03em"
                            lineHeight="1"
                          >
                            {plan.monthlyPrice}
                          </Text>
                          <Text fontSize="10px" color="#64748B" fontWeight="500">
                            /mies.
                          </Text>
                        </Flex>
                        <Text fontSize="10px" color="#64748B" fontWeight="500">
                          bez umowy
                        </Text>
                      </Box>
                    </Grid>

                    {/* Gwarancja ceny — cena abonamentu nie wzrośnie dla stałych klientów */}
                    <Flex
                      align="center"
                      gap="1.5"
                      mt="3"
                      px="2.5"
                      py="1.5"
                      rounded="md"
                      bg="#ECFDF5"
                      border="1px solid #A7F3D0"
                      role="note"
                      aria-label="Gwarancja stałej ceny abonamentu"
                    >
                      <Box color="#059669" display="flex" flexShrink={0}>
                        <LockIcon size={12} />
                      </Box>
                      <Text fontSize="11px" color="#047857" fontWeight="600" lineHeight="1.3">
                        Cena abonamentu nigdy nie wzrośnie dla stałych klientów
                      </Text>
                    </Flex>

                    {/* Notas inline: qué incluye cada precio */}
                    <VStack gap="1" mt="3" align="stretch">
                      <Text fontSize="11px" color="#475569" lineHeight="1.4">
                        <Box as="span" color="#94A3B8" mr="1">+</Box>
                        {plan.siteIncludes}
                      </Text>
                      <Text fontSize="11px" color="#475569" lineHeight="1.4">
                        <Box as="span" color="#94A3B8" mr="1">+</Box>
                        {plan.monthlyIncludes}
                      </Text>
                    </VStack>
                  </Box>

                  {/* Divider sutil */}
                  <Box h="1px" bg="#F1F5F9" />

                  {/* Features */}
                  <Box
                    px={{ base: "7", md: "8" }}
                    py="6"
                    flex="1"
                  >
                    <Text
                      fontSize="10px"
                      fontWeight="700"
                      color="#94A3B8"
                      textTransform="uppercase"
                      letterSpacing="0.16em"
                      mb="4"
                    >
                      Co dostajesz
                    </Text>
                    <VStack gap="3" align="stretch">
                      {plan.features.map((feature, j) => (
                        <Flex key={j} gap="2.5" align="start">
                          <Box
                            flexShrink={0}
                            color={isRec ? "#4F46E5" : "#10B981"}
                            mt="2px"
                            display="flex"
                          >
                            <CheckIcon />
                          </Box>
                          <Text
                            fontSize="13px"
                            color="#334155"
                            lineHeight="1.5"
                            fontWeight="500"
                          >
                            {feature}
                          </Text>
                        </Flex>
                      ))}
                      {plan.notIncluded?.map((missing, j) => (
                        <Flex key={`x-${j}`} gap="2.5" align="start" opacity="0.55">
                          <Box
                            flexShrink={0}
                            color="#94A3B8"
                            mt="2px"
                            display="flex"
                          >
                            <XIcon />
                          </Box>
                          <Text
                            fontSize="12px"
                            color="#64748B"
                            lineHeight="1.5"
                            fontWeight="500"
                          >
                            {missing}
                          </Text>
                        </Flex>
                      ))}
                    </VStack>
                  </Box>

                  {/* CTA — pegado al fondo */}
                  <Box p={{ base: "7", md: "8" }} pt="2">
                    <Box
                      as={Link}
                      to={`/zamowienie/${plan.slug}/configure`}
                      display="block"
                      w="full"
                      py="3"
                      px="4"
                      rounded="lg"
                      fontWeight="600"
                      fontSize="13px"
                      textAlign="center"
                      bg={isRec ? "#4F46E5" : "white"}
                      color={isRec ? "white" : "#0F172A"}
                      border="1px solid"
                      borderColor={isRec ? "#4F46E5" : "#E2E8F0"}
                      cursor="pointer"
                      _hover={
                        isRec
                          ? { bg: "#4338CA", borderColor: "#4338CA" }
                          : { borderColor: "#0F172A", bg: "#F8FAFC" }
                      }
                      transition="all 0.18s ease"
                    >
                      <Flex align="center" justify="center" gap="2">
                        <span>{`Wybieram ${plan.name}`}</span>
                        <Box display="flex"><ArrowRightIcon /></Box>
                      </Flex>
                    </Box>
                    <Text fontSize="11px" color="#94A3B8" textAlign="center" mt="3" lineHeight="1.4">
                      Strona zostaje Twoja · Wsparcie po polsku · Bez umowy
                    </Text>
                  </Box>
                </Box>
              )
            })}
          </Grid>

          {/* Bottom CTA — minimalista */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap="4"
            p={{ base: "5", md: "6" }}
            bg="white"
            border="1px solid #E2E8F0"
            rounded="xl"
            maxW="3xl"
            textAlign={{ base: "center", md: "left" }}
          >
            <Box>
              <Text fontSize="14px" fontWeight="700" color="#0F172A" mb="0.5">
                Nie wiesz, który plan?
              </Text>
              <Text fontSize="13px" color="#475569" lineHeight="1.5">
                15 minut rozmowy i powiemy Ci szczerze, czego naprawdę potrzebujesz.
              </Text>
            </Box>
            <Box
              as="a"
              href="tel:+48517105423"
              display="inline-flex"
              alignItems="center"
              gap="2"
              bg="#0F172A"
              color="white"
              px="5"
              py="2.5"
              rounded="lg"
              fontWeight="600"
              fontSize="13px"
              textDecoration="none"
              flexShrink={0}
              _hover={{ bg: "#1E293B" }}
              transition="all 0.18s ease"
            >
              Zadzwoń: 517 105 423
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}