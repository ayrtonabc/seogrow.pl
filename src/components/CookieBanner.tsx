import { useEffect, useState } from "react"
import { Box, Button, Container, Flex, Grid, HStack, Link as ChakraLink, Text, VStack } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import {
  COOKIE_SETTINGS_EVENT,
  getDefaultCookiePreferences,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentPreferences,
} from "../lib/cookieConsent"

type EditablePreferences = Pick<CookieConsentPreferences, "necessary" | "functional" | "analytics" | "marketing">

const categoryCards = [
  {
    key: "necessary",
    title: "Niezbedne",
    description: "Zapewniaja prawidlowe dzialanie serwisu, bezpieczenstwo oraz zapis podstawowych ustawien prywatnosci.",
    locked: true,
  },
  {
    key: "functional",
    title: "Funkcjonalne",
    description: "Pozwalaja zapamietac preferencje interfejsu i ulatwiaja korzystanie z formularzy oraz elementow strony.",
    locked: false,
  },
  {
    key: "analytics",
    title: "Analityczne",
    description: "Umozliwiaja analize ruchu i sposobu korzystania z serwisu w celu jego dalszego doskonalenia.",
    locked: false,
  },
  {
    key: "marketing",
    title: "Marketingowe",
    description: "Moga wspierac ocene skutecznosci kampanii i dopasowanie komunikacji reklamowej, jesli zostana aktywowane.",
    locked: false,
  },
] as const

