import { useState } from "react"
import { Box, Container, Heading, Text, VStack, HStack, Link as ChakraLink, Flex, Icon, Badge } from "@chakra-ui/react"
import { 
  FaArrowLeft, 
  FaRocket, 
  FaBook, 
  FaCog, 
  FaShieldAlt, 
  FaSearch, 
  FaMobileAlt, 
  FaPaintBrush,
  FaGlobe,
  FaEnvelope,
  FaChartLine,
  FaFileAlt,
  FaCheckCircle,
  FaChevronRight
} from "react-icons/fa"
import { SEO } from "../components/SEO"

const sidebarSections = [
  {
    title: "Rozpocznij",
    items: [
      { id: "overview", label: "Przegląd systemu" },
      { id: "quickstart", label: "Szybki start" },
    ]
  },
  {
    title: "Przewodniki",
    items: [
      { id: "editor", label: "Edytor wizualny" },
      { id: "seo", label: "SEO automatyczne" },
      { id: "pages", label: "Zarządzanie stronami" },
      { id: "blog", label: "Moduł bloga" },
    ]
  },
  {
    title: "Funkcje",
    items: [
      { id: "analytics", label: "Analityka" },
      { id: "domains", label: "Domeny i hosting" },
      { id: "security", label: "Bezpieczeństwo" },
      { id: "integrations", label: "Integracje" },
    ]
  },
  {
    title: "Referencja",
    items: [
      { id: "faq", label: "FAQ" },
      { id: "support", label: "Wsparcie techniczne" },
    ]
  }
]

const pageSections = [
  "Przegląd systemu",
  "Szybki start",
  "Edytor wizualny",
  "SEO automatyczne",
  "Zarządzanie stronami",
  "Moduł bloga",
  "Analityka",
  "Domeny i hosting",
  "Bezpieczeństwo",
  "Integracje",
  "FAQ",
  "Wsparcie techniczne"
]

