import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

export const ComparisonInlineSection = () => {
  return (
    <Box as="section" id="porownanie" bg="white" py={{ base: "16", md: "20" }} aria-label="Szybkie porównanie">
      <Container maxW="4xl">
        <VStack gap="5" textAlign="center">
          <Text
            fontSize="xs"
            fontWeight="700"
            color="#4F46E5"
            letterSpacing="0.12em"
            textTransform="uppercase"
          >
            Szybkie porównanie
          </Text>
          <Heading as="h2" fontSize={{ base: "22px", md: "28px" }} fontWeight="700" letterSpacing="-0.02em" color="#0F172A" lineHeight="1.3">
            Prostsze niż WordPress. Skuteczniejsze niż zwykła wizytówka.
          </Heading>
          <Text color="#475569" fontSize="md" lineHeight="1.6" maxW="2xl">
            SEO Grow to złoty środek. Masz gotową stronę, prosty blog i automatyczne SEO. Zapomnij o ciągłych aktualizacjach wtyczek i wydawaniu fortuny na programistę za każdą zmianę zdjęcia.
          </Text>
          <Box
            as={Link}
            to="/comparacion-con-wordpress"
            display="inline-flex"
            alignItems="center"
            gap="2"
            color="#4F46E5"
            fontSize="md"
            fontWeight="700"
            textDecoration="none"
            mt="1"
            _hover={{ color: "#4338CA", gap: "3" }}
            transition="all 0.2s"
          >
            Zobacz szczegółowe porównanie z WordPress
            <FaArrowRight size={14} />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}