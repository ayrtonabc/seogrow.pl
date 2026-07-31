// src/pages/order/OrderConfigPage.tsx — Krok 1: konfiguracja planu (rediseño total wix-style)
// Layout: hero con plan elegido + grid de módulos con cards visuales + summary sticky con glassmorphism.
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

const CheckIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const LockIcon = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
)

const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const ShieldIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const ClockIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

// ─── Toggle de facturación ──────────────────────────────────────
const BillingToggle = ({
  value,
  onChange,
}: {
  value: BillingCycle
  onChange: (v: BillingCycle) => void
}) => (
  <Box
    role="radiogroup"
    aria-label="Częstotliwość płatności"
    display="inline-flex"
    bg="bg.subtle"
    rounded="full"
    p="1"
    border="1px solid"
    borderColor="border.default"
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
          px={{ base: "4", md: "5" }}
          py="2"
          rounded="full"
          fontSize="sm"
          fontWeight="700"
          bg={isActive ? "bg.canvas" : "transparent"}
          color={isActive ? "fg.default" : "fg.subtle"}
          boxShadow={isActive ? "0 1px 3px rgba(15, 23, 42, 0.08)" : "none"}
          transition="all 0.2s"
          cursor="pointer"
        >
          {v === "annual" ? "Płacę rocznie" : "Płacę co miesiąc"}
        </Box>
      )
    })}
  </Box>
)

// ─── Card de módulo (toggle, wix-style) ──────────────────────────
const ModuleCard = ({
  module: m,
  isSelected,
  isIncluded,
  planName,
  onToggle,
}: {
  module: typeof availableModules[0]
  isSelected: boolean
  isIncluded: boolean
  planName: string
  onToggle: () => void
}) => {
  return (
    <Box
      as="button"
      type="button"
      onClick={onToggle}
      role="checkbox"
      aria-checked={isSelected}
      aria-disabled={isIncluded}
      position="relative"
      w="full"
      h="full"
      textAlign="left"
      p={{ base: "4", md: "5" }}
      rounded="2xl"
      border="1.5px solid"
      borderColor={isSelected ? "accent.500" : "border.default"}
      bg={isSelected ? "accent.50" : "bg.canvas"}
      cursor={isIncluded && !isSelected ? "not-allowed" : "pointer"}
      transition="all 0.15s"
      _hover={!isIncluded ? { borderColor: isSelected ? "accent.500" : "border.strong", bg: isSelected ? "accent.50" : "bg.subtle" } : undefined}
      opacity={isIncluded && !isSelected ? 0.85 : 1}
    >
      {/* Checkbox visual */}
      <Flex
        position="absolute"
        top={{ base: "3", md: "4" }}
        right={{ base: "3", md: "4" }}
        w="6"
        h="6"
        rounded="7px"
        border="2px solid"
        borderColor={isSelected ? "accent.600" : "border.strong"}
        bg={isSelected ? "accent.600" : "bg.canvas"}
        align="center"
        justifyContent="center"
        color="white"
      >
        {isSelected ? <CheckIcon size={14} /> : null}
      </Flex>

      <VStack align="flex-start" gap="2.5" pr="8">
        <Text fontSize="md" fontWeight="700" color="fg.default" lineHeight="1.3">
          {m.name}
        </Text>
        <Text fontSize="sm" color="fg.muted" lineHeight="1.5">
          {m.description}
        </Text>
        <HStack gap="2" wrap="wrap" mt="1">
          {isIncluded && (
            <HStack
              gap="1"
              fontSize="2xs"
              fontWeight="800"
              textTransform="uppercase"
              letterSpacing="0.06em"
              color="accent.700"
              bg="bg.canvas"
              border="1px solid"
              borderColor="accent.200"
              rounded="full"
              px="2"
              py="0.5"
            >
              <LockIcon size={9} />
              <Text>W planie {planName}</Text>
            </HStack>
          )}
          {m.requiresExternal && (
            <HStack
              gap="1"
              fontSize="2xs"
              fontWeight="700"
              color="#92400E"
              bg="#FEF3C7"
              border="1px solid"
              borderColor="#FDE68A"
              rounded="full"
              px="2"
              py="0.5"
            >
              <Text>Wymaga {m.requiresExternal}</Text>
            </HStack>
          )}
        </HStack>
      </VStack>
    </Box>
  )
}

