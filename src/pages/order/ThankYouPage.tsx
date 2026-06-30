// src/pages/order/ThankYouPage.tsx — Krok 4: potwierdzenie (PL)
import { useEffect, useMemo } from "react"
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Link, useParams } from "react-router-dom"
import {
  formatPLN,
  monthlyRate,
  pricingPlans,
} from "../../data/pricingPlans"
import { availableModules } from "../../data/modules"
import {
  clearOrderFlow,
  loadConfig,
  loadIntake,
} from "../../data/orderStorage"
import { OrderLayout } from "./OrderLayout"

export const ThankYouPage = () => {
  const { plan: planSlug } = useParams<{ plan: string }>()
  const plan = useMemo(
    () => pricingPlans.find((p) => p.slug === planSlug),
    [planSlug],
  )
  const config = useMemo(
    () => (planSlug ? loadConfig(planSlug) : null),
    [planSlug],
  )
  const intake = useMemo(
    () => (planSlug ? loadIntake(planSlug) : null),
    [planSlug],
  )

  useEffect(() => {
    return () => {
      if (planSlug) clearOrderFlow(planSlug)
    }
  }, [planSlug])

  if (!plan || !config || !intake) {
    return (
      <Box textAlign="center" py="20">
        <Heading size="lg" mb="3">Brak danych</Heading>
        <Text color="#64748B" mb="6">Wróć na stronę główną i wybierz plan.</Text>
        <Button as={Link} to="/" bg="#4F46E5" color="white" _hover={{ bg: "#4338CA" }}>
          Wróć na stronę główną
        </Button>
      </Box>
    )
  }

  const monthly = monthlyRate(plan, config.billing)

  return (
    <OrderLayout step="done">
      <Box textAlign="center" maxW="2xl" mx="auto" mb={{ base: "8", md: "10" }}>
        <Flex
          w="20"
          h="20"
          rounded="full"
          bg="#10B981"
          color="white"
          align="center"
          justifyContent="center"
          mx="auto"
          mb="6"
          fontSize="3xl"
          boxShadow="0 20px 40px -15px rgba(16, 185, 129, 0.5)"
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </Flex>
        <Heading as="h1" size="2xl" mb="4" color="#0F172A" letterSpacing="-0.02em">
          Gotowe — Twoje zamówienie jest w drodze
        </Heading>
        <Text color="#475569" fontSize="lg" lineHeight="1.6" mb="2">
          Cześć <Box as="strong" color="#0F172A">{intake.contactName || "Kliencie"}</Box>, otrzymaliśmy
          Twoje zamówienie i brief.
        </Text>
        <Text color="#475569" fontSize="md" lineHeight="1.6">
          Odezwiemy się w ciągu kilku godzin na adres{" "}
          <Box as="strong" color="#0F172A">{intake.contactEmail}</Box>{" "}
          żeby potwierdzić pierwszą rozmowę i zacząć pracę.
        </Text>
      </Box>

      <Box
        maxW="2xl"
        mx="auto"
        bg="white"
        rounded="2xl"
        border="1px solid #E2E8F0"
        p={{ base: "6", md: "8" }}
        mb="6"
        boxShadow="0 1px 3px rgba(15, 23, 42, 0.04)"
      >
        <Text
          fontSize="xs"
          color="#64748B"
          textTransform="uppercase"
          letterSpacing="0.1em"
          fontWeight="800"
          mb="3"
        >
          Podsumowanie
        </Text>
        <VStack align="stretch" gap="3">
          <SummaryRow label="Plan" value={`${plan.name} · ${config.billing === "annual" ? "roczna" : "miesięczna"}`} />
          <SummaryRow
            label="Abonament"
            value={`${formatPLN(monthly)}/mies.${config.billing === "monthly" ? " (z dopłatą za płatność co miesiąc)" : ""}`}
          />
          <SummaryRow
            label="Zapłacono dziś"
            value={formatPLN(plan.sitePrice + (config.billing === "annual" ? plan.monthlyPrice * 12 : monthly))}
          />
          {config.modules.length > 0 && (
            <Box pt="3" borderTop="1px solid #E2E8F0">
              <Text fontSize="sm" color="#0F172A" fontWeight="700" mb="2">
                Aktywowane moduły
              </Text>
              <Flex gap="2" wrap="wrap">
                {config.modules.map((id) => {
                  const mod = availableModules.find((m) => m.id === id)
                  if (!mod) return null
                  return (
                    <Box
                      key={id}
                      px="3"
                      py="1.5"
                      rounded="full"
                      bg="#EEF2FF"
                      color="#4F46E5"
                      fontSize="xs"
                      fontWeight="700"
                    >
                      {mod.name}
                    </Box>
                  )
                })}
              </Flex>
            </Box>
          )}
        </VStack>
      </Box>

      <Box
        maxW="2xl"
        mx="auto"
        bg="linear-gradient(180deg, #191C32 0%, #0F172A 100%)"
        color="white"
        rounded="2xl"
        p={{ base: "6", md: "8" }}
        mb="8"
        boxShadow="0 25px 50px -20px rgba(15, 23, 42, 0.5)"
        border="1px solid rgba(255, 255, 255, 0.06)"
      >
        <Heading as="h2" size="md" color="white" mb="5" letterSpacing="-0.01em">
          Co dzieje się dalej?
        </Heading>
        <VStack align="stretch" gap="4">
          {[
            { n: 1, t: "Potwierdzenie natychmiast", d: "W ciągu kilku minut wyślemy Ci maila z fakturą i potwierdzeniem." },
            { n: 2, t: "Rozmowa startowa (15 min)", d: "Wspólnie przejdziemy przez brief i odpowiemy na Twoje pytania." },
            { n: 3, t: "Strona gotowa w 5 dni", d: "Publikujemy Twoją stronę zoptymalizowaną pod Google i przekazujemy dostęp do panelu." },
          ].map((step) => (
            <HStack key={step.n} align="flex-start" gap="3">
              <Flex
                w="8"
                h="8"
                rounded="full"
                bg="#4F46E5"
                color="white"
                align="center"
                justifyContent="center"
                fontSize="xs"
                fontWeight="800"
                flexShrink={0}
              >
                {step.n}
              </Flex>
              <VStack align="flex-start" gap="0" flex="1">
                <Text fontSize="sm" fontWeight="700" color="white">{step.t}</Text>
                <Text fontSize="xs" color="#A5B4FC" lineHeight="1.5">{step.d}</Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </Box>

      <Box textAlign="center">
        <HStack gap="4" justify="center" wrap="wrap">
          <Button
            as={Link}
            to="/"
            size="lg"
            h="12"
            px="8"
            rounded="xl"
            bg="white"
            color="#0F172A"
            border="1px solid #E2E8F0"
            fontWeight="700"
            _hover={{ bg: "#F8FAFC" }}
          >
            Wróć na stronę główną
          </Button>
          <Button
            as="a"
            href="tel:+48517105423"
            size="lg"
            h="12"
            px="8"
            rounded="xl"
            bg="#4F46E5"
            color="white"
            fontWeight="700"
            _hover={{ bg: "#4338CA" }}
            boxShadow="0 10px 30px -10px rgba(79, 70, 229, 0.5)"
          >
            Zadzwoń: 517 105 423
          </Button>
        </HStack>
      </Box>
    </OrderLayout>
  )
}

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <Flex justify="space-between" align="baseline" gap="4">
    <Text color="#475569" fontSize="sm">{label}</Text>
    <Text color="#0F172A" fontSize="sm" fontWeight="700" textAlign="right">{value}</Text>
  </Flex>
)