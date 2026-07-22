// src/components/SectorCarousel.tsx
// Carrusel de sectores que atiendo. Reemplaza la imagen estática del hero en
// las páginas de voivodato (/dolnoslaskie, /warminsko-mazurskie, etc.).
// Cada slide = sector real + imagen real + copy sales-oriented específico
// para ese sector. El cliente entra a un hub de voivodato y ve: "sí, atiendo
// tu tipo de negocio". El listado de ciudades va al sitemap y al footer —
// al cliente no le importa el conteo de habitantes.

import { Box, Container, Heading, Text, HStack, VStack, Flex, Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"

type Sector = {
  id: string
  /** Nombre del sector (en polaco) */
  name: string
  /** Slug para URL futura de vertical pages */
  slug: string
  /** Imagen del sector (en public/) */
  image: string
  /** Headline sales-oriented (1 línea) */
  headline: string
  /** Descripción del valor para este sector (1-2 frases) */
  description: string
}

const sectors: Sector[] = [
  {
    id: "dentista",
    name: "Gabinety stomatologiczne",
    slug: "strona-dla-dentysty",
    image: "/dentista.webp",
    headline: "Pacjenci z Twojej okolicy sami Cię znajdują",
    description: "Lokalne SEO + wizytówka Google + rezerwacja online. Pacjent wpisuje 'dentysta + miasto', trafia do Ciebie, umawia się przez stronę.",
  },
  {
    id: "lawyer",
    name: "Kancelarie prawne",
    slug: "strona-dla-prawnika",
    image: "/lawyer.webp",
    headline: "Klienci szukający pomocy prawnej trafiają prosto do Ciebie",
    description: "Strona buduje zaufanie (credentiale, specjalizacje, opinie) i kwalifikuje leady — formularz z wyborem specjalizacji i trybem pilności.",
  },
  {
    id: "restaurante",
    name: "Restauracje i lokale",
    slug: "strona-dla-restauracji",
    image: "/restaurante.webp",
    headline: "Menu, rezerwacje i Google Maps w jednym miejscu",
    description: "Gość szuka 'restauracja + miasto', widzi Twoje menu, rezerwuje stolik albo zamawia na wynos. Wszystko z telefonu.",
  },
  {
    id: "estetica",
    name: "Kliniki i gabinety estetyczne",
    slug: "strona-dla-kliniki",
    image: "/estetica.webp",
    headline: "Klientki porównują zabiegi, ceny i lokalizację — wygraj na lokalnym SEO",
    description: "Strona pokazuje Twoje zabiegi, kwalifikacje personelu, cennik i efekty. Klientka umawia się bez telefonu.",
  },
  {
    id: "inmobiliaria",
    name: "Agencje nieruchomości",
    slug: "strona-dla-agencji-nieruchomosci",
    image: "/inmobiliaria.webp",
    headline: "Twoje oferty pojawiają się w Google z miniaturką i ceną",
    description: "Strona z panelem do zarządzania ofertami. Każda oferta ma osobną stronę zoptymalizowaną pod 'mieszkanie + miasto + dzielnica'.",
  },
  {
    id: "arquitecto",
    name: "Architekci i pracownie",
    slug: "strona-dla-architekta",
    image: "/arquitecto.webp",
    headline: "Portfolio, które wygrywa z konkurencją w Google",
    description: "Galeria projektów z opisem, lokalizacją i materiałami. Klient trafia przez wyszukiwarkę po frazie 'architekt wnętrz + miasto'.",
  },
  {
    id: "freelancer",
    name: "Freelancerzy i usługi",
    slug: "strona-dla-freelancera",
    image: "/freelancer.webp",
    headline: "Twoja strona jako portfolio, które samo sprzedaje",
    description: "Czytelne sekcje: kim jesteś, co robisz, ile kosztuje, jak się skontaktować. Zero korporacyjnego bełkotu.",
  },
  {
    id: "peluquero",
    name: "Salony fryzjerskie i kosmetyczne",
    slug: "strona-dla-fryzjera",
    image: "/peluquero.webp",
    headline: "Klientki rezerwują wizytę bez dzwonienia",
    description: "Galeria metamorfoz, cennik, kalendarz online. Klientka wybiera termin, wpisuje swoje dane, przychodzi o godzinie. Ty nie odbierasz telefonu.",
  },
  {
    id: "fisioterapeuta",
    name: "Fizjoterapeuci",
    slug: "strona-dla-fizjoterapeuty",
    image: "/fisioterapeuta.webp",
    headline: "Pacjenci z bólem kręgosłupa trafiają do Ciebie, nie do konkurencji",
    description: "Strona tłumaczy Twoje specjalizacje, lokalizację i tryb przyjęć. Rezerwacja online zmniejsza liczbę nieodebranych telefonów.",
  },
  {
    id: "fotografo",
    name: "Fotografowie",
    slug: "strona-dla-fotografa",
    image: "/fotografo.webp",
    headline: "Portfolio, które Google zrozumie i pokaże w wynikach",
    description: "Galeria z alt-tagiem i opisem, schema ImageObject, Core Web Vitals na 90+. Twoje zdjęcia ładują się szybko i są cytowane przez AI.",
  },
  {
    id: "mecanico",
    name: "Warsztaty samochodowe",
    slug: "strona-dla-warsztatu-samochodowego",
    image: "/mecanico.webp",
    headline: "Klient szuka 'warsztat + miasto' — bądź w top 3",
    description: "Strona z cennikiem usług, opiniami i numerem telefonu widocznym na każdym ekranie. Kliknięcie = telefon.",
  },
  {
    id: "veterinario",
    name: "Gabinety weterynaryjne",
    slug: "strona-dla-weterynarza",
    image: "/veterinario.webp",
    headline: "Właściciele pupilów szukają 'weterynarz + miasto' w nagłych przypadkach",
    description: "Strona z dyżurami, numerem alarmowym i formularzem na wizytę. Pozycjonujesz się na frazy lokalne z intencją zakupową.",
  },
  {
    id: "trainer",
    name: "Trenerzy personalni",
    slug: "strona-dla-trenera-personalnego",
    image: "/trainer.webp",
    headline: "Klienci szukają 'trener personalny + miasto' — wyprzedź konkurencję",
    description: "Strona z Twoimi programami, opiniami klientów i kalendarzem treningów. Sprzedajesz, zanim odbierzesz pierwszy telefon.",
  },
]

const ROTATION_INTERVAL = 5000

export const SectorCarousel = ({ autoplay = true }: { autoplay?: boolean }) => {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sector = sectors[active]

  useEffect(() => {
    if (!autoplay || isPaused || sectors.length <= 1) return
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % sectors.length)
    }, ROTATION_INTERVAL)
    return () => clearInterval(id)
  }, [autoplay, isPaused])

  return (
    <Box
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      bg="#0F172A"
      boxShadow="0 24px 60px -20px rgba(15, 23, 42, 0.35)"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Branże, w których tworzymy strony"
    >
      <Flex direction={{ base: "column", md: "row" }} minH={{ base: "auto", md: "320px" }}>
        {/* Imagen */}
        <Box
          position="relative"
          w={{ base: "100%", md: "55%" }}
          h={{ base: "240px", md: "auto" }}
          minH={{ base: "240px", md: "320px" }}
          overflow="hidden"
          flexShrink={0}
        >
          <Image
            src={sector.image}
            alt={`Strona internetowa dla branży ${sector.name.toLowerCase()}`}
            width={800}
            height={600}
            loading="eager"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 400ms ease",
            }}
          />
          {/* Gradiente inferior solo en mobile */}
          <Box
            display={{ base: "block", md: "none" }}
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            h="80px"
            bgGradient="linear(to-t, blackAlpha.700, transparent)"
            pointerEvents="none"
          />
        </Box>

        {/* Texto */}
        <Flex
          direction="column"
          justify="center"
          p={{ base: "6", md: "10" }}
          color="white"
          flex="1"
        >
          <Text
            fontSize="10px"
            fontWeight="700"
            color="#A5B4FC"
            textTransform="uppercase"
            letterSpacing="0.14em"
            mb="3"
          >
            Branża {String(active + 1).padStart(2, "0")} / {String(sectors.length).padStart(2, "0")}
          </Text>
          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "26px" }}
            fontWeight="800"
            color="white"
            lineHeight="1.2"
            letterSpacing="-0.025em"
            mb="3"
          >
            {sector.headline}
          </Heading>
          <Text fontSize="sm" color="rgba(255,255,255,0.78)" lineHeight="1.6" mb="5">
            {sector.description}
          </Text>
          <Text fontSize="xs" color="#A5B4FC" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em">
            {sector.name}
          </Text>
        </Flex>
      </Flex>

      {/* Dots indicator */}
      <HStack
        position="absolute"
        bottom="3"
        left="50%"
        transform="translateX(-50%)"
        gap="1.5"
        zIndex="2"
      >
        {sectors.map((_, i) => (
          <Box
            key={i}
            as="button"
            type="button"
            aria-label={`Sektor ${i + 1}: ${sectors[i].name}`}
            onClick={() => setActive(i)}
            w={i === active ? "24px" : "8px"}
            h="8px"
            rounded="full"
            bg={i === active ? "white" : "rgba(255,255,255,0.4)"}
            cursor="pointer"
            transition="all 0.25s"
            _hover={{ bg: i === active ? "white" : "rgba(255,255,255,0.7)" }}
            _focusVisible={{ outline: "2px solid #A5B4FC", outlineOffset: "2px" }}
          />
        ))}
      </HStack>
    </Box>
  )
}

/** Export por si quieres usar el array de sectores desde otro lado */
export { sectors }
