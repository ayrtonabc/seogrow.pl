// src/pages/order/OrderLayout.tsx — Layout compartido con stepper (PL)
import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export type OrderStep = "configure" | "payment" | "intake" | "done"

const STEPS: { id: OrderStep; title: string; description: string }[] = [
  { id: "configure", title: "Konfiguracja", description: "Plan, moduły, płatność" },
  { id: "payment", title: "Płatność", description: "Setup + pierwsza wpłata" },
  { id: "intake", title: "Brief projektu", description: "Dane do wdrożenia" },
  { id: "done", title: "Gotowe", description: "Zaczynamy w 5 dni" },
]

const stepIndex = (id: OrderStep) => STEPS.findIndex((s) => s.id === id)

export const OrderLayout = ({
  step,
  children,
}: {
  step: OrderStep
  children: React.ReactNode
}) => {
  const currentIdx = stepIndex(step)
  return (
    <Box
      bg="linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 60%)"
      minH="100vh"
    >
      <Container maxW="6xl" pt={{ base: "8", md: "12" }} pb={{ base: "16", md: "24" }}>
        <HStack
          as={Link}
          to="/"
          gap="2"
          mb={{ base: "6", md: "8" }}
          color="#64748B"
          fontSize="sm"
          fontWeight="600"
          _hover={{ color: "#4F46E5" }}
          transition="color 0.15s"
        >
          <Box as="span">←</Box>
          <Text>Wróć na stronę główną</Text>
        </HStack>

        {/* Stepper */}
        <Box
          mb={{ base: "8", md: "10" }}
          bg="white"
          rounded="2xl"
          border="1px solid #E2E8F0"
          p={{ base: "4", md: "6" }}
          boxShadow="0 1px 3px rgba(15, 23, 42, 0.04)"
        >
          <Flex
            gap={{ base: "2", md: "0" }}
            wrap={{ base: "wrap", md: "nowrap" }}
            rowGap={{ base: "3", md: "0" }}
            align="stretch"
          >
            {STEPS.map((s, i) => {
              const isCurrent = i === currentIdx
              const isDone = i < currentIdx
              return (
                <Flex
                  key={s.id}
                  flex="1"
                  minW={{ base: "45%", md: "auto" }}
                  align="center"
                  gap="3"
                  position="relative"
                >
                  <Flex
                    w={{ base: "8", md: "9" }}
                    h={{ base: "8", md: "9" }}
                    rounded="full"
                    align="center"
                    justifyContent="center"
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="800"
                    flexShrink={0}
                    bg={isCurrent ? "#4F46E5" : isDone ? "#10B981" : "#F1F5F9"}
                    color={isCurrent || isDone ? "white" : "#94A3B8"}
                    transition="all 0.25s"
                    boxShadow={
                      isCurrent
                        ? "0 0 0 4px rgba(79, 70, 229, 0.12)"
                        : "none"
                    }
                  >
                    {isDone ? "✓" : i + 1}
                  </Flex>
                  <VStack align="flex-start" gap="0" display={{ base: "none", md: "flex" }} flex="1" minW="0">
                    <Text
                      fontSize="sm"
                      fontWeight="700"
                      color={isCurrent ? "#0F172A" : isDone ? "#10B981" : "#94A3B8"}
                      lineHeight="1.2"
                      truncate
                      w="full"
                    >
                      {s.title}
                    </Text>
                    <Text fontSize="xs" color="#94A3B8" lineHeight="1.2" truncate w="full">
                      {s.description}
                    </Text>
                  </VStack>
                  {i < STEPS.length - 1 && (
                    <Box
                      flex="1"
                      h="2px"
                      mx="2"
                      display={{ base: "none", md: "block" }}
                      bg={i < currentIdx ? "#10B981" : "#E2E8F0"}
                      borderRadius="full"
                      transition="background 0.25s"
                    />
                  )}
                </Flex>
              )
            })}
          </Flex>
        </Box>

        {children}
      </Container>
    </Box>
  )
}