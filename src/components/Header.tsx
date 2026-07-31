// src/components/Header.tsx
// wix.com.pl real: transparente en posición inicial sobre el hero (logo azul SEOGROW visible
// sobre el halo pastel), blanco sólido al hacer scroll (logo azul sobre blanco).

import { Box, Container, Flex, Link as ChakraLink } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { CurrencySwitcher } from "./CurrencySwitcher"

type NavItem = { label: string; href: string; isRoute?: boolean }

const navItems: NavItem[] = [
  { label: "Jak to działa", href: "/#jak-to-dziala" },
  { label: "Dla kogo", href: "/#dla-kogo" },
  { label: "SEO", href: "/#seo" },
  { label: "Cennik", href: "/#ceny" },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "FAQ", href: "/#faq" },
]

const MenuIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" focusable="false">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)

const CloseIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" focusable="false">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

const ArrowRightIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="50"
      bg={isScrolled ? "bg.canvas" : "transparent"}
      borderBottom="1px solid"
      borderColor={isScrolled ? "border.subtle" : "transparent"}
      boxShadow={isScrolled ? "header" : "none"}
      backdropFilter={isScrolled ? "saturate(180%) blur(16px)" : "none"}
      transition="background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, backdrop-filter 0.25s ease"
    >
      <Container maxW="7xl">
        <Flex h="16" align="center" justify="space-between" gap={{ base: "3", md: "6" }}>
          {/* Logo — sin filter, color azul real visible en ambos estados */}
          <ChakraLink as={Link} to="/" flexShrink={0} display="flex" alignItems="center" textDecoration="none" aria-label="SEO Grow — strona główna">
            <img
              src="/logo-320.webp"
              srcSet="/logo-160.webp 160w, /logo-320.webp 320w"
              sizes="158px"
              alt="SEO Grow"
              width="320"
              height="85"
              decoding="async"
              style={{
                height: "36px",
                width: "auto",
                display: "block",
              }}
            />
          </ChakraLink>

          {/* Nav desktop */}
          <Flex as="nav" aria-label="Główna nawigacja" gap="7" display={{ base: "none", lg: "flex" }} align="center">
            {navItems.map((item) => {
              const linkProps = {
                color: isScrolled ? "fg.default" : "fg.default",
                fontSize: "14px",
                fontWeight: "500",
                _hover: { color: "accent.600" },
                transition: "color 0.15s",
                textDecoration: "none",
                whiteSpace: "nowrap" as const,
              }
              return item.isRoute ? (
                <ChakraLink key={item.label} as={Link} to={item.href} {...linkProps}>
                  {item.label}
                </ChakraLink>
              ) : (
                <ChakraLink key={item.label} as="a" href={item.href} {...linkProps}>
                  {item.label}
                </ChakraLink>
              )
            })}
          </Flex>

          <Flex gap={{ base: "2", md: "3" }} align="center">
            <ChakraLink
              as={Link}
              to="/wsparcie"
              color={isScrolled ? "fg.muted" : "fg.muted"}
              fontSize="14px"
              fontWeight="500"
              display={{ base: "none", md: "block" }}
              _hover={{ color: "fg.default" }}
              transition="color 0.15s"
              textDecoration="none"
            >
              Wsparcie
            </ChakraLink>

            <Box display={{ base: "none", md: "flex" }} gap="2" alignItems="center">
              <LanguageSwitcher />
              <CurrencySwitcher />
            </Box>

            <ChakraLink
              as={Link}
              to="/zamowienie?plan=express"
              textDecoration="none"
              display={{ base: "none", sm: "inline-flex" }}
              bg="fg.default"
              color="fg.inverse"
              px="4"
              h="9"
              rounded="full"
              fontSize="13px"
              fontWeight="600"
              alignItems="center"
              gap="1.5"
              _hover={{
                bg: "bg.darkSubtle",
                transform: "translateY(-1px)",
                boxShadow: "sm",
              }}
              transition="all 0.18s cubic-bezier(0.22, 1, 0.36, 1)"
            >
              Zamów stronę
              <ArrowRightIcon />
            </ChakraLink>

            <Box display={{ base: "flex", lg: "none" }}>
              <Box
                as="button"
                type="button"
                aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                bg={isScrolled ? "bg.canvas" : "rgba(255, 255, 255, 0.85)"}
                border="1px solid"
                borderColor={isScrolled ? "border.default" : "rgba(10, 10, 10, 0.12)"}
                color="fg.default"
                w="9"
                h="9"
                rounded="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                _hover={{ bg: "bg.subtle" }}
                transition="all 0.2s ease"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </Box>
            </Box>
          </Flex>
        </Flex>

        {/* Mobile menu */}
        <Box
          as="nav"
          aria-label="Nawigacja mobilna"
          display={{ base: isMenuOpen ? "block" : "none", lg: "none" }}
          borderTop="1px solid"
          borderColor="border.subtle"
          bg="bg.canvas"
          pb="4"
        >
          <Flex direction="column" gap="1" pt="2">
            {navItems.map((item) =>
              item.isRoute ? (
                <ChakraLink
                  key={item.label}
                  as={Link}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  color="fg.default"
                  fontSize="15px"
                  fontWeight="500"
                  textDecoration="none"
                  py="2.5"
                  borderBottom="1px solid"
                  borderColor="border.subtle"
                >
                  {item.label}
                </ChakraLink>
              ) : (
                <ChakraLink
                  key={item.label}
                  as="a"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  color="fg.default"
                  fontSize="15px"
                  fontWeight="500"
                  textDecoration="none"
                  py="2.5"
                  borderBottom="1px solid"
                  borderColor="border.subtle"
                >
                  {item.label}
                </ChakraLink>
              )
            )}

            <ChakraLink
              as={Link}
              to="/wsparcie"
              onClick={() => setIsMenuOpen(false)}
              color="fg.muted"
              fontSize="14px"
              fontWeight="500"
              textDecoration="none"
              py="2.5"
              mt="1"
            >
              Wsparcie
            </ChakraLink>

            <Flex gap="2" pt="3" align="center">
              <LanguageSwitcher />
              <CurrencySwitcher />
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
