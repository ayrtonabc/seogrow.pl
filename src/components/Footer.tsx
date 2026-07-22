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
  { label: "Press kit", href: "/press" },
  { label: "Blog", href: "/blog" },
]

// Top 5 ciudades Tier A para el footer (las más buscadas)
const topCities = [
  { label: "Iława", href: "/ilawa" },
  { label: "Ełk", href: "/elk" },
  { label: "Kwidzyn", href: "/kwidzyn" },
  { label: "Starogard Gdański", href: "/starogard-gdanski" },
  { label: "Dębica", href: "/debica" },
]

// 13 voivodatos
const voivodeships = [
  { label: "Dolnośląskie", href: "/dolnoslaskie" },
  { label: "Kujawsko-Pomorskie", href: "/kujawsko-pomorskie" },
  { label: "Lubelskie", href: "/lubelskie" },
  { label: "Łódzkie", href: "/lodzkie" },
  { label: "Małopolskie", href: "/malopolskie" },
  { label: "Mazowieckie", href: "/mazowieckie" },
  { label: "Podkarpackie", href: "/podkarpackie" },
  { label: "Podlaskie", href: "/podlaskie" },
  { label: "Pomorskie", href: "/pomorskie" },
  { label: "Świętokrzyskie", href: "/swietokrzyskie" },
  { label: "Warmińsko-Mazurskie", href: "/warminsko-mazurskie" },
  { label: "Wielkopolskie", href: "/wielkopolskie" },
  { label: "Zachodniopomorskie", href: "/zachodniopomorskie" },
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
        <Grid templateColumns={{ base: "1fr", md: "1.2fr 3fr" }} gap={{ base: "12", md: "16" }} mb="14">
          {/* Brand column */}
          <VStack align="start" gap="5">
            <Box as={RouterLink} to="/" textDecoration="none" display="inline-block" _hover={{ opacity: 0.85 }} transition="opacity 0.18s">
              <img
                src="/logo-320.webp"
                srcSet="/logo-160.webp 160w, /logo-320.webp 320w"
                sizes="128px"
                alt="Logo SEO Grow"
                width={320}
                height={85}
                decoding="async"
                style={{ height: "32px", width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
              />
            </Box>

            <Text fontSize="13px" color="#94A3B8" lineHeight="1.6" maxW="xs">
              Strony internetowe dla małych firm. Od 1 500 zł, gotowe w 5 dni, z CMS-em, którym zarządzasz sam z telefonu. Wsparcie po polsku.
            </Text>

            <Text fontSize="12px" color="#64748B">
              kontakt@seogrow.pl · +48 517 105 423
            </Text>
          </VStack>

          {/* Link columns */}
          <Grid templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }} gap={{ base: "8", md: "8" }}>
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

            <Box>
              <Text fontSize="11px" fontWeight="700" color="#64748B" textTransform="uppercase" letterSpacing="0.12em" mb="4">
                Zasięg
              </Text>
              <VStack align="start" gap="2.5">
                {topCities.map((link) => (
                  <Box key={link.href} as={RouterLink} to={link.href} textDecoration="none">
                    <Text fontSize="14px" color="#CBD5E1" _hover={{ color: "white" }} transition="color 0.18s">
                      {link.label}
                    </Text>
                  </Box>
                ))}
                <Box as={RouterLink} to="/cennik" textDecoration="none" mt="1">
                  <Text fontSize="13px" color="#818CF8" fontWeight="600" _hover={{ color: "#A5B4FC" }} transition="color 0.18s">
                    Zobacz cennik →
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Grid>
        </Grid>

        {/* ── 13 voivodatos (zasięg completo) ───────────────────────── */}
        <Box
          borderTop="1px solid"
          borderColor="rgba(148, 163, 184, 0.12)"
          pt="8"
          pb="6"
          mb="8"
        >
          <Text fontSize="11px" fontWeight="700" color="#64748B" textTransform="uppercase" letterSpacing="0.12em" mb="4" textAlign="center">
            Obsługujemy firmy w całej Polsce · Ta sama cena, ta sama jakość
          </Text>
          <Flex justify="center" wrap="wrap" gap={{ base: "3", md: "5" }}>
            {voivodeships.map((v) => (
              <Box key={v.href} as={RouterLink} to={v.href} textDecoration="none">
                <Text fontSize="13px" color="#94A3B8" _hover={{ color: "white" }} transition="color 0.18s">
                  {v.label}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Tpay logos — centered, above copyright */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          pt="8"
          borderTop="1px solid rgba(255, 255, 255, 0.08)"
        >
          {/* Desktop / tablet banner */}
          <Box
            as="a"
            href="https://tpay.com/jak-to-dziala"
            target="_blank"
            rel="noopener noreferrer"
            title="Obsługujemy płatności internetowe przez system płatności online Tpay"
            display={{ base: "none", md: "block" }}
            lineHeight="0"
            w="full"
          >
            <img
              src="https://tpay.com/img/banners/tpay-full-color-1000x51.svg"
              alt="Logo Tpay — obsługujemy płatności online"
              title="Logo Tpay"
              style={{ border: 0, display: "block", width: "100%", height: "auto", maxWidth: "100%" }}
              loading="lazy"
            />
          </Box>
          {/* Mobile banner */}
          <Box
            as="a"
            href="https://tpay.com/jak-to-dziala"
            target="_blank"
            rel="noopener noreferrer"
            title="Obsługujemy płatności internetowe przez system płatności online Tpay"
            display={{ base: "block", md: "none" }}
            lineHeight="0"
            w="full"
          >
            <img
              src="https://tpay.com/img/banners/tpay-full-300x69.svg"
              alt="Logo Tpay — obsługujemy płatności online"
              title="Logo Tpay"
              style={{ border: 0, display: "block", width: "100%", height: "auto", maxWidth: "100%" }}
              loading="lazy"
            />
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box pt="6">
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