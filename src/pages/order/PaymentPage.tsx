// src/pages/order/PaymentPage.tsx — Krok 2: płatność + faktura VAT (TPAY dla BLIK/karta, przelew)
import { useEffect, useMemo, useState } from "react"
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useNavigate, useParams, Link as RouterLink } from "react-router-dom"
import {
  formatPLN,
  grossTotal,
  monthlyRate,
  pricingPlans,
  VAT_PERCENT,
  vatAmount,
} from "../../data/pricingPlans"
import {
  emptyInvoice,
  loadConfig,
  loadInvoice,
  saveInvoice,
  type InvoiceData,
} from "../../data/orderStorage"
import { OrderLayout } from "./OrderLayout"

type PaymentMethod = "tpay_blik" | "tpay_card" | "transfer" | "crypto"

type MethodDef = {
  id: PaymentMethod
  label: string
  sub: string
  badge?: string
  comingSoon?: boolean
  icon: React.ReactNode
  iconImage?: string
}

const methods: MethodDef[] = [
  {
    id: "tpay_blik",
    label: "BLIK",
    sub: "Natychmiastowa płatność z aplikacji banku",
    iconImage: "/blik.webp",
    icon: null,
  },
  {
    id: "tpay_card",
    label: "Karta płatnicza",
    sub: "Visa, Mastercard, Apple Pay, Google Pay",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    id: "transfer",
    label: "Przelew tradycyjny",
    sub: "Realizacja 1–2 dni robocze",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    id: "crypto",
    label: "Crypto (USDT, BTC, ETH)",
    sub: "Portfel krypto · bez prowizji",
    badge: "Wkrótce",
    comingSoon: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 8h4.5a2.5 2.5 0 0 1 0 5H9V8zM9 13h5a2.5 2.5 0 0 1 0 5H9v-5zM10 6v2M10 16v2" />
      </svg>
    ),
  },
]

const fieldStyle = {
  bg: "white",
  border: "1px solid #E2E8F0",
  rounded: "lg",
  h: "11",
  fontSize: "sm",
  _placeholder: { color: "#94A3B8" },
  _focus: { borderColor: "#4F46E5", boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.12)" },
}

