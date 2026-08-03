// src/sections/WhatYouGetSection.tsx
// "Nie tylko strona. Cały system." — wix-style 2 columnas con visual real

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Image } from "@chakra-ui/react"
import { SECTION_TITLE_PROPS, SECTION_TITLE_COLOR_DARK } from "../lib/typography"

type Point = {
  title: string
  desc: string
}

const POINTS: Point[] = [
  {
    title: "Strona zaprojektowana dla Ciebie",
    desc: "Twoja branża, Twoi klienci, Twoja marka. Każdy element dopasowany do tego, czym jest Twoja firma.",
  },
  {
    title: "Platforma, która rośnie z Tobą",
    desc: "Kiedy Twoja firma się rozwija, strona rozwija się razem z nią. Bez zmiany platformy, bez stresu.",
  },
  {
    title: "Zawsze dostępna, 24/7",
    desc: "Szybka, bezpieczna, dostępna całą dobę. My pilnujemy infrastruktury — Ty nie musisz o tym myśleć.",
  },
  {
    title: "Pomaga zdobywać klientów",
    desc: "Twoja strona przyciąga zapytania, generuje telefony i rośnie z miesiąca na miesiąc. Inwestycja, która się zwraca.",
  },
]

const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const StarIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" focusable="false">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export const WhatYouGetSection = () => {
  return (
    <Box
      as="section"
      id="co-dostajesz"
      bg="bg.canvas"
      py={{ base: "20", md: "28" }}
      aria-label="Co dostajesz w cenie"
    >
      <Container maxW="7xl">
        <Box display={{ base: "block", lg: "grid" }} gridTemplateColumns={{ lg: "1fr 1fr" }} gap={{ lg: "16" }} alignItems="center">
          {/* Visual izquierda - wix-style con imagen real + overlay + card flotante */}
          <Box mb={{ base: "10", lg: "0" }} position="relative" className="wix-slide-left">
            <Box
              position="relative"
              w="100%"
              h={{ base: "320px", md: "480px", lg: "560px" }}
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="2xl"
            >
              <Image
                src="/realizacje/wix-3.webp"
                alt="Strona internetowa stworzona z SEO Grow"
                w="100%"
                h="100%"
                objectFit="cover"
                loading="lazy"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bgGradient="linear(135deg, rgba(13,148,136,0.15) 0%, rgba(10,10,10,0.3) 100%)"
              />
            </Box>

            {/* Badge flotante con rating */}
            <Box
              position="absolute"
              top={{ base: "5%", md: "8%" }}
              left={{ base: "-3%", md: "-5%" }}
              className="wix-float"
              bg="bg.canvas"
              rounded="xl"
              px="4"
              py="3"
              boxShadow="xl"
              borderWidth="1px"
              borderColor="border.subtle"
              display="flex"
              alignItems="center"
              gap="3"
              zIndex="2"
            >
              <HStack gap="0.5" color="warm.500">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} size={14} />)}
              </HStack>
              <Box>
                <Text fontSize="sm" fontWeight="800" color="fg.default" lineHeight="1.1">5.0 / 5</Text>
                <Text fontSize="xs" color="fg.muted" lineHeight="1.2">Google Reviews</Text>
              </Box>
            </Box>

            {/* Card flotante "Peki z Ostródy" */}
            <Box
              position="absolute"
              bottom={{ base: "5%", md: "8%" }}
              right={{ base: "-3%", md: "-4%" }}
              className="wix-fade-up-3"
              bg="bg.canvas"
              rounded="xl"
              p="4"
              boxShadow="xl"
              borderWidth="1px"
              borderColor="border.subtle"
              zIndex="2"
              maxW="240px"
            >
              <HStack gap="3" align="center">
                <Box w="10" h="10" rounded="full" overflow="hidden" flexShrink={0}>
                  <Image src="/zespol/founder-1.webp" alt="Martyna Cieśniewska" w="100%" h="100%" objectFit="cover" />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="700" color="fg.default">Martyna Cieśniewska</Text>
                  <Text fontSize="xs" color="fg.muted">Founder & CEO</Text>
                </Box>
              </HStack>
              <Text fontSize="sm" color="fg.muted" mt="3" lineHeight="1.4" fontStyle="italic">
                "Każda strona to inna historia. Słuchamy, projektujemy, wdrażamy."
              </Text>
            </Box>
          </Box>

          {/* Texto derecha */}
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            gap={{ base: "6", md: "8" }}
            textAlign={{ base: "center", lg: "left" }}
            maxW={{ base: "3xl", lg: "none" }}
            mx={{ base: "auto", lg: "0" }}
            className="wix-fade-up-1"
          >
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="bg.accentSubtle"
              borderWidth="1px"
              borderColor="accent.200"
              rounded="full"
              alignSelf={{ base: "center", lg: "flex-start" }}
            >
              <Box w="1.5" h="1.5" rounded="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" color="accent.700" letterSpacing="0.08em" textTransform="uppercase">
                Co tak naprawdę dostajesz
              </Text>
            </HStack>

            <Heading
              as="h2"
              {...SECTION_TITLE_PROPS}
              color={SECTION_TITLE_COLOR_DARK}
            >
              Nie tylko strona.{" "}
              <Box as="span" color="accent.600">Cały system, który pracuje dla Ciebie.</Box>
            </Heading>

            <Text fontSize="lg" color="fg.muted" lineHeight="1.6">
              Projekt, hosting, domena, CMS, SEO, wsparcie — wszystko en un lugar, de un equipo, a un precio.
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={{ base: "5", md: "6" }} w="full" pt="2">
              {POINTS.map((point) => (
                <HStack key={point.title} align="start" gap="3" textAlign="left">
                  <Box
                    flexShrink={0}
                    w="9"
                    h="9"
                    rounded="full"
                    bg="accent.100"
                    color="accent.700"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt="0.5"
                  >
                    <CheckIcon size={16} />
                  </Box>
                  <Box>
                    <Text
                      fontWeight="700"
                      fontSize="16px"
                      color="fg.default"
                      mb="1.5"
                      letterSpacing="-0.015em"
                      lineHeight="1.3"
                    >
                      {point.title}
                    </Text>
                    <Text fontSize="14px" color="fg.muted" lineHeight="1.6">
                      {point.desc}
                    </Text>
                  </Box>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}
