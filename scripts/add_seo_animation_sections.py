"""
Script que añade la sección "Dlaczego SEO lokalne jest kluczowe..." con imageAnimation
(3 queries rotando) a las landings Tier 1 + VerticalPages + ServicePages + CityPages
que no la tienen.

Para cada landing, el script:
1. Lee el archivo
2. Encuentra el array sections y le añade una nueva sección al final
3. La sección tiene imageAnimation con 3 queries + 2 competitors
"""
from pathlib import Path
import re

# Mapeo completo: path -> datos de la landing
# queries = 3 variantes de búsqueda que rotan
# your = sitio del cliente
# c1, c2 = 2 competidores
LANDINGS = {
    # CityPages (4 ciudades) — sección "Dlaczego SEO lokalne" + animación
    '/strona-internetowa-warszawa': {
        'file': 'src/pages/CityPages.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla firmy w Warszawie',
        'content': 'Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś w Warszawie szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Klient szuka w Google — gotowy do kontaktu',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę firmy na lata',
        ],
        'queries': [
            'firma remontowa Warszawa',
            'remonty mieszkań Warszawa',
            'ekipa remontowa Warszawa',
        ],
        'your': {
            'domain': 'twoja-firma-warszawa.pl',
            'title': 'Twoja Firma — Remonty i Wykończenia Warszawa | Mokotów',
            'description': 'Firma remontowa z Warszawy. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 10 lat doświadczenia, 200+ projektów.',
        },
        'c1': { 'domain': 'remonty-express-waw.pl', 'title': 'Remonty Warszawa — Express Remonty 24h', 'description': 'Firma remontowa z Warszawy. Remonty mieszkań, łazienek, biur. Bezpłatna wycena, szybka realizacja.' },
        'c2': { 'domain': 'budrem-warszawa.pl', 'title': 'Budrem Warszawa — Remonty i Wykończenia', 'description': 'Firma budowlana z Warszawy. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
    },
    '/strona-internetowa-krakow': {
        'file': 'src/pages/CityPages.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla firmy w Krakowie',
        'content': 'Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś w Krakowie szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Klient szuka w Google — gotowy do kontaktu',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę firmy na lata',
        ],
        'queries': ['firma remontowa Kraków', 'remonty mieszkań Kraków', 'ekipa remontowa Kraków'],
        'your': { 'domain': 'twoja-firma-krakow.pl', 'title': 'Twoja Firma — Remonty i Wykończenia Kraków | Podgórze', 'description': 'Firma remontowa z Krakowa. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 8 lat doświadczenia, 150+ projektów.' },
        'c1': { 'domain': 'remonty-krakow-express.pl', 'title': 'Remonty Kraków — Express Remonty 24h', 'description': 'Firma remontowa z Krakowa. Remonty mieszkań, łazienek, biur. Szybka realizacja.' },
        'c2': { 'domain': 'budrem-krakow.pl', 'title': 'Budrem Kraków — Remonty i Wykończenia', 'description': 'Firma budowlana z Krakowa. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
    },
    '/strona-internetowa-lodz': {
        'file': 'src/pages/CityPages.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla firmy w Łodzi',
        'content': 'Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś w Łodzi szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Klient szuka w Google — gotowy do kontaktu',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę firmy na lata',
        ],
        'queries': ['firma remontowa Łódź', 'remonty mieszkań Łódź', 'ekipa remontowa Łódź'],
        'your': { 'domain': 'twoja-firma-lodz.pl', 'title': 'Twoja Firma — Remonty i Wykończenia Łódź | Widzew', 'description': 'Firma remontowa z Łodzi. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 7 lat doświadczenia, 120+ projektów.' },
        'c1': { 'domain': 'remonty-lodz-express.pl', 'title': 'Remonty Łódź — Express Remonty 24h', 'description': 'Firma remontowa z Łodzi. Remonty mieszkań, łazienek, biur. Szybka realizacja.' },
        'c2': { 'domain': 'budrem-lodz.pl', 'title': 'Budrem Łódź — Remonty i Wykończenia', 'description': 'Firma budowlana z Łodzi. Kompleksowe remonty, prace wykończeniowe, instalacje.' },
    },
    '/strona-internetowa-wroclaw': {
        'file': 'src/pages/CityPages.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla firmy we Wrocławiu',
        'content': 'Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś we Wrocławiu szuka tego, co robisz — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Klient szuka w Google — gotowy do kontaktu',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę firmy na lata',
        ],
        'queries': ['firma budowlana Wrocław', 'budowa domu Wrocław', 'ekipa budowlana Wrocław'],
        'your': { 'domain': 'twoja-firma-wroclaw.pl', 'title': 'Twoja Firma — Budowa i Remonty Wrocław | Krzyki', 'description': 'Firma budowlana z Wrocławia. Budowy domów, remonty mieszkań, prace wykończeniowe. 12 lat doświadczenia, 200+ projektów.' },
        'c1': { 'domain': 'budrem-wroclaw.pl', 'title': 'Budrem Wrocław — Budowy i Remonty', 'description': 'Firma budowlana z Wrocławia. Budowy domów, remonty mieszkań. 15 lat doświadczenia.' },
        'c2': { 'domain': 'remonty-wroclaw-express.pl', 'title': 'Remonty Wrocław — Express Remonty 24h', 'description': 'Firma remontowa z Wrocławia. Szybka realizacja, ponad 300 pozytywnych opinii.' },
    },
    # ServicePages (3)
    '/pozycjonowanie-stron-dla-firm': {
        'file': 'src/pages/ServicePages.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla Twojej firmy',
        'content': 'Klient, który szuka Twojej usługi w Google, jest gotowy do kontaktu. SEO lokalne sprawia, że Twoja firma pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka tego, co oferujesz — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Klient szuka w Google — gotowy do kontaktu',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę firmy na lata',
        ],
        'queries': ['firma SEO Wrocław', 'agencja SEO Polska', 'pozycjonowanie stron cena'],
        'your': { 'domain': 'twoja-agencja-seo.pl', 'title': 'Twoja Agencja SEO — Pozycjonowanie stron Wrocław', 'description': 'Agencja SEO z Wrocławia. Comiesięczne pozycjonowanie stron, optymalizacja techniczna i treści. Raporty widoczności w Google.' },
        'c1': { 'domain': 'agencja-seo-wroclaw.pl', 'title': 'Agencja SEO Wrocław — Pozycjonowanie Stron', 'description': 'Profesjonalna agencja SEO z Wrocławia. Pozycjonowanie stron, optymalizacja techniczna, link building.' },
        'c2': { 'domain': 'seo-wroclaw.com', 'title': 'SEO Wrocław — Skuteczne Pozycjonowanie', 'description': 'Firma SEO z Wrocławia. Kompleksowe pozycjonowanie stron, content marketing, analityka.' },
    },
    '/tania-strona-internetowa-dla-firmy': {
        'file': 'src/pages/ServicePages.tsx',
        'heading': 'Dlaczego warto wybrać tanią stronę z prawdziwym SEO',
        'content': 'Tania strona bez SEO to wyrzucone pieniądze. SEO lokalne sprawia, że Twoja strona pojawia się w Google, gdy klient szuka Twojej usługi — tania strona z SEO to inwestycja, nie wydatek.',
        'highlights': [
            'Tania strona + SEO = klienci z Google',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Jeden klient zwraca koszt strony na lata',
            'Profesjonalna, tania, bez utraty jakości',
        ],
        'queries': ['tania strona internetowa dla firmy', 'tania strona www dla firmy', 'strona internetowa dla firmy tanio'],
        'your': { 'domain': 'tania-strona-firmowa.pl', 'title': 'Tania Strona Firmowa — Strony dla Firm od 49 zł/mies.', 'description': 'Tania strona internetowa dla małej firmy od 49 zł miesięcznie. Profesjonalna, edycja z telefonu, SEO w cenie.' },
        'c1': { 'domain': 'taniastr.pl', 'title': 'TaniaStr.pl — Strony Internetowe od 300 zł', 'description': 'Tanie strony internetowe dla firm. Realizacja w 3 dni, płatność jednorazowa. Ponad 500 stron.' },
        'c2': { 'domain': 'strony-firmowe-tanio.pl', 'title': 'Strony Firmowe Tanio — Realizacja 24h', 'description': 'Tanie strony dla małych firm. Realizacja w 24h, płatność jednorazowa.' },
    },
    '/obsluga-strony-internetowej': {
        'file': 'src/pages/ServicePages.tsx',
        'heading': 'Dlaczego warto powierzyć obsługę strony specjalistom',
        'content': 'Strona bez regularnej obsługi traci pozycje w Google. Comiesięczna obsługa sprawia, że Twoja strona jest zawsze aktualna, działa szybko i pojawia się w wynikach, gdy klient szuka Twojej usługi.',
        'highlights': [
            'Strona zawsze aktualna i działająca',
            'Widoczność w Google rośnie z miesiąca na miesiąc',
            'Ty prowadzisz firmę, my dbamy o stronę',
            'Bez stresu, bez umowy',
        ],
        'queries': ['obsługa strony internetowej dla firmy', 'administracja strony internetowej', 'opieka nad stroną www'],
        'your': { 'domain': 'obsluga-stron-firmowych.pl', 'title': 'Obsługa Stron Firmowych — Aktualizacje i Wsparcie', 'description': 'Comiesięczna obsługa strony internetowej: aktualizacje treści, poprawki techniczne, drobne zmiany.' },
        'c1': { 'domain': 'administracja-stron.pl', 'title': 'Administracja Stron WWW — Aktualizacje i Wsparcie', 'description': 'Profesjonalna administracja stron internetowych. Aktualizacje treści, poprawki techniczne, monitoring.' },
        'c2': { 'domain': 'opieka-nad-strona.pl', 'title': 'Opieka nad Stroną Internetową — Pakiety Miesięczne', 'description': 'Comiesięczna opieka nad stroną WWW. Aktualizacje CMS, poprawki, wsparcie techniczne.' },
    },
    # VerticalPages (4)
    '/strona-dla-prawnika': {
        'file': 'src/pages/VerticalPages.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla kancelarii',
        'content': 'Klient, który szuka prawnika w Google, jest gotowy na rozmowę. SEO lokalne sprawia, że Twoja kancelaria pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka prawnika — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Klient szuka prawnika — gotowy na rozmowę',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę kancelarii na lata',
        ],
        'queries': ['adwokat Warszawa', 'prawnik Warszawa', 'kancelaria prawna Warszawa'],
        'your': { 'domain': 'kancelaria-prawnik-warszawa.pl', 'title': 'Kancelaria Adwokacka — Prawnik Warszawa Centrum', 'description': 'Kancelaria adwokacka w centrum Warszawy. Prawo cywilne, karne, rodzinne, gospodarcze. Bezpłatna konsultacja wstępna.' },
        'c1': { 'domain': 'prawnik-warszawa.com', 'title': 'Prawnik Warszawa — Kancelaria 24h', 'description': 'Kancelaria prawna w Warszawie. Prawo cywilne, karne, rodzinne. Konsultacje w dniu zgłoszenia.' },
        'c2': { 'domain': 'adwokat-waw.pl', 'title': 'Adwokat Warszawa — Kancelaria Prawna', 'description': 'Kancelaria adwokacka w Warszawie. Specjalizacja: prawo spadkowe, rodzinne, nieruchomości.' },
    },
    '/strona-dla-kliniki': {
        'file': 'src/pages/VerticalPages.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla kliniki',
        'content': 'Pacjent, który szuka lekarza w Google, jest gotowy na wizytę. SEO lokalne sprawia, że Twoja klinika pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka lekarza — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Pacjent szuka lekarza — gotowy na wizytę',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę kliniki na lata',
        ],
        'queries': ['lekarz rodzinny Mokotów', 'przychodnia Mokotów', 'lekarz Mokotów'],
        'your': { 'domain': 'klinika-moja-rodzina.pl', 'title': 'Klinika Moja Rodzina — Lekarz Rodzinny Mokotów', 'description': 'Klinika medyczna na Mokotowie. Lekarz rodzinny, pediatria, internista. Rejestracja online, krótkie terminy.' },
        'c1': { 'domain': 'przychodnia-mokotow.pl', 'title': 'Przychodnia Mokotów — Lekarz Rodzinny i Specjaliści', 'description': 'Przychodnia na Mokotowie. Lekarz rodzinny, pediatria, kardiolog, dermatolog. Rejestracja online.' },
        'c2': { 'domain': 'medico-warszawa.pl', 'title': 'Medico Warszawa — Klinika Mokotów', 'description': 'Klinika medyczna w centrum Mokotowa. Lekarz rodzinny, specjaliści, diagnostyka. Krótkie terminy.' },
    },
    '/strona-dla-gabinetu-stomatologicznego': {
        'file': 'src/pages/VerticalPages.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla gabinetu stomatologicznego',
        'content': 'Pacjent, który szuka dentysty w Google, jest gotowy na wizytę. SEO lokalne sprawia, że Twój gabinet pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka dentysty — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Pacjent szuka dentysty — gotowy na wizytę',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę gabinetu na lata',
        ],
        'queries': ['dentysta Mokotów', 'stomatolog Mokotów', 'gabinet dentystyczny Mokotów'],
        'your': { 'domain': 'moj-dentysta-mokotow.pl', 'title': 'Mój Dentysta — Gabinet Stomatologiczny Mokotów', 'description': 'Gabinet stomatologiczny na Mokotowie. Stomatologia zachowawcza, protetyka, ortodoncja, implanty. Bezpłatna konsultacja.' },
        'c1': { 'domain': 'dentysta-w-mokotowie.pl', 'title': 'Dentysta Mokotów — Gabinet Stomatologiczny 24h', 'description': 'Gabinet stomatologiczny w dzielnicy Mokotów. Stomatologia zachowawcza, protetyka, ortodoncja. Dyżur 24h.' },
        'c2': { 'domain': 'mokotow-dental.pl', 'title': 'Mokotów Dental Clinic — Stomatolog Warszawa', 'description': 'Klinika dentystyczna w centrum Mokotowa. Pełen zakres usług: od profilaktyki po chirurgię.' },
    },
    '/strona-dla-restauracji': {
        'file': 'src/pages/VerticalPages.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla restauracji',
        'content': 'Gość, który szuka restauracji w Google, jest gotowy zarezerwować stolik. SEO lokalne sprawia, że Twoja restauracja pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka miejsca na obiad — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Gość szuka restauracji — gotowy zarezerwować',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę restauracji na lata',
        ],
        'queries': ['restauracja włoska Kraków', 'pizzeria Kraków', 'kuchnia włoska Kraków'],
        'your': { 'domain': 'trattoria-bella-krakow.pl', 'title': 'Trattoria Bella — Restauracja Włoska Kraków Kazimierz', 'description': 'Autentyczna kuchnia włoska w sercu Kazimierza. Pizza z pieca opalanego drewnem, świeże makarony. Rezerwacja online. 400+ opinii.' },
        'c1': { 'domain': 'pizzeria-roma-krakow.pl', 'title': 'Pizzeria Roma — Kraków Centrum', 'description': 'Pizzeria w centrum Krakowa. Pizza neapolitańska z pieca opalanego drewnem, świeże składniki. Dostawa i rezerwacja.' },
        'c2': { 'domain': 'bistro-wloskie-krakow.pl', 'title': 'Bistro Włoskie Kraków — Kuchnia Półwyspu', 'description': 'Bistro z autentyczną kuchnią włoską w Krakowie. Makarony robione na miejscu, desery włoskie. Rezerwacja online.' },
    },
    # VerticalPagesTier1 (6 — except freelancer ya no está en Tier 1 file, pero está en Tier 1; nos ocupamos)
    '/strona-dla-freelancera': {
        'file': 'src/pages/VerticalPagesTier1.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla freelancera',
        'content': 'Klient, który szuka freelancera w Google, jest gotowy na rozmowę. SEO lokalne sprawia, że Twoje portfolio pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka specjalisty — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Klient szuka freelancera — gotowy na rozmowę',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google',
            'Budujesz markę osobistą freelancera na lata',
        ],
        'queries': ['grafik freelancer Warszawa', 'programista freelancer Warszawa', 'freelancer Warszawa'],
        'your': { 'domain': 'twoje-portfolio-freelancer.pl', 'title': 'Twoje Portfolio — Grafik Freelancer Warszawa', 'description': 'Profesjonalny grafik freelancer z Warszawy. Identyfikacja wizualna, branding, strony internetowe. 10 lat doświadczenia.' },
        'c1': { 'domain': 'grafik-freelancer-waw.pl', 'title': 'Grafik Freelancer Warszawa — Studio Graficzne', 'description': 'Grafik freelancer w Warszawie. Logo, identyfikacja wizualna, projekty graficzne. Szybka realizacja.' },
        'c2': { 'domain': 'design-studio-warszawa.pl', 'title': 'Design Studio Warszawa — Grafik i Branding', 'description': 'Studio projektowe z Warszawy. Grafika, branding, projektowanie stron. Portfolio znanych marek.' },
    },
    '/strona-dla-warsztatu-samochodowego': {
        'file': 'src/pages/VerticalPagesTier1.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla warsztatu',
        'content': 'Kierowca, który szuka warsztatu w Google, jest gotowy na wizytę. SEO lokalne sprawia, że Twój warsztat pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka mechanika — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Kierowca szuka warsztatu — gotowy na wizytę',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę warsztatu na lata',
        ],
        'queries': ['wymiana opon Mokotów', 'wulkanizacja Mokotów', 'warsztat samochodowy Mokotów'],
        'your': { 'domain': 'wulkanizacja-mokotow.pl', 'title': 'Wulkanizacja Mokotów — Wymiana Opon 24h', 'description': 'Wulkanizacja i serwis opon na Mokotowie. Wymiana opon letnich, zimowych, całorocznych. Przechowalnia opon. Szybka obsługa.' },
        'c1': { 'domain': 'opony-mokotow.pl', 'title': 'Opony Mokotów — Wymiana i Przechowalnia', 'description': 'Serwis opon na Mokotowie. Wymiana opon letnich i zimowych, wyważanie, przechowalnia opon. Szybka obsługa.' },
        'c2': { 'domain': 'mokotow-opony24.pl', 'title': 'Mokotów Opony 24h — Wymiana Opon Całą Dobę', 'description': 'Wymiana opon na Mokotowie 24 godziny na dobę. Opony letnie, zimowe, całoroczne. Wyważanie, przechowalnia opon.' },
    },
    '/strona-dla-kosmetyczki': {
        'file': 'src/pages/VerticalPagesTier1.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla salonu kosmetycznego',
        'content': 'Klientka, która szuka salonu kosmetycznego w Google, jest gotowa umówić wizytę. SEO lokalne sprawia, że Twój salon pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka kosmetyczki — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Klientka szuka salonu — gotowa umówić wizytę',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę salonu na lata',
        ],
        'queries': ['salon kosmetyczny Wrocław', 'manicure Wrocław', 'kosmetyczka Wrocław'],
        'your': { 'domain': 'salon-pieknie-wroclaw.pl', 'title': 'Salon Pięknie — Kosmetyczka Wrocław Centrum', 'description': 'Salon kosmetyczny w centrum Wrocławia. Manicure, pedicure, zabiegi na twarz, depilacja. Rezerwacja online.' },
        'c1': { 'domain': 'kosmetyczka-wroclaw.pl', 'title': 'Kosmetyczka Wrocław — Salon Urody Centrum', 'description': 'Salon kosmetyczny w centrum Wrocławia. Pełen zakres usług: manicure, pedicure, zabiegi na twarz. Rezerwacja online.' },
        'c2': { 'domain': 'uroda-wroclaw.com', 'title': 'Uroda Wrocław — Salon Kosmetyczny', 'description': 'Salon kosmetyczny Wrocław. Zabiegi pielęgnacyjne, stylizacja paznokci, makijaż. Doświadczone kosmetyczki.' },
    },
    '/strona-dla-fryzjera': {
        'file': 'src/pages/VerticalPagesTier1.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla salonu fryzjerskiego',
        'content': 'Klient, który szuka fryzjera w Google, jest gotowy zarezerwować wizytę. SEO lokalne sprawia, że Twój salon pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka fryzjera — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Klient szuka fryzjera — gotowy zarezerwować',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę salonu na lata',
        ],
        'queries': ['fryzjer damski Kraków', 'fryzjer Kraków', 'salon fryzjerski Kraków'],
        'your': { 'domain': 'salon-fryzjerski-krakow.pl', 'title': 'Salon Fryzjerski Kraków — Fryzjer Damski i Męski', 'description': 'Salon fryzjerski w centrum Krakowa. Strzyżenie damskie, męskie, koloryzacja, stylizacja. Rezerwacja online.' },
        'c1': { 'domain': 'fryzjer-krakow.com', 'title': 'Fryzjer Kraków — Salon Fryzjerski Centrum', 'description': 'Salon fryzjerski w centrum Krakowa. Strzyżenie damskie i męskie, koloryzacja, modelowanie.' },
        'c2': { 'domain': 'fryzjer-damski-krakow.pl', 'title': 'Fryzjer Damski Kraków — Studio Fryzur', 'description': 'Studio fryzur damskich w Krakowie. Strzyżenie, koloryzacja, balayage, stylizacja. Rezerwacja online.' },
    },
    '/strona-dla-psychologa': {
        'file': 'src/pages/VerticalPagesTier1.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla psychologa',
        'content': 'Klient, który szuka psychologa w Google, jest gotowy na pierwszą wizytę. SEO lokalne sprawia, że Twój gabinet pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka psychologa — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Klient szuka psychologa — gotowy na wizytę',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę gabinetu na lata',
        ],
        'queries': ['psycholog Warszawa', 'gabinet psychologiczny Warszawa', 'psychoterapeuta Warszawa'],
        'your': { 'domain': 'psycholog-warszawa-mokotow.pl', 'title': 'Psycholog Warszawa — Gabinet Psychologiczny Mokotów', 'description': 'Gabinet psychologiczny na Mokotowie. Psycholog dla dorosłych i młodzieży. Konsultacje online i stacjonarnie.' },
        'c1': { 'domain': 'psycholog-warszawa.com', 'title': 'Psycholog Warszawa — Centrum Terapii', 'description': 'Centrum terapii psychologicznej w Warszawie. Psycholog dla dorosłych, dzieci i młodzieży. Konsultacje online i stacjonarnie.' },
        'c2': { 'domain': 'psycholog-mokotow.pl', 'title': 'Psycholog Mokotów — Gabinet Psychologiczny', 'description': 'Gabinet psychologiczny na Mokotowie. Psychoterapia indywidualna, par, młodzież.' },
    },
    '/strona-dla-fizjoterapeuty': {
        'file': 'src/pages/VerticalPagesTier1.tsx',
        'heading': 'Dlaczego SEO lokalne jest kluczowe dla fizjoterapeuty',
        'content': 'Pacjent, który szuka fizjoterapeuty w Google, jest gotowy na wizytę. SEO lokalne sprawia, że Twój gabinet pojawia się w wynikach, gdy ktoś w Twojej okolicy szuka fizjoterapeuty — 24/7, bez płacenia za kliknięcia.',
        'highlights': [
            'Pacjent szuka fizjoterapeuty — gotowy na wizytę',
            'Widoczność 24/7, bez płacenia za kliknięcia',
            'Wyprzedzasz konkurencję w Google Maps',
            'Budujesz markę gabinetu na lata',
        ],
        'queries': ['fizjoterapeuta Kraków', 'rehabilitacja Kraków', 'fizjoterapia Kraków'],
        'your': { 'domain': 'fizjoterapia-krakow-centrum.pl', 'title': 'Fizjoterapia Kraków — Gabinet Rehabilitacji Centrum', 'description': 'Gabinet fizjoterapii w centrum Krakowa. Terapia manualna, rehabilitacja sportowa, bóle kręgosłupa, masaż leczniczy.' },
        'c1': { 'domain': 'fizjoterapeuta-krakow.com', 'title': 'Fizjoterapeuta Kraków — Centrum Terapii Manualnej', 'description': 'Gabinet fizjoterapii w centrum Krakowa. Specjalizacja: terapia manualna, rehabilitacja sportowa, bóle kręgosłupa.' },
        'c2': { 'domain': 'rehabilitacja-krakow.pl', 'title': 'Rehabilitacja Kraków — Gabinet Fizjoterapii', 'description': 'Gabinet rehabilitacji w Krakowie. Kompleksowa fizjoterapia: terapia manualna, masaż leczniczy, ćwiczenia.' },
    },
}

