import { Box, Container, Flex, Grid, Heading, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react"
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

const GlobeIcon = ({ size = 12, color = "currentColor" }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const FileTextIcon = ({ size = 14, color = "currentColor" }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
)

const CheckCircleIcon = ({ size = 12, color = "currentColor" }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const SparklesIcon = ({ size = 12, color = "currentColor" }: IconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
  </svg>
)

// ─── Types ──────────────────────────────────────────────────────────────────

type OurPosition = 1 | 2 | 3

type Industry = {
  id: string
  label: string
  Icon: (p: IconProps) => JSX.Element
  query: string
  resultCount: string
  ourPosition: OurPosition
  url: string
  titleTag: string
  metaDescription: string
  comp: { url: string; title: string; meta: string }[]
  seoScore: number
  schemaType: string
  improvements: { label: string; before: string; after: string }[]
}

// ─── Data ───────────────────────────────────────────────────────────────────

const INDUSTRIES: Industry[] = [
  {
    id: "hydraulik",
    label: "Hydraulik",
    Icon: (p) => <WrenchIcon {...p} />,
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
    seoScore: 96,
    schemaType: "Plumber",
    improvements: [
      { label: "Title", before: "Hydraulik Warszawa | Usługi hydrauliczne", after: "Hydraulik Awaryjny Warszawa — Przyjedziemy w 60 min | HydroFix" },
      { label: "Meta", before: "Oferujemy usługi hydrauliczne w Warszawie. Zadzwoń do nas.", after: "Hydraulik awaryjny w Warszawie i okolicach. Awarie, nieszczelności, instalacje. Działamy 24/7 — zadzwoń, przyjedziemy w godzinę." },
    ],
  },
  {
    id: "fryzjer",
    label: "Fryzjer",
    Icon: (p) => <ScissorsIcon {...p} />,
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
    seoScore: 93,
    schemaType: "HairSalon",
    improvements: [
      { label: "Title", before: "Studio Forma — Salon fryzjerski Kraków", after: "Fryzjer Damski w Krakowie — Strzyżenie, Koloryzacja | Studio Forma" },
      { label: "Meta", before: "Salon fryzjerski Studio Forma. Zapraszamy!", after: "Salon fryzjerski w centrum Krakowa. Strzyżenie, koloryzacja, keratynowe prostowanie. Umów wizytę online w 2 minuty." },
    ],
  },
  {
    id: "restauracja",
    label: "Restauracja",
    Icon: (p) => <UtensilsIcon {...p} />,
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
    seoScore: 95,
    schemaType: "Restaurant",
    improvements: [
      { label: "Title", before: "Karczma Staropolska Wrocław", after: "Restauracja Polska we Wrocławiu — Kuchnia Tradycyjna | Karczma Staropolska" },
      { label: "Meta", before: "Polska restauracja we Wrocławiu. Serdecznie zapraszamy.", after: "Tradycyjna kuchnia polska w sercu Wrocławia. Pierogi, żurek, bigos. Rezerwacja stolika online — dostępność w czasie rzeczywistym." },
    ],
  },
  {
    id: "sklep",
    label: "Sklep online",
    Icon: (p) => <ShoppingBagIcon {...p} />,
    query: "sklep z odzieżą sportową online",
    resultCount: "89 700",
    ourPosition: 2,
    url: "activewear.pl",
    titleTag: "Odzież Sportowa Online — Szybka Wysyłka 24h | ActiveWear.pl",
    metaDescription:
      "Sklep z odzieżą sportową — kurtki, legginsy, buty do biegania. Wysyłka w 24h, darmowe zwroty do 30 dni. Sprawdź nową kolekcję.",
    comp: [
      { url: "sportshop.pl", title: "SportShop Polska — Odzież i Sprzęt Sportowy Online", meta: "Szeroki wybór odzieży i sprzętu sportowego. Marki premium, szybka wysyłka, łatwe zwroty. Sprawdź ofertę." },
      { url: "runstyle.pl", title: "RunStyle.pl | Stroje do Biegania i Treningu", meta: "Odzież do biegania i treningu funkcjonalnego. Legginsy, kurtki, skarpety techniczne. Wysyłka od 29 zł." },
    ],
    seoScore: 91,
    schemaType: "OnlineStore",
    improvements: [
      { label: "Title", before: "ActiveWear — ubrania sportowe", after: "Odzież Sportowa Online — Szybka Wysyłka 24h | ActiveWear.pl" },
      { label: "Meta", before: "Sklep internetowy z odzieżą sportową. Zapraszamy do zakupów.", after: "Sklep z odzieżą sportową — kurtki, legginsy, buty do biegania. Wysyłka w 24h, darmowe zwroty do 30 dni. Sprawdź nową kolekcję." },
    ],
  },
  {
    id: "myjnia",
    label: "Myjnia",
    Icon: (p) => <DropletsIcon {...p} />,
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
    seoScore: 94,
    schemaType: "LocalBusiness",
    improvements: [
      { label: "Title", before: "CleanPro — mycie ciśnieniowe Gdańsk", after: "Myjnia Ciśnieniowa w Gdańsku — Tarasy, Elewacje | CleanPro" },
      { label: "Meta", before: "Zajmujemy się myciem ciśnieniowym. Gdańsk i okolice.", after: "Profesjonalne mycie ciśnieniowe w Gdańsku. Tarasy, elewacje, kostka brukowa. Bezpłatna wycena w 24h — zadzwoń lub napisz." },
    ],
  },
  {
    id: "fotograf",
    label: "Fotograf",
    Icon: (p) => <CameraIcon {...p} />,
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
    seoScore: 97,
    schemaType: "ProfessionalService",
    improvements: [
      { label: "Title", before: "Chwila & Kadr | Fotografia ślubna", after: "Fotograf Ślubny Poznań — Reportaż i Sesje Plenerowe | Chwila & Kadr" },
      { label: "Meta", before: "Fotografia ślubna i okolicznościowa. Poznań.", after: "Fotograf ślubny w Poznaniu z 10-letnim doświadczeniem. Reportaże, sesje narzeczeńskie i plenerowe. Sprawdź dostępności terminów." },
    ],
  },
  {
    id: "silownia",
    label: "Siłownia",
    Icon: (p) => <DumbbellIcon {...p} />,
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
    seoScore: 92,
    schemaType: "SportsActivityLocation",
    improvements: [
      { label: "Title", before: "IronForm — siłownia Łódź", after: "Siłownia z Personal Trainerem w Łodzi — Treningi EMS | IronForm" },
      { label: "Meta", before: "Siłownia w Łodzi. Zapraszamy na treningi.", after: "Klub fitness z certyfikowanymi trenerami personalnymi w Łodzi. Treningi siłowe, EMS i cardio. Pierwszy trening gratis — umów się dziś." },
    ],
  },
  {
    id: "sklep_stacjonarny",
    label: "Sklep lokalny",
    Icon: (p) => <StoreIcon {...p} />,
    query: "sklep z kawą specialty Katowice",
    resultCount: "6 210",
    ourPosition: 1,
    url: "kawaiziarno.pl",
    titleTag: "Kawa Specialty w Katowicach — Palarnia i Sklep | Kawa & Ziarno",
    metaDescription:
      "Sklep i palarnia kawy specialty w centrum Katowic. Ziarna single origin, sprzęt do parzenia, kursy baristyczne. Wpadnij na degustację.",
    comp: [
      { url: "blackbeans.pl", title: "Black Beans Katowice — Kawa Specialty i Palarnia", meta: "Palarnia i sklep z kawą specialty w Katowicach. Ziarna z całego świata, metody alternatywne, warsztaty kawowe." },
      { url: "espressolab.pl", title: "Espresso Lab Silesia | Kawa Specialty Katowice", meta: "Specialty coffee w Katowicach. Espresso, pour over, cold brew. Sklep stacjonarny i wysyłka w całej Polsce." },
    ],
    seoScore: 90,
    schemaType: "CafeOrCoffeeShop",
    improvements: [
      { label: "Title", before: "Kawa & Ziarno Katowice", after: "Kawa Specialty w Katowicach — Palarnia i Sklep | Kawa & Ziarno" },
      { label: "Meta", before: "Sklep z kawą w Katowicach. Dobra kawa czeka!", after: "Sklep i palarnia kawy specialty w centrum Katowic. Ziarna single origin, sprzęt do parzenia, kursy baristyczne. Wpadnij na degustację." },
    ],
  },
]

// ─── Hooks ──────────────────────────────────────────────────────────────────

function useFadeKey(id: string) {
  const [key, setKey] = useState(0)
  const prev = useRef(id)
  useEffect(() => {
    if (prev.current !== id) {
      prev.current = id
      setKey((k) => k + 1)
    }
  }, [id])
  return key
}

function useTypingQuery(query: string, id: string, runId: number) {
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
  }, [id, query, runId])
  return { typed, done }
}

// ─── Score ring ──────────────────────────────────────────────────────────────

function ScoreRing({ score, size = 40 }: { score: number; size?: number }) {
  const r = (size - 6) / 2
  const circ = 2 * Math.PI * r
  const dash = (score / 100) * circ
  const cx = size / 2
  const color = score >= 90 ? "#16a34a" : score >= 70 ? "#d97706" : "#dc2626"
  const textColor = score >= 90 ? "#15803d" : score >= 70 ? "#b45309" : "#b91c1c"
  return (
    <Box
      as="svg"
      w={`${size}px`}
      h={`${size}px`}
      viewBox={`0 0 ${size} ${size}`}
      style={{ transform: "rotate(-90deg)", flexShrink: 0 }}
    >
      <circle cx={cx} cy={cx} r={r} fill="none" stroke="#e2e8f0" strokeWidth="3" />
      <circle
        cx={cx}
        cy={cx}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        style={{ transition: "stroke-dasharray 0.6s ease" }}
      />
      <text
        x={cx}
        y={cx}
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontSize={size * 0.26}
        fontWeight="700"
        style={{ transform: `rotate(90deg)`, transformOrigin: `${cx}px ${cx}px` }}
      >
        {score}
      </text>
    </Box>
  )
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
      cursor="pointer"
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
          className="group-hover-underline"
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
  const { typed, done } = useTypingQuery(industry.query, industry.id, runId)
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
          <GlobeIcon size={12} color="#5f6368" />
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

// ─── Improvement row ────────────────────────────────────────────────────────

function ImprovementRow({ label, before, after }: { label: string; before: string; after: string }) {
  return (
    <VStack align="stretch" gap="1.5">
      <Text
        fontSize="10px"
        fontWeight="700"
        textTransform="uppercase"
        letterSpacing="0.08em"
        color="#9aa0a6"
      >
        {label}
      </Text>
      <Box rounded="md" px="3" py="2" bg="#fef2f2" border="1px solid #fecaca">
        <Text
          fontSize="11.5px"
          lineHeight="1.4"
          textDecoration="line-through"
          color="#b91c1c"
        >
          {before}
        </Text>
      </Box>
      <Flex align="start" gap="1.5">
        <Flex
          mt="3px"
          w="14px"
          h="14px"
          rounded="full"
          align="center"
          justify="center"
          flexShrink={0}
          bg="#dcfce7"
        >
          <CheckCircleIcon size={10} color="#16a34a" />
        </Flex>
        <Box flex="1" rounded="md" px="3" py="2" bg="#f0fdf4" border="1px solid #bbf7d0">
          <Text fontSize="11.5px" lineHeight="1.4" fontWeight="600" color="#166534">
            {after}
          </Text>
        </Box>
      </Flex>
    </VStack>
  )
}

// ─── Main component ─────────────────────────────────────────────────────────

export const IndustrySearch = () => {
  const [activeId, setActiveId] = useState(INDUSTRIES[0].id)
  const [runId, setRunId] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const active = INDUSTRIES.find((i) => i.id === activeId)!
  const fadeKey = useFadeKey(activeId)

  // Play the typing animation only when the section enters the viewport.
  // Each new entry bumps runId so the SearchMockup re-typings from the start.
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

  // Re-run animation when the user picks a different industry chip.
  const handleSelectIndustry = (id: string) => {
    setActiveId(id)
    setRunId((r) => r + 1)
  }

  return (
    <Box ref={containerRef} w="full">
      {/* Section header */}
      <Flex align="center" gap="4" mb="6">
        <Text
          fontSize="11px"
          fontWeight="700"
          color="#9aa0a6"
          textTransform="uppercase"
          letterSpacing="0.12em"
          flexShrink={0}
        >
          Idealne dla
        </Text>
        <Box flex="1" h="1px" bg="#f1f3f4" />
      </Flex>

      {/* Industry chips */}
      <Flex wrap="wrap" gap="2" mb="10">
        {INDUSTRIES.map((ind) => {
          const isActive = ind.id === activeId
          const IIcon = ind.Icon
          return (
            <Box
              as="button"
              key={ind.id}
              type="button"
              onClick={() => handleSelectIndustry(ind.id)}
              display="inline-flex"
              alignItems="center"
              gap="1.5"
              px="3.5"
              py="2"
              rounded="full"
              fontSize="13px"
              fontWeight="600"
              transition="all 0.15s"
              bg={isActive ? "#202124" : "white"}
              color={isActive ? "white" : "#3c4043"}
              border={isActive ? "none" : "1px solid #dadce0"}
              boxShadow={isActive ? "0 1px 3px rgba(0,0,0,.15)" : "none"}
              cursor="pointer"
              _hover={isActive ? {} : { borderColor: "#202124", bg: "#fafafa" }}
              _focusVisible={{ outline: "2px solid #4F46E5", outlineOffset: "2px" }}
            >
              <Box display="flex" alignItems="center">
                <IIcon size={14} />
              </Box>
              {ind.label}
            </Box>
          )
        })}
      </Flex>

      {/* Two-column */}
      <Grid templateColumns={{ base: "1fr", lg: "1fr 420px" }} gap="8" alignItems="start">
        {/* Left — search mockup */}
        <Box key={`mockup-${fadeKey}`} className="industry-fade-up">
          <SearchMockup industry={active} runId={runId} />
        </Box>

        {/* Right — agent panel */}
        <VStack
          key={`panel-${fadeKey}`}
          align="stretch"
          gap="5"
          className="industry-fade-up-delay"
        >
          <Box>
            <Flex
              as="span"
              display="inline-flex"
              alignItems="center"
              gap="1.5"
              fontSize="11px"
              fontWeight="700"
              color="#137333"
              textTransform="uppercase"
              letterSpacing="0.08em"
              px="2.5"
              py="1"
              rounded="full"
              bg="#e8f5e9"
              mb="3"
            >
              <Box display="flex" alignItems="center"><SparklesIcon size={11} color="#137333" /></Box>
              Agent SEO aktywny
            </Flex>
            <Heading
              as="h3"
              fontSize="22px"
              fontWeight="600"
              lineHeight="1.3"
              color="#202124"
              mt="3"
            >
              Co agent robi dla branży{" "}
              <Box as="span" color="#1a73e8">{active.label}</Box>
            </Heading>
            <Text mt="2" fontSize="13.5px" lineHeight="1.55" color="#5f6368">
              Przy każdej zmianie na stronie agent weryfikuje i aktualizuje wszystkie
              sygnały techniczne, które Google bierze pod uwagę podczas indeksowania.
            </Text>
          </Box>

          {/* Before / after card */}
          <Box rounded="2xl" p="4" bg="#fafafa" border="1px solid #e8eaed">
            <VStack align="stretch" gap="4">
              <Flex align="center" gap="2">
                <Box color="#9aa0a6" display="flex" alignItems="center">
                  <FileTextIcon size={14} color="#9aa0a6" />
                </Box>
                <Text
                  fontSize="11px"
                  fontWeight="700"
                  textTransform="uppercase"
                  letterSpacing="0.08em"
                  color="#9aa0a6"
                >
                  Korekty wprowadzone przez agenta
                </Text>
              </Flex>
              {active.improvements.map((imp) => (
                <ImprovementRow key={imp.label} {...imp} />
              ))}
              <Flex
                justify="space-between"
                align="center"
                pt="3"
                borderTop="1px solid #e8eaed"
              >
                <Text fontSize="12px" color="#5f6368">
                  Schema: <Box as="strong" color="#202124">{active.schemaType}</Box>
                </Text>
                <Flex align="center" gap="2">
                  <Text
                    fontSize="12px"
                    fontWeight="700"
                    display="flex"
                    alignItems="center"
                    gap="1"
                    color="#137333"
                  >
                    <Box display="flex" alignItems="center"><CheckCircleIcon size={14} color="#137333" /></Box>
                    Zindeksowane
                  </Text>
                  <ScoreRing score={active.seoScore} size={40} />
                </Flex>
              </Flex>
            </VStack>
          </Box>
        </VStack>
      </Grid>
    </Box>
  )
}