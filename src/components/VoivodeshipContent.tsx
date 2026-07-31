// src/components/VoivodeshipContent.tsx
// Layout custom para hubs de voivodato. Bypassea el `sections` prop
// genérico de SEOLandingPage con un render visual orientado a venta:
// - Industries: grid de cards con icono + 1 beneficio por sector
// - Cities: visual grid de ciudades atendidas
// - Why us: features en 2 columnas con icon
// - Process: 4 pasos numerados
// - FAQ + Internal links: como en SEOLandingPage

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Flex, Icon } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {
  FaHammer, FaStore, FaTruck, FaHotel, FaSpa, FaMountain, FaTools,
  FaCheckCircle, FaPhone, FaSearchLocation, FaBolt, FaUserTie,
  FaPalette, FaFileSignature, FaRocket, FaClock, FaUsers, FaHandshake,
} from "react-icons/fa"
import type { ReactNode } from "react"

const ArrowRightIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

// Mapeo de industria → icono + beneficio para el cliente
const industryBenefits: Record<string, { icon: any; benefit: string }> = {
  "przemysł maszynowy": { icon: FaHammer, benefit: "Klienci B2B widzą Twoje maszyny, certyfikaty i referencje w 3 sekundy" },
  "handel": { icon: FaStore, benefit: "Sklep stacjonarny z wizytówką Google i lokalnym SEO na miasto" },
  "logistyka": { icon: FaTruck, benefit: "Flota, cennik, formularz wyceny — wszystko w jednym miejscu" },
  "turystyka": { icon: FaHotel, benefit: "Rezerwacje, opinie, Google Maps — gość rezerwuje bez telefonu" },
  "uzdrowiska": { icon: FaSpa, benefit: "Pakiety zabiegowe, terminy, cennik — z optymalizacją pod sezon" },
  "turystyka górska": { icon: FaMountain, benefit: "Trasy, szlaki, baza noclegowa — zoptymalizowane pod 'co robić w górach'" },
  "szkło kryształowe": { icon: FaPalette, benefit: "Galeria produktów z historią marki i certyfikatami" },
  "usługi": { icon: FaTools, benefit: "Formularz wyceny, opinie klientów, kalendarz online" },
  "default": { icon: FaUserTie, benefit: "Strona dopasowana do specyfiki Twojej branży i Twojego rynku" },
}

type VoivodeshipContentProps = {
  voivodeship: string
  industries: string[]
  cities: { name: string; slug: string }[]
  ctaTitle: string
  ctaDescription: string
  ctaPrimaryLabel: string
  internalLinks: { label: string; href: string; note?: string }[]
}

