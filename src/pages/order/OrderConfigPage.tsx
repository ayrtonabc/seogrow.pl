// src/pages/order/OrderConfigPage.tsx — Krok 1: konfiguracja planu, modułów i płatności
import { useEffect, useMemo, useState } from "react"
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Link, useNavigate, useParams } from "react-router-dom"
import {
  formatPLN,
  grossTotal,
  monthlyRate,
  MONTHLY_BILLING_SURCHARGE_PERCENT,
  pricingPlans,
  VAT_PERCENT,
  vatAmount,
} from "../../data/pricingPlans"
import { availableModules } from "../../data/modules"
import {
  loadConfig,
  saveConfig,
  type BillingCycle,
} from "../../data/orderStorage"
import { OrderLayout } from "./OrderLayout"

const BillingToggle = ({
  value,
  onChange,
}: {
  value: BillingCycle
  onChange: (v: BillingCycle) => void
}) => (
  <Box
    role="radiogroup"
    display="inline-flex"
    bg="#F1F5F9"
    rounded="full"
    p="1"
    border="1px solid #E2E8F0"
  >
    {(["annual", "monthly"] as BillingCycle[]).map((v) => {
      const isActive = value === v
      return (
        <Box
          key={v}
          as="button"
          type="button"
          role="radio"
          aria-checked={isActive}
          onClick={() => onChange(v)}
          px={{ base: "4", md: "6" }}
          py="2.5"
          rounded="full"
          fontSize="sm"
          fontWeight="700"
          bg={isActive ? "white" : "transparent"}
          color={isActive ? "#0F172A" : "#64748B"}
          boxShadow={isActive ? "0 1px 3px rgba(15, 23, 42, 0.1)" : "none"}
          transition="all 0.2s"
          cursor="pointer"
        >
          {v === "annual" ? "Płatność roczna" : "Płatność co miesiąc"}
        </Box>
      )
    })}
  </Box>
)