def make_query_rounds(data):
    """Genera el array rounds con 3 queries rotando."""
    rounds = []
    for q in data['queries']:
        round_obj = {
            'query': q,
            'yourSite': data['your'],
            'competitors': [data['c1'], data['c2']],
        }
        rounds.append(round_obj)
    return rounds

def make_image_animation_block(data):
    """Genera el bloque imageAnimation con 3 queries rotando."""
    rounds = make_query_rounds(data)
    rounds_str = ',\n              '.join([
        f"{{\n                query: {repr(r['query'])},\n                yourSite: {{\n                  domain: {repr(r['yourSite']['domain'])},\n                  title: {repr(r['yourSite']['title'])},\n                  description: {repr(r['yourSite']['description'])},\n                }},\n                competitors: [\n                  {{ domain: {repr(r['competitors'][0]['domain'])}, title: {repr(r['competitors'][0]['title'])}, description: {repr(r['competitors'][0]['description'])} }},\n                  {{ domain: {repr(r['competitors'][1]['domain'])}, title: {repr(r['competitors'][1]['title'])}, description: {repr(r['competitors'][1]['description'])} }},\n                ],\n              }}"
        for r in rounds
    ])
    return f"""        imageAnimation: {{
          rounds: [
              {rounds_str},
          ],
        }}"""

