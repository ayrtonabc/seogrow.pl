import { StrictMode } from "react"
import { createRoot, type Root } from "react-dom/client"
import { Provider } from "@/components/ui/provider"
import { LanguageProvider } from "./components/LanguageSwitcher"
import { CurrencyProvider } from "./components/CurrencySwitcher"
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

/**
 * Chrome translator resilience — MutationObserver + remount strategy.
 *
 * Problem: Chrome's auto-translator wraps text nodes in bare <font>
 * elements (no class, no style). React's reconciliator holds direct
 * references to those text-node DOM parents; once Chrome wraps them,
 * React tries to remove a child that is no longer a child of the
 * parent it knows about → NotFoundError on removeChild → blank page.
 *
 * Strategy:
 * 1. Mount with createRoot on the (pre-rendered) HTML.
 * 2. After mount, attach a MutationObserver to document.body that
 *    flags additions matching Chrome's <font> wrapper pattern (bare
 *    <font>, no class/style, contains text) AND Chrome's translate
 *    popup toolbar (classes starting with "goog-te-").
 * 3. On flag, debounce 400ms (Chrome translates in batches), then
 *    unmount → clear root.innerHTML → remount → restore scroll. This
 *    purges every stale DOM ref so React never sees the wrapped nodes.
 *
 * The remount is self-resetting — once done, the observer is reattached
 * so users can change language multiple times during a single visit.
 */

const rootEl = document.getElementById("root")!

const tree = (
  <StrictMode>
    <Provider>
      <LanguageProvider>
        <CurrencyProvider>
          <App />
        </CurrencyProvider>
      </LanguageProvider>
    </Provider>
  </StrictMode>
)

function mountClean(): Root {
  // Wipe any leftovers (including Chrome's wrappers from a previous
  // session if we got here via a remount). React always mounts on a
  // clean DOM — that's the strategy's core guarantee.
  rootEl.innerHTML = ""
  const root = createRoot(rootEl)
  root.render(tree)
  return root
}

let currentRoot: Root | null = mountClean()
let remountScheduled = false

// --- detection helpers ----------------------------------------------------

function isChromeTranslatorWrapper(node: Node): boolean {
  if (node.nodeType !== Node.ELEMENT_NODE) return false
  const el = node as Element
  // Chrome wraps text nodes in bare <font> tags
  if (el.tagName !== "FONT") return false
  // Filter: must be bare (no class, no style) AND contain text
  const cls = (el.getAttribute("class") || "").trim()
  const style = (el.getAttribute("style") || "").trim()
  if (cls !== "" || style !== "") return false
  const text = (el.textContent || "").trim()
  return text.length > 2
}

function isChromePopupElement(node: Node): boolean {
  if (node.nodeType !== Node.ELEMENT_NODE) return false
  const el = node as Element
  const cls = typeof el.className === "string" ? el.className : ""
  return (
    cls.includes("goog-te-") ||
    cls.includes("skiptranslate") ||
    // Chrome's shadow-DOM markers use IDs starting with ":"
    (typeof el.id === "string" && el.id.startsWith(":"))
  )
}

// --- observer + remount ---------------------------------------------------

let remountTimer: number | null = null
let observer: MutationObserver | null = null

function scheduleRemount(reason: string): void {
  if (remountScheduled) return
  remountScheduled = true

  // eslint-disable-next-line no-console
  console.info(
    `[chrome-translator] detected (${reason}); remounting React tree in 400ms`,
  )

  if (observer) {
    observer.disconnect()
    observer = null
  }

  if (remountTimer !== null) clearTimeout(remountTimer)
  remountTimer = window.setTimeout(() => {
    remountTimer = null
    doRemount()
  }, 400)
}

function doRemount(): void {
  const scrollY = window.scrollY
  const scrollX = window.scrollX

  // CRITICAL: do NOT call currentRoot.unmount() here. With Chrome's
  // translator having wrapped text nodes in <font>, React's reconciliator
  // holds refs to text nodes whose parent is now the <font>, not the
  // <p>. unmount() walks every node it knows about and calls removeChild
  // on each — that throws NotFoundError because Chrome's wrappers
  // changed the parent of those text nodes. With CSR + the root always
  // being cleared before createRoot.render(), we don't need a graceful
  // unmount: wiping the DOM and re-rendering on a clean container is
  // safe (createRoot picks up the empty container and treats it as a
  // fresh root mount). The old root's tree is garbage-collected by the
  // browser once nothing references its DOM nodes anymore — small leak,
  // acceptable for the translator-only path.

  // Wipe EVERY node Chrome's translator added — <font> wrappers, popup
  // toolbar, all React-rendered DOM, everything. The DOM is now
  // guaranteed fresh for re-mount.
  rootEl.innerHTML = ""

  try {
    currentRoot = mountClean()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[chrome-translator] remount failed:", err)
    remountScheduled = false
    return
  }

  // Restore scroll so the user doesn't lose their place.
  if (scrollY > 0 || scrollX > 0) {
    requestAnimationFrame(() => {
      window.scrollTo(scrollX, scrollY)
    })
  }

  remountScheduled = false
  attachObserver()
}

function attachObserver(): void {
  if (typeof MutationObserver === "undefined") return
  if (observer) observer.disconnect()

  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (isChromeTranslatorWrapper(node)) {
          scheduleRemount("font wrapper")
          return
        }
        if (isChromePopupElement(node)) {
          scheduleRemount("popup element")
          return
        }
      }
    }
  })

  // Watch whole body — Chrome inserts its popup toolbar outside #root.
  // Only watch additions; React's own re-renders change attributes a
  // lot and we don't want to remount on every render.
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}

// Attach after a beat so we don't catch React's own mount-time
// mutations as "Chrome translation".
setTimeout(attachObserver, 200)

// Debug handle for production troubleshooting.
if (typeof window !== "undefined") {
  ;(window as unknown as { __chromeTranslatorHandler?: unknown }).__chromeTranslatorHandler = {
    scheduleRemount,
    doRemount,
  }
}
