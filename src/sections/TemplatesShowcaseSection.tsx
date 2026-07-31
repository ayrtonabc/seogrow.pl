// src/sections/TemplatesShowcaseSection.tsx
// "Dostępne moduły" — wix.com.pl-style grid 3x3 de módulos opcionales
// que el cliente activa en su web a medida cuando lo necesita.
// Cada módulo: nombre + descripción + estado (Dostępny / Zainstaluj / Płatny)

import { Box, Container, Heading, Text, HStack, VStack, SimpleGrid } from "@chakra-ui/react"

const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const SparkleIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" focusable="false">
    <path d="M12 2l1.6 4.8L18 8.4l-4.4 1.6L12 14.4l-1.6-4.4L6 8.4l4.4-1.6L12 2zM19 14l.8 2.4 2.4.8-2.4.8L19 20l-.8-2-2.4-.8 2.4-.8L19 14z" />
  </svg>
)

const PersonIconSvg = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

type Module = {
  title: string
  desc: string
  status: "available" | "paid"
  price?: string
  emoji: string
  badge?: string
  accent: string
}

const MODULES: Module[] = [
  {
    title: "Sklep",
    desc: "Produkty, płatności i wysyłka. Kompletny system e-commerce.",
    status: "available",
    emoji: "🛒",
    accent: "#FF6B6B",
  },
  {
    title: "Kursy",
    desc: "Kursy, rozdziały i materiały. System zarządzania nauczaniem.",
    status: "available",
    emoji: "🎓",
    accent: "#0D9488",
  },
  {
    title: "Restauracja / Menu",
    desc: "Kategorie i produkty. System rezerwacji stolików.",
    status: "available",
    emoji: "🍽️",
    accent: "#F59E0B",
  },
  {
    title: "Rezerwacje / Wizyty",
    desc: "Usługi i integracja z kalendarzem.",
    status: "available",
    emoji: "📅",
    accent: "#3B82F6",
  },
  {
    title: "Wiele języków",
    desc: "Języki, automatyczne tłumaczenie i korekta.",
    status: "available",
    emoji: "🌍",
    accent: "#8B5CF6",
  },
  {
    title: "Portfolio / Galeria",
    desc: "Dodawaj realizacje z kategoriami.",
    status: "available",
    emoji: "🖼️",
    accent: "#EC4899",
  },
  {
    title: "CRM",
    desc: "Lejek leadów, kanban drag-and-drop, aktywności i notatki.",
    status: "available",
    emoji: "📊",
    accent: "#10B981",
  },
  {
    title: "Konstruktor Formularzy",
    desc: "Zaawansowane formularze z logiką warunkową, przesyłaniem plików i integracją z CRM oraz e-mail marketingiem.",
    status: "available",
    emoji: "📝",
    accent: "#F97316",
  },
  {
    title: "Pop-upy",
    desc: "Wyskakujące okna z wyzwalaczami, regułami wyświetlania i śledzeniem konwersji.",
    status: "available",
    emoji: "💬",
    accent: "#06B6D4",
  },
]

