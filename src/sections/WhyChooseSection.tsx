// src/sections/WhyChooseSection.tsx
// "Twoja strona. Gotowa. Widoczna. Twoja." — copy PyME-friendly.
// 4 cards con beneficios para el cliente final. Sin naming de competencia.

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

const PhoneIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const ShieldIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const REASONS = [
  {
    icon: BoltIcon,
    title: "Gotowa w 5 dni",
    desc: "Od pierwszej rozmowy do opublikowanej strony. Bez ankiet, bez czekania na wycenę, bez poślizgów. 5 dni roboczych od momentu, gdy dostarczysz materiały.",
    color: "#0D9488",
  },
  {
    icon: PhoneIcon,
    title: "Wsparcie po polsku",
    desc: "Telefon, mail, WhatsApp. Odpowiadam ja — programista, który zrobił Twoją stronę. Bez ticketów, bez call center, bez czekania na odpowiedź.",
    color: "#10B981",
  },
  {
    icon: StackIcon,
    title: "Bez zobowiązań",
    desc: "Płacisz co miesiąc. Jeśli chcesz odejść — wystarczy jeden mail. Strona zostaje Twoja, kody Twoje, treści Twoje. Zero blokad, zero kar umownych.",
    color: "#F59E0B",
  },
  {
    icon: ShieldIcon,
    title: "Twoja na zawsze",
    desc: "Kody, domena, treści — wszystko u Ciebie. Zabierasz i idziesz kiedy chcesz. Hosting, domena i panel działają tak długo, jak długo płacisz — bez niespodzianek.",
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
              Twoja strona.{" "}
              <Box as="span" color="accent.700" fontWeight="700">
                Gotowa. Widoczna. Twoja.
              </Box>
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" lineHeight="1.6" maxW="2xl">
              Każda firma zasługuje na stronę, która działa — bez agencji, bez umowy, bez stresu. Zrobimy ją razem.
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

          {/* Trust line — hechos verificables, no claims técnicos */}
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
              <Text fontWeight="700" color="fg.default">5 dni</Text>
              <Text>do opublikowanej strony</Text>
            </HStack>
            <Text>·</Text>
            <HStack gap="1.5">
              <Text fontWeight="700" color="fg.default">47+</Text>
              <Text>opinii klientów</Text>
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}
