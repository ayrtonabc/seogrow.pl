// src/sections/CustomDesignSection.tsx
// "Nie szablon. Projekt pod Twoją firmę." — Split 50/50: To nie jest (X gris) vs To jest (✓ teal).
// Identidad del proyecto: claro, sin fondos oscuros, copy PyME.

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const IS_NOT = [
  "Generyczny szablon z logo na szybko",
  "Wolne ładowanie. Ciężki kod, który Ci nic nie daje.",
  "Dopłaty za każdą drobną zmianę w treści",
  "Wsparcie przez ticket, po angielsku, gdy masz problem",
]

const IS = [
  "Projekt dopasowany do Twojej firmy i Twojej okolicy",
  "Szybka strona. Core Web Vitals powyżej 95.",
  "Stała cena. Wszystko, co potrzebujesz, w jednym pakiecie.",
  "Wsparcie po polsku — przez telefon i e-mail",
]

type ColumnProps = {
  title: string
  subtitle: string
  image: string
  items: string[]
  variant: "not" | "is"
  delay: number
  alignClass: string
}

const Column = ({ title, subtitle, image, items, variant, delay, alignClass }: ColumnProps) => {
  const isPositive = variant === "is"
  return (
    <Box className={alignClass} position="relative">
      <Box
        position="relative"
        w="full"
        borderRadius="2xl"
        overflow="hidden"
        borderWidth="1px"
        borderColor={isPositive ? "accent.300" : "border.default"}
        bg="#F1F5F9"
        boxShadow="sm"
        mb="6"
        _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
        transition="all 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
      >
        <Image
          src={image}
          alt={title}
          w="100%"
          h="auto"
          display="block"
          loading="lazy"
          opacity={isPositive ? 1 : 0.9}
        />
        {/* Badge esquina superior */}
        <HStack
          position="absolute"
          top="4"
          left="4"
          gap="1.5"
          px="3"
          py="1.5"
          bg={isPositive ? "accent.600" : "bg.canvas"}
          borderWidth={isPositive ? "0" : "1px"}
          borderColor={isPositive ? undefined : "border.default"}
          backdropFilter="blur(8px)"
          borderRadius="full"
          boxShadow={isPositive ? "md" : "sm"}
        >
          <Box color={isPositive ? "white" : "fg.muted"} display="flex">
            {isPositive ? <CheckIcon size={12} /> : <XIcon size={12} />}
          </Box>
          <Text
            fontSize="2xs"
            fontWeight="800"
            color={isPositive ? "white" : "fg.muted"}
            letterSpacing="0.08em"
            textTransform="uppercase"
          >
            {title}
          </Text>
        </HStack>
      </Box>

      <VStack align="flex-start" gap="4" className={`wix-fade-up-${delay}`}>
        <Heading
          as="h3"
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight="700"
          color="fg.default"
          letterSpacing="-0.02em"
          lineHeight="1.25"
        >
          {subtitle}
        </Heading>
        <VStack align="stretch" gap="2.5" w="full">
          {items.map((item, i) => (
            <HStack key={i} align="start" gap="3">
              <Box
                flexShrink={0}
                w="7"
                h="7"
                borderRadius="full"
                bg={isPositive ? "accent.100" : "bg.subtle"}
                color={isPositive ? "accent.700" : "fg.muted"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mt="0.5"
                borderWidth="1px"
                borderColor={isPositive ? "accent.200" : "border.subtle"}
              >
                {isPositive ? <CheckIcon size={14} /> : <XIcon size={14} />}
              </Box>
              <Text fontSize="15px" color="fg.default" lineHeight="1.5" fontWeight="500">
                {item}
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  )
}

export const CustomDesignSection = () => {
  return (
    <Box as="section" id="projekt-na-miare" bg="bg.canvas" py={{ base: "20", md: "28" }} aria-label="Projekt na miarę">
      <Container maxW="7xl">
        <VStack gap={{ base: "10", md: "14" }}>
          {/* Header centrado — tipografía idéntica al hero */}
          <VStack gap="5" textAlign="center" maxW="3xl" mx="auto" className="wix-fade-up">
            <HStack
              gap="2"
              px="3"
              py="1.5"
              bg="rgba(13, 148, 136, 0.1)"
              borderWidth="1px"
              borderColor="rgba(13, 148, 136, 0.25)"
              borderRadius="full"
            >
              <Box w="1.5" h="1.5" borderRadius="full" bg="accent.500" />
              <Text fontSize="xs" fontWeight="700" color="accent.700" letterSpacing="0.08em" textTransform="uppercase">
                Projekt na miarę
              </Text>
            </HStack>

            <Heading
              as="h2"
              fontWeight="600"
              color="fg.default"
              letterSpacing="-0.015em"
              lineHeight="1.1"
              fontSize={{ base: "32px", sm: "38px", md: "44px", lg: "50px" }}
              maxW="720px"
            >
              Nie szablon.{" "}
              <Box as="span" color="accent.700" fontWeight="700">
                Projekt pod Twoją firmę.
              </Box>
            </Heading>

            <Text fontSize="lg" color="fg.muted" lineHeight="1.6" maxW="2xl">
              Dwa podejścia. Dwa efekty. Ty wybierasz, co chcesz, żeby Twoja firma prezentowała w internecie.
            </Text>
          </VStack>

          {/* Split 50/50 — ambas cards claras */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "8", md: "10" }} w="full" alignItems="flex-start">
            <Column
              title="To nie jest"
              subtitle="Generyczny szablon z logo"
              image="/realizacje/wix-2.webp"
              items={IS_NOT}
              variant="not"
              delay={1}
              alignClass="wix-slide-left"
            />
            <Column
              title="To jest"
              subtitle="Projekt dopasowany do Ciebie"
              image="/realizacje/wix-4.webp"
              items={IS}
              variant="is"
              delay={2}
              alignClass="wix-slide-right"
            />
          </SimpleGrid>

          {/* CTA inferior — claro, sin fondo oscuro */}
          <Box
            mt={{ base: "4", md: "6" }}
            p={{ base: "6", md: "8" }}
            borderRadius="2xl"
            bg="bg.subtle"
            borderWidth="1px"
            borderColor="border.subtle"
            w="full"
            position="relative"
            overflow="hidden"
            className="wix-fade-up-3"
          >
            <SimpleGrid
              columns={{ base: 1, md: "1fr auto" }}
              gap={{ base: "4", md: "6" }}
              alignItems="center"
            >
              <VStack align="flex-start" gap="1">
                <Heading
                  as="h3"
                  fontSize={{ base: "20px", md: "22px" }}
                  fontWeight="700"
                  color="fg.default"
                  letterSpacing="-0.02em"
                  lineHeight="1.3"
                >
                  Gotowy na stronę, która działa?
                </Heading>
                <Text color="fg.muted" fontSize="sm" lineHeight="1.5">
                  Projekt dopasowany do Twojej firmy od <Box as="span" fontWeight="700" color="fg.default">1 500 zł</Box>. Gotowa w 5 dni roboczych.
                </Text>
              </VStack>
              <Box
                as={Link}
                to="/zamowienie?plan=express"
                display="inline-flex"
                alignItems="center"
                gap="2"
                bg="fg.default"
                color="white"
                px="6"
                h="12"
                borderRadius="full"
                fontWeight="600"
                fontSize="14px"
                textDecoration="none"
                _hover={{ bg: "bg.darkSubtle", transform: "translateY(-1px)" }}
                transition="all 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
                whiteSpace="nowrap"
              >
                Zamów projekt
                <ArrowRightIcon />
              </Box>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
