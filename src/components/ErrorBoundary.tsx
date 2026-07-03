import { Component, type ErrorInfo, type ReactNode } from "react"

type Props = {
  children: ReactNode
  fallback?: ReactNode
}

type State = {
  hasError: boolean
}

/**
 * Catches render / hydration errors and shows a Polish fallback instead of
 * a blank screen. Typical trigger: Chrome's built-in translator mutates DOM
 * before React hydrates, causing a hydration mismatch that can blank parts
 * of the page. We try to mitigate this in `main.tsx` (hydrateRoot with a
 * backup + fallback to createRoot), but if anything still slips through,
 * ErrorBoundary is the last line of defense so the user always sees
 * something useful.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("[ErrorBoundary]", error, info)
  }

  private handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload()
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div
          role="alert"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            fontFamily:
              "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
            color: "#0F172A",
            background: "#FFFFFF",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "24px", margin: "0 0 12px" }}>
            Coś poszło nie tak
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.5,
              maxWidth: "520px",
              margin: "0 0 24px",
              color: "#475569",
            }}
          >
            Spróbuj odświeżyć stronę. Jeśli problem się powtarza, napisz do
            nas — pomożemy.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            style={{
              padding: "12px 24px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#FFFFFF",
              background: "#4F46E5",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Odśwież stronę
          </button>
        </div>
      )
    }

    return this.props.children
  }
}