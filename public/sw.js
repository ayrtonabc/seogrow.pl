// Service Worker para SEO Grow — cache-first para assets, network-first para HTML
const CACHE_NAME = "seogrow-v2"
const PRECACHE_URLS = [
  "/",
  "/manifest.webmanifest",
  "/favicon.ico",
  "/favicon.svg",
  "/apple-touch-icon.png",
  "/favicon-192x192.png",
  "/favicon-512x512.png",
  "/logo-320.webp",
  "/hero-960.webp",
  "/hero-640.webp",
  "/panel-1280.webp",
]

// Install: pre-cache assets críticos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  )
})

// Activate: limpiar caches viejos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  )
})

// Fetch: network-first para HTML, cache-first para assets
self.addEventListener("fetch", (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET, cross-origin, chrome-extension
  if (request.method !== "GET" || url.origin !== location.origin) return

  // HTML: network-first (siempre fresh)
  if (request.mode === "navigate" || request.destination === "document") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const clone = res.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          return res
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("/")))
    )
    return
  }

  // Assets: cache-first (rápido)
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached
      return fetch(request).then((res) => {
        if (!res || res.status !== 200 || res.type !== "basic") return res
        const clone = res.clone()
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
        return res
      })
    })
  )
})