import { Box, Container, Heading, List, Text, VStack } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SEO } from "../components/SEO"

type LegalSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

const privacySections: LegalSection[] = [
  {
    title: "Administrator danych",
    paragraphs: [
      "Administratorem danych osobowych jest Grow Solutions — jednoosobowa dzialalnosc gospodarcza (JDG) z siedziba w Ostrodie (14-100), ul. Czarnieckiego 13/12, NIP: 7412176947, REGON: 545084609, kontakt: kontakt@seogrow.pl.",
      "Dokument okresla zasady przetwarzania danych osobowych uzytkownikow serwisu, osob kontaktujacych sie z nami oraz klientow korzystajacych z formularzy i uslug SEO Grow.",
    ],
  },
  {
    title: "Zakres przetwarzanych danych",
    bullets: [
      "dane identyfikacyjne i kontaktowe przekazane w formularzach, w tym imie, adres e-mail, numer telefonu i dane firmy,",
      "dane dotyczace zapytania, briefu projektowego, zamowienia oraz historii kontaktu,",
      "dane techniczne niezbedne do bezpiecznego korzystania z serwisu, w tym informacje o urzadzeniu, przegladarce i preferencjach uzytkownika.",
    ],
  },
  {
    title: "Cele i podstawy prawne",
    bullets: [
      "udzielenie odpowiedzi na zapytanie i obsluga kontaktu na podstawie art. 6 ust. 1 lit. b lub f RODO,",
      "przygotowanie oferty, realizacja umowy i obsluga zamowienia na podstawie art. 6 ust. 1 lit. b RODO,",
      "wypelnienie obowiazkow prawnych, w tym rachunkowych i podatkowych, na podstawie art. 6 ust. 1 lit. c RODO,",
      "ustalenie, dochodzenie lub obrona roszczen oraz zapewnienie bezpieczenstwa serwisu na podstawie art. 6 ust. 1 lit. f RODO,",
      "prowadzenie dzialan analitycznych lub marketingowych wyłącznie po uzyskaniu odpowiedniej zgody, jezeli takie narzedzia zostana aktywowane.",
    ],
  },
  {
    title: "Prawa osoby, ktorej dane dotycza",
    paragraphs: [
      "Masz prawo dostepu do danych, ich sprostowania, usuniecia, ograniczenia przetwarzania, przenoszenia, wniesienia sprzeciwu oraz wycofania zgody, jezeli podstawą przetwarzania byla zgoda.",
      "Masz takze prawo wniesienia skargi do Prezesa Urzedu Ochrony Danych Osobowych, jezeli uznasz, ze przetwarzanie narusza przepisy RODO.",
    ],
  },
]

const cookieSections: LegalSection[] = [
  {
    title: "Czym sa pliki cookie",
    paragraphs: [
      "Pliki cookie i podobne technologie to niewielkie informacje zapisywane na urzadzeniu uzytkownika lub w pamieci przegladarki. Pomagaja one zapewnic prawidlowe dzialanie strony, zapamietac wybrane ustawienia oraz poprawiac jakosc serwisu.",
    ],
  },
  {
    title: "Kategorie wykorzystywanych technologii",
    bullets: [
      "niezbedne: wspieraja podstawowe funkcje strony, bezpieczenstwo i zapis decyzji dotyczacej zgody,",
      "funkcjonalne: zapamietuja preferencje interfejsu oraz ustawienia wygody korzystania z serwisu,",
      "analityczne: sluza do pomiaru ruchu, wydajnosci i korzystania z tresci, jezeli zostana wlaczone po uzyskaniu zgody,",
      "marketingowe: moga byc wykorzystywane do oceny skutecznosci kampanii i personalizacji reklam, jezeli zostana wdrozone i zaakceptowane.",
    ],
  },
  {
    title: "Jak zarzadzac zgoda",
    paragraphs: [
      "Przy pierwszej wizycie wyswietlamy baner zgody, ktory pozwala zaakceptowac wszystkie kategorie, wybrac tylko niezbedne lub dopasowac ustawienia.",
      "Decyzje mozna zmienic w dowolnym momencie, wybierajac opcje ustawien cookies w stopce strony.",
    ],
  },
  {
    title: "Aktualny stan wdrozenia",
    paragraphs: [
      "Na dzien publikacji serwis wykorzystuje przede wszystkim rozwiazania niezbedne oraz lokalny zapis preferencji przegladarki. Dodatkowe narzedzia analityczne lub marketingowe pozostaja nieaktywne do czasu ich wdrozenia i uzyskania odpowiedniej zgody.",
    ],
  },
]

