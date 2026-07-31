// src/pages/order/PaymentPage.tsx — Krok 2: płatność + faktura VAT (rediseño total wix-style)
// Métodos de pago como cards visuales, factura VAT con accordion, summary con el mismo diseño.
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
  recommended?: boolean
}

const methods: MethodDef[] = [
  {
    id: "tpay_blik",
    label: "BLIK",
    sub: "Natychmiastowa płatność z aplikacji banku",
    iconImage: "/blik.webp",
    icon: null,
    recommended: true,
  },
  {
    id: "tpay_card",
    label: "Karta płatnicza",
    sub: "Visa, Mastercard, Apple Pay, Google Pay",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 8h4.5a2.5 2.5 0 0 1 0 5H9V8zM9 13h5a2.5 2.5 0 0 1 0 5H9v-5zM10 6v2M10 16v2" />
      </svg>
    ),
  },
]

// Iconos auxiliares
const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const ReceiptIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
)

const ShieldIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const fieldStyle = {
  bg: "white",
  border: "1.5px solid",
  borderColor: "border.default",
  rounded: "xl",
  h: "12",
  fontSize: "sm",
  color: "fg.default",
  _placeholder: { color: "fg.faint" },
  _hover: { borderColor: "border.strong" },
  _focus: { borderColor: "accent.600", boxShadow: "0 0 0 3px rgba(15, 118, 110, 0.12)", outline: "none" },
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

  useEffect(() => {
    if (!planSlug) return
    const stored = loadInvoice(planSlug)
    if (stored) setInvoice(stored)
  }, [planSlug])

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
        <Spinner color="accent.600" />
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
      <Grid templateColumns={{ base: "1fr", lg: "1.55fr 1fr" }} gap={{ base: "6", lg: "8" }} alignItems="start">
        <GridItem>
          <VStack align="stretch" gap={{ base: "5", md: "6" }}>
            {/* Factura VAT */}
            <Box
              bg="bg.canvas"
              rounded="2xl"
              border="1px solid"
              borderColor="border.default"
              p={{ base: "5", md: "7" }}
            >
              <Flex align="center" gap="3" mb="5">
                <Flex
                  w="10"
                  h="10"
                  rounded="xl"
                  bg="accent.50"
                  color="accent.700"
                  align="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <ReceiptIcon size={20} />
                </Flex>
                <Box>
                  <Heading as="h2" size="md" color="fg.default" letterSpacing="-0.01em">
                    Faktura VAT
                  </Heading>
                  <Text fontSize="xs" color="fg.muted" mt="0.5">
                    Wybierz typ dokumentu
                  </Text>
                </Box>
              </Flex>

              <VStack align="stretch" gap="2.5">
                <Flex
                  as="button"
                  type="button"
                  onClick={() => setInvoice({ ...invoice, needsVatInvoice: "no" })}
                  align="center"
                  gap="3"
                  p="4"
                  rounded="xl"
                  border="2px solid"
                  borderColor={invoice.needsVatInvoice === "no" ? "accent.500" : "border.default"}
                  bg={invoice.needsVatInvoice === "no" ? "accent.50" : "bg.canvas"}
                  transition="all 0.15s"
                  cursor="pointer"
                  _hover={invoice.needsVatInvoice !== "no" ? { borderColor: "border.strong" } : undefined}
                >
                  <Box
                    w="5"
                    h="5"
                    rounded="full"
                    flexShrink={0}
                    border="2px solid"
                    borderColor={invoice.needsVatInvoice === "no" ? "accent.600" : "border.strong"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {invoice.needsVatInvoice === "no" && (
                      <Box w="2.5" h="2.5" rounded="full" bg="accent.600" />
                    )}
                  </Box>
                  <VStack align="flex-start" gap="0" flex="1">
                    <Text fontSize="sm" fontWeight={invoice.needsVatInvoice === "no" ? 700 : 500} color="fg.default">
                      Paragon (osoba fizyczna)
                    </Text>
                    <Text fontSize="xs" color="fg.muted" mt="0.5">
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
                  p="4"
                  rounded="xl"
                  border="2px solid"
                  borderColor={invoice.needsVatInvoice === "yes" ? "accent.500" : "border.default"}
                  bg={invoice.needsVatInvoice === "yes" ? "accent.50" : "bg.canvas"}
                  transition="all 0.15s"
                  cursor="pointer"
                  _hover={invoice.needsVatInvoice !== "yes" ? { borderColor: "border.strong" } : undefined}
                >
                  <Box
                    w="5"
                    h="5"
                    rounded="full"
                    flexShrink={0}
                    border="2px solid"
                    borderColor={invoice.needsVatInvoice === "yes" ? "accent.600" : "border.strong"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {invoice.needsVatInvoice === "yes" && (
                      <Box w="2.5" h="2.5" rounded="full" bg="accent.600" />
                    )}
                  </Box>
                  <VStack align="flex-start" gap="0" flex="1">
                    <Text fontSize="sm" fontWeight={invoice.needsVatInvoice === "yes" ? 700 : 500} color="fg.default">
                      Faktura VAT (firma)
                    </Text>
                    <Text fontSize="xs" color="fg.muted" mt="0.5">
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
                  p={{ base: "4", md: "5" }}
                  rounded="xl"
                  bg="bg.subtle"
                  border="1px solid"
                  borderColor="border.default"
                >
                  <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
                    <Box>
                      <Text fontSize="xs" fontWeight="700" color="fg.default" mb="1.5">
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
                      <Text fontSize="xs" fontWeight="700" color="fg.default" mb="1.5">
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
                    <Text fontSize="xs" fontWeight="700" color="fg.default" mb="1.5">
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

            {/* Método de pago */}
            <Box
              bg="bg.canvas"
              rounded="2xl"
              border="1px solid"
              borderColor="border.default"
              p={{ base: "5", md: "7" }}
            >
              <Box mb="5">
                <Heading as="h2" size="md" color="fg.default" mb="1" letterSpacing="-0.01em">
                  Wybierz metodę płatności
                </Heading>
                <Text fontSize="sm" color="fg.muted" lineHeight="1.5">
                  Płatności obsługuje <Box as="strong" color="fg.default">TPAY</Box> (operator KNF) lub przelew tradycyjny.{" "}
                  <Box
                    as={RouterLink}
                    to="/regulamin"
                    color="accent.700"
                    fontWeight="600"
                    textDecoration="underline"
                    _hover={{ color: "accent.800" }}
                  >
                    Regulamin
                  </Box>{" "}
                  dostępny przed płatnością.
                </Text>
              </Box>

              <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} gap="3">
                {methods.map((m) => {
                  const isActive = method === m.id
                  const isDisabled = m.comingSoon
                  return (
                    <Box
                      key={m.id}
                      as="button"
                      type="button"
                      onClick={() => !isDisabled && setMethod(m.id)}
                      position="relative"
                      p="4"
                      rounded="xl"
                      border="2px solid"
                      borderColor={
                        isDisabled
                          ? "border.default"
                          : isActive
                            ? "accent.500"
                            : "border.default"
                      }
                      bg={
                        isDisabled
                          ? "bg.subtle"
                          : isActive
                            ? "accent.50"
                            : "bg.canvas"
                      }
                      transition="all 0.15s"
                      cursor={isDisabled ? "not-allowed" : "pointer"}
                      opacity={isDisabled ? 0.55 : 1}
                      textAlign="left"
                      _hover={
                        !isDisabled && !isActive
                          ? { borderColor: "border.strong", bg: "bg.subtle" }
                          : undefined
                      }
                    >
                      {m.recommended && !isDisabled && (
                        <Box
                          position="absolute"
                          top="-2"
                          right="3"
                          fontSize="2xs"
                          fontWeight="800"
                          color="white"
                          bg="accent.600"
                          rounded="full"
                          px="2"
                          py="0.5"
                          textTransform="uppercase"
                          letterSpacing="0.06em"
                        >
                          Szybko
                        </Box>
                      )}
                      <Flex
                        w="11"
                        h="11"
                        rounded="lg"
                        bg={isActive ? "accent.600" : "bg.subtle"}
                        color={isActive ? "white" : "fg.muted"}
                        border="1px solid"
                        borderColor={isActive ? "accent.600" : "border.default"}
                        align="center"
                        justifyContent="center"
                        mb="3"
                        overflow="hidden"
                      >
                        {m.iconImage ? (
                          <Box
                            as="img"
                            src={m.iconImage}
                            alt={m.label}
                            w="70%"
                            h="70%"
                            objectFit="contain"
                          />
                        ) : (
                          m.icon
                        )}
                      </Flex>
                      <Text
                        fontSize="sm"
                        fontWeight="700"
                        color={isDisabled ? "fg.faint" : "fg.default"}
                        mb="0.5"
                      >
                        {m.label}
                      </Text>
                      <Text
                        fontSize="2xs"
                        color={isDisabled ? "fg.faint" : "fg.muted"}
                        lineHeight="1.3"
                      >
                        {m.sub}
                      </Text>
                      {m.badge && (
                        <Box
                          mt="2"
                          display="inline-block"
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
                    </Box>
                  )
                })}
              </Grid>

              <Box
                mt="4"
                p="3.5"
                rounded="lg"
                bg="bg.subtle"
                border="1px solid"
                borderColor="border.default"
              >
                <Text fontSize="xs" color="fg.muted" lineHeight="1.5">
                  {method === "tpay_blik" && (
                    <>Po kliknięciu „Zapłać” podajesz kod BLIK w aplikacji banku. Gotowe w 5 sekund.</>
                  )}
                  {method === "tpay_card" && (
                    <>Po kliknięciu „Zapłać” przekierujemy Cię do TPAY. Karta nie jest zapisywana.</>
                  )}
                  {method === "transfer" && (
                    <>Po kliknięciu „Zapłać” wyświetlimy numer konta i tytuł przelewu. Realizacja 1–2 dni robocze.</>
                  )}
                </Text>
              </Box>
            </Box>

            {/* Seguridad */}
            <Flex
              bg="bg.subtle"
              rounded="2xl"
              p={{ base: "4", md: "5" }}
              gap="3"
              align="center"
            >
              <Flex
                w="10"
                h="10"
                rounded="xl"
                bg="bg.canvas"
                border="1px solid border.default"
                align="center"
                justifyContent="center"
                color="success.700"
                flexShrink={0}
              >
                <ShieldIcon size={18} />
              </Flex>
              <Box>
                <Text fontSize="sm" fontWeight="700" color="fg.default">
                  Bezpieczna transakcja
                </Text>
                <Text fontSize="xs" color="fg.muted" lineHeight="1.4">
                  TPAY (KNF) · TLS 1.3 · PSD2. Nie przechowujemy danych karty.
                </Text>
              </Box>
            </Flex>
          </VStack>
        </GridItem>

        {/* Resumen sticky */}
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
                Do zapłaty (brutto)
              </Text>
              <Flex align="baseline" gap="2">
                <Text
                  fontSize="3xl"
                  fontWeight="800"
                  color="fg.default"
                  letterSpacing="-0.03em"
                  lineHeight="1"
                >
                  {formatPLN(total)}
                </Text>
                <Text fontSize="xs" color="fg.muted" fontWeight="600">
                  brutto
                </Text>
              </Flex>
              <Text fontSize="xs" color="fg.subtle" mt="1">
                w tym {formatPLN(vat)} VAT ({VAT_PERCENT}%) · {config.billing === "annual" ? "płatność roczna" : "płatność miesięczna"}
              </Text>
            </Box>

            <Box p={{ base: "5", md: "6" }}>
              <VStack align="stretch" gap="3" mb="4">
                <Flex justify="space-between" fontSize="sm">
                  <Text color="fg.muted">Setup (jednorazowo)</Text>
                  <Text fontWeight="700" color="fg.default">{formatPLN(plan.sitePrice)}</Text>
                </Flex>
                <Flex justify="space-between" fontSize="sm">
                  <Text color="fg.muted">
                    Abonament · {config.billing === "annual" ? "12 miesięcy" : "1 miesiąc"}
                  </Text>
                  <Text fontWeight="700" color="fg.default">
                    {config.billing === "annual"
                      ? formatPLN(plan.monthlyPrice * 12)
                      : formatPLN(monthly)}
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

              <Box
                rounded="lg"
                bg="bg.subtle"
                border="1px solid"
                borderColor="border.default"
                p="3"
                mb="4"
              >
                <Flex align="center" justify="space-between" gap="2">
                  <HStack gap="2" minW="0">
                    <Flex
                      w="6"
                      h="6"
                      rounded="md"
                      bg="bg.canvas"
                      border="1px solid"
                      borderColor="border.default"
                      align="center"
                      justifyContent="center"
                      color="fg.muted"
                      flexShrink={0}
                      overflow="hidden"
                    >
                      {selectedMethod.iconImage ? (
                        <Box as="img" src={selectedMethod.iconImage} alt={selectedMethod.label} w="70%" h="70%" objectFit="contain" />
                      ) : (
                        <Box transform="scale(0.7)">{selectedMethod.icon}</Box>
                      )}
                    </Flex>
                    <Text fontSize="xs" color="fg.muted" truncate>
                      <Box as="span" color="fg.default" fontWeight="700">{selectedMethod.label}</Box>
                    </Text>
                  </HStack>
                  {invoice.needsVatInvoice === "yes" && (
                    <Text fontSize="2xs" fontWeight="800" color="accent.700" bg="accent.50" border="1px solid" borderColor="accent.200" rounded="md" px="2" py="0.5">
                      FAKTURA VAT
                    </Text>
                  )}
                </Flex>
              </Box>

              <Button
                onClick={handlePay}
                isLoading={processing}
                loadingText="Przetwarzanie..."
                spinner={<Spinner size="sm" color="white" />}
                isDisabled={!invoiceReady}
                w="full"
                h="14"
                rounded="xl"
                bg="accent.600"
                color="white"
                fontWeight="800"
                fontSize="md"
                _hover={{ bg: "accent.700", transform: "translateY(-1px)" }}
                _active={{ bg: "accent.800" }}
                _disabled={{ bg: "border.subtle", color: "fg.faint", cursor: "not-allowed", transform: "none" }}
                transition="all 0.15s"
                boxShadow="0 10px 25px -10px rgba(15, 118, 110, 0.5)"
              >
                Zapłać {formatPLN(total)}
                <Box ml="1.5" display="inline-flex" alignItems="center">
                  <ArrowRightIcon size={16} />
                </Box>
              </Button>

              <Text fontSize="xs" color="fg.subtle" mt="4" textAlign="center" lineHeight="1.5">
                Po płatności poprosimy Cię o krótki brief projektu.
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </OrderLayout>
  )
}