export const PaymentPage = () => {
  const { plan: planSlug } = useParams<{ plan: string }>()
  const navigate = useNavigate()
  const [method, setMethod] = useState<PaymentMethod>("tpay_blik")
  const [processing, setProcessing] = useState(false)
  const [invoice, setInvoice] = useState<InvoiceData>(emptyInvoice)

  const plan = useMemo(
    () => pricingPlans.find((p) => p.slug === planSlug),
    [planSlug],
  )

  const config = useMemo(
    () => (planSlug ? loadConfig(planSlug) : null),
    [planSlug],
  )

  // Load invoice data
  useEffect(() => {
    if (!planSlug) return
    const stored = loadInvoice(planSlug)
    if (stored) setInvoice(stored)
  }, [planSlug])

  // Persist invoice on change
  useEffect(() => {
    if (!planSlug) return
    saveInvoice(planSlug, invoice)
  }, [planSlug, invoice])

  useEffect(() => {
    if (!plan || !config) {
      navigate(`/zamowienie/${planSlug ?? "start"}/configure`, { replace: true })
    }
  }, [plan, config, navigate, planSlug])

  if (!plan || !config) {
    return (
      <Flex justify="center" py="20">
        <Spinner color="#4F46E5" />
      </Flex>
    )
  }

  const monthly = monthlyRate(plan, config.billing)
  const netTotal = config.billing === "annual"
    ? plan.sitePrice + plan.monthlyPrice * 12
    : plan.sitePrice + monthly
  const vat = vatAmount(netTotal)
  const total = grossTotal(netTotal)

  const handlePay = () => {
    setProcessing(true)
    setTimeout(() => {
      navigate(`/zamowienie/${plan.slug}/intake`)
    }, 1100)
  }

  const selectedMethod = methods.find((m) => m.id === method)!
  const invoiceReady =
    invoice.needsVatInvoice === "no" ||
    (invoice.invoiceEmail.trim() !== "" &&
      invoice.companyName.trim() !== "" &&
      invoice.companyNip.replace(/[\s-]/g, "").length === 10)

  return (
    <OrderLayout step="payment">
      <Grid templateColumns={{ base: "1fr", lg: "1.4fr 1fr" }} gap={{ base: "6", lg: "10" }}>
        <GridItem>
          <VStack align="stretch" gap={{ base: "5", md: "6" }}>
            {/* Faktura VAT — pytanie B2B */}
            <Box
              bg="white"
              rounded="2xl"
              border="1px solid #E2E8F0"
              p={{ base: "6", md: "8" }}
              boxShadow="0 1px 3px rgba(15, 23, 42, 0.04)"
            >
              <HStack gap="3" mb="3">
                <Flex
                  w="9"
                  h="9"
                  rounded="lg"
                  bg="#EEF2FF"
                  color="#4F46E5"
                  align="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="13" y2="17" />
                  </svg>
                </Flex>
                <Heading as="h2" size="md" color="#0F172A">
                  Faktura VAT
                </Heading>
              </HStack>
              <Text fontSize="sm" color="#475569" mb="5" lineHeight="1.6">
                Czy potrzebujesz faktury VAT na firmę? Jeśli tak, podaj dane — wyślemy ją
                automatycznie po zaksięgowaniu wpłaty.
              </Text>

              <VStack align="stretch" gap="3">
                <Flex
                  as="button"
                  type="button"
                  onClick={() => setInvoice({ ...invoice, needsVatInvoice: "no" })}
                  align="center"
                  gap="3"
                  p="3.5"
                  rounded="xl"
                  border="2px solid"
                  borderColor={invoice.needsVatInvoice === "no" ? "#4F46E5" : "#E2E8F0"}
                  bg={invoice.needsVatInvoice === "no" ? "#FAFBFF" : "white"}
                  transition="all 0.15s"
                  cursor="pointer"
                >
                  <Box
                    w="5"
                    h="5"
                    rounded="full"
                    flexShrink={0}
                    border="2px solid"
                    borderColor={invoice.needsVatInvoice === "no" ? "#4F46E5" : "#CBD5E1"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {invoice.needsVatInvoice === "no" && (
                      <Box w="2.5" h="2.5" rounded="full" bg="#4F46E5" />
                    )}
                  </Box>
                  <VStack align="flex-start" gap="0" flex="1">
                    <Text fontSize="sm" fontWeight={invoice.needsVatInvoice === "no" ? 700 : 500} color="#0F172A">
                      Paragon (osoba fizyczna)
                    </Text>
                    <Text fontSize="xs" color="#64748B" mt="0.5">
                      Najczęściej wybierane – bez dodatkowych formalności.
                    </Text>
                  </VStack>
                </Flex>

                <Flex
                  as="button"
                  type="button"
                  onClick={() => setInvoice({ ...invoice, needsVatInvoice: "yes" })}
                  align="center"
                  gap="3"
                  p="3.5"
                  rounded="xl"
                  border="2px solid"
                  borderColor={invoice.needsVatInvoice === "yes" ? "#4F46E5" : "#E2E8F0"}
                  bg={invoice.needsVatInvoice === "yes" ? "#FAFBFF" : "white"}
                  transition="all 0.15s"
                  cursor="pointer"
                >
                  <Box
                    w="5"
                    h="5"
                    rounded="full"
                    flexShrink={0}
                    border="2px solid"
                    borderColor={invoice.needsVatInvoice === "yes" ? "#4F46E5" : "#CBD5E1"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {invoice.needsVatInvoice === "yes" && (
                      <Box w="2.5" h="2.5" rounded="full" bg="#4F46E5" />
                    )}
                  </Box>
                  <VStack align="flex-start" gap="0" flex="1">
                    <Text fontSize="sm" fontWeight={invoice.needsVatInvoice === "yes" ? 700 : 500} color="#0F172A">
                      Faktura VAT (firma)
                    </Text>
                    <Text fontSize="xs" color="#64748B" mt="0.5">
                      Podaj NIP i dane firmy.
                    </Text>
                  </VStack>
                </Flex>
              </VStack>

              {invoice.needsVatInvoice === "yes" && (
                <VStack
                  align="stretch"
                  gap="4"
                  mt="5"
                  p="4"
                  rounded="xl"
                  bg="#F8FAFC"
                  border="1px solid #E2E8F0"
                >
                  <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
                    <Box>
                      <Text fontSize="xs" fontWeight="700" color="#0F172A" mb="1.5">
                        Nazwa firmy <Box as="span" color="#EF4444">*</Box>
                      </Text>
                      <Input
                        {...fieldStyle}
                        placeholder="Np. Firma Sp. z o.o."
                        value={invoice.companyName}
                        onChange={(e) => setInvoice({ ...invoice, companyName: e.target.value })}
                      />
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="700" color="#0F172A" mb="1.5">
                        NIP <Box as="span" color="#EF4444">*</Box>
                      </Text>
                      <Input
                        {...fieldStyle}
                        placeholder="10 cyfr (np. 7412176947)"
                        value={invoice.companyNip}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "").slice(0, 10)
                          setInvoice({ ...invoice, companyNip: digits })
                        }}
                        inputMode="numeric"
                      />
                    </Box>
                  </Grid>
                  <Box>
                    <Text fontSize="xs" fontWeight="700" color="#0F172A" mb="1.5">
                      E-mail do faktury <Box as="span" color="#EF4444">*</Box>
                    </Text>
                    <Input
                      {...fieldStyle}
                      type="email"
                      placeholder="kontakt@twojafirma.pl"
                      value={invoice.invoiceEmail}
                      onChange={(e) => setInvoice({ ...invoice, invoiceEmail: e.target.value })}
                    />
                  </Box>
                </VStack>
              )}
            </Box>

            {/* Wybór metody płatności */}
            <Box
              bg="white"
              rounded="2xl"
              border="1px solid #E2E8F0"
              p={{ base: "6", md: "8" }}
              boxShadow="0 1px 3px rgba(15, 23, 42, 0.04)"
            >
              <Heading as="h2" size="md" mb="2" color="#0F172A">
                Wybierz metodę płatności
              </Heading>
              <Text fontSize="sm" color="#475569" mb="5" lineHeight="1.6">
                Płatności obsługiwane przez <Box as="strong" color="#0F172A">TPAY</Box> (operator KNF)
                lub przelew tradycyjny. Wszystkie transakcje są szyfrowane (TLS 1.3).{" "}
                <Box
                  as={RouterLink}
                  to="/regulamin"
                  color="#4F46E5"
                  fontWeight="600"
                  textDecoration="underline"
                  _hover={{ color: "#4338CA" }}
                >
                  Regulamin
                </Box>{" "}
                i{" "}
                <Box
                  as={RouterLink}
                  to="/polityka-prywatnosci"
                  color="#4F46E5"
                  fontWeight="600"
                  textDecoration="underline"
                  _hover={{ color: "#4338CA" }}
                >
                  polityka prywatności
                </Box>{" "}
                dostępne przed płatnością.
              </Text>
              <VStack align="stretch" gap="3">
                {methods.map((m) => {
                  const isActive = method === m.id
                  const isDisabled = m.comingSoon
                  return (
                    <Flex
                      key={m.id}
                      as="button"
                      type="button"
                      onClick={() => !isDisabled && setMethod(m.id)}
                      align="center"
                      gap="3"
                      p="4"
                      rounded="xl"
                      border="2px solid"
                      borderColor={
                        isDisabled
                          ? "#E2E8F0"
                          : isActive
                            ? "#4F46E5"
                            : "#E2E8F0"
                      }
                      bg={
                        isDisabled
                          ? "#F8FAFC"
                          : isActive
                            ? "#FAFBFF"
                            : "white"
                      }
                      transition="all 0.15s"
                      cursor={isDisabled ? "not-allowed" : "pointer"}
                      opacity={isDisabled ? 0.65 : 1}
                      _hover={
                        !isDisabled && !isActive
                          ? { borderColor: "#CBD5E1", bg: "#FAFBFC" }
                          : undefined
                      }
                    >
                      <Flex
                        w="10"
                        h="10"
                        rounded="lg"
                        bg={
                          isDisabled
                            ? "#E2E8F0"
                            : isActive
                              ? "#4F46E5"
                              : "#F1F5F9"
                        }
                        color={
                          isDisabled
                            ? "#94A3B8"
                            : isActive
                              ? "white"
                              : "#475569"
                        }
                        align="center"
                        justifyContent="center"
                        flexShrink={0}
                        overflow="hidden"
                      >
                        {m.iconImage ? (
                          <Box
                            as="img"
                            src={m.iconImage}
                            alt={m.label}
                            w="80%"
                            h="80%"
                            objectFit="contain"
                          />
                        ) : (
                          m.icon
                        )}
                      </Flex>
                      <VStack align="flex-start" gap="0" flex="1" minW="0">
                        <HStack gap="2" wrap="wrap">
                          <Text fontSize="sm" fontWeight="700" color={isDisabled ? "#94A3B8" : "#0F172A"}>
                            {m.label}
                          </Text>
                          {m.badge && (
                            <Box
                              fontSize="2xs"
                              fontWeight="800"
                              textTransform="uppercase"
                              letterSpacing="0.06em"
                              color="#92400E"
                              bg="#FEF3C7"
                              rounded="full"
                              px="2"
                              py="0.5"
                            >
                              {m.badge}
                            </Box>
                          )}
                        </HStack>
                        <Text
                          fontSize="xs"
                          color={isDisabled ? "#94A3B8" : "#64748B"}
                          lineHeight="1.3"
                        >
                          {m.sub}
                        </Text>
                      </VStack>
                    </Flex>
                  )
                })}
              </VStack>

              <Box
                mt="5"
                p="3"
                rounded="lg"
                bg="#F8FAFC"
                border="1px solid #E2E8F0"
              >
                <Text fontSize="xs" color="#64748B" lineHeight="1.5">
                  {method === "tpay_blik" && (
                    <>Po kliknięciu „Zapłać” podajesz kod BLIK w aplikacji banku. Gotowe.</>
                  )}
                  {method === "tpay_card" && (
                    <>Po kliknięciu „Zapłać” przekierujemy Cię do TPAY. Karta nie jest zapisywana.</>
                  )}
                  {method === "transfer" && (
                    <>Po kliknięciu „Zapłać” wyświetlimy numer konta i tytuł przelewu. Realizacja po zaksięgowaniu (1–2 dni).</>
                  )}
                </Text>
              </Box>
            </Box>

            {/* Bezpieczeństwo */}
            <Box
              bg="white"
              rounded="2xl"
              border="1px solid #E2E8F0"
              p={{ base: "6", md: "8" }}
              boxShadow="0 1px 3px rgba(15, 23, 42, 0.04)"
            >
              <HStack gap="3" mb="3">
                <Flex
                  w="9"
                  h="9"
                  rounded="lg"
                  bg="#D1FAE5"
                  color="#059669"
                  align="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </Flex>
                <Heading as="h3" size="sm" color="#0F172A">
                  Bezpieczna transakcja
                </Heading>
              </HStack>
              <Text fontSize="sm" color="#475569" lineHeight="1.6">
                Płatności są realizowane przez TPAY (operator KNF, nadzorowany przez Komisję
                Nadzoru Finansowego) z szyfrowaniem TLS 1.3 i zgodnością z dyrektywą PSD2.
                Nie przechowujemy danych Twojej karty.
                {invoice.needsVatInvoice === "yes" ? (
                  <> Faktura VAT przyjdzie automatycznie na adres <Box as="strong">{invoice.invoiceEmail || "(podaj adres e-mail)"}</Box>.</>
                ) : (
                  <> Paragon / faktura imienna przyjdzie automatycznie na maila po zaksięgowaniu wpłaty.</>
                )}
              </Text>
            </Box>
          </VStack>
        </GridItem>

        {/* Podsumowanie płatności */}
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
              Do zapłaty (brutto)
            </Text>
            <Heading as="h3" size="2xl" mb="1" color="white">
              {formatPLN(total)}
            </Heading>
            <Text fontSize="xs" color="#94A3B8" mb="5">
              w tym {formatPLN(vat)} VAT ({VAT_PERCENT}%)
            </Text>
            <VStack align="stretch" gap="2.5" mb="5">
              <Flex justify="space-between" fontSize="sm">
                <Text color="#CBD5E1">Setup (jednorazowo)</Text>
                <Text fontWeight="600" color="white">{formatPLN(plan.sitePrice)}</Text>
              </Flex>
              <Flex justify="space-between" fontSize="sm">
                <Text color="#CBD5E1">
                  Abonament · {config.billing === "annual" ? "12 miesięcy" : "1 miesiąc"}
                </Text>
                <Text fontWeight="600" color="white">
                  {config.billing === "annual"
                    ? formatPLN(plan.monthlyPrice * 12)
                    : formatPLN(monthly)}
                </Text>
              </Flex>
              <Box h="1px" bg="rgba(255, 255, 255, 0.08)" my="1" />
              <Flex justify="space-between" fontSize="xs" color="#94A3B8">
                <Text>Netto</Text>
                <Text>{formatPLN(netTotal)}</Text>
              </Flex>
              <Flex justify="space-between" fontSize="xs" color="#94A3B8">
                <Text>VAT ({VAT_PERCENT}%)</Text>
                <Text>{formatPLN(vat)}</Text>
              </Flex>
              <Flex justify="space-between" align="baseline" pt="1">
                <Text color="white" fontSize="sm" fontWeight="700">Razem (brutto)</Text>
                <Text fontWeight="800" fontSize="lg" color="white">{formatPLN(total)}</Text>
              </Flex>
            </VStack>

            <Box
              rounded="lg"
              bg="rgba(255, 255, 255, 0.04)"
              border="1px solid rgba(255, 255, 255, 0.08)"
              p="3"
              mb="4"
            >
              <HStack gap="2" justify="space-between">
                <HStack gap="2">
                  <Box color="#A5B4FC">
                    {selectedMethod.iconImage ? (
                      <Box as="img" src={selectedMethod.iconImage} alt={selectedMethod.label} w="5" h="5" objectFit="contain" />
                    ) : (
                      selectedMethod.icon
                    )}
                  </Box>
                  <Text fontSize="xs" color="#CBD5E1">
                    Zapłacisz przez: <Box as="strong" color="white">{selectedMethod.label}</Box>
                  </Text>
                </HStack>
                {invoice.needsVatInvoice === "yes" && (
                  <Text fontSize="2xs" fontWeight="700" color="#A5B4FC" bg="rgba(165, 180, 252, 0.12)" rounded="md" px="2" py="0.5">
                    FAKTURA VAT
                  </Text>
                )}
              </HStack>
            </Box>

            <Button
              onClick={handlePay}
              isLoading={processing}
              loadingText="Przetwarzanie płatności..."
              spinner={<Spinner size="sm" color="#0F172A" />}
              isDisabled={!invoiceReady}
              w="full"
              h="14"
              rounded="xl"
              bg="white"
              color="#0F172A"
              fontWeight="800"
              fontSize="md"
              _hover={{ bg: "#F8FAFC" }}
              _active={{ bg: "#F1F5F9" }}
              _disabled={{ bg: "rgba(255, 255, 255, 0.5)", color: "#64748B", cursor: "not-allowed" }}
            >
              Zapłać {formatPLN(total)} →
            </Button>

            <Text fontSize="xs" color="#94A3B8" mt="3" textAlign="center" lineHeight="1.5">
              Po płatności poprosimy Cię o krótki brief, żebyśmy mogli wystartować z Twoją stroną.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </OrderLayout>
  )
}