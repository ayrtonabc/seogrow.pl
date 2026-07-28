// src/sections/PressSection.tsx
// "Pisali o nas" — solo se renderiza cuando hay menciones reales en
// src/data/pressMentions.ts. Mientras esté vacío, la sección no aparece
// en la home (no se muestran "medios target" ni CTAs a periodistas —
// eso suena a empresa desesperada y no aporta a la imagen profesional).
//
// Cuando agregues una mención real (outlet + title + url + date), la
// sección aparece automáticamente.

import { Box, Container, Heading, Text, HStack, VStack, SimpleGrid, Badge } from "@chakra-ui/react"
import { SECTION_TITLE_PROPS, SECTION_TITLE_COLOR_DARK } from "../lib/typography"
import { pressMentions } from "../data/pressMentions"

const ArrowUpRightIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
)

const QuoteIcon = ({ size = 22 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M6 8a4 4 0 0 1 4-4M6 8v6a4 4 0 0 0 4 4M6 8H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 8a4 4 0 0 0-4-4M18 8v6a4 4 0 0 1-4 4M18 8h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
  </svg>
)

export const PressSection = () => {
  if (pressMentions.length === 0) return null

  return (
    <Box as="section" bg="white" py={{ base: "16", md: "20" }} borderTop="1px solid" borderColor="#E2E8F0">
      <Container maxW="6xl">
        <VStack gap={{ base: "8", md: "10" }} align="stretch">
          <VStack gap="3" align="center" textAlign="center" maxW="2xl" mx="auto">
            <Text
              fontSize="11px"
              fontWeight="700"
              color="#4F46E5"
              textTransform="uppercase"
              letterSpacing="0.14em"
            >
              W mediach
            </Text>
            <Heading
              as="h2"
              {...SECTION_TITLE_PROPS}
              color={SECTION_TITLE_COLOR_DARK}
            >
              Pisali o nas
            </Heading>
            <Text fontSize="sm" color="#475569" lineHeight="1.6" maxW="lg">
              Wybrane publikacje, w których SEO Grow został zacytowany lub opisany. Wszystkie linki prowadzą do oryginalnych źródeł.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap="5" w="full">
            {pressMentions.map((mention, i) => (
              <Box
                key={i}
                as="a"
                href={mention.url}
                target="_blank"
                rel="noopener noreferrer"
                p="6"
                bg="white"
                border="1px solid #E2E8F0"
                rounded="xl"
                textDecoration="none"
                transition="all 0.2s"
                _hover={{ borderColor: "#4F46E5", transform: "translateY(-2px)", boxShadow: "0 8px 20px -8px rgba(79,70,229,0.2)" }}
              >
                <HStack gap="3" mb="3" flexWrap="wrap">
                  <Badge bg="#EEF2FF" color="#4338CA" fontSize="9px" px="2" py="0.5" textTransform="uppercase">
                    {mention.outlet}
                  </Badge>
                  <Text fontSize="xs" color="#94A3B8">
                    {new Date(mention.date).toLocaleDateString("pl-PL", { year: "numeric", month: "long", day: "numeric" })}
                  </Text>
                </HStack>

                <Text fontSize="md" fontWeight="700" color="#0F172A" lineHeight="1.35" mb="3">
                  {mention.title}
                </Text>

                {mention.quote && (
                  <HStack align="start" gap="2" bg="#F8FAFC" p="3" rounded="md" mb="3">
                    <Box color="#94A3B8" flexShrink={0} mt="1px" display="flex">
                      <QuoteIcon size={14} />
                    </Box>
                    <Text fontSize="xs" color="#475569" lineHeight="1.55" fontStyle="italic">
                      {mention.quote}
                    </Text>
                  </HStack>
                )}

                <HStack gap="1.5" color="#4F46E5" fontSize="xs" fontWeight="600">
                  <Text>Czytaj oryginał</Text>
                  <Box display="flex"><ArrowUpRightIcon size={12} /></Box>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
