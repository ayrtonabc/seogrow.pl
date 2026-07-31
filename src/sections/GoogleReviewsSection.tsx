// src/sections/GoogleReviewsSection.tsx
// "Prawdziwi klienci. Prawdziwe opinie." — 3 cards con fotos reales, 5 stars, Google badge.
// Background cream con halo teal sutil.

import { Box, Container, Heading, Text, HStack, VStack, SimpleGrid, Flex } from "@chakra-ui/react"

type Review = {
  name: string
  business: string
  businessUrl?: string
  date: string
  text: string
  initials: string
  color: string
}

const REVIEWS: Review[] = [
  {
    name: "Patrycja Grabska",
    business: "Właścicielka firmy",
    date: "6 dni temu",
    text: "Super kontakt i szybka realizacja, polecam. Dostałam dokładnie to, czego potrzebowałam — stronę, którą sama edytuję z telefonu.",
    initials: "PG",
    color: "#10B981",
  },
  {
    name: "Maksymilian Kołodziej",
    business: "Tydzień temu",
    date: "",
    text: "Polecam tę firmę. Dobra komunikacja i profesjonalne usługi w dobrych cenach.",
    initials: "MK",
    color: "#215AFF",
  },
  {
    name: "Peko Parrello",
    business: "Tio Bigotes",
    date: "1 dzień temu",
    text: "After extensive searching with various companies, we finally found SeoGrow. Customers can easily view, purchase, and the entire process runs without complications. Highly recommended.",
    initials: "PP",
    color: "#8B5CF6",
  },
]

const GoogleIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const StarRow = () => (
  <HStack gap="0.5" aria-label="5 gwiazdek na Google">
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} viewBox="0 0 24 24" width="16" height="16" fill="#FBBC05" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </HStack>
)

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.15" aria-hidden="true">
    <path d="M9.13 4.32c-3.86 1.97-6.13 6.18-6.13 10.68 0 3.43 2.07 4.83 4.13 4.83 2.07 0 4.13-1.4 4.13-3.96 0-2.55-1.4-3.96-3.26-3.96-.35 0-.7.05-1.05.16.7-2.55 2.55-4.46 5.13-5.5l-2.95-2.25zm10 0c-3.86 1.97-6.13 6.18-6.13 10.68 0 3.43 2.07 4.83 4.13 4.83 2.07 0 4.13-1.4 4.13-3.96 0-2.55-1.4-3.96-3.26-3.96-.35 0-.7.05-1.05.16.7-2.55 2.55-4.46 5.13-5.5l-2.95-2.25z" />
  </svg>
)

const ReviewCard = ({ review, delay }: { review: Review; delay: number }) => (
  <Box
    bg="bg.canvas"
    rounded="2xl"
    p={{ base: "6", md: "7" }}
    h="full"
    display="flex"
    flexDirection="column"
    gap="5"
    borderWidth="1px"
    borderColor="border.subtle"
    position="relative"
    transition="all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
    _hover={{
      transform: "translateY(-2px)",
      boxShadow: "xl",
      borderColor: "border.muted",
    }}
    className={`wix-fade-up-${delay}`}
  >
    {/* Header: stars + Google */}
    <HStack justify="space-between" align="center">
      <StarRow />
      <HStack gap="1.5" align="center" px="2" py="1" bg="bg.subtle" rounded="md">
        <GoogleIcon size={12} />
        <Text fontSize="2xs" fontWeight="700" color="fg.muted" letterSpacing="0.04em">
          Google
        </Text>
      </HStack>
    </HStack>

    {/* Quote */}
    <Box color="fg.accent">
      <QuoteIcon />
    </Box>
    <Text
      fontSize="15px"
      color="fg.default"
      lineHeight="1.6"
      flex="1"
      fontWeight="500"
      letterSpacing="-0.005em"
    >
      &ldquo;{review.text}&rdquo;
    </Text>

    {/* Author */}
    <HStack gap="3" pt="4" borderTop="1px solid" borderColor="border.subtle">
      <Flex
        w="11"
        h="11"
        rounded="full"
        bg={`${review.color}1A`}
        color={review.color}
        align="center"
        justify="center"
        fontSize="sm"
        fontWeight="700"
        letterSpacing="-0.02em"
        flexShrink={0}
      >
        {review.initials}
      </Flex>
      <VStack align="start" gap="0" flex="1">
        <Text fontSize="sm" fontWeight="700" color="fg.default" lineHeight="1.2">
          {review.name}
        </Text>
        {review.businessUrl ? (
          <Box
            as="a"
            href={review.businessUrl}
            target="_blank"
            rel="noopener noreferrer"
            fontSize="xs"
            color="accent.700"
            fontWeight="600"
            lineHeight="1.2"
            mt="0.5"
            textDecoration="none"
            _hover={{ textDecoration: "underline", color: "accent.800" }}
          >
            {review.business}
          </Box>
        ) : (
          <Text fontSize="xs" color="fg.muted" lineHeight="1.2" mt="0.5">
            {review.business}
          </Text>
        )}
      </VStack>
      {review.date && (
        <Text fontSize="2xs" color="fg.subtle" whiteSpace="nowrap">
          {review.date}
        </Text>
      )}
    </HStack>
  </Box>
)

export const GoogleReviewsSection = () => {
  return (
    <Box
      as="section"
      id="opinie"
      bg="bg.cream"
      py={{ base: "20", md: "28" }}
      position="relative"
      overflow="hidden"
      aria-label="Opinie klientów"
    >
      {/* Halo teal sutil de fondo */}
      <Box
        position="absolute"
        top="10%"
        left="-10%"
        w="500px"
        h="500px"
        bg="accent.100"
        opacity={0.5}
        filter="blur(120px)"
        rounded="full"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex="1">
        <VStack gap={{ base: "10", md: "14" }} align="stretch">
          {/* Header */}
          <VStack gap="5" textAlign="center" maxW="3xl" mx="auto">
            <HStack
              className="wix-fade-up"
              gap="2"
              px="3"
              py="1.5"
              bg="bg.canvas"
              borderWidth="1px"
              borderColor="border.default"
              rounded="full"
            >
              <GoogleIcon size={12} />
              <Text fontSize="xs" fontWeight="700" color="fg.default" letterSpacing="0.08em" textTransform="uppercase">
                Opinie Google
              </Text>
              <Box w="1px" h="3" bg="border.strong" />
              <Text fontSize="xs" fontWeight="700" color="fg.accent" letterSpacing="0.08em" textTransform="uppercase">
                5.0 · 47 opinii
              </Text>
            </HStack>

            <Heading
              as="h2"
              className="wix-fade-up-1"
              fontWeight="800"
              color="fg.default"
              letterSpacing="-0.04em"
              lineHeight="1.0"
              fontSize={{ base: "36px", md: "48px", lg: "56px" }}
            >
              Prawdziwi klienci.{" "}
              <Box as="span" color="fg.accent">Prawdziwe opinie.</Box>
            </Heading>
          </VStack>

          {/* Cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "4", md: "5" }} w="full">
            <ReviewCard review={REVIEWS[0]} delay={1} />
            <ReviewCard review={REVIEWS[1]} delay={2} />
            <ReviewCard review={REVIEWS[2]} delay={3} />
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
