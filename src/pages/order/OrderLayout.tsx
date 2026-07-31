// src/pages/order/OrderLayout.tsx — Layout compartido con stepper visual (PL)
// Diseño wix.com.pl-style: header sticky, stepper compacto, fondo limpio.
import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export type OrderStep = "configure" | "payment" | "intake" | "done"

const STEPS: { id: OrderStep; title: string; subtitle: string }[] = [
  { id: "configure", title: "Konfiguracja", subtitle: "Plan i moduły" },
  { id: "payment", title: "Płatność", subtitle: "Setup i faktura" },
  { id: "intake", title: "Brief projektu", subtitle: "Dane do wdrożenia" },
  { id: "done", title: "Gotowe", subtitle: "Zaczynamy w 5 dni" },
]

const stepIndex = (id: OrderStep) => STEPS.findIndex((s) => s.id === id)

const CheckIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const ArrowLeftIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

const LockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
)

export const OrderLayout = ({
  step,
  children,
}: {
  step: OrderStep
  children: React.ReactNode
}) => {
  const currentIdx = stepIndex(step)
  const progressPct = ((currentIdx + 1) / STEPS.length) * 100

  return (
    <Box bg="bg.canvas" minH="100vh">
      {/* Header sticky con logo + progreso */}
      <Box
        as="header"
        position="sticky"
        top="0"
        zIndex="20"
        bg="rgba(255, 255, 255, 0.92)"
        style={{ backdropFilter: "saturate(180%) blur(12px)", WebkitBackdropFilter: "saturate(180%) blur(12px)" }}
        borderBottom="1px solid"
        borderColor="border.default"
      >
        <Container maxW="6xl" py="3">
          <Flex align="center" justify="space-between" gap="4">
            <HStack
              as={Link}
              to="/"
              gap="2"
              color="fg.muted"
              fontSize="sm"
              fontWeight="600"
              _hover={{ color: "accent.700" }}
              transition="color 0.15s"
            >
              <ArrowLeftIcon />
              <Text>Wróć na stronę główną</Text>
            </HStack>

            {/* Logo + SSL badge */}
            <HStack gap="3" display={{ base: "none", md: "flex" }}>
              <HStack gap="1.5" color="fg.subtle" fontSize="xs" fontWeight="600">
                <LockIcon />
                <Text>Bezpieczna płatność</Text>
              </HStack>
              <Box
                fontSize="2xs"
                fontWeight="800"
                color="accent.700"
                bg="accent.50"
                border="1px solid"
                borderColor="accent.200"
                rounded="full"
                px="2.5"
                py="1"
                textTransform="uppercase"
                letterSpacing="0.06em"
              >
                SSL · TPAY
              </Box>
            </HStack>
          </Flex>

          {/* Stepper horizontal compacto */}
          <Box mt="3" display={{ base: "none", md: "block" }}>
            <Flex align="center" gap="0">
              {STEPS.map((s, i) => {
                const isCurrent = i === currentIdx
                const isDone = i < currentIdx
                return (
                  <Flex
                    key={s.id}
                    flex="1"
                    align="center"
                    gap="3"
                    minW="0"
                  >
                    <Flex
                      w="7"
                      h="7"
                      rounded="full"
                      align="center"
                      justifyContent="center"
                      fontSize="xs"
                      fontWeight="800"
                      flexShrink={0}
                      bg={isCurrent ? "accent.600" : isDone ? "accent.600" : "border.subtle"}
                      color={isCurrent || isDone ? "white" : "fg.faint"}
                      transition="all 0.25s"
                    >
                      {isDone ? <CheckIcon size={11} /> : i + 1}
                    </Flex>
                    <Box flex="1" minW="0" display={{ base: "none", lg: "block" }}>
                      <Text
                        fontSize="xs"
                        fontWeight="700"
                        color={isCurrent ? "fg.default" : isDone ? "fg.muted" : "fg.faint"}
                        lineHeight="1.2"
                        truncate
                      >
                        {s.title}
                      </Text>
                      <Text
                        fontSize="2xs"
                        color={isCurrent ? "fg.muted" : "fg.faint"}
                        lineHeight="1.2"
                        truncate
                      >
                        {s.subtitle}
                      </Text>
                    </Box>
                    {i < STEPS.length - 1 && (
                      <Box
                        flex="1"
                        h="2px"
                        mx="2"
                        borderRadius="full"
                        bg={i < currentIdx ? "accent.500" : "border.default"}
                        transition="background 0.25s"
                        minW="20px"
                      />
                    )}
                  </Flex>
                )
              })}
            </Flex>
          </Box>

          {/* Mobile: progress bar simple */}
          <Box mt="3" display={{ base: "block", md: "none" }}>
            <Flex justify="space-between" align="center" mb="1.5">
              <Text fontSize="xs" fontWeight="700" color="fg.default">
                Krok {currentIdx + 1} z {STEPS.length} · {STEPS[currentIdx].title}
              </Text>
              <Text fontSize="2xs" color="fg.subtle" fontWeight="700">
                {Math.round(progressPct)}%
              </Text>
            </Flex>
            <Box h="6px" rounded="full" bg="border.subtle" overflow="hidden">
              <Box
                h="full"
                rounded="full"
                bg="accent.600"
                w={`${progressPct}%`}
                transition="width 0.4s ease"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxW="6xl" pt={{ base: "6", md: "10" }} pb={{ base: "20", md: "24" }}>
        {children}
      </Container>
    </Box>
  )
}
