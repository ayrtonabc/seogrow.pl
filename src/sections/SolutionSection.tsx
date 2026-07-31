// src/sections/SolutionSection.tsx
// "Zacznij w 5 dni. Bez stresu." — Timeline horizontal con 4 steps numerados.
// Visual: editor-mockup.webp o hero-mockup.webp como bg.

import { Box, Container, Heading, Text, VStack, HStack, Image, Grid } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

type Step = {
  number: string
  title: string
  desc: string
  duration: string
  deliverables: string[]
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Rozmowa 15 minut",
    desc: "Poznajemy Twoją firmę, branżę i klientów. Bez ankiet, bez formularzy, bez czekania na wycenę.",
    duration: "Dzień 1",
    deliverables: ["Krótka rozmowa", "Wycena od ręki", "Plan działania"],
  },
  {
    number: "02",
    title: "Projekt i treści",
    desc: "Przygotowujemy strukturę strony, sekcje, teksty i grafiki. Wszystko dopasowane do Twojej marki.",
    duration: "Dni 2-3",
    deliverables: ["Makieta strony", "Treści po polsku", "Schemat SEO"],
  },
  {
    number: "03",
    title: "Budowa i wdrożenie",
    desc: "Programiści kodują, SEO jest w standardzie, domena podłączona. Wszystko w tle — Ty nie musisz nic robić.",
    duration: "Dni 4-5",
    deliverables: ["Strona opublikowana", "CMS skonfigurowany", "SEO wdrożone"],
  },
  {
    number: "04",
    title: "Wsparcie i rozwój",
    desc: "Strona działa, klienci ją znajdują w Google. My pilnujemy hostingu, aktualizacji, certyfikatów i bezpieczeństwa. Ty dodajesz treści, kiedy chcesz.",
    duration: "Od dnia 5",
    deliverables: ["Hosting + SSL", "Wsparcie po polsku", "Comiesięczny raport"],
  },
]

const StepCard = ({ step, index }: { step: Step; index: number }) => (
  <Box
    bg="bg.canvas"
    rounded="2xl"
    p={{ base: "6", md: "7" }}
    border="1px solid"
    borderColor="border.default"
    position="relative"
    h="full"
    display="flex"
    flexDirection="column"
    _hover={{
      borderColor: "accent.500",
      transform: "translateY(-3px)",
      boxShadow: "0 16px 32px -12px rgba(13, 148, 136, 0.18)",
    }}
    transition="all 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
    className={`wix-fade-up-${(index % 4) + 1}`}
  >
    {/* Header: número + duración */}
    <HStack justify="space-between" align="center" mb="5">
      <Text
        fontSize={{ base: "44px", md: "56px" }}
        fontWeight="800"
        color="accent.500"
        lineHeight="0.9"
        letterSpacing="-0.05em"
      >
        {step.number}
      </Text>
      <Box
        bg="bg.subtle"
        border="1px solid"
        borderColor="border.subtle"
        rounded="full"
        px="3"
        py="1"
      >
        <Text fontSize="11px" fontWeight="700" color="fg.default" letterSpacing="0.04em" lineHeight="1.2">
          {step.duration}
        </Text>
      </Box>
    </HStack>

    {/* Título + desc */}
    <Heading
      as="h3"
      fontSize={{ base: "20px", md: "22px" }}
      fontWeight="800"
      color="fg.default"
      letterSpacing="-0.02em"
      lineHeight="1.25"
      mb="3"
    >
      {step.title}
    </Heading>
    <Text fontSize="14px" color="fg.muted" lineHeight="1.6" mb="5" flex="1">
      {step.desc}
    </Text>

    {/* Deliverables */}
    <VStack gap="1.5" align="stretch" pt="4" borderTop="1px solid" borderColor="border.subtle">
      {step.deliverables.map((d) => (
        <HStack key={d} gap="2" align="center">
          <Box color="accent.600" flexShrink={0} display="flex">
            <CheckIcon size={11} />
          </Box>
          <Text fontSize="12px" color="fg.default" fontWeight="500" lineHeight="1.3">
            {d}
          </Text>
        </HStack>
      ))}
    </VStack>
  </Box>
)

