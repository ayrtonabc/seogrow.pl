import { Box, Container, Heading, Text, VStack, HStack, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { faqs } from "../data/faqs"

const PlusIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M12 5v14M5 12h14" />
  </svg>
)

const MinusIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14" />
  </svg>
)

const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Box
      as="section"
      id="faq"
      bg="#F8FAFC"
      py={{ base: "24", md: "32" }}
      borderTop="1px solid"
      borderColor="#E2E8F0"
      aria-label="Częste pytania"
    >
      <Container maxW="3xl">
        <VStack gap={{ base: "14", md: "16" }}>
          {/* Header */}
          <VStack gap="4" textAlign="center">
            <Text
              fontSize="12px"
              fontWeight="700"
              color="#4F46E5"
              letterSpacing="0.12em"
              textTransform="uppercase"
            >
              FAQ
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "36px", md: "52px" }}
              fontWeight="800"
              letterSpacing="-0.04em"
              color="#0F172A"
              lineHeight="1.05"
            >
              Pytania i odpowiedzi
            </Heading>
            <Text color="#475569" fontSize="18px" lineHeight="1.6" maxW="xl" mt="2">
              Bez owijania w bawełnę. Nie znalazłeś odpowiedzi? Zadzwoń lub napisz. Odpowiadamy w 4 godziny — żywy człowiek, nie bot.
            </Text>
          </VStack>

          {/* FAQ Accordion */}
          <VStack gap="2.5" w="full">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <Box
                  key={i}
                  w="full"
                  bg="white"
                  rounded="xl"
                  border="1px solid"
                  borderColor={isOpen ? "#C7D2FE" : "#E2E8F0"}
                  overflow="hidden"
                  transition="all 0.22s cubic-bezier(0.4, 0, 0.2, 1)"
                  boxShadow={isOpen ? "0 4px 16px rgba(79, 70, 229, 0.06)" : "none"}
                >
                  <Box
                    as="button"
                    w="full"
                    p={{ base: "5", md: "6" }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    gap="4"
                    cursor="pointer"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    _hover={{ bg: isOpen ? "white" : "#FAFBFC" }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    textAlign="left"
                    transition="background 0.18s"
                  >
                    <Text
                      fontWeight="700"
                      color="#0F172A"
                      fontSize={{ base: "15px", md: "17px" }}
                      textAlign="left"
                      flex="1"
                      lineHeight="1.4"
                      letterSpacing="-0.015em"
                    >
                      {faq.question}
                    </Text>
                    <HStack gap="3" align="center" flexShrink={0}>
                      {isOpen && (
                        <Box
                          bg="#EEF2FF"
                          color="#3730A3"
                          fontSize="11px"
                          px="2.5"
                          py="1"
                          rounded="md"
                          fontWeight="700"
                          letterSpacing="0.04em"
                          display={{ base: "none", md: "inline-flex" }}
                        >
                          {faq.category}
                        </Box>
                      )}
                      <Box
                        w="32px"
                        h="32px"
                        bg={isOpen ? "#4F46E5" : "#F1F5F9"}
                        color={isOpen ? "white" : "#64748B"}
                        rounded="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="all 0.22s cubic-bezier(0.4, 0, 0.2, 1)"
                      >
                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                      </Box>
                    </HStack>
                  </Box>

                  <Box
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    maxHeight={isOpen ? "500px" : "0"}
                    opacity={isOpen ? 1 : 0}
                    overflow="hidden"
                    transition="all 0.32s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    <Box
                      px={{ base: "5", md: "6" }}
                      pb={{ base: "5", md: "6" }}
                      pt="0"
                      borderTop={isOpen ? "1px solid" : "none"}
                      borderColor="#F1F5F9"
                    >
                      <Text color="#475569" fontSize="15px" lineHeight="1.7" pt="4">
                        {faq.answer}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </VStack>

          {/* CTA final */}
          <Box
            bg="#191C32"
            color="white"
            rounded="2xl"
            p={{ base: "8", md: "10" }}
            textAlign="center"
            w="full"
            position="relative"
            overflow="hidden"
            border="1px solid rgba(255, 255, 255, 0.08)"
          >
            <Box
              position="absolute"
              top="-50%"
              right="-20%"
              w="400px"
              h="400px"
              bg="radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 60%)"
              filter="blur(40px)"
              pointerEvents="none"
            />

            <VStack gap="5" position="relative" zIndex="1">
              <Heading
                as="h3"
                fontSize={{ base: "22px", md: "28px" }}
                fontWeight="800"
                color="white"
                letterSpacing="-0.03em"
                lineHeight="1.2"
              >
                Masz jeszcze pytanie?
              </Heading>
              <Text color="rgba(255, 255, 255, 0.75)" fontSize="15px" maxW="md" lineHeight="1.6">
                Zadzwoń albo napisz. Odpowiadamy konkretnie — nie owijamy w bawełnę.
              </Text>
              <Stack direction={{ base: "column", sm: "row" }} gap="3" pt="1">
                <Box
                  as="a"
                  href="tel:+48517105423"
                  display="inline-flex"
                  alignItems="center"
                  gap="2.5"
                  bg="white"
                  color="#0F172A"
                  px="6"
                  py="3.5"
                  rounded="xl"
                  fontWeight="700"
                  fontSize="15px"
                  textDecoration="none"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 28px rgba(255, 255, 255, 0.18)",
                  }}
                  transition="all 0.18s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  <Box color="#4F46E5" display="flex">
                    <PhoneIcon />
                  </Box>
                  Zadzwoń: 517 105 423
                </Box>
                <Box
                  as="a"
                  href="mailto:kontakt@seogrow.pl"
                  display="inline-flex"
                  alignItems="center"
                  gap="2.5"
                  bg="rgba(255, 255, 255, 0.08)"
                  color="white"
                  px="6"
                  py="3.5"
                  rounded="xl"
                  fontWeight="600"
                  fontSize="15px"
                  textDecoration="none"
                  border="1px solid rgba(255, 255, 255, 0.16)"
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.12)",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.18s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  <Box display="flex">
                    <MailIcon />
                  </Box>
                  Napisz maila
                </Box>
              </Stack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}