# Plan de acción SEO + AEO — SEO Grow

> Documento estratégico. NO es código. Define qué artículos crear, en qué orden, y por qué. Cada artículo ataca una pregunta real que un dueño de PyME hace a ChatGPT/Perplexity/Google.
> Fecha: 2026-08-08 · Propietario: SEO Grow

---

## 1. Contexto y problema

La auditoría AEO (Aug 2026) confirmó que cuando un usuario pregunta a una IA por cosas como *"kto mi zrobi stronę internetową w Polsce"* o *"jak szybko postawić prostą stronę kontaktową"*, las IAs **muestran primero al competidor `arturkosinski.pl`** porque ese sitio tiene posts monolíticos que responden literalmente a esas preguntas con contenido largo, bien estructurado y formateado para featured snippets.

**Por qué nos ganan las IAs:**

1. **Sin contenido "guide" largo en polaco.** Tenemos home con propuesta de valor, pero ningún artículo en formato "guía paso a paso" que responda a la pregunta completa del usuario.
2. **El cluster topical no existe.** Una IA moderna rankea sitios por "topical authority" — tener 1 home + 30 páginas verticales sin un blog de soporte = débil. El competidor tiene 1 pilar (post "jak zrobić stronę") + satélites que enlazan. Nos faltan los 2.
3. **El formato AEO no está.** Las IAs extraen respuestas de bloques bien marcados: definiciones cortas, listas numeradas, tablas comparativas, FAQ. Nuestro home vende pero no "enseña".

**Plan en 1 frase:** crear un **hub pillar** (`/jak-zrobic-strone-internetowa`) + **30 artículos satélite** (uno por keyword de la lista) + **interlinking** entre ellos. Así, cuando una IA busque la respuesta, la encuentra en nuestro cluster y nos cita.

---

## 2. Arquitectura del cluster

```
                    HUB: /jak-zrobic-strone-internetowa
                            (guía completa, 4-5k palabras)
                                  |
        +--------+--------+--------+--------+--------+
        |        |        |        |        |        |
    Satélite Satélite Satélite Satélite Satélite Satélite
    #1       #2       #3       #4       #5       #6
    Cómo     Migración  Indexar  Canibali- Migración Reseñas
    escribir  de sitio  tu web   zación    de URLs  de clientes
    SEO      sin perder tu sitio de         301/302
             tráfico   en Google keywords
```

**Regla de interlinking:**
- Cada satélite enlaza al hub (con anchor "guía completa").
- Cada satélite enlaza a 2-3 satélites relacionados.
- El hub enlaza a TODOS los satélites con anchor descriptivo (no "clic aquí", sino "migración de sitio sin perder tráfico").

**Regla de AEO:**
- Cada artículo empieza con un **TL;DR de 2-3 frases en negrita** que responde la pregunta completa (las IAs extraen esto como snippet).
- Cada artículo tiene una **mini-FAQ de 3-5 preguntas** con `FAQPage` schema JSON-LD.
- Cada artículo tiene **datos numéricos verificables** (las IAs premian contenido con cifras reales).

---

## 3. Las 8 preguntas AEO que nos ganan (bloqueante)

Estas son las 8 preguntas reales que la auditoría recogió de la IA. El cluster tiene que responderlas con un post dedicado cada una:

| # | Pregunta de la IA | Tipo de artículo | Prioridad |
|---|-------------------|------------------|-----------|
| 1 | "mam starą stronę firmy i chcę ją szybko wymienić na prostszą, kto mi to zrobi w Polsce" | Listicle: 5-7 empresas + 1 satélite SEO Grow | P0 |
| 2 | "mam nową działalność w Ostródzie i chcę szybko postawić prostą stronę kontaktową, kto się tym zajmuje" | Hyperlocal: guía para Ostróda + warmińsko-mazurskie | P0 |
| 3 | "jaką firmę polecasz do zrobienia strony internetowej dla małej firmy w Polsce" | Comparativa: SEO Grow vs WordPress vs Wix vs agencja | P0 |
| 4 | "chcę firmową stronę bez długiej umowy, ale z możliwością samodzielnej edycji, kto to robi" | "Strona bez umowy długoterminowej: cómo funciona, qué preguntar" | P1 |
| 5 | "chcę sam zmieniać treści na stronie bez programisty, jaka firma zrobi mi taką stronę" | "Qué significa CMS sin programador: guía práctica" | P1 |
| 6 | "szukam firmy, która pozwoli mi publikować wpisy z telefonu na stronie firmowej" | "Publicar entradas desde el móvil: comparativa de CMS" | P1 |
| 7 | "potrzebuję nowej strony dla małej firmy i chcę ją mieć gotową w kilka dni, kto mi to zrobi" | "Cuánto tarda una web profesional: plazos reales 2026" | P0 |
| 8 | "prowadzę małą firmę w warmińsko-mazurskim i potrzebuję strony, którą będę mógł ogarniać z telefonu" | Hiperlocal + feature: editar desde el móvil | P0 |