const ToggleButton = ({
  active,
  locked,
  onClick,
}: {
  active: boolean
  locked?: boolean
  onClick?: () => void
}) => {
  if (locked) {
    return (
      <Box display="flex" alignItems="center" gap="1.5" flexShrink={0}>
        <Box
          w="8"
          h="8"
          bg="#ECFDF5"
          border="1px solid #A7F3D0"
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </Box>
        <Text fontSize="xs" fontWeight="600" color="#059669">
          Wymagane
        </Text>
      </Box>
    )
  }
  return (
    <Box
      as="button"
      type="button"
      onClick={onClick}
      w="11"
      h="6"
      bg={active ? "#4F46E5" : "#E2E8F0"}
      rounded="full"
      flexShrink={0}
      transition="background-color 0.2s ease"
      cursor="pointer"
      _hover={{ opacity: 0.9 }}
      _focus={{ outline: "2px solid #4F46E5", outlineOffset: "2px" }}
      role="switch"
      aria-checked={active}
      aria-label={active ? "Wyłącz" : "Włącz"}
      position="relative"
      display="block"
    >
      <Box
        position="absolute"
        top="2px"
        left={active ? "22px" : "2px"}
        w="4"
        h="4"
        bg="white"
        rounded="full"
        transition="left 0.2s ease"
        boxShadow="0 1px 3px rgba(0,0,0,0.2)"
      />
    </Box>
  )
}

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<EditablePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const storedConsent = readCookieConsent()

    if (storedConsent) {
      setPreferences({
        necessary: true,
        functional: storedConsent.functional,
        analytics: storedConsent.analytics,
        marketing: storedConsent.marketing,
      })
      setIsVisible(false)
    } else {
      setPreferences(getDefaultCookiePreferences())
      setIsVisible(true)
    }

    const handleOpenSettings = () => {
      const nextConsent = readCookieConsent()
      setPreferences(
        nextConsent ?? {
          necessary: true,
          functional: false,
          analytics: false,
          marketing: false,
        },
      )
      setShowSettings(true)
      setIsVisible(true)
    }

    window.addEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings)
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings)
  }, [])

  const savePreferences = (nextPreferences: EditablePreferences) => {
    writeCookieConsent(nextPreferences)
    setPreferences(nextPreferences)
    setIsVisible(false)
    setShowSettings(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <Box position="fixed" insetX="0" bottom="0" zIndex="1500" px={{ base: "4", md: "6" }} pb={{ base: "4", md: "6" }}>
      <Container maxW="7xl" px="0">
        <Box
          bg="rgba(255, 255, 255, 0.96)"
          border="1px solid rgba(226, 232, 240, 0.95)"
          boxShadow="0 24px 60px rgba(15, 23, 42, 0.18)"
          backdropFilter="blur(18px)"
          rounded={{ base: "2xl", md: "3xl" }}
          overflow="hidden"
        >
          <Flex
            direction={{ base: "column", xl: "row" }}
            align={{ base: "stretch", xl: "center" }}
            justify="space-between"
            gap={{ base: "6", xl: "8" }}
            p={{ base: "5", md: "7" }}
          >
            <VStack align="start" gap="4" flex="1">
              <VStack align="start" gap="3">
                <HStack gap="2" flexWrap="wrap">
                  <Box
                    px="3"
                    py="1.5"
                    rounded="full"
                    bg="#F0FDF4"
                    border="1px solid #BBF7D0"
                    color="#15803D"
                    fontSize="xs"
                    fontWeight="700"
                    letterSpacing="0.04em"
                  >
                    <HStack gap="1.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      RODO / GDPR
                    </HStack>
                  </Box>
                  <Text fontSize="lg" fontWeight="800" color="#0F172A" lineHeight="1.2">
                    Zarzadzanie plikami cookies
                  </Text>
                </HStack>
                <Text fontSize="sm" color="#475569" lineHeight="1.7" maxW="5xl">
                  Pliki cookies to niewielkie pliki tekstowe przechowywane na Twoim urzadzeniu. Umozliwiaja prawidlowe dzialanie serwisu oraz pozwalaja na analize ruchu i dostosowanie tresci do Twoich preferencji. Kazda kategoria plikow jest wylaczana dzieki Twojej zgodzie.
                </Text>
                <Text fontSize="sm" color="#475569" lineHeight="1.7" maxW="5xl">
                  Szczegolowe informacje o celach przetwarzania, podstawach prawnych i zasadach zarzadzania zgoda znajdziesz w{" "}
                  <ChakraLink as={RouterLink} to="/polityka-prywatnosci" fontWeight="600" color="#4F46E5" textDecoration="underline" textDecorationColor="#C7D2FE" _hover={{ color: "#4338CA", textDecorationColor: "#4F46E5" }}>
                    Polityce prywatnosci
                  </ChakraLink>
                  {", "}
                  <ChakraLink as={RouterLink} to="/polityka-cookies" fontWeight="600" color="#4F46E5" textDecoration="underline" textDecorationColor="#C7D2FE" _hover={{ color: "#4338CA", textDecorationColor: "#4F46E5" }}>
                    Polityce cookies
                  </ChakraLink>
                  {" oraz "}
                  <ChakraLink as={RouterLink} to="/przetwarzanie-danych" fontWeight="600" color="#4F46E5" textDecoration="underline" textDecorationColor="#C7D2FE" _hover={{ color: "#4338CA", textDecorationColor: "#4F46E5" }}>
                    Zasadach przetwarzania danych
                  </ChakraLink>
                  .
                </Text>
              </VStack>

              {showSettings && (
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="3" w="full">
                  {categoryCards.map((category) => {
                    const key = category.key as keyof EditablePreferences
                    const active = preferences[key]

                    return (
                      <Box key={category.key} p="4" rounded="2xl" border="1px solid" borderColor="#E2E8F0" bg="#F8FAFC">
                        <Flex justify="space-between" align="start" gap="4" mb="3">
                          <VStack align="start" gap="1">
                            <Text fontSize="sm" fontWeight="800" color="#0F172A">
                              {category.title}
                            </Text>
                            <Text fontSize="xs" color="#64748B" lineHeight="1.6">
                              {category.description}
                            </Text>
                          </VStack>
                          <ToggleButton
                            active={active}
                            locked={category.locked}
                            onClick={
                              category.locked
                                ? undefined
                                : () => setPreferences((current) => ({ ...current, [key]: !current[key] }))
                            }
                          />
                        </Flex>
                      </Box>
                    )
                  })}
                </Grid>
              )}
            </VStack>

            <VStack align="stretch" gap="3" minW={{ base: "full", xl: "320px" }}>
              <Button
                type="button"
                bg="#0F172A"
                color="white"
                rounded="full"
                size="lg"
                fontWeight="700"
                _hover={{ bg: "#1E293B" }}
                onClick={() =>
                  savePreferences({
                    necessary: true,
                    functional: true,
                    analytics: true,
                    marketing: true,
                  })
                }
              >
                Akceptuj wszystkie
              </Button>
              <Button
                type="button"
                variant="outline"
                rounded="full"
                size="lg"
                fontWeight="700"
                borderColor="#CBD5E1"
                color="#0F172A"
                onClick={() =>
                  savePreferences({
                    necessary: true,
                    functional: false,
                    analytics: false,
                    marketing: false,
                  })
                }
              >
                Akceptuj tylko niezbedne
              </Button>
              {showSettings ? (
                <Button
                  type="button"
                  variant="ghost"
                  rounded="full"
                  size="lg"
                  fontWeight="700"
                  color="#312E81"
                  bg="#EEF2FF"
                  onClick={() => savePreferences(preferences)}
                >
                  Zapisz preferencje
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="ghost"
                  rounded="full"
                  size="lg"
                  fontWeight="700"
                  color="#475569"
                  onClick={() => setShowSettings(true)}
                >
                  Dostosuj ustawienia
                </Button>
              )}

              <HStack justify={{ base: "flex-start", xl: "center" }} px="2">
                <Text fontSize="xs" color="#64748B" lineHeight="1.6">
                  Swoja decyzje mozesz zmienic w dowolnym momencie z poziomu stopki serwisu.
                </Text>
              </HStack>
            </VStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
