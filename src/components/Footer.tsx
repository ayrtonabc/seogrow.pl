import { Box, Container, Flex, Text, VStack, Grid, HStack, Stack } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { openCookieSettings } from "../lib/cookieConsent"

const solutions = [
  { label: "Sklep Online", href: "/sklep-online" },
  { label: "Akademia Kursów", href: "/akademia-kursow" },
  { label: "Rezerwacje i Terminy", href: "/rezerwacje-i-terminy" },
  { label: "Menu Cyfrowe", href: "/menu-cyfrowe" },
  { label: "Ekspansja Globalna", href: "/ekspansja-globalna" },
  { label: "Wizytówka Prac", href: "/wizytowka-prac" },
]

const resources = [
  { label: "Jak to działa", href: "/#jak-to-dziala" },
  { label: "Moduły", href: "/#moduly" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Wsparcie", href: "/wsparcie" },
]

const company = [
  { label: "O nas", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Regulamin", href: "/regulamin" },
]

export const Footer = () => {
  return (
    <Box as="footer" bg="#0F1124" color="white" pt={{ base: "16", md: "20" }} pb="8" position="relative" overflow="hidden">
      {/* Color grid — radial glow superior */}
      <Box
        position="absolute"
        top="-200px"
        left="50%"
        transform="translateX(-50%)"
        w="700px"
        h="420px"
        bg="radial-gradient(ellipse, rgba(79, 70, 229, 0.18) 0%, rgba(99, 102, 241, 0.08) 35%, transparent 70%)"
        filter="blur(60px)"
        pointerEvents="none"
      />

      <Container maxW="6xl" position="relative" zIndex="1">
        <Grid templateColumns={{ base: "1fr", md: "1.4fr 2fr" }} gap={{ base: "12", md: "16" }} mb="14">
          {/* Brand column */}
          <VStack align="start" gap="5">
            <Box as={RouterLink} to="/" textDecoration="none" display="block" _hover={{ opacity: 0.85 }} transition="opacity 0.18s">
              <Box as="img" src="/logo.webp" alt="Logo SEO Grow" h="32px" w="auto" filter="brightness(0) invert(1)" />
            </Box>

            <Text fontSize="13px" color="#94A3B8" lineHeight="1.6" maxW="xs">
              Profesjonalne strony internetowe dla małych firm. Tworzone w 5 dni, z automatycznym SEO i wsparciem po polsku.
            </Text>

            <Text fontSize="12px" color="#64748B">
              kontakt@seogrow.pl · +48 517 105 423
            </Text>
          </VStack>

          {/* Link columns */}
          <Grid templateColumns={{ base: "1fr 1fr", md: "repeat(3, 1fr)" }} gap={{ base: "8", md: "8" }}>
            <Box>
              <Text fontSize="11px" fontWeight="700" color="#64748B" textTransform="uppercase" letterSpacing="0.12em" mb="4">
                Rozwiązania
              </Text>
              <VStack align="start" gap="2.5">
                {solutions.map((link) => (
                  <Box key={link.href} as={RouterLink} to={link.href} textDecoration="none">
                    <Text fontSize="14px" color="#CBD5E1" _hover={{ color: "white" }} transition="color 0.18s">
                      {link.label}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>

            <Box>
              <Text fontSize="11px" fontWeight="700" color="#64748B" textTransform="uppercase" letterSpacing="0.12em" mb="4">
                Zasoby
              </Text>
              <VStack align="start" gap="2.5">
                {resources.map((link) => (
                  <Box key={link.href} as={RouterLink} to={link.href} textDecoration="none">
                    <Text fontSize="14px" color="#CBD5E1" _hover={{ color: "white" }} transition="color 0.18s">
                      {link.label}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>

            <Box>
              <Text fontSize="11px" fontWeight="700" color="#64748B" textTransform="uppercase" letterSpacing="0.12em" mb="4">
                Firma
              </Text>
              <VStack align="start" gap="2.5">
                {company.map((link) => (
                  <Box key={link.href} as={RouterLink} to={link.href} textDecoration="none">
                    <Text fontSize="14px" color="#CBD5E1" _hover={{ color: "white" }} transition="color 0.18s">
                      {link.label}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box pt="8" borderTop="1px solid rgba(255, 255, 255, 0.08)">
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            justify="space-between"
            align={{ base: "start", md: "center" }}
            gap="5"
          >
            <Text fontSize="12px" color="#475569">
              © 2026 Grow Solutions — JDG · Wszystkie prawa zastrzeżone · NIP 7412176947 · REGON 545084609
            </Text>

            <Stack direction={{ base: "column", sm: "row" }} gap={{ base: "2", sm: "5" }} align={{ base: "start", sm: "center" }}>
              <Box as={RouterLink} to="/polityka-prywatnosci" textDecoration="none">
                <Text fontSize="12px" color="#94A3B8" _hover={{ color: "white" }} transition="color 0.18s">
                  Polityka prywatności
                </Text>
              </Box>
              <Box as={RouterLink} to="/polityka-cookies" textDecoration="none">
                <Text fontSize="12px" color="#94A3B8" _hover={{ color: "white" }} transition="color 0.18s">
                  Polityka cookies
                </Text>
              </Box>
              <Box as={RouterLink} to="/przetwarzanie-danych" textDecoration="none">
                <Text fontSize="12px" color="#94A3B8" _hover={{ color: "white" }} transition="color 0.18s">
                  Przetwarzanie danych
                </Text>
              </Box>
              <Box as="button" type="button" onClick={openCookieSettings} bg="transparent" border="none" p="0" cursor="pointer">
                <Text fontSize="12px" color="#94A3B8" _hover={{ color: "white" }} transition="color 0.18s">
                  Ustawienia cookies
                </Text>
              </Box>
            </Stack>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}