import { Box, Container, Heading, Text, VStack, HStack, Flex, Grid, SimpleGrid, Badge } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { SEO, SITE_URL } from "./SEO"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { GoogleSearchAnimation } from "./GoogleSearchAnimation"
import type { QueryRound } from "./GoogleSearchAnimation"
import { KancelariaWebsiteAnimation } from "./KancelariaWebsiteAnimation"
import { SectorCarousel } from "./SectorCarousel"
import { ValueBundleIllustration } from "./ValueBundleIllustration"
import { ModulesGrid } from "./ModulesGrid"
import { PricingSection } from "../sections/PricingSection"

// Colores oficiales del logo de Google (mismo orden que el home principal)
const GOOGLE_LOGO_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#4285F4", "#34A853", "#EA4335"]

/**
 * Renderiza un texto reemplazando la palabra "Google" por el logo coloreado.
 * Mantiene el fontWeight 700 del home principal — sin agresividad, sin mayúsculas extra.
 * Idempotente: si el texto no contiene "Google", devuelve el texto plano.
 */
const renderTextWithGoogle = (text: string | undefined): ReactNode => {
  if (!text) return null
  if (!text.includes("Google")) return text

  const parts = text.split(/(Google)/g)
  return parts.map((part, i) => {
    if (part === "Google") {
      return (
        <Box
          as="span"
          key={`g-${i}`}
          display="inline-block"
          whiteSpace="nowrap"
          fontWeight="700"
          lineHeight="1"
          verticalAlign="baseline"
        >
          {GOOGLE_LOGO_COLORS.map((color, idx) => (
            <Box as="span" key={idx} color={color}>
              {"Google"[idx]}
            </Box>
          ))}
        </Box>
      )
    }
    return <span key={`t-${i}`}>{part}</span>
  })
}

type FAQItem = {
  q: string
  a: string
}

type FeatureItem = {
  title: string
  description: string
}

type TrustItem = {
  number: string
  label: string
}

type CTASection = {
  title: string
  description: string
  primaryLabel: string
  secondaryLabel?: string
  secondaryHref?: string
}

type ContentSection = {
  heading: string
  content: string
  image?: string
  imageAlt?: string
  imagePosition?: "left" | "right"
  highlights?: string[]
  /** Si está presente, se renderiza la animación de Google Search EN LUGAR de la image */
  imageAnimation?: {
    rounds: QueryRound[]
    rotationInterval?: number
  }
  /** Si true, se renderiza la animación de web kancelaria (scroll lento) EN LUGAR de image/imageAnimation */
  websiteAnimation?: boolean
  /**
   * Si está presente, se renderiza como una línea de tiempo visual con los
   * pasos conectados por una línea. Tiene prioridad sobre image/imageAnimation
   * y reemplaza el render de content+highlights.
   */
  processSteps?: {
    step: string
    title: string
    description: string
  }[]
  /**
   * Si true, se renderiza la ilustración SVG del bundle de valor (6 items
   * + centro "Wszystko w cenie") en lugar de image/imageAnimation.
   * Usado en la sección "Co dostajesz w cenie" para mostrar visualmente
   * todo lo que está incluido en el paquete.
   */
  valueBundle?: boolean
}

type InternalLink = {
  label: string
  href: string
  note?: string
}

type SEOLandingPageProps = {
  path: string
  title: string
  description: string
  keywords?: string
  h1: string
  h1Accent?: string
  h1Sub?: string
  intro?: string
  /** Texto pequeño que aparece encima del H1 (ej. "Obszar: Dolnośląskie") */
  eyebrow?: string
  heroImage?: string | null
  heroImageAlt?: string
  /** Si es true, renderiza SectorCarousel en lugar de heroImage. */
  heroCarousel?: boolean
  /**
   * Si está presente, se renderiza en lugar de `sections` después del hero.
   * Útil para páginas (como hubs de voivodato) que necesitan un layout
   * custom visual con cards en vez de bullets genéricos.
   */
  customContent?: ReactNode
  breadcrumb?: { name: string; href: string }[]
  sections?: ContentSection[]
  features?: FeatureItem[]
  trust?: TrustItem[]
  faq?: FAQItem[]
  cta?: CTASection
  internalLinks?: InternalLink[]
  schema?: Record<string, unknown>[]
  /** Si true, renderiza la sección de Módulos */
  showModules?: boolean
  /** Si true, renderiza la sección de Precios */
  showPricing?: boolean
}

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