export const TemplatesShowcaseSection = () => {
  return (
    <Box
      as="section"
      bg="bg.canvas"
      py={{ base: "20", md: "28" }}
      aria-label="Dostępne moduły"
    >
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }} align="stretch">
          {/* Header */}
          <Box textAlign="center" maxW="3xl" mx="auto">
            <HStack
              className="wix-fade-up"
              gap="2"
              px="3"
              py="1.5"
              bg="bg.cream"
              borderWidth="1px"
              borderColor="border.subtle"
              rounded="full"
              justify="center"
              mb="5"
              display="inline-flex"
            >
              <Box w="1.5" h="1.5" rounded="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" color="fg.default" letterSpacing="0.08em" textTransform="uppercase">
                Dostępne moduły
              </Text>
            </HStack>

            <Heading
              as="h2"
              className="wix-fade-up-1"
              fontWeight="600"
              color="fg.default"
              letterSpacing="-0.015em"
              lineHeight="1.1"
              fontSize={{ base: "32px", md: "40px", lg: "46px" }}
              maxW="640px"
              mx="auto"
              mb="5"
            >
              Tylko funkcje, których{" "}
              <Box as="span" color="accent.700" fontWeight="700">
                naprawdę potrzebujesz.
              </Box>
            </Heading>

            <Text
              className="wix-fade-up-2"
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              lineHeight="1.55"
              maxW="520px"
              mx="auto"
            >
              Wszystko poniżej działa od razu po włączeniu. Bez umowy, bez dopłat za każdy moduł osobno.
            </Text>
          </Box>

          {/* Grid de módulos 3x3 en desktop — 9 cards exactas */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={{ base: "4", md: "5" }} w="full">
            {MODULES.map((m, i) => (
              <Box
                key={m.title}
                className={`wix-fade-up-${Math.min(i + 1, 4)}`}
                position="relative"
                bg={m.status === "paid" ? "rgba(33, 90, 255, 0.04)" : "bg.canvas"}
                borderWidth="1px"
                borderColor={m.status === "paid" ? "rgba(33, 90, 255, 0.25)" : "border.default"}
                rounded="2xl"
                p="6"
                transition="all 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
                _hover={{
                  borderColor: m.status === "paid" ? "rgba(33, 90, 255, 0.45)" : m.accent,
                  transform: "translateY(-3px)",
                  boxShadow: "lg",
                }}
                overflow="hidden"
              >
                {/* Badge "Płatny" en esquina superior derecha */}
                {m.badge && (
                  <Box
                    position="absolute"
                    top="4"
                    right="4"
                    bg="#215AFF"
                    color="white"
                    fontSize="10px"
                    fontWeight="800"
                    letterSpacing="0.08em"
                    px="2"
                    py="1"
                    rounded="full"
                    textTransform="uppercase"
                  >
                    💎 {m.badge}
                  </Box>
                )}

                <VStack align="stretch" gap="4" h="full">
                  {/* Icono + título */}
                  <HStack gap="3" align="start">
                    <Box
                      flexShrink={0}
                      w="12"
                      h="12"
                      rounded="xl"
                      bg={m.status === "paid" ? "rgba(33, 90, 255, 0.12)" : `${m.accent}1A`}
                      color={m.status === "paid" ? "#215AFF" : m.accent}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="24px"
                    >
                      {m.emoji}
                    </Box>
                    <Box flex="1" pt="1">
                      <Heading
                        as="h3"
                        fontSize="lg"
                        fontWeight="700"
                        color="fg.default"
                        letterSpacing="-0.02em"
                        lineHeight="1.2"
                      >
                        {m.title}
                      </Heading>
                    </Box>
                  </HStack>

                  {/* Descripción */}
                  <Text fontSize="14px" color="fg.muted" lineHeight="1.55" flex="1">
                    {m.desc}
                  </Text>

                  {/* Status / CTA */}
                  {m.status === "available" ? (
                    <HStack
                      gap="2"
                      px="4"
                      h="10"
                      bg="rgba(34, 197, 94, 0.08)"
                      color="success.700"
                      borderWidth="1px"
                      borderColor="rgba(34, 197, 94, 0.25)"
                      rounded="full"
                      fontSize="sm"
                      fontWeight="600"
                      justify="center"
                    >
                      <CheckIcon size={14} />
                      <Text>Dostępny</Text>
                      <Text color="fg.muted" fontWeight="500">·</Text>
                      <Text color="fg.default" fontWeight="600">W planie</Text>
                    </HStack>
                  ) : (
                    <HStack
                      gap="2"
                      px="4"
                      h="10"
                      bg="rgba(33, 90, 255, 0.08)"
                      color="#215AFF"
                      borderWidth="1px"
                      borderColor="rgba(33, 90, 255, 0.25)"
                      rounded="full"
                      fontSize="sm"
                      fontWeight="600"
                      justify="center"
                    >
                      <SparkleIcon size={14} />
                      <Text>{m.price}</Text>
                      <Text color="fg.muted" fontWeight="500">·</Text>
                      <Text color="fg.muted" fontWeight="500">moduł premium</Text>
                    </HStack>
                  )}
                </VStack>
              </Box>
            ))}

            {/* 10º item: banner "Nie wiesz, których potrzebujesz?" ocupa toda la fila */}
            <Box
              className="wix-fade-up-3"
              gridColumn={{ md: "1 / -1" }}
              position="relative"
              p={{ base: "6", md: "7" }}
              rounded="2xl"
              bg="linear-gradient(135deg, rgba(15, 118, 110, 0.06) 0%, rgba(20, 184, 166, 0.04) 100%)"
              borderWidth="1px"
              borderColor="accent.200"
              overflow="hidden"
              transition="all 0.25s"
              _hover={{ borderColor: "accent.400", transform: "translateY(-3px)", boxShadow: "lg" }}
            >
              <HStack gap={{ base: "3", md: "5" }} align="center" wrap="wrap">
                <Box
                  flexShrink={0}
                  w={{ base: "10", md: "12" }}
                  h={{ base: "10", md: "12" }}
                  rounded={{ base: "full", md: "xl" }}
                  bg="accent.100"
                  color="accent.700"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <PersonIconSvg size={20} />
                </Box>
                <Text fontSize={{ base: "sm", md: "md" }} color="fg.default" lineHeight="1.5" flex="1" minW="240px">
                  <Box as="span" fontWeight="700">Nie wiesz, których potrzebujesz?</Box> Napisz do nas przez WhatsApp, a dobierzemy moduły do Twojego biznesu. Obsługa osobista, bez robotów.
                </Text>
                <Box
                  display={{ base: "none", md: "inline-flex" }}
                  alignItems="center"
                  gap="2"
                  px="4"
                  h="10"
                  bg="accent.600"
                  color="white"
                  rounded="full"
                  fontSize="sm"
                  fontWeight="700"
                  flexShrink={0}
                >
                  <Text>Napisz na WhatsApp</Text>
                </Box>
              </HStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
