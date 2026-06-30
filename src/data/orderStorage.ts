// src/data/orderStorage.ts — Estado del flujo de pedido persistido en localStorage
import type { PricingPlan } from "./pricingPlans"

export type BillingCycle = "annual" | "monthly"

export type OrderConfig = {
  planSlug: string
  billing: BillingCycle
  modules: string[]
  updatedAt: string
}

/** Dane do faktury VAT — zbierane w kroku "Płatność" (B2B) */
export type InvoiceData = {
  needsVatInvoice: "yes" | "no"
  invoiceEmail: string
  companyName: string
  companyNip: string
}

export const emptyInvoice: InvoiceData = {
  needsVatInvoice: "no",
  invoiceEmail: "",
  companyName: "",
  companyNip: "",
}

export type IntakeForm = {
  contactName: string
  contactPhone: string
  contactEmail: string
  projectName: string
  projectDescription: string
  projectObjectives: string
  hasDomain: "yes" | "no" | "need-help"
  domainName: string
  hasCurrentWebsite: "yes" | "no"
  currentWebsiteUrl: string
  needsMailbox: "yes" | "no"
  mailboxCount: number
  mailboxNames: string
  files: { name: string; size: number; type: string; dataUrl: string }[]
  notes: string
  consent: boolean
}

export const emptyIntake: IntakeForm = {
  contactName: "",
  contactPhone: "",
  contactEmail: "",
  projectName: "",
  projectDescription: "",
  projectObjectives: "",
  hasDomain: "yes",
  domainName: "",
  hasCurrentWebsite: "no",
  currentWebsiteUrl: "",
  needsMailbox: "no",
  mailboxCount: 1,
  mailboxNames: "",
  files: [],
  notes: "",
  consent: false,
}

const configKey = (planSlug: string) => `orderFlow:config:${planSlug}`
const intakeKey = (planSlug: string) => `orderFlow:intake:${planSlug}`
const invoiceKey = (planSlug: string) => `orderFlow:invoice:${planSlug}`

export const loadConfig = (planSlug: string): OrderConfig | null => {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(configKey(planSlug))
    return raw ? (JSON.parse(raw) as OrderConfig) : null
  } catch {
    return null
  }
}

export const saveConfig = (cfg: OrderConfig): void => {
  if (typeof window === "undefined") return
  window.localStorage.setItem(
    configKey(cfg.planSlug),
    JSON.stringify({ ...cfg, updatedAt: new Date().toISOString() }),
  )
}

export const loadIntake = (planSlug: string): IntakeForm | null => {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(intakeKey(planSlug))
    return raw ? (JSON.parse(raw) as IntakeForm) : null
  } catch {
    return null
  }
}

export const saveIntake = (planSlug: string, form: IntakeForm): void => {
  if (typeof window === "undefined") return
  window.localStorage.setItem(intakeKey(planSlug), JSON.stringify(form))
}

export const loadInvoice = (planSlug: string): InvoiceData | null => {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(invoiceKey(planSlug))
    return raw ? (JSON.parse(raw) as InvoiceData) : null
  } catch {
    return null
  }
}

export const saveInvoice = (planSlug: string, data: InvoiceData): void => {
  if (typeof window === "undefined") return
  window.localStorage.setItem(invoiceKey(planSlug), JSON.stringify(data))
}

export const clearOrderFlow = (planSlug: string): void => {
  if (typeof window === "undefined") return
  window.localStorage.removeItem(configKey(planSlug))
  window.localStorage.removeItem(intakeKey(planSlug))
  window.localStorage.removeItem(invoiceKey(planSlug))
}

/** Devuelve la lista de módulos que un plan ya trae incluidos */
export const defaultModulesFor = (
  plan: Pick<PricingPlan, "slug">,
  availableModuleIds: string[],
): string[] => availableModuleIds
