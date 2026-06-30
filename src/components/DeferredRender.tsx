import { ReactNode, useEffect, useState } from "react"

type DeferredRenderProps = {
  children: ReactNode
  fallback?: ReactNode
  timeout?: number
}

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number
  cancelIdleCallback?: (id: number) => void
}

export const DeferredRender = ({
  children,
  fallback = null,
  timeout = 1200,
}: DeferredRenderProps) => {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const idleWindow = window as IdleWindow
    let timeoutId: number | undefined
    let idleId: number | undefined

    const activate = () => setShouldRender(true)

    if (idleWindow.requestIdleCallback) {
      idleId = idleWindow.requestIdleCallback(activate, { timeout })

      return () => {
        if (idleId !== undefined && idleWindow.cancelIdleCallback) {
          idleWindow.cancelIdleCallback(idleId)
        }
      }
    }

    timeoutId = window.setTimeout(activate, 350)

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [timeout])

  return shouldRender ? <>{children}</> : <>{fallback}</>
}