export const SolutionSection = () => {
  return (
    <Box as="section" id="jak-to-dziala" py={{ base: "20", md: "28" }} bg="bg.canvas">
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* Top row: H2 izq + visual der (editor-mockup) */}
          <Box
            display={{ base: "block", lg: "grid" }}
            gridTemplateColumns={{ lg: "1.1fr 1fr" }}
            gap={{ base: "8", lg: "12" }}
            w="full"
            alignItems="center"
          >
            <VStack
              align={{ base: "center", lg: "flex-start" }}
              gap="5"
              textAlign={{ base: "center", lg: "left" }}
              className="wix-fade-up"
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
                  Jak to działa
                </Text>
              </HStack>
              <Heading
                as="h2"
                fontSize={{ base: "36px", md: "48px", lg: "64px" }}
                fontWeight="800"
                letterSpacing="-0.04em"
                lineHeight={{ base: "1.1", md: "1.05", lg: "1.0" }}
                color="fg.default"
              >
                Zacznij w 5 dni.{" "}
                <Box as="span" color="accent.600">Bez stresu i agencji.</Box>
              </Heading>
              <Text fontSize="lg" color="fg.muted" lineHeight="1.6" maxW="lg">
                Od pierwszej rozmowy do gotowej strony w 5 dni. Ty dajesz treści, my dajemy Ci system, który działa. Bez ankiet, bez czekania.
              </Text>
              <HStack
                gap="3"
                pt="2"
                wrap="wrap"
                justify={{ base: "center", lg: "flex-start" }}
              >
                <Box
                  as={Link}
                  to="/zamowienie?plan=express"
                  display="inline-flex"
                  alignItems="center"
                  gap="2"
                  bg="bg.dark"
                  color="fg.inverse"
                  px="6"
                  h="14"
                  rounded="full"
                  fontWeight="700"
                  fontSize="md"
                  textDecoration="none"
                  boxShadow="md"
                  _hover={{ bg: "bg.darkSubtle", transform: "translateY(-2px)", boxShadow: "xl" }}
                  transition="all 0.22s cubic-bezier(0.22, 1, 0.36, 1)"
                >
                  Zacznij teraz
                  <ArrowRightIcon />
                </Box>
                <Box
                  as="a"
                  href="tel:+48517105423"
                  display="inline-flex"
                  alignItems="center"
                  gap="2"
                  bg="transparent"
                  color="fg.default"
                  px="5"
                  h="14"
                  rounded="full"
                  fontWeight="600"
                  fontSize="md"
                  textDecoration="none"
                  borderWidth="1px"
                  borderColor="border.strong"
                  _hover={{ bg: "bg.subtle", borderColor: "fg.default" }}
                  transition="all 0.2s"
                >
                  Zadzwoń: 517 105 423
                </Box>
              </HStack>
            </VStack>

            {/* Visual derecho: editor-mockup.webp */}
            <Box
              position="relative"
              className="wix-slide-right"
              maxW="560px"
              ml={{ base: "0", lg: "auto" }}
              w="full"
            >
              <Box
                position="relative"
                w="full"
                h={{ base: "280px", md: "360px", lg: "420px" }}
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="2xl"
                borderWidth="1px"
                borderColor="border.subtle"
              >
                <Image
                  src="/zespol/editor-mockup.webp"
                  alt="Edytor wizualny SEO Grow — zarządzasz stroną z telefonu"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  loading="lazy"
                />
                {/* Overlay teal sutil */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bgGradient="linear(135deg, rgba(13, 148, 136, 0.12) 0%, transparent 50%)"
                  pointerEvents="none"
                />
              </Box>

              {/* Card flotante — tiempo total */}
              <Box
                position="absolute"
                bottom={{ base: "-4%", md: "-6%" }}
                left={{ base: "-3%", md: "-5%" }}
                className="wix-fade-up-2"
                bg="bg.canvas"
                rounded="xl"
                px="4"
                py="3"
                boxShadow="xl"
                borderWidth="1px"
                borderColor="border.subtle"
                zIndex="2"
              >
                <HStack gap="3" align="center">
                  <Box
                    w="10"
                    h="10"
                    rounded="lg"
                    bg="accent.100"
                    color="accent.700"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <CheckIcon size={18} />
                  </Box>
                  <Box>
                    <Text fontSize="xs" color="fg.muted" lineHeight="1.2">
                      Czas od rozmowy do
                    </Text>
                    <Text fontSize="sm" fontWeight="800" color="fg.default" lineHeight="1.1" mt="0.5">
                      opublikowanej strony
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Box>

          {/* Timeline 4 steps */}
          <Box w="full" position="relative" pt={{ base: "6", md: "10" }}>
            {/* Línea conectora horizontal (md+) */}
            <Box
              display={{ base: "none", md: "block" }}
              position="absolute"
              top="55px"
              left="calc(12.5% + 30px)"
              right="calc(12.5% + 30px)"
              h="2px"
              bgGradient="linear(to-r, accent.200 0%, accent.500 100%)"
              zIndex="0"
            />

            <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={{ base: "4", md: "5" }} position="relative" zIndex="1">
              {STEPS.map((step, i) => (
                <StepCard key={step.number} step={step} index={i} />
              ))}
            </Grid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