export const VoivodeshipContent = ({
  voivodeship,
  industries,
  cities,
  ctaTitle,
  ctaDescription,
  ctaPrimaryLabel,
  internalLinks,
}: VoivodeshipContentProps) => {
  return (
    <>
      {/* ── BRANŻE — grid visual con iconos ────────────────────── */}
      <Box py={{ base: "14", md: "20" }} bg="white" position="relative" overflow="hidden">
        <Box position="absolute" top="-15%" right="-10%" w="500px" h="500px" bg="accent.50" rounded="full" filter="blur(120px)" opacity="0.6" pointerEvents="none" />
        <Container maxW="6xl" position="relative" zIndex="1">
          <VStack gap={{ base: "8", md: "10" }} align="stretch">
            <VStack gap="3" align="center" textAlign="center" maxW="2xl" mx="auto">
              <Text fontSize="xs" fontWeight="700" color="accent.600" textTransform="uppercase" letterSpacing="0.14em">
                Strategia dopasowana do Twojej branży
              </Text>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="fg.default" letterSpacing="-0.025em" lineHeight="1.15">
                Strona, która pracuje dla Twojego biznesu
              </Heading>
              <Text fontSize="sm" color="fg.muted" lineHeight="1.6" maxW="lg">
                Każda branża ma inny klient, inną intencję wyszukiwania, inne CTA. Dlatego stronę budujemy pod Twoją specyfikę, a nie pod uniwersalny szablon.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="4" w="full">
              {industries.slice(0, 6).map((ind, i) => {
                const key = ind.toLowerCase()
                const data = industryBenefits[key] ?? { ...industryBenefits.default, icon: industryBenefits.default.icon }
                const Icon = data.icon
                return (
                  <Box
                    key={i}
                    p="6"
                    bg="white"
                    border="1px solid border.default"
                    rounded="xl"
                    transition="all 0.22s"
                    _hover={{ borderColor: "accent.600", transform: "translateY(-2px)", boxShadow: "0 12px 30px -10px rgba(79, 70, 229, 0.18)" }}
                  >
                    <Box
                      w="11"
                      h="11"
                      rounded="lg"
                      bg="accent.50"
                      color="accent.600"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mb="4"
                    >
                      <Icon size={20} />
                    </Box>
                    <Text fontSize="md" fontWeight="700" color="fg.default" mb="2" textTransform="capitalize">
                      {ind}
                    </Text>
                    <Text fontSize="sm" color="fg.muted" lineHeight="1.55">
                      {data.benefit}
                    </Text>
                  </Box>
                )
              })}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* ── MIASTA — visual grid con cards ──────────────────────── */}
      <Box py={{ base: "14", md: "20" }} bg="#FAFBFC">
        <Container maxW="6xl">
          <VStack gap={{ base: "8", md: "10" }} align="stretch">
            <VStack gap="3" align="center" textAlign="center" maxW="2xl" mx="auto">
              <Text fontSize="xs" fontWeight="700" color="accent.600" textTransform="uppercase" letterSpacing="0.14em">
                Zasięg w {voivodeship}
              </Text>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="fg.default" letterSpacing="-0.025em" lineHeight="1.15">
                {cities.length === 1
                  ? "1 miasto w zasięgu"
                  : cities.length < 5
                  ? `${cities.length} miasta w zasięgu`
                  : `${cities.length} miast w zasięgu`}
              </Heading>
              <Text fontSize="sm" color="fg.muted" lineHeight="1.6" maxW="lg">
                Ta sama cena, ta sama jakość, ten sam zespół. Działamy w całym {voivodeship} — jeśli Twojego miasta nie ma na liście, zadzwoń i powiemy szczerze, czy ją obsługujemy.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} gap="3" w="full">
              {cities.map((c) => (
                <Box
                  key={c.slug}
                  as={Link}
                  to={`/${c.slug}`}
                  p="5"
                  bg="white"
                  border="1px solid border.default"
                  rounded="xl"
                  textDecoration="none"
                  transition="all 0.2s"
                  _hover={{ borderColor: "accent.600", transform: "translateY(-2px)", boxShadow: "0 8px 20px -8px rgba(79, 70, 229, 0.2)" }}
                >
                  <HStack gap="2" align="center" mb="2">
                    <Box w="2" h="2" rounded="full" bg="success.500" flexShrink={0} />
                    <Text fontSize="xs" color="success.500" fontWeight="700" textTransform="uppercase" letterSpacing="0.05em">
                      w zasięgu
                    </Text>
                  </HStack>
                  <Text fontSize="md" fontWeight="700" color="fg.default" lineHeight="1.2">
                    {c.name}
                  </Text>
                  <HStack gap="1" align="center" mt="3" color="accent.600" fontSize="xs" fontWeight="600">
                    <Text>Zobacz ofertę</Text>
                    <Box display="flex"><ArrowRightIcon size={12} /></Box>
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* ── DLACZEGO MY — features en grid visual ────────────────── */}
      <Box py={{ base: "14", md: "20" }} bg="white">
        <Container maxW="6xl">
          <VStack gap={{ base: "8", md: "10" }} align="stretch">
            <VStack gap="3" align="center" textAlign="center" maxW="2xl" mx="auto">
              <Text fontSize="xs" fontWeight="700" color="accent.600" textTransform="uppercase" letterSpacing="0.14em">
                Dlaczego SEO Grow
              </Text>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" color="fg.default" letterSpacing="-0.025em" lineHeight="1.15">
                Rozmawiamy po ludzku. Robimy robotę.
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap="4" w="full">
              {[
                { icon: FaPhone, title: "15-minutowa rozmowa", desc: "Bez ankiet, bez formularzy. Poznajemy Twoją firmę i mówimy szczerze, co ma sens." },
                { icon: FaSearchLocation, title: "Lokalne SEO od dnia 1", desc: "Schema LocalBusiness, Google Search Console, słowa kluczowe pod Twoje miasto." },
                { icon: FaUserTie, title: "Polski, zero żargonu", desc: "Wsparcie, panel i rozmowy — wszystko po polsku. Bez korporacyjnego bełkotu." },
                { icon: FaHandshake, title: "Bez umowy, bez prowizji", desc: "Płacisz co miesiąc. Rezygnujesz jednym mailem. Strona zostaje Twoja." },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <Box key={i} p="6" bg="bg.subtle" border="1px solid border.default" rounded="xl">
                    <Box w="10" h="10" rounded="lg" bg="accent.50" color="accent.600" display="flex" alignItems="center" justifyContent="center" mb="3">
                      <Icon size={18} />
                    </Box>
                    <Text fontSize="sm" fontWeight="700" color="fg.default" mb="2" lineHeight="1.3">
                      {item.title}
                    </Text>
                    <Text fontSize="xs" color="fg.muted" lineHeight="1.55">
                      {item.desc}
                    </Text>
                  </Box>
                )
              })}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* ── CTA OSCURO — final, fuerte ──────────────────────────── */}
      <Box py={{ base: "16", md: "24" }} bg="linear-gradient(135deg, fg.default 0%, slate.800 100%)" position="relative" overflow="hidden">
        <Box position="absolute" top="-200px" right="-100px" w="500px" h="500px" bg="radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, transparent 70%)" pointerEvents="none" />
        <Container maxW="3xl" position="relative" zIndex="1">
          <VStack gap="5" textAlign="center">
            <Text fontSize="xs" fontWeight="700" color="accent.300" textTransform="uppercase" letterSpacing="0.14em">
              Porozmawiajmy
            </Text>
            <Heading as="h2" fontSize={{ base: "26px", md: "38px" }} fontWeight="800" color="white" letterSpacing="-0.03em" lineHeight="1.18">
              {ctaTitle}
            </Heading>
            <Text fontSize="md" color="rgba(255,255,255,0.75)" lineHeight="1.65" maxW="xl">
              {ctaDescription}
            </Text>
            <Flex gap="3" wrap="wrap" justify="center" pt="3">
              <Box
                as={Link}
                to="/zamowienie?plan=express"
                bg="white"
                color="fg.default"
                px="8"
                py="4"
                rounded="xl"
                fontWeight="700"
                fontSize="md"
                textDecoration="none"
                _hover={{ bg: "border.subtle", transform: "translateY(-2px)", boxShadow: "0 12px 30px rgba(255,255,255,0.2)" }}
                transition="all 0.2s"
                display="flex"
                alignItems="center"
                gap="2"
              >
                {ctaPrimaryLabel}
                <Box display="flex"><ArrowRightIcon size={16} /></Box>
              </Box>
              <Box
                as="a"
                href="tel:+48517105423"
                bg="transparent"
                color="white"
                px="8"
                py="4"
                rounded="xl"
                fontWeight="600"
                fontSize="md"
                textDecoration="none"
                border="1px solid rgba(255,255,255,0.25)"
                _hover={{ bg: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.4)" }}
                transition="all 0.2s"
              >
                Zadzwoń: 517 105 423
              </Box>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
