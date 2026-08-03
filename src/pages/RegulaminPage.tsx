// src/pages/RegulaminPage.tsx
// Regulamin sklepu / Terms of service for SEO Grow.
// Uslugodawca: MARTYNA CIEŚNIEWSKA GROW SOLUTIONS (JDG, NIP 7412176947, REGON 545084609).
// Marka serwisu: SEO Grow.
// Requerido por Tpay (procesador de pagos) y por la ley polaca de venta online.

import { Box, Container, Heading, Text, VStack, HStack, Link as ChakraLink } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SEO } from "../components/SEO"

type Section = {
  id: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
  intro?: string
}

const SECTIONS: Section[] = [
  {
    id: "postanowienia-ogolne",
    title: "1. Postanowienia ogólne",
    paragraphs: [
      "Niniejszy regulamin określa zasady świadczenia usług drogą elektroniczną przez MARTYNA CIEŚNIEWSKA GROW SOLUTIONS — jednoosobową działalność gospodarczą (JDG) z siedzibą w Ostródzie (14-100), ul. Czarnieckiego 13/12, NIP: 7412176947, REGON: 545084609, adres e-mail: kontakt@seogrow.pl, numer telefonu: +48 517 105 423. Marką handlową serwisu jest SEO Grow.",
      "Usługi świadczone przez MARTYNA CIEŚNIEWSKA GROW SOLUTIONS obejmują w szczególności: projektowanie i tworzenie stron internetowych, ich hosting, obsługę techniczną oraz usługi powiązane (dalej łącznie: \"Usługi\"). Usługi oferowane są pod marką SEO Grow.",
      "Akceptacja regulaminu jest dobrowolna, ale niezbędna do złożenia zamówienia. Złożenie zamówienia oznacza akceptację niniejszego regulaminu w całości.",
    ],
  },
  {
    id: "definicje",
    title: "2. Definicje",
    bullets: [
      "Sprzedawca / Usługodawca — MARTYNA CIEŚNIEWSKA GROW SOLUTIONS, jednoosobowa działalność gospodarcza, NIP: 7412176947, REGON: 545084609. Marka handlowa: SEO Grow.",
      "Klient / Kupujący — osoba fizyczna posiadająca pełną zdolność do czynności prawnych, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, zawierająca umowę ze Sprzedawcą.",
      "Usługa — strona internetowa lub inna usługa cyfrowa świadczona przez Usługodawcę pod marką SEO Grow, opisana w ofercie na stronie seogrow.pl.",
      "Panel CMS — narzędzie do samodzielnej edycji treści strony udostępniane Klientowi po realizacji.",
      "Cennik — zestawienie cen Usług dostępne na stronie /cennik oraz w sekcji \„Trzy plany\„ na stronie głównej.",
    ],
  },
  {
    id: "przedmiot",
    title: "3. Przedmiot umowy",
    paragraphs: [
      "Przedmiotem umowy jest wykonanie strony internetowej zgodnie z wybranym planem (Start, Premium, Pro) oraz świadczenie obsługi technicznej obejmującej: hosting, certyfikat SSL, dostęp do Panelu CMS, aktualizacje bezpieczeństwa oraz wsparcie techniczne w języku polskim.",
      "Szczegółowy zakres Usługi (liczba podstron, moduły, czas realizacji, cena jednorazowa oraz opłata miesięczna) określony jest w Cenniku obowiązującym w chwili złożenia zamówienia.",
      "Usługa realizowana jest zdalnie — Klient nie musi przyjeżdżać do siedziby Sprzedawcy. Cała komunikacja odbywa się telefonicznie, mailowo lub poprzez Panel CMS.",
    ],
  },
  {
    id: "zawarcie",
    title: "4. Zawarcie umowy i płatność",
    paragraphs: [
      "Umowa zostaje zawarta z chwilą potwierdzenia zamówienia przez Sprzedawcę, po czym następuje 15-minutowa rozmowa wstępna ustalająca szczegóły.",
      "Klient otrzymuje dostęp do Panelu CMS, dane dostępowe do domeny (jeśli dotyczy) oraz potwierdzenie opublikowania strony w ciągu 5 dni roboczych od zaakceptowania briefu.",
      "Ceny wyrażone są w złotych polskich (PLN) i zawierają podatek VAT (stawka 23%). Na każdą płatność wystawiana jest faktura VAT, przesyłana na adres e-mail wskazany przez Klienta w zamówieniu.",
      "Obsługiwane metody płatności: BLIK, karta płatnicza (Visa, Mastercard), przelew tradycyjny. Operatorem płatności elektronicznych jest Tpay (Krajowa Instytucja Płatnicza, nadzorowana przez Komisję Nadzoru Finansowego).",
    ],
  },
  {
    id: "realizacja",
    title: "5. Realizacja usługi i dostawa",
    paragraphs: [
      "Realizacja strony internetowej następuje w terminie do 5 dni roboczych od zaakceptowania briefu przez Klienta i dostarczenia niezbędnych materiałów (tekst, zdjęcia, dane firmy).",
      "Dostarczenie gotowej strony następuje poprzez publikację na wskazanej domenie oraz przekazanie Klientowi danych dostępowych do Panelu CMS.",
      "Opóźnienia w dostarczeniu materiałów przez Klienta wydłużają termin realizacji proporcjonalnie do czasu opóźnienia.",
      "Hosting i domena są aktywne od momentu publikacji strony i odnawiane automatycznie co 12 miesięcy (domena) lub w cyklach miesięcznych (hosting w ramach opłaty miesięcznej).",
    ],
  },
  {
    id: "odstapienie",
    title: "6. Prawo odstąpienia od umowy",
    paragraphs: [
      "Zgodnie z art. 38 ustawy o prawach konsumenta (Dz.U. 2014 poz. 827), prawo odstąpienia od umowy zawartej na odległość NIE przysługuje konsumentowi w przypadku umowy o świadczenie usług, jeżeli Sprzedawca wykonał usługę w pełni za wyraźną zgodą konsumenta, który został poinformowany przed rozpoczęciem świadczenia, że po spełnieniu świadczenia utraci prawo odstąpienia.",
      "Klient wyraża taką zgodę w procesie zamówienia (checkbox akceptacji regulaminu oraz wyraźna zgoda na rozpoczęcie świadczenia przed upływem 14-dniowego terminu odstąpienia).",
      "Jeżeli Usługa nie została jeszcze rozpoczęta, Klient może odstąpić od umowy w terminie 14 dni od daty zawarcia — wystarczy wysłać oświadczenie na adres kontakt@seogrow.pl.",
    ],
  },
  {
    id: "rezygnacja",
    title: "7. Rezygnacja z obsługi miesięcznej",
    paragraphs: [
      "Klient może zrezygnować z miesięcznej obsługi (hosting, SSL, wsparcie techniczne) w dowolnym momencie — bez podawania przyczyny i bez konsekwencji finansowych.",
      "Rezygnacja wymaga jedynie wysłania oświadczenia na adres kontakt@seogrow.pl, w wiadomości SMS na numer +48 517 105 423 lub telefonicznie w dni robocze w godzinach 9:00–17:00.",
      "Opłata miesięczna przestaje być naliczana od następnego okresu rozliczeniowego. Strona internetowa pozostaje własnością Klienta — Sprzedawca nie ma prawa do jej zablokowania, usunięcia ani ograniczenia dostępu po zakończeniu współpracy.",
      "Na życzenie Klienta Sprzedawca eksportuje pełną kopię strony (pliki + baza danych) i dostarcza ją w ciągu 7 dni roboczych.",
    ],
  },
  {
    id: "reklamacje",
    title: "8. Reklamacje i gwarancja",
    paragraphs: [
      "Klient ma prawo złożyć reklamację w przypadku niezgodności Usługi z umową. Reklamacja powinna zawierać: imię i nazwisko / nazwę firmy, adres e-mail, opis problemu oraz oczekiwane rozwiązanie.",
      "Reklamacje można zgłaszać: mailowo na kontakt@seogrow.pl, telefonicznie pod +48 517 105 423 lub pisemnie na adres siedziby Sprzedawcy.",
      "Sprzedawca rozpatruje reklamację w terminie 14 dni od daty jej otrzymania. Jeżeli rozpatrzenie reklamacji wymaga dodatkowego czasu, Sprzedawca poinformuje Klienta o przewidywanym terminie odpowiedzi.",
      "Usługa objęta jest gwarancją jakości przez cały okres trwania umowy. W ramach gwarancji Sprzedawca usuwa błędy techniczne i aktualizuje certyfikat SSL bezpłatnie.",
    ],
  },
  {
    id: "odpowiedzialnosc",
    title: "9. Odpowiedzialność",
    paragraphs: [
      "Sprzedawca dokłada należytej staranności, aby Usługa była świadczona w sposób ciągły i bezpieczny. Sprzedawca nie ponosi odpowiedzialności za szkody wynikające z okoliczności niezależnych od niego, w szczególności: przerw w dostawie prądu u Klienta, ataków hakerskich na infrastrukturę Klienta, błędów w treściach dostarczonych przez Klienta.",
      "Sprzedawca nie ponosi odpowiedzialności za decyzje biznesowe Klienta podjęte na podstawie działania strony internetowej (np. brak klientów, niska konwersja), o ile strona została wykonana zgodnie z briefem i specyfikacjami.",
      "Maksymalna odpowiedzialność Sprzedawcy z tytułu nienależytego wykonania Usługi ograniczona jest do wysokości wynagrodzenia zapłaconego przez Klienta w ciągu ostatnich 3 miesięcy.",
    ],
  },
  {
    id: "dane-osobowe",
    title: "10. Ochrona danych osobowych",
    paragraphs: [
      "Administratorem danych osobowych Klienta jest MARTYNA CIEŚNIEWSKA GROW SOLUTIONS (NIP 7412176947, REGON 545084609). Marka handlowa serwisu to SEO Grow. Szczegółowe zasady przetwarzania danych znajdują się w Polityce Prywatności (/polityka-prywatnosci).",
      "Podanie danych osobowych jest dobrowolne, ale niezbędne do realizacji umowy. Klient ma prawo dostępu do swoich danych, ich sprostowania, usunięcia oraz wniesienia sprzeciwu wobec przetwarzania.",
      "Dane płatności (numer karty) są przetwarzane wyłącznie przez operatora płatności Tpay — Sprzedawca nie przechowuje ani nie ma dostępu do pełnych danych kart płatniczych.",
    ],
  },
  {
    id: "postanowienia-koncowe",
    title: "11. Postanowienia końcowe",
    paragraphs: [
      "W sprawach nieuregulowanych niniejszym regulaminem stosuje się przepisy prawa polskiego, w szczególności: Kodeksu cywilnego, ustawy o prawach konsumenta, ustawy o świadczeniu usług drogą elektroniczną oraz RODO.",
      "Spory wynikające z umowy Strony będą starały się rozwiązać polubownie. W przypadku braku porozumienia, spór zostanie poddany pod rozstrzygnięcie sądu właściwego dla siedziby Sprzedawcy, z zastrzeżeniem przepisów o właściwości sądów dla konsumentów.",
      "Klient będący konsumentem ma prawo skorzystać z platformy ODR (Online Dispute Resolution) dostępnej pod adresem https://ec.europa.eu/consumers/odr/.",
      "Sprzedawca zastrzega sobie prawo do zmian regulaminu z ważnych przyczyn (zmiana przepisów, rozwój usług). O zmianach Klient zostanie poinformowany co najmniej 14 dni przed ich wejściem w życie. Zmiany nie dotyczą umów zawartych przed ich wejściem w życie.",
    ],
  },
]