// ─── Componente principal ───────────────────────────────────────
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
      <OrderLayout step="configure">
        <Box textAlign="center" py="20">
          <Heading size="lg" mb="3">Plan nie znaleziony</Heading>
          <Text color="fg.subtle" mb="6">Wróć na stronę główną i wybierz plan.</Text>
          <Button as={Link} to="/" bg="accent.600" color="white" _hover={{ bg: "accent.700" }}>
            Wróć na stronę główną
          </Button>
        </Box>
      </OrderLayout>
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
  // Precio mensual "tal cual" (con recargo +20% siempre, para mostrar el coste real del plan mensual)
  const monthlyTotal = Math.round(plan.monthlyPrice * (1 + MONTHLY_BILLING_SURCHARGE_PERCENT / 100) * 100) / 100
  const annualSubscription = plan.monthlyPrice * 12
  const firstInvoice = billing === "annual"
    ? setup + annualSubscription
    : setup + monthlyTotal
  const netTotal = firstInvoice
  const vat = vatAmount(netTotal)
  const gross = grossTotal(netTotal)

  return (
    <OrderLayout step="configure">
      <Grid templateColumns={{ base: "1fr", lg: "1.55fr 1fr" }} gap={{ base: "6", lg: "8" }} alignItems="start">
        {/* Columna izquierda: contenido */}
        <GridItem>
          <VStack align="stretch" gap={{ base: "5", md: "6" }}>
            {/* Hero card: plan elegido */}
            <Box
              bg="bg.canvas"
              rounded="2xl"
              border="1px solid"
              borderColor="border.default"
              overflow="hidden"
            >
              {/* Banner del plan con color accent */}
              <Box
                px={{ base: "5", md: "7" }}
                py={{ base: "5", md: "6" }}
                bg="linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)"
                color="white"
                position="relative"
              >
                <Flex align="center" justify="space-between" gap="3" wrap="wrap">
                  <HStack gap="3">
                    <Flex
                      w="11"
                      h="11"
                      rounded="xl"
                      bg="rgba(255, 255, 255, 0.18)"
                      border="1px solid rgba(255, 255, 255, 0.25)"
                      align="center"
                      justifyContent="center"
                      fontSize="lg"
                      fontWeight="800"
                      backdropFilter="blur(8px)"
                    >
                      {plan.name[0]}
                    </Flex>
                    <VStack align="flex-start" gap="0.5">
                      <Text
                        fontSize="2xs"
                        color="whiteAlpha.800"
                        textTransform="uppercase"
                        letterSpacing="0.1em"
                        fontWeight="800"
                      >
                        Wybrany plan
                      </Text>
                      <Heading as="h1" size="lg" color="white" lineHeight="1" letterSpacing="-0.02em">
                        {plan.name}
                      </Heading>
                    </VStack>
                  </HStack>
                  <Box
                    as={Link}
                    to="/#ceny"
                    px="3"
                    py="1.5"
                    rounded="full"
                    fontSize="xs"
                    color="white"
                    bg="rgba(255, 255, 255, 0.15)"
                    border="1px solid rgba(255, 255, 255, 0.25)"
                    fontWeight="700"
                    _hover={{ bg: "rgba(255, 255, 255, 0.25)" }}
                    transition="background 0.15s"
                    display="inline-flex"
                    alignItems="center"
                    gap="1"
                  >
                    Zmień plan →
                  </Box>
                </Flex>
                <Text color="whiteAlpha.900" fontSize="sm" mt="3" lineHeight="1.5">
                  {plan.title}
                </Text>
              </Box>

              {/* Cuerpo con descripción + features clave */}
              <Box p={{ base: "5", md: "7" }}>
                <Text color="fg.muted" fontSize="sm" lineHeight="1.6" mb="5">
                  {plan.description}
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="2.5">
                  {plan.features.slice(0, 6).map((f, i) => (
                    <HStack key={i} gap="2.5" align="flex-start">
                      <Flex
                        w="5"
                        h="5"
                        rounded="full"
                        bg="accent.100"
                        color="accent.700"
                        align="center"
                        justifyContent="center"
                        flexShrink={0}
                        mt="0.5"
                      >
                        <CheckIcon size={11} />
                      </Flex>
                      <Text fontSize="sm" color="fg.default" lineHeight="1.5">{f}</Text>
                    </HStack>
                  ))}
                </Grid>
              </Box>
            </Box>

            {/* Pago: anual vs mensual */}
            <Box
              bg="bg.canvas"
              rounded="2xl"
              border="1px solid"
              borderColor="border.default"
              p={{ base: "5", md: "7" }}
            >
              <Flex align="center" justify="space-between" gap="3" mb="5" wrap="wrap">
                <Box>
                  <Heading as="h2" size="md" color="fg.default" mb="1" letterSpacing="-0.01em">
                    Jak chcesz opłacać?
                  </Heading>
                  <Text fontSize="sm" color="fg.muted">
                    Płacąc za cały rok z góry, oszczędzasz {formatPLN(annualSubscription - monthlyTotal * 12)} rocznie.
                  </Text>
                </Box>
                <BillingToggle value={billing} onChange={setBilling} />
              </Flex>

              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="3">
                <Box
                  as="button"
                  type="button"
                  onClick={() => setBilling("annual")}
                  p={{ base: "4", md: "5" }}
                  rounded="xl"
                  border="2px solid"
                  borderColor={billing === "annual" ? "accent.500" : "border.default"}
                  bg={billing === "annual" ? "accent.50" : "bg.canvas"}
                  transition="all 0.2s"
                  cursor="pointer"
                  textAlign="left"
                  position="relative"
                  _hover={billing !== "annual" ? { borderColor: "border.strong" } : undefined}
                >
                  <Flex justify="space-between" align="center" mb="2">
                    <Text
                      fontSize="xs"
                      color="accent.700"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                    >
                      Płatność roczna
                    </Text>
                    <Box
                      fontSize="2xs"
                      fontWeight="800"
                      color="success.700"
                      bg="bg.canvas"
                      border="1px solid"
                      borderColor="success.500"
                      rounded="full"
                      px="2"
                      py="0.5"
                    >
                      -{MONTHLY_BILLING_SURCHARGE_PERCENT}% taniej
                    </Box>
                  </Flex>
                  <Text fontSize="2xl" fontWeight="800" color="fg.default" letterSpacing="-0.02em">
                    {formatPLN(plan.monthlyPrice)}<Box as="span" fontSize="sm" fontWeight="500" color="fg.subtle">/mies.</Box>
                  </Text>
                  <Text fontSize="xs" color="fg.muted" mt="1.5" lineHeight="1.4">
                    <Box as="strong" color="fg.default">{formatPLN(annualSubscription)}</Box> za cały rok z góry
                  </Text>
                </Box>

                <Box
                  as="button"
                  type="button"
                  onClick={() => setBilling("monthly")}
                  p={{ base: "4", md: "5" }}
                  rounded="xl"
                  border="2px solid"
                  borderColor={billing === "monthly" ? "accent.500" : "border.default"}
                  bg={billing === "monthly" ? "accent.50" : "bg.canvas"}
                  transition="all 0.2s"
                  cursor="pointer"
                  textAlign="left"
                  _hover={billing !== "monthly" ? { borderColor: "border.strong" } : undefined}
                >
                  <Flex justify="space-between" align="center" mb="2">
                    <Text
                      fontSize="xs"
                      color="fg.muted"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                    >
                      Płatność miesięczna
                    </Text>
                    <Box
                      fontSize="2xs"
                      fontWeight="700"
                      color="fg.muted"
                      bg="bg.subtle"
                      border="1px solid"
                      borderColor="border.default"
                      rounded="full"
                      px="2"
                      py="0.5"
                    >
                      pełna cena
                    </Box>
                  </Flex>
                  <Text fontSize="2xl" fontWeight="800" color="fg.default" letterSpacing="-0.02em">
                    {formatPLN(monthlyTotal)}<Box as="span" fontSize="sm" fontWeight="500" color="fg.subtle">/mies.</Box>
                  </Text>
                  <Text fontSize="xs" color="fg.muted" mt="1.5" lineHeight="1.4">
                    Cena publikowana + {MONTHLY_BILLING_SURCHARGE_PERCENT}%. Bez zobowiązania.
                  </Text>
                </Box>
              </Grid>
            </Box>

            {/* Módulos: grid visual */}
            <Box
              bg="bg.canvas"
              rounded="2xl"
              border="1px solid"
              borderColor="border.default"
              p={{ base: "5", md: "7" }}
            >
              <Box mb="5">
                <Heading as="h2" size="md" color="fg.default" mb="1" letterSpacing="-0.01em">
                  Które moduły aktywujemy?
                </Heading>
                <Text fontSize="sm" color="fg.muted" lineHeight="1.6">
                  Zaznacz dodatkowe moduły. Te z kłódką są już w Twoim planie {plan.name}.
                </Text>
              </Box>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="3">
                {availableModules.map((m) => {
                  const isIncluded = m.includedIn.includes(plan.slug as any)
                  const isSelected = selected.has(m.id)
                  return (
                    <ModuleCard
                      key={m.id}
                      module={m}
                      isSelected={isSelected}
                      isIncluded={isIncluded}
                      planName={plan.name}
                      onToggle={() => toggleModule(m.id)}
                    />
                  )
                })}
              </Grid>
            </Box>

            {/* Garantía + entrega */}
            <Flex
              bg="bg.subtle"
              rounded="2xl"
              p={{ base: "4", md: "5" }}
              gap="5"
              direction={{ base: "column", sm: "row" }}
              align="center"
            >
              <HStack gap="3" flex="1">
                <Flex
                  w="10"
                  h="10"
                  rounded="xl"
                  bg="bg.canvas"
                  border="1px solid border.default"
                  align="center"
                  justifyContent="center"
                  color="accent.700"
                >
                  <ClockIcon size={18} />
                </Flex>
                <Box>
                  <Text fontSize="sm" fontWeight="700" color="fg.default">
                    Gotowe w 5 dni roboczych
                  </Text>
                  <Text fontSize="xs" color="fg.muted">
                    Po płatności zaczynamy od razu.
                  </Text>
                </Box>
              </HStack>
              <HStack gap="3" flex="1">
                <Flex
                  w="10"
                  h="10"
                  rounded="xl"
                  bg="bg.canvas"
                  border="1px solid border.default"
                  align="center"
                  justifyContent="center"
                  color="accent.700"
                >
                  <ShieldIcon size={18} />
                </Flex>
                <Box>
                  <Text fontSize="sm" fontWeight="700" color="fg.default">
                    Bez ryzyka
                  </Text>
                  <Text fontSize="xs" color="fg.muted">
                    Faktura VAT, regulamin przed płatnością.
                  </Text>
                </Box>
              </HStack>
            </Flex>
          </VStack>
        </GridItem>

        {/* Columna derecha: resumen sticky */}
        <GridItem>
          <Box
            position={{ base: "static", lg: "sticky" }}
            top="6"
            bg="bg.canvas"
            rounded="2xl"
            border="1px solid"
            borderColor="border.default"
            overflow="hidden"
            boxShadow="0 25px 50px -20px rgba(15, 23, 42, 0.12)"
          >
            {/* Header con total */}
            <Box
              px={{ base: "5", md: "6" }}
              py="5"
              borderBottom="1px solid"
              borderColor="border.default"
              bg="linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 100%)"
            >
              <Text
                fontSize="2xs"
                color="accent.700"
                textTransform="uppercase"
                letterSpacing="0.12em"
                fontWeight="800"
                mb="2"
              >
                Do zapłaty teraz
              </Text>
              <Flex align="baseline" gap="2">
                <Text
                  fontSize="3xl"
                  fontWeight="800"
                  color="fg.default"
                  letterSpacing="-0.03em"
                  lineHeight="1"
                >
                  {formatPLN(gross)}
                </Text>
                <Text fontSize="xs" color="fg.muted" fontWeight="600">
                  brutto
                </Text>
              </Flex>
              <Text fontSize="xs" color="fg.subtle" mt="1">
                w tym {formatPLN(vat)} VAT ({VAT_PERCENT}%) · {billing === "annual" ? "płatność roczna" : "płatność miesięczna"}
              </Text>
            </Box>

            {/* Desglose */}
            <Box p={{ base: "5", md: "6" }}>
              <VStack align="stretch" gap="3" mb="4">
                <Flex justify="space-between" align="baseline">
                  <Text color="fg.muted" fontSize="sm">Setup (jednorazowo)</Text>
                  <Text fontWeight="700" fontSize="sm" color="fg.default">{formatPLN(setup)}</Text>
                </Flex>
                <Flex justify="space-between" align="baseline" align="start" gap="3">
                  <VStack align="flex-start" gap="0.5" flex="1" minW="0">
                    <HStack gap="2" wrap="wrap">
                      <Text color="fg.muted" fontSize="sm">
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
                    <Text color="fg.subtle" fontSize="2xs" lineHeight="1.3">
                      {billing === "annual"
                        ? `${formatPLN(plan.monthlyPrice)}/mies. × 12 miesięcy`
                        : `${formatPLN(plan.monthlyPrice)}/mies. + ${MONTHLY_BILLING_SURCHARGE_PERCENT}% dopłaty`}
                    </Text>
                  </VStack>
                  <Text fontWeight="700" fontSize="sm" color="fg.default" whiteSpace="nowrap">
                    {formatPLN(billing === "annual" ? annualSubscription : monthlyTotal)}
                  </Text>
                </Flex>
                <Box h="1px" bg="border.default" my="1" />
                <Flex justify="space-between" fontSize="xs" color="fg.muted">
                  <Text>Netto</Text>
                  <Text>{formatPLN(netTotal)}</Text>
                </Flex>
                <Flex justify="space-between" fontSize="xs" color="fg.muted">
                  <Text>VAT ({VAT_PERCENT}%)</Text>
                  <Text>{formatPLN(vat)}</Text>
                </Flex>
              </VStack>

              <Button
                onClick={handleContinue}
                w="full"
                h="14"
                rounded="xl"
                bg="accent.600"
                color="white"
                fontWeight="800"
                fontSize="md"
                _hover={{ bg: "accent.700", transform: "translateY(-1px)" }}
                _active={{ bg: "accent.800" }}
                transition="all 0.15s"
                boxShadow="0 10px 25px -10px rgba(15, 118, 110, 0.5)"
              >
                Przejdź do płatności
                <Box ml="1.5" display="inline-flex" alignItems="center">
                  <ArrowRightIcon size={16} />
                </Box>
              </Button>

              <Text fontSize="xs" color="fg.subtle" mt="4" textAlign="center" lineHeight="1.5">
                <ShieldIcon size={11} /> Bezpieczna płatność · TPAY · TLS 1.3
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </OrderLayout>
  )
}
