import { useEffect, useMemo, useState } from "react"
import { Box, Button, Container, Grid, Heading, HStack, Image, Text, VStack, Avatar, Flex, Icon } from "@chakra-ui/react"
import { FaArrowLeft, FaEye, FaFacebookF, FaLink, FaLinkedinIn, FaShareAlt, FaTwitter } from "react-icons/fa"
import { FiClock, FiCalendar } from "react-icons/fi"
import { Link, Navigate, useParams } from "react-router-dom"
import { SEO, SITE_URL, toAbsoluteUrl } from "../components/SEO"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { blogPosts } from "../data/blogPosts"

const monthMap: Record<string, string> = {
  stycznia: "01",
  lutego: "02",
  marca: "03",
  kwietnia: "04",
  maja: "05",
  czerwca: "06",
  lipca: "07",
  sierpnia: "08",
  września: "09",
  pazdziernika: "10",
  października: "10",
  listopada: "11",
  grudnia: "12",
}

const toIsoDate = (value: string) => {
  const normalized = value.toLowerCase().replace(",", "").trim()
  const [day, month, year] = normalized.split(/\s+/)

  if (!day || !month || !year || !monthMap[month]) {
    return "2026-01-01"
  }

  return `${year}-${monthMap[month]}-${day.padStart(2, "0")}`
}

