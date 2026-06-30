export const COOKIE_CONSENT_STORAGE_KEY = "seo-grow-cookie-consent"
export const COOKIE_SETTINGS_EVENT = "seo-grow:open-cookie-settings"

export type CookieConsentPreferences = {
  necessary: true
  functional: boolean
  analytics: boolean
  marketing: boolean
  updatedAt: string
  version: number
}

export const getDefaultCookiePreferences = (): CookieConsentPreferences => ({
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  updatedAt: new Date().toISOString(),
  version: 1,
})

export const readCookieConsent = (): CookieConsentPreferences | null => {
  if (typeof window === "undefined") {
    return null
  }

  try {
    const storedValue = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (!storedValue) {
      return null
    }

    const parsedValue = JSON.parse(storedValue) as Partial<CookieConsentPreferences>
    return {
      necessary: true,
      functional: Boolean(parsedValue.functional),
      analytics: Boolean(parsedValue.analytics),
      marketing: Boolean(parsedValue.marketing),
      updatedAt: typeof parsedValue.updatedAt === "string" ? parsedValue.updatedAt : new Date().toISOString(),
      version: typeof parsedValue.version === "number" ? parsedValue.version : 1,
    }
  } catch {
    return null
  }
}

export const writeCookieConsent = (preferences: Omit<CookieConsentPreferences, "updatedAt" | "version">) => {
  if (typeof window === "undefined") {
    return
  }

  const nextValue: CookieConsentPreferences = {
    ...preferences,
    necessary: true,
    updatedAt: new Date().toISOString(),
    version: 1,
  }

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(nextValue))
}

export const openCookieSettings = () => {
  if (typeof window === "undefined") {
    return
  }

  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))
}
