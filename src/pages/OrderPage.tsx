import { useEffect, useMemo, useState } from "react"
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
  Spinner,
} from "@chakra-ui/react"
import { Link, useSearchParams } from "react-router-dom"
import { SEO } from "../components/SEO"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { pricingPlans } from "../data/pricingPlans"

type OrderFormState = {
  planSlug: string
  businessName: string
  industry: string
  projectGoal: string
  mainOffer: string
  requiredPages: string
  hasCurrentWebsite: "yes" | "no"
  currentWebsiteUrl: string
  hasDomain: "yes" | "no"
  domainName: string
  wantsMailBox: "yes" | "no"
  extraEmailsCount: number
  mailboxName: string
  hasLogo: "yes" | "no" | "need-design"
  projectLogoFile: string
  contactName: string
  contactPhone: string
  contactEmail: string
  companyEmail: string
  companyPhone: string
  companyAddress: string
  googleMapsUrl: string
  socialLinks: string
  designDirection: "adapt-current" | "new-design"
  newDesignMode: "custom" | "designer"
  designNotes: string
  referenceWebsite: string
  referenceFiles: string
  billingName: string
  taxId: string
  billingAddress: string
  paymentMethod: "payu_card" | "payu_blik" | "payu_p24" | "transfer"
  acceptTerms: boolean
}

const steps = [
  {
    title: "Wybierz plan",
    description: "Dobierz wdrożenie do tempa projektu i poziomu wsparcia.",
  },
  {
    title: "Brief projektu",
    description: "Zbierzmy cele, zakres strony i dane potrzebne do startu.",
  },
  {
    title: "Branding i design",
    description: "Określ styl, materiały i kierunek projektu graficznego.",
  },
  {
    title: "Kontakt i firma",
    description: "Dane do wdrożenia, domeny, skrzynek i komunikacji z klientami.",
  },
  {
    title: "Płatność i finalizacja",
    description: "Sprawdź podsumowanie i zarezerwuj realizację projektu.",
  },
]

const fieldStyle = {
  width: "100%",
  border: "2px solid",
  borderColor: "border.default",
  borderRadius: "16px",
  background: "bg.subtle",
  px: 5,
  py: 3,
  fontSize: "md",
  color: "fg.default",
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  _hover: {
    borderColor: "border.strong",
    background: "white",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  },
  _focus: {
    borderColor: "accent.700",
    background: "white",
    boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.1), 0 4px 12px rgba(37, 99, 235, 0.15)",
    transform: "translateY(-1px)",
  },
  _placeholder: {
    color: "fg.faint",
    fontWeight: "500",
  }
}