**De las 8, 5 son P0** (las que más aparecen en la auditoría) y **3 son P1**. Hay que cubrir las 5 P0 antes de las 3 P1.

---

## 4. Lista priorizada de 30 keywords (de la auditoría + cluster)

Ordenadas por **volumen de búsqueda** (entre paréntesis) y agrupadas por urgencia:

### Tier 1 — P0 (atacar primero, volumen alto)
1. **indexación de páginas** (260 búsquedas) — artículo dedicado
2. **reseñas de clientes** (210) — artículo dedicado + integración con la sección GoogleReviews existente
3. **canibalización de palabras clave** (90) — artículo técnico
4. **migración de sitio web** (90) — artículo técnico (ataja la pregunta AEO #1)
5. **Cómo escribir para SEO** (50) — artículo educativo
6. **URL SEO** (40) — artículo educativo
7. **redirecciones de página** (40) — artículo técnico (ataja la auditoría técnica de la competencia)
8. **formulario de contacto en el sitio web** (40) — ataja la pregunta AEO #2 + la issue 2 de la auditoría
9. **Enlaces SEO internos** (30) — artículo técnico
10. **palabras clave en la página** (30) — artículo educativo

### Tier 2 — P1 (segunda oleada)
11. **posicionamiento de un nuevo sitio web** (30) — guía
12. **proceso de creación de sitios web** (30) — ataja pregunta AEO #7
13. **meta descripción de la página** (20)
14. **¿Cuánto tiempo se tarda en crear un sitio web?** (20) — ataja pregunta AEO #7
15. **Cómo publicar un sitio web** (20)
16. **empresa en Internet** (10)
17. **Cómo crear un sitio web para una empresa** (10) — HUB principal
18. **Información de la empresa en el sitio web** (10) — ataja la issue 2 de la auditoría (NAP consistency)
19. **Título de página SEO** (10)
20. **mapa del sitio seo** (10) — ataja la issue 1 de la auditoría (sitemap)

### Tier 3 — P2 (cuando el cluster esté maduro)
21. **Enviar la página para su indexación** (10) — consolida keyword #1
22. **SSL y SEO** (10)
23. **Cómo crear rápidamente un sitio web** (10) — variante del hub
24. **Descripción de la empresa en el sitio web** (10) — ataja NAP
25. **Reseñas de clientes en el sitio web** (10) — consolida #2
26. **el área de operación de la empresa** (10) — NAP local
27. **características del sitio web** (10) — pillar de comparación
28. **elementos de la página** (10) — pillar de comparación
29. **Formulario de contacto y RGPD** (10) — consolida #8 + RGPD
30. **galería de fotos en el sitio web** (10)

---

## 5. Calendario de publicación

| Semana | Acción | Output |
|--------|--------|--------|
| **Sem 1** | Crear hub `/jak-zrobic-strone-internetowa` (4-5k palabras) + 1 artículo P0 #1 (Indexación) | 2 posts publicados |
| **Sem 2** | P0 #2 (Reseñas) + P0 #3 (Canibalización) | 4 posts |
| **Sem 3** | P0 #4 (Migración) + P0 #5 (Escribir SEO) | 6 posts |
| **Sem 4** | P0 #6 (URL SEO) + P0 #7 (Redirecciones) | 8 posts |
| **Sem 5** | P0 #8 (Formulario contacto) + P0 #9 (Enlaces internos) | 10 posts |
| **Sem 6** | P0 #10 (Keywords on-page) + inicio Tier 2 | 12 posts |
| **Sem 7-10** | Tier 2 + Tier 3 restantes | 30 posts publicados |

**Total: 10 semanas** para tener el cluster completo y empezar a rankear en IA.

---

## 6. Estructura de cada artículo (template AEO)

Cada post del blog sigue el mismo esqueleto para que las IAs lo extraigan siempre igual:

1. **TL;DR** (2-3 frases en negrita al inicio) — responde la pregunta completa de un plumazo.
2. **Tabla de contenidos** con anchor links.
3. **Pregunta del usuario reformulada** (lo que alguien escribiría en Google).
4. **Cuerpo del artículo** con `H2` y `H3` claros, listas numeradas, ejemplos reales.
5. **Mini-FAQ** de 3-5 preguntas con schema JSON-LD `FAQPage`.
6. **Cifras y datos verificables** (no opiniones, números reales de nuestro trabajo).
7. **CTA final** → `/kontakt` o al plan correspondiente (sin agresivo, tono consultivo).
8. **Interlinking**: 3-5 enlaces a otros artículos del cluster + 1 al hub.

**Política de voz** (recordatorio):
- Polaco nativo, no español.
- Tono de "consultor" no de "software".
- Marca invisible: SEO Grow aparece una sola vez en el CTA final, no en el cuerpo.
- Sin "AI diseñando" / "templates" / "email marketing".

---

## 7. Schema JSON-LD por artículo

Cada artículo lleva:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "author": { "@type": "Person", "name": "Martyna Cieśniewska" },
  "datePublished": "...",
  "dateModified": "...",
  "publisher": { "@type": "Organization", "name": "SEO Grow" },
  "mainEntityOfPage": "https://seogrow.pl/blog/[slug]"
}
```

Y en cada FAQ:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "...", "acceptedAnswer": { "@type": "Answer", "text": "..." } }
  ]
}
```