const TOC: { id: string; label: string }[] = SECTIONS.map((s) => ({
  id: s.id,
  label: s.title.replace(/^\d+\.\s*/, ""),
}))

export const RegulaminPage = () => {
  return (
    <Box bg="#FAFBFC" minH="100vh">
      <SEO
        title="Regulamin sklepu i usług | SEO Grow"
        description="Regulamin świadczenia usług przez MARTYNA CIEŚNIEWSKA GROW SOLUTIONS (NIP 7412176947, REGON 545084609), marka SEO Grow. Prawa i obowiązki Klienta oraz Sprzedawcy, polityka zwrotów, reklamacji, ochrona danych."
        path="/regulamin"
        keywords="regulamin, regulamin sklepu, warunki świadczenia usług, polityka zwrotów, MARTYNA CIEŚNIEWSKA GROW SOLUTIONS, SEO Grow"
      />
      <Header />

      <Box as="main" id="main-content" tabIndex={-1} outline="none">
        {/* Hero */}
        <Box bg="white" borderBottom="1px solid" borderColor="border.default" pt={{ base: "12", md: "16" }} pb={{ base: "8", md: "10" }}>
          <Container maxW="3xl">
            <VStack gap="3" align="flex-start">
              <Text
                fontSize="xs"
                fontWeight="700"
                color="accent.600"
                letterSpacing="0.14em"
                textTransform="uppercase"
              >
                Regulamin
              </Text>
              <Heading as="h1" fontSize={{ base: "28px", md: "36px" }} fontWeight="800" color="fg.default" letterSpacing="-0.025em" lineHeight="1.15">
                Regulamin sklepu i usług
              </Heading>
              <Text color="fg.muted" fontSize="md" lineHeight="1.6">
                Zasady świadczenia usług przez MARTYNA CIEŚNIEWSKA GROW SOLUTIONS (NIP 7412176947, REGON 545084609) obowiązujące od 2026 roku. Marka handlowa: SEO Grow. Płatności obsługiwane przez Tpay (KNF).
              </Text>
              <Text fontSize="sm" color="fg.faint" mt="2">
                Ostatnia aktualizacja: 24 lipca 2026
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Content */}
        <Container maxW="3xl" py={{ base: "10", md: "14" }}>
          {/* Tabla de contenidos */}
          <Box
            bg="white"
            border="1px solid"
            borderColor="border.default"
            borderRadius="xl"
            p={{ base: "5", md: "6" }}
            mb="10"
          >
            <Text fontSize="xs" fontWeight="700" color="fg.subtle" textTransform="uppercase" letterSpacing="0.12em" mb="3">
              Spis treści
            </Text>
            <VStack align="stretch" gap="1.5">
              {TOC.map((item) => (
                <ChakraLink
                  key={item.id}
                  href={`#${item.id}`}
                  color="fg.default"
                  fontSize="sm"
                  fontWeight="500"
                  textDecoration="none"
                  _hover={{ color: "accent.600" }}
                  transition="color 0.15s"
                >
                  {item.title} {item.label}
                </ChakraLink>
              ))}
            </VStack>
          </Box>

          {/* Secciones */}
          <VStack gap={{ base: "10", md: "12" }} align="stretch">
            {SECTIONS.map((section) => (
              <Box
                key={section.id}
                id={section.id}
                bg="white"
                border="1px solid"
                borderColor="border.default"
                borderRadius="xl"
                p={{ base: "6", md: "8" }}
                scrollMarginTop="80px"
              >
                <Heading
                  as="h2"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="800"
                  color="fg.default"
                  letterSpacing="-0.015em"
                  lineHeight="1.3"
                  mb="4"
                >
                  {section.title}
                </Heading>

                {section.paragraphs?.map((p, i) => (
                  <Text key={i} color="slate.700" fontSize="sm" lineHeight="1.7" mb={i < (section.paragraphs?.length ?? 0) - 1 ? "3" : "0"}>
                    {p}
                  </Text>
                ))}

                {section.bullets && (
                  <Box as="ul" mt={section.paragraphs ? "4" : "0"} pl="5" style={{ listStyleType: "disc" }}>
                    {section.bullets.map((b, i) => (
                      <Box
                        as="li"
                        key={i}
                        color="slate.700"
                        fontSize="sm"
                        lineHeight="1.7"
                        mb="2"
                      >
                        {b}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </VStack>

          {/* Footer legal box */}
          <Box
            mt="12"
            bg="accent.50"
            border="1px solid accent.200"
            borderRadius="xl"
            p={{ base: "6", md: "8" }}
          >
            <VStack gap="2" align="flex-start">
              <Text fontWeight="800" color="fg.default" fontSize="md">
                Masz pytania dotyczące regulaminu?
              </Text>
              <Text color="fg.muted" fontSize="sm" lineHeight="1.6">
                Skontaktuj się z nami przed złożeniem zamówienia — chętnie wyjaśnimy każdy punkt.
              </Text>
              <HStack gap="4" flexWrap="wrap" pt="2">
                <ChakraLink href="tel:+48517105423" color="accent.600" fontWeight="700" fontSize="sm" textDecoration="none" _hover={{ textDecoration: "underline" }}>
                  517 105 423
                </ChakraLink>
                <ChakraLink href="mailto:kontakt@seogrow.pl" color="accent.600" fontWeight="700" fontSize="sm" textDecoration="none" _hover={{ textDecoration: "underline" }}>
                  kontakt@seogrow.pl
                </ChakraLink>
              </HStack>
            </VStack>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

export default RegulaminPage

