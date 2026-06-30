import { Box, Container, Flex, Text, Link as ChakraLink } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { CurrencySwitcher } from "./CurrencySwitcher"

const navItems = [
  { label: "Jak to działa", href: "/#jak-to-dziala" },
  { label: "Dla kogo", href: "/#dla-kogo" },
  { label: "SEO", href: "/#seo" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
]

const GiftIcon = () => null

const MenuIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" focusable="false">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)

const CloseIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" focusable="false">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Box as="header" position="fixed" top="0" left="0" right="0" zIndex="50">
      <Box
        bg="rgba(255, 255, 255, 0.8)"
        backdropFilter="blur(12px)"
        borderBottom="1px solid rgba(226, 232, 240, 0.6)"
        minH="64px"
      >
        <Container maxW="7xl">
          <Flex h="16" align="center" justify="space-between" gap={{ base: "3", md: "8" }}>
            <ChakraLink as="a" href="/#" flexShrink={0} display="flex" alignItems="center" textDecoration="none">
              <img
                src="/logo-320.webp"
                srcSet="/logo-160.webp 160w, /logo-320.webp 320w"
                sizes="158px"
                alt="Logo SEO Grow"
                width="320"
                height="85"
                decoding="async"
                style={{ height: "42px", width: "auto", display: "block" }}
              />
            </ChakraLink>

            <Flex as="nav" aria-label="Główna nawigacja" gap="8" display={{ base: "none", lg: "flex" }} align="center">
              {navItems.map((item) =>
                item.isRoute ? (
                  <ChakraLink
                    key={item.label}
                    as={Link}
                    to={item.href}
                    color="#475569"
                    fontSize="sm"
                    fontWeight="500"
                    _hover={{ color: "#4F46E5" }}
                    textDecoration="none"
                  >
                    {item.label}
                  </ChakraLink>
                ) : (
                  <a key={item.label} href={item.href} style={{ textDecoration: "none" }}>
                    <Text color="#475569" fontSize="sm" fontWeight="500" _hover={{ color: "#4F46E5" }}>
                      {item.label}
                    </Text>
                  </a>
                ),
              )}
            </Flex>

            <Flex gap={{ base: "3", md: "6" }} align="center">
              <ChakraLink
                as={Link}
                to="/wsparcie"
                color="#64748B"
                fontSize="sm"
                fontWeight="500"
                display={{ base: "none", md: "block" }}
                _hover={{ color: "#4F46E5" }}
                textDecoration="none"
              >
                Wsparcie
              </ChakraLink>

              <ChakraLink as={Link} to="/zamowienie?plan=express" textDecoration="none" display={{ base: "none", sm: "block" }}>
                <Box
                  bg="linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)"
                  color="white"
                  px={{ base: "4", md: "6" }}
                  py="2.5"
                  rounded="full"
                  fontSize="sm"
                  fontWeight="600"
                  _hover={{
                    bg: "linear-gradient(135deg, #4338CA 0%, #1D4ED8 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(79, 70, 229, 0.4)",
                  }}
                  transition="all 0.3s ease"
                  boxShadow="0 4px 14px rgba(79, 70, 229, 0.35)"
                >
                  Zamów stronę
                </Box>
              </ChakraLink>

              <Box display={{ base: "none", md: "block" }}>
                <LanguageSwitcher />
              </Box>

              <Box display={{ base: "none", md: "block" }}>
                <CurrencySwitcher />
              </Box>

              <Box display={{ base: "flex", lg: "none" }}>
                <Box
                  as="button"
                  type="button"
                  aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  bg="transparent"
                  border="1px solid #E2E8F0"
                  color="#0F172A"
                  w="11"
                  h="11"
                  rounded="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Container>

        <Box
          as="nav"
          aria-label="Nawigacja mobilna"
          display={{ base: isMenuOpen ? "block" : "none", lg: "none" }}
          borderTop="1px solid rgba(226, 232, 240, 0.8)"
          bg="rgba(255, 255, 255, 0.96)"
        >
          <Container maxW="7xl" py="4">
            <Flex direction="column" gap="3">
              {navItems.map((item) =>
                item.isRoute ? (
                  <ChakraLink
                    key={item.label}
                    as={Link}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    color="#0F172A"
                    fontSize="sm"
                    fontWeight="600"
                    textDecoration="none"
                    py="2"
                  >
                    {item.label}
                  </ChakraLink>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ textDecoration: "none" }}
                  >
                    <Text color="#0F172A" fontSize="sm" fontWeight="600" py="2">
                      {item.label}
                    </Text>
                  </a>
                ),
              )}

              <ChakraLink
                as={Link}
                to="/wsparcie"
                onClick={() => setIsMenuOpen(false)}
                color="#475569"
                fontSize="sm"
                fontWeight="500"
                textDecoration="none"
                py="2"
              >
                Wsparcie
              </ChakraLink>

              <ChakraLink as={Link} to="/zamowienie?plan=express" onClick={() => setIsMenuOpen(false)} textDecoration="none">
                <Box
                  mt="2"
                  bg="#2563EB"
                  color="white"
                  px="5"
                  py="3"
                  rounded="xl"
                  fontSize="sm"
                  fontWeight="700"
                  textAlign="center"
                >
                  Zamów stronę
                </Box>
              </ChakraLink>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
