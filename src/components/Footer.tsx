import { Box, Container, Flex, Text, VStack, Grid, HStack, Stack } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { openCookieSettings } from "../lib/cookieConsent"

const GoogleBusinessIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size}>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="#CBD5E1">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
)

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="#CBD5E1">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const socialLinks = [
  { label: "Google Business", href: "https://www.google.com/maps/place/SeoGrow+-+Strony+WWW+i+SEO/@53.6990252,19.9613923,17z/", title: "Znajdź nas w Google Maps (Grow Solutions, Ostróda)", icon: GoogleBusinessIcon },
  { label: "Facebook", href: "https://www.facebook.com/seogrowpl", title: "SEO Grow na Facebooku", icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/seogrowpl", title: "SEO Grow na LinkedIn", icon: LinkedInIcon },
]

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
  { label: "Kontakt", href: "/kontakt" },
]

const company = [
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

            <Box
              as="a"
              href="https://share.google/4gwMv8mm7uRDrmtpP"
              target="_blank"
              rel="noopener noreferrer"
              display="inline-flex"
              alignItems="center"
              gap="2"
              px="3"
              py="1.5"
              bg="white"
              color="#0F172A"
              border="1px solid #E2E8F0"
              rounded="full"
              fontSize="11px"
              fontWeight="700"
              textDecoration="none"
              transition="all 0.18s"
              _hover={{ borderColor: "#4F46E5", color: "#4F46E5", transform: "translateY(-1px)" }}
            >
              <Box as="span" fontSize="13px">★</Box>
              Zostaw opinię w Google
            </Box>

            <HStack gap="2" pt="1">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Box
                    key={link.href}
                    as="a"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.title}
                    aria-label={link.label}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="36px"
                    h="36px"
                    rounded="full"
                    bg="rgba(255, 255, 255, 0.06)"
                    border="1px solid rgba(148, 163, 184, 0.18)"
                    transition="all 0.18s"
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.12)",
                      borderColor: "rgba(79, 70, 229, 0.5)",
                      transform: "translateY(-1px)",
                    }}
                  >
                    <Icon size={16} />
                  </Box>
                )
              })}
            </HStack>
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
              <Box as={RouterLink} to="/regulamin" textDecoration="none">
                <Text fontSize="12px" color="#94A3B8" _hover={{ color: "white" }} transition="color 0.18s">
                  Regulamin
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