// src/sections/CoverageSection.tsx
// Bloque de CONVERSIÓN para la home: 3 planes de pricing.
// La cobertura geográfica (97 ciudades, 13 voivodatos) ya está en el trust
// badge del hero y en el schema Organization — repetirla aquí no aporta
// valor al cliente que va a comprar.

import { Box, Container, Heading, Text, SimpleGrid, HStack, VStack, Flex, Badge } from "@chakra-ui/react"
import { SECTION_TITLE_PROPS } from "../lib/typography"
import { Link as RouterLink } from "react-router-dom"
import { pricingPlans } from "../data/pricingPlans"

const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const ArrowRightIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

export const CoverageSection = () => {
  return (
    <Box as="section" id="ceny" py={{ base: "16", md: "24" }} bg="#0F1124" position="relative" overflow="hidden">
      {/* Halo decorativo */}
      <Box
        position="absolute"
        top="-200px"
        left="50%"
        transform="translateX(-50%)"
        w="900px"
        h="500px"
        bg="radial-gradient(ellipse, rgba(99, 102, 241, 0.22) 0%, rgba(99, 102, 241, 0) 70%)"
        filter="blur(60px)"
        pointerEvents="none"
      />

      <Container maxW="6xl" position="relative" zIndex="1">
        <VStack gap={{ base: "10", md: "12" }} align="stretch">
          {/* ── HEADER ──────────────────────────────────────────── */}
          <VStack gap="3" align="center" textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="700"
              color="#A5B4FC"
              textTransform="uppercase"
              letterSpacing="0.14em"
            >
              Ile to kosztuje? Kiedy startuje?
            </Text>
            <Heading
              as="h2"
              {...SECTION_TITLE_PROPS}
              color="white"
            >
              Trzy plany. Dopasowane do Twojej branży
              <Box as="span" color="#A5B4FC"> i Twojego regionu.</Box>
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="rgba(255,255,255,0.7)" lineHeight="1.6" maxW="2xl">
              Każda firma pracuje inaczej. Dlatego każda strona jest inna — optymalizujemy pod lokalne SEO, specyfikę Twojej branży i zachowania klientów w Twoim regionie. Wybierz plan, w 5 dni masz gotową stronę.
            </Text>
          </VStack>

          {/* ── MINI-PRICING (3 cards) ──────────────────────────── */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "4", md: "5" }} w="full">
            {pricingPlans.map((plan) => {
              const isRec = plan.recommended
              return (
                <Box
                  key={plan.slug}
                  position="relative"
                  bg={isRec ? "white" : "rgba(255, 255, 255, 0.04)"}
                  border="1px solid"
                  borderColor={isRec ? "#4F46E5" : "rgba(255, 255, 255, 0.1)"}
                  rounded="xl"
                  p={{ base: "6", md: "7" }}
                  display="flex"
                  flexDirection="column"
                  transition="all 0.22s"
                  _hover={{
                    transform: "translateY(-3px)",
                    borderColor: isRec ? "#4F46E5" : "rgba(165, 180, 252, 0.4)",
                  }}
                  boxShadow={isRec ? "0 16px 40px -12px rgba(79, 70, 229, 0.5)" : "none"}
                >
                  {isRec && (
                    <Badge
                      position="absolute"
                      top="-10px"
                      left="50%"
                      transform="translateX(-50%)"
                      bg="#4F46E5"
                      color="white"
                      fontSize="9px"
                      fontWeight="700"
                      letterSpacing="0.1em"
                      px="3"
                      py="1"
                      rounded="full"
                      textTransform="uppercase"
                    >
                      Najczęściej wybierany
                    </Badge>
                  )}

                  <Text
                    fontSize="10px"
                    fontWeight="700"
                    color={isRec ? "#4F46E5" : "#A5B4FC"}
                    textTransform="uppercase"
                    letterSpacing="0.14em"
                    mb="2"
                  >
                    {plan.name}
                  </Text>

                  <Text
                    fontSize="lg"
                    fontWeight="700"
                    color={isRec ? "#0F172A" : "white"}
                    lineHeight="1.2"
                    mb="3"
                    letterSpacing="-0.02em"
                  >
                    {plan.title}
                  </Text>

                  {/* Precio destacado */}
                  <Flex align="baseline" gap="1.5" mb="1">
                    <Text
                      fontSize="3xl"
                      fontWeight="800"
                      color={isRec ? "#0F172A" : "white"}
                      letterSpacing="-0.04em"
                      lineHeight="1"
                    >
                      {plan.sitePrice.toLocaleString("pl-PL")} zł
                    </Text>
                    <Text fontSize="xs" color={isRec ? "#64748B" : "rgba(255,255,255,0.55)"} fontWeight="500">
                      jednorazowo
                    </Text>
                  </Flex>

                  <Flex align="baseline" gap="1.5" mb="5">
                    <Text
                      fontSize="md"
                      fontWeight="700"
                      color={isRec ? "#4F46E5" : "#A5B4FC"}
                    >
                      + {plan.monthlyPrice} zł/mies.
                    </Text>
                    <Text fontSize="xs" color={isRec ? "#64748B" : "rgba(255,255,255,0.55)"}>
                      bez umowy
                    </Text>
                  </Flex>

                  {/* 3 features clave */}
                  <VStack gap="2" align="stretch" mb="5" flex="1">
                    {plan.features.slice(0, 3).map((feature, j) => (
                      <HStack key={j} align="start" gap="2">
                        <Box
                          flexShrink={0}
                          color={isRec ? "#4F46E5" : "#6EE7B7"}
                          mt="2px"
                          display="flex"
                        >
                          <CheckIcon size={12} />
                        </Box>
                        <Text
                          fontSize="xs"
                          color={isRec ? "#475569" : "rgba(255,255,255,0.75)"}
                          lineHeight="1.45"
                        >
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>

                  <Box
                    as={RouterLink}
                    to={`/zamowienie/${plan.slug}/configure`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="1.5"
                    w="full"
                    py="2.5"
                    rounded="lg"
                    fontWeight="700"
                    fontSize="13px"
                    textDecoration="none"
                    bg={isRec ? "#4F46E5" : "transparent"}
                    color="white"
                    border="1px solid"
                    borderColor={isRec ? "#4F46E5" : "rgba(165, 180, 252, 0.4)"}
                    _hover={isRec ? { bg: "#4338CA", borderColor: "#4338CA" } : { bg: "rgba(255,255,255,0.06)", borderColor: "#A5B4FC" }}
                    transition="all 0.18s"
                  >
                    Wybieram {plan.name}
                    <Box display="flex"><ArrowRightIcon /></Box>
                  </Box>
                </Box>
              )
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
