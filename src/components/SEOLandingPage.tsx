import { Box, Container, Heading, Text, VStack, HStack, Flex, Grid, SimpleGrid, Badge } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { SEO, SITE_URL } from "./SEO"
import { Header } from "./Header"
import { Footer } from "./Footer"

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
  heroImage?: string
  heroImageAlt?: string
  breadcrumb?: { name: string; href: string }[]
  sections?: ContentSection[]
  features?: FeatureItem[]
  trust?: TrustItem[]
  faq?: FAQItem[]
  cta?: CTASection
  internalLinks?: InternalLink[]
  schema?: Record<string, unknown>[]
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
  breadcrumb,
  sections = [],
  features = [],
  trust = [],
  faq = [],
  cta,
  internalLinks = [],
  schema = [],
}: SEOLandingPageProps) => {
  const faqSchema = faq.length > 0 ? [{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }] : []

  const pageSchema = [
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
  ]

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

        <Box pt={{ base: "12", md: "20" }} pb={{ base: "12", md: "16" }} bgGradient="linear(to-b, #EEF2FF, #FAFBFC)" position="relative" overflow="hidden">
          <Box position="absolute" top="-5%" right="-5%" w="500px" h="500px" bg="#C7D2FE" filter="blur(100px)" rounded="full" opacity="0.4" zIndex="0" />
          <Container maxW="7xl" position="relative" zIndex="1">
            <Grid templateColumns={{ base: "1fr", lg: heroImage ? "1fr 1fr" : "1fr" }} gap={{ base: "10", lg: "16" }} alignItems="center">
              <VStack align="start" gap="5">
                {breadcrumb && breadcrumb[0] && (
                  <Badge bg="#EEF2FF" color="#4338CA" px="3" py="1.5" rounded="full" fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.05em">
                    {breadcrumb[0].name}
                  </Badge>
                )}
                <Heading
                  as="h1"
                  fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                  fontWeight="900"
                  color="#0F172A"
                  letterSpacing="-0.03em"
                  lineHeight="1.1"
                >
                  {h1}
                  {h1Accent && <Box as="span" display="block" color="#4F46E5" mt={{ base: "1", md: "2" }}>{h1Accent}</Box>}
                  {h1Sub && (
                    <Box as="span" display="block" fontSize={{ base: "xl", sm: "2xl", md: "3xl" }} fontWeight="600" color="#475569" mt="2" lineHeight="1.3">
                      {h1Sub}
                    </Box>
                  )}
                </Heading>
                {intro && (
                  <Text fontSize={{ base: "md", md: "lg" }} color="#475569" lineHeight="1.7" maxW={heroImage ? "xl" : "2xl"}>
                    {intro}
                  </Text>
                )}
                {cta && (
                  <Flex gap="3" flexWrap="wrap" pt="2">
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
              </VStack>

              {heroImage && (
                <Box position="relative">
                  <Box
                    as="img"
                    src={heroImage}
                    alt={heroImageAlt ?? ""}
                    w="full"
                    maxW={{ base: "100%", lg: "520px" }}
                    h="auto"
                    objectFit="contain"
                    decoding="async"
                    loading="eager"
                    fetchPriority="high"
                    rounded="2xl"
                    boxShadow="0 20px 60px rgba(15,23,42,0.15)"
                  />
                </Box>
              )}
            </Grid>
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

        {sections.map((section, i) => (
          <Box key={i} py={{ base: "12", md: "20" }} bg={i % 2 === 0 ? "white" : "#FAFBFC"}>
            <Container maxW="7xl">
              <Grid
                templateColumns={{ base: "1fr", lg: section.image ? "1fr 1fr" : "1fr" }}
                gap={{ base: "8", lg: section.image ? "16" : "0" }}
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

                {section.image && (
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
                )}
              </Grid>
            </Container>
          </Box>
        ))}

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
