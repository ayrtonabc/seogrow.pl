import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
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
// Belt-and-suspenders: even if <html translate="no"> is stripped by a build
// step, the React root itself is protected from Chrome's auto-translator
// and other DOM-mutating extensions.
rootEl.setAttribute("translate", "no")

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
