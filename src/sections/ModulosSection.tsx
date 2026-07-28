import { Box, Container, Heading, Text, VStack, Flex, SimpleGrid } from "@chakra-ui/react"
import { SECTION_TITLE_PROPS, SECTION_TITLE_COLOR_DARK } from "../lib/typography"
import { Link } from "react-router-dom"
import { useState } from "react"

const MonitorIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
)

const SmartphoneIcon = ({ size = 12 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
)

const CheckIcon = ({ size = 12 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

type Module = {
  title: string
  shortFor: string
  description: string
  benefits: string[]
  link: string
}

const modules: Module[] = [
  {
    title: "SKLEP ONLINE",
    shortFor: "Dla firm, które sprzedają produkty",
    description:
      "Sprzedawaj produkty i usługi z automatycznymi płatnościami. Stripe, PayU, Tpay. Bez prowizji od sprzedaży.",
    benefits: ["Automatyczne płatności", "Zarządzanie zapasami", "Integracja z kurierami", "Automatyczne fakturowanie"],
    link: "/sklep-online",
  },
  {
    title: "KURSY ONLINE",
    shortFor: "Dla firm, które uczą",
    description: "Twórz i sprzedawaj kursy online. Zarządzaj studentami, śledź postępy, wydawaj certyfikaty.",
    benefits: ["Ochrona wideo przed pobraniem", "Automatyczne egzaminy", "Certyfikaty PDF", "Miesięczne subskrypcje"],
    link: "/akademia-kursow",
  },
  {
    title: "KALENDARZ ONLINE",
    shortFor: "Dla usług i gabinetów",
    description:
      "Klienci sami wybierają termin wizyty przez internet. Ty dostajesz powiadomienie, a system wysyła przypomnienie.",
    benefits: ["Kalendarz z wolnymi terminami", "Automatyczne przypomnienia SMS i mail", "Płatność za wizytę", "Dostępność online 24/7"],
    link: "/rezerwacje-i-terminy",
  },
  {
    title: "MENU CYFROWE",
    shortFor: "Dla restauracji i lokali",
    description:
      "Menu QR dla gości. Zamówienia trafiają prosto do kuchni. Obsługa stolików i płatności w jednym miejscu.",
    benefits: ["Kody QR na stolikach", "Zamówienia do kuchni", "Modyfikacje dań", "Opcjonalne napiwki"],
    link: "/menu-cyfrowe",
  },
  {
    title: "STRONA W WIELU JĘZYKACH",
    shortFor: "Dla firm, które sprzedają za granicę",
    description:
      "Twoja strona po polsku, angielsku, niemiecku czy ukraińsku. Bez dodatkowej pracy — system tłumaczy i utrzymuje każdą wersję.",
    benefits: ["5 języków w cenie", "Osobna domena dla każdego kraju", "Ceny w lokalnej walucie", "Tłumaczenie sprawdzane przez człowieka"],
    link: "/ekspansja-globalna",
  },
  {
    title: "WIZYTÓWKA PRAC",
    shortFor: "Dla firm usługowych i rzemieślników",
    description:
      "Pokaż swoje najlepsze realizacje. Galerie, filtry i formularz kontaktowy.",
    benefits: ["Galerie zdjęć", "Filtry kategorii", "Podgląd na pełnym ekranie", "Formularz kontaktowy"],
    link: "/wizytowka-prac",
  },
  {
    title: "EMAIL MARKETING",
    shortFor: "Dla firm, które chcą wracać do klientów",
    description:
      "Newslettery z wizualnym edytorem. Śledź otwarcia i kliknięcia. Buduj relacje, które sprzedają.",
    benefits: ["Wizualny edytor drag&drop", "Wiele nadawców", "Śledzenie otwarć i kliknięć", "Segmentacja listy"],
    link: "/#moduly",
  },
  {
    title: "PANEL KLIENTÓW",
    shortFor: "Dla firm, które pracują z leadami",
    description:
      "Widzisz w jednym miejscu, kto pisał, kto dzwonił i kto jest blisko decyzji. Przeciągasz klienta między etapami — od zapytania do umowy.",
    benefits: ["Lista klientów i rozmów", "Przeciąganie między etapami", "Notatki i aktywności", "Automatyczne dane z formularzy"],
    link: "/#moduly",
  },
  {
    title: "FORMULARZE KONTAKTOWE",
    shortFor: "Dla firm, które zbierają dane od klientów",
    description:
      "Proste ankiety, wyceny i zapytania — klient wypełnia, Ty dostajesz gotową odpowiedź na maila. Bez telefonów, bez czekania.",
    benefits: ["Pytania dopasowane do klienta", "Wysyłanie zdjęć i plików", "Dane trafiają do panelu klientów", "Powiadomienia na maila"],
    link: "/#moduly",
  },
]

const ArrowLeftIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)

const ArrowRightIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export const ModulosSection = () => {
  // Paginación: 3 cards por página
  const PER_PAGE = 3
  const totalPages = Math.ceil(modules.length / PER_PAGE)
  const [page, setPage] = useState(0)
  const canPrev = page > 0
  const canNext = page < totalPages - 1
  const visibleModules = modules.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <Box as="section" id="moduly" py={{ base: "20", md: "28" }} bg="#F8FAFC" aria-label="Dostępne moduły">
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          <VStack gap="6" textAlign="center" maxW="3xl">
            <Text
              fontSize="12px"
              fontWeight="700"
              color="#4F46E5"
              letterSpacing="0.12em"
              textTransform="uppercase"
            >
              Skaluj swoją firmę bez przepłacania
            </Text>
            <Heading
              as="h2"
              {...SECTION_TITLE_PROPS}
              color={SECTION_TITLE_COLOR_DARK}
            >
              9 modułów. Włączasz tylko te, których potrzebujesz.
            </Heading>
            <Text color="#475569" fontSize="18px" lineHeight="1.6">
              Zacznij od strony wizytówki. Gdy będziesz gotowy, możesz dodać sklep, kursy lub rezerwacje.
              Płacisz tylko za aktywne moduły.
            </Text>
          </VStack>

          {/* Grid de cards paginadas — NUNCA tiene scroll horizontal */}
          <Box position="relative" w="full">
            {/* Botones prev/next */}
            <Flex
              justify="space-between"
              align="center"
              mb="6"
              gap="4"
              wrap="wrap"
            >
              <Text fontSize="13px" color="#64748B" fontWeight="500">
                <Box as="span" color="#0F172A" fontWeight="700">
                  {String(page * PER_PAGE + 1).padStart(2, "0")}–{String(Math.min((page + 1) * PER_PAGE, modules.length)).padStart(2, "0")}
                </Box>{" "}
                z {String(modules.length).padStart(2, "0")} modułów
              </Text>

              <Flex gap="2" align="center">
                <Box
                  as="button"
                  type="button"
                  aria-label="Poprzednia strona"
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  w="44px"
                  h="44px"
                  rounded="full"
                  bg="white"
                  border="1px solid #E2E8F0"
                  color={canPrev ? "#0F172A" : "#CBD5E1"}
                  boxShadow={canPrev ? "0 4px 12px -4px rgba(15, 23, 42, 0.12)" : "none"}
                  cursor={canPrev ? "pointer" : "not-allowed"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  opacity={canPrev ? 1 : 0.5}
                  transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={canPrev ? { bg: "#4F46E5", color: "white", borderColor: "#4F46E5" } : {}}
                  _focusVisible={{ outline: "2px solid #4F46E5", outlineOffset: "2px" }}
                >
                  <ArrowLeftIcon />
                </Box>
                <Box
                  as="button"
                  type="button"
                  aria-label="Następna strona"
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  w="44px"
                  h="44px"
                  rounded="full"
                  bg={canNext ? "#4F46E5" : "white"}
                  border="1px solid"
                  borderColor={canNext ? "#4F46E5" : "#E2E8F0"}
                  color={canNext ? "white" : "#CBD5E1"}
                  boxShadow={canNext ? "0 6px 16px -4px rgba(79, 70, 229, 0.4)" : "none"}
                  cursor={canNext ? "pointer" : "not-allowed"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  opacity={canNext ? 1 : 0.5}
                  transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={canNext ? { bg: "#4338CA", borderColor: "#4338CA" } : {}}
                  _focusVisible={{ outline: "2px solid #4F46E5", outlineOffset: "2px" }}
                >
                  <ArrowRightIcon />
                </Box>
              </Flex>
            </Flex>

            {/* Grid de 3 cards visibles — NUNCA tiene scroll */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="5" w="full">
              {visibleModules.map((module, i) => {
                const globalIndex = page * PER_PAGE + i
                return (
                  <Box
                    key={`${page}-${i}`}
                    bg="white"
                    rounded="xl"
                    border="1px solid #E2E8F0"
                    p={{ base: "7", md: "8" }}
                    display="flex"
                    flexDirection="column"
                    minH="100%"
                    _hover={{ borderColor: "#4F46E5", boxShadow: "0 12px 30px -10px rgba(79, 70, 229, 0.18)", transform: "translateY(-3px)" }}
                    transition="all 0.25s"
                  >
                    <Text
                      fontSize="sm"
                      fontWeight="700"
                      color="#4F46E5"
                      letterSpacing="0.05em"
                      lineHeight="1"
                      mb="4"
                    >
                      {String(globalIndex + 1).padStart(2, "0")}
                    </Text>

                    <Heading as="h3" fontSize="lg" fontWeight="700" color="#0F172A" mb="1.5" letterSpacing="-0.015em" lineHeight="1.25">
                      {module.title}
                    </Heading>
                    <Text fontSize="xs" color="#64748B" fontWeight="500" mb="4">
                      {module.shortFor}
                    </Text>

                    <Text color="#475569" fontSize="sm" lineHeight="1.65" mb="5">
                      {module.description}
                    </Text>

                    <VStack gap="2" align="stretch" mb="5">
                      {module.benefits.map((benefit, j) => (
                        <Flex key={j} gap="2.5" align="start">
                          <Box color="#4F46E5" mt="0.5" flexShrink={0} fontSize="sm" fontWeight="700">
                            ✓
                          </Box>
                          <Text fontSize="sm" color="#1E293B" lineHeight="1.5">
                            {benefit}
                          </Text>
                        </Flex>
                      ))}
                    </VStack>

                    <Box
                      as={Link}
                      to={module.link}
                      mt="auto"
                      pt="4"
                      borderTop="1px solid #F1F5F9"
                      textDecoration="none"
                      color="#4F46E5"
                      fontSize="sm"
                      fontWeight="700"
                      display="flex"
                      alignItems="center"
                      gap="1.5"
                      _hover={{ color: "#4338CA", gap: "2.5" }}
                      transition="all 0.2s"
                    >
                      Zobacz jak to działa →
                    </Box>
                  </Box>
                )
              })}
            </SimpleGrid>

            {/* Indicador de páginas (dots) */}
            <Flex justify="center" gap="2" mt="8">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <Box
                  key={idx}
                  as="button"
                  type="button"
                  aria-label={`Strona ${idx + 1}`}
                  onClick={() => setPage(idx)}
                  w={idx === page ? "32px" : "10px"}
                  h="10px"
                  rounded="full"
                  bg={idx === page ? "#4F46E5" : "#CBD5E1"}
                  cursor="pointer"
                  transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{ bg: idx === page ? "#4338CA" : "#94A3B8" }}
                />
              ))}
            </Flex>
          </Box>

          {/* Panel preview — visual proof del producto */}
          <Box w="full" position="relative">
            {/* Header del preview */}
            <Flex
              align={{ base: "flex-start", md: "center" }}
              justify="space-between"
              gap={{ base: "4", md: "6" }}
              direction={{ base: "column", md: "row" }}
              mb="5"
            >
              <Flex align="center" gap="3">
                <Box
                  w="40px"
                  h="40px"
                  rounded="lg"
                  bg="white"
                  border="1px solid #E2E8F0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#4F46E5"
                  flexShrink={0}
                >
                  <MonitorIcon size={20} />
                </Box>
                <Box>
                  <Text fontSize="md" fontWeight="800" color="#0F172A" letterSpacing="-0.02em">
                    Edytor wizualny — łatwiejszy niż SMS
                  </Text>
                  <Text fontSize="sm" color="#64748B" lineHeight="1.5">
                    Zmienisz treść w 2 kliknięciach. Bez kodowania.
                  </Text>
                </Box>
              </Flex>

              <Flex
                align="center"
                gap="4"
                bg="white"
                px="4"
                py="2.5"
                rounded="full"
                border="1px solid #E2E8F0"
                fontSize="xs"
                color="#475569"
                fontWeight="600"
              >
                <Flex align="center" gap="1.5">
                  <Box color="#10B981" display="flex"><CheckIcon /></Box>
                  <Text>Działa na telefonie</Text>
                </Flex>
                <Box w="1px" h="12px" bg="#E2E8F0" />
                <Flex align="center" gap="1.5">
                  <Box color="#10B981" display="flex"><CheckIcon /></Box>
                  <Text>Bez instalacji</Text>
                </Flex>
                <Box w="1px" h="12px" bg="#E2E8F0" />
                <Flex align="center" gap="1.5">
                  <Box color="#4F46E5" display="flex"><SmartphoneIcon /></Box>
                  <Text>Demo</Text>
                </Flex>
              </Flex>
            </Flex>

            {/* Frame del screenshot */}
            <Box
              position="relative"
              rounded="2xl"
              overflow="hidden"
              bg="white"
              border="1px solid #E2E8F0"
              boxShadow="0 30px 60px -20px rgba(79, 70, 229, 0.22), 0 12px 24px -8px rgba(15, 23, 42, 0.08)"
            >
              {/* Glow decorativo detrás */}
              <Box
                position="absolute"
                top="-40px"
                left="50%"
                transform="translateX(-50%)"
                w="80%"
                h="80px"
                bg="#4F46E5"
                opacity={0.15}
                filter="blur(60px)"
                pointerEvents="none"
                zIndex={0}
              />

              {/* Top bar tipo browser */}
              <Flex
                align="center"
                justify="space-between"
                px="4"
                py="2.5"
                bg="#F8FAFC"
                borderBottom="1px solid #E2E8F0"
                position="relative"
                zIndex={1}
              >
                <Flex gap="1.5" align="center">
                  <Box w="10px" h="10px" rounded="full" bg="#FF5F57" />
                  <Box w="10px" h="10px" rounded="full" bg="#FEBC2E" />
                  <Box w="10px" h="10px" rounded="full" bg="#28C840" />
                </Flex>
                <Text fontSize="xs" color="#94A3B8" fontWeight="500">
                  panel.seogrow.pl
                </Text>
                <Box w="40px" />
              </Flex>

{/* Video animado del panel */}
              <Box position="relative" zIndex={1} bg="white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/panel-1280.webp"
                  width="1280"
                  height="720"
                  style={{ width: "100%", height: "auto", display: "block" }}
                  aria-label="Panel administracyjny SEO Grow — edytujesz treści, moduły i ustawienia z telefonu (demo)"
                >
                  <source src="/panel.webm" type="video/webm" />
                </video>
              </Box>
            </Box>

            {/* Caption inferior */}
            <Text
              mt="4"
              textAlign="center"
              fontSize="sm"
              color="#64748B"
              lineHeight="1.6"
            >
              Panel klienta — działa na żywo. Twój wygląda identycznie, dostosowany do Twojej branży.
            </Text>
          </Box>

          <Box
            bg="#191C32"
            rounded="2xl"
            p={{ base: "7", md: "9" }}
            w="full"
            textAlign="center"
          >
            <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" color="white" mb="2">
              Nie wiesz, czego potrzebujesz?
            </Heading>
            <Text color="rgba(255,255,255,0.85)" fontSize={{ base: "md", md: "lg" }} maxW="2xl" mx="auto" mb="2" lineHeight="1.5">
              Zadzwoń. W 15 minut doradzimy, które moduły będą dla Ciebie najlepsze.
            </Text>
            <Text color="rgba(255,255,255,0.7)" fontSize={{ base: "md", md: "lg" }} maxW="2xl" mx="auto" mb="5" lineHeight="1.5">
              Zero presji, zero niepotrzebnych funkcji.
            </Text>
            <Box
              as="a"
              href="tel:+48517105423"
              display="inline-flex"
              alignItems="center"
              gap="2"
              bg="linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)"
              color="white"
              px="7"
              py="3.5"
              rounded="xl"
              fontWeight="700"
              fontSize="md"
              textDecoration="none"
              boxShadow="0 4px 14px rgba(79, 70, 229, 0.35)"
              _hover={{ bg: "linear-gradient(135deg, #4338CA 0%, #1D4ED8 100%)", transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              Zadzwoń: 517 105 423
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}