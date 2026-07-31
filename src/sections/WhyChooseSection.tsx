// src/sections/WhyChooseSection.tsx
// "Jedna platforma zamiast chaosu." — historia del fundador: anti-WordPress, anti-plugins, anti-caos.
// 4 tarjetas: cada una ataca un dolor real del PyME polaco con la solución de SEO Grow.

import { Box, Container, Heading, Text, HStack, VStack, SimpleGrid } from "@chakra-ui/react"

const StackIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)

const BoltIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
)

const HandshakeIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 17l2 2a1 1 0 1 0 3-3" />
    <path d="M14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="M21 3l-3.5 3.5" />
    <path d="M3 21l8.5-8.5" />
  </svg>
)

const LockIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
)

const REASONS = [
  {
    icon: StackIcon,
    title: "Jedna platforma, zero chaosu",
    desc: "Koniec z WordPressem, 14 wtyczkami, Booksy do rezerwacji, BLIK-iem do płatności i hostingiem u trzeciego dostawcy. Strona, panel, domena, SEO i wsparcie — w jednym miejscu, w jednej racie.",
    color: "#0D9488",
  },
  {
    icon: BoltIcon,
    title: "Szybko, bo nie zlecamy na zewnątrz",
    desc: "Mam własny VPS i własny panel — SEO Grow Panel. Bez agencji, bez freelancerów, bez czekania. Strona gotowa w 5 dni roboczych od dostarczenia materiałów.",
    color: "#10B981",
  },
  {
    icon: HandshakeIcon,
    title: "Rozmawiasz ze mną, nie z botem",
    desc: "Żadnych ticketów, żadnego call center, żadnego chatbota. Telefon, mail, WhatsApp — kontakt bezpośredni z programistą, który zrobił Twoją stronę.",
    color: "#F59E0B",
  },
  {
    icon: LockIcon,
    title: "Twoja strona, Twoje dane, na zawsze",
    desc: "Kody, domena, treści — wszystko zostaje u Ciebie. Decydujesz kiedy odchodzisz. Bez umowy długoterminowej, bez kar umownych, bez blokad.",
    color: "#3B82F6",
  },
]

const StarIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export const WhyChooseSection = () => {
  return (
    <Box
      as="section"
      bg="bg.cream"
      py={{ base: "20", md: "28" }}
      position="relative"
      aria-label="Dlaczego SEO Grow"
    >
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* Header */}
          <VStack gap="4" textAlign="center" maxW="3xl" mx="auto" className="wix-fade-up">
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="bg.canvas"
              borderWidth="1px"
              borderColor="border.subtle"
              rounded="full"
            >
              <Box w="1.5" h="1.5" rounded="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" color="fg.default" letterSpacing="0.08em" textTransform="uppercase">
                Dlaczego SEO Grow
              </Text>
            </HStack>
            <Heading
              as="h2"
              fontSize={{ base: "32px", md: "40px", lg: "48px" }}
              fontWeight="600"
              color="fg.default"
              letterSpacing="-0.015em"
              lineHeight="1.1"
            >
              Jedna platforma zamiast{" "}
              <Box as="span" color="accent.700" fontWeight="700">
                chaosu w narzędziach.
              </Box>
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" lineHeight="1.6" maxW="2xl">
              SEO Grow powstał, bo widziałem zbyt wiele firm tonących w WordPressie, wtyczkach i pięciu osobnych dashboardach. Zbudowałem coś prostszego.
            </Text>
          </VStack>

          {/* 2x2 grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "5", md: "6" }} w="full">
            {REASONS.map((reason, i) => {
              const Icon = reason.icon
              return (
                <Box
                  key={reason.title}
                  className={`wix-fade-up-${Math.min(i + 1, 4)}`}
                  bg="bg.canvas"
                  borderWidth="1px"
                  borderColor="border.default"
                  rounded="2xl"
                  p={{ base: "6", md: "8" }}
                  transition="all 0.22s cubic-bezier(0.22, 1, 0.36, 1)"
                  _hover={{
                    boxShadow: "lg",
                    borderColor: "border.muted",
                    transform: "translateY(-3px)",
                  }}
                >
                  <HStack align="start" gap="5">
                    <Box
                      flexShrink={0}
                      w="14"
                      h="14"
                      rounded="xl"
                      bg={`${reason.color}15`}
                      color={reason.color}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon />
                    </Box>
                    <VStack align="start" gap="2" flex="1">
                      <Heading
                        as="h3"
                        fontSize={{ base: "20px", md: "22px" }}
                        fontWeight="700"
                        color="fg.default"
                        letterSpacing="-0.025em"
                        lineHeight="1.3"
                      >
                        {reason.title}
                      </Heading>
                      <Text fontSize="15px" color="fg.muted" lineHeight="1.6">
                        {reason.desc}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              )
            })}
          </SimpleGrid>

          {/* Trust line */}
          <HStack
            gap="6"
            wrap="wrap"
            justify="center"
            pt="4"
            className="wix-fade-up-3"
            color="fg.muted"
            fontSize="14px"
          >
            <HStack gap="1.5">
              <HStack gap="0.5" color="warm.500">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} size={12} />)}
              </HStack>
              <Text fontWeight="700" color="fg.default">5.0/5</Text>
              <Text>na Google</Text>
            </HStack>
            <Text>·</Text>
            <HStack gap="1.5">
              <Text fontWeight="700" color="fg.default">47+</Text>
              <Text>opinii</Text>
            </HStack>
            <Text>·</Text>
            <HStack gap="1.5">
              <Text fontWeight="700" color="fg.default">Własny VPS</Text>
              <Text>w Polsce</Text>
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}
