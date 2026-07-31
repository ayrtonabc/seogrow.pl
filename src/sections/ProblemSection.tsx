// src/sections/ProblemSection.tsx
// "Inni obiecują. U nas to po prostu działa." — wix-style split 2-col con X rojos vs ✓ teal.
// Fondo claro (no dark), eyebrow + headline + grid 2-col.

import { Box, Container, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react"

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

type Item = { title: string; desc: string }

const PROBLEMS: Item[] = [
  {
    title: "Każda zmiana to wydatek",
    desc: "Chcesz zmienić cenę lub zdjęcie — agencja liczy godziny i wysyła wycenę. Ty czekasz.",
  },
  {
    title: "Google nie pokazuje firmy",
    desc: "Klient wpisuje Twoją usługę. Twoja firma nie pojawia się — pojawia się konkurencja.",
  },
  {
    title: "Faktury co miesiąc, efektów brak",
    desc: "Hosting, certyfikat, poprawki, aktualizacje. Pieniądze odchodzą, nowi klienci nie przychodzą.",
  },
  {
    title: "Jeden człowiek trzyma wszystko",
    desc: "Programista ma hasła i pliki. Bez niego nie ruszysz. A jeśli odejdzie — zaczynasz od zera.",
  },
]

const SOLUTIONS: Item[] = [
  {
    title: "Edytujesz sam, w 2 kliknięciach",
    desc: "Zmiana ceny, dodanie zdjęcia, nowa usługa — robisz to z telefonu, bez kodowania.",
  },
  {
    title: "Strona zoptymalizowana pod Google",
    desc: "Schema, meta tagi, szybkość — wszystko w standardzie, zanim jeszcze zaczniesz działać.",
  },
  {
    title: "Jedna kwota miesięcznie, bez niespodzianek",
    desc: "Hosting, domena, CMS, wsparcie — wszystko w jednej racie. Zero ukrytych faktur.",
  },
  {
    title: "Strona jest Twoja, na zawsze",
    desc: "Kody, treści, domena zostają u Ciebie. Możesz odejść w każdej chwili — wystarczy jeden e-mail lub telefon, przekazujemy wszystko bez pytań.",
  },
]

const ProblemItem = ({ title, desc, isSolution }: Item & { isSolution: boolean }) => (
  <HStack align="start" gap="3.5" className="wix-fade-up-1">
    <Box
      flexShrink={0}
      w="8"
      h="8"
      rounded="full"
      bg={isSolution ? "rgba(13, 148, 136, 0.12)" : "rgba(220, 38, 38, 0.12)"}
      color={isSolution ? "accent.600" : "#DC2626"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt="0.5"
    >
      {isSolution ? <CheckIcon size={14} /> : <XIcon size={14} />}
    </Box>
    <Box flex="1">
      <Text
        fontWeight="700"
        fontSize="16px"
        color="fg.default"
        mb="1.5"
        letterSpacing="-0.01em"
        lineHeight="1.3"
      >
        {title}
      </Text>
      <Text fontSize="14px" color="fg.muted" lineHeight="1.6">
        {desc}
      </Text>
    </Box>
  </HStack>
)

export const ProblemSection = () => {
  return (
    <Box
      as="section"
      id="jak-to-dziala"
      bg="bg.cream"
      py={{ base: "20", md: "24" }}
      position="relative"
      aria-label="Inni obiecują. U nas to po prostu działa."
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
              <Text fontSize="xs" fontWeight="600" color="fg.default" letterSpacing="0.08em" textTransform="uppercase">
                Kontrast
              </Text>
            </HStack>
            <Heading
              as="h2"
              fontSize={{ base: "32px", md: "44px", lg: "56px" }}
              fontWeight="700"
              letterSpacing="-0.02em"
              lineHeight="1.1"
              color="fg.default"
            >
              Inni obiecują.{" "}
              <Box as="span" color="accent.600">U nas to po prostu działa.</Box>
            </Heading>
            <Text fontSize="lg" color="fg.muted" lineHeight="1.6" maxW="2xl">
              Wiemy, jak wygląda praca z agencjami i freelancerami. Wiemy też, jak ją zastąpić. Zobacz różnicę w konkretach.
            </Text>
          </VStack>

          {/* Grid 2 columnas */}
          <Box
            display={{ base: "block", lg: "grid" }}
            gridTemplateColumns={{ lg: "1fr 1.1fr" }}
            gap={{ base: "6", lg: "8" }}
            w="full"
          >
            {/* Columna izquierda — problemas (rojos) */}
            <Box
              bg="bg.canvas"
              borderWidth="1px"
              borderColor="border.subtle"
              rounded="2xl"
              p={{ base: "6", md: "8" }}
              mb={{ base: "6", lg: "0" }}
              className="wix-slide-left"
              overflow="hidden"
            >
              {/* Visual: programador sobrecargado — crítica a las agencias baratas */}
              <Box
                position="relative"
                w="100%"
                borderRadius="xl"
                overflow="hidden"
                mb="6"
                bg="#F1F5F9"
              >
                <Image
                  src="/tanieprogramista.webp"
                  alt="Tanie programista — programador sobrecargado trabajando a bajo costo"
                  w="100%"
                  h="auto"
                  display="block"
                  loading="lazy"
                />
                <Box
                  position="absolute"
                  top="3"
                  left="3"
                  bg="bg.canvas"
                  rounded="full"
                  px="3"
                  py="1.5"
                  boxShadow="sm"
                  borderWidth="1px"
                  borderColor="border.subtle"
                >
                  <HStack gap="1.5">
                    <Box w="1.5" h="1.5" rounded="full" bg="#DC2626" className="wix-pulse" />
                    <Text fontSize="2xs" fontWeight="800" color="fg.default" letterSpacing="0.08em" textTransform="uppercase">
                      Tanie programista
                    </Text>
                  </HStack>
                </Box>
              </Box>

              <HStack
                gap="2"
                px="3"
                py="1.5"
                bg="rgba(220, 38, 38, 0.10)"
                borderWidth="1px"
                borderColor="rgba(220, 38, 38, 0.25)"
                rounded="full"
                alignSelf="flex-start"
                mb="5"
              >
                <Box w="1.5" h="1.5" rounded="full" bg="#DC2626" />
                <Text fontSize="xs" fontWeight="600" color="#DC2626" letterSpacing="0.08em" textTransform="uppercase">
                  U innych
                </Text>
              </HStack>
              <Heading
                as="h3"
                fontSize={{ base: "22px", md: "26px" }}
                fontWeight="700"
                color="fg.default"
                letterSpacing="-0.015em"
                lineHeight="1.25"
                mb="6"
              >
                Typowe problemy{" "}
                <Box as="span" color="#DC2626">z agencją.</Box>
              </Heading>
              <VStack gap="5" align="stretch">
                {PROBLEMS.map((p) => (
                  <ProblemItem key={p.title} {...p} isSolution={false} />
                ))}
              </VStack>
            </Box>

            {/* Columna derecha — soluciones (verdes) + visual */}
            <VStack gap="6" align="stretch" className="wix-slide-right">
              {/* Visual: office-team.webp */}
              <Box
                position="relative"
                w="full"
                h={{ base: "220px", md: "260px", lg: "300px" }}
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="md"
              >
                <Image
                  src="/zespol/office-team.webp"
                  alt="Zespół SEO Grow pracujący nad stronami klientów"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  loading="lazy"
                />
                <Box
                  position="absolute"
                  top="5"
                  right="5"
                  bg="bg.canvas"
                  rounded="full"
                  px="3"
                  py="1.5"
                  boxShadow="sm"
                  borderWidth="1px"
                  borderColor="border.subtle"
                >
                  <HStack gap="1.5">
                    <Box w="1.5" h="1.5" rounded="full" bg="success.500" className="wix-pulse" />
                    <Text fontSize="xs" fontWeight="700" color="fg.default" letterSpacing="0.06em" textTransform="uppercase">
                      Na żywo
                    </Text>
                  </HStack>
                </Box>
              </Box>

              {/* Card soluciones (teal) */}
              <Box
                bg="rgba(13, 148, 136, 0.06)"
                borderWidth="1px"
                borderColor="rgba(13, 148, 136, 0.25)"
                rounded="2xl"
                p={{ base: "6", md: "8" }}
              >
                <HStack
                  gap="2"
                  px="3"
                  py="1.5"
                  bg="rgba(13, 148, 136, 0.12)"
                  borderWidth="1px"
                  borderColor="rgba(13, 148, 136, 0.30)"
                  rounded="full"
                  alignSelf="flex-start"
                  mb="5"
                >
                  <Box w="1.5" h="1.5" rounded="full" bg="accent.600" />
                  <Text fontSize="xs" fontWeight="600" color="accent.700" letterSpacing="0.08em" textTransform="uppercase">
                    Z nami
                  </Text>
                </HStack>
                <Heading
                  as="h3"
                  fontSize={{ base: "22px", md: "26px" }}
                  fontWeight="700"
                  color="fg.default"
                  letterSpacing="-0.015em"
                  lineHeight="1.25"
                  mb="6"
                >
                  Tak to wygląda{" "}
                  <Box as="span" color="accent.600">u nas.</Box>
                </Heading>
                <VStack gap="5" align="stretch">
                  {SOLUTIONS.map((s) => (
                    <ProblemItem key={s.title} {...s} isSolution={true} />
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
