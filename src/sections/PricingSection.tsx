// src/sections/PricingSection.tsx
// Cennik — 3 plany. Diseño claro, sin fondos oscuros, sin tecnicismos.
// Cada card cabe en el viewport (scroll natural sin trampas). Mismo estilo
// de headings que el hero (weight 600 base + 700 en palabra destacada).

import { Box, Container, Grid, Heading, Text, VStack, HStack, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { pricingPlans } from "../data/pricingPlans"

const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const SparkleIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zM5 16l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3zm14 0l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
  </svg>
)

const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
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

const ShieldIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const PlanCard = ({ plan }: { plan: (typeof pricingPlans)[number] }) => {
  const isRec = plan.recommended
  return (
    <Box
      position="relative"
      bg="bg.canvas"
      borderWidth="1px"
      borderColor={isRec ? "accent.200" : "border.default"}
      borderRadius="2xl"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      transition="all 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
      _hover={{ transform: "translateY(-3px)", boxShadow: "lg", borderColor: isRec ? "accent.400" : "border.muted" }}
      className="wix-fade-up-1"
    >
      {/* Badge superior — solo el recomendado, integrado en la card */}
      {isRec && (
        <Box bg="accent.600" color="white" py="2" textAlign="center" fontSize="xs" fontWeight="700" letterSpacing="0.08em" textTransform="uppercase" display="flex" alignItems="center" justifyContent="center" gap="1.5">
          <SparkleIcon size={12} />
          {plan.badge || "Najczęściej wybierany"}
        </Box>
      )}

      {/* Header: nombre + para quién */}
      <VStack align="flex-start" gap="2" px={{ base: "6", md: "7" }} pt={{ base: "7", md: "8" }} pb="4">
        <Text fontSize="11px" fontWeight="700" color="accent.600" textTransform="uppercase" letterSpacing="0.12em">
          {plan.name}
        </Text>
        <Heading as="h3" fontSize="20px" fontWeight="700" color="fg.default" letterSpacing="-0.02em" lineHeight="1.3">
          {plan.title}
        </Heading>
        <Text fontSize="13px" color="fg.muted" lineHeight="1.55" minH="60px">
          {plan.description}
        </Text>
      </VStack>

      {/* Bloque de precios: 2 columnas claras */}
      <Box px={{ base: "6", md: "7" }} pb="5">
        <Grid templateColumns="1fr 1fr" gap="3">
          {/* Proyecto (pago único) */}
          <Box p="4" borderRadius="xl" bg="bg.subtle" borderWidth="1px" borderColor="border.subtle">
            <HStack gap="1.5" mb="2" color="fg.muted">
              <ShieldIcon size={13} />
              <Text fontSize="10px" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em">
                Projekt strony
              </Text>
            </HStack>
            <Text fontSize="22px" fontWeight="700" color="fg.default" letterSpacing="-0.02em" lineHeight="1">
              {plan.sitePrice} zł
            </Text>
            <Text fontSize="11px" color="fg.muted" fontWeight="500" mt="1">
              płatne raz
            </Text>
          </Box>

          {/* Mensualidad */}
          <Box p="4" borderRadius="xl" bg={isRec ? "accent.50" : "bg.subtle"} borderWidth="1px" borderColor={isRec ? "accent.200" : "border.subtle"}>
            <HStack gap="1.5" mb="2" color={isRec ? "accent.700" : "fg.muted"}>
              <Text fontSize="10px" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em">
                Opieka co miesiąc
              </Text>
            </HStack>
            <Flex align="baseline" gap="1">
              <Text fontSize="22px" fontWeight="700" color={isRec ? "accent.700" : "fg.default"} letterSpacing="-0.02em" lineHeight="1">
                {plan.monthlyPrice} zł
              </Text>
              <Text fontSize="11px" color="fg.muted" fontWeight="500">
                /mies.
              </Text>
            </Flex>
            <Text fontSize="11px" color="fg.muted" fontWeight="500" mt="1">
              bez umowy
            </Text>
          </Box>
        </Grid>

        {/* Garantía de precio: mensaje PyME claro */}
        <HStack
          mt="3"
          px="3"
          py="2"
          borderRadius="md"
          bg="success.50"
          borderWidth="1px"
          borderColor="#A7F3D0"
          align="center"
          gap="2"
        >
          <Box color="success.600" flexShrink={0}>
            <LockIcon />
          </Box>
          <Text fontSize="11px" color="success.700" fontWeight="600" lineHeight="1.4">
            Twoja cena miesięczna zostaje taka sama co rok
          </Text>
        </HStack>
      </Box>

      {/* Qué incluye cada precio */}
      <Box px={{ base: "6", md: "7" }} pb="5">
        <VStack gap="1.5" align="stretch">
          <Text fontSize="12px" color="fg.default" lineHeight="1.5">
            <Box as="span" color="accent.600" fontWeight="700" mr="1.5">✓</Box>
            {plan.siteIncludes}
          </Text>
          <Text fontSize="12px" color="fg.default" lineHeight="1.5">
            <Box as="span" color="accent.600" fontWeight="700" mr="1.5">✓</Box>
            {plan.monthlyIncludes}
          </Text>
        </VStack>
      </Box>

      {/* Features */}
      <Box px={{ base: "6", md: "7" }} pt="4" pb="6" borderTop="1px solid" borderColor="border.subtle" flex="1">
        <Text fontSize="11px" fontWeight="700" color="fg.muted" textTransform="uppercase" letterSpacing="0.12em" mb="3" pt="4">
          Wszystko, co dostajesz
        </Text>
        <VStack gap="2.5" align="stretch">
          {plan.features.map((feature, j) => (
            <HStack key={j} gap="2.5" align="start">
              <Box flexShrink={0} color="accent.600" mt="2px">
                <CheckIcon size={14} />
              </Box>
              <Text fontSize="13px" color="fg.default" lineHeight="1.5" fontWeight="500">
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>
      </Box>

      {/* CTA pegado al fondo de la card */}
      <Box p={{ base: "6", md: "7" }} pt="2">
        <Box
          as={Link}
          to={`/zamowienie/${plan.slug}/configure`}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="2"
          w="full"
          h="12"
          borderRadius="full"
          fontWeight="600"
          fontSize="14px"
          textDecoration="none"
          bg={isRec ? "accent.600" : "fg.default"}
          color="white"
          _hover={isRec ? { bg: "accent.700", transform: "translateY(-1px)" } : { bg: "bg.darkSubtle", transform: "translateY(-1px)" }}
          transition="all 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
        >
          Wybieram {plan.name}
          <ArrowRightIcon />
        </Box>
        <Text fontSize="11px" color="fg.muted" textAlign="center" mt="2.5" lineHeight="1.4">
          Strona zostaje Twoja · Bez umowy
        </Text>
      </Box>
    </Box>
  )
}

export const PricingSection = () => {
  return (
    <Box id="ceny" bg="bg.cream" py={{ base: "20", md: "28" }} position="relative" overflow="hidden">
      <Container maxW="7xl" position="relative" zIndex="1">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* Header — tipografía idéntica al hero */}
          <VStack gap="5" textAlign="center" maxW="3xl" mx="auto" className="wix-fade-up">
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="rgba(13, 148, 136, 0.1)"
              borderWidth="1px"
              borderColor="rgba(13, 148, 136, 0.25)"
              borderRadius="full"
            >
              <Box w="1.5" h="1.5" borderRadius="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" letterSpacing="0.08em" textTransform="uppercase" color="accent.700">
                Cennik
              </Text>
            </HStack>

            <Heading
              as="h2"
              fontWeight="600"
              color="fg.default"
              letterSpacing="-0.015em"
              lineHeight="1.1"
              fontSize={{ base: "32px", sm: "38px", md: "44px", lg: "50px" }}
              maxW="720px"
            >
              Trzy plany.{" "}
              <Box as="span" color="accent.700" fontWeight="700">
                Jeden zaczyna dziś.
              </Box>
            </Heading>

            <VStack gap="2" maxW="2xl" className="wix-fade-up-2">
              <Text fontSize="lg" color="fg.muted" lineHeight="1.6">
                <Box as="span" fontWeight="700" color="fg.default">Jasny cennik. Bez haczyków.</Box>{" "}
                Płacisz raz za stronę, a potem tylko comiesięczną opłatę za całą platformę: panel, hosting, domenę, SSL i wsparcie.
              </Text>
              <Text fontSize="md" color="fg.muted" lineHeight="1.5">
                Wiesz, za co płacisz — od pierwszego dnia, bez ukrytych faktur.
              </Text>
            </VStack>
          </VStack>

          {/* Banner "co jest w cenie" — refuerza plataforma única */}
          <Box
            w="full"
            maxW="3xl"
            mx="auto"
            p={{ base: "5", md: "6" }}
            borderRadius="2xl"
            bg="rgba(13, 148, 136, 0.06)"
            borderWidth="1px"
            borderColor="rgba(13, 148, 136, 0.18)"
            className="wix-fade-up-2"
          >
            <HStack gap="3" align="start" wrap="wrap" justify="center">
              <HStack gap="2" align="center">
                <Box w="6" h="6" rounded="full" bg="accent.600" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </Box>
                <Text fontSize="sm" fontWeight="600" color="fg.default">Hosting</Text>
              </HStack>
              <HStack gap="2" align="center">
                <Box w="6" h="6" rounded="full" bg="accent.600" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </Box>
                <Text fontSize="sm" fontWeight="600" color="fg.default">Domena</Text>
              </HStack>
              <HStack gap="2" align="center">
                <Box w="6" h="6" rounded="full" bg="accent.600" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </Box>
                <Text fontSize="sm" fontWeight="600" color="fg.default">SSL</Text>
              </HStack>
              <HStack gap="2" align="center">
                <Box w="6" h="6" rounded="full" bg="accent.600" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </Box>
                <Text fontSize="sm" fontWeight="600" color="fg.default">CMS</Text>
              </HStack>
              <HStack gap="2" align="center">
                <Box w="6" h="6" rounded="full" bg="accent.600" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </Box>
                <Text fontSize="sm" fontWeight="600" color="fg.default">SEO</Text>
              </HStack>
              <HStack gap="2" align="center">
                <Box w="6" h="6" rounded="full" bg="accent.600" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </Box>
                <Text fontSize="sm" fontWeight="600" color="fg.default">Wsparcie</Text>
              </HStack>
            </HStack>
          </Box>

          {/* 3 cards — todas claras, mismo fondo */}
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
            gap={{ base: "5", md: "6" }}
            w="full"
            alignItems="stretch"
          >
            {pricingPlans.map((plan) => (
              <PlanCard key={plan.slug} plan={plan} />
            ))}
          </Grid>

          {/* Banda de tranquilidad: precio fijo, módulos a la carta */}
          <Box
            mt={{ base: "4", md: "6" }}
            p={{ base: "6", md: "7" }}
            borderRadius="2xl"
            bg="bg.canvas"
            borderWidth="1px"
            borderColor="border.subtle"
            maxW="3xl"
            w="full"
            className="wix-fade-up-2"
          >
            <VStack gap="3" textAlign="center">
              <Text fontSize="md" fontWeight="700" color="fg.default" lineHeight="1.4">
                Nie zaczynasz od nowa co 2 lata.
              </Text>
              <Text fontSize="sm" color="fg.muted" lineHeight="1.55" maxW="2xl">
                Jak Twoja firma rośnie, dokupujesz moduły: sklep, rezerwacje, blog, kursy, wielojęzyczność. Bez zmiany strony, bez nowego projektu, bez stresu.
              </Text>
            </VStack>
          </Box>

          {/* CTA inferior — humano, sin tecnicismos */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap="4"
            p={{ base: "6", md: "7" }}
            borderRadius="2xl"
            bg="bg.canvas"
            borderWidth="1px"
            borderColor="border.default"
            maxW="3xl"
            w="full"
            textAlign={{ base: "center", md: "left" }}
            className="wix-fade-up-3"
          >
            <Box>
              <Text fontSize="md" fontWeight="700" color="fg.default" mb="1">
                Nie wiesz, który plan?
              </Text>
              <Text fontSize="sm" color="fg.muted" lineHeight="1.5">
                15 minut rozmowy i powiemy Ci szczerze, czego naprawdę potrzebujesz.
              </Text>
            </Box>
            <Box
              as="a"
              href="tel:+48517105423"
              display="inline-flex"
              alignItems="center"
              gap="2"
              bg="fg.default"
              color="white"
              px="6"
              h="12"
              borderRadius="full"
              fontWeight="600"
              fontSize="14px"
              textDecoration="none"
              flexShrink={0}
              _hover={{ bg: "bg.darkSubtle", transform: "translateY(-1px)" }}
              transition="all 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
            >
              <PhoneIcon />
              Zadzwoń: 517 105 423
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}