export const SupportPage = () => {
  const [activeSection, setActiveSection] = useState("overview")

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const activeItem = sidebarSections.flatMap(s => s.items).find(item => item.id === activeSection)
  const dynamicTitle = activeItem ? `${activeItem.label} - Wsparcie | SEO Grow` : "Wsparcie i dokumentacja | SEO Grow";
  const dynamicDescription = activeItem ? `Dokumentacja SEO Grow: dowiedz się więcej o ${activeItem.label.toLowerCase()}. Przewodniki, funkcje i wsparcie techniczne dla użytkowników systemu.` : "Dokumentacja SEO Grow: szybki start, moduł bloga, SEO automatyczne, integracje, bezpieczeństwo i wsparcie techniczne dla użytkowników systemu.";

  return (
    <Box bg="#FAFBFC" minH="100vh">
      <SEO
        title={dynamicTitle}
        description={dynamicDescription}
        path="/wsparcie"
        image="/panel.webp"
        keywords={`wsparcie SEO Grow, dokumentacja CMS, ${activeItem?.label.toLowerCase() || 'SEO automatyczne'}, pomoc techniczna`}
        noindex={true}
      />
      {/* Top Header */}
      <Box bg="white" borderBottom="1px solid" borderColor="#E2E8F0" py="3" position="sticky" top="0" zIndex="100">
        <Container maxW="7xl">
          <Flex justify="space-between" align="center">
            <ChakraLink 
              href="/" 
              display="flex" 
              alignItems="center" 
              gap="2" 
              color="#64748B"
              _hover={{ color: "#0F172A" }}
              fontSize="sm"
              fontWeight="500"
            >
              <FaArrowLeft size={14} />
              <Text fontWeight="700" color="#0F172A">SEO Grow</Text>
              <Text color="#94A3B8">|</Text>
              <Text>Dokumentacja</Text>
            </ChakraLink>
            
            <HStack gap="6" display={{ base: "none", md: "flex" }}>
              <ChakraLink href="#" color="#64748B" fontSize="sm" _hover={{ color: "#0F172A" }}>
                Cennik
              </ChakraLink>
              <ChakraLink href="#" color="#64748B" fontSize="sm" _hover={{ color: "#0F172A" }}>
                Status systemu
              </ChakraLink>
              <ChakraLink 
                href="mailto:kontakt@seogrow.pl" 
                color="#16A34A" 
                fontSize="sm" 
                fontWeight="500"
                _hover={{ color: "#15803D" }}
              >
                Pomoc
              </ChakraLink>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="7xl" py="8">
        <Flex gap="8" align="start">
          {/* Left Sidebar */}
          <Box 
            w="240px" 
            flexShrink={0} 
            display={{ base: "none", lg: "block" }}
            position="sticky"
            top="80px"
          >
            <VStack align="stretch" gap="6">
              {sidebarSections.map((section, idx) => (
                <Box key={idx}>
                  <Text 
                    fontSize="xs" 
                    fontWeight="600" 
                    color="#94A3B8" 
                    textTransform="uppercase" 
                    letterSpacing="0.05em"
                    mb="2"
                  >
                    {section.title}
                  </Text>
                  <VStack align="stretch" gap="1">
                    {section.items.map((item) => (
                      <ChakraLink
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        px="3"
                        py="2"
                        rounded="md"
                        fontSize="sm"
                        fontWeight="500"
                        cursor="pointer"
                        bg={activeSection === item.id ? "#F0FDF4" : "transparent"}
                        color={activeSection === item.id ? "#16A34A" : "#64748B"}
                        _hover={{ 
                          bg: activeSection === item.id ? "#F0FDF4" : "#F1F5F9",
                          color: activeSection === item.id ? "#16A34A" : "#0F172A"
                        }}
                      >
                        {item.label}
                      </ChakraLink>
                    ))}
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Main Content */}
          <Box flex="1" maxW="3xl">
            {/* Overview Section */}
            <Box id="overview" mb="16" scrollMarginTop="100px">
              <Badge colorScheme="green" mb="4">Wprowadzenie</Badge>
              <Heading as="h1" fontSize="3xl" fontWeight="700" color="#0F172A" mb="4">
                Przegląd systemu SEO Grow
              </Heading>
              <Text fontSize="lg" color="#64748B" lineHeight="1.7" mb="6">
                SEO Grow to kompletny system CMS (Content Management System) z wbudowanym 
                automatycznym SEO technicznym. Twórz, edytuj i publikuj profesjonalne strony 
                internetowe bez znajomości kodu programowania.
              </Text>
              
              <Box bg="white" rounded="xl" border="1px solid" borderColor="#E2E8F0" p="6" mb="6">
                <Heading as="h3" fontSize="lg" fontWeight="600" color="#0F172A" mb="4">
                  <HStack gap="2">
                    <Icon as={FaRocket} color="#16A34A" />
                    <Text>Co zawiera system</Text>
                  </HStack>
                </Heading>
                <VStack align="stretch" gap="3">
                  <HStack gap="3">
                    <Icon as={FaCheckCircle} color="#16A34A" />
                    <Text color="#374151">Intuicyjny edytor wizualny typu drag-and-drop</Text>
                  </HStack>
                  <HStack gap="3">
                    <Icon as={FaCheckCircle} color="#16A34A" />
                    <Text color="#374151">Automatyczna optymalizacja SEO technicznego</Text>
                  </HStack>
                  <HStack gap="3">
                    <Icon as={FaCheckCircle} color="#16A34A" />
                    <Text color="#374151">Szybki hosting z 99.9% uptime</Text>
                  </HStack>
                  <HStack gap="3">
                    <Icon as={FaCheckCircle} color="#16A34A" />
                    <Text color="#374151">Domena .pl lub .com.pl w cenie</Text>
                  </HStack>
                  <HStack gap="3">
                    <Icon as={FaCheckCircle} color="#16A34A" />
                    <Text color="#374151">Certyfikat SSL wliczony w cenę</Text>
                  </HStack>
                  <HStack gap="3">
                    <Icon as={FaCheckCircle} color="#16A34A" />
                    <Text color="#374151">Analityka i statystyki w czasie rzeczywistym</Text>
                  </HStack>
                </VStack>
              </Box>
            </Box>

            {/* Quick Start Section */}
            <Box id="quickstart" mb="16" scrollMarginTop="100px">
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#0F172A" mb="4">
                Szybki start
              </Heading>
              <Text color="#64748B" mb="6">
                Rozpocznij pracę z SEO Grow w 3 prostych krokach. Cały proces zajmuje 
                mniej niż 10 minut.
              </Text>

              <VStack align="stretch" gap="4" mb="8">
                {[
                  { 
                    step: "1", 
                    title: "Rejestracja konta",
                    desc: "Wypełnij formularz rejestracyjny podając adres email i hasło. Potwierdź rejestrację klikając link w emailu."
                  },
                  { 
                    step: "2", 
                    title: "Wybór szablonu",
                    desc: "Przeglądaj dostępne szablony i wybierz ten, który najlepiej pasuje do Twojej branży. Każdy szablon jest w pełni responsywny."
                  },
                  { 
                    step: "3", 
                    title: "Pierwsza publikacja",
                    desc: "Dostosuj treści, dodaj logo i zdjęcia. Kliknij 'Opublikuj' - Twoja strona będzie dostępna w internecie natychmiast."
                  }
                ].map((item, idx) => (
                  <Box key={idx} bg="white" rounded="lg" border="1px solid" borderColor="#E2E8F0" p="5">
                    <HStack gap="4" align="start">
                      <Box 
                        w="10" 
                        h="10" 
                        bg="#F0FDF4" 
                        color="#16A34A"
                        rounded="lg"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="700"
                        fontSize="lg"
                        flexShrink={0}
                      >
                        {item.step}
                      </Box>
                      <Box>
                        <Text fontWeight="600" color="#0F172A" mb="1">{item.title}</Text>
                        <Text fontSize="sm" color="#64748B">{item.desc}</Text>
                      </Box>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* Editor Section */}
            <Box id="editor" mb="16" scrollMarginTop="100px">
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#0F172A" mb="4">
                <HStack gap="2">
                  <Icon as={FaPaintBrush} color="#16A34A" />
                  <Text>Edytor wizualny</Text>
                </HStack>
              </Heading>
              <Text color="#64748B" lineHeight="1.7" mb="6">
                Edytor SEO Grow działa jak zaawansowany dokument tekstowy. Dodawaj sekcje, 
                teksty, zdjęcia i inne elementy przeciągając je na stronę. Wszystkie zmiany 
                są widoczne natychmiast w podglądzie na żywo.
              </Text>

              <Box overflowX="auto" mb="6">
                <Box as="table" w="100%" bg="white" rounded="xl" border="1px solid" borderColor="#E2E8F0">
                  <Box as="thead" bg="#F8FAFC">
                    <Box as="tr">
                      <Box as="th" p="4" textAlign="left" fontSize="sm" fontWeight="600" color="#64748B">Element</Box>
                      <Box as="th" p="4" textAlign="left" fontSize="sm" fontWeight="600" color="#64748B">Opis</Box>
                      <Box as="th" p="4" textAlign="left" fontSize="sm" fontWeight="600" color="#64748B">Dostępność</Box>
                    </Box>
                  </Box>
                  <Box as="tbody">
                    {[
                      { el: "Sekcje tekstowe", desc: "Nagłówki, akapity, listy", avail: "Wszystkie plany" },
                      { el: "Multimedia", desc: "Zdjęcia, wideo, galerie", avail: "Wszystkie plany" },
                      { el: "Formularze", desc: "Kontakt, rezerwacje, zapisy", avail: "Standard, Pro" },
                      { el: "E-commerce", desc: "Produkty, koszyk, płatności", avail: "Pro" },
                      { el: "Blog", desc: "Artykuły, kategorie, tagi", avail: "Standard, Pro" },
                    ].map((row, idx) => (
                      <Box as="tr" key={idx} borderTop="1px solid" borderColor="#E2E8F0">
                        <Box as="td" p="4" fontSize="sm" fontWeight="500" color="#0F172A">{row.el}</Box>
                        <Box as="td" p="4" fontSize="sm" color="#64748B">{row.desc}</Box>
                        <Box as="td" p="4" fontSize="sm" color="#64748B">{row.avail}</Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* SEO Section */}
            <Box id="seo" mb="16" scrollMarginTop="100px">
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#0F172A" mb="4">
                <HStack gap="2">
                  <Icon as={FaSearch} color="#16A34A" />
                  <Text>SEO automatyczne</Text>
                </HStack>
              </Heading>
              <Text color="#64748B" lineHeight="1.7" mb="6">
                System automatycznie wykonuje optymalizację SEO technicznego bez Twojej 
                ingerencji. Skup się na tworzeniu treści, a resztą zajmiemy się my.
              </Text>

              <VStack align="stretch" gap="4">
                {[
                  { icon: FaSearch, title: "Meta tagi", desc: "Automatyczne generowanie tytułów i opisów dla każdej strony" },
                  { icon: FaFileAlt, title: "Mapa strony XML", desc: "Automatyczna aktualizacja sitemap.xml dla Google" },
                  { icon: FaMobileAlt, title: "Responsywność", desc: "Strona dostosowuje się do każdego urządzenia" },
                  { icon: FaRocket, title: "Szybkość ładowania", desc: "Optymalizacja Core Web Vitals, wynik 90+ w PageSpeed" },
                  { icon: FaShieldAlt, title: "SSL/HTTPS", desc: "Wymuszona obsługa bezpiecznego połączenia" },
                ].map((item, idx) => (
                  <Box key={idx} bg="white" rounded="lg" border="1px solid" borderColor="#E2E8F0" p="4">
                    <HStack gap="3" align="start">
                      <Box w="10" h="10" bg="#F0FDF4" rounded="lg" display="flex" alignItems="center" justifyContent="center" flexShrink={0}>
                        <Icon as={item.icon} color="#16A34A" />
                      </Box>
                      <Box>
                        <Text fontWeight="600" color="#0F172A">{item.title}</Text>
                        <Text fontSize="sm" color="#64748B">{item.desc}</Text>
                      </Box>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* Pages Management */}
            <Box id="pages" mb="16" scrollMarginTop="100px">
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#0F172A" mb="4">
                Zarządzanie stronami
              </Heading>
              <Text color="#64748B" lineHeight="1.7" mb="6">
                Twórz nieograniczoną liczbę podstron, zarządzaj ich strukturą i nawigacją. 
                System automatycznie aktualizuje menu i linki wewnętrzne.
              </Text>

              <Box bg="white" rounded="xl" border="1px solid" borderColor="#E2E8F0" p="6">
                <VStack align="stretch" gap="4">
                  <HStack justify="space-between">
                    <Text fontWeight="600" color="#0F172A">Strona główna</Text>
                    <Badge colorScheme="green">Opublikowana</Badge>
                  </HStack>
                  <Box borderLeft="2px solid" borderColor="#E2E8F0" pl="4">
                    <HStack justify="space-between">
                      <Text color="#374151">O nas</Text>
                      <Badge colorScheme="green">Opublikowana</Badge>
                    </HStack>
                  </Box>
                  <Box borderLeft="2px solid" borderColor="#E2E8F0" pl="4">
                    <HStack justify="space-between">
                      <Text color="#374151">Usługi</Text>
                      <Badge colorScheme="green">Opublikowana</Badge>
                    </HStack>
                  </Box>
                  <Box borderLeft="2px solid" borderColor="#E2E8F0" pl="4">
                    <VStack align="stretch" gap="2">
                      <HStack justify="space-between">
                        <Text color="#374151">Blog</Text>
                        <Badge colorScheme="green">Opublikowana</Badge>
                      </HStack>
                      <Box pl="4" borderLeft="2px solid" borderColor="#E2E8F0">
                        <Text fontSize="sm" color="#64748B">Jak zacząć z SEO</Text>
                        <Text fontSize="sm" color="#64748B">10 wskazówek dla początkujących</Text>
                      </Box>
                    </VStack>
                  </Box>
                  <HStack justify="space-between">
                    <Text color="#374151">Kontakt</Text>
                    <Badge colorScheme="green">Opublikowana</Badge>
                  </HStack>
                </VStack>
              </Box>
            </Box>

            {/* Blog Module */}
            <Box id="blog" mb="16" scrollMarginTop="100px">
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#0F172A" mb="4">
                Moduł bloga
              </Heading>
              <Text color="#64748B" lineHeight="1.7" mb="6">
                Prowadź firmowego bloga z pełnym wsparciem SEO. System automatycznie 
                generuje meta tagi, schema markup i optymalizuje obrazy.
              </Text>

              <Flex gap="4" flexWrap="wrap">
                {[
                  "Kategorie i tagi",
                  "Autorzy",
                  "Komentarze",
                  "Udostępnianie social",
                  "Newsletter",
                  "Powiadomienia"
                ].map((feature, idx) => (
                  <Badge key={idx} px="3" py="2" rounded="md" bg="#F0FDF4" color="#166534" fontWeight="500">
                    {feature}
                  </Badge>
                ))}
              </Flex>
            </Box>

            {/* Analytics */}
            <Box id="analytics" mb="16" scrollMarginTop="100px">
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#0F172A" mb="4">
                <HStack gap="2">
                  <Icon as={FaChartLine} color="#16A34A" />
                  <Text>Analityka</Text>
                </HStack>
              </Heading>
              <Text color="#64748B" lineHeight="1.7" mb="6">
                Monitoruj ruch na stronie w czasie rzeczywistym. Śledź źródła odwiedzin, 
                najpopularniejsze strony i zachowanie użytkowników.
              </Text>
            </Box>

            {/* Domains & Hosting */}
            <Box id="domains" mb="16" scrollMarginTop="100px">
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#0F172A" mb="4">
                <HStack gap="2">
                  <Icon as={FaGlobe} color="#16A34A" />
                  <Text>Domeny i hosting</Text>
                </HStack>
              </Heading>
              <Text color="#64748B" lineHeight="1.7" mb="6">
                Każdy plan zawiera domenę i hosting. Brak ukrytych kosztów, brak limitów 
                transferu. Strona działa szybko i niezawodnie 24/7.
              </Text>

              <Box as="table" w="100%" bg="white" rounded="xl" border="1px solid" borderColor="#E2E8F0" overflow="hidden">
                <Box as="thead" bg="#F8FAFC">
                  <Box as="tr">
                    <Box as="th" p="4" textAlign="left" fontSize="sm" fontWeight="600" color="#64748B">Funkcja</Box>
                    <Box as="th" p="4" textAlign="left" fontSize="sm" fontWeight="600" color="#64748B">Start</Box>
                    <Box as="th" p="4" textAlign="left" fontSize="sm" fontWeight="600" color="#64748B">Standard</Box>
                    <Box as="th" p="4" textAlign="left" fontSize="sm" fontWeight="600" color="#64748B">Pro</Box>
                  </Box>
                </Box>
                <Box as="tbody">
                  <Box as="tr" borderTop="1px solid" borderColor="#E2E8F0">
                    <Box as="td" p="4" fontSize="sm" color="#374151">Domena .pl/.com.pl</Box>
                    <Box as="td" p="4" fontSize="sm" color="#64748B">-</Box>
                    <Box as="td" p="4" fontSize="sm" color="#16A34A"><FaCheckCircle /></Box>
                    <Box as="td" p="4" fontSize="sm" color="#16A34A"><FaCheckCircle /></Box>
                  </Box>
                  <Box as="tr" borderTop="1px solid" borderColor="#E2E8F0">
                    <Box as="td" p="4" fontSize="sm" color="#374151">SSL (HTTPS)</Box>
                    <Box as="td" p="4" fontSize="sm" color="#16A34A"><FaCheckCircle /></Box>
                    <Box as="td" p="4" fontSize="sm" color="#16A34A"><FaCheckCircle /></Box>
                    <Box as="td" p="4" fontSize="sm" color="#16A34A"><FaCheckCircle /></Box>
                  </Box>
                  <Box as="tr" borderTop="1px solid" borderColor="#E2E8F0">
                    <Box as="td" p="4" fontSize="sm" color="#374151">CDN globalny</Box>
                    <Box as="td" p="4" fontSize="sm" color="#64748B">-</Box>
                    <Box as="td" p="4" fontSize="sm" color="#64748B">-</Box>
                    <Box as="td" p="4" fontSize="sm" color="#16A34A"><FaCheckCircle /></Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Security */}
            <Box id="security" mb="16" scrollMarginTop="100px">
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#0F172A" mb="4">
                <HStack gap="2">
                  <Icon as={FaShieldAlt} color="#16A34A" />
                  <Text>Bezpieczeństwo</Text>
                </HStack>
              </Heading>
              <Text color="#64748B" lineHeight="1.7" mb="6">
                Twoja strona jest chroniona na wielu poziomach. Automatyczne kopie zapasowe, 
                ochrona przed atakami DDoS i certyfikat SSL to standard.
              </Text>

              <VStack align="stretch" gap="3">
                {[
                  "Codzienne kopie zapasowe z 30-dniową retencją",
                  "Ochrona DDoS i firewall aplikacyjny (WAF)",
                  "Automatyczne aktualizacje bezpieczeństwa",
                  "Monitoring uptime 24/7",
                  "Zgodność z RODO/GDPR"
                ].map((item, idx) => (
                  <HStack key={idx} gap="3" bg="white" rounded="lg" border="1px solid" borderColor="#E2E8F0" p="3">
                    <Icon as={FaCheckCircle} color="#16A34A" />
                    <Text fontSize="sm" color="#374151">{item}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>

            {/* Integrations */}
            <Box id="integrations" mb="16" scrollMarginTop="100px">
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#0F172A" mb="4">
                <HStack gap="2">
                  <Icon as={FaCog} color="#16A34A" />
                  <Text>Integracje</Text>
                </HStack>
              </Heading>
              <Text color="#64748B" lineHeight="1.7" mb="6">
                Połącz SEO Grow z ulubionymi narzędziami. Google Analytics, Search Console, 
                Facebook Pixel i wiele innych.
              </Text>
            </Box>

            {/* FAQ Section */}
            <Box id="faq" mb="16" scrollMarginTop="100px">
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#0F172A" mb="6">
                Najczęściej zadawane pytania
              </Heading>
              
              <VStack align="stretch" gap="4">
                {[
                  {
                    q: "Czy potrzebuję umiejętności technicznych?",
                    a: "Nie. SEO Grow został zaprojektowany dla przedsiębiorców bez doświadczenia technicznego. Edytor działa jak dokument tekstowy."
                  },
                  {
                    q: "Jak szybko moja strona pojawi się w Google?",
                    a: "Typowo indeksacja trwa od 24 do 72 godzin od momentu opublikowania. System automatycznie generuje sitemap.xml i powiadamia Google."
                  },
                  {
                    q: "Czy mogę przenieść istniejącą stronę?",
                    a: "Nie przenosimy treści ręcznie. Domenę zostawiasz swoją, a treści budujesz od nowa w naszym CMS — to kilka godzin pracy, nie tygodni. W zamian masz czysty, zoptymalizowany system od pierwszego dnia."
                  },
                  {
                    q: "Czy mogę zrezygnować w dowolnym momencie?",
                    a: "Tak. Nie ma umów na czas określony ani kar. Anuluj subskrypcję w panelu klienta."
                  },
                  {
                    q: "Co się stanie z moją stroną po rezygnacji?",
                    a: "Strona pozostaje aktywna do końca okresu, potem jest archiwizowana. Możesz pobrać kopię zapasową."
                  }
                ].map((faq, idx) => (
                  <Box key={idx} bg="white" rounded="lg" border="1px solid" borderColor="#E2E8F0" p="5">
                    <Text fontWeight="600" color="#0F172A" mb="2">{faq.q}</Text>
                    <Text fontSize="sm" color="#64748B" lineHeight="1.6">{faq.a}</Text>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* Support Section */}
            <Box id="support" mb="16" scrollMarginTop="100px">
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#0F172A" mb="4">
                <HStack gap="2">
                  <Icon as={FaEnvelope} color="#16A34A" />
                  <Text>Wsparcie techniczne</Text>
                </HStack>
              </Heading>
              <Text color="#64748B" lineHeight="1.7" mb="6">
                Masz pytania lub potrzebujesz pomocy? Nasz zespół wsparcia jest dostępny 
                w języku polskim. Odpowiadamy zazwyczaj w ciągu 24 godzin.
              </Text>

              <Box bg="#F0FDF4" rounded="xl" p="6">
                <VStack align="start" gap="3">
                  <Text fontWeight="600" color="#166534">Kontakt</Text>
                  <Text color="#166534">Email: kontakt@seogrow.pl</Text>
                  <Text color="#166534">Czas odpowiedzi: do 24h (dni robocze)</Text>
                  <Text color="#166534">Plan Premium: priorytetowe wsparcie do 4h (telefon + czat)</Text>
                </VStack>
              </Box>
            </Box>

          </Box>

          {/* Right Sidebar - On this page */}
          <Box 
            w="200px" 
            flexShrink={0} 
            display={{ base: "none", xl: "block" }}
            position="sticky"
            top="80px"
          >
            <Text 
              fontSize="xs" 
              fontWeight="600" 
              color="#94A3B8" 
              textTransform="uppercase" 
              letterSpacing="0.05em"
              mb="3"
            >
              Na tej stronie
            </Text>
            <VStack align="stretch" gap="1">
              {pageSections.map((section) => (
                <ChakraLink
                  key={section}
                  fontSize="sm"
                  color="#64748B"
                  _hover={{ color: "#16A34A" }}
                  cursor="pointer"
                  onClick={() => {
                    const id = sidebarSections.flatMap(s => s.items).find(i => i.label === section)?.id
                    if (id) scrollToSection(id)
                  }}
                >
                  <HStack gap="1">
                    <Text>{section}</Text>
                  </HStack>
                </ChakraLink>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box bg="white" borderTop="1px solid" borderColor="#E2E8F0" py="8" mt="16">
        <Container maxW="6xl">
          <Text fontSize="sm" color="#94A3B8" textAlign="center">
            © 2026 Grow Solutions — JDG · NIP: 7412176947 · REGON: 545084609 · ul. Czarnieckiego 13/12, 14-100 Ostróda
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
