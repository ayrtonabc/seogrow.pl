// src/components/ModulesGrid.tsx
// Grid de módulos sin emojis ni iconos raros — solo tipografía, badges y borders.
// Mantiene la identidad minimalista del sitio: sin iconos en titles, sin emojis AI-style.
// Los 4 must-have llevan el badge "W zestawie", los opcionales van sin badge.

import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Badge } from "@chakra-ui/react"
import { Link } from "react-router-dom"

type ModuleCard = {
  title: string
  shortFor: string
  description: string
  href?: string
}

// ─── Módulos que toda PYME seguro necesita ───
const mustHaveModules: ModuleCard[] = [
  {
    title: "Editor Visual",
    shortFor: "Wszystko co tworzysz na stronie",
    description: "Zmieniasz tekst, dodajesz zdjęcia, edytujesz cennik i tworzysz nowe podstrony. Z telefonu lub komputera. Bez znajomości technologii.",
  },
  {
    title: "Rezerwacje i terminy",
    shortFor: "Klienci sami umawiają wizyty",
    description: "Klient wybiera termin, usługę i rezerwuje online 24/7. Synchronizacja z Google Calendar. Automatyczne przypomnienia SMS.",
    href: "/rezerwacje-i-terminy",
  },
  {
    title: "Formularze kontaktowe",
    shortFor: "Zbierasz zapytania od klientów",
    description: "Formularz na każdej podstronie. Klient wpisuje dane, Ty dostajesz maila. Wszystkie zapytania w jednym miejscu.",
  },
  {
    title: "CRM — baza klientów",
    shortFor: "Wszystkie zapytania w jednym miejscu",
    description: "Każde zapytanie z formularza trafia do bazy. Widzisz status, historię kontaktu i notatki. Bez płacenia za osobny CRM.",
  },
]

// ─── Módulos opcionales (los activas si los necesitas) ───
const optionalModules: ModuleCard[] = [
  {
    title: "Blog SEO",
    shortFor: "Artykuły pozycjonujące w Google",
    description: "Piszesz artykuły, które przyciągają klientów z Google. Bez limitu wpisów. Edytor wizualny, kategorie, tagi.",
  },
  {
    title: "Mapa Google",
    shortFor: "Klienci widzą lokalizację",
    description: "Mapa Google na stronie z dokładnym adresem firmy. Klient szybko znajduje drogę. Schema LocalBusiness.",
  },
  {
    title: "Galeria zdjęć",
    shortFor: "Portfolio, realizacje, produkty",
    description: "Galeria z lightbox. Filtry kategorii. Zdjęcia ładują się szybko nawet na telefonie.",
  },
  {
    title: "Sklep online",
    shortFor: "Sprzedaż produktów i usług",
    description: "Sprzedajesz produkty z płatnościami online (Stripe, PayU, Tpay). Zarządzanie zapasami, dostawy, faktury.",
    href: "/sklep-online",
  },
  {
    title: "Akademia kursów",
    shortFor: "Sprzedaż kursów online",
    description: "Tworzysz i sprzedajesz kursy wideo. Certyfikaty PDF, egzaminy, subskrypcje miesięczne.",
    href: "/akademia-kursow",
  },
  {
    title: "Menu cyfrowe QR",
    shortFor: "Restauracje, lokale, kawiarnie",
    description: "Menu z kodem QR. Klienci widzą kartę dań w telefonie. Aktualizujesz ceny z telefonu w 30 sekund.",
    href: "/menu-cyfrowe",
  },
  {
    title: "Wielojęzyczność",
    shortFor: "Strona w kilku językach",
    description: "Twoja strona w 5 językach (PL + EN/DE/ES/UK). Automatyczne tłumaczenie + weryfikacja przez człowieka.",
    href: "/ekspansja-globalna",
  },
  {
    title: "Analityka zaawansowana",
    shortFor: "Szczegółowe raporty",
    description: "Widzisz skąd przychodzą klienci, na jakie pytania, w którym miejscu wyników Google. Comiesięczny raport.",
  },
  {
    title: "Wsparcie priorytetowe",
    shortFor: "Szybsza pomoc techniczna",
    description: "Bezpośredni kontakt telefoniczny. Szybsze odpowiedzi na zgłoszenia. Dedykowany opiekun Twojej strony.",
  },
]

