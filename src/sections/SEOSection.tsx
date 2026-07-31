// src/sections/SEOSection.tsx
// "Bądź widoczny w Google. Od pierwszego dnia." — 2 columnas:
// Izquierda: 5 bullets claros. Derecha: IndustrySearch (animación del buscador Google).
// Imagen de mockup anterior eliminada — reemplazada por la animación interactiva.

import { Box, Container, Heading, Text, VStack, HStack, Grid } from "@chakra-ui/react"
import { IndustrySearch } from "../components/IndustrySearch"

type IconProps = { size?: number }

const PhoneIcon = ({ size = 20 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MouseIcon = ({ size = 20 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M9 9l3 9 3-9-3-3z" />
    <path d="M12 3v3" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" />
  </svg>
)

const ChartIcon = ({ size = 20 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-5" />
  </svg>
)

const BoltIcon = ({ size = 20 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const MobileIcon = ({ size = 20 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
)

type Benefit = {
  icon: (size: number) => JSX.Element
  title: string
  description: string
  technical: string
}

const benefits: Benefit[] = [
  {
    icon: (size) => <PhoneIcon size={size} />,
    title: "Więcej telefonów i zapytań",
    description: "Twoja firma wyżej w Google, kiedy ktoś szuka Twojej usługi. Efekt: więcej telefonów i zapytań.",
    technical: "Schema LocalBusiness + meta tagi",
  },
  {
    icon: (size) => <MouseIcon size={size} />,
    title: "Tytuły, na które chce się klikać",
    description: "Ktoś szuka Twojej usługi — widzi tytuł i opis, które zachęcają do kliknięcia. Nie generyczne, nie suche.",
    technical: "Optymalizacja meta tagów per podstrona",
  },
  {
    icon: (size) => <ChartIcon size={size} />,
    title: "Wiesz, ile osób Cię znajduje",
    description: "Widzisz konkretne liczby: ile osób wpisało Twoją usługę, ile kliknęło, ile zadzwoniło. Bez zgadywania.",
    technical: "Google Search Console + Analytics 4",
  },
  {
    icon: (size) => <BoltIcon size={size} />,
    title: "Strona ładuje się natychmiast",
    description: "Klient nie czeka 5 sekund na biały ekran. Strona jest gotowa, zanim zdąży się zniecierpliwić.",
    technical: "Core Web Vitals: LCP < 1.5s",
  },
  {
    icon: (size) => <MobileIcon size={size} />,
    title: "Wygląda idealnie na telefonie",
    description: "Większość osób szuka usług lokalnych z telefonu. Twoja strona wygląda i działa perfekcyjnie na małym ekranie.",
    technical: "Mobile-first design + testy realne",
  },
]

const CheckIcon = ({ size = 12 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const SEOSection = () => {
  return (
    <Box as="section" id="seo" bg="bg.cream" py={{ base: "20", md: "28" }} aria-label="Widoczność w Google">
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* Header — tipografía idéntica al hero */}
          <VStack gap="5" textAlign="center" maxW="3xl" mx="auto" className="wix-fade-up">
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="rgba(13, 148, 136, 0.1)"
              borderWidth="1px"
              borderColor="rgba(13, 148, 136, 0.25)"
              borderRadius="full"
            >
              <Box w="1.5" h="1.5" borderRadius="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" color="accent.700" letterSpacing="0.08em" textTransform="uppercase">
                Widoczność w Google
              </Text>
            </HStack>

            <Heading
              as="h2"
              fontWeight="600"
              color="fg.default"
              letterSpacing="-0.015em"
              lineHeight="1.1"
              fontSize={{ base: "32px", sm: "38px", md: "44px", lg: "50px" }}
              maxW="720px"
            >
              Bądź widoczny w Google.{" "}
              <Box as="span" color="accent.700" fontWeight="700">
                Od pierwszego dnia.
              </Box>
            </Heading>

            <Text fontSize="lg" color="fg.muted" lineHeight="1.6" maxW="2xl">
              Nie musisz znać się na SEO. Dbamy o to, żeby Twoja strona spełniała wszystko, czego Google wymaga. Ty widzisz efekt: więcej osób, które same Cię znajdują.
            </Text>
          </VStack>

          {/* Split 50/50: bullets izquierda + IndustrySearch derecha (sticky en desktop) */}
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1.05fr" }}
            gap={{ base: "8", lg: "12" }}
            w="full"
            alignItems="start"
          >
            {/* Columna izquierda: bullets */}
            <VStack align="stretch" gap="3" className="wix-fade-up-1">
              {benefits.map((b, i) => (
                <Box
                  key={b.title}
                  bg="bg.canvas"
                  borderRadius="xl"
                  p="5"
                  borderWidth="1px"
                  borderColor="border.subtle"
                  w="full"
                  display="flex"
                  alignItems="flex-start"
                  gap="4"
                  _hover={{
                    borderColor: "accent.300",
                    transform: "translateX(2px)",
                    boxShadow: "sm",
                  }}
                  transition="all 0.22s cubic-bezier(0.22, 1, 0.36, 1)"
                  className={`wix-fade-up-${(i % 4) + 1}`}
                >
                  <Box
                    w="11"
                    h="11"
                    borderRadius="lg"
                    bg="rgba(13, 148, 136, 0.1)"
                    color="accent.700"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    {b.icon(20)}
                  </Box>
                  <Box flex="1">
                    <Heading
                      as="h3"
                      fontSize="16px"
                      fontWeight="700"
                      color="fg.default"
                      letterSpacing="-0.015em"
                      lineHeight="1.3"
                      mb="1.5"
                    >
                      {b.title}
                    </Heading>
                    <Text fontSize="13px" color="fg.muted" lineHeight="1.55" mb="2">
                      {b.description}
                    </Text>
                    <HStack
                      gap="1.5"
                      px="2.5"
                      py="1"
                      bg="bg.subtle"
                      borderRadius="md"
                      alignSelf="flex-start"
                      display="inline-flex"
                    >
                      <Box color="accent.600" display="flex">
                        <CheckIcon size={10} />
                      </Box>
                      <Text fontSize="10px" color="fg.default" fontWeight="600" letterSpacing="0.04em">
                        {b.technical}
                      </Text>
                    </HStack>
                  </Box>
                </Box>
              ))}
            </VStack>

            {/* Columna derecha: animación del buscador de Google (sticky en desktop) */}
            <Box
              position={{ base: "static", lg: "sticky" }}
              top={{ lg: "24" }}
              className="wix-fade-up-2"
              w="full"
            >
              <IndustrySearch />
            </Box>
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}
