from pathlib import Path

landings_data = {
    '/strona-internetowa-warszawa': {
        'sector': 'firma remontowa', 'city': 'Warszawa',
        'your_title': 'Twoja Firma — Remonty i Wykończenia Warszawa | Mokotów',
        'your_desc': 'Firma remontowa z Warszawy. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 10 lat doświadczenia, 200+ projektów.',
    },
    '/strona-internetowa-krakow': {
        'sector': 'firma remontowa', 'city': 'Kraków',
        'your_title': 'Twoja Firma — Remonty i Wykończenia Kraków | Podgórze',
        'your_desc': 'Firma remontowa z Krakowa. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 8 lat doświadczenia, 150+ projektów.',
    },
    '/strona-internetowa-lodz': {
        'sector': 'firma remontowa', 'city': 'Łódź',
        'your_title': 'Twoja Firma — Remonty i Wykończenia Łódź | Widzew',
        'your_desc': 'Firma remontowa z Łodzi. Kompleksowe remonty mieszkań, łazienek, kuchni. Bezpłatna wycena, 7 lat doświadczenia, 120+ projektów.',
    },
    '/strona-internetowa-wroclaw': {
        'sector': 'firma budowlana', 'city': 'Wrocław',
        'your_title': 'Twoja Firma — Budowa i Remonty Wrocław | Krzyki',
        'your_desc': 'Firma budowlana z Wrocławia. Budowy domów, remonty mieszkań, prace wykończeniowe. 12 lat doświadczenia, 200+ projektów.',
    },
}

# Para simplificar el primer paso, sólo imprimo las queries que se necesitan
for path, data in landings_data.items():
    sector = data['sector']
    city = data['city']
    print(f'{path}: {sector} {city}')
