import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import { Provider } from "@/components/ui/provider"
import { LanguageProvider } from "./components/LanguageSwitcher"
import { CurrencyProvider } from "./components/CurrencySwitcher"
import { ErrorBoundary } from "./components/ErrorBoundary"
import "./index.css"
import App from "./App"

// Service Worker registration — PWA + offline + repeat-visit cache
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        if (import.meta.env.DEV) console.log("SW registered:", reg.scope)
      })
      .catch((err) => {
        if (import.meta.env.DEV) console.warn("SW registration failed:", err)
      })
  })
}

const rootEl = document.getElementById("root")!

/**
 * Chrome translator resilience.
 *
 * Strategy: try `hydrateRoot` (keeps the SSR HTML visible, fast FCP). If Chrome's
 * auto-translator mutated the DOM between page load and hydration (the typical
 * "blank screen after translating" bug), `hydrateRoot` will throw or call
 * `onRecoverableError`. We then fall back to a clean client-side `createRoot`
 * re-render, so the user always sees a working page — translated or not.
 *
 * The inline <script> in index.html captured the pre-hydration HTML into
 * `window.__SSR_BACKUP__`. If we detect the current root DOM doesn't match
 * that backup, we restore it before re-rendering to avoid React's "Expected
 * server HTML to contain a matching X" errors.
 */
declare global {
  interface Window {
    __SSR_BACKUP__?: string
  }
}

function tryHydrate(): void {
  const ssrBackup = typeof window !== "undefined" ? window.__SSR_BACKUP__ : undefined
  const hasSsrContent = !!ssrBackup && ssrBackup.trim().length > 0
  const domWasMutated =
    hasSsrContent && rootEl.innerHTML.replace(/\s+/g, " ") !== ssrBackup.replace(/\s+/g, " ")

  if (domWasMutated) {
    // Chrome (or another translator) mutated the DOM before React hydrated.
    // Restore the SSR HTML so React can mount cleanly on top of it.
    // eslint-disable-next-line no-console
    console.info(
      "[hydration] DOM was mutated before hydrateRoot (likely Chrome translator). Restoring SSR backup and re-rendering from scratch.",
    )
    rootEl.innerHTML = ssrBackup as string
  }

  if (!hasSsrContent || domWasMutated) {
    // No SSR backup OR we had to restore one: do a clean client render.
    createRoot(rootEl).render(
      <StrictMode>
        <ErrorBoundary>
          <Provider>
            <LanguageProvider>
              <CurrencyProvider>
                <App />
              </CurrencyProvider>
            </LanguageProvider>
          </Provider>
        </ErrorBoundary>
      </StrictMode>,
    )
    return
  }

  // We have intact SSR HTML — hydrate it (fast FCP, keeps pre-rendered content).
  try {
    hydrateRoot(
      rootEl,
      <StrictMode>
        <ErrorBoundary>
          <Provider>
            <LanguageProvider>
              <CurrencyProvider>
                <App />
              </CurrencyProvider>
            </LanguageProvider>
          </Provider>
        </ErrorBoundary>
      </StrictMode>,
      {
        onRecoverableError(error) {
          // Hydration mismatch AFTER we thought the DOM was clean. This can
          // happen if Chrome translates DURING hydrate (rare but possible).
          // eslint-disable-next-line no-console
          console.warn("[hydration] recoverable error after hydrate:", error.message)
        },
      },
    )
  } catch (err) {
    // hydrateRoot threw synchronously. Fall back to a clean createRoot render.
    // eslint-disable-next-line no-console
    console.warn("[hydration] hydrateRoot failed, falling back to createRoot:", err)
    createRoot(rootEl).render(
      <StrictMode>
        <ErrorBoundary>
          <Provider>
            <LanguageProvider>
              <CurrencyProvider>
                <App />
              </CurrencyProvider>
            </LanguageProvider>
          </Provider>
        </ErrorBoundary>
      </StrictMode>,
    )
  }
}

tryHydrate()