export const BlogPostPage = () => {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)
  const [viewCount, setViewCount] = useState(0)
  const [copied, setCopied] = useState(false)

  const relatedPosts = useMemo(
    () => blogPosts.filter((item) => item.slug !== slug).slice(0, 3),
    [slug]
  )

  useEffect(() => {
    if (!post) {
      return
    }

    const storageKey = `blog:views:${post.slug}`
    const currentViews = Number(window.localStorage.getItem(storageKey) || "0")
    const nextViews = currentViews + 1

    window.localStorage.setItem(storageKey, String(nextViews))
    setViewCount(nextViews)
  }, [post])

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `${post.title} | SEO Grow`
  const publishedDate = toIsoDate(post.date)
  const articleSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      image: [toAbsoluteUrl(post.image)],
      datePublished: publishedDate,
      dateModified: publishedDate,
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      wordCount: post.readingTime ? post.readingTime * 220 : 1500,
      inLanguage: "pl-PL",
      keywords: post.tags?.join(", ") || "SEO, strony internetowe, marketing",
      articleSection: "Marketing cyfrowy",
      author: {
        "@type": "Person",
        "@id": "https://seogrow.pl/#founder",
        name: post.author,
        worksFor: { "@id": "https://seogrow.pl/#organization" },
        url: "https://seogrow.pl",
        knowsLanguage: ["pl-PL", "en-US", "pt-BR", "es-ES"],
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://seogrow.pl/#organization",
        name: "SEO Grow",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo-320.webp`,
          width: 320,
          height: 80,
        },
      },
      isPartOf: {
        "@type": "Blog",
        "@id": "https://seogrow.pl/#blog",
        name: "Blog SEO Grow",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
      ],
    },
  ]

  const handleCopyLink = async () => {
    if (!shareUrl) {
      return
    }

    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: shareText,
        text: post.excerpt,
        url: shareUrl,
      })
      return
    }

    await handleCopyLink()
  }

  return (
    <Box bg="#FAFBFC" minH="100vh">
      <SEO
        title={`${post.title} | SEO Grow`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        keywords={post.tags.join(", ")}
        schema={articleSchema}
      />
      <Header />
      
      {/* Article Hero */}
      <Box as="article" pt={{ base: "32", md: "40" }} pb={{ base: "12", md: "16" }} bg="white" borderBottom="1px solid" borderColor="border.default">
        <Container maxW="4xl">
          <VStack align="start" gap="8">
            <Box
              as={Link}
              to="/blog"
              color="fg.subtle"
              fontWeight="600"
              fontSize="sm"
              textDecoration="none"
              _hover={{ color: "accent.600" }}
              display="inline-flex"
              alignItems="center"
              gap="2"
              transition="color 0.2s"
            >
              <FaArrowLeft size={12} />
              Wróć do bloga
            </Box>

            <VStack align="start" gap="5" w="full">
              <HStack gap="3" flexWrap="wrap">
                <Text
                  bg="accent.50"
                  color="accent.700"
                  px="3"
                  py="1"
                  rounded="full"
                  fontSize="xs"
                  fontWeight="700"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  {post.category}
                </Text>
                {post.tags.map((tag) => (
                  <Text
                    key={tag}
                    fontSize="xs"
                    color="fg.subtle"
                    bg="border.subtle"
                    px="3"
                    py="1"
                    rounded="full"
                    fontWeight="500"
                  >
                    #{tag}
                  </Text>
                ))}
              </HStack>

              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="800"
                color="fg.default"
                lineHeight="1.2"
                letterSpacing="-0.02em"
              >
                {post.title}
              </Heading>

              <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" lineHeight="1.6" maxW="3xl">
                {post.excerpt}
              </Text>

              <Flex align="center" justify="space-between" w="full" pt="4" flexWrap="wrap" gap="4">
                <HStack color="fg.subtle" fontSize="xs" gap="3">
                  <HStack gap="1"><Icon as={FiCalendar} /><Text>{post.date}</Text></HStack>
                  <HStack gap="1"><Icon as={FiClock} /><Text>{post.readTime} czytania</Text></HStack>
                  <HStack gap="1"><FaEye size={12} /><Text>{viewCount} wyświetleń</Text></HStack>
                </HStack>
              </Flex>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Box as="main" py={{ base: "12", md: "16" }}>
        <Container maxW="5xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 280px" }} gap={{ base: 12, lg: 16 }} alignItems="start">
            
            <VStack as="article" align="stretch" gap="8" w="full" maxW="3xl">
              <Box
                w="full"
                overflow="hidden"
                rounded="2xl"
                border="1px solid"
                borderColor="border.default"
                boxShadow="sm"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  htmlWidth={post.imageWidth}
                  htmlHeight={post.imageHeight}
                  w="full"
                  h={{ base: "240px", md: "400px" }}
                  objectFit="cover"
                />
              </Box>

              <Box className="article-content" color="slate.700" fontSize={{ base: "lg", md: "xl" }} lineHeight="1.9">
                <Box
                  bg="accent.50"
                  p="8"
                  rounded="2xl"
                  mb="10"
                  position="relative"
                  boxShadow="sm"
                >
                  <Text
                    position="absolute"
                    top="3"
                    right="4"
                    fontSize="5xl"
                    fontWeight="800"
                    color="accent.200"
                    lineHeight="1"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </Text>
                  <Text fontWeight="800" color="fg.default" mb="3" fontSize="sm" textTransform="uppercase" letterSpacing="0.14em" color="accent.600">
                    W skrócie
                  </Text>
                  <Text color="slate.700" fontSize="md" lineHeight="1.7" fontWeight="500">
                    {post.excerpt}
                  </Text>
                </Box>

                <VStack align="start" gap="8">
                  {post.content.map((paragraph, index) => {
                    const isHeading = paragraph.length < 60 && !paragraph.endsWith(".");
                    
                    if (isHeading) {
                      return (
                        <Heading key={index} as="h3" fontSize="2xl" color="fg.default" mt="6" mb="2" fontWeight="800" letterSpacing="-0.01em">
                          {paragraph}
                        </Heading>
                      )
                    }

                    // First paragraph styling (Lead)
                    if (index === 0) {
                      return (
                        <Text key={index} fontSize="xl" fontWeight="500" color="slate.800" lineHeight="1.8">
                          {paragraph}
                        </Text>
                      )
                    }

                    return (
                      <Text key={index}>
                        {paragraph}
                      </Text>
                    )
                  })}
                </VStack>
              </Box>
              
              <Box h="1px" w="full" bg="border.default" my="8" />
              
              <HStack justify="space-between" w="full" bg="bg.subtle" p="6" rounded="xl" border="1px solid" borderColor="border.default">
                <VStack align="start" gap="1">
                  <Text fontWeight="600" color="fg.default">Podobał Ci się ten artykuł?</Text>
                  <Text fontSize="sm" color="fg.subtle">Udostępnij go swojej sieci kontaktów.</Text>
                </VStack>
                <HStack gap="2">
                  <Button size="sm" onClick={handleNativeShare} colorScheme="indigo" bg="accent.600" color="white" _hover={{ bg: "accent.700" }}>
                    <FaShareAlt style={{ marginRight: "8px" }} /> Udostępnij
                  </Button>
                </HStack>
              </HStack>
            </VStack>

            {/* Sidebar */}
            <VStack
              as="aside"
              align="stretch"
              gap="6"
              position={{ base: "static", lg: "sticky" }}
              top="120px"
            >
              <Box bg="white" rounded="xl" border="1px solid" borderColor="border.default" p="6" boxShadow="sm">
                <Text fontSize="sm" fontWeight="700" color="fg.default" mb="4" textTransform="uppercase" letterSpacing="wider">
                  Udostępnij
                </Text>
                <VStack align="stretch" gap="3">
                  <Button
                    onClick={handleCopyLink}
                    justifyContent="flex-start"
                    variant="outline"
                    color="fg.muted"
                    borderColor="border.strong"
                    _hover={{ bg: "bg.subtle", color: "fg.default" }}
                    size="sm"
                  >
                    <FaLink style={{ marginRight: "8px" }} />
                    {copied ? "Skopiowano link" : "Kopiuj link"}
                  </Button>
                  <Button
                    as="a"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    justifyContent="flex-start"
                    variant="outline"
                    color="#0077B5"
                    borderColor="border.strong"
                    _hover={{ bg: "#F0F7FC" }}
                    size="sm"
                  >
                    <FaLinkedinIn style={{ marginRight: "8px" }} />
                    LinkedIn
                  </Button>
                  <Button
                    as="a"
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    justifyContent="flex-start"
                    variant="outline"
                    color="#1DA1F2"
                    borderColor="border.strong"
                    _hover={{ bg: "#F4F8FB" }}
                    size="sm"
                  >
                    <FaTwitter style={{ marginRight: "8px" }} />
                    Twitter
                  </Button>
                  <Button
                    as="a"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    justifyContent="flex-start"
                    variant="outline"
                    color="#1877F2"
                    borderColor="border.strong"
                    _hover={{ bg: "#F4F8FB" }}
                    size="sm"
                  >
                    <FaFacebookF style={{ marginRight: "8px" }} />
                    Facebook
                  </Button>
                </VStack>
              </Box>

              <Box bgGradient="linear(to-br, accent.600, accent.700)" rounded="xl" p="6" color="white" boxShadow="md">
                <Text fontWeight="700" fontSize="lg" mb="2">{post.sidebarCta?.title ?? "Potrzebujesz nowej strony?"}</Text>
                <Text fontSize="sm" opacity="0.9" mb="5" lineHeight="1.6">
                  {post.sidebarCta?.description ?? "Zbudujemy stronę, która nie tylko dobrze wygląda, ale przede wszystkim sprzedaje."}
                </Text>
                <Button
                  as={Link}
                  to={post.sidebarCta?.href ?? "/#jak-to-dziala"}
                  w="full"
                  bg="white"
                  color="accent.600"
                  _hover={{ bg: "bg.subtle" }}
                  size="sm"
                >
                  {post.sidebarCta?.buttonLabel ?? "Sprawdź ofertę"}
                </Button>
              </Box>
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* Related Posts */}
      <Box bg="white" py={{ base: "16", md: "24" }} borderTop="1px solid" borderColor="border.default">
        <Container maxW="7xl">
          <VStack align="start" gap="10">
            <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="fg.default" fontWeight="800">
              Podobne artykuły
            </Heading>

            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="8" w="full">
              {relatedPosts.map((relatedPost) => (
                <Box
                  key={relatedPost.slug}
                  as={Link}
                  to={`/blog/${relatedPost.slug}`}
                  bg="white"
                  rounded="2xl"
                  border="1px solid"
                  borderColor="border.default"
                  overflow="hidden"
                  textDecoration="none"
                  role="group"
                  _hover={{
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.1)",
                    borderColor: "border.strong",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  <Box overflow="hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      htmlWidth={relatedPost.imageWidth}
                      htmlHeight={relatedPost.imageHeight}
                      w="full"
                      h="200px"
                      objectFit="cover"
                      transition="transform 0.5s ease"
                      _groupHover={{ transform: "scale(1.05)" }}
                    />
                  </Box>
                  <VStack align="start" p="6" gap="3">
                    <Text fontSize="xs" color="accent.700" fontWeight="700" textTransform="uppercase" letterSpacing="wider">
                      {relatedPost.category}
                    </Text>
                    <Heading as="h3" fontSize="lg" lineHeight="1.4" color="fg.default" fontWeight="700" _groupHover={{ color: "accent.600" }} transition="color 0.2s">
                      {relatedPost.title}
                    </Heading>
                    <Text fontSize="sm" color="fg.subtle" lineHeight="1.6" noOfLines={2}>
                      {relatedPost.excerpt}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}