export const OrderPage = () => {
  const [searchParams] = useSearchParams()
  const initialPlanSlug = searchParams.get("plan") ?? "express"
  const hasPlanParam = searchParams.has("plan")

  const [step, setStep] = useState(hasPlanParam ? 1 : 0)
  const [submittedOrderId, setSubmittedOrderId] = useState("")
  const [isPaymentPending, setIsPaymentPending] = useState(false)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [form, setForm] = useState<OrderFormState>({
    planSlug: initialPlanSlug,
    businessName: "",
    industry: "",
    projectGoal: "",
    mainOffer: "",
    requiredPages: "",
    hasCurrentWebsite: "no",
    currentWebsiteUrl: "",
    hasDomain: "yes",
    domainName: "",
    wantsMailBox: "no",
    extraEmailsCount: 0,
    mailboxName: "",
    hasLogo: "no",
    projectLogoFile: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    companyEmail: "",
    companyPhone: "",
    companyAddress: "",
    googleMapsUrl: "",
    socialLinks: "",
    designDirection: "new-design",
    newDesignMode: "designer",
    designNotes: "",
    referenceWebsite: "",
    referenceFiles: "",
    billingName: "",
    taxId: "",
    billingAddress: "",
    paymentMethod: "payu_blik",
    acceptTerms: false,
  })

  useEffect(() => {
    setForm((current) => ({ ...current, planSlug: initialPlanSlug }))
  }, [initialPlanSlug])

  useEffect(() => {
    // Timeout ensures DOM has painted the new step before scrolling
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [step]);

  const selectedPlan = useMemo(
    () => pricingPlans.find((plan) => plan.slug === form.planSlug) ?? pricingPlans[0],
    [form.planSlug]
  )

  const displaySteps = hasPlanParam ? steps.slice(1) : steps
  const displayStepIndex = hasPlanParam ? step - 1 : step
  const progress = ((displayStepIndex + 1) / displaySteps.length) * 100

  const setField = <K extends keyof OrderFormState>(key: K, value: OrderFormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const handleSubmit = () => {
    setIsPaymentPending(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const confirmPayment = () => {
    setIsProcessingPayment(true)
    // Simulate payment processing delay
    setTimeout(() => {
      const orderId = `SG-${Date.now().toString().slice(-6)}`
      const payload = {
        orderId,
        submittedAt: new Date().toISOString(),
        plan: selectedPlan.name,
        ...form,
      }

      window.localStorage.setItem("seo-grow-last-order", JSON.stringify(payload))
      setSubmittedOrderId(orderId)
      setIsProcessingPayment(false)
      setIsPaymentPending(false)
    }, 2000)
  }

  const renderStepContent = () => {
    const totalPaymentAmount = parseInt(selectedPlan.setupPrice.replace(/\D/g, '')) + parseInt(selectedPlan.monthlyPrice.replace(/\D/g, ''))
    if (submittedOrderId) {
      return (
        <VStack align="start" gap="6">
          <Text
            fontSize="sm"
            fontWeight="700"
            color="#166534"
            bg="#DCFCE7"
            px="3"
            py="1"
            rounded="full"
          >
            Zamówienie przyjęte
          </Text>
          <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }} color="fg.default" lineHeight="1.1">
            Dziękujemy, Twoje zamówienie zostało opłacone i zapisane
          </Heading>
          <Text fontSize="lg" color="fg.muted" lineHeight="1.8">
            Numer rezerwacji: <strong>{submittedOrderId}</strong>. Zespół może teraz przygotować
            zakres, projekt i dalsze kroki wdrożenia na podstawie przesłanych informacji.
          </Text>
          <Box bg="bg.subtle" rounded="2xl" border="1px solid" borderColor="border.default" p="6" w="full">
            <VStack align="start" gap="3">
              <Text fontWeight="700" color="fg.default">Co dalej?</Text>
              <Text color="fg.muted">1. Weryfikujemy komplet materiałów i zakres projektu.</Text>
              <Text color="fg.muted">2. Przygotowujemy plan wdrożenia i harmonogram startu.</Text>
              <Text color="fg.muted">3. Poinformujemy Cię o kolejnych krokach rozpoczęcia prac.</Text>
            </VStack>
          </Box>
          <HStack gap="4" flexWrap="wrap">
            <Button as={Link} to="/" bg="fg.default" color="white" _hover={{ bg: "slate.800" }}>
              Wróć na stronę główną
            </Button>
            <Button as={Link} to="/blog" variant="outline" borderColor="border.strong">
              Przejdź do bloga
            </Button>
          </HStack>
        </VStack>
      )
    }

    if (isPaymentPending) {
      return (
        <VStack align="stretch" gap="6">
          <Text fontSize="sm" fontWeight="700" color="accent.700" textTransform="uppercase" letterSpacing="wider">
            Opłacenie zamówienia
          </Text>
          <Heading as="h2" fontSize="3xl" color="fg.default" lineHeight="1.2">
            Dokończ płatność aby zarezerwować projekt
          </Heading>
          <Text color="fg.muted" fontSize="md">
            Wybierz sposób sfinalizowania płatności za plan <strong>{selectedPlan.name}</strong>.
          </Text>

          {form.paymentMethod === "transfer" ? (
            <Box bg="bg.subtle" rounded="2xl" border="1px solid" borderColor="border.default" p="6">
              <VStack align="start" gap="4">
                <Text fontWeight="700" color="fg.default">Dane do przelewu bankowego</Text>
                <Box w="full" bg="white" p="4" rounded="xl" border="1px solid" borderColor="border.strong">
                  <Grid templateColumns={{ base: "1fr", sm: "120px 1fr" }} gap="2">
                    <Text color="fg.subtle" fontSize="sm">Odbiorca:</Text>
                    <Text fontWeight="600" color="fg.default">Grow Solutions — JDG</Text>
                    <Text color="fg.subtle" fontSize="sm">Numer konta:</Text>
                    <Text fontWeight="600" color="fg.default" fontFamily="monospace" fontSize="lg">PL 12 3456 7890 0000 0000 1234 5678</Text>
                    <Text color="fg.subtle" fontSize="sm">Tytulem:</Text>
                    <Text fontWeight="600" color="fg.default">Zaliczka - plan {selectedPlan.name}</Text>
                    <Text color="fg.subtle" fontSize="sm">Kwota:</Text>
                    <Text fontWeight="700" color="accent.700" fontSize="lg">{totalPaymentAmount} PLN</Text>
                  </Grid>
                </Box>
                <Text fontSize="sm" color="fg.subtle" mt="2">
                  Prosimy o dokonanie przelewu w ciągu 3 dni roboczych. Po księgowaniu wpłaty, przystąpimy do prac.
                </Text>
                <Button 
                  w="full" 
                  size="lg" 
                  bg="fg.default" 
                  color="white" 
                  _hover={{ bg: "slate.800" }} 
                  onClick={confirmPayment}
                  isLoading={isProcessingPayment}
                  loadingText="Potwierdzanie..."
                  mt="4"
                >
                  Potwierdzam wykonanie przelewu
                </Button>
              </VStack>
            </Box>
          ) : (
            <Box bg="bg.subtle" rounded="2xl" border="1px solid" borderColor="border.default" p="6">
              <VStack align="center" gap="5" py="4">
                <Box bg="accent.50" w="16" h="16" rounded="full" display="flex" alignItems="center" justifyContent="center">
                  <Text fontSize="2xl">💳</Text>
                </Box>
                <VStack gap="1" textAlign="center">
                  <Text fontWeight="700" fontSize="lg" color="fg.default">Przekierowanie do PayU</Text>
                  <Text color="fg.subtle" fontSize="sm">
                    Kliknij poniższy przycisk, aby bezpiecznie opłacić zamówienie za pomocą PayU.
                  </Text>
                </VStack>
                <Button 
                  w="full" 
                  size="lg" 
                  bg="accent.700" 
                  color="white" 
                  _hover={{ bg: "accent.800" }} 
                  onClick={confirmPayment}
                  isLoading={isProcessingPayment}
                  loadingText="Przetwarzanie platnosci..."
                  mt="2"
                >
                  Zaplac {totalPaymentAmount} PLN bezpiecznie
                </Button>
              </VStack>
            </Box>
          )}
          
          <Button 
            variant="ghost" 
            color="fg.subtle" 
            onClick={() => setIsPaymentPending(false)}
            isDisabled={isProcessingPayment}
          >
            ← Wróć do podsumowania
          </Button>
        </VStack>
      )
    }

    switch (step) {
      case 0:
        return (
          <VStack align="stretch" gap="4">
            {pricingPlans.map((plan) => (
              <Box
                key={plan.slug}
                border="2px solid"
                borderColor={form.planSlug === plan.slug ? "accent.700" : "border.default"}
                bg={form.planSlug === plan.slug ? "#EFF6FF" : "white"}
                rounded="xl"
                p={6}
                cursor="pointer"
                onClick={() => setField("planSlug", plan.slug)}
                transition="all 0.2s"
                position="relative"
              >
                <Flex direction={{ base: "column", md: "row" }} gap={6} align={{ md: "center" }}>
                  <Box
                    w={5}
                    h={5}
                    rounded="full"
                    border="2px solid"
                    borderColor={form.planSlug === plan.slug ? "accent.700" : "border.strong"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    bg="white"
                  >
                    {form.planSlug === plan.slug && <Box w={2.5} h={2.5} rounded="full" bg="accent.700" />}
                  </Box>

                  <Box flex="1">
                    <Flex align="center" gap={3} mb={1}>
                      <Text fontWeight="700" color="fg.default" fontSize="lg">
                        Plan {plan.name}
                      </Text>
                      {plan.badge && (
                        <Text bg="#DBEAFE" color="accent.800" textTransform="uppercase" fontSize="2xs" px={2} py={0.5} rounded="full" fontWeight="700">
                          Polecany
                        </Text>
                      )}
                    </Flex>
                    <Text color="fg.subtle" fontSize="sm" mb={4}>{plan.title}</Text>

                    <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap={4}>
                      <Box>
                        <Text fontSize="xs" color="fg.subtle" textTransform="uppercase" fontWeight="600" mb={1}>Wdrożenie</Text>
                        {plan.originalSetupPrice && (
                          <Flex align="center" gap="2" mb="1">
                            <Text fontSize="sm" color="fg.faint" textDecoration="line-through" fontWeight="500">
                              {plan.originalSetupPrice}
                            </Text>
                          </Flex>
                        )}
                        <Text fontSize="xl" fontWeight="800" color="fg.default">{plan.setupPrice}</Text>
                      </Box>
                      <Box>
                        <Text fontSize="xs" color="fg.subtle" textTransform="uppercase" fontWeight="600" mb={1}>Utrzymanie</Text>
                        <Text fontSize="lg" fontWeight="700" color="accent.700" mt="6">{plan.monthlyPrice} <Box as="span" fontSize="xs" color="fg.subtle" fontWeight="500">/ mies</Box></Text>
                      </Box>
                    </Grid>
                  </Box>

                  <Box display={{ base: "none", lg: "block" }} flex="1" borderLeft="1px solid" borderColor={form.planSlug === plan.slug ? "#BFDBFE" : "border.default"} pl={6}>
                    <VStack align="start" gap={2}>
                      {plan.features.slice(0, 4).map((feature, idx) => (
                        <Flex key={idx} align="start" gap={2}>
                          <Box color="accent.700" mt={0.5}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></Box>
                          <Text fontSize="sm" color="fg.muted">{feature}</Text>
                        </Flex>
                      ))}
                      {plan.features.length > 4 && <Text fontSize="xs" color="fg.subtle" mt={1}>+ więcej funkcji...</Text>}
                    </VStack>
                  </Box>
                </Flex>
              </Box>
            ))}
          </VStack>
        )
      case 1:
        return (
          <VStack align="stretch" gap="5" w="full">
            <Box w="full">
              <Text mb="2" fontWeight="600" color="fg.default">Nazwa firmy lub projektu</Text>
              <Input value={form.businessName} onChange={(e) => setField("businessName", e.target.value)} sx={fieldStyle} placeholder="Np. SEO Grow / Nazwa firmy" />
            </Box>
            <Box w="full">
              <Text mb="2" fontWeight="600" color="fg.default">Branza</Text>
              <Input value={form.industry} onChange={(e) => setField("industry", e.target.value)} sx={fieldStyle} placeholder="Np. klinika, restauracja, e-commerce, uslugi lokalne" />
            </Box>
            <Box w="full">
              <Text mb="2" fontWeight="600" color="fg.default">Główny cel projektu</Text>
              <Textarea value={form.projectGoal} onChange={(e) => setField("projectGoal", e.target.value)} sx={fieldStyle} minH="120px" placeholder="Co ma sprzedawać strona, jaki efekt ma dać i na czym najbardziej Ci zależy?" />
            </Box>
            <Box w="full">
              <Text mb="2" fontWeight="600" color="fg.default">Glowna oferta lub usluga</Text>
              <Textarea value={form.mainOffer} onChange={(e) => setField("mainOffer", e.target.value)} sx={fieldStyle} minH="100px" placeholder="Opisz główną ofertę, kluczowe usługi, przewagi i to, co klient powinien od razu zrozumieć." />
            </Box>
            <Box w="full">
              <Text mb="2" fontWeight="600" color="fg.default">Jakie podstrony sa potrzebne?</Text>
              <Textarea value={form.requiredPages} onChange={(e) => setField("requiredPages", e.target.value)} sx={fieldStyle} minH="100px" placeholder="Np. Strona główna, oferta, o nas, blog, kontakt, FAQ, realizacje..." />
            </Box>
            <Box>
              <Text mb="3" fontWeight="700" color="fg.default" fontSize="lg">Czy masz już obecnie stronę?</Text>
              <HStack gap="4" flexWrap="wrap">
                <Button 
                  size="lg"
                  flex="1"
                  minW="150px"
                  height="auto"
                  py="4"
                  variant={form.hasCurrentWebsite === "yes" ? "solid" : "outline"} 
                  bg={form.hasCurrentWebsite === "yes" ? "accent.50" : "white"} 
                  color={form.hasCurrentWebsite === "yes" ? "accent.700" : "fg.muted"} 
                  borderColor={form.hasCurrentWebsite === "yes" ? "accent.700" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ borderColor: "accent.700", bg: form.hasCurrentWebsite === "yes" ? "accent.50" : "bg.subtle" }}
                  onClick={() => setField("hasCurrentWebsite", "yes")}
                >
                  <VStack gap="1">
                    <Text fontWeight="700" fontSize="md">Tak</Text>
                    <Text fontSize="xs" fontWeight="normal" color={form.hasCurrentWebsite === "yes" ? "accent.600" : "fg.subtle"}>Mam już stronę</Text>
                  </VStack>
                </Button>
                <Button 
                  size="lg"
                  flex="1"
                  minW="150px"
                  height="auto"
                  py="4"
                  variant={form.hasCurrentWebsite === "no" ? "solid" : "outline"} 
                  bg={form.hasCurrentWebsite === "no" ? "accent.50" : "white"} 
                  color={form.hasCurrentWebsite === "no" ? "accent.700" : "fg.muted"} 
                  borderColor={form.hasCurrentWebsite === "no" ? "accent.700" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ borderColor: "accent.700", bg: form.hasCurrentWebsite === "no" ? "accent.50" : "bg.subtle" }}
                  onClick={() => setField("hasCurrentWebsite", "no")}
                >
                  <VStack gap="1">
                    <Text fontWeight="700" fontSize="md">Nie</Text>
                    <Text fontSize="xs" fontWeight="normal" color={form.hasCurrentWebsite === "no" ? "accent.600" : "fg.subtle"}>To mój pierwszy projekt</Text>
                  </VStack>
                </Button>
              </HStack>
            </Box>
            {form.hasCurrentWebsite === "yes" && (
              <Box>
                <Text mb="2" fontWeight="600" color="fg.default">Adres obecnej strony</Text>
                <Input value={form.currentWebsiteUrl} onChange={(e) => setField("currentWebsiteUrl", e.target.value)} sx={fieldStyle} placeholder="https://twojastrona.pl" />
              </Box>
            )}
            
            <Box>
              <Text mb="3" fontWeight="700" color="fg.default" fontSize="lg">Czy posiadasz logo?</Text>
              <VStack align="stretch" gap="4">
                <Button 
                  justifyContent="flex-start" 
                  height="auto"
                  py="4"
                  px="5"
                  variant={form.hasLogo === "yes" ? "solid" : "outline"} 
                  bg={form.hasLogo === "yes" ? "accent.50" : "white"} 
                  color={form.hasLogo === "yes" ? "accent.700" : "fg.muted"} 
                  borderColor={form.hasLogo === "yes" ? "accent.700" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ borderColor: "accent.700", bg: form.hasLogo === "yes" ? "accent.50" : "bg.subtle" }}
                  onClick={() => setField("hasLogo", "yes")}
                >
                  <VStack align="start" gap="1">
                    <Text fontWeight="700" fontSize="md">Tak, mam logo</Text>
                    <Text fontSize="sm" fontWeight="normal" color={form.hasLogo === "yes" ? "accent.600" : "fg.subtle"} whiteSpace="normal" textAlign="left">Mam gotowe logo i chcę je użyć</Text>
                  </VStack>
                </Button>
                <Button 
                  justifyContent="flex-start" 
                  height="auto"
                  py="4"
                  px="5"
                  variant={form.hasLogo === "no" ? "solid" : "outline"} 
                  bg={form.hasLogo === "no" ? "accent.50" : "white"} 
                  color={form.hasLogo === "no" ? "accent.700" : "fg.muted"} 
                  borderColor={form.hasLogo === "no" ? "accent.700" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ borderColor: "accent.700", bg: form.hasLogo === "no" ? "accent.50" : "bg.subtle" }}
                  onClick={() => setField("hasLogo", "no")}
                >
                  <VStack align="start" gap="1">
                    <Text fontWeight="700" fontSize="md">Nie mam logo</Text>
                    <Text fontSize="sm" fontWeight="normal" color={form.hasLogo === "no" ? "accent.600" : "fg.subtle"} whiteSpace="normal" textAlign="left">Potrzebuję nowego logo</Text>
                  </VStack>
                </Button>
                <Button 
                  justifyContent="flex-start" 
                  height="auto"
                  py="4"
                  px="5"
                  variant={form.hasLogo === "need-design" ? "solid" : "outline"} 
                  bg={form.hasLogo === "need-design" ? "accent.50" : "white"} 
                  color={form.hasLogo === "need-design" ? "accent.700" : "fg.muted"} 
                  borderColor={form.hasLogo === "need-design" ? "accent.700" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ borderColor: "accent.700", bg: form.hasLogo === "need-design" ? "accent.50" : "bg.subtle" }}
                  onClick={() => setField("hasLogo", "need-design")}
                >
                  <VStack align="start" gap="1">
                    <Text fontWeight="700" fontSize="md">Mam logo, ale chcę nowe</Text>
                    <Text fontSize="sm" fontWeight="normal" color={form.hasLogo === "need-design" ? "accent.600" : "fg.subtle"} whiteSpace="normal" textAlign="left">Chcę odświeżyć istniejące logo</Text>
                  </VStack>
                </Button>
              </VStack>
            </Box>
            {(form.hasLogo === "yes" || form.hasLogo === "need-design") && (
              <Box w="full">
                <Text mb="2" fontWeight="600" color="fg.default">
                  {form.hasLogo === "yes" ? "Prześlij swoje logo" : "Prześlij inspiracje dla nowego logo"}
                </Text>
                <Box
                  border="2px dashed"
                  borderColor="border.strong"
                  rounded="xl"
                  p="6"
                  textAlign="center"
                  bg="bg.subtle"
                  _hover={{ borderColor: "accent.700", bg: "#F0F9FF" }}
                  transition="all 0.2s"
                  cursor="pointer"
                >
                  <VStack gap="3">
                    <Box bg="border.subtle" color="fg.muted" w="12" h="12" rounded="full" display="flex" alignItems="center" justifyContent="center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                    </Box>
                    <VStack gap="1">
                      <Text fontWeight="600" color="fg.default">
                        {form.hasLogo === "yes" ? "Kliknij aby dodać logo" : "Kliknij aby dodać inspiracje"}
                      </Text>
                      <Text fontSize="sm" color="fg.subtle">
                        {form.hasLogo === "yes" 
                          ? "Dozwolone formaty: PNG, JPG, SVG (max 5MB)" 
                          : "Możesz dodać zdjęcia, screenshoty, linki (max 5MB)"
                        }
                      </Text>
                    </VStack>
                    <Button
                      size="sm"
                      variant="outline"
                      colorScheme="blue"
                      borderColor="accent.700"
                      color="accent.700"
                      _hover={{ bg: "accent.50" }}
                    >
                      Wybierz pliki
                    </Button>
                  </VStack>
                </Box>
              </Box>
            )}
          </VStack>
        )
      case 2:
        return (
          <VStack align="stretch" gap="5">
            <Box>
              <Text mb="3" fontWeight="700" color="fg.default" fontSize="lg">Jak mamy podejsc do designu?</Text>
              <VStack align="stretch" gap="4">
                {form.hasCurrentWebsite === "yes" && (
                  <Button 
                    justifyContent="flex-start" 
                    height="auto"
                    py="4"
                    px="5"
                    variant={form.designDirection === "adapt-current" ? "solid" : "outline"} 
                    bg={form.designDirection === "adapt-current" ? "accent.50" : "white"} 
                    color={form.designDirection === "adapt-current" ? "accent.700" : "fg.muted"} 
                    borderColor={form.designDirection === "adapt-current" ? "accent.700" : "border.default"}
                    borderWidth="2px"
                    rounded="xl"
                    _hover={{ borderColor: "accent.700", bg: form.designDirection === "adapt-current" ? "accent.50" : "bg.subtle" }}
                    onClick={() => setField("designDirection", "adapt-current")}
                  >
                    <VStack align="start" gap="1">
                      <Text fontWeight="700" fontSize="md">Zaadaptujcie obecny design do CMS</Text>
                      <Text fontSize="sm" fontWeight="normal" color={form.designDirection === "adapt-current" ? "accent.600" : "fg.subtle"} whiteSpace="normal" textAlign="left">Przeniesiemy Twoją stronę bez większych zmian w wyglądzie</Text>
                    </VStack>
                  </Button>
                )}
                <Button 
                  justifyContent="flex-start" 
                  height="auto"
                  py="4"
                  px="5"
                  variant={form.designDirection === "new-design" ? "solid" : "outline"} 
                  bg={form.designDirection === "new-design" ? "accent.50" : "white"} 
                  color={form.designDirection === "new-design" ? "accent.700" : "fg.muted"} 
                  borderColor={form.designDirection === "new-design" ? "accent.700" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ borderColor: "accent.700", bg: form.designDirection === "new-design" ? "accent.50" : "bg.subtle" }}
                  onClick={() => setField("designDirection", "new-design")}
                >
                  <VStack align="start" gap="1">
                    <Text fontWeight="700" fontSize="md">Chce nowy projekt</Text>
                    <Text fontSize="sm" fontWeight="normal" color={form.designDirection === "new-design" ? "accent.600" : "fg.subtle"} whiteSpace="normal" textAlign="left">Zaprojektujemy wszystko od nowa w oparciu o Twoje wytyczne</Text>
                  </VStack>
                </Button>
              </VStack>
            </Box>

            {form.designDirection === "new-design" && (
              <Box>
                <Text mb="3" fontWeight="700" color="fg.default" fontSize="lg">Jaki model projektu wybierasz?</Text>
                <VStack align="stretch" gap="4">
                  <Button 
                    justifyContent="flex-start" 
                    height="auto"
                    py="4"
                    px="5"
                    variant={form.newDesignMode === "custom" ? "solid" : "outline"} 
                    bg={form.newDesignMode === "custom" ? "accent.50" : "white"} 
                    color={form.newDesignMode === "custom" ? "accent.700" : "fg.muted"} 
                    borderColor={form.newDesignMode === "custom" ? "accent.700" : "border.default"}
                    borderWidth="2px"
                    rounded="xl"
                    _hover={{ borderColor: "accent.700", bg: form.newDesignMode === "custom" ? "accent.50" : "bg.subtle" }}
                    onClick={() => setField("newDesignMode", "custom")}
                  >
                    <VStack align="start" gap="1">
                      <Text fontWeight="700" fontSize="md">Design spersonalizowany na podstawie moich referencji</Text>
                      <Text fontSize="sm" fontWeight="normal" color={form.newDesignMode === "custom" ? "accent.600" : "fg.subtle"} whiteSpace="normal" textAlign="left">Przekażesz nam konkretne przykłady i wytyczne, których będziemy się trzymać</Text>
                    </VStack>
                  </Button>
                  <Button 
                    justifyContent="flex-start" 
                    height="auto"
                    py="4"
                    px="5"
                    variant={form.newDesignMode === "designer" ? "solid" : "outline"} 
                    bg={form.newDesignMode === "designer" ? "accent.50" : "white"} 
                    color={form.newDesignMode === "designer" ? "accent.700" : "fg.muted"} 
                    borderColor={form.newDesignMode === "designer" ? "accent.700" : "border.default"}
                    borderWidth="2px"
                    rounded="xl"
                    _hover={{ borderColor: "accent.700", bg: form.newDesignMode === "designer" ? "accent.50" : "bg.subtle" }}
                    onClick={() => setField("newDesignMode", "designer")}
                  >
                    <VStack align="start" gap="1">
                      <Text fontWeight="700" fontSize="md">Ufam projektantowi i chce design pod Waszym kryterium</Text>
                      <Text fontSize="sm" fontWeight="normal" color={form.newDesignMode === "designer" ? "accent.600" : "fg.subtle"} whiteSpace="normal" textAlign="left">Zaprojektujemy stronę według naszego doświadczenia i najlepszych praktyk</Text>
                    </VStack>
                  </Button>
                </VStack>
              </Box>
            )}

            <Box>
              <Text mb="2" fontWeight="600" color="fg.default">Logo lub materiały brandowe</Text>
              <Input
                type="file"
                accept=".png,.jpg,.jpeg,.webp,.svg,.pdf"
                sx={fieldStyle}
                py="2"
                onChange={(e) => setField("projectLogoFile", e.target.files?.[0]?.name ?? "")}
              />
              {form.projectLogoFile && (
                <Text mt="2" fontSize="sm" color="fg.subtle">
                  Zalaczono: {form.projectLogoFile}
                </Text>
              )}
            </Box>

            <Box>
              <Text mb="2" fontWeight="600" color="fg.default">Strony referencyjne</Text>
              <Textarea value={form.referenceWebsite} onChange={(e) => setField("referenceWebsite", e.target.value)} sx={fieldStyle} minH="110px" placeholder="Wklej linki do stron, które Ci się podobają, oraz napisz co chcesz z nich zachować." />
            </Box>

            <Box>
              <Text mb="2" fontWeight="600" color="fg.default">Pliki referencyjne / inspiracje</Text>
              <Input
                type="file"
                multiple
                accept=".png,.jpg,.jpeg,.webp,.pdf"
                sx={fieldStyle}
                py="2"
                onChange={(e) =>
                  setField(
                    "referenceFiles",
                    Array.from(e.target.files ?? [])
                      .map((file) => file.name)
                      .join(", ")
                  )
                }
              />
              {form.referenceFiles && (
                <Text mt="2" fontSize="sm" color="fg.subtle">
                  Zalaczniki: {form.referenceFiles}
                </Text>
              )}
            </Box>

            <Box>
              <Text mb="2" fontWeight="600" color="fg.default">Uwagi do stylu i projektu</Text>
              <Textarea value={form.designNotes} onChange={(e) => setField("designNotes", e.target.value)} sx={fieldStyle} minH="140px" placeholder="Kolory, charakter marki, elementy, których unikać, oczekiwania do UX, sekcje sprzedażowe, priorytety mobilne..." />
            </Box>
          </VStack>
        )
      case 3:
        return (
          <VStack align="stretch" gap="6">
            <Box bg="bg.subtle" p="6" rounded="2xl" border="1px solid" borderColor="border.default">
              <Text mb="2" fontWeight="700" color="fg.default" fontSize="lg">1. Dane do kontaktu z Tobą</Text>
              <Text fontSize="sm" color="fg.subtle" mb="5">Te dane posłużą nam wyłącznie do komunikacji w trakcie tworzenia projektu.</Text>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="5" w="full">
                <Box w="full" gridColumn={{ md: "span 2" }}>
                  <Text mb="2" fontWeight="600" color="fg.default">Imię i nazwisko osoby kontaktowej</Text>
                  <Input value={form.contactName} onChange={(e) => setField("contactName", e.target.value)} sx={fieldStyle} placeholder="Jan Kowalski" />
                </Box>
                <Box w="full">
                  <Text mb="2" fontWeight="600" color="fg.default">Twój telefon</Text>
                  <Input value={form.contactPhone} onChange={(e) => setField("contactPhone", e.target.value)} sx={fieldStyle} placeholder="+48 ..." />
                </Box>
                <Box w="full">
                  <Text mb="2" fontWeight="600" color="fg.default">Twój email</Text>
                  <Input value={form.contactEmail} onChange={(e) => setField("contactEmail", e.target.value)} sx={fieldStyle} placeholder="kontakt@twojmail.pl" />
                </Box>
              </Grid>
            </Box>

            <Box bg="bg.subtle" p="6" rounded="2xl" border="1px solid" borderColor="border.default">
              <Text mb="2" fontWeight="700" color="fg.default" fontSize="lg">2. Dane kontaktowe na stronę internetową</Text>
              <Text fontSize="sm" color="fg.subtle" mb="5">Wypełnij informacje, które chcesz opublikować na swojej nowej stronie (w zakładce Kontakt, stopce itp.).</Text>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="5" w="full">
                <Box w="full">
                  <Text mb="2" fontWeight="600" color="fg.default">Firmowy adres email (widoczny na stronie)</Text>
                  <Input value={form.companyEmail} onChange={(e) => setField("companyEmail", e.target.value)} sx={fieldStyle} placeholder="biuro@firma.pl" />
                </Box>
                <Box w="full">
                  <Text mb="2" fontWeight="600" color="fg.default">Firmowy telefon (widoczny na stronie)</Text>
                  <Input value={form.companyPhone} onChange={(e) => setField("companyPhone", e.target.value)} sx={fieldStyle} placeholder="+48 ..." />
                </Box>
                <Box w="full" gridColumn={{ md: "span 2" }}>
                  <Text mb="2" fontWeight="600" color="fg.default">Adres firmy (widoczny na stronie)</Text>
                  <Input value={form.companyAddress} onChange={(e) => setField("companyAddress", e.target.value)} sx={fieldStyle} placeholder="ul. Przykładowa 1, 00-000 Warszawa" />
                </Box>
                <Box w="full" gridColumn={{ md: "span 2" }}>
                  <Text mb="2" fontWeight="600" color="fg.default">Link do wizytówki Google Maps</Text>
                  <Input value={form.googleMapsUrl} onChange={(e) => setField("googleMapsUrl", e.target.value)} sx={fieldStyle} placeholder="https://maps.google.com/..." />
                </Box>
                <Box w="full" gridColumn={{ md: "span 2" }}>
                  <Text mb="2" fontWeight="600" color="fg.default">Linki do social media</Text>
                  <Textarea value={form.socialLinks} onChange={(e) => setField("socialLinks", e.target.value)} sx={fieldStyle} minH="110px" placeholder="Facebook, Instagram, LinkedIn, TikTok, YouTube..." />
                </Box>
              </Grid>
            </Box>

            <Box bg="bg.subtle" p="6" rounded="2xl" border="1px solid" borderColor="border.default">
              <Text mb="5" fontWeight="700" color="fg.default" fontSize="lg">3. Kwestie techniczne (Domena i Skrzynki)</Text>
              <VStack align="stretch" gap="5">
                <Box>
                  <Text mb="3" fontWeight="700" color="fg.default" fontSize="md">Czy posiadasz już własną domenę internetową?</Text>
                  <HStack gap="4" flexWrap="wrap">
                    <Button 
                      size="lg"
                      flex="1"
                      minW="150px"
                      height="auto"
                      py="4"
                      variant={form.hasDomain === "yes" ? "solid" : "outline"} 
                      bg={form.hasDomain === "yes" ? "accent.50" : "white"} 
                      color={form.hasDomain === "yes" ? "accent.700" : "fg.muted"} 
                      borderColor={form.hasDomain === "yes" ? "accent.700" : "border.default"}
                      borderWidth="2px"
                      rounded="xl"
                      _hover={{ borderColor: "accent.700", bg: form.hasDomain === "yes" ? "accent.50" : "bg.subtle" }}
                      onClick={() => setField("hasDomain", "yes")}
                    >
                      <VStack gap="1">
                        <Text fontWeight="700" fontSize="md">Tak, posiadam</Text>
                      </VStack>
                    </Button>
                    <Button 
                      size="lg"
                      flex="1"
                      minW="150px"
                      height="auto"
                      py="4"
                      variant={form.hasDomain === "no" ? "solid" : "outline"} 
                      bg={form.hasDomain === "no" ? "accent.50" : "white"} 
                      color={form.hasDomain === "no" ? "accent.700" : "fg.muted"} 
                      borderColor={form.hasDomain === "no" ? "accent.700" : "border.default"}
                      borderWidth="2px"
                      rounded="xl"
                      _hover={{ borderColor: "accent.700", bg: form.hasDomain === "no" ? "accent.50" : "bg.subtle" }}
                      onClick={() => setField("hasDomain", "no")}
                    >
                      <VStack gap="1">
                        <Text fontWeight="700" fontSize="md">Nie, zarejestrujcie dla mnie</Text>
                      </VStack>
                    </Button>
                  </HStack>
                </Box>

                <Box>
                  <Text mb="2" fontWeight="600" color="fg.default">
                    {form.hasDomain === "yes" ? "Podaj adres swojej domeny" : "Podaj proponowaną nazwę domeny (sprawdzimy jej dostępność)"}
                  </Text>
                  <Input value={form.domainName} onChange={(e) => setField("domainName", e.target.value)} sx={fieldStyle} placeholder="np. twojadomena.pl" />
                </Box>
              </VStack>
            </Box>

            <Box bg="bg.subtle" rounded="xl" p="6" border="1px solid" borderColor="border.default">
              <HStack gap="3" align="flex-start">
                <Box bg="white" color="fg.default" border="1px solid" borderColor="border.default" w="10" h="10" rounded="full" display="flex" alignItems="center" justifyContent="center" flexShrink="0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </Box>
                <VStack align="start" gap="2">
                  <Text fontWeight="700" color="accent.700" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
                    Bezpieczeństwo Twoich danych
                  </Text>
                  <Text color="fg.default" lineHeight="1.7" fontWeight="500">
                    Twoje dane są u nas w pełni bezpieczne. Potrzebujemy ich, aby przygotować dane logowania do Twojego sklepu SEO Grow i rozpocząć współpracę.
                  </Text>
                  <Text color="fg.subtle" fontSize="sm" lineHeight="1.6">
                    Informacje są przechowywane zgodnie z RODO i nigdy nie są udostępniane osobom trzecim.
                  </Text>
                </VStack>
              </HStack>
            </Box>

            <Box bg="bg.subtle" p="6" rounded="2xl" border="1px solid" borderColor="border.default">
              <Text mb="3" fontWeight="700" color="fg.default">Skrzynki pocztowe w domenie</Text>
              <Text fontSize="sm" color="fg.subtle" mb="4">
                Pierwsza skrzynka pocztowa jest w cenie planu. Każda kolejna to koszt 30 PLN / rocznie.
              </Text>
              <HStack gap="4" flexWrap="wrap" mb="5">
                <Button 
                  size="lg"
                  flex="1"
                  minW="150px"
                  height="auto"
                  py="4"
                  variant={form.wantsMailBox === "yes" ? "solid" : "outline"} 
                  bg={form.wantsMailBox === "yes" ? "accent.50" : "white"} 
                  color={form.wantsMailBox === "yes" ? "accent.700" : "fg.muted"} 
                  borderColor={form.wantsMailBox === "yes" ? "accent.700" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ borderColor: "accent.700", bg: form.wantsMailBox === "yes" ? "accent.50" : "bg.subtle" }}
                  onClick={() => setField("wantsMailBox", "yes")}
                >
                  <VStack gap="1">
                    <Text fontWeight="700" fontSize="md">Tak, potrzebuję</Text>
                  </VStack>
                </Button>
                <Button 
                  size="lg"
                  flex="1"
                  minW="150px"
                  height="auto"
                  py="4"
                  variant={form.wantsMailBox === "no" ? "solid" : "outline"} 
                  bg={form.wantsMailBox === "no" ? "accent.50" : "white"} 
                  color={form.wantsMailBox === "no" ? "accent.700" : "fg.muted"} 
                  borderColor={form.wantsMailBox === "no" ? "accent.700" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ borderColor: "accent.700", bg: form.wantsMailBox === "no" ? "accent.50" : "bg.subtle" }}
                  onClick={() => { setField("wantsMailBox", "no"); setField("extraEmailsCount", 0); }}
                >
                  <VStack gap="1">
                    <Text fontWeight="700" fontSize="md">Nie potrzebuję</Text>
                  </VStack>
                </Button>
              </HStack>

              {form.wantsMailBox === "yes" && (
                <VStack align="stretch" gap="4">
                  <Box>
                    <Text mb="2" fontWeight="600" color="fg.default" fontSize="sm">Główny adres email (w cenie)</Text>
                    <Input value={form.mailboxName} onChange={(e) => setField("mailboxName", e.target.value)} sx={fieldStyle} placeholder="np. kontakt@twojadomena.pl" />
                  </Box>
                  <Box>
                    <Text mb="2" fontWeight="600" color="fg.default" fontSize="sm">Liczba dodatkowych skrzynek (+30 PLN/szt)</Text>
                    <HStack>
                      <Button onClick={() => setField("extraEmailsCount", Math.max(0, form.extraEmailsCount - 1))} size="sm" variant="outline">-</Button>
                      <Text fontWeight="700" w="8" textAlign="center">{form.extraEmailsCount}</Text>
                      <Button onClick={() => setField("extraEmailsCount", form.extraEmailsCount + 1)} size="sm" variant="outline">+</Button>
                    </HStack>
                  </Box>
                </VStack>
              )}
            </Box>
          </VStack>
        )
      default:
        return (
          <VStack align="stretch" gap="6">
            <Box bg="bg.subtle" rounded="2xl" border="1px solid" borderColor="border.default" p="6">
              <VStack align="start" gap="4">
                <Text fontSize="sm" fontWeight="700" color="accent.700" textTransform="uppercase" letterSpacing="wider">Podsumowanie zamówienia</Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4" w="full">
                  <Box>
                    <Text fontSize="xs" color="fg.subtle" mb="1">Wybrany plan</Text>
                    <Text fontWeight="600" color="fg.default">{selectedPlan.name}</Text>
                  </Box>
                  <Box>
                    <Text fontSize="xs" color="fg.subtle" mb="1">Domena</Text>
                    <Text fontWeight="600" color="fg.default">{form.hasDomain === "yes" ? "Własna domena:" : "Do rejestracji:"} {form.domainName || "Nie podano"}</Text>
                  </Box>
                  <Box>
                    <Text fontSize="xs" color="fg.subtle" mb="1">Skrzynki pocztowe</Text>
                    <Text fontWeight="600" color="fg.default">
                      {form.wantsMailBox === "yes" ? `1 główna + ${form.extraEmailsCount} dodatkowych` : "Brak skrzynek"}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="xs" color="fg.subtle" mb="1">Dane kontaktowe</Text>
                    <Text fontWeight="600" color="fg.default">{form.contactName || "Nie podano"} / {form.contactPhone || "Nie podano"}</Text>
                  </Box>
                </Grid>
                
                <Box w="full" pt="4" mt="2" borderTop="1px dashed" borderColor="border.strong">
                  <HStack justify="space-between" mb="2">
                    <Text color="fg.muted">Wdrożenie jednorazowe</Text>
                    <Text fontWeight="600" color="fg.default">{selectedPlan.setupPrice}</Text>
                  </HStack>
                  <HStack justify="space-between" mb="2">
                    <Text color="fg.muted">Utrzymanie miesięczne (plan)</Text>
                    <Text fontWeight="600" color="fg.default">{selectedPlan.monthlyPrice}</Text>
                  </HStack>
                  {form.extraEmailsCount > 0 && (
                    <HStack justify="space-between" mb="2">
                      <Text color="fg.muted">Dodatkowe skrzynki pocztowe ({form.extraEmailsCount} x 30 PLN)</Text>
                      <Text fontWeight="600" color="fg.default">+{form.extraEmailsCount * 30} PLN / rok</Text>
                    </HStack>
                  )}
                  {form.hasDomain === "no" && (
                    <HStack justify="space-between" mb="2">
                      <Text color="fg.muted">Rejestracja domeny (1 rok)</Text>
                      <Text fontWeight="600" color="fg.default">Zależnie od rozszerzenia (ustalane indywidualnie)</Text>
                    </HStack>
                  )}
                  <HStack justify="space-between" pt="3" mt="3" borderTop="1px solid" borderColor="border.strong">
                    <Text fontWeight="700" color="fg.default">Szacowany koszt miesięczny</Text>
                    <Text fontWeight="800" color="accent.700" fontSize="xl">
                      {parseInt(selectedPlan.monthlyPrice.replace(/\D/g, ''))} PLN / mies
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="5" w="full">
              <Box w="full">
                <Text mb="2" fontWeight="600" color="fg.default">Dane do faktury</Text>
                <Input value={form.billingName} onChange={(e) => setField("billingName", e.target.value)} sx={fieldStyle} placeholder="Nazwa firmy / imię i nazwisko" />
              </Box>
              <Box w="full">
                <Text mb="2" fontWeight="600" color="fg.default">NIP / numer podatkowy</Text>
                <Input value={form.taxId} onChange={(e) => setField("taxId", e.target.value)} sx={fieldStyle} placeholder="Opcjonalnie" />
              </Box>
            </Grid>

            <Box>
              <Text mb="2" fontWeight="600" color="fg.default">Adres do faktury</Text>
              <Textarea value={form.billingAddress} onChange={(e) => setField("billingAddress", e.target.value)} sx={fieldStyle} minH="110px" placeholder="Ulica, numer, kod pocztowy, miasto, kraj" />
            </Box>

            <Box>
              <Text mb="3" fontWeight="700" color="fg.default" fontSize="lg">Metoda platnosci</Text>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
                <Button 
                  height="auto"
                  py="4"
                  px="5"
                  variant={form.paymentMethod === "payu_blik" ? "solid" : "outline"} 
                  bg={form.paymentMethod === "payu_blik" ? "bg.subtle" : "white"} 
                  color={form.paymentMethod === "payu_blik" ? "fg.default" : "fg.subtle"} 
                  borderColor={form.paymentMethod === "payu_blik" ? "fg.default" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ 
                    borderColor: "fg.default", 
                    bg: form.paymentMethod === "payu_blik" ? "bg.subtle" : "bg.subtle",
                  }}
                  transition="all 0.2s"
                  onClick={() => setField("paymentMethod", "payu_blik")}
                >
                  <VStack gap="1">
                    <Text fontWeight="600" fontSize="md" color="fg.default">BLIK (PayU)</Text>
                    <Text fontSize="xs" fontWeight="normal" color={form.paymentMethod === "payu_blik" ? "fg.default" : "fg.subtle"}>Szybka płatność kodem</Text>
                  </VStack>
                </Button>
                <Button 
                  height="auto"
                  py="4"
                  px="5"
                  variant={form.paymentMethod === "payu_p24" ? "solid" : "outline"} 
                  bg={form.paymentMethod === "payu_p24" ? "bg.subtle" : "white"} 
                  color={form.paymentMethod === "payu_p24" ? "fg.default" : "fg.subtle"} 
                  borderColor={form.paymentMethod === "payu_p24" ? "fg.default" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ 
                    borderColor: "fg.default", 
                    bg: form.paymentMethod === "payu_p24" ? "bg.subtle" : "bg.subtle",
                  }}
                  transition="all 0.2s"
                  onClick={() => setField("paymentMethod", "payu_p24")}
                >
                  <VStack gap="1">
                    <Text fontWeight="600" fontSize="md" color="fg.default">Przelew online (PayU)</Text>
                    <Text fontSize="xs" fontWeight="normal" color={form.paymentMethod === "payu_p24" ? "fg.default" : "fg.subtle"}>Szybki przelew z banku</Text>
                  </VStack>
                </Button>
                <Button 
                  height="auto"
                  py="4"
                  px="5"
                  variant={form.paymentMethod === "payu_card" ? "solid" : "outline"} 
                  bg={form.paymentMethod === "payu_card" ? "bg.subtle" : "white"} 
                  color={form.paymentMethod === "payu_card" ? "fg.default" : "fg.subtle"} 
                  borderColor={form.paymentMethod === "payu_card" ? "fg.default" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ 
                    borderColor: "fg.default", 
                    bg: form.paymentMethod === "payu_card" ? "bg.subtle" : "bg.subtle",
                  }}
                  transition="all 0.2s"
                  onClick={() => setField("paymentMethod", "payu_card")}
                >
                  <VStack gap="1">
                    <Text fontWeight="600" fontSize="md" color="fg.default">Karta płatnicza (PayU)</Text>
                    <Text fontSize="xs" fontWeight="normal" color={form.paymentMethod === "payu_card" ? "fg.default" : "fg.subtle"}>Visa, Mastercard</Text>
                  </VStack>
                </Button>
                <Button 
                  height="auto"
                  py="4"
                  px="5"
                  variant={form.paymentMethod === "transfer" ? "solid" : "outline"} 
                  bg={form.paymentMethod === "transfer" ? "bg.subtle" : "white"} 
                  color={form.paymentMethod === "transfer" ? "fg.default" : "fg.subtle"} 
                  borderColor={form.paymentMethod === "transfer" ? "fg.default" : "border.default"}
                  borderWidth="2px"
                  rounded="xl"
                  _hover={{ 
                    borderColor: "fg.default", 
                    bg: form.paymentMethod === "transfer" ? "bg.subtle" : "bg.subtle",
                  }}
                  transition="all 0.2s"
                  onClick={() => setField("paymentMethod", "transfer")}
                >
                  <VStack gap="1">
                    <Text fontWeight="600" fontSize="md" color="fg.default">Przelew tradycyjny</Text>
                    <Text fontSize="xs" fontWeight="normal" color={form.paymentMethod === "transfer" ? "fg.default" : "fg.subtle"}>Na numer konta</Text>
                  </VStack>
                </Button>
              </Grid>
            </Box>

            <Box bg="bg.subtle" rounded="xl" p="6" border="2px solid" borderColor={form.acceptTerms ? "accent.700" : "border.default"} transition="all 0.3s ease">
              <HStack gap="4" align="flex-start">
                <Box
                  as="button"
                  onClick={() => setField("acceptTerms", !form.acceptTerms)}
                  w="7" h="7" rounded="lg" 
                  border="3px solid" 
                  borderColor={form.acceptTerms ? "accent.700" : "border.strong"}
                  bg={form.acceptTerms ? "accent.700" : "white"}
                  display="flex" alignItems="center" justifyContent="center"
                  transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{ borderColor: "accent.700", transform: "scale(1.1)" }}
                  cursor="pointer"
                >
                  {form.acceptTerms && (
                    <Box color="white" fontSize="sm" fontWeight="bold">✓</Box>
                  )}
                </Box>
                <VStack align="start" gap="2">
                  <Text color="fg.default" fontWeight="600" lineHeight="1.6">
                    Potwierdzam, że przesłane dane są kompletne i mogą zostać wykorzystane do przygotowania projektu, harmonogramu oraz finalizacji zamówienia. 
                    <Text as="span" color="accent.700" fontWeight="700" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                      Zapoznałem się z regulaminem
                    </Text> i akceptuję jego warunki.
                  </Text>
                  <HStack gap="2">
                    <Box bg={form.acceptTerms ? "accent.700" : "border.subtle"} color={form.acceptTerms ? "white" : "fg.subtle"} px="3" py="1" rounded="full" fontSize="xs" fontWeight="700" transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)" border={form.acceptTerms ? "1px solid rgba(255,255,255,0.2)" : "1px solid border.default"}>
                      {form.acceptTerms ? "Zaakceptowane" : "Wymagane"}
                    </Box>
                    <Text fontSize="xs" color="fg.subtle">
                      Musisz zaakceptować, aby kontynuować
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        )
    }
  }

  const currentStepTitle = submittedOrderId ? "Zamówienie przyjęte" : isPaymentPending ? "Opłacenie zamówienia" : steps[step].title;
  const currentStepDescription = submittedOrderId ? "Dziękujemy, Twoje zamówienie zostało opłacone i zapisane." : isPaymentPending ? "Dokończ płatność aby zarezerwować projekt." : steps[step].description;

  return (
    <Box bg="bg.subtle" minH="100vh">
      <SEO
        title={`${currentStepTitle} | Zamów wdrożenie | SEO Grow`}
        description={`${currentStepDescription} Wybierz plan, przekaż materiały i uruchom projekt z automatycznym SEO oraz blogiem firmowym.`}
        path="/zamowienie"
        image="/panel.webp"
        keywords="zamówienie strony, wdrożenie SEO Grow, CMS z SEO, brief projektu, blog firmowy"
        noindex={true}
      />
      <Header />
      <Box pt={{ base: "32", md: "36" }} pb={{ base: "20", md: "24" }}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", xl: "340px 1fr" }} gap="8" alignItems="start" position="relative">
            <Box
              position="absolute"
              inset="0"
              bg="rgba(37, 99, 235, 0.02)"
              rounded="3xl"
              pointerEvents="none"
              transform="translateY(20px)"
              filter="blur(40px)"
              zIndex="-1"
            />
            <VStack
              align="stretch"
              gap="6"
              position={{ base: "static", xl: "sticky" }}
              top="132px"
            >
              <Box bg="white" rounded="3xl" border="1px solid" borderColor="var(--color-border-secondary)" p="6" boxShadow="0 25px 50px -12px rgba(0,0,0,0.05)">
                <Text fontSize="sm" fontWeight="700" color="accent.700" mb="3">
                  Proces zamowienia
                </Text>
                <Heading as="h2" fontSize="2xl" color="fg.default" lineHeight="1.2" mb="4">
                  Zamów projekt i uzupełnij brief bez ręcznej konsultacji
                </Heading>
                {hasPlanParam && (
                  <Box bg="accent.50" rounded="xl" p="4" mb="5" border="1px solid" borderColor="var(--color-brand-primary)" boxShadow="var(--shadow-sm)">
                    <HStack gap="3">
                      <Box bg="accent.700" color="white" px="3" py="1" rounded="full" fontSize="xs" fontWeight="700">
                        PLAN PREWYBRANY
                      </Box>
                      <Text fontSize="sm" color="var(--color-brand-primary)" fontWeight="600">
                        Wybrałeś plan <strong>{selectedPlan.name}</strong> - przejdźmy do briefu
                      </Text>
                    </HStack>
                  </Box>
                )}
                <Text color="fg.muted" lineHeight="1.8" mb="5">
                  Formularz prowadzi krok po kroku przez plan, branding, materiały, kontakt i finalizację.
                </Text>
                <VStack gap="4" mb="5">
                  <HStack w="full" justify="space-between" align="center" gap="2">
                    {displaySteps.map((_, index) => (
                      <Box
                        key={index}
                        flex="1"
                        h="2"
                        bg={index < displayStepIndex ? "accent.700" : index === displayStepIndex ? "accent.50" : "var(--color-border-secondary)"}
                        rounded="full"
                        transition="all 0.3s ease"
                        border={index === displayStepIndex ? "2px solid var(--color-brand-secondary)" : "none"}
                      />
                    ))}
                  </HStack>
                  <HStack w="full" justify="space-between">
                    <Text fontSize="xs" color="fg.subtle" fontWeight="600">
                      Krok {displayStepIndex + 1} z {displaySteps.length}
                    </Text>
                    <Text fontSize="xs" color="accent.700" fontWeight="700">
                      {Math.round(progress)}% ukończone
                    </Text>
                  </HStack>
                </VStack>
              </Box>

              <Box bg="white" rounded="3xl" border="1px solid" borderColor="var(--color-border-secondary)" p="6" boxShadow="var(--shadow-xl)">
                <HStack mb="4" justify="space-between" align="center">
                  <Text fontWeight="700" color="fg.default" textTransform="uppercase" fontSize="xs" letterSpacing="wider">
                    Twoje zamówienie
                  </Text>
                  <Box bg="accent.700" color="white" px="3" py="1" rounded="full" fontSize="xs" fontWeight="700">
                    {selectedPlan.name}
                  </Box>
                </HStack>
                <Box mb="4">
                  <Text color="fg.subtle" fontSize="sm" mb="1">Plan wdrożenia</Text>
                  <Text color="accent.700" fontWeight="800" fontSize="lg">
                    {selectedPlan.title}
                  </Text>
                </Box>
                <HStack justify="space-between" mb="2">
                  <Text color="fg.muted" fontSize="sm">Wdrożenie</Text>
                  <Text color="fg.default" fontWeight="700" fontSize="sm">{selectedPlan.setupPrice}</Text>
                </HStack>
                <HStack justify="space-between" mb="4">
                  <Text color="fg.muted" fontSize="sm">Utrzymanie</Text>
                  <Text color="fg.default" fontWeight="700" fontSize="sm">{selectedPlan.monthlyPrice}</Text>
                </HStack>
                {form.extraEmailsCount > 0 && (
                  <HStack justify="space-between" mb="4">
                    <Text color="fg.muted" fontSize="sm">Dodatkowe maile ({form.extraEmailsCount})</Text>
                    <Text color="fg.default" fontWeight="700" fontSize="sm">+{form.extraEmailsCount * 30} PLN/m</Text>
                  </HStack>
                )}
                <Box pt="4" borderTop="1px dashed" borderColor="border.strong">
                  <HStack justify="space-between" mb="1">
                    <Text color="fg.default" fontWeight="700">Miesięcznie (szacunkowo)</Text>
                    <Text color="accent.700" fontWeight="800" fontSize="lg">
                      {parseInt(selectedPlan.monthlyPrice.replace(/\D/g, '')) + form.extraEmailsCount * 30} PLN
                    </Text>
                  </HStack>
                  <Text fontSize="xs" color="fg.faint" textAlign="right">
                    Kwota ostateczna na umowie
                  </Text>
                </Box>
              </Box>

              <Box bg="fg.default" color="white" rounded="3xl" p="6">
                <Text fontWeight="700" mb="4">Co przygotować przed startem</Text>
                <VStack align="start" gap="3">
                  <Text color="rgba(255,255,255,0.8)">- logo, jeśli już istnieje</Text>
                  <Text color="rgba(255,255,255,0.8)">- linki do obecnej strony lub inspiracji</Text>
                  <Text color="rgba(255,255,255,0.8)">- główna oferta i przewagi firmy</Text>
                  <Text color="rgba(255,255,255,0.8)">- dane kontaktowe, domena i social media</Text>
                </VStack>
              </Box>
            </VStack>

            <Box bg="white" rounded="3xl" border="1px solid" borderColor="var(--color-border-secondary)" p={{ base: "6", md: "8" }} boxShadow="0 25px 50px -12px rgba(0,0,0,0.08)">
              <VStack align="start" gap="8">
                {!submittedOrderId && !isPaymentPending && (
                  <Box bg="bg.subtle" rounded="xl" p="6" border="1px solid" borderColor="var(--color-border-secondary)">
                    <HStack gap="3" mb="3">
                      <Box bg="fg.default" color="white" w="8" h="8" rounded="full" display="flex" alignItems="center" justifyContent="center" fontSize="sm" fontWeight="600">
                        {displayStepIndex + 1}
                      </Box>
                      <VStack align="start" gap="1">
                        <Text fontSize="xs" fontWeight="600" color="fg.subtle" textTransform="uppercase" letterSpacing="wider">
                          Krok {displayStepIndex + 1} z {displaySteps.length}
                        </Text>
                        <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} color="fg.default" lineHeight="1.2">
                          {steps[step].title}
                        </Heading>
                      </VStack>
                    </HStack>
                    <Text color="fg.subtle" lineHeight="1.7" fontSize="sm">
                      {steps[step].description}
                    </Text>
                  </Box>
                )}

                {renderStepContent()}

                {!submittedOrderId && !isPaymentPending && (
                  <Flex justify="space-between" align="center" w="full" gap="4" flexWrap="wrap" pt="6" borderTop="1px solid" borderColor="border.default">
                    <Button
                      onClick={() => {
                        setStep((current) => Math.max(current - 1, 0));
                      }}
                      variant="outline"
                      borderColor="border.default"
                      color="fg.muted"
                      _hover={{ 
                        borderColor: "fg.default", 
                        color: "fg.default",
                        bg: "bg.subtle",
                      }}
                      isDisabled={step === 0 || (hasPlanParam && step === 1)}
                      size="lg"
                      px="6"
                      rounded="xl"
                      fontWeight="600"
                      transition="all 0.2s"
                      borderWidth="2px"
                    >
                      ← Wstecz
                    </Button>

                    {step < steps.length - 1 ? (
                      <Button 
                        onClick={() => {
                          setStep((current) => Math.min(current + 1, steps.length - 1));
                        }} 
                        bg="fg.default"
                        color="white"
                        _hover={{ 
                          bg: "slate.800", 
                          transform: "translateY(-1px)", 
                          boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.2)"
                        }}
                        _active={{
                          transform: "translateY(0)",
                        }}
                        transition="all 0.2s"
                        size="lg"
                        px="10"
                        rounded="xl"
                        fontWeight="600"
                      >
                        Dalej →
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleSubmit} 
                        bg="fg.default" 
                        color="white" 
                        _hover={{ 
                          bg: "slate.800", 
                          transform: "translateY(-1px)", 
                          boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.2)"
                        }}
                        _active={{
                          transform: "translateY(0)",
                        }}
                        isDisabled={!form.acceptTerms}
                        transition="all 0.2s"
                        size="lg"
                        px="12"
                        rounded="xl"
                        fontWeight="600"
                        letterSpacing="wide"
                      >
                        Zarezerwuj projekt ✓
                      </Button>
                    )}
                  </Flex>
                )}
                
                {/* Data Protection Footer */}
                <Box mt="8" pt="6" borderTop="1px solid" borderColor="border.default">
                  <VStack align="start" gap="4">
                    <HStack gap="3" align="flex-start">
                      <Box bg="border.subtle" color="fg.muted" w="8" h="8" rounded="full" display="flex" alignItems="center" justifyContent="center" flexShrink="0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </Box>
                      <VStack align="start" gap="2">
                        <Text fontWeight="700" color="fg.default" fontSize="sm">
                          Informacja Administratora Danych Osobowych
                        </Text>
                        <Text color="fg.muted" lineHeight="1.6" fontSize="sm">
                          Twoje dane są u nas w pełni bezpieczne. Potrzebujemy ich, aby przygotować dane logowania do Twojego sklepu SEO Grow i rozpocząć współpracę.
                        </Text>
                      </VStack>
                    </HStack>
                    
                    <VStack align="start" gap="3" pl="11" w="full">
                      <Text color="fg.subtle" fontSize="xs" lineHeight="1.5">
                        Administratorem Twoich danych osobowych jest Grow Solutions — JDG z siedzibą w Ostródzie (14-100), ul. Czarnieckiego 13/12, NIP: 7412176947, REGON: 545084609.
                        Możesz wycofać zgody w każdym czasie poprzez wysłanie żądania na następujący adres e-mail: kontakt@seogrow.pl.
                        Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.
                      </Text>
                      <Text color="fg.subtle" fontSize="xs" lineHeight="1.5">
                        Więcej informacji na temat przetwarzania danych osobowych, w tym o przysługujących Ci prawach znajduje się w 
                        <Text as={Link} to="/polityka-prywatnosci" display="inline" color="accent.700" fontWeight="600" _hover={{ textDecoration: "underline" }}>
                          Polityce Prywatności
                        </Text>.
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}
