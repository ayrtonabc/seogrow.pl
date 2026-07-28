import { Box, Container, Flex, Heading, Text, VStack, HStack } from "@chakra-ui/react"
import { SECTION_TITLE_PROPS } from "../lib/typography"

const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export const FinalCTASection = () => {
  return (
    <Box
      bg="linear-gradient(135deg, #0F172A 0%, #1E293B 100%)"
      py={{ base: "16", md: "24" }}
      position="relative"
      overflow="hidden"
    >
      {/* Halo decorativo */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        w="400px"
        h="400px"
        bg="radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, transparent 70%)"
        borderRadius="full"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-150px"
        left="-100px"
        w="500px"
        h="500px"
        bg="radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, transparent 70%)"
        borderRadius="full"
        pointerEvents="none"
      />

      <Container maxW="5xl" position="relative" zIndex="1">
        <VStack gap={{ base: "8", md: "10" }} textAlign="center">
          <Text
            fontSize="11px"
            fontWeight="700"
            color="#A5B4FC"
            letterSpacing="0.14em"
            textTransform="uppercase"
          >
            Jedno zdanie, które podsumowuje
          </Text>

          <Heading
            as="h2"
            {...SECTION_TITLE_PROPS}
            color="white"
            maxW="4xl"
          >
            Projektujemy stronę, która{" "}
            <Box as="span" color="#A5B4FC">przyciąga klientów</Box>, działa zawsze
            i rośnie razem z Twoją firmą.{" "}
            <Box as="span" color="#94A3B8">My zajmujemy się techniką. Ty zajmujesz się biznesem.</Box>
          </Heading>

          <Box
            mt="2"
            px="5"
            py="3"
            bg="rgba(255, 255, 255, 0.05)"
            border="1px solid rgba(165, 180, 252, 0.3)"
            rounded="xl"
            display="inline-block"
          >
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="#E0E7FF"
              fontWeight="600"
              lineHeight="1.4"
            >
              🔁 Twoja strona przestaje być kosztem. Zaczyna pracować dla Twojej firmy.
            </Text>
          </Box>

          <HStack gap="3" wrap="wrap" justify="center" pt="3">
            <Box
              as="a"
              href="#ceny"
              bg="linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)"
              color="white"
              px="8"
              py="4"
              rounded="xl"
              fontWeight="700"
              fontSize="md"
              display="inline-flex"
              alignItems="center"
              gap="2"
              textDecoration="none"
              boxShadow="0 8px 24px -6px rgba(79, 70, 229, 0.6)"
              _hover={{
                bg: "linear-gradient(135deg, #4338CA 0%, #1D4ED8 100%)",
                transform: "translateY(-1px)",
                boxShadow: "0 12px 30px -6px rgba(79, 70, 229, 0.7)",
              }}
              transition="all 0.2s"
            >
              Chcę swoją stronę
              <ArrowRightIcon />
            </Box>

            <Box
              as="a"
              href="tel:+48517105423"
              bg="white"
              color="#0F172A"
              px="6"
              py="4"
              rounded="xl"
              fontWeight="600"
              fontSize="md"
              display="inline-flex"
              alignItems="center"
              gap="2"
              textDecoration="none"
              _hover={{ bg: "#F8FAFC" }}
              transition="all 0.2s"
            >
              <PhoneIcon />
              Zadzwoń: 517 105 423
            </Box>
          </HStack>

          <Text fontSize="xs" color="#94A3B8" pt="1">
            Bez umów długoterminowych · Wsparcie po polsku · 15 minut rozmowy wystarczy
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
