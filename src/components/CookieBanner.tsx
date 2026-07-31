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
    title: "Niezbędne",
    description: "Wymagane do działania strony. Zawsze aktywne.",
    locked: true,
  },
  {
    key: "functional",
    title: "Funkcjonalne",
    description: "Zapamiętują Twoje preferencje.",
    locked: false,
  },
  {
    key: "analytics",
    title: "Analityczne",
    description: "Pomagają nam ulepszać stronę.",
    locked: false,
  },
  {
    key: "marketing",
    title: "Marketingowe",
    description: "Mierzą skuteczność naszych kampanii.",
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
      <Box
        w="9"
        h="5"
        bg="border.default"
        rounded="full"
        position="relative"
        flexShrink={0}
        aria-label="Zawsze aktywne"
        role="switch"
        aria-checked="true"
        aria-disabled="true"
      >
        <Box
          position="absolute"
          top="2px"
          left="calc(100% - 18px - 2px)"
          w="4"
          h="4"
          bg="fg.subtle"
          rounded="full"
        />
      </Box>
    )
  }
  return (
    <Box
      as="button"
      type="button"
      onClick={onClick}
      w="9"
      h="5"
      bg={active ? "accent.600" : "border.default"}
      rounded="full"
      flexShrink={0}
      transition="background-color 0.15s ease"
      cursor="pointer"
      _hover={{ opacity: 0.85 }}
      _focus={{ outline: "2px solid", outlineColor: "accent.500", outlineOffset: "2px" }}
      role="switch"
      aria-checked={active}
      aria-label={active ? "Wyłącz" : "Włącz"}
      position="relative"
      display="block"
    >
      <Box
        position="absolute"
        top="2px"
        left={active ? "calc(100% - 18px - 2px)" : "2px"}
        w="4"
        h="4"
        bg="white"
        rounded="full"
        transition="left 0.15s ease"
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
    <Box position="fixed" insetX="0" bottom="0" zIndex="1500" px={{ base: "3", md: "6" }} pb={{ base: "3", md: "5" }}>
      <Container maxW="6xl" px="0">
        <Box
          bg="bg.canvas"
          border="1px solid"
          borderColor="border.default"
          rounded="xl"
          overflow="hidden"
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ base: "stretch", lg: "center" }}
            justify="space-between"
            gap={{ base: "5", lg: "8" }}
            p={{ base: "5", md: "6" }}
          >
            <VStack align="start" gap="3" flex="1" minW="0">
              <Text fontSize="md" fontWeight="700" color="fg.default" letterSpacing="-0.01em">
                Pliki cookies
              </Text>
              <Text fontSize="sm" color="fg.muted" lineHeight="1.6">
                Używamy plików cookies, aby strona działała prawidłowo i pomagała nam ją ulepszać.{" "}
                <ChakraLink as={RouterLink} to="/polityka-prywatnosci" color="fg.default" fontWeight="600" textDecoration="underline" textUnderlineOffset="3px" _hover={{ color: "accent.700" }}>
                  Polityka prywatności
                </ChakraLink>
                {", "}
                <ChakraLink as={RouterLink} to="/polityka-cookies" color="fg.default" fontWeight="600" textDecoration="underline" textUnderlineOffset="3px" _hover={{ color: "accent.700" }}>
                  Polityka cookies
                </ChakraLink>
                {", "}
                <ChakraLink as={RouterLink} to="/przetwarzanie-danych" color="fg.default" fontWeight="600" textDecoration="underline" textUnderlineOffset="3px" _hover={{ color: "accent.700" }}>
                  Zasady przetwarzania
                </ChakraLink>
                .
              </Text>

              {showSettings && (
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={{ base: "2", md: "3" }} w="full" pt="2">
                  {categoryCards.map((category) => {
                    const key = category.key as keyof EditablePreferences
                    const active = preferences[key]

                    return (
                      <Flex
                        key={category.key}
                        justify="space-between"
                        align="center"
                        gap="3"
                        p="3"
                        rounded="lg"
                        border="1px solid"
                        borderColor="border.subtle"
                      >
                        <Box minW="0">
                          <Text fontSize="sm" fontWeight="600" color="fg.default" lineHeight="1.3">
                            {category.title}
                          </Text>
                          <Text fontSize="xs" color="fg.subtle" lineHeight="1.4" mt="0.5">
                            {category.description}
                          </Text>
                        </Box>
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
                    )
                  })}
                </Grid>
              )}
            </VStack>

            <Flex
              align="center"
              gap={{ base: "2", md: "2" }}
              direction={{ base: "column", sm: "row", lg: "row" }}
              w={{ base: "full", lg: "auto" }}
              minW={{ lg: "auto" }}
            >
              <Button
                type="button"
                bg="fg.default"
                color="white"
                rounded="lg"
                size="md"
                fontWeight="600"
                w={{ base: "full", sm: "auto" }}
                _hover={{ bg: "slate.800" }}
                onClick={() =>
                  savePreferences({
                    necessary: true,
                    functional: true,
                    analytics: true,
                    marketing: true,
                  })
                }
              >
                Akceptuj
              </Button>
              <Button
                type="button"
                variant="outline"
                rounded="lg"
                size="md"
                fontWeight="600"
                borderColor="border.default"
                color="fg.default"
                w={{ base: "full", sm: "auto" }}
                _hover={{ bg: "bg.subtle" }}
                onClick={() =>
                  savePreferences({
                    necessary: true,
                    functional: false,
                    analytics: false,
                    marketing: false,
                  })
                }
              >
                Tylko niezbędne
              </Button>
              {showSettings ? (
                <Button
                  type="button"
                  variant="ghost"
                  rounded="lg"
                  size="md"
                  fontWeight="600"
                  color="fg.muted"
                  w={{ base: "full", sm: "auto" }}
                  _hover={{ bg: "bg.subtle", color: "fg.default" }}
                  onClick={() => savePreferences(preferences)}
                >
                  Zapisz
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="ghost"
                  rounded="lg"
                  size="md"
                  fontWeight="600"
                  color="fg.muted"
                  w={{ base: "full", sm: "auto" }}
                  _hover={{ bg: "bg.subtle", color: "fg.default" }}
                  onClick={() => setShowSettings(true)}
                >
                  Ustawienia
                </Button>
              )}
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
