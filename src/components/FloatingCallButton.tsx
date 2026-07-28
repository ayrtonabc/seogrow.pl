// src/components/FloatingCallButton.tsx
// FAB (Floating Action Button) mobile para mantener visible el CTA
// "Zadzwoń" mientras el usuario scrollea. Solo aparece en mobile y solo
// después de hacer scroll (>300px) para no competir con el hero CTA.

import { Box, HStack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const PhoneIcon = ({ size = 22 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const PulseRing = () => (
  <Box
    position="absolute"
    inset="0"
    rounded="full"
    bg="#4F46E5"
    opacity="0.4"
    sx={{
      animation: "fabPulse 2.4s ease-out infinite",
      "@keyframes fabPulse": {
        "0%": { transform: "scale(1)", opacity: 0.5 },
        "70%": { transform: "scale(1.6)", opacity: 0 },
        "100%": { transform: "scale(1.6)", opacity: 0 },
      },
    }}
    pointerEvents="none"
  />
)

export const FloatingCallButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Box
      as="a"
      href="tel:+48517105423"
      position="fixed"
      bottom={{ base: "5", md: "6" }}
      right={{ base: "4", md: "6" }}
      zIndex="900"
      display={{ base: "flex", md: "none" }}
      opacity={visible ? 1 : 0}
      transform={visible ? "translateY(0)" : "translateY(20px)"}
      pointerEvents={visible ? "auto" : "none"}
      transition="opacity 0.25s ease, transform 0.25s ease"
      aria-label="Zadzwoń do nas: 517 105 423"
      role="button"
    >
      <HStack
        gap="2"
        bg="#4F46E5"
        color="white"
        pl="3"
        pr="5"
        py="3"
        rounded="full"
        boxShadow="0 10px 25px rgba(79, 70, 229, 0.45), 0 4px 10px rgba(0, 0, 0, 0.12)"
        position="relative"
        _hover={{ bg: "#4338CA", transform: "translateY(-2px)" }}
        _active={{ transform: "translateY(0)" }}
        transition="all 0.18s"
      >
        <Box position="relative" w="32px" h="32px" rounded="full" bg="rgba(255,255,255,0.18)" display="flex" alignItems="center" justifyContent="center">
          <PulseRing />
          <Box display="flex" position="relative">
            <PhoneIcon size={18} />
          </Box>
        </Box>
        <Text fontSize="sm" fontWeight="800" letterSpacing="0.01em" display={{ base: "block", sm: "none" }}>
          Zadzwoń
        </Text>
        <Text fontSize="sm" fontWeight="800" letterSpacing="0.01em" display={{ base: "none", sm: "block" }}>
          517 105 423
        </Text>
      </HStack>
    </Box>
  )
}
