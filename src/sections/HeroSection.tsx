import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react"
import { useState } from "react"

const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const CheckIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const CloseIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" focusable="false">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

const GoogleLogo = () => (
  <Box as="span" fontWeight="700" lineHeight="1" whiteSpace="nowrap">
    <Box as="span" color="#4285F4">G</Box>
    <Box as="span" color="#EA4335">o</Box>
    <Box as="span" color="#FBBC05">o</Box>
    <Box as="span" color="#4285F4">g</Box>
    <Box as="span" color="#34A853">l</Box>
    <Box as="span" color="#EA4335">e</Box>
  </Box>
)

export const HeroSection = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Box
      as="section"
      bg="linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 100%)"
      pt={{ base: "28", md: "32", lg: "36" }}
      pb={{ base: "14", md: "20" }}
      position="relative"
      overflow="hidden"
      aria-label="Sekcja powitalna"
    >
      <Container maxW="7xl" position="relative" zIndex="1">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: "10", lg: "14" }}
        >
          <VStack
            align="flex-start"
            gap={{ base: "5", md: "6" }}
            maxW={{ base: "full", lg: "600px" }}
            textAlign="left"
          >
            <Heading
              as="h1"
              fontSize={{ base: "28px", sm: "32px", md: "38px", lg: "42px" }}
              fontWeight="700"
              letterSpacing="-0.01em"
              lineHeight="1.3"
              color="#0F172A"
            >
              Bądź widoczny w <GoogleLogo />{" "}
              <Box as="span" color="#64748B">bez agencji SEO</Box>
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#475569"
              lineHeight="1.6"
              maxW="56ch"
              fontWeight="400"
            >
              Profesjonalna strona internetowa dla Twojej firmy tworzona od podstaw przez nasz zespół.
              Zarządzasz nią wygodnie z telefonu, a klienci trafiają na Twoją stronę w Google bez płacenia za reklamy.
              Wszystko bez agencji SEO, bez programisty i bez wiedzy technicznej.
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 3 }} gap={{ base: "2", sm: "3" }} w="full" pt="1">
              {[
                { title: "Gotowa już w 5 dni", desc: "" },
                { title: "Edycja z telefonu", desc: "" },
                { title: "Widoczność w Google", desc: "" },
              ].map((item) => (
                <HStack
                  key={item.title}
                  align="start"
                  gap="2.5"
                  p="3"
                  bg="white"
                  rounded="xl"
                  border="1px solid #E2E8F0"
                >
                  <Box color="#4F46E5" mt="0.5" flexShrink={0}>
                    <CheckIcon />
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="#0F172A" lineHeight="1.3" fontWeight="700">
                      {item.title}
                    </Text>
                    {item.desc && (
                      <Text fontSize="xs" color="#64748B" lineHeight="1.4" mt="0.5">
                        {item.desc}
                      </Text>
                    )}
                  </Box>
                </HStack>
              ))}
            </SimpleGrid>

            <HStack gap="3" wrap="wrap" pt="3">
              <Box
                as="a"
                href="#ceny"
                bg="linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)"
                color="white"
                px="7"
                py="3.5"
                rounded="xl"
                fontWeight="700"
                fontSize="md"
                display="flex"
                alignItems="center"
                gap="2"
                textDecoration="none"
                boxShadow="0 4px 14px rgba(79, 70, 229, 0.35)"
                _hover={{
                  bg: "linear-gradient(135deg, #4338CA 0%, #1D4ED8 100%)",
                  transform: "translateY(-1px)",
                  boxShadow: "0 8px 20px rgba(79, 70, 229, 0.45)",
                }}
                transition="all 0.2s"
              >
                Zobacz cenę i demo
                <ArrowRightIcon />
              </Box>

              <Box
                as="a"
                href="tel:+48517105423"
                bg="white"
                color="#0F172A"
                px="6"
                py="3.5"
                rounded="xl"
                fontWeight="600"
                fontSize="md"
                display="flex"
                alignItems="center"
                gap="2"
                border="1.5px solid #E2E8F0"
                textDecoration="none"
                _hover={{
                  borderColor: "#CBD5E1",
                  bg: "#F8FAFC",
                }}
                transition="all 0.2s"
              >
                <PhoneIcon />
                Zadzwoń: 517 105 423
              </Box>
            </HStack>
          </VStack>

          <Box
            position="relative"
            w={{ base: "full", lg: "50%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt={{ base: "6", lg: "0" }}
          >
            <Box
              position="absolute"
              bottom={{ base: "-20px", md: "-30px" }}
              left="50%"
              transform="translateX(-50%)"
              w={{ base: "60%", md: "70%" }}
              h={{ base: "20px", md: "28px" }}
              bg="rgba(79, 70, 229, 0.22)"
              rounded="full"
              filter="blur(28px)"
              zIndex="0"
              className="hero-float-shadow"
              pointerEvents="none"
            />

            <Box
              as="img"
              src="/hero.webp"
              srcSet="/hero-640.webp 640w, /hero-960.webp 960w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Podgląd strony klienta w panelu SEO Grow"
              width="960"
              height="720"
              decoding="async"
              loading="eager"
              fetchPriority="high"
              w="full"
              maxW={{ base: "100%", md: "90%", lg: "100%" }}
              h="auto"
              objectFit="contain"
              position="relative"
              zIndex="1"
              filter="drop-shadow(0 24px 32px rgba(15, 23, 42, 0.12))"
              className="hero-float"
            />
          </Box>
        </Flex>
      </Container>

      {openModal && (
        <Box
          position="fixed"
          inset="0"
          zIndex="1400"
          bg="rgba(15, 23, 42, 0.55)"
          backdropFilter="blur(4px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px="4"
          onClick={() => setOpenModal(false)}
        >
          <Box
            bg="white"
            w="full"
            maxW="md"
            rounded="2xl"
            boxShadow="0 25px 50px rgba(15, 23, 42, 0.25)"
            position="relative"
            p={{ base: "6", md: "7" }}
            onClick={(event) => event.stopPropagation()}
          >
            <Box
              as="button"
              type="button"
              position="absolute"
              top="4"
              right="4"
              w="10"
              h="10"
              display="flex"
              alignItems="center"
              justifyContent="center"
              rounded="full"
              bg="#F8FAFC"
              color="#0F172A"
              onClick={() => setOpenModal(false)}
              aria-label="Zamknij okno"
            >
              <CloseIcon />
            </Box>

            <VStack gap="4" w="full" align="start">
              <Heading as="h3" fontSize="xl" fontWeight="700" color="#0F172A">
                Umów bezpłatną rozmowę
              </Heading>
              <Text fontSize="sm" color="#64748B" lineHeight="1.6">
                15 minut. Powiemy Ci szczerze, czy nasze rozwiązanie pasuje do Twojej firmy.
                Bez zobowiązań.
              </Text>
              <Box
                as="a"
                href="tel:+48517105423"
                bg="linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)"
                color="white"
                w="full"
                py="3"
                rounded="lg"
                fontWeight="700"
                fontSize="md"
                textAlign="center"
                textDecoration="none"
                _hover={{ bg: "linear-gradient(135deg, #4338CA 0%, #1D4ED8 100%)" }}
              >
                Zadzwoń: 517 105 423
              </Box>
              <Text fontSize="xs" color="#94A3B8" textAlign="center" w="full">
                Oddzwaniamy w ciągu 1 godziny w dni robocze
              </Text>
<HStack gap="4" pt="2" wrap="wrap" color="#475569" fontSize="sm">
            </HStack>
          </VStack>
          </Box>
        </Box>
      )}
    </Box>
  )
}