export const SEOLandingPage = ({
  path,
  title,
  description,
  keywords,
  h1,
  h1Accent,
  h1Sub,
  intro,
  heroImage,
  heroImageAlt,
  heroCarousel = false,
  customContent,
  eyebrow,
  breadcrumb,
  sections = [],
  features = [],
  trust = [],
  faq = [],
  cta,
  internalLinks = [],
  schema = [],
  showModules = false,
  showPricing = false,
}: SEOLandingPageProps) => {
  const faqSchema = useMemo(() => faq.length > 0 ? [{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }] : [], [faq])

  const pageSchema = useMemo(() => [
    ...schema,
    ...(faqSchema.length > 0 ? faqSchema : []),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
        ...(breadcrumb ?? []).map((b, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: b.name,
          item: `${SITE_URL}${b.href}`,
        })),
      ],
    },
  ], [schema, faqSchema, breadcrumb])

  return (
    <Box bg="#FAFBFC" minH="100vh">
      <SEO title={title} description={description} path={path} keywords={keywords} schema={pageSchema} />
      <Header />

      <Box as="main">
        {breadcrumb && breadcrumb.length > 0 && (
          <Box bg="white" borderBottom="1px solid" borderColor="#E2E8F0" py="3">
            <Container maxW="7xl">
              <HStack gap="2" fontSize="sm" color="#64748B" flexWrap="wrap">
                <a href="/" style={{ textDecoration: "none", color: "#64748B" }}>Start</a>
                {breadcrumb.map((crumb) => (
                  <HStack key={crumb.href} gap="2">
                    <Text color="#CBD5E1">›</Text>
                    <a href={crumb.href} style={{ textDecoration: "none", color: "#64748B" }}>{crumb.name}</a>
                  </HStack>
                ))}
              </HStack>
            </Container>
          </Box>
        )}

        <Box pt={{ base: "14", md: "24" }} pb={{ base: "14", md: "20" }} bgGradient="linear(to-b, #EEF2FF, #FAFBFC)" position="relative" overflow="hidden">
          <Box position="absolute" top="-10%" left="50%" transform="translateX(-50%)" w="800px" h="500px" bg="#C7D2FE" filter="blur(120px)" rounded="full" opacity="0.5" zIndex="0" />
          <Box position="absolute" bottom="-20%" right="-5%" w="400px" h="400px" bg="#A5B4FC" filter="blur(100px)" rounded="full" opacity="0.3" zIndex="0" />
          <Container maxW="5xl" position="relative" zIndex="1">
            <VStack align="center" gap={{ base: "5", md: "6" }} textAlign="center" maxW="3xl" mx="auto">
              {breadcrumb && breadcrumb[0] && (
                <Badge bg="#EEF2FF" color="#4338CA" px="3" py="1.5" rounded="full" fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.05em">
                  {breadcrumb[0].name}
                </Badge>
              )}
              {eyebrow && (
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  color="#4F46E5"
                  textTransform="uppercase"
                  letterSpacing="0.12em"
                >
                  {eyebrow}
                </Text>
              )}
              <Heading
                as="h1"
                fontSize={{ base: "34px", sm: "40px", md: "52px", lg: "60px" }}
                fontWeight="800"
                color="#0F172A"
                letterSpacing="-0.03em"
                lineHeight="1.05"
                maxW="900px"
              >
                {renderTextWithGoogle(h1)}
              </Heading>
              {h1Accent && (
                <Heading
                  as="h2"
                  fontSize={{ base: "20px", sm: "22px", md: "26px", lg: "30px" }}
                  fontWeight="600"
                  color="#4F46E5"
                  letterSpacing="-0.015em"
                  lineHeight="1.3"
                  mt="-1"
                  maxW="780px"
                >
                  {renderTextWithGoogle(h1Accent)}
                </Heading>
              )}
              {h1Sub && (
                <Text fontSize={{ base: "md", md: "lg" }} color="#475569" lineHeight="1.65" mt="2" maxW="640px" fontWeight="400">
                  {renderTextWithGoogle(h1Sub)}
                </Text>
              )}
              {intro && (
                <Text fontSize="sm" color="#64748B" lineHeight="1.6" maxW="640px" fontWeight="400" mt="1">
                  {intro}
                </Text>
              )}
                {cta && (
                  <Flex gap="3" flexWrap="wrap" pt="3" justify="center">
                    <Box
                      as={Link}
                      to="/zamowienie?plan=express"
                      bg="#4F46E5"
                      color="white"
                      px="7"
                      py="3"
                      rounded="full"
                      fontWeight="700"
                      fontSize="md"
                      textDecoration="none"
                      _hover={{ bg: "#4338CA", transform: "translateY(-1px)", boxShadow: "lg" }}
                      transition="all 0.2s"
                      display="flex"
                      alignItems="center"
                      gap="2"
                    >
                      {cta.primaryLabel}
                      <ArrowIcon />
                    </Box>
                    {cta.secondaryLabel && (
                      <Box
                        as="a"
                        href={cta.secondaryHref ?? "#"}
                        bg="white"
                        color="#0F172A"
                        px="7"
                      py="3"
                        rounded="full"
                        fontWeight="600"
                        fontSize="md"
                        textDecoration="none"
                        border="1px solid #E2E8F0"
                        _hover={{ borderColor: "#4F46E5", color: "#4F46E5" }}
                        transition="all 0.2s"
                      >
                        {cta.secondaryLabel}
                      </Box>
                    )}
                  </Flex>
                )}

                {heroCarousel ? (
                  <Box w="full" pt={{ base: "6", md: "10" }}>
                    <SectorCarousel autoplay />
                  </Box>
                ) : heroImage ? (
                  <Box position="relative" w="full" pt={{ base: "6", md: "10" }} maxW="640px">
                    <Box
                      as="img"
                      src={heroImage}
                      alt={heroImageAlt ?? ""}
                      w="full"
                      h="auto"
                      objectFit="contain"
                      decoding="async"
                      loading="eager"
                      fetchPriority="high"
                      rounded="2xl"
                      boxShadow="0 20px 60px rgba(15,23,42,0.15)"
                    />
                  </Box>
                ) : null}
            </VStack>
          </Container>
        </Box>

        {trust.length > 0 && (
          <Box bg="white" py="10" borderBottom="1px solid" borderColor="#E2E8F0">
            <Container maxW="7xl">
              <SimpleGrid columns={{ base: 2, md: 4 }} gap="8">
                {trust.map((item, i) => (
                  <VStack key={i} gap="1" textAlign="center">
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="900" color="#0F172A" letterSpacing="-0.03em">{item.number}</Text>
                    <Text fontSize="sm" color="#64748B" lineHeight="1.4">{item.label}</Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </Container>
          </Box>
        )}

        {customContent ?? sections.map((section, i) => (
          <Box key={i} py={{ base: "12", md: "20" }} bg={i % 2 === 0 ? "white" : "#FAFBFC"}>
            <Container maxW="7xl">
              {section.processSteps && section.processSteps.length > 0 ? (
                // ── Process timeline: heading + 4 pasos conectados por línea ──
                <VStack gap={{ base: "8", md: "10" }} align="stretch">
                  <VStack gap="3" align="center" textAlign="center" maxW="2xl" mx="auto">
                    <Text fontSize="xs" fontWeight="700" color="#4F46E5" textTransform="uppercase" letterSpacing="0.14em">
                      Krok po kroku
                    </Text>
                    <Heading
                      as="h2"
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="800"
                      color="#0F172A"
                      letterSpacing="-0.02em"
                      lineHeight="1.3"
                    >
                      {section.heading}
                    </Heading>
                    <Text fontSize="md" color="#475569" lineHeight="1.7" maxW="lg">
                      {section.content}
                    </Text>
                  </VStack>

                  {/* ── TIMELINE — desktop: horizontal con línea, mobile: vertical ── */}
                  <Box position="relative" w="full" pt={{ base: "2", md: "8" }} pb={{ base: "2", md: "4" }}>
                    {/* Línea horizontal — solo desktop */}
                    <Box
                      display={{ base: "none", md: "block" }}
                      position="absolute"
                      top="44px"
                      left={{ md: "calc(12.5% + 12px)" }}
                      right={{ md: "calc(12.5% + 12px)" }}
                      h="2px"
                      bgGradient="linear(to-r, #C7D2FE, #4F46E5, #C7D2FE)"
                      zIndex="0"
                    />
                    {/* Línea vertical — solo mobile */}
                    <Box
                      display={{ base: "block", md: "none" }}
                      position="absolute"
                      top="20px"
                      bottom="20px"
                      left="20px"
                      w="2px"
                      bgGradient="linear(to-b, #C7D2FE, #4F46E5, #C7D2FE)"
                      zIndex="0"
                    />

                    <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: "8", md: "6" }} position="relative" zIndex="1">
                      {section.processSteps.map((step, k) => (
                        <VStack key={k} align={{ base: "flex-start", md: "center" }} gap="3" pl={{ base: "12", md: "0" }}>
                          {/* Círculo numerado */}
                          <Flex
                            w="11"
                            h="11"
                            rounded="full"
                            bg="white"
                            border="2px solid"
                            borderColor="#4F46E5"
                            color="#4F46E5"
                            align="center"
                            justify="center"
                            fontWeight="800"
                            fontSize="md"
                            flexShrink={0}
                            position="relative"
                            boxShadow="0 4px 12px rgba(79, 70, 229, 0.15)"
                          >
                            {step.step}
                          </Flex>
                          <VStack align={{ base: "flex-start", md: "center" }} gap="1.5" textAlign={{ base: "left", md: "center" }}>
                            <Text fontSize="sm" fontWeight="700" color="#0F172A" lineHeight="1.3">
                              {step.title}
                            </Text>
                            <Text fontSize="xs" color="#475569" lineHeight="1.5" maxW="220px">
                              {step.description}
                            </Text>
                          </VStack>
                        </VStack>
                      ))}
                    </SimpleGrid>
                  </Box>
                </VStack>
              ) : (
                <Grid
                  templateColumns={{ base: "1fr", lg: section.image || section.imageAnimation || section.websiteAnimation || section.valueBundle ? "1fr 1fr" : "1fr" }}
                  gap={{ base: "8", lg: section.image || section.imageAnimation || section.websiteAnimation || section.valueBundle ? "16" : "0" }}
                  alignItems="center"
                  direction={section.imagePosition === "left" ? { base: "column", lg: "row-reverse" } : { base: "column", lg: "row" }}
                >
                  <VStack align="start" gap="4">
                    <Heading
                      as="h2"
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="800"
                      color="#0F172A"
                      letterSpacing="-0.02em"
                      lineHeight="1.3"
                    >
                      {section.heading}
                    </Heading>
                    <Text fontSize="md" color="#475569" lineHeight="1.7">
                      {section.content}
                    </Text>
                    {section.highlights && section.highlights.length > 0 && (
                      <VStack align="start" gap="2" pt="1">
                        {section.highlights.map((hl, j) => (
                          <HStack key={j} gap="2" align="start">
                            <Box flexShrink={0} mt="0.5"><CheckCircleIcon /></Box>
                            <Text fontSize="sm" color="#334155" lineHeight="1.6">{hl}</Text>
                          </HStack>
                        ))}
                      </VStack>
                    )}
                  </VStack>

                  {section.websiteAnimation ? (
                    <Box w="full">
                      <KancelariaWebsiteAnimation />
                    </Box>
                  ) : section.imageAnimation ? (
                    <Box w="full">
                      <GoogleSearchAnimation
                        rounds={section.imageAnimation.rounds}
                        rotationInterval={section.imageAnimation.rotationInterval}
                      />
                    </Box>
                  ) : section.valueBundle ? (
                    <Box w="full">
                      <ValueBundleIllustration />
                    </Box>
                  ) : section.image ? (
                    <Box>
                      <Box
                        as="img"
                        src={section.image}
                        alt={section.imageAlt ?? ""}
                        w="full"
                        h="auto"
                        objectFit="contain"
                        decoding="async"
                        loading="lazy"
                        rounded="2xl"
                        boxShadow="0 8px 30px rgba(15,23,42,0.1)"
                      />
                    </Box>
                  ) : null}
                </Grid>
              )}
            </Container>
          </Box>
        ))}

        {showModules && <ModulesGrid />}
        {showPricing && <PricingSection />}

        {features.length > 0 && (
          <Box py={{ base: "12", md: "20" }} bg="white">
            <Container maxW="7xl">
              <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} fontWeight="800" color="#0F172A" letterSpacing="-0.02em" textAlign="center" mb="10">
                Co zyskujesz
              </Heading>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="5">
                {features.map((feature, i) => (
                  <Box key={i} bg="#F8FAFC" rounded="xl" p="5" border="1px solid" borderColor="#E2E8F0" _hover={{ borderColor: "#4F46E5", boxShadow: "sm" }} transition="all 0.2s">
                    <VStack align="start" gap="2">
                      <HStack gap="2" color="#059669">
                        <CheckIcon />
                        <Text fontWeight="700" color="#0F172A" fontSize="sm">{feature.title}</Text>
                      </HStack>
                      <Text fontSize="sm" color="#64748B" lineHeight="1.6">{feature.description}</Text>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </Container>
          </Box>
        )}

        {internalLinks.length > 0 && (
          <Box py={{ base: "8", md: "12" }} bg="#F8FAFC" borderTop="1px solid" borderColor="#E2E8F0">
            <Container maxW="7xl">
              <Text fontSize="xs" fontWeight="700" color="#64748B" mb="3" textTransform="uppercase" letterSpacing="0.05em">
                Powiązane strony
              </Text>
              <Flex gap="3" flexWrap="wrap">
                {internalLinks.map((link) => (
                  <Box
                    key={link.href}
                    as={Link}
                    to={link.href}
                    bg="white"
                    border="1px solid"
                    borderColor="#E2E8F0"
                    rounded="xl"
                    px="5"
                    py="2.5"
                    textDecoration="none"
                    _hover={{ borderColor: "#4F46E5", boxShadow: "sm" }}
                    transition="all 0.2s"
                  >
                    <Text fontSize="sm" fontWeight="700" color="#0F172A">{link.label}</Text>
                    {link.note && <Text fontSize="xs" color="#94A3B8" mt="0.5">{link.note}</Text>}
                  </Box>
                ))}
              </Flex>
            </Container>
          </Box>
        )}

        {faq.length > 0 && (
          <Box py={{ base: "12", md: "20" }} bg="white">
            <Container maxW="2xl">
              <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} fontWeight="800" color="#0F172A" letterSpacing="-0.02em" mb="8" textAlign="center">
                Często zadawane pytania
              </Heading>
              <VStack align="stretch" gap="0" divider={<Box borderBottom="1px solid" borderColor="#F1F5F9" />}>
                {faq.map((item, i) => (
                  <Box key={i} py="5">
                    <Text fontWeight="700" color="#0F172A" fontSize="md" mb="2">{item.q}</Text>
                    <Text fontSize="sm" color="#64748B" lineHeight="1.7">{item.a}</Text>
                  </Box>
                ))}
              </VStack>
            </Container>
          </Box>
        )}

        {cta && (
          <Box py={{ base: "16", md: "24" }} bg="linear-gradient(135deg, #0F172A 0%, #1E293B 100%)">
            <Container maxW="2xl">
              <VStack gap="6" textAlign="center">
                <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="900" color="white" letterSpacing="-0.03em" lineHeight="1.1">
                  {cta.title}
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} color="#94A3B8" lineHeight="1.7" maxW="xl">
                  {cta.description}
                </Text>
                <Flex gap="3" flexWrap="wrap" justify="center" pt="2">
                  <Box
                    as={Link}
                    to="/zamowienie?plan=express"
                    bg="#4F46E5"
                    color="white"
                    px="8"
                    py="3.5"
                    rounded="full"
                    fontWeight="700"
                    fontSize="md"
                    textDecoration="none"
                    _hover={{ bg: "#4338CA", transform: "translateY(-2px)", boxShadow: "lg" }}
                    transition="all 0.2s"
                    display="flex"
                    alignItems="center"
                    gap="2"
                  >
                    {cta.primaryLabel}
                    <ArrowIcon />
                  </Box>
                </Flex>
              </VStack>
            </Container>
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  )
}
