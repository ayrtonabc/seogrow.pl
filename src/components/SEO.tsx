import { useEffect, useRef } from "react"

const SITE_NAME = "SEO Grow"
const SITE_URL = "https://seogrow.pl"
const DEFAULT_IMAGE = "/panel.webp"

type SchemaInput = Record<string, unknown> | Array<Record<string, unknown>>

type SEOProps = {
  title: string
  description: string
  path?: string
  image?: string
  type?: "website" | "article"
  keywords?: string
  noindex?: boolean
  schema?: SchemaInput
}

const toAbsoluteUrl = (value?: string) => {
  if (!value) {
    return new URL(DEFAULT_IMAGE, SITE_URL).toString()
  }

  if (/^https?:\/\//i.test(value)) {
    return value
  }

  return new URL(value, SITE_URL).toString()
}

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null

  if (!element) {
    element = document.createElement("meta")
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null

  if (!element) {
    element = document.createElement("link")
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

export const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  keywords,
  noindex = false,
  schema,
}: SEOProps) => {
  // Track último JSON-LD escrito para evitar remover/re-crear el <script>
  // cuando el schema no cambió (cada remove+append peleaba con el traductor de Chrome).
  const lastSchemaJson = useRef<string>("")

  useEffect(() => {
    const canonicalUrl = toAbsoluteUrl(path)
    const imageUrl = toAbsoluteUrl(image)
    const robotsValue = noindex
      ? "noindex, follow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

    if (document.title !== title) document.title = title

    upsertMeta('meta[name="description"]', { name: "description", content: description })
    upsertMeta('meta[name="robots"]', { name: "robots", content: robotsValue })
    upsertMeta('meta[name="googlebot"]', { name: "googlebot", content: robotsValue })
    upsertMeta('meta[name="author"]', { name: "author", content: SITE_NAME })

    // Añadir hreflang para SEO internacional/local (mercado polaco por defecto)
    upsertLink('link[rel="alternate"][hreflang="pl"]', { rel: "alternate", hreflang: "pl", href: canonicalUrl })
    upsertLink('link[rel="alternate"][hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: canonicalUrl })
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" })
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title })
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description })
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl })
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type })
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title })
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description })
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl })
    upsertMeta('meta[property="og:image:width"]', { property: "og:image:width", content: "1280" })
    upsertMeta('meta[property="og:image:height"]', { property: "og:image:height", content: "720" })
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: title })
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl })
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME })
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "pl_PL" })
    upsertMeta('meta[property="og:updated_time"]', { property: "og:updated_time", content: new Date().toISOString() })

    // Theme color for mobile browsers (matches brand)
    upsertMeta('meta[name="theme-color"]', { name: "theme-color", content: "#4F46E5" })
    upsertMeta('meta[name="apple-mobile-web-app-capable"]', { name: "apple-mobile-web-app-capable", content: "yes" })
    upsertMeta('meta[name="apple-mobile-web-app-status-bar-style"]', { name: "apple-mobile-web-app-status-bar-style", content: "default" })
    upsertMeta('meta[name="apple-mobile-web-app-title"]', { name: "apple-mobile-web-app-title", content: SITE_NAME })
    upsertMeta('meta[name="format-detection"]', { name: "format-detection", content: "telephone=no" })

    // Article-specific Open Graph (for blog posts)
    if (type === "article") {
      upsertMeta('meta[property="article:author"]', { property: "article:author", content: "SEO Grow Founder" })
      upsertMeta('meta[property="article:section"]', { property: "article:section", content: "Marketing" })
      upsertMeta('meta[property="article:tag"]', { property: "article:tag", content: "SEO" })
      upsertMeta('meta[property="article:published_time"]', { property: "article:published_time", content: new Date().toISOString() })
      upsertMeta('meta[property="article:modified_time"]', { property: "article:modified_time", content: new Date().toISOString() })
    }

    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords })
    }

    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl })

    // Auto-generate BreadcrumbList based on path
    const hasBreadcrumb = Array.isArray(schema) 
      ? schema.some((s: any) => s["@type"] === "BreadcrumbList")
      : schema && (schema as any)["@type"] === "BreadcrumbList";

    let finalSchema = schema ? (Array.isArray(schema) ? [...schema] : [schema]) : [];

    if (!hasBreadcrumb) {
      const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: path.split('/').filter(Boolean).reduce((acc: any[], part, index, arr) => {
          const url = `${SITE_URL}/${arr.slice(0, index + 1).join('/')}`;
          const name = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
          acc.push({
            "@type": "ListItem",
            position: index + 2,
            name,
            item: url,
          });
          return acc;
        }, [{
          "@type": "ListItem",
          position: 1,
          name: "Start",
          item: SITE_URL,
        }])
      };
      finalSchema.push(breadcrumbList);
    }

    if (finalSchema.length > 0) {
      const nextJson = JSON.stringify(finalSchema)
      // Solo remover/recrear el <script> si el contenido cambió.
      // Cada remove+append peleaba con el traductor de Chrome (que modifica
      // <script> y otros tags) y causaba pantalla en blanco.
      if (nextJson !== lastSchemaJson.current) {
        lastSchemaJson.current = nextJson
        const existingScript = document.getElementById("seo-json-ld")
        if (existingScript) {
          existingScript.remove()
        }
        const script = document.createElement("script")
        script.id = "seo-json-ld"
        script.type = "application/ld+json"
        // translate="no" evita que Chrome modifique el JSON-LD
        script.setAttribute("translate", "no")
        script.text = nextJson
        document.head.appendChild(script)
      }
    }
  }, [description, image, keywords, noindex, path, schema, title, type])

  return null
}

export { SITE_NAME, SITE_URL, DEFAULT_IMAGE, toAbsoluteUrl }
