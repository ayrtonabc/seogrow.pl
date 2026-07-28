// src/sections/ComparisonInlineSection.tsx
// Tabla visual de comparación SEO Grow vs DIY vs WordPress vs Agencia.
// SEO Grow gana en casi todas — pero el cliente ve las diferencias claras.

import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Flex } from "@chakra-ui/react"
import { SECTION_TITLE_PROPS, SECTION_TITLE_COLOR_DARK } from "../lib/typography"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

const CheckIcon = ({ size = 16, color = "#059669" }: { size?: number; color?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const XIcon = ({ size = 16, color = "#DC2626" }: { size?: number; color?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

const MinusIcon = ({ size = 16, color = "#94A3B8" }: { size?: number; color?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M5 12h14" />
  </svg>
)

type CellValue = "check" | "x" | "minus" | "text"
type Cell = { value: CellValue; text?: string }

type Row = {
  label: string
  diy: Cell
  wordpress: Cell
  seogrow: Cell
  agency: Cell
}

const ROWS: Row[] = [
  {
    label: "Cena",
    diy: { value: "text", text: "0 zł (Twój czas)" },
    wordpress: { value: "text", text: "500–2 000 zł" },
    seogrow: { value: "text", text: "1 500 zł" },
    agency: { value: "text", text: "5 000–15 000 zł" },
  },
  {
    label: "Czas de entrega",
    diy: { value: "text", text: "2–8 semanas" },
    wordpress: { value: "text", text: "1–4 semanas" },
    seogrow: { value: "text", text: "5 días" },
    agency: { value: "text", text: "4–12 semanas" },
  },
  {
    label: "SEO local incluido",
    diy: { value: "x" },
    wordpress: { value: "minus" },
    seogrow: { value: "check" },
    agency: { value: "check" },
  },
  {
    label: "Hosting + SSL",
    diy: { value: "x" },
    wordpress: { value: "minus" },
    seogrow: { value: "check" },
    agency: { value: "minus" },
  },
  {
    label: "CMS edición desde móvil",
    diy: { value: "x" },
    wordpress: { value: "x" },
    seogrow: { value: "check" },
    agency: { value: "minus" },
  },
  {
    label: "Soporte en polaco",
    diy: { value: "x" },
    wordpress: { value: "x" },
    seogrow: { value: "check" },
    agency: { value: "check" },
  },
  {
    label: "Sin contrato / permanencia",
    diy: { value: "check" },
    wordpress: { value: "check" },
    seogrow: { value: "check" },
    agency: { value: "x" },
  },
  {
    label: "Factura VAT",
    diy: { value: "x" },
    wordpress: { value: "x" },
    seogrow: { value: "check" },
    agency: { value: "check" },
  },
]

const Cell = ({ cell, highlight = false }: { cell: Cell; highlight?: boolean }) => {
  const text = cell.text
  if (cell.value === "check") {
    return (
      <Flex
        align="center"
        justify="center"
        gap="2"
        py="3"
        px="2"
        bg={highlight ? "white" : "transparent"}
        rounded={highlight ? "md" : "none"}
        minH="48px"
      >
        <CheckIcon color="#059669" />
        {text && (
          <Text fontSize="xs" fontWeight="700" color="#0F172A">
            {text}
          </Text>
        )}
      </Flex>
    )
  }
  if (cell.value === "x") {
    return (
      <Flex align="center" justify="center" gap="2" py="3" px="2" minH="48px">
        <XIcon color="#DC2626" />
        {text && (
          <Text fontSize="xs" color="#94A3B8" textDecoration="line-through">
            {text}
          </Text>
        )}
      </Flex>
    )
  }
  if (cell.value === "minus") {
    return (
      <Flex align="center" justify="center" gap="2" py="3" px="2" minH="48px">
        <MinusIcon color="#94A3B8" />
        {text && (
          <Text fontSize="xs" color="#64748B">
            {text}
          </Text>
        )}
      </Flex>
    )
  }
  return (
    <Flex align="center" justify="center" py="3" px="2" minH="48px">
      <Text
        fontSize="sm"
        fontWeight={highlight ? "700" : "500"}
        color={highlight ? "#0F172A" : "#475569"}
        textAlign="center"
      >
        {text}
      </Text>
    </Flex>
  )
}

const COLUMNS = [
  { key: "feature" as const, label: "" },
  { key: "diy" as const, label: "DIY / sam" },
  { key: "wordpress" as const, label: "WordPress" },
  { key: "seogrow" as const, label: "SEO Grow" },
  { key: "agency" as const, label: "Agencja" },
]

export const ComparisonInlineSection = () => {
  return (
    <Box as="section" id="porownanie" bg="#FAFBFC" py={{ base: "16", md: "20" }} aria-label="Porównanie SEO Grow z alternatywami">
      <Container maxW="5xl">
        <VStack gap={{ base: "8", md: "10" }}>
          {/* Header */}
          <VStack gap="3" textAlign="center" maxW="2xl" mx="auto">
            <Text
              fontSize="xs"
              fontWeight="700"
              color="#4F46E5"
              letterSpacing="0.14em"
              textTransform="uppercase"
            >
              Porównanie
            </Text>
            <Heading as="h2" {...SECTION_TITLE_PROPS} color={SECTION_TITLE_COLOR_DARK}>
              SEO Grow vs WordPress vs agencja vs DIY
            </Heading>
            <Text color="#475569" fontSize="md" lineHeight="1.6">
              Te same funciones, diferentes precios y tiempos. SEO Grow gana en casi todas — sobre todo en <Box as="span" fontWeight="700" color="#0F172A">relación calidad/precio</Box>.
            </Text>
          </VStack>

          {/* Tabla comparativa — desktop */}
          <Box
            display={{ base: "none", md: "block" }}
            w="full"
            bg="white"
            border="1px solid #E2E8F0"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="0 4px 20px rgba(15, 23, 42, 0.04)"
          >
            {/* Column headers */}
            <Box
              display="grid"
              gridTemplateColumns="1.4fr 1fr 1fr 1.1fr 1fr"
              bg="#F8FAFC"
              borderBottom="1px solid #E2E8F0"
            >
              {COLUMNS.map((col) => {
                const isSeoGrow = col.key === "seogrow"
                return (
                  <Box
                    key={col.key}
                    py="4"
                    px="4"
                    textAlign="center"
                    bg={isSeoGrow ? "#EEF2FF" : "transparent"}
                    borderLeft={isSeoGrow ? "1px solid #C7D2FE" : "none"}
                    borderRight={isSeoGrow ? "1px solid #C7D2FE" : "none"}
                  >
                    <Text
                      fontSize="xs"
                      fontWeight="800"
                      color={isSeoGrow ? "#4F46E5" : "#64748B"}
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                    >
                      {col.label}
                    </Text>
                    {isSeoGrow && (
                      <Text fontSize="2xs" color="#4F46E5" fontWeight="700" mt="0.5">
                        Recomendado
                      </Text>
                    )}
                  </Box>
                )
              })}
            </Box>

            {/* Rows */}
            {ROWS.map((row, i) => (
              <Box
                key={row.label}
                display="grid"
                gridTemplateColumns="1.4fr 1fr 1fr 1.1fr 1fr"
                borderBottom={i < ROWS.length - 1 ? "1px solid #F1F5F9" : "none"}
                _hover={{ bg: "#FAFBFC" }}
                transition="background 0.15s"
              >
                <Flex align="center" px="4" py="3">
                  <Text fontSize="sm" fontWeight="600" color="#0F172A">
                    {row.label}
                  </Text>
                </Flex>
                <Box borderLeft="1px solid #F1F5F9">
                  <Cell cell={row.diy} />
                </Box>
                <Box borderLeft="1px solid #F1F5F9">
                  <Cell cell={row.wordpress} />
                </Box>
                <Box
                  borderLeft="1px solid #C7D2FE"
                  borderRight="1px solid #C7D2FE"
                  bg="#EEF2FF"
                >
                  <Cell cell={row.seogrow} highlight />
                </Box>
                <Box borderLeft="1px solid #F1F5F9">
                  <Cell cell={row.agency} />
                </Box>
              </Box>
            ))}
          </Box>

          {/* Tabla mobile — cards apiladas */}
          <VStack display={{ base: "flex", md: "none" }} gap="3" w="full" align="stretch">
            {ROWS.map((row) => (
              <Box
                key={row.label}
                bg="white"
                border="1px solid #E2E8F0"
                borderRadius="lg"
                p="4"
              >
                <Text fontSize="sm" fontWeight="700" color="#0F172A" mb="3">
                  {row.label}
                </Text>
                <VStack gap="2" align="stretch">
                  <HStack justify="space-between" align="center">
                    <Text fontSize="xs" color="#64748B">DIY / sam</Text>
                    <Cell cell={row.diy} />
                  </HStack>
                  <HStack justify="space-between" align="center">
                    <Text fontSize="xs" color="#64748B">WordPress</Text>
                    <Cell cell={row.wordpress} />
                  </HStack>
                  <HStack justify="space-between" align="center" bg="#EEF2FF" mx="-4" px="4" py="2" borderRadius="md">
                    <Text fontSize="xs" color="#4F46E5" fontWeight="700">SEO Grow</Text>
                    <Cell cell={row.seogrow} highlight />
                  </HStack>
                  <HStack justify="space-between" align="center">
                    <Text fontSize="xs" color="#64748B">Agencja</Text>
                    <Cell cell={row.agency} />
                  </HStack>
                </VStack>
              </Box>
            ))}
          </VStack>

          {/* Link a la página de comparación completa */}
          <Box textAlign="center" pt="2">
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
              _hover={{ color: "#4338CA", gap: "3" }}
              transition="all 0.2s"
            >
              Comparación detallada con WordPress
              <FaArrowRight size={14} />
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
