// src/components/Footer.tsx
// wix-style 5-col footer: brand + 4 link columns + newsletter
// Dark bg con teal halo sutil, hover states en links

import { Box, Container, Flex, Text, Grid } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { openCookieSettings } from "../lib/cookieConsent"

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h17.044C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GoogleBusinessIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
)

const ArrowRightIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/seogrowpl", title: "SEO Grow na Facebooku", icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/seogrowpl", title: "SEO Grow na LinkedIn", icon: LinkedInIcon },
  { label: "Google Business", href: "https://share.google/joia7OipG5o8cv6we", title: "SEO Grow w Google Business", icon: GoogleBusinessIcon },
]

const rozwiazaniaLinks = [
  { label: "Sklep Online", href: "/sklep-online" },
  { label: "Akademia Kursów", href: "/akademia-kursow" },
  { label: "Rezerwacje Online", href: "/rezerwacje-i-terminy" },
  { label: "Menu Cyfrowe", href: "/menu-cyfrowe" },
  { label: "Ekspansja Globalna", href: "/ekspansja-globalna" },
]

const branzeLinks = [
  { label: "Dla Dentysty", href: "/strona-dla-dentysty" },
  { label: "Dla Restauracji", href: "/strona-dla-restauracji" },
  { label: "Dla Hotelu", href: "/strona-dla-hotelu" },
  { label: "Dla Freelancera", href: "/strona-dla-freelancera" },
  { label: "Dla Mechanika", href: "/strona-dla-mechanika" },
  { label: "Dla Prawnika", href: "/strona-dla-prawnika" },
]

const zasobyLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Jak to działa", href: "/#jak-to-dziala" },
  { label: "Cennik", href: "/#ceny" },
  { label: "FAQ", href: "/#faq" },
  { label: "Wsparcie", href: "/wsparcie" },
  { label: "Kontakt", href: "/kontakt" },
]