export const OrderConfigPage = () => {
  const { plan: planSlug } = useParams<{ plan: string }>()
  const navigate = useNavigate()

  const plan = useMemo(
    () => pricingPlans.find((p) => p.slug === planSlug),
    [planSlug],
  )

  const [billing, setBilling] = useState<BillingCycle>("annual")
  const [selected, setSelected] = useState<Set<string>>(() => {
    if (!plan) return new Set()
    return new Set(
      availableModules.filter((m) => m.includedIn.includes(plan.slug as any)).map((m) => m.id),
    )
  })

  useEffect(() => {
    if (!plan) return
    const saved = loadConfig(plan.slug)
    if (saved) {
      setBilling(saved.billing)
      setSelected(new Set(saved.modules))
    }
  }, [plan])

  if (!plan) {
    return (
      <Box textAlign="center" py="20">
        <Heading size="lg" mb="3">Plan nie znaleziony</Heading>
        <Text color="#64748B" mb="6">Wróć na stronę główną i wybierz plan.</Text>
        <Button as={Link} to="/" bg="#4F46E5" color="white" _hover={{ bg: "#4338CA" }}>
          Wróć na stronę główną
        </Button>
      </Box>
    )
  }

  const toggleModule = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        const mod = availableModules.find((m) => m.id === id)
        if (mod?.includedIn.includes(plan.slug as any)) return prev
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const handleContinue = () => {
    saveConfig({
      planSlug: plan.slug,
      billing,
      modules: Array.from(selected),
      updatedAt: new Date().toISOString(),
    })
    navigate(`/zamowienie/${plan.slug}/payment`)
  }

  const setup = plan.sitePrice
  const monthlyBasePrice = plan.monthlyPrice
  const monthlyWithSurcharge = monthlyRate(plan, "monthly")
  // Para el sidebar y la lógica: usa el valor real del billing elegido.
  const monthlyTotal = monthlyRate(plan, billing)
  // Roczna: setup + 12 miesięcy w cenie bazowej. Miesięczna: setup + primera wpłata con recargo.
  const firstInvoice = billing === "annual"
    ? setup + plan.monthlyPrice * 12
    : setup + monthlyTotal
  // Kwota abonamentu rocznego (12 × base) — pokazywana w subtotal, żeby użytkownik widział skąd bierze się "Do zapłaty teraz"
  const annualSubscription = plan.monthlyPrice * 12
  const netTotal = firstInvoice
  const vat = vatAmount(netTotal)
  const gross = grossTotal(netTotal)

  return (
    <OrderLayout step="configure">
      <Grid templateColumns={{ base: "1fr", lg: "1.55fr 1fr" }} gap={{ base: "6", lg: "10" }}>
        {/* Lewa kolumna */}
        <GridItem>
          <VStack align="stretch" gap={{ base: "5", md: "6" }}>
            {/* Wybrany plan */}
            <Box
              bg="white"
              rounded="2xl"
              border="1px solid #E2E8F0"
              p={{ base: "6", md: "8" }}
              boxShadow="0 1px 3px rgba(15, 23, 42, 0.04)"
            >
              <Flex align="center" justify="space-between" gap="3" mb="5" wrap="wrap">
                <HStack gap="3">
                  <Flex
                    w="11"
                    h="11"
                    rounded="xl"
                    bg="#EEF2FF"
                    color="#4F46E5"
                    align="center"
                    justifyContent="center"
                    fontSize="lg"
                    fontWeight="800"
                  >
                    {plan.name[0]}
                  </Flex>
                  <VStack align="flex-start" gap="0">
                    <Text
                      fontSize="xs"
                      color="#64748B"
                      textTransform="uppercase"
                      letterSpacing="0.1em"
                      fontWeight="700"
                    >
                      Wybrany plan
                    </Text>
                    <Heading as="h1" size="lg" color="#0F172A" lineHeight="1">
                      {plan.name}
                    </Heading>
                  </VStack>
                </HStack>
                <Box
                  as={Link}
                  to="/#ceny"
                  fontSize="sm"
                  color="#4F46E5"
                  fontWeight="700"
                  textDecoration="underline"
                  textUnderlineOffset="3px"
                >
                  Zmień plan
                </Box>
              </Flex>
              <Text color="#475569" fontSize="sm" lineHeight="1.6" mb="5">
                {plan.description}
              </Text>
              <VStack align="stretch" gap="2.5">
                {plan.features.slice(0, 5).map((f, i) => (
                  <HStack key={i} gap="3" align="flex-start">
                    <Flex
                      w="5"
                      h="5"
                      rounded="full"
                      bg="#D1FAE5"
                      color="#059669"
                      align="center"
                      justifyContent="center"
                      flexShrink={0}
                      mt="0.5"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </Flex>
                    <Text fontSize="sm" color="#0F172A" lineHeight="1.5">{f}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>

            {/* Płatność */}
            <Box
              bg="white"
              rounded="2xl"
              border="1px solid #E2E8F0"
              p={{ base: "6", md: "8" }}
              boxShadow="0 1px 3px rgba(15, 23, 42, 0.04)"
            >
              <Heading as="h2" size="md" mb="2" color="#0F172A">
                Jak chcesz opłacać CMS?
              </Heading>
              <Text fontSize="sm" color="#475569" mb="6" lineHeight="1.6">
                Przy <Box as="strong" color="#0F172A">płatności rocznej</Box> płacisz 12 miesięcy
                z góry w cenie bazowej ({formatPLN(plan.monthlyPrice)}/mies.). Przy{" "}
                <Box as="strong" color="#0F172A">płatności co miesiąc</Box> cena miesięczna
                wzrasta o {MONTHLY_BILLING_SURCHARGE_PERCENT}% ({formatPLN(monthlyTotal)}/mies.) i
                płacisz setup + jedną wpłatę.
              </Text>
              <Flex justify="center" mb="6">
                <BillingToggle value={billing} onChange={setBilling} />
              </Flex>
              <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} gap="3">
                <Box
                  rounded="xl"
                  p="5"
                  border="2px solid"
                  borderColor={billing === "annual" ? "#4F46E5" : "#E2E8F0"}
                  bg={billing === "annual" ? "#FAFBFF" : "white"}
                  transition="all 0.2s"
                  cursor="pointer"
                  onClick={() => setBilling("annual")}
                  _hover={billing !== "annual" ? { borderColor: "#CBD5E1" } : undefined}
                >
                  <HStack gap="2" mb="1">
                    <Text
                      fontSize="xs"
                      color="#4F46E5"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                    >
                      Roczna
                    </Text>
                    <Box
                      fontSize="2xs"
                      fontWeight="800"
                      color="#059669"
                      bg="#D1FAE5"
                      rounded="full"
                      px="2"
                      py="0.5"
                    >
                      Oszczędzasz
                    </Box>
                  </HStack>
                  <Text fontSize="xl" fontWeight="800" color="#0F172A">
                    {formatPLN(plan.monthlyPrice)}<Box as="span" fontSize="sm" fontWeight="500" color="#64748B">/mies.</Box>
                  </Text>
                  <Text fontSize="xs" color="#64748B" mt="1">
                    <Box as="strong" color="#0F172A">{formatPLN(plan.monthlyPrice * 12)}</Box> za 12 miesięcy subskrypcji
                  </Text>
                </Box>
                <Box
                  rounded="xl"
                  p="5"
                  border="2px solid"
                  borderColor={billing === "monthly" ? "#4F46E5" : "#E2E8F0"}
                  bg={billing === "monthly" ? "#FAFBFF" : "white"}
                  transition="all 0.2s"
                  cursor="pointer"
                  onClick={() => setBilling("monthly")}
                  _hover={billing !== "monthly" ? { borderColor: "#CBD5E1" } : undefined}
                >
                  <HStack gap="2" mb="1">
                    <Text
                      fontSize="xs"
                      color="#4F46E5"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                    >
                      Co miesiąc
                    </Text>
                    <Box
                      fontSize="2xs"
                      fontWeight="800"
                      color="#92400E"
                      bg="#FEF3C7"
                      rounded="full"
                      px="2"
                      py="0.5"
                    >
                      +{MONTHLY_BILLING_SURCHARGE_PERCENT}%
                    </Box>
                  </HStack>
                  <Text fontSize="xl" fontWeight="800" color="#0F172A">
                    {formatPLN(monthlyWithSurcharge)}<Box as="span" fontSize="sm" fontWeight="500" color="#64748B">/mies.</Box>
                  </Text>
                  <Text fontSize="xs" color="#64748B" mt="1">
                    Płatność co miesiąc, bez zobowiązania
                  </Text>
                </Box>
              </Grid>
            </Box>

            {/* Moduły */}
            <Box
              bg="white"
              rounded="2xl"
              border="1px solid #E2E8F0"
              p={{ base: "6", md: "8" }}
              boxShadow="0 1px 3px rgba(15, 23, 42, 0.04)"
            >
              <Heading as="h2" size="md" mb="2" color="#0F172A">
                Które moduły aktywujemy?
              </Heading>
              <Text fontSize="sm" color="#475569" mb="6" lineHeight="1.6">
                Moduły oznaczone kłódką są wliczone w plan {plan.name} i nie można ich wyłączyć.
                Pozostałe możesz dodać do swojego zamówienia.
              </Text>
              <VStack align="stretch" gap="2">
                {availableModules.map((m) => {
                  const isIncluded = m.includedIn.includes(plan.slug as any)
                  const isSelected = selected.has(m.id)
                  return (
                    <Flex
                      key={m.id}
                      as="button"
                      type="button"
                      onClick={() => toggleModule(m.id)}
                      align="flex-start"
                      gap="3"
                      p="4"
                      rounded="xl"
                      border="2px solid"
                      borderColor={isSelected ? "#4F46E5" : "#E2E8F0"}
                      bg={isSelected ? "#FAFBFF" : "white"}
                      textAlign="left"
                      cursor={isIncluded ? "not-allowed" : "pointer"}
                      opacity={isIncluded && !isSelected ? 0.75 : 1}
                      transition="all 0.15s"
                      _hover={!isIncluded ? { borderColor: "#CBD5E1" } : undefined}
                    >
                      <Box
                        w="5"
                        h="5"
                        rounded="6px"
                        flexShrink={0}
                        mt="0.5"
                        border="2px solid"
                        borderColor={isSelected ? "#4F46E5" : "#CBD5E1"}
                        bg={isSelected ? "#4F46E5" : "white"}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontSize="xs"
                        fontWeight="800"
                      >
                        {isSelected ? "✓" : ""}
                      </Box>
                      <VStack align="flex-start" gap="1" flex="1" minW="0">
                        <HStack gap="2" wrap="wrap">
                          <Text fontSize="sm" fontWeight="700" color="#0F172A">
                            {m.name}
                          </Text>
                          {isIncluded && (
                            <Box
                              fontSize="2xs"
                              fontWeight="800"
                              textTransform="uppercase"
                              letterSpacing="0.06em"
                              color="#4F46E5"
                              bg="#EEF2FF"
                              rounded="full"
                              px="2"
                              py="0.5"
                            >
                              W planie {plan.name}
                            </Box>
                          )}
                          {m.requiresExternal && (
                            <Box
                              fontSize="2xs"
                              fontWeight="700"
                              color="#92400E"
                              bg="#FEF3C7"
                              rounded="full"
                              px="2"
                              py="0.5"
                            >
                              Wymaga {m.requiresExternal}
                            </Box>
                          )}
                        </HStack>
                        <Text fontSize="xs" color="#64748B" lineHeight="1.5">
                          {m.description}
                        </Text>
                      </VStack>
                    </Flex>
                  )
                })}
              </VStack>
            </Box>
          </VStack>
        </GridItem>

        {/* Prawa kolumna: podsumowanie */}
        <GridItem>
          <Box
            position={{ base: "static", lg: "sticky" }}
            top="6"
            bg="linear-gradient(180deg, #191C32 0%, #0F172A 100%)"
            color="white"
            rounded="2xl"
            p={{ base: "6", md: "7" }}
            boxShadow="0 25px 50px -20px rgba(15, 23, 42, 0.5)"
            border="1px solid rgba(255, 255, 255, 0.06)"
          >
            <Text
              fontSize="xs"
              color="#A5B4FC"
              textTransform="uppercase"
              letterSpacing="0.1em"
              fontWeight="800"
              mb="2"
            >
              Podsumowanie
            </Text>
            <Heading as="h3" size="md" mb="6" color="white">
              Plan {plan.name} · {billing === "annual" ? "roczna" : "miesięczna"}
            </Heading>

            <VStack align="stretch" gap="3" mb="5">
              <Flex justify="space-between" align="baseline">
                <Text color="#CBD5E1" fontSize="sm">Setup (jednorazowo)</Text>
                <Text fontWeight="700" fontSize="md">{formatPLN(setup)}</Text>
              </Flex>
              <Flex justify="space-between" align="baseline" align="start" gap="3">
                <VStack align="flex-start" gap="0.5" flex="1" minW="0">
                  <HStack gap="2" wrap="wrap">
                    <Text color="#CBD5E1" fontSize="sm">
                      Abonament CMS
                    </Text>
                    {billing === "monthly" && (
                      <Box
                        fontSize="2xs"
                        fontWeight="800"
                        color="#92400E"
                        bg="#FEF3C7"
                        rounded="full"
                        px="1.5"
                        py="0.5"
                      >
                        +{MONTHLY_BILLING_SURCHARGE_PERCENT}%
                      </Box>
                    )}
                  </HStack>
                  <Text color="#94A3B8" fontSize="2xs" lineHeight="1.3">
                    {billing === "annual" ? (
                      <>
                        {formatPLN(plan.monthlyPrice)}/mies. × 12 miesięcy
                      </>
                    ) : (
                      <>
                        {formatPLN(plan.monthlyPrice)}/mies. + {MONTHLY_BILLING_SURCHARGE_PERCENT}% dopłaty za płatność miesięczną
                      </>
                    )}
                  </Text>
                </VStack>
                <Text fontWeight="700" fontSize="md" whiteSpace="nowrap">
                  {formatPLN(billing === "annual" ? annualSubscription : monthlyTotal)}
                </Text>
              </Flex>
              <Box h="1px" bg="rgba(255, 255, 255, 0.08)" my="2" />
              <Flex justify="space-between" fontSize="xs" color="#94A3B8">
                <Text>Netto</Text>
                <Text>{formatPLN(netTotal)}</Text>
              </Flex>
              <Flex justify="space-between" fontSize="xs" color="#94A3B8">
                <Text>VAT ({VAT_PERCENT}%)</Text>
                <Text>{formatPLN(vat)}</Text>
              </Flex>
              <Flex justify="space-between" align="baseline" pt="1">
                <Text color="white" fontSize="sm" fontWeight="700">Do zapłaty teraz (brutto)</Text>
                <Text fontWeight="800" fontSize="2xl" color="white">
                  {formatPLN(gross)}
                </Text>
              </Flex>
              {billing === "annual" && (
                <Text color="#94A3B8" fontSize="xs" lineHeight="1.5">
                  12 miesięcy w cenie bazowej ({formatPLN(plan.monthlyPrice)}/mies.). Po roku,
                  tylko {formatPLN(plan.monthlyPrice)}/mies. Bez umowy, bez zobowiązania.
                </Text>
              )}
              {billing === "monthly" && (
                <Text color="#94A3B8" fontSize="xs" lineHeight="1.5">
                  Co miesiąc {formatPLN(monthlyTotal)} + setup {formatPLN(setup)}. Możesz
                  zrezygnować w dowolnym momencie.
                </Text>
              )}
            </VStack>

            <Button
              onClick={handleContinue}
              w="full"
              h="14"
              rounded="xl"
              bg="white"
              color="#0F172A"
              fontWeight="800"
              fontSize="md"
              _hover={{ bg: "#F8FAFC", transform: "translateY(-1px)" }}
              _active={{ bg: "#F1F5F9" }}
              transition="all 0.15s"
            >
              Przejdź do płatności →
            </Button>

            <Text fontSize="xs" color="#94A3B8" mt="4" textAlign="center" lineHeight="1.5">
              Bezpieczna płatność. Stronę oddajemy w 5 dni od potwierdzenia.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </OrderLayout>
  )
}