const ModuleCardItem = ({ mod, featured = false }: { mod: ModuleCard; featured?: boolean }) => {
  const content = (
    <Box
      bg="white"
      border={featured ? "2px solid" : "1px solid"}
      borderColor={featured ? "#4F46E5" : "#E2E8F0"}
      rounded="xl"
      p="5"
      h="full"
      transition="all 0.2s"
      _hover={{ borderColor: "#4F46E5", boxShadow: "md", transform: "translateY(-2px)" }}
      display="flex"
      flexDirection="column"
      gap="3"
    >
      {featured && (
        <Badge
          alignSelf="flex-start"
          bg="#EEF2FF"
          color="#4338CA"
          px="2.5"
          py="1"
          rounded="full"
          fontSize="10px"
          fontWeight="700"
          letterSpacing="0.05em"
          textTransform="uppercase"
        >
          W zestawie
        </Badge>
      )}
      <VStack align="start" gap="1.5" flex="1">
        <Text fontSize="md" fontWeight="700" color="#0F172A" lineHeight="1.25">
          {mod.title}
        </Text>
        <Text fontSize="xs" color="#4F46E5" fontWeight="600" lineHeight="1.4">
          {mod.shortFor}
        </Text>
        <Text fontSize="sm" color="#475569" lineHeight="1.55" mt="1">
          {mod.description}
        </Text>
      </VStack>
    </Box>
  )

  if (mod.href) {
    return (
      <Box
        as={Link}
        to={mod.href}
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
        display="block"
        h="full"
      >
        {content}
      </Box>
    )
  }
  return content
}

const SectionDivider = ({ children }: { children: React.ReactNode }) => (
  <HStack gap="2" align="center" w="full">
    <Box flex="1" h="1px" bg="#E2E8F0" />
    <Text
      fontSize="11px"
      fontWeight="700"
      color="#4F46E5"
      letterSpacing="0.14em"
      textTransform="uppercase"
      whiteSpace="nowrap"
      px="2"
    >
      {children}
    </Text>
    <Box flex="1" h="1px" bg="#E2E8F0" />
  </HStack>
)

export const ModulesGrid = () => {
  return (
    <Box id="moduly" py={{ base: "16", md: "22" }} bg="#F8FAFC">
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* Header */}
          <VStack gap="4" textAlign="center" maxW="3xl">
            <Text
              fontSize="11px"
              fontWeight="700"
              color="#4F46E5"
              letterSpacing="0.14em"
              textTransform="uppercase"
            >
              Moduły
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "32px", md: "44px" }}
              fontWeight="800"
              letterSpacing="-0.035em"
              color="#0F172A"
              lineHeight="1.08"
            >
              Wszystko, czego potrzebuje Twoja firma
            </Heading>
            <VStack gap="3" maxW="2xl">
              <Text color="#475569" fontSize="15px" lineHeight="1.55">
                Aktywujesz to, czego potrzebujesz. Wyłączasz to, z czego nie korzystasz.
                Wszystko w jednym panelu, bez dodatkowych opłat za moduły.
              </Text>
              <Text color="#059669" fontSize="13px" fontWeight="600" lineHeight="1.4">
                Każdy moduł włączasz i wyłączasz jednym kliknięciem
              </Text>
            </VStack>
          </VStack>

          {/* Must-have modules */}
          <VStack gap="5" w="full">
            <SectionDivider>Moduły, które na pewno będziesz potrzebować</SectionDivider>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="4" w="full">
              {mustHaveModules.map((mod) => (
                <ModuleCardItem key={mod.title} mod={mod} featured={true} />
              ))}
            </SimpleGrid>
          </VStack>

          {/* Optional modules */}
          <VStack gap="5" w="full">
            <SectionDivider>Moduły opcjonalne — aktywujesz, gdy potrzebujesz</SectionDivider>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="4" w="full">
              {optionalModules.map((mod) => (
                <ModuleCardItem key={mod.title} mod={mod} />
              ))}
            </SimpleGrid>
          </VStack>

          {/* Bottom note */}
          <Box
            bg="white"
            border="1px solid"
            borderColor="#E2E8F0"
            rounded="xl"
            px="5"
            py="3"
            color="#475569"
            fontSize="sm"
            maxW="2xl"
            textAlign="center"
            lineHeight="1.5"
          >
            <Text as="span" fontWeight="700" color="#0F172A">Żadnych ukrytych opłat</Text> za moduły. Płacisz tylko za plan (49 / 69 / 99 zł miesięcznie).
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
