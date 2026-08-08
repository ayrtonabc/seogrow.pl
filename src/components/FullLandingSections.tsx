import { Box, Container, Heading, Text, VStack, HStack, Button, SimpleGrid, Badge, Icon } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { FiCheck, FiClock, FiShield, FiSmartphone, FiArrowRight, FiDollarSign, FiCode, FiZap, FiSearch } from "react-icons/fi"

// === Reusable building blocks for "full home style" landing pages ===

export const Pricing = () => {
  const navigate = useNavigate()
  const plans = [
    { name: "Start", price: "1 500", desc: "Idealny na start — landing page z SEO.", features: ["1 podstrona (landing)", "CMS do edycji z telefonu", "SEO techniczne (schema, szybkość)", "Domena .pl na rok", "Hosting Vercel + SSL", "Google Search Console + Analytics"], popular: false, slug: "start" },
    { name: "Standard", price: "2 200", desc: "Dla małej firmy — strona 3-5 podstron.", features: ["3-5 podstron", "CMS z edycją z telefonu", "SEO techniczne + lokalne", "Domena .pl na rok", "Hosting + SSL + wsparcie", "GSC + Analytics + mapka Google"], popular: true, slug: "standard" },
    { name: "Premium", price: "4 500", desc: "Pełna strona z blogiem i modułami.", features: ["Wszystko ze Standard +", "Blog firmowy z CMS", "Moduły (formularze, mapa, FAQ)", "Schema rozszerzony (FAQ, Service, Article)", "Wsparcie priorytetowe 12 mies."], popular: false, slug: "premium" },
  ]
  return (
    <Box py={{ base: "16", md: "24" }} bg="bg.subtle">
      <Container maxW="6xl">
        <VStack gap="4" textAlign="center" mb="12">
          <Badge colorPalette="teal" size="lg" variant="subtle">Cennik</Badge>
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="800" color="fg.default" letterSpacing="-0.02em">
            Trzy plany, jeden cel: <Text as="span" color="accent.600">strona, która sprzedaje</Text>
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" maxW="2xl">
            Od 1 500 zł jednorazowo. Bez abonamentu. Strona Twoja od dnia 1.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap="6">
          {plans.map((plan) => (
            <Box key={plan.slug} bg="white" borderRadius="2xl" p="8" border="1px solid" borderColor={plan.popular ? "accent.500" : "border.default"} position="relative" transform={plan.popular ? "scale(1.02)" : "none"} boxShadow={plan.popular ? "xl" : "sm"}>
              {plan.popular && (
                <Badge position="absolute" top="-3" left="50%" transform="translateX(-50%)" colorPalette="teal" size="lg">Najpopularniejszy</Badge>
              )}
              <VStack align="start" gap="5">
                <Box>
                  <Text fontSize="lg" fontWeight="700" color="fg.muted">{plan.name}</Text>
                  <HStack align="baseline" gap="1" mt="1">
                    <Text fontSize="4xl" fontWeight="800" color="fg.default">od {plan.price}</Text>
                    <Text fontSize="md" color="fg.muted">zł</Text>
                  </HStack>
                  <Text fontSize="sm" color="fg.muted" mt="1">{plan.desc}</Text>
                </Box>
                <VStack align="start" gap="2" w="full">
                  {plan.features.map((f) => (
                    <HStack key={f} gap="2" align="start">
                      <Icon as={FiCheck} color="accent.600" mt="0.5" />
                      <Text fontSize="sm" color="fg.default">{f}</Text>
                    </HStack>
                  ))}
                </VStack>
                <Button onClick={() => navigate(`/zamowienie?plan=${plan.slug}`)} colorPalette="teal" size="lg" w="full">
                  Wybierz {plan.name}
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export const FAQ = ({ items }: { items: { q: string; a: string }[] }) => (
  <Box py={{ base: "16", md: "24" }} bg="white">
    <Container maxW="4xl">
      <VStack gap="4" textAlign="center" mb="12">
        <Badge colorPalette="teal" size="lg" variant="subtle">FAQ</Badge>
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800" color="fg.default" letterSpacing="-0.02em">
          Najczęściej zadawane pytania
        </Heading>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
        {items.map((item, i) => (
          <Box key={i} bg="bg.subtle" p="6" borderRadius="xl" border="1px solid" borderColor="border.default">
            <Heading as="h3" fontSize="md" fontWeight="700" color="fg.default" mb="3">
              {item.q}
            </Heading>
            <Text color="fg.muted" lineHeight="1.7" fontSize="sm">{item.a}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
)

export const Process = ({ days = 5 }: { days?: number }) => {
  const steps = [
    { icon: FiClock, title: "Brief online", desc: "5 minut. Nazwa firmy, email, czym się zajmujesz." },
    { icon: FiSearch, title: "Rozmowa 15 min", desc: "Oddzwonimy w 24h. Ustalamy plan, treść, terminy." },
    { icon: FiCode, title: "Realizacja", desc: "Projekt + kod + treść + SEO. Bez stresu." },
    { icon: FiCheck, title: "Publikacja", desc: "Testy, domena, hosting, GSC. Strona działa." },
  ]
  return (
    <Box py={{ base: "16", md: "24" }} bg="bg.subtle">
      <Container maxW="5xl">
        <VStack gap="4" textAlign="center" mb="12">
          <Badge colorPalette="teal" size="lg" variant="subtle">Proces</Badge>
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800" color="fg.default" letterSpacing="-0.02em">
            Gotowe w {days} dni
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap="6">
          {steps.map((step, i) => (
            <VStack key={i} gap="3" bg="white" p="6" borderRadius="xl" border="1px solid" borderColor="border.default">
              <Box w="12" h="12" bg="accent.50" color="accent.600" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                <Icon as={step.icon} boxSize="6" />
              </Box>
              <Text fontSize="sm" color="accent.600" fontWeight="700">Krok {i + 1}</Text>
              <Heading as="h3" fontSize="md" fontWeight="700" color="fg.default" textAlign="center">{step.title}</Heading>
              <Text fontSize="sm" color="fg.muted" textAlign="center" lineHeight="1.6">{step.desc}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export const FinalCTA = ({ title, description, buttonText, buttonHref, secondaryHref, secondaryText }: { title: string; description: string; buttonText: string; buttonHref: string; secondaryHref?: string; secondaryText?: string }) => {
  const navigate = useNavigate()
  return (
    <Box py={{ base: "16", md: "24" }} bgGradient="linear(to-br, accent.600, accent.700)" color="white">
      <Container maxW="4xl" textAlign="center">
        <VStack gap="6">
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="800" letterSpacing="-0.02em">
            {title}
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} opacity="0.9" maxW="2xl" mx="auto" lineHeight="1.7">
            {description}
          </Text>
          <HStack gap="3" flexWrap="wrap" justify="center">
            <Button onClick={() => navigate(buttonHref)} size="xl" colorPalette="whiteAlpha" bg="white" color="accent.700" _hover={{ bg: "accent.50" }} px="8">
              {buttonText}
            </Button>
            {secondaryHref && (
              <Button onClick={() => navigate(secondaryHref)} size="xl" variant="outline" borderColor="white" color="white" _hover={{ bg: "whiteAlpha.200" }} px="8">
                {secondaryText || "Zobacz cennik"}
              </Button>
            )}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

export const Hero = ({ badge, h1Before, h1Accent, h1After, sub, primaryCta, secondaryCta, primaryHref, secondaryHref, trustPoints }: { badge: string; h1Before: string; h1Accent: string; h1After?: string; sub: string; primaryCta: string; secondaryCta: string; primaryHref: string; secondaryHref: string; trustPoints?: string[] }) => {
  const navigate = useNavigate()
  return (
    <Box pt={{ base: "32", md: "40" }} pb={{ base: "16", md: "24" }} bgGradient="linear(to-br, accent.50, white)">
      <Container maxW="6xl">
        <VStack gap="6" align="center" textAlign="center" maxW="4xl" mx="auto">
          <Badge colorPalette="teal" size="lg" variant="subtle">{badge}</Badge>
          <Heading as="h1" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="800" color="fg.default" letterSpacing="-0.03em" lineHeight="1.1">
            {h1Before}
            <br />
            <Text as="span" color="accent.600">{h1Accent}</Text>
            {h1After && <><br /><Text as="span" color="fg.default" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>{h1After}</Text></>}
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" lineHeight="1.7" maxW="3xl">
            {sub}
          </Text>
          <HStack gap="3" pt="2" flexWrap="wrap" justify="center">
            <Button onClick={() => navigate(primaryHref)} size="xl" colorPalette="teal" px="8">{primaryCta}</Button>
            <Button onClick={() => navigate(secondaryHref)} size="xl" variant="outline" colorPalette="teal" px="8">{secondaryCta}</Button>
          </HStack>
          {trustPoints && trustPoints.length > 0 && (
            <HStack gap="6" pt="6" color="fg.muted" fontSize="sm" flexWrap="wrap" justify="center">
              {trustPoints.map((tp) => (
                <HStack key={tp} gap="1"><Icon as={FiCheck} color="accent.600" /><Text>{tp}</Text></HStack>
              ))}
            </HStack>
          )}
        </VStack>
      </Container>
    </Box>
  )
}

export const Features = ({ title, badge = "Co dostajesz", items }: { title: string; badge?: string; items: { icon: any; title: string; desc: string }[] }) => (
  <Box py={{ base: "16", md: "24" }} bg="bg.subtle">
    <Container maxW="6xl">
      <VStack gap="4" textAlign="center" mb="12">
        <Badge colorPalette="teal" size="lg" variant="subtle">{badge}</Badge>
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="800" color="fg.default" letterSpacing="-0.02em" dangerouslySetInnerHTML={{ __html: title }} />
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
        {items.map((f) => (
          <VStack key={f.title} gap="3" bg="white" p="6" borderRadius="xl" border="1px solid" borderColor="border.default" align="start">
            <Box w="10" h="10" bg="accent.50" color="accent.600" borderRadius="lg" display="flex" alignItems="center" justifyContent="center">
              <Icon as={f.icon} boxSize="5" />
            </Box>
            <Heading as="h3" fontSize="md" fontWeight="700" color="fg.default">{f.title}</Heading>
            <Text fontSize="sm" color="fg.muted" lineHeight="1.6">{f.desc}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
)

export const Targets = ({ title, items }: { title: string; items: { title: string; desc: string }[] }) => (
  <Box py={{ base: "16", md: "24" }} bg="white">
    <Container maxW="6xl">
      <VStack gap="4" textAlign="center" mb="12">
        <Badge colorPalette="teal" size="lg" variant="subtle">Dla kogo</Badge>
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800" color="fg.default" letterSpacing="-0.02em">
          {title}
        </Heading>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
        {items.map((t) => (
          <Box key={t.title} p="6" borderRadius="xl" bg="bg.subtle" border="1px solid" borderColor="border.default">
            <HStack gap="3" align="start">
              <Box w="6" h="6" bg="accent.100" color="accent.600" borderRadius="full" display="flex" alignItems="center" justifyContent="center" flexShrink="0" mt="0.5">
                <Icon as={FiCheck} boxSize="3" />
              </Box>
              <Box>
                <Heading as="h3" fontSize="md" fontWeight="700" color="fg.default" mb="1">{t.title}</Heading>
                <Text fontSize="sm" color="fg.muted" lineHeight="1.6">{t.desc}</Text>
              </Box>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
)
