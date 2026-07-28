// src/sections/GoogleReviewsSection.tsx
// Sekcja z opiniami klientów z Google Business Profile Grow Solutions.
// 4 opinie 5/5 (Peko Parrello, Patrycja Grabska, Szcześliwej Drogi, Maksymilian Kołodziej).
// Layout ultra-kompaktowy: 4 karty w jednej linii (desktop), cytat skrócony, minimalne paddingi.
// Treści opinii zachowane w oryginalnym języku autora.
// Schema LocalBusiness z aggregateRating + Review items jest w index.html i scripts/seo-config.js
// (nie tutaj) — to ten schema odpowiada za gwiazdki w Google Search i AI Overviews.

import { Box, Container, Text, HStack, VStack, SimpleGrid, Link } from "@chakra-ui/react"

type Review = {
  name: string
  date: string
  text: string
  initial: string
}

const REVIEWS: Review[] = [
  {
    name: "Peko Parrello",
    date: "1 dzień temu",
    text: "After extensive searching and unsuccessful attempts with various companies, we finally found SeoGrow. Highly recommended.",
    initial: "P",
  },
  {
    name: "Patrycja Grabska",
    date: "6 dni temu",
    text: "Super kontakt i szybka realizacja, polecam :)",
    initial: "P",
  },
  {
    name: "Szcześliwej Drogi",
    date: "6 dni temu",
    text: "Profesjonalna obsługa i rzetelna realizacja. Serdecznie mogę polecić :)",
    initial: "S",
  },
  {
    name: "Maksymilian Kołodziej",
    date: "6 dni temu",
    text: "Polecam tę firmę. Dobra komunikacja i profesjonalne usługi w dobrych cenach.",
    initial: "M",
  },
]

const GoogleIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size}>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const StarRow = () => (
  <HStack gap="0.5" aria-label="5 gwiazdek na Google">
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} aria-hidden="true" viewBox="0 0 24 24" width="11" height="11" fill="#FBBC05">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </HStack>
)

const ReviewCard = ({ review }: { review: Review }) => (
  <Box
    bg="white"
    rounded="lg"
    p="4"
    h="full"
    display="flex"
    flexDirection="column"
    gap="2.5"
    border="1px solid #E2E8F0"
  >
    {/* Header: 5 gwiazdek + Google */}
    <HStack justify="space-between" align="center">
      <StarRow />
      <GoogleIcon size={12} />
    </HStack>

    {/* Cytat */}
    <Text fontSize="xs" color="#0F172A" lineHeight="1.5" flex="1" fontStyle="italic" css={{ display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
      &ldquo;{review.text}&rdquo;
    </Text>

    {/* Autor */}
    <HStack gap="2" mt="1">
      <Box
        w="24px"
        h="24px"
        rounded="full"
        bg="linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight="800"
        fontSize="2xs"
        flexShrink={0}
      >
        {review.initial}
      </Box>
      <VStack align="start" gap="0" lineHeight="1.2">
        <Text fontSize="2xs" fontWeight="700" color="#0F172A">
          {review.name}
        </Text>
        <Text fontSize="2xs" color="#64748B">
          {review.date} · Google
        </Text>
      </VStack>
    </HStack>
  </Box>
)

export const GoogleReviewsSection = () => {
  return (
    <Box bg="white" py={{ base: "8", md: "10" }} position="relative" overflow="hidden">
      <Container maxW="7xl" position="relative" zIndex="1">
        <VStack gap="5">
          {/* Eyebrow: chip z oceną */}
          <HStack
            gap="2"
            px="3"
            py="1"
            bg="#FEF3C7"
            rounded="full"
            border="1px solid #FBBF24"
          >
            <StarRow />
            <Text fontSize="xs" fontWeight="700" color="#92400E">
              5.0 na Google · 4 opinie
            </Text>
          </HStack>

          {/* 4 karty w jednej linii (desktop) / 2 (tablet) / 1 (mobile) */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="3" w="full">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </SimpleGrid>

          {/* CTA: zobacz wszystkie / zostaw opinię w Google */}
          <Link
            href="https://g.page/r/CYu5uxeqUManEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            display="inline-flex"
            alignItems="center"
            gap="1.5"
            fontSize="xs"
            fontWeight="600"
            color="#4F46E5"
            textDecoration="none"
            _hover={{ textDecoration: "underline" }}
          >
            Zobacz wszystkie opinie w Google
            <Box as="span" lineHeight="1">→</Box>
          </Link>
        </VStack>
      </Container>
    </Box>
  )
}