const firmaLinks = [
  { label: "O nas", href: "/o-nas" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Press kit", href: "/press" },
  { label: "Kariera", href: "/kariera" },
  { label: "Polityka Prywatności", href: "/polityka-prywatnosci" },
  { label: "Regulamin", href: "/regulamin" },
]

const legalLinks = [
  { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
  { label: "Cookies", href: "/polityka-cookies" },
  { label: "Regulamin", href: "/regulamin" },
]

type ColumnItem = { label: string; href: string }
const FooterColumn = ({ title, items }: { title: string; items: ColumnItem[] }) => (
  <Box>
    <Text
      fontSize="xs"
      fontWeight="700"
      color="fg.inverse"
      textTransform="uppercase"
      letterSpacing="0.1em"
      mb={{ base: "3", md: "5" }}
    >
      {title}
    </Text>
    <Box as="ul" listStyleType="none" display="flex" flexDirection="column" gap={{ base: "2.5", md: "3" }}>
      {items.map((item) => (
        <Box as="li" key={item.label}>
          <RouterLink to={item.href} style={{ textDecoration: "none" }}>
            <Text
              as="span"
              fontSize="14px"
              color="fg.inverseMuted"
              transition="color 0.15s"
              _hover={{ color: "fg.inverse", textDecoration: "underline", textUnderlineOffset: "3px" }}
              lineHeight="1.5"
            >
              {item.label}
            </Text>
          </RouterLink>
        </Box>
      ))}
    </Box>
  </Box>
)

export const Footer = () => {
  return (
    <Box as="footer" bg="bg.dark" color="fg.inverse" position="relative" overflow="hidden">
      {/* Halo teal sutil — wix style, en todos los tamaños */}
      <Box position="absolute" top="-15%" right="-10%" w="500px" h="500px" bg="accent.600" opacity={{ base: 0.18, md: 0.15 }} filter="blur(140px)" rounded="full" pointerEvents="none" />
      <Box position="absolute" bottom="-20%" left="-10%" w="450px" h="450px" bg="accent.500" opacity={{ base: 0.12, md: 0.10 }} filter="blur(120px)" rounded="full" pointerEvents="none" />

      <Container maxW="7xl" pt={{ base: "12", md: "20" }} pb={{ base: "8", md: "12" }} position="relative" zIndex="1">
        {/* Brand block + columns + newsletter (responsive grid) */}
        <Grid
          templateColumns={{ base: "1fr 1fr", md: "1fr 1fr", lg: "1.3fr 1fr 1fr 1fr 1fr 1.3fr" }}
          gap={{ base: "8", md: "8", lg: "8" }}
          mb={{ base: "10", md: "16" }}
          pb={{ base: "8", md: "16" }}
          borderBottom="1px solid"
          borderColor="border.inverse"
        >
          {/* Brand: full width en mobile y md, columna 1 en lg.
              Centrado en mobile. */}
          <Box
            gridColumn={{ base: "1 / -1", md: "1 / -1", lg: "1 / 2" }}
            mb={{ base: "2", md: "0" }}
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <img
              src="/logo-320.webp"
              srcSet="/logo-160.webp 160w, /logo-320.webp 320w"
              sizes="158px"
              alt="SEO Grow"
              width="320"
              height="85"
              loading="lazy"
              className="footer-logo"
              style={{
                height: "40px",
                width: "auto",
                display: "block",
              }}
            />
            <Text fontSize="14px" color="fg.inverseMuted" lineHeight="1.6" maxW="xs" mt="4" mb={{ base: "5", md: "6" }} textAlign={{ base: "center", md: "left" }}>
              Profesjonalne strony internetowe z automatycznym SEO dla małych firm w Polsce. Gotowe w 5 dni, edytowalne z telefonu, od 1 500 zł.
            </Text>
            <Flex gap="2.5" wrap="wrap" justify={{ base: "center", md: "flex-start" }}>
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <Box
                    key={s.label}
                    as="a"
                    href={s.href}
                    title={s.title}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    w="9"
                    h="9"
                    rounded="full"
                    bg="rgba(255, 255, 255, 0.06)"
                    color="fg.inverseMuted"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.18s"
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.14)",
                      color: "fg.inverse",
                      transform: "translateY(-1px)",
                    }}
                  >
                    <Icon />
                  </Box>
                )
              })}
            </Flex>
          </Box>

          {/* Columns: 2-col en mobile (Rozw|Branze, Zasoby|Firma), escondidas en md, 4-col en lg */}
          <Box display={{ base: "block", md: "none", lg: "block" }}><FooterColumn title="Rozwiązania" items={rozwiazaniaLinks} /></Box>
          <Box display={{ base: "block", md: "none", lg: "block" }}><FooterColumn title="Branże" items={branzeLinks} /></Box>
          <Box display={{ base: "block", md: "none", lg: "block" }}><FooterColumn title="Zasoby" items={zasobyLinks} /></Box>
          <Box display={{ base: "block", lg: "block" }}><FooterColumn title="Firma" items={firmaLinks} /></Box>

          {/* Newsletter: fila completa en mobile, columna 3-4 en md, columna 6 en lg.
              Centrada en mobile. */}
          <Box
            gridColumn={{ base: "1 / -1", md: "1 / 3", lg: "auto" }}
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", md: "stretch" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text
              fontSize="xs"
              fontWeight="700"
              color="fg.inverse"
              textTransform="uppercase"
              letterSpacing="0.1em"
              mb="3"
            >
              Newsletter
            </Text>
            <Text
              fontSize="md"
              color="fg.inverse"
              fontWeight="700"
              mb="2"
              lineHeight="1.3"
            >
              Porady SEO co miesiąc.
            </Text>
            <Text fontSize="13px" color="fg.inverseMuted" mb="4" lineHeight="1.5" maxW="xs">
              Zero spamu. W każdej wiadomości link do wypisania.
            </Text>
            <Flex as="form" gap="2" direction="column" w="full" maxW="sm" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
              <Box
                as="input"
                type="email"
                placeholder="twoj@email.pl"
                bg="rgba(255,255,255,0.06)"
                border="1px solid"
                borderColor="border.inverse"
                color="fg.inverse"
                px="4"
                h="11"
                rounded="full"
                fontSize="sm"
                w="full"
                _placeholder={{ color: "fg.inverseFaint" }}
                _focus={{ borderColor: "accent.500", outline: "none" }}
                transition="border 0.15s"
              />
              <Box
                as="button"
                type="submit"
                bg="accent.500"
                color="fg.inverse"
                px="5"
                h="11"
                rounded="full"
                fontSize="sm"
                fontWeight="600"
                border="none"
                cursor="pointer"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                gap="2"
                w="full"
                _hover={{ bg: "accent.600" }}
                transition="background 0.15s"
              >
                Zapisz się
                <ArrowRightIcon />
              </Box>
            </Flex>
          </Box>
        </Grid>

        {/* Bottom bar */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "center" }}
          gap={{ base: "4", md: "4" }}
          pt="2"
        >
          <Text fontSize="13px" color="fg.inverseFaint" textAlign={{ base: "center", md: "left" }}>
            © 2026 Grow Solutions JDG · NIP 7412176947 · REGON 545084609. Wszystkie prawa zastrzeżone.
          </Text>
          <Flex gap={{ base: "5", md: "6" }} wrap="wrap" justify="center" align="center" fontSize="13px" color="fg.inverseMuted">
            {legalLinks.map((link) => (
              <RouterLink key={link.label} to={link.href} style={{ textDecoration: "none" }}>
                <Text
                  as="span"
                  _hover={{
                    color: "fg.inverse",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                  transition="color 0.15s"
                >
                  {link.label}
                </Text>
              </RouterLink>
            ))}
            <Box
              as="button"
              type="button"
              onClick={openCookieSettings}
              bg="transparent"
              border="none"
              color="fg.inverseMuted"
              fontSize="13px"
              cursor="pointer"
              p="0"
              _hover={{ color: "fg.inverse" }}
              transition="color 0.15s"
              style={{ fontFamily: "inherit" }}
            >
              Ustawienia cookies
            </Box>
            {/* Badge Tpay — oficial de tpay.com/dla-developera/banery */}
            <Box
              as="a"
              href="https://tpay.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Bezpieczne płatności obsługiwane przez Tpay"
              aria-label="Bezpieczne płatności Tpay"
              display="inline-flex"
              alignItems="center"
              opacity="0.85"
              transition="opacity 0.15s"
              _hover={{ opacity: "1" }}
            >
              <img
                src="/tpay-trusted-payments-white.svg"
                alt="Tpay — bezpieczne płatności online"
                width="140"
                height="31"
                loading="lazy"
                style={{ display: "block", height: "auto", width: "140px" }}
              />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
