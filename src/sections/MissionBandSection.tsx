import { Box, Container, Text, VStack, HStack } from "@chakra-ui/react"

export const MissionBandSection = () => {
  return (
    <Box
      bg="#0F172A"
      py={{ base: "10", md: "12" }}
      borderTop="1px solid #1E293B"
      position="relative"
      overflow="hidden"
    >
      {/* Acento sutil — línea indigo superior */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="120px"
        h="2px"
        bg="linear-gradient(90deg, transparent 0%, #4F46E5 50%, transparent 100%)"
      />

      <Container maxW="5xl">
        <VStack gap="5" textAlign="center">
          {/* Tag pequeño */}
          <HStack gap="2" align="center">
            <Box w="6px" h="6px" rounded="full" bg="#4F46E5" />
            <Text
              fontSize="11px"
              fontWeight="700"
              color="#A5B4FC"
              letterSpacing="0.14em"
              textTransform="uppercase"
            >
              Nasza misja
            </Text>
          </HStack>

          {/* Mensaje institucional — la frase grande */}
          <Text
            as="p"
            fontSize={{ base: "18px", md: "22px", lg: "26px" }}
            color="white"
            fontWeight="600"
            lineHeight="1.35"
            letterSpacing="-0.015em"
            maxW="3xl"
          >
            Nie sprzedajemy stron internetowych.{" "}
            <Box as="span" color="#A5B4FC" fontWeight="700">
              Zajmujemy się całą obecnością cyfrową Twojej firmy
            </Box>{" "}
            — żeby mogła zdobywać klientów dziś i rozwijać się jutro,{" "}
            <Box as="span" color="#A5B4FC" fontWeight="700">
              bez zmiany platformy i bez zależności od zewnętrznych dostawców
            </Box>
            .
          </Text>

          {/* Cierre con la firma del proyecto */}
          <Text
            fontSize="xs"
            color="#64748B"
            letterSpacing="0.08em"
            textTransform="uppercase"
            fontWeight="600"
            pt="2"
          >
            SEO Grow · Ostróda, Polska
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
