// src/sections/CoverageSection.tsx
// "Działamy w całej Polsce." — split layout: copy + photo left, 2-col city grid right.
// Wix-style: light section on bg.cream, eyebrow pill, accent word in teal, 16 city checkmarks.

import { Box, Container, Heading, Text, SimpleGrid, HStack, VStack, Image } from "@chakra-ui/react"

const CITIES: string[] = [
  "Warszawa",
  "Kraków",
  "Wrocław",
  "Poznań",
  "Gdańsk",
  "Łódź",
  "Katowice",
  "Szczecin",
  "Bydgoszcz",
  "Lublin",
  "Rzeszów",
  "Białystok",
  "Gdynia",
  "Toruń",
  "Kielce",
  "Olsztyn",
]

const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const CoverageSection = () => {
  return (
    <Box
      as="section"
      id="zasieg"
      bg="bg.cream"
      py={{ base: "20", md: "28" }}
      position="relative"
      overflow="hidden"
      aria-label="Działamy w całej Polsce"
    >
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "10", lg: "16" }} alignItems="center">
          {/* Left: copy + visual */}
          <VStack align="flex-start" gap="6" className="wix-slide-left">
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="bg.canvas"
              borderWidth="1px"
              borderColor="border.default"
              rounded="full"
            >
              <Box w="1.5" h="1.5" rounded="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" letterSpacing="0.08em" textTransform="uppercase" color="fg.default">
                Zasięg
              </Text>
            </HStack>

            <Heading
              as="h2"
              fontSize={{ base: "36px", md: "48px", lg: "60px" }}
              fontWeight="800"
              letterSpacing="-0.04em"
              lineHeight={{ base: "1.1", md: "1.05", lg: "1.0" }}
              color="fg.default"
            >
              Działamy{" "}
              <Box as="span" color="accent.600">w całej Polsce.</Box>
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" lineHeight="1.6" maxW="lg">
              Realizujemy projekty zdalnie w każdym regionie. Rozmowa na start przez telefon lub wideokonferencję — działa tak samo dobrze.
            </Text>

            {/* Visual */}
            <Box
              position="relative"
              w="full"
              maxW="lg"
              h={{ base: "240px", md: "320px" }}
              rounded="2xl"
              overflow="hidden"
              border="1px solid"
              borderColor="border.default"
              className="wix-fade-up-2"
            >
              <Image
                src="/zespol/office-team.webp"
                alt="Zespół SEO Grow w biurze"
                w="100%"
                h="100%"
                objectFit="cover"
                loading="lazy"
              />
              {/* Floating stat card */}
              <Box
                position="absolute"
                bottom="4"
                left="4"
                bg="bg.canvas"
                rounded="xl"
                p="4"
                boxShadow="lg"
                border="1px solid"
                borderColor="border.subtle"
              >
                <Text fontSize="xs" fontWeight="700" color="fg.muted" textTransform="uppercase" letterSpacing="0.08em" mb="1">
                  Realizacje
                </Text>
                <HStack gap="4" align="end">
                  <Box>
                    <Text fontSize="2xl" fontWeight="800" color="fg.default" lineHeight="1" letterSpacing="-0.03em">
                      97
                    </Text>
                    <Text fontSize="xs" color="fg.muted" mt="0.5">miast</Text>
                  </Box>
                  <Box w="1px" h="8" bg="border.default" />
                  <Box>
                    <Text fontSize="2xl" fontWeight="800" color="accent.600" lineHeight="1" letterSpacing="-0.03em">
                      16
                    </Text>
                    <Text fontSize="xs" color="fg.muted" mt="0.5">województw</Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </VStack>

          {/* Right: 2-col city grid */}
          <Box className="wix-slide-right">
            <Box
              bg="bg.canvas"
              rounded="2xl"
              border="1px solid"
              borderColor="border.default"
              p={{ base: "6", md: "8" }}
              position="relative"
              overflow="hidden"
              boxShadow="warmSm"
            >
              {/* Tiny halo accent */}
              <Box
                position="absolute"
                top="-100px"
                right="-100px"
                w="280px"
                h="280px"
                bg="accent.400"
                opacity={0.12}
                filter="blur(80px)"
                rounded="full"
                pointerEvents="none"
              />

              <VStack align="stretch" gap="5" position="relative" zIndex="1">
                <Box>
                  <Text
                    fontSize="10px"
                    fontWeight="800"
                    color="accent.600"
                    textTransform="uppercase"
                    letterSpacing="0.14em"
                    mb="2"
                  >
                    Gdzie działamy
                  </Text>
                  <Text
                    fontSize={{ base: "20px", md: "24px" }}
                    fontWeight="800"
                    color="fg.default"
                    letterSpacing="-0.02em"
                    lineHeight="1.2"
                  >
                    Sprawdź swoje miasto.
                  </Text>
                </Box>

                <SimpleGrid columns={2} gap={{ base: "3", md: "4" }} w="full">
                  {CITIES.map((city, i) => (
                    <HStack
                      key={city}
                      gap="2.5"
                      align="center"
                      className={`wix-fade-up-${(i % 4) + 1}`}
                    >
                      <Box
                        w="6"
                        h="6"
                        rounded="full"
                        bg="accent.100"
                        color="accent.700"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexShrink={0}
                      >
                        <CheckIcon size={12} />
                      </Box>
                      <Text
                        fontSize={{ base: "14px", md: "15px" }}
                        fontWeight="600"
                        color="fg.default"
                        lineHeight="1.3"
                      >
                        {city}
                      </Text>
                    </HStack>
                  ))}
                </SimpleGrid>

                {/* Bottom note */}
                <Box
                  pt="5"
                  borderTop="1px solid"
                  borderColor="border.subtle"
                  mt="1"
                >
                  <Text fontSize="sm" color="fg.muted" lineHeight="1.55">
                    Nie widzisz swojego miasta?{" "}
                    <Box as="span" color="accent.600" fontWeight="700">
                      Działamy zdalnie w całym kraju.
                    </Box>{" "}
                    Rozmowa na start przez telefon, reszta mailem.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
