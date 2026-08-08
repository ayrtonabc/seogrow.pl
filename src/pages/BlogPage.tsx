import { Box, Container, Grid, Heading, Text, VStack, HStack, Image, Badge, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { FiClock, FiArrowRight } from "react-icons/fi"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SEO } from "../components/SEO"
import { blogPosts } from "../data/blogPosts"

export const BlogPage = () => {
  const navigate = useNavigate()
  // Sort by date desc (newest first)
  const sorted = [...blogPosts].sort((a, b) => {
    const da = new Date(a.date).getTime() || 0
    const db = new Date(b.date).getTime() || 0
    return db - da
  })
  const featured = sorted[0]
  const rest = sorted.slice(1)

  return (
    <Box bg="bg.subtle" minH="100vh">
      <SEO
        title="Blog SEO Grow — poradniki o stronach, SEO i marketingu dla firm"
        description="Praktyczne poradniki o tworzeniu stron internetowych, SEO, pozycjonowaniu w Google i sprzedaży online. Dla małych firm i przedsiębiorców."
        keywords="blog seo, blog o stronach internetowych, poradnik seo, jak zrobić stronę, pozycjonowanie stron"
        path="/blog"
      />
      <Header />

      <Box as="main">
        <Box pt={{ base: "32", md: "40" }} pb={{ base: "16", md: "24" }} bgGradient="linear(to-b, accent.50, bg.subtle)">
          <Container maxW="7xl">
            <VStack gap="6" align="center" textAlign="center" maxW="3xl" mx="auto">
              <Heading as="h1" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="800" color="fg.default" letterSpacing="-0.03em" lineHeight="1.1">
                Wiedza, ktora napędza{" "}
                <Text as="span" color="accent.600">wzrost Twojej firmy</Text>
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" lineHeight="1.8" maxW="2xl">
                Praktyczne poradniki o SEO, konwersji i technologii. Piszemy prosto o rzeczach technicznych.
              </Text>
            </VStack>
          </Container>
        </Box>

        <Box pb={{ base: "24", md: "32" }}>
          <Container maxW="7xl">
            {/* Featured (newest) post */}
            {featured && (
              <Box
                as="article"
                onClick={() => navigate(`/blog/${featured.slug}`)}
                bg="white"
                rounded="3xl"
                border="1px solid"
                borderColor="border.default"
                overflow="hidden"
                display="flex"
                flexDirection={{ base: "column", lg: "row" }}
                mb="16"
                cursor="pointer"
                role="link"
                aria-label={featured.title}
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") navigate(`/blog/${featured.slug}`) }}
                _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
                transition="all 0.2s"
              >
                <Box position="relative" overflow="hidden" w={{ base: "full", lg: "50%" }}>
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    w="full"
                    h={{ base: "300px", lg: "400px" }}
                    objectFit="cover"
                  />
                  <Box position="absolute" top="6" left="6" bg="white" color="accent.600" px="4" py="1.5" rounded="full" fontSize="sm" fontWeight="800">
                    Najnowszy wpis
                  </Box>
                </Box>

                <VStack align="start" justify="center" p={{ base: "8", lg: "12" }} gap="6" w={{ base: "full", lg: "50%" }}>
                  <HStack gap="2" flexWrap="wrap">
                    <Badge colorPalette="teal" size="lg" variant="subtle">{featured.category}</Badge>
                  </HStack>
                  <HStack color="fg.subtle" fontSize="sm" fontWeight="600" gap="4">
                    <Text>{featured.date}</Text>
                    <HStack gap="1.5">
                      <FiClock size={14} />
                      <Text>{featured.readTime}</Text>
                    </HStack>
                  </HStack>

                  <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} lineHeight="1.3" color="fg.default" fontWeight="800">
                    {featured.title}
                  </Heading>

                  <Text color="fg.muted" lineHeight="1.8" fontSize="lg">
                    {featured.excerpt}
                  </Text>

                  <HStack color="accent.600" fontWeight="700" gap="2" pt="6">
                    <Text>Czytaj dalej</Text>
                    <FiArrowRight size={14} />
                  </HStack>
                </VStack>
              </Box>
            )}

            {/* Rest of posts in grid */}
            {rest.length > 0 && (
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="8">
                {rest.map((post) => (
                  <Box
                    as="article"
                    key={post.slug}
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    bg="white"
                    rounded="2xl"
                    border="1px solid"
                    borderColor="border.default"
                    overflow="hidden"
                    cursor="pointer"
                    role="link"
                    aria-label={post.title}
                    tabIndex={0}
                    onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") navigate(`/blog/${post.slug}`) }}
                    _hover={{ transform: "translateY(-6px)", boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.1)" }}
                    transition="all 0.2s"
                  >
                    <Box position="relative" overflow="hidden">
                      <Image src={post.image} alt={post.title} w="full" h="240px" objectFit="cover" />
                      <Box position="absolute" top="4" left="4" bg="rgba(255, 255, 255, 0.9)" color="accent.700" px="3" py="1" rounded="full" fontSize="xs" fontWeight="700">
                        {post.category}
                      </Box>
                    </Box>

                    <VStack align="start" p="6" gap="4">
                      <HStack color="fg.subtle" fontSize="sm" fontWeight="500" gap="4">
                        <Text>{post.date}</Text>
                        <HStack gap="1.5">
                          <FiClock size={12} />
                          <Text>{post.readTime}</Text>
                        </HStack>
                      </HStack>

                      <Heading as="h2" fontSize="xl" lineHeight="1.4" color="fg.default" fontWeight="700">
                        {post.title}
                      </Heading>

                      <Text color="fg.muted" lineHeight="1.6" fontSize="sm">
                        {post.excerpt}
                      </Text>

                      <HStack color="accent.600" fontSize="sm" fontWeight="600" gap="1" pt="4">
                        <Text>Czytaj</Text>
                        <FiArrowRight size={12} />
                      </HStack>
                    </VStack>
                  </Box>
                ))}
              </Grid>
            )}

            {sorted.length === 0 && (
              <Text textAlign="center" color="fg.muted" fontSize="lg" py="20">
                Wkrótce pojawią się tu nowe artykuły.
              </Text>
            )}
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
