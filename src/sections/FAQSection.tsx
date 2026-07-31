// src/sections/FAQSection.tsx
// "Masz pytania? Mamy odpowiedzi." — Split layout wix-style.
// Izquierda: headline + CTA. Derecha: accordion con chevron.

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { faqs } from "../data/faqs"

const ChevronIcon = ({ open }: { open: boolean }) => (
  <Box
    transform={open ? "rotate(180deg)" : "rotate(0deg)"}
    transition="transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
    display="flex"
  >
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </Box>
)

const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const ArrowRightIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

// Mostramos solo 7 FAQs para mantener esta sección compacta.
// Las 2 primeras (5 días, WordPress) son las que más importan al cliente nuevo.
const VISIBLE_FAQS = faqs.slice(0, 7)

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Box
      as="section"
      id="faq"
      bg="bg.canvas"
      py={{ base: "20", md: "28" }}
      aria-label="Częste pytania"
    >
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "10", lg: "16" }} alignItems="flex-start">
          {/* Izquierda: header + CTA */}
          <VStack align="flex-start" gap="5" position={{ lg: "sticky" }} top={{ lg: "100px" }} className="wix-fade-up">
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="bg.accentSubtle"
              borderWidth="1px"
              borderColor="accent.200"
              rounded="full"
            >
              <Box w="1.5" h="1.5" rounded="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" color="accent.700" letterSpacing="0.08em" textTransform="uppercase">
                Pytania
              </Text>
            </HStack>
            <Heading
              as="h2"
              fontSize={{ base: "36px", md: "48px", lg: "56px" }}
              fontWeight="800"
              letterSpacing="-0.04em"
              lineHeight={{ base: "1.1", md: "1.05", lg: "1.0" }}
              color="fg.default"
            >
              Masz pytania?{" "}
              <Box as="span" color="fg.accent">Mamy odpowiedzi.</Box>
            </Heading>
            <Text color="fg.muted" fontSize="md" lineHeight="1.6" maxW="md">
              Bez owijania w bawełnę. Najczęstsze pytania, na które odpowiadamy co tydzień.
            </Text>

            {/* CTA card */}
            <Box
              mt="4"
              bg="bg.cream"
              border="1px solid"
              borderColor="border.default"
              rounded="2xl"
              p={{ base: "5", md: "6" }}
              w="full"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="-40px"
                right="-40px"
                w="160px"
                h="160px"
                bg="accent.100"
                opacity={0.7}
                filter="blur(50px)"
                rounded="full"
                pointerEvents="none"
              />
              <VStack align="flex-start" gap="3" position="relative">
                <Text fontSize="xs" fontWeight="700" color="fg.muted" letterSpacing="0.08em" textTransform="uppercase">
                  Wolisz pogadać?
                </Text>
                <Box
                  as="a"
                  href="tel:+48517105423"
                  display="inline-flex"
                  alignItems="center"
                  gap="2.5"
                  bg="bg.dark"
                  color="white"
                  px="5"
                  h="12"
                  rounded="full"
                  fontWeight="700"
                  fontSize="md"
                  textDecoration="none"
                  _hover={{ bg: "bg.darkSubtle", transform: "translateY(-1px)" }}
                  transition="all 0.2s"
                >
                  <Box color="accent.400" display="flex">
                    <PhoneIcon />
                  </Box>
                  517 105 423
                </Box>
                <Text fontSize="xs" color="fg.muted" lineHeight="1.5">
                  Odpowiadamy w 4 godziny. Żywy człowiek, nie bot.
                </Text>
              </VStack>
            </Box>
          </VStack>

          {/* Derecha: accordion */}
          <Box w="full" borderTop="1px solid" borderColor="border.default">
            {VISIBLE_FAQS.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <Box
                  key={i}
                  w="full"
                  borderBottom="1px solid"
                  borderColor="border.default"
                  className={`wix-fade-up-${(i % 4) + 1}`}
                >
                  <Box
                    as="button"
                    w="full"
                    py={{ base: "5", md: "6" }}
                    px={{ base: "1", md: "2" }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    gap="4"
                    cursor="pointer"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    textAlign="left"
                    transition="all 0.2s"
                    _hover={{ color: "fg.accent" }}
                    _focusVisible={{ outline: "2px solid", outlineColor: "accent.500", outlineOffset: "-2px" }}
                  >
                    <Text
                      fontWeight="700"
                      color="fg.default"
                      fontSize={{ base: "16px", md: "18px" }}
                      textAlign="left"
                      flex="1"
                      lineHeight="1.4"
                      letterSpacing="-0.02em"
                    >
                      {faq.question}
                    </Text>
                    <Box
                      w="36px"
                      h="36px"
                      bg={isOpen ? "accent.500" : "bg.subtle"}
                      color={isOpen ? "white" : "fg.muted"}
                      rounded="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      transition="all 0.22s cubic-bezier(0.22, 1, 0.36, 1)"
                    >
                      <ChevronIcon open={isOpen} />
                    </Box>
                  </Box>

                  <Box
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    maxHeight={isOpen ? "600px" : "0"}
                    opacity={isOpen ? 1 : 0}
                    overflow="hidden"
                    transition="all 0.32s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    <Box pb={{ base: "5", md: "6" }} px={{ base: "1", md: "2" }}>
                      <Text color="fg.muted" fontSize="15px" lineHeight="1.7" maxW="2xl" pt="1">
                        {faq.answer}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              )
            })}

            <Stack direction={{ base: "column", sm: "row" }} gap="3" pt="8" align="center">
              <Text fontSize="sm" color="fg.muted">
                Nie znalazłeś odpowiedzi?
              </Text>
              <Box
                as="a"
                href="mailto:kontakt@seogrow.pl"
                display="inline-flex"
                alignItems="center"
                gap="1.5"
                color="fg.accent"
                fontSize="sm"
                fontWeight="700"
                textDecoration="none"
                _hover={{ color: "fg.accentHover", gap: "2.5" }}
                transition="all 0.2s"
              >
                Napisz do nas
                <ArrowRightIcon />
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