---

## 8. Por qué NO se hace todo de golpe

Riesgos de publicar 30 artículos en 1 semana:

- Google detecta thin content / doorway pages si la calidad cae.
- Las IAs (Perplexity, ChatGPT) ponderan "recency" + "topical depth". 30 posts de golpe en 1 día = bajo depth, alto riesgo de penalización.
- El interlinking necesita tiempo para que Google descubra y valore los enlaces.
- El blog actual tiene solo 0-3 posts. Subir de 0 a 30 sin escalera = spike artificial.

**Por eso el plan es 10 semanas:** 2 posts/semana con descanso entre grupos temáticos para que Google vea crecimiento natural.

---

## 9. Métricas de éxito

A los 3 meses de empezar:

| Métrica | Hoy | Meta 3 meses | Meta 6 meses |
|---------|-----|--------------|---------------|
| Posts publicados | 0 | 12 | 30 |
| Impresiones en Google Search Console | desconocido | +200% | +500% |
| Citas en ChatGPT/Perplexity (mención) | 0% de las 8 preguntas | 2-3 de 8 | 5-6 de 8 |
| Tráfico orgánico /mes | desconocido | +30% | +100% |
| Backlinks naturales | 0 | 5-10 | 20+ |

**Cómo medir las citas en IAs:** una vez a la semana, hacer las 8 preguntas a ChatGPT y Perplexity y apuntar qué sitio citan. Track en spreadsheet simple.

---

## 10. Lo que YA está hecho (auditoría técnica, antes del blog)

1. ✅ `vercel.json` con `Content-Type: application/xml; charset=utf-8` para `/sitemap.xml` → arregla auditoría issue #1 (sitemap "vacío/ilegible").
2. ✅ Link directo "Kontakt" en el Header (al lado de Blog) → arregla auditoría issue #2 (IA no encuentra la página de contacto).
3. ✅ `BlogPostPage.tsx` ya no hace `<Navigate>` cuando el slug no existe → muestra página 404 en su lugar → arregla auditoría issue #3 (redirección innecesaria).
4. ✅ `Footer` ya enlaza a `/kontakt` (estaba, sigue).

---

## 11. Riesgos abiertos

| Riesgo | Mitigación |
|--------|------------|
| Google pille thin content | Revisión manual de cada post antes de publicar (mín. 800 palabras útiles) |
| IA cita la competencia antes | Empezar por las 5 P0 (las que la auditoría identificó como bloqueante) |
| Saturación de páginas similares | Variar el ángulo: el mismo tema puede ser "guía", "comparativa", "errores comunes", "caso real" |
| Tiempo del equipo | Priorizar P0, dejar Tier 3 para meses 3-4 |

---

**Próximo paso inmediato:** decidir si el hub `/jak-zrobic-strone-internetowa` se construye primero (recomendado) o si se empieza por los satélites P0. Mi recomendación: **hub primero, luego 1 P0 por semana, para que el internal linking tenga raíz desde el día 1**.
