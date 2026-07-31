// src/sections/AISiteBuilderSection.tsx
// "Twoje zamówienie" — 4 pytania, które klient wypełnia, żeby zacząć współpracę.
// Wszystko w polskim języku, brak komunikatów chatowych, brak postaci "Tomek".
// Sekcja pokazuje proces zamawiania, nie interaktywny czat.

import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react"


const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const ClipboardIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M9 12h6M9 16h4" />
  </svg>
)

const SearchIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const TargetIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const PinIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const BriefcaseIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

type PlanItem = {
  id: string
  num: string
  icon: typeof BriefcaseIcon
  question: string
  helper: string
  example: string
}

const PLAN: PlanItem[] = [
  { id: "que", num: "01", icon: BriefcaseIcon, question: "Czym się zajmujesz i dla kogo", helper: "Opowiedz krótko o swojej działalności i o swoim kliencie.", example: "Gabinet stomatologiczny · pacjenci 25–55 lat we Wrocławiu" },
  { id: "mercado", num: "02", icon: SearchIcon, question: "Jak wygląda Twoja okolica", helper: "Kto jest Twoją bezpośrednią konkurencją i co robią dobrze lub źle.", example: "3 kliniki w Krzykach · żadna nie ma dopracowanej strony" },
  { id: "zona", num: "03", icon: PinIcon, question: "Gdzie działasz", helper: "Miasto, dzielnica lub zasięg. Przyjmujesz też online?", example: "Wrocław · Krzyki · pacjenci z całego miasta" },
  { id: "objetivos", num: "04", icon: TargetIcon, question: "Co chcesz osiągnąć", helper: "Więcej rezerwacji, więcej telefonów, wyższa pozycja w Google?", example: "Więcej rezerwacji online + wyświetlanie się w Google Maps" },
]

const PlanList = () => (
  <Box
    w="100%"
    borderRadius="3xl"
    overflow="hidden"
    bg="bg.canvas"
    boxShadow="2xl"
    borderWidth="1px"
    borderColor="border.default"
    className="wix-fade-up-1"
  >
    {/* Nagłówek sekcji zamówienia */}
    <HStack
      px="5"
      py="4"
      bg="bg.subtle"
      borderBottom="1px solid"
      borderColor="border.subtle"
      gap="3"
      justify="space-between"
    >
      <HStack gap="2.5" align="center">
        <Box w="10" h="10" rounded="full" bg="accent.600" color="white" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
          <ClipboardIcon size={18} />
        </Box>
        <Box>
          <Text fontSize="sm" fontWeight="700" color="fg.default" lineHeight="1.1">
            Twoje zamówienie
          </Text>
          <HStack gap="1.5" align="center" mt="0.5">
            <Box w="1.5" h="1.5" rounded="full" bg="success.500" className="wix-pulse" />
            <Text fontSize="xs" color="fg.muted">4 pytania · 5 min</Text>
          </HStack>
        </Box>
      </HStack>
      <Box display={{ base: "none", sm: "flex" }} alignItems="center" gap="1.5" px="3" py="1.5" bg="rgba(13, 148, 136, 0.1)" rounded="full" borderWidth="1px" borderColor="rgba(13, 148, 136, 0.25)">
        <CheckIcon size={12} />
        <Text fontSize="xs" fontWeight="600" color="accent.700">Bez zobowiązań</Text>
      </Box>
    </HStack>

    {/* Lista pytań do wypełnienia */}
    <VStack align="stretch" gap="0" px={{ base: "4", md: "5" }} py={{ base: "4", md: "5" }}>
      {PLAN.map((item, i) => {
        const Icon = item.icon
        const isLast = i === PLAN.length - 1
        return (
          <Box
            key={item.id}
            position="relative"
            pb={isLast ? "2" : "4"}
          >
            <HStack gap="3" align="start">
              {/* Numer pytania + linia łącząca */}
              <VStack gap="1" align="center" flexShrink={0} w="10">
                <Box
                  w="10"
                  h="10"
                  rounded="full"
                  bg="rgba(13, 148, 136, 0.1)"
                  color="accent.700"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderWidth="1px"
                  borderColor="rgba(13, 148, 136, 0.25)"
                >
                  <Icon size={16} />
                </Box>
                {!isLast && (
                  <Box w="2px" flex="1" minH="24px" bg="rgba(13, 148, 136, 0.25)" />
                )}
              </VStack>

              {/* Treść pytania */}
              <Box flex="1" minW="0" pt="1">
                <HStack gap="2" align="center" mb="1">
                  <Text fontSize="10px" fontWeight="800" color="accent.700" textTransform="uppercase" letterSpacing="0.08em">
                    {item.num}
                  </Text>
                  <Text fontSize="md" fontWeight="700" color="fg.default" letterSpacing="-0.015em" lineHeight="1.3">
                    {item.question}
                  </Text>
                </HStack>
                <Text fontSize="13px" color="fg.muted" lineHeight="1.5" mb="2">
                  {item.helper}
                </Text>
                <Box
                  px="3"
                  py="2"
                  rounded="md"
                  bg="bg.subtle"
                  borderLeft="2px solid"
                  borderColor="accent.500"
                >
                  <Text fontSize="12px" color="fg.default" lineHeight="1.4" fontStyle="italic">
                    <Box as="span" fontWeight="600" fontStyle="normal" color="accent.700">Przykład: </Box>
                    {item.example}
                  </Text>
                </Box>
              </Box>
            </HStack>
          </Box>
        )
      })}
    </VStack>

    {/* CTA końcowe */}
    <Box px={{ base: "4", md: "5" }} pb={{ base: "5", md: "5" }} pt="2">
      <Box
        as="a"
        href="/zamowienie?plan=express"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="2"
        h="12"
        rounded="full"
        bg="accent.600"
        color="white"
        fontSize="15px"
        fontWeight="600"
        textDecoration="none"
        _hover={{ bg: "accent.700", transform: "translateY(-1px)", boxShadow: "lg" }}
        transition="all 0.18s"
      >
        Zamawiam — wypełniam 4 pytania
        <ArrowRightIcon size={16} />
      </Box>
      <Text mt="3" fontSize="xs" color="fg.muted" textAlign="center">
        Odpowiedź w 5 minut · Bez zobowiązań
      </Text>
    </Box>
  </Box>
)

