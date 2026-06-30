import { useEffect, useRef } from "react"

export const PrefetchLinks = () => {
  const prefetchQueue = useRef(new Set<string>())

  useEffect(() => {
    // Only prefetch in production or supported browsers
    if (typeof window === "undefined" || !window.IntersectionObserver) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const anchor = entry.target as HTMLAnchorElement
          const href = anchor.getAttribute("href")
          
          if (href && href.startsWith("/") && !prefetchQueue.current.has(href)) {
            prefetchQueue.current.add(href)
            
            const link = document.createElement("link")
            link.rel = "prefetch"
            link.href = href
            link.as = "document"
            
            // Appending to head triggers the prefetch
            document.head.appendChild(link)
            
            // Stop observing once prefetched
            observer.unobserve(anchor)
          }
        }
      })
    }, {
      rootMargin: "50px", // prefetch slightly before it enters viewport
      threshold: 0
    })

    // Setup mutation observer to watch for new links added to the DOM dynamically
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              const anchors = node.querySelectorAll("a[href^='/']")
              anchors.forEach((a) => {
                if (!prefetchQueue.current.has(a.getAttribute("href")!)) {
                  observer.observe(a)
                }
              })
              
              if (node instanceof HTMLAnchorElement && node.getAttribute("href")?.startsWith("/")) {
                if (!prefetchQueue.current.has(node.getAttribute("href")!)) {
                  observer.observe(node)
                }
              }
            }
          })
        }
      })
    })

    // Initial observation of existing links
    document.querySelectorAll("a[href^='/']").forEach((a) => {
      observer.observe(a)
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}
