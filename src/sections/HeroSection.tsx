import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react"

const ArrowRightIcon = ({ size = 16 }: { size?: 16 | 18 | 20 }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const PhoneIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const HeroSection = () => {
  return (
    <Box
      as="section"
      minH={{ base: "auto", md: "100vh" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      pt={{ base: "32", md: "32", lg: "32" }}
      pb={{ base: "20", md: "24" }}
      bgGradient="linear(to-b, #EEF2FF, #FAFBFC)"
      position="relative"
      overflow="hidden"
      aria-label="Sekcja powitalna"
    >
      {/* Halos decorativos */}
      <Box
        position="absolute"
        top="-10%"
        left="50%"
        transform="translateX(-50%)"
        w="800px"
        h="500px"
        bg="#C7D2FE"
        filter="blur(120px)"
        rounded="full"
        opacity="0.5"
        zIndex="0"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-20%"
        right="-5%"
        w="400px"
        h="400px"
        bg="#A5B4FC"
        filter="blur(100px)"
        rounded="full"
        opacity="0.3"
        zIndex="0"
        pointerEvents="none"
      />

      <Container maxW="5xl" position="relative" zIndex="1">
        <VStack align="center" gap={{ base: "5", md: "7" }} textAlign="center" maxW="3xl" mx="auto">
          {/* H1 — versión original, en 2 líneas balanceadas */}
          <Heading
            as="h1"
            fontSize={{ base: "30px", sm: "36px", md: "42px", lg: "48px" }}
            fontWeight="800"
            color="#0F172A"
            letterSpacing="-0.025em"
            lineHeight="1.15"
            maxW="820px"
          >
            <Box as="span" display="block">
              Strona, która{" "}
              <Box as="span" color="#4F46E5">
                przyciąga klientów
              </Box>
            </Box>
            <Box as="span" display="block" mt="1">
              i rośnie razem z Twoją firmą
            </Box>
          </Heading>

          {/* H1Accent — promesa clave */}
          <Heading
            as="h2"
            fontSize={{ base: "20px", sm: "22px", md: "26px", lg: "30px" }}
            fontWeight="600"
            color="#4F46E5"
            letterSpacing="-0.015em"
            lineHeight="1.3"
            mt="-1"
            maxW="780px"
          >
            Gotowa w 5 dni, od 1 500 zł, bez stresu
          </Heading>

          {/* Subtítulo */}
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="#475569"
            lineHeight="1.65"
            mt="2"
            maxW="640px"
            fontWeight="400"
          >
            Profesjonalna strona internetowa dla Twojej firmy. CMS-em, którym
            zarządzasz sam z telefonu.{" "}
            <Box as="span" fontWeight="600" color="#0F172A">
              Bez umowy, bez prowizji, bez żonglowania agencjami.
            </Box>
          </Text>

          {/* 4 chips */}
          <HStack gap={{ base: "2", md: "3" }} wrap="wrap" pt="3" justify="center">
            {[
              { title: "Gotowa w 5 dni" },
              { title: "Od 1 500 zł" },
              { title: "Edycja z telefonu" },
              { title: "Bez umowy" },
            ].map((item) => (
              <HStack
                key={item.title}
                align="center"
                gap="2"
                px="3"
                py="1.5"
                bg="white"
                rounded="full"
                border="1px solid #E2E8F0"
                boxShadow="0 1px 3px rgba(15, 23, 42, 0.04)"
              >
                <Box color="#4F46E5" display="flex">
                  <CheckIcon size={14} />
                </Box>
                <Text fontSize="sm" color="#0F172A" fontWeight="600">
                  {item.title}
                </Text>
              </HStack>
            ))}
          </HStack>

          {/* CTAs principales */}
          <HStack gap="3" wrap="wrap" pt="2" justify="center">
            <Box
              as="a"
              href="#ceny"
              bg="#4F46E5"
              color="white"
              px="7"
              py="3"
              rounded="full"
              fontWeight="700"
              fontSize="md"
              display="flex"
              alignItems="center"
              gap="2"
              textDecoration="none"
              _hover={{ bg: "#4338CA", transform: "translateY(-1px)", boxShadow: "lg" }}
              transition="all 0.2s"
            >
              Chcę swoją stronę
              <ArrowRightIcon />
            </Box>

            <Box
              as="a"
              href="tel:+48517105423"
              bg="white"
              color="#0F172A"
              px="6"
              py="3"
              rounded="full"
              fontWeight="600"
              fontSize="md"
              display="flex"
              alignItems="center"
              gap="2"
              border="1px solid #E2E8F0"
              textDecoration="none"
              _hover={{ borderColor: "#4F46E5", color: "#4F46E5" }}
              transition="all 0.2s"
            >
              <PhoneIcon />
              Zadzwoń: 517 105 423
            </Box>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}