const SiteMockup = () => (
  <Box position="relative" w="100%" className="wix-fade-up-2">
    <Box
      position="relative"
      w="100%"
      aspectRatio={{ base: "4 / 3", md: "3 / 2" }}
      borderRadius="3xl"
      overflow="hidden"
      boxShadow="2xl"
      bg="#F1F5F9"
    >
      <Image
        src="/equipo.webp"
        alt="Zespół SEO Grow przy pracy nad stronami klientów"
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="center center"
        loading="lazy"
      />
    </Box>
  </Box>
)

export const AISiteBuilderSection = () => {
  return (
    <Box as="section" bg="bg.cream" position="relative" overflow="hidden" py={{ base: "20", md: "28" }} aria-label="Plan współpracy">
      <Container maxW="7xl" position="relative" zIndex="1">
        <VStack align="center" gap="5" textAlign="center" maxW="3xl" mx="auto" mb={{ base: "12", md: "16" }} className="wix-fade-up">
          <HStack
            gap="2"
            px="3"
            py="1.5"
            bg="rgba(13, 148, 136, 0.1)"
            borderWidth="1px"
            borderColor="rgba(13, 148, 136, 0.25)"
            rounded="full"
          >
            <Box w="1.5" h="1.5" rounded="full" bg="accent.600" />
            <Text fontSize="xs" fontWeight="700" color="accent.700" letterSpacing="0.08em" textTransform="uppercase">
              Jak zamawiać
            </Text>
          </HStack>

          {/* H2 — tipografía idéntica al hero: weight 600 base, palabra destacada weight 700 + teal */}
          <Heading
            as="h2"
            color="fg.default"
            fontWeight="600"
            letterSpacing="-0.015em"
            lineHeight="1.1"
            fontSize={{ base: "32px", sm: "38px", md: "44px", lg: "50px" }}
            maxW="720px"
          >
            4 pytania. Nic więcej.{" "}
            <Box as="span" color="accent.700" fontWeight="700">
              Resztą zajmiemy się my.
            </Box>
          </Heading>

          <Text fontSize="lg" color="fg.muted" lineHeight="1.6" maxW="2xl">
            Odpowiadasz na 4 pytania dotyczące Twojej firmy. Tyle wystarczy, żebyśmy przygotowali propozycję skrojoną pod Ciebie. Bez żargonu, bez godzinnych spotkań.
          </Text>
        </VStack>

        <Box display={{ base: "block", lg: "grid" }} gridTemplateColumns={{ lg: "1fr 1fr" }} gap={{ base: "10", lg: "12" }} alignItems="center">
          <Box mb={{ base: "8", lg: "0" }}>
            <PlanList />
          </Box>
          <Box>
            <SiteMockup />
          </Box>
        </Box>

        <HStack justify="center" mt={{ base: "12", md: "16" }} gap="2" className="wix-fade-up-3" wrap="wrap">
          <Text fontSize="sm" color="fg.muted">Wolisz zadzwonić?</Text>
          <Box as="a" href="tel:+48517105423" textDecoration="none" color="accent.700" fontSize="sm" fontWeight="700" display="inline-flex" alignItems="center" gap="1.5" _hover={{ color: "accent.800", gap: "2.5" }} transition="all 0.18s">
            517 105 423
            <ArrowRightIcon size={14} />
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}
