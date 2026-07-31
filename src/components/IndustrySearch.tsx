import { Box, Flex, Text } from "@chakra-ui/react"
import { useState, useEffect, useRef } from "react"

// ─── Icons inline (sin lucide-react) ──────────────────────────────────────────

type IconProps = { size?: number; color?: string }

const SearchIcon = ({ size = 14, color = "currentColor" }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const ScissorsIcon = ({ size = 14 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
)

const ShoppingBagIcon = ({ size = 14 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const UtensilsIcon = ({ size = 14 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
  </svg>
)

const DropletsIcon = ({ size = 14 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    <path d="M12.56 14.69c1.46 0 2.64-1.22 2.64-2.7 0-.78-.38-1.51-1.13-2.13C13.33 9.24 12.79 8.5 12.61 7.6c-.18.9-.72 1.64-1.46 2.26-.75.62-1.13 1.35-1.13 2.13 0 1.48 1.18 2.7 2.64 2.7z" />
    <path d="M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z" />
  </svg>
)

const WrenchIcon = ({ size = 14 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)

const DumbbellIcon = ({ size = 14 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m2 6 4-4" />
    <path d="m3 10 7-7" />
    <path d="m14 21 7-7" />
  </svg>
)

const StoreIcon = ({ size = 14 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l1.5-5h15L21 9" />
    <path d="M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9" />
    <path d="M3 9h18" />
    <path d="M9 21V12h6v9" />
  </svg>
)

const CameraIcon = ({ size = 14 }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
)

// (GlobeIcon removido — el globo terráqueo se veía raro en la barra de URL)

// ─── Types ──────────────────────────────────────────────────────────────────

type OurPosition = 1 | 2 | 3

type Industry = {
  id: string
  label: string
  query: string
  resultCount: string
  ourPosition: OurPosition
  url: string
  titleTag: string
  metaDescription: string
  comp: { url: string; title: string; meta: string }[]
  Icon: (p: IconProps) => JSX.Element
}

const INDUSTRIES: Industry[] = [
  {
    id: "hydraulik",
    label: "Hydraulik",
    query: "hydraulik awaryjny Warszawa",
    resultCount: "11 128",
    ourPosition: 2,
    url: "hydrofix.pl",
    titleTag: "Hydraulik Awaryjny Warszawa — Przyjedziemy w 60 min | HydroFix",
    metaDescription:
      "Hydraulik awaryjny w Warszawie i okolicach. Awarie, nieszczelności, instalacje. Działamy 24/7 — zadzwoń, przyjedziemy w godzinę.",
    comp: [
      { url: "hydraulik-express.pl", title: "Hydraulik Warszawa | Usługi hydrauliczne — Hydraulik Express", meta: "Profesjonalne usługi hydrauliczne w Warszawie. Szybka realizacja, konkurencyjne ceny. Zadzwoń i umów wizytę." },
      { url: "prohydro.pl", title: "Hydraulik Warszawa — Naprawy i Instalacje | ProHydro", meta: "Hydraulik w Warszawie i okolicach. Naprawy, montaż instalacji, pogotowie hydrauliczne. Działamy od 2010 roku." },
    ],
    Icon: (p) => <WrenchIcon {...p} />,
  },
  {
    id: "fryzjer",
    label: "Fryzjer",
    query: "fryzjer damski Kraków",
    resultCount: "20 140",
    ourPosition: 3,
    url: "studioforma.pl",
    titleTag: "Fryzjer Damski w Krakowie — Strzyżenie, Koloryzacja | Studio Forma",
    metaDescription:
      "Salon fryzjerski w centrum Krakowa. Strzyżenie, koloryzacja, keratynowe prostowanie. Umów wizytę online w 2 minuty.",
    comp: [
      { url: "fryzjernia-monika.pl", title: "Fryzjer Kraków — Salon Fryzjerski Monika | Centrum", meta: "Salon fryzjerski w Krakowie. Damskie i męskie strzyżenie, koloryzacja, modelowanie. Rezerwacja telefoniczna." },
      { url: "hairartstudio.pl", title: "Hair Art Studio Kraków | Strzyżenie i Koloryzacja", meta: "Profesjonalny salon fryzjerski w Krakowie. Strzyżenie, koloryzacja balayage, pielęgnacja włosów. Umów się już dziś." },
    ],
    Icon: (p) => <ScissorsIcon {...p} />,
  },
  {
    id: "restauracja",
    label: "Restauracja",
    query: "restauracja polska Wrocław",
    resultCount: "34 500",
    ourPosition: 1,
    url: "karczmastaropolska.pl",
    titleTag: "Restauracja Polska we Wrocławiu — Kuchnia Tradycyjna | Karczma Staropolska",
    metaDescription:
      "Tradycyjna kuchnia polska w sercu Wrocławia. Pierogi, żurek, bigos. Rezerwacja stolika online — dostępność w czasie rzeczywistym.",
    comp: [
      { url: "podwierzbabistro.pl", title: "Pod Wierzbą Bistro Wrocław | Polska Kuchnia", meta: "Bistro z polską kuchnią we Wrocławiu. Domowe obiady, tradycyjne przepisy, przytulna atmosfera. Zapraszamy codziennie." },
      { url: "smakpolski-wroclaw.pl", title: "Smak Polski Wrocław — Restauracja Staropolska", meta: "Restauracja z kuchnią staropolską we Wrocławiu. Obiady, uroczystości rodzinne, catering. Rezerwacje pod numerem telefonu." },
    ],
    Icon: (p) => <UtensilsIcon {...p} />,
  },
  {
    id: "sklep",
    label: "Sklep online",
    query: "sklep z odzieżą sportową online",
    resultCount: "89 700",
    ourPosition: 2,
    url: "runnergear.pl",
    titleTag: "Sklep z Odzieżą Sportową — Bieganie, Siłownia, Outdoor | RunnerGear",
    metaDescription:
      "Sklep z odzieżą i akcesoriami sportowymi. Bieganie, siłownia, outdoor. Darmowa dostawa od 200 zł, zwrot w 30 dni bez pytań.",
    comp: [
      { url: "sportmax-online.pl", title: "SportMax Online — Odzież i Obuwie Sportowe", meta: "Sklep internetowy z odzieżą sportową. Marki premium, szybka wysyłka, darmowy zwrot. Sprawdź nową kolekcję." },
      { url: "fitwear.pl", title: "FitWear — Sklep z Odzieżą Sportową i Fitness", meta: "Odzież sportowa dla aktywnych. Bielizna termoaktywna, legginsy, koszulki. Polska marka, szybka dostawa." },
    ],
    Icon: (p) => <ShoppingBagIcon {...p} />,
  },
  {
    id: "myjnia",
    label: "Myjnia",
    query: "myjnia ciśnieniowa Gdańsk",
    resultCount: "8 340",
    ourPosition: 3,
    url: "cleanpro.pl",
    titleTag: "Myjnia Ciśnieniowa w Gdańsku — Tarasy, Elewacje | CleanPro",
    metaDescription:
      "Profesjonalne mycie ciśnieniowe w Gdańsku. Tarasy, elewacje, kostka brukowa. Bezpłatna wycena w 24h — zadzwoń lub napisz.",
    comp: [
      { url: "ekomyjnia.pl", title: "EkoMyjnia Trójmiasto — Mycie Ciśnieniowe Gdańsk", meta: "Mycie ciśnieniowe budynków i nawierzchni w Gdańsku i okolicach. Ekologiczne środki czyszczące. Wycena online." },
      { url: "waterblast.pl", title: "WaterBlast Gdańsk | Mycie Ciśnieniowe Fasad i Tarasów", meta: "Profesjonalne mycie ciśnieniowe w Gdańsku. Fasady, tarasy, dachy, kostka. Szybka realizacja i przystępne ceny." },
    ],
    Icon: (p) => <DropletsIcon {...p} />,
  },
  {
    id: "fotograf",
    label: "Fotograf",
    query: "fotograf ślubny Poznań",
    resultCount: "15 870",
    ourPosition: 1,
    url: "chwilakadr.pl",
    titleTag: "Fotograf Ślubny Poznań — Reportaż i Sesje Plenerowe | Chwila & Kadr",
    metaDescription:
      "Fotograf ślubny w Poznaniu z 10-letnim doświadczeniem. Reportaże, sesje narzeczeńskie i plenerowe. Sprawdź dostępność terminów.",
    comp: [
      { url: "fotosens.pl", title: "FotoSens Poznań — Fotografia Ślubna i Okolicznościowa", meta: "Fotograf ślubny w Poznaniu. Reportaże weselne, sesje narzeczeńskie, chrzty. Nowoczesny styl, naturalne ujęcia." },
      { url: "studioluz.pl", title: "Studio Luz Poznań | Fotografia Ślubna i Portretowa", meta: "Fotografia ślubna i portretowa w Poznaniu. Sesje narzeczeńskie, reportaże weselne, zdjęcia rodzinne. Zapytaj o termin." },
    ],
    Icon: (p) => <CameraIcon {...p} />,
  },
  {
    id: "silownia",
    label: "Siłownia",
    query: "siłownia personal trainer Łódź",
    resultCount: "12 450",
    ourPosition: 2,
    url: "ironform.pl",
    titleTag: "Siłownia z Personal Trainerem w Łodzi — Treningi EMS | IronForm",
    metaDescription:
      "Klub fitness z certyfikowanymi trenerami personalnymi w Łodzi. Treningi siłowe, EMS i cardio. Pierwszy trening gratis — umów się dziś.",
    comp: [
      { url: "fitzone-lodz.pl", title: "FitZone Łódź — Siłownia i Fitness | Personal Training", meta: "Nowoczesna siłownia w Łodzi. Treningi personalne, zajęcia grupowe, strefa cardio. Zapisz się na bezpłatny trening próbny." },
      { url: "atleticoclub.pl", title: "Atletico Club Łódź | Siłownia, Crossfit, Yoga", meta: "Kompleksowy klub sportowy w Łodzi. Siłownia, crossfit, yoga, basen. Elastyczne karnety miesięczne i jednorazowe wejścia." },
    ],
    Icon: (p) => <DumbbellIcon {...p} />,
  },
  {
    id: "sklep_stacjonarny",
    label: "Sklep lokalny",
    query: "sklep z kawą specialty Katowice",
    resultCount: "6 210",
    ourPosition: 1,
    url: "kawaiizarno.pl",
    titleTag: "Kawa Specialty w Katowicach — Palarnia i Sklep | Kawa & Ziarno",
    metaDescription:
      "Sklep i palarnia kawy specialty w centrum Katowic. Ziarna single origin, sprzęt do parzenia, kursy baristyczne. Wpadnij na degustację.",
    comp: [
      { url: "blackbeans.pl", title: "Black Beans Katowice — Kawa Specialty i Palarnia", meta: "Palarnia i sklep z kawą specialty w Katowicach. Ziarna z całego świata, metody alternatywne, warsztaty kawowe." },
      { url: "espressolab.pl", title: "Espresso Lab Silesia | Kawa Specialty Katowice", meta: "Specialty coffee w Katowicach. Espresso, pour over, cold brew. Sklep stacjonarny i wysyłka w całej Polsce." },
    ],
    Icon: (p) => <StoreIcon {...p} />,
  },
]

// ─── Hooks ──────────────────────────────────────────────────────────────────

function useTypingQuery(query: string, runId: number) {
  const [typed, setTyped] = useState("")
  const [done, setDone] = useState(false)
  useEffect(() => {
    setTyped("")
    setDone(false)
    let i = 0
    const iv = window.setInterval(() => {
      i++
      setTyped(query.slice(0, i))
      if (i >= query.length) {
        window.clearInterval(iv)
        window.setTimeout(() => setDone(true), 360)
      }
    }, 46)
    return () => window.clearInterval(iv)
  }, [query, runId])
  return { typed, done }
}

// ─── Organic result row ─────────────────────────────────────────────────────

type ResultRowProps = {
  position: number
  url: string
  title: string
  meta: string
  isOurs: boolean
  Icon?: (p: IconProps) => JSX.Element
}

function ResultRow({ position, url, title, meta, isOurs, Icon }: ResultRowProps) {
  return (
    <Box
      py="3"
      position={isOurs ? "relative" : undefined}
      className="group"
    >
      {isOurs && (
        <Box
          position="absolute"
          left="-12px"
          top="0"
          bottom="0"
          w="2px"
          rounded="full"
          bg="#1a73e8"
        />
      )}
      {/* favicon + url row */}
      <Flex align="center" gap="1.5" mb="0.5">
        <Flex
          w="16px"
          h="16px"
          rounded="full"
          align="center"
          justify="center"
          flexShrink={0}
          border="1px solid #dadce0"
          bg="white"
          overflow="hidden"
        >
          {isOurs && Icon ? (
            <Icon size={10} color="#4285F4" />
          ) : (
            <Box w="8px" h="8px" rounded="full" bg="#dadce0" />
          )}
        </Flex>
        <Text fontSize="12px" color="#202124" truncate>
          {url}
        </Text>
        {isOurs && (
          <Text
            ml="auto"
            flexShrink={0}
            fontSize="9px"
            fontWeight="700"
            px="1.5"
            py="0.5"
            rounded="full"
            bg="#e8f0fe"
            color="#1a73e8"
            border="1px solid #c5d8fc"
          >
            Twoja strona
          </Text>
        )}
      </Flex>
      {/* position + title */}
      <Flex align="baseline" gap="1.5">
        <Text
          fontSize="11px"
          fontWeight="700"
          flexShrink={0}
          w="16px"
          textAlign="right"
          color={isOurs ? "#1a73e8" : "#9aa0a6"}
        >
          {position}.
        </Text>
        <Text
          fontSize="15px"
          lineHeight="1.3"
          fontWeight={isOurs ? "600" : "400"}
          color="#1a0dab"
        >
          {title}
        </Text>
      </Flex>
      {/* meta */}
      <Text fontSize="13px" mt="0.5" lineHeight="1.55" pl="5" color="#4d5156">
        {meta}
      </Text>
    </Box>
  )
}

// ─── Search mockup ──────────────────────────────────────────────────────────

function SearchMockup({ industry, runId }: { industry: Industry; runId: number }) {
  const { typed, done } = useTypingQuery(industry.query, runId)
  const Icon = industry.Icon
  const pos = industry.ourPosition

  const ourResult = { url: industry.url, title: industry.titleTag, meta: industry.metaDescription, isOurs: true }
  const c0 = { ...industry.comp[0], isOurs: false }
  const c1 = { ...industry.comp[1], isOurs: false }

  const slots =
    pos === 1 ? [ourResult, c0, c1] :
    pos === 2 ? [c0, ourResult, c1] :
                [c0, c1, ourResult]

  return (
    <Box
      rounded="2xl"
      overflow="hidden"
      bg="white"
      border="1px solid #e8eaed"
      boxShadow="0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.07)"
    >
      {/* Browser chrome */}
      <Flex align="center" gap="2.5" px="4" py="2.5" bg="#f1f3f4" borderBottom="1px solid #dadce0">
        <Flex gap="1.5" flexShrink={0}>
          <Box w="10px" h="10px" rounded="full" bg="#ff5f57" />
          <Box w="10px" h="10px" rounded="full" bg="#febc2e" />
          <Box w="10px" h="10px" rounded="full" bg="#28c840" />
        </Flex>
        <Flex
          flex="1"
          align="center"
          gap="1.5"
          px="3"
          py="1"
          rounded="full"
          fontSize="11px"
          bg="white"
          border="1px solid #dadce0"
          color="#5f6368"
        >
          <Text truncate>google.pl</Text>
        </Flex>
      </Flex>

      {/* Google logo + search bar */}
      <Box px="5" pt="4" pb="2">
        <Flex align="center" gap="0" mb="3">
          {["G", "o", "o", "g", "l", "e"].map((l, i) => (
            <Text
              key={i}
              fontSize="22px"
              fontWeight="500"
              lineHeight="1"
              letterSpacing="-0.02em"
              color={["#4285F4", "#EA4335", "#FBBC05", "#4285F4", "#34A853", "#EA4335"][i]}
            >
              {l}
            </Text>
          ))}
        </Flex>
        <Flex
          align="center"
          gap="2.5"
          px="4"
          py="2.5"
          rounded="full"
          border="1px solid #dfe1e5"
          boxShadow="0 1px 6px rgba(32,33,36,.12)"
        >
          <SearchIcon size={16} color="#9aa0a6" />
          <Text fontSize="14px" color="#202124" flex="1" lineHeight="1.3">
            {typed}
            {!done && (
              <Box
                as="span"
                display="inline-block"
                w="1px"
                h="14px"
                ml="2px"
                bg="#202124"
                verticalAlign="middle"
                className="industry-search-cursor"
              />
            )}
          </Text>
        </Flex>
        <Text fontSize="11px" mt="2" pl="1" color="#70757a">
          Około {industry.resultCount} wyników (0,38 s)
        </Text>
      </Box>

      {/* Organic results */}
      <Box
        px="5"
        pb="5"
        pl="8"
        opacity={done ? 1 : 0}
        transition="opacity 0.45s ease"
      >
        <Box borderTop="1px solid #f1f3f4">
          {slots.map((s, idx) => (
            <Box
              key={idx}
              borderBottom={idx < 2 ? "1px solid #f1f3f4" : "none"}
            >
              <ResultRow
                position={idx + 1}
                url={s.url}
                title={s.title}
                meta={s.meta}
                isOurs={s.isOurs}
                Icon={s.isOurs ? Icon : undefined}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

// ─── Main component ─────────────────────────────────────────────────────────

// Auto-rotates the typing animation across industries while the section is in view.
// No chips, no agent panel — just the browser mockup with search results.

export const IndustrySearch = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [runId, setRunId] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const active = INDUSTRIES[activeIdx]

  // Start animation when section enters the viewport.
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return
    const node = containerRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRunId((r) => r + 1)
          }
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // After the typing + results have been visible for a few seconds, switch to next industry.
  useEffect(() => {
    const t = window.setTimeout(() => {
      setActiveIdx((i) => (i + 1) % INDUSTRIES.length)
      setRunId((r) => r + 1)
    }, 5200)
    return () => window.clearTimeout(t)
  }, [activeIdx, runId])

  return (
    <Box ref={containerRef} w="full" className="industry-fade-up">
      <SearchMockup industry={active} runId={runId} />
    </Box>
  )
}
