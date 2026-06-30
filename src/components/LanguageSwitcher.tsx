import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react"
import { Box, Text, Flex } from "@chakra-ui/react"

export type Language = "pl" | "en" | "es"

const STORAGE_KEY = "seogrow_lang"
const DEFAULT_LANG: Language = "pl"

// ─── Browser language detection ───────────────────────────────────────────────

const detectBrowserLanguage = (): Language => {
  if (typeof window === "undefined") return DEFAULT_LANG
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || ""
  const lang = browserLang.toLowerCase().slice(0, 2)
  if (lang === "pl") return "pl"
  if (lang === "es") return "es"
  return "en"
}

const getStoredLanguage = (): Language | null => {
  if (typeof window === "undefined") return null
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "pl" || stored === "en" || stored === "es") return stored
  } catch {
    // ignore
  }
  return null
}

const storeLanguage = (lang: Language) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // ignore
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  language: DEFAULT_LANG,
  setLanguage: () => {},
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANG)

  useEffect(() => {
    const stored = getStoredLanguage()
    if (stored) {
      setLanguageState(stored)
    } else {
      const detected = detectBrowserLanguage()
      setLanguageState(detected)
      storeLanguage(detected)
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    storeLanguage(lang)
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

// ─── Inline SVG flags ────────────────────────────────────────────────────────

type FlagProps = { size?: number }

export const PLFlag = ({ size = 18 }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ borderRadius: "2px" }}>
    <rect x="0.5" y="0.5" width="23" height="23" fill="white" stroke="#cbd5e1" strokeWidth="0.8" />
    <rect x="0.5" y="11.5" width="23" height="12" fill="#dc2626" />
  </svg>
)

export const GBFlag = ({ size = 18 }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ borderRadius: "2px" }}>
    <rect x="0.5" y="0.5" width="23" height="23" fill="#1e3a8a" stroke="#cbd5e1" strokeWidth="0.8" />
    <path d="M0.5 0.5 L23.5 23.5 M23.5 0.5 L0.5 23.5" stroke="white" strokeWidth="4" />
    <path d="M0.5 0.5 L23.5 23.5 M23.5 0.5 L0.5 23.5" stroke="#dc2626" strokeWidth="2" />
    <path d="M12 0.5 V23.5 M0.5 12 H23.5" stroke="white" strokeWidth="6" />
    <path d="M12 0.5 V23.5 M0.5 12 H23.5" stroke="#dc2626" strokeWidth="3.5" />
  </svg>
)

export const ESFlag = ({ size = 18 }: FlagProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ borderRadius: "2px" }}>
    <rect x="0.5" y="0.5" width="23" height="7.67" fill="#dc2626" />
    <rect x="0.5" y="8.17" width="23" height="7.66" fill="#fbbf24" />
    <rect x="0.5" y="15.83" width="23" height="7.67" fill="#dc2626" />
    <rect x="0.5" y="0.5" width="23" height="23" fill="none" stroke="#cbd5e1" strokeWidth="0.8" />
  </svg>
)

// ─── Language switcher (dropdown, matches navbar) ──────────────────────────

const LANG_OPTIONS: Array<{ code: Language; Flag: (p: FlagProps) => JSX.Element; name: string }> = [
  { code: "pl", Flag: PLFlag, name: "Polski" },
  { code: "en", Flag: GBFlag, name: "English" },
  { code: "es", Flag: ESFlag, name: "Español" },
]

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()
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

  const current = LANG_OPTIONS.find((o) => o.code === language) || LANG_OPTIONS[0]
  const CurrentFlag = current.Flag

  return (
    <Box position="relative" ref={containerRef}>
      {/* Trigger — solo la bandera actual, formato cuadrado */}
      <Box
        as="button"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={`Język: ${current.name}. Kliknij, aby zmienić.`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="1"
        cursor="pointer"
        transition="opacity 0.15s"
        _hover={{ opacity: 0.7 }}
        _focusVisible={{ outline: "2px solid", outlineColor: "#4F46E5", outlineOffset: "2px", borderRadius: "4px" }}
      >
        <CurrentFlag size={18} />
      </Box>

      {isOpen && (
        <Box
          position="absolute"
          top="calc(100% + 8px)"
          left="50%"
          transform="translateX(-50%)"
          bg="white"
          border="1px solid #E2E8F0"
          rounded="lg"
          boxShadow="0 12px 28px -8px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.04)"
          zIndex={50}
          overflow="hidden"
          role="listbox"
          aria-label="Wybór języka"
          fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
        >
          {LANG_OPTIONS.map((opt) => {
            const isActive = language === opt.code
            const Flag = opt.Flag
            return (
              <Box
                as="button"
                key={opt.code}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setLanguage(opt.code)
                  setIsOpen(false)
                }}
                w="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="2"
                px="2"
                py="1.5"
                cursor="pointer"
                bg={isActive ? "#EEF2FF" : "transparent"}
                transition="background 0.12s"
                _hover={{ bg: isActive ? "#EEF2FF" : "#F8FAFC" }}
                textAlign="left"
              >
                <Flag size={18} />
              </Box>
            )
          })}
        </Box>
      )}
    </Box>
  )
}

// ─── Translation pending banner ──────────────────────────────────────────────

const COPY: Record<Language, { message: string; back: string }> = {
  pl: { message: "", back: "" },
  en: {
    message: "🇬🇧 English translation is coming soon — most of the site is currently in Polish.",
    back: "Switch to Polish",
  },
  es: {
    message: "🇪🇸 La traducción al español está en preparación — la mayoría del sitio está en polaco.",
    back: "Volver a polaco",
  },
}

export const TranslationBanner = () => {
  const { language, setLanguage } = useLanguage()

  if (language === "pl") return null

  const copy = COPY[language]

  return (
    <Box
      position="fixed"
      bottom={{ base: "4", md: "6" }}
      left="50%"
      transform="translateX(-50%)"
      zIndex={40}
      maxW="lg"
      w="calc(100% - 32px)"
      bg="#0F172A"
      color="white"
      borderRadius="full"
      px={{ base: "4", md: "6" }}
      py={{ base: "2.5", md: "3" }}
      boxShadow="0 10px 30px -10px rgba(0,0,0,0.4)"
      border="1px solid rgba(255,255,255,0.08)"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="3"
      role="status"
      aria-live="polite"
    >
      <Text fontSize={{ base: "11px", md: "12.5px" }} lineHeight="1.4" flex="1">
        {copy.message}
      </Text>
      <Box
        as="button"
        type="button"
        onClick={() => setLanguage("pl")}
        flexShrink={0}
        bg="white"
        color="#0F172A"
        fontSize={{ base: "10px", md: "11px" }}
        fontWeight="700"
        px={{ base: "3", md: "3.5" }}
        py="1.5"
        rounded="full"
        cursor="pointer"
        _hover={{ bg: "#E0E7FF" }}
        transition="background 0.15s"
      >
        {copy.back}
      </Box>
    </Box>
  )
}