// src/data/modules.ts — Módulos disponibles que el cliente puede activar en su CMS
export type Module = {
  id: string
  name: string
  description: string
  /** Planes en los que viene incluido por defecto (no se puede desmarcar) */
  includedIn: ("start" | "standard" | "premium")[]
  /** Si requiere contratar un proveedor externo (ej. Stripe) */
  requiresExternal?: string
}

export const availableModules: Module[] = [
  {
    id: "blog",
    name: "Blog SEO",
    description: "Publikuj artykuły zoptymalizowane pod Google, generujące ruch organiczny.",
    includedIn: ["start", "standard", "premium"],
  },
  {
    id: "contact-form",
    name: "Formularz kontaktowy",
    description: "Formularz z powiadomieniem na maila i ochroną antyspamową.",
    includedIn: ["start", "standard", "premium"],
  },
  {
    id: "gallery",
    name: "Galería zdjęć",
    description: "Lekka galeria zoptymalizowana pod SEO (alt, kompresja, lazy load).",
    includedIn: ["start", "standard", "premium"],
  },
  {
    id: "google-maps",
    name: "Mapa Google + dane firmy",
    description: "Widget Google Maps z danymi firmy (lokalne SEO).",
    includedIn: ["start", "standard", "premium"],
  },
  {
    id: "calendar",
    name: "Rezerwacje / calendario",
    description: "Tus clientes reservan online, con disponibilidad en tiempo real.",
    includedIn: ["standard", "premium"],
  },
  {
    id: "menu",
    name: "Menu cyfrowe (QR)",
    description: "Karta dań dostępna z kodu QR, łatwa do aktualizacji z telefonu.",
    includedIn: ["standard", "premium"],
  },
  {
    id: "shop",
    name: "Sklep online / płatności",
    description: "Sprzedaż produktów z płatnościami online.",
    includedIn: ["premium"],
    requiresExternal: "Stripe / Przelewy24",
  },
  {
    id: "courses",
    name: "Akademia / kursy",
    description: "Sprzedaż kursów wideo, lekcji, materiałów do pobrania.",
    includedIn: ["premium"],
  },
  {
    id: "multilang",
    name: "Multi-idioma",
    description: "Strona w kilku językach (PL + EN/DE/ES/UK).",
    includedIn: ["premium"],
  },
  {
    id: "analytics",
    name: "Analityka zaawansowana",
    description: "Comiesięczny raport widoczności + analiza konkurencji w branży.",
    includedIn: ["premium"],
  },
  {
    id: "priority-support",
    name: "Wsparcie priorytetowe",
    description: "Bezpośredni kontakt telefoniczny, szybsze odpowiedzi na zgłoszenia.",
    includedIn: ["premium"],
  },
]