const dataProcessingSections: LegalSection[] = [
  {
    title: "Zasady przetwarzania danych osobowych",
    paragraphs: [
      "Dane przekazane w formularzach kontaktowych, zamowieniach oraz komunikacji zwiazanej z wdrozeniem sa przetwarzane wyłącznie w zakresie niezbednym do obslugi zapytania, przygotowania oferty, realizacji umowy i dalszego kontaktu biznesowego.",
    ],
  },
  {
    title: "Odbiorcy danych i podmioty wspierajace",
    bullets: [
      "dostawcy hostingu, poczty elektronicznej i infrastruktury technicznej,",
      "narzedzia wspierajace obsluge formularzy, obiegu dokumentow i komunikacji z klientem,",
      "podmioty ksiegowe, prawne i platnicze, jezeli jest to wymagane dla realizacji uslugi lub obowiazkow prawnych.",
    ],
  },
  {
    title: "Okres przechowywania",
    bullets: [
      "dane kontaktowe i ofertowe przechowujemy przez czas niezbedny do obslugi sprawy oraz przez okres przedawnienia ewentualnych roszczen,",
      "dane zwiazane z realizacja umowy i rozliczeniami przechowujemy przez czas wymagany przepisami prawa,",
      "dane przetwarzane na podstawie zgody przechowujemy do czasu wycofania zgody lub ustania celu przetwarzania.",
    ],
  },
  {
    title: "Kontakt w sprawach danych",
    paragraphs: [
      "W sprawach zwiazanych z prywatnoscia i ochrona danych mozna skontaktowac sie z nami pod adresem kontakt@seogrow.pl. Kazde zgloszenie analizujemy bez zbednej zwloki i zgodnie z wymaganiami RODO.",
    ],
  },
]

const LegalLayout = ({
  title,
  description,
  path,
  intro,
  sections,
}: {
  title: string
  description: string
  path: string
  intro: string
  sections: LegalSection[]
}) => (
  <Box bg="#F8FAFC" minH="100vh">
    <SEO title={title} description={description} path={path} noindex={false} />
    <Header />
    <Box as="main" pt={{ base: "32", md: "40" }} pb={{ base: "16", md: "24" }}>
      <Container maxW="4xl">
        <VStack align="start" gap="6" mb="12">
          <Box
            px="3"
            py="1.5"
            rounded="full"
            bg="#EEF2FF"
            color="#3730A3"
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.04em"
            textTransform="uppercase"
          >
            Informacje prawne
          </Box>
          <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.05" letterSpacing="-0.04em">
            {title}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="#475569" lineHeight="1.8" maxW="3xl">
            {intro}
          </Text>
        </VStack>

        <VStack align="stretch" gap="6">
          {sections.map((section) => (
            <Box key={section.title} bg="white" rounded="3xl" border="1px solid" borderColor="#E2E8F0" p={{ base: "6", md: "8" }}>
              <VStack align="start" gap="4">
                <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} letterSpacing="-0.03em">
                  {section.title}
                </Heading>
                {section.paragraphs?.map((paragraph) => (
                  <Text key={paragraph} color="#475569" lineHeight="1.8">
                    {paragraph}
                  </Text>
                ))}
                {section.bullets && (
                  <List.Root gap="3" ps="5">
                    {section.bullets.map((bullet) => (
                      <List.Item key={bullet} color="#475569" lineHeight="1.8">
                        {bullet}
                      </List.Item>
                    ))}
                  </List.Root>
                )}
              </VStack>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
    <Footer />
  </Box>
)

export const PrivacyPolicyPage = () => (
  <LegalLayout
    title="Polityka prywatnosci"
    description="Zasady przetwarzania danych osobowych w SEO Grow, prawa uzytkownika oraz informacje o administratorze danych."
    path="/polityka-prywatnosci"
    intro="Dbamy o przejrzystosc i bezpieczenstwo danych. Ponizej wyjasniamy, jakie informacje zbieramy, w jakich celach je wykorzystujemy oraz jakie prawa przysluguja osobom korzystajacym z serwisu SEO Grow."
    sections={privacySections}
  />
)

export const CookiesPolicyPage = () => (
  <LegalLayout
    title="Polityka cookies"
    description="Informacje o plikach cookie, podobnych technologiach, kategoriach zgody i sposobach zarzadzania preferencjami."
    path="/polityka-cookies"
    intro="Niniejsza polityka wyjasnia, jak wykorzystujemy pliki cookie i podobne technologie, jakie kategorie danych moga byc zapisywane oraz jak mozesz zarzadzac swoja zgoda w serwisie SEO Grow."
    sections={cookieSections}
  />
)

export const DataProcessingPage = () => (
  <LegalLayout
    title="Zasady przetwarzania danych"
    description="Informacje o zakresie, celach, odbiorcach i czasie przechowywania danych przetwarzanych przez SEO Grow."
    path="/przetwarzanie-danych"
    intro="Przetwarzamy dane osobowe w sposob zgodny z RODO, adekwatny do celu i oparty na zasadzie minimalizacji. Ponizej znajdziesz informacje o odbiorcach danych, okresach przechowywania i procedurach kontaktu."
    sections={dataProcessingSections}
  />
)
