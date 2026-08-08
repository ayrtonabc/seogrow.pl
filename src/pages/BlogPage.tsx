import { Box, Container, Grid, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { FiClock, FiArrowRight } from "react-icons/fi"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

const blogPosts = [
  {
    slug: "seo-lokalne-dla-malych-firm",
    category: "SEO lokalne",
    title: "SEO lokalne dla małych firm: 7 rzeczy, które poprawią widoczność szybciej",
    excerpt: "Praktyczny przewodnik dla lokalnych biznesów, które chcą zdobywać więcej zapytań z Google bez przepalania budżetu na reklamy.",
    date: "25 kwietnia 2026",
    readTime: "6 min",
    image: "/hero.webp",
  },
  {
    slug: "jak-pisac-artykuly-seo-ktore-generuja-leady",
    category: "Content SEO",
    title: "Jak pisać artykuły przygotowane pod SEO i leady",
    excerpt: "Dobra struktura, intencja wyszukiwania i sensowne CTA sprawiają, że blog zaczyna realnie wspierać sprzedaż.",
    date: "20 kwietnia 2026",
    readTime: "5 min",
    image: "/panel.webp",
  },
  {
    slug: "blog-firmowy-jako-kanal-sprzedazy",
    category: "Strategia",
    title: "Blog firmowy jako kanał sprzedaży: jak go planować, żeby zarabiał",
    excerpt: "Blog nie powinien być zbiorem przypadkowych wpisów. Najlepiej działa wtedy, gdy wspiera konkretne usługi i pytania klientów.",
    date: "15 kwietnia 2026",
    readTime: "7 min",
    image: "/seogrow.webp",
  }
]

export const BlogPage = () => {
  const navigate = useNavigate()

  return (
    <Box bg="bg.subtle" minH="100vh">
      <Header />
      
      <Box as="main">
        <Box pt={{ base: "32", md: "40" }} pb={{ base: "16", md: "24" }} bgGradient="linear(to-b, accent.50, bg.subtle)">
          <Container maxW="7xl">
            <VStack gap="6" align="center" textAlign="center" maxW="3xl" mx="auto">
              <Heading as="h1" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="800" color="fg.default" letterSpacing="-0.03em" lineHeight="1.1">
                Wiedza, która napędza <br />
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
            {blogPosts.length > 0 && (
              <Box
                onClick={() => navigate(`/blog/${blogPosts[0].slug}`)}
                bg="white"
                rounded="3xl"
                border="1px solid"
                borderColor="border.default"
                overflow="hidden"
                display="flex"
                flexDirection={{ base: "column", lg: "row" }}
                mb="16"
                cursor="pointer"
                _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
              >
                <Box position="relative" overflow="hidden" w={{ base: "full", lg: "50%" }}>
                  <Image 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    w="full"
                    h={{ base: "300px", lg: "400px" }}
                    objectFit="cover"
                  />
                  <Box position="absolute" top="6" left="6" bg="white" color="accent.600" px="4" py="1.5" rounded="full" fontSize="sm" fontWeight="800">
                    Najnowszy wpis
                  </Box>
                </Box>

                <VStack align="start" justify="center" p={{ base: "8", lg: "12" }} gap="6" w={{ base: "full", lg: "50%" }}>
                  <HStack color="fg.subtle" fontSize="sm" fontWeight="600" gap="4">
                    <Text>{blogPosts[0].date}</Text>
                    <HStack gap="1.5">
                      <FiClock size={14} />
                      <Text>{blogPosts[0].readTime}</Text>
                    </HStack>
                  </HStack>

                  <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} lineHeight="1.3" color="fg.default" fontWeight="800">
                    {blogPosts[0].title}
                  </Heading>
                  
                  <Text color="fg.muted" lineHeight="1.8" fontSize="lg">
                    {blogPosts[0].excerpt}
                  </Text>

                  <HStack color="accent.600" fontWeight="700" gap="2" pt="6">
                    <Text>Czytaj dalej</Text>
                    <FiArrowRight size={14} />
                  </HStack>
                </VStack>
              </Box>
            )}

            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="8">
              {blogPosts.slice(1).map((post) => (
                <Box
                  key={post.slug}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  bg="white"
                  rounded="2xl"
                  border="1px solid"
                  borderColor="border.default"
                  overflow="hidden"
                  cursor="pointer"
                  _hover={{ transform: "translateY(-6px)", boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.1)" }}
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
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}