def make_section_block(data):
    """Genera la sección completa con imageAnimation."""
    highlights = ',\n          '.join([f'"{h}"' for h in data['highlights']])
    image_anim = make_image_animation_block(data)
    return f"""      {{
        heading: {repr(data['heading'])},
        content: {repr(data['content'])},
        highlights: [
          {highlights},
        ],
        {image_anim},
      }},"""

# Procesar cada archivo: agrupar landings por archivo
files_landings = {}
for path, data in LANDINGS.items():
    f = data['file']
    files_landings.setdefault(f, []).append((path, data))

for file, items in files_landings.items():
    p = Path(rf'C:\Users\Ayrton\Desktop\webs\landing\{file}')
    if not p.exists():
        print(f'File not found: {p}')
        continue
    text = p.read_text(encoding='utf-8')

    for path, data in items:
        # Buscar el patrón "  />\n)\n\n// ─..." que marca el fin de un componente
        # Para no complicar, voy a buscar la última sección del array y añadir la nueva antes del cierre
        # El patrón es encontrar el cierre de sections "]}" que está en el archivo
        # Y luego antes de sections, en el componente SEOLandingPage, insertamos la nueva sección

        # Estrategia: insertar la nueva sección antes del cierre del array sections del componente correcto
        # Cada componente (export const XxxPage) tiene un sections={...}

        # Encontrar el patrón único para esta landing: buscar las queries únicas
        first_query = data['queries'][0]

        # Buscar la sección que tenga la query como parte de su imageAnimation o relacionada
        # Más simple: encontrar el cierre del array sections en el bloque que contiene la primera query
        # Voy a buscar 'queries' en la url/route

        # El método más simple: buscar el bloque del componente que tenga la path
        # La path aparece en `path="/strona-..."` justo antes de la sección de imageAnimation o antes de otras secciones
        # Voy a buscar el patrón: path="$path" ... sections={...]} ... features={[
        # Y antes del cierre del sections, inserto la nueva sección

        # Encuentra el path en el código
        path_marker = f'path="{path}"'

        idx = text.find(path_marker)
        if idx == -1:
            print(f'Path not found in {file}: {path}')
            continue

        # Encuentra el siguiente 'sections={[' después de path
        sections_idx = text.find('sections={', idx)
        if sections_idx == -1:
            print(f'sections not found after path in {file}: {path}')
            continue

        # Encuentra el cierre del array sections: necesito contar las llaves
        # Empiezo desde sections_idx + len('sections={')
        # Voy a buscar ']}' que cierre el sections
        # El sections está en la prop, así que el cierre es ']}' (cierra array + cierra prop)
        # Pero hay secciones anidadas con ']}' dentro. Necesito contar.

        # Voy a hacer: encontrar el ']}' que sigue al último '}' o ']' del array de sections
        # Para simplificar, voy a buscar el patrón que viene después de sections: 'features={['
        features_idx = text.find('features={', sections_idx)
        if features_idx == -1:
            # Buscar el siguiente cierre del componente
            # O: buscar cta o internalLinks
            after_idx = text.find('cta={', sections_idx)
            if after_idx == -1:
                after_idx = text.find('internalLinks={', sections_idx)
            if after_idx == -1:
                print(f'features/cta/internalLinks not found after sections in {file}: {path}')
                continue
        else:
            after_idx = features_idx

        # Voy a insertar la nueva sección antes del cierre del array sections
        # El cierre es el ']}' justo antes de after_idx
        # Buscar hacia atrás desde after_idx el ']}'
        search_start = after_idx
        # Buscar ']}' que sea un cierre de sections (no dentro de strings)
        # Una forma simple: buscar el ÚLTIMO ']}' antes de after_idx que no sea parte de un objeto anidado
        # Voy a usar un patrón: buscar '\n    ]}\n    features={' o similar
        # En lugar de eso, voy a hacer una búsqueda más robusta: encontrar '\n    ]}\n' antes de after_idx

        # Búsqueda robusta: el sections termina en '\n    ]}\n' seguido de '    features={' o '    cta={' o '    internalLinks={'
        # Voy a buscar la última ocurrencia de '\n    ]}\n' antes de after_idx

        # El sections en este código se cierra con ']}' (cierra array y prop) en una línea separada
        # Formato típico: '\n    ]}\n    features={['
        closing_idx = text.rfind('    ]}\n    ', sections_idx, after_idx)
        if closing_idx == -1:
            # Quizás no hay 'features' sino otro prop. Buscar '\n    ]}\n    cta='
            closing_idx = text.rfind('    ]}\n    cta={', sections_idx, after_idx)
        if closing_idx == -1:
            # O '\n    ]}\n    internalLinks={'
            closing_idx = text.rfind('    ]}\n    internalLinks={', sections_idx, after_idx)
        if closing_idx == -1:
            print(f'Could not find sections closing in {file}: {path}')
            continue

        # Insertar la nueva sección antes del cierre (en closing_idx)
        # Necesito una coma al final de la sección anterior
        # Voy a poner la nueva sección con coma al final
        new_section = make_section_block(data)
        # El new_section termina con ',\n' (coma)
        # Lo voy a insertar en la posición closing_idx
        # Antes de insertar, verifico que la línea anterior termine con ',\n' o no
        # Si la sección anterior no tiene coma, la nueva debe tenerla
        # Como mi make_section_block termina con ',' y '\n', no necesito añadir coma
        text = text[:closing_idx] + new_section + '\n' + text[closing_idx:]

    p.write_text(text, encoding='utf-8')
    print(f'Updated {file} with {len(items)} landings')

print('Done')
