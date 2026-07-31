import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react"
import { Box, Text, Flex } from "@chakra-ui/react"

// ─── Types & rates ────────────────────────────────────────────────────────────

export type Currency = "pln" | "eur" | "usd"

const STORAGE_KEY = "seogrow_currency"
const DEFAULT_CURRENCY: Currency = "pln"

// Tasas de cambio aproximadas desde PLN (estáticas, refrescar manualmente)
// 1 PLN ≈ 0.23 EUR / 0.25 USD (referencia 2026)
const RATE_FROM_PLN: Record<Currency, number> = {
  pln: 1,
  eur: 0.232,
  usd: 0.253,
}

const CURRENCY_DATA: Record<Currency, { symbol: string; code: string; name: string }> = {
  pln: { symbol: "zł", code: "PLN", name: "Złoty polski" },
  eur: { symbol: "€", code: "EUR", name: "Euro" },
  usd: { symbol: "$", code: "USD", name: "Dólar" },
}

export const convertPrice = (plnAmount: number, target: Currency): number => {
  return plnAmount * RATE_FROM_PLN[target]
}

export const formatPrice = (amount: number, currency: Currency): string => {
  const data = CURRENCY_DATA[currency]
  if (currency === "pln") {
    // PLN: amount + space + symbol (Polish convention)
    return `${Math.round(amount).toLocaleString("pl-PL")} ${data.symbol}`
  }
  // EUR/USD: symbol + amount (Western convention)
  const formatted = amount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
  return `${data.symbol}${formatted}`
}

// ─── Persistence ──────────────────────────────────────────────────────────────

const getStoredCurrency = (): Currency | null => {
  if (typeof window === "undefined") return null
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "pln" || stored === "eur" || stored === "usd") return stored
  } catch {
    // ignore
  }
  return null
}

const storeCurrency = (currency: Currency) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, currency)
  } catch {
    // ignore
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────

type CurrencyContextValue = {
  currency: Currency
  setCurrency: (currency: Currency) => void
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: DEFAULT_CURRENCY,
  setCurrency: () => {},
})

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  // Siempre arranca en PLN (moneda local de la web — target Polonia).
  // Ignoramos localStorage para que la primera visita y las siguientes
  // siempre muestren PLN por defecto, igual que el idioma (pl).
  const [currency, setCurrencyState] = useState<Currency>(DEFAULT_CURRENCY)

  const setCurrency = useCallback((next: Currency) => {
    setCurrencyState(next)
    storeCurrency(next)
  }, [])

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => useContext(CurrencyContext)

// ─── Currency switcher (discreet, matches navbar) ───────────────────────────

export const CurrencySwitcher = () => {
  const { currency, setCurrency } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  const options: Currency[] = ["pln", "eur", "usd"]

  return (
    <Box position="relative" ref={containerRef}>
      <Box
        as="button"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={`Waluta: ${CURRENCY_DATA[currency].name}. Kliknij, aby zmienić.`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        display="inline-flex"
        alignItems="center"
        gap="1"
        cursor="pointer"
        color="fg.muted"
        fontSize="sm"
        fontWeight="500"
        fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
        letterSpacing="0"
        transition="color 0.18s"
        _hover={{ color: "accent.600" }}
        _focusVisible={{ outline: "2px solid", outlineColor: "accent.600", outlineOffset: "4px", borderRadius: "4px" }}
      >
        <Text as="span" lineHeight="1">
          {CURRENCY_DATA[currency].code}
        </Text>
        <Box
          as="svg"
          viewBox="0 0 10 6"
          w="10px"
          h="6px"
          display="inline-block"
          ml="0.5"
          opacity="0.6"
          aria-hidden="true"
        >
          <path d="M 0 0 L 5 6 L 10 0 Z" fill="currentColor" />
        </Box>
      </Box>

      {isOpen && (
        <Box
          position="absolute"
          top="calc(100% + 8px)"
          right="0"
          bg="white"
          border="1px solid border.default"
          rounded="lg"
          boxShadow="0 12px 28px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.04)"
          zIndex={50}
          overflow="hidden"
          role="listbox"
          aria-label="Wybór waluty"
          fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
        >
          {options.map((opt) => {
            const isActive = currency === opt
            const data = CURRENCY_DATA[opt]
            return (
              <Box
                as="button"
                key={opt}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setCurrency(opt)
                  setIsOpen(false)
                }}
                w="full"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap="2.5"
                px="3"
                py="2"
                cursor="pointer"
                bg={isActive ? "accent.50" : "transparent"}
                transition="background 0.12s"
                _hover={{ bg: isActive ? "accent.50" : "bg.subtle" }}
                textAlign="left"
              >
                <Text
                  as="span"
                  fontSize="sm"
                  fontWeight={isActive ? "600" : "500"}
                  color={isActive ? "accent.600" : "fg.muted"}
                  letterSpacing="0"
                  lineHeight="1.2"
                >
                  {data.code}
                </Text>
                {isActive && (
                  <Box w="6px" h="6px" rounded="full" bg="accent.600" />
                )}
              </Box>
            )
          })}
        </Box>
      )}
    </Box>
  )
}