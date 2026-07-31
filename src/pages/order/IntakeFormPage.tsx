// src/pages/order/IntakeFormPage.tsx — Krok 3: brief projektu (rediseño total wix-style)
// Formulario con secciones tipo wizard visual, todo en una página con anclas de navegación.
import { useEffect, useMemo, useRef, useState } from "react"
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Spinner,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom"
import { pricingPlans } from "../../data/pricingPlans"
import { availableModules } from "../../data/modules"
import {
  emptyIntake,
  loadConfig,
  loadIntake,
  saveIntake,
  type IntakeForm,
} from "../../data/orderStorage"
import { OrderLayout } from "./OrderLayout"

const fieldStyle = {
  width: "100%",
  border: "1.5px solid",
  borderColor: "border.default",
  borderRadius: "12px",
  background: "white",
  px: 4,
  py: 3,
  fontSize: "sm",
  color: "fg.default",
  transition: "all 0.15s",
  _hover: { borderColor: "border.strong" },
  _focus: {
    borderColor: "accent.600",
    boxShadow: "0 0 0 3px rgba(15, 118, 110, 0.12)",
    outline: "none",
  },
  _placeholder: { color: "fg.faint" },
}

const labelStyle = {
  fontSize: "sm",
  fontWeight: 700,
  color: "fg.default",
  mb: 2,
  display: "block",
}

const MAX_FILE_SIZE = 5 * 1024 * 1024
const MAX_FILES = 8
const MAX_TOTAL_SIZE = 25 * 1024 * 1024

const formatBytes = (n: number) => {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}

// Iconos auxiliares
const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const UploadIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
)

const UserIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const BriefcaseIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

const BoxIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
)

const GlobeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const MailIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const PaperclipIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
)

const NoteIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

const ClipboardIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  </svg>
)

const SearchIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const PinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const TargetIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const SECTIONS = [
  { id: "contact", title: "Dane kontaktowe", icon: UserIcon },
  { id: "business", title: "O Twojej firmie", icon: ClipboardIcon },
  { id: "project", title: "O projekcie", icon: BriefcaseIcon },
  { id: "modules", title: "Wybrane moduły", icon: BoxIcon },
  { id: "domain", title: "Domena i obecna strona", icon: GlobeIcon },
  { id: "mail", title: "Skrzynki e-mail", icon: MailIcon },
  { id: "files", title: "Materiały i pliki", icon: PaperclipIcon },
  { id: "notes", title: "Dodatkowe uwagi", icon: NoteIcon },
] as const

export const IntakeFormPage = () => {
  const { plan: planSlug } = useParams<{ plan: string }>()
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [form, setForm] = useState<IntakeForm>(emptyIntake)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  const plan = useMemo(
    () => pricingPlans.find((p) => p.slug === planSlug),
    [planSlug],
  )

  const config = useMemo(
    () => (planSlug ? loadConfig(planSlug) : null),
    [planSlug],
  )

  useEffect(() => {
    if (!plan || !config) {
      navigate(`/zamowienie/${planSlug ?? "start"}/configure`, { replace: true })
      return
    }
    const saved = loadIntake(plan.slug)
    if (saved) setForm(saved)
  }, [plan, config, navigate, planSlug])

  if (!plan || !config) {
    return (
      <Flex justify="center" py="20">
        <Spinner color="accent.600" />
      </Flex>
    )
  }

  const update = <K extends keyof IntakeForm>(key: K, value: IntakeForm[K]) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value }
      saveIntake(plan.slug, next)
      return next
    })
  }

  const handleFiles = (filesList: FileList | null) => {
    if (!filesList || filesList.length === 0) return
    setError("")
    const incoming = Array.from(filesList)
    const currentCount = form.files.length
    const currentSize = form.files.reduce((s, f) => s + f.size, 0)

    if (currentCount + incoming.length > MAX_FILES) {
      setError(`Maksymalnie ${MAX_FILES} plików. Masz już ${currentCount}.`)
      return
    }
    if (currentSize + incoming.reduce((s, f) => s + f.size, 0) > MAX_TOTAL_SIZE) {
      setError(`Łączny rozmiar plików nie może przekroczyć ${formatBytes(MAX_TOTAL_SIZE)}.`)
      return
    }

    const accepted: { name: string; size: number; type: string; dataUrl: string }[] = []
    let rejected = 0
    let processed = 0
    incoming.forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        rejected++
        processed++
        if (processed === incoming.length && rejected) {
          setError((prev) =>
            prev
              ? prev
              : `${rejected} plik(i) waży więcej niż ${formatBytes(MAX_FILE_SIZE)} i został pominięty.`,
          )
        }
        return
      }
      const reader = new FileReader()
      reader.onload = () => {
        accepted.push({
          name: file.name,
          size: file.size,
          type: file.type,
          dataUrl: String(reader.result || ""),
        })
        processed++
        if (processed === incoming.length) {
          update("files", [...form.files, ...accepted])
          if (rejected) {
            setError(`${rejected} plik(i) pominięto (przekracza ${formatBytes(MAX_FILE_SIZE)}).`)
          }
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const removeFile = (idx: number) => {
    update(
      "files",
      form.files.filter((_, i) => i !== idx),
    )
  }

  const validate = (): string | null => {
    if (!form.contactName.trim()) return "Potrzebujemy Twojego imienia i nazwiska."
    if (!form.contactPhone.trim()) return "Potrzebujemy numeru telefonu."
    if (!form.contactEmail.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.contactEmail))
      return "Podaj poprawny adres e-mail."
    if (
      !form.businessDescription.trim() &&
      !form.competitorAnalysis.trim() &&
      !form.serviceArea.trim() &&
      !form.businessGoals.trim()
    )
      return "Opisz w kilku zdaniach swoją firmę, okolicę, zasięg lub cele — wystarczy jedno pole."
    if (!form.projectName.trim()) return "Podaj nazwę projektu."
    if (!form.projectDescription.trim()) return "Opisz w kilku zdaniach, czym zajmuje się firma."
    if (!form.consent) return "Potrzebujemy Twojej zgody na przetwarzanie danych."
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const err = validate()
    if (err) {
      setError(err)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      saveIntake(plan.slug, form)
      navigate(`/zamowienie/${plan.slug}/dziekujemy`)
    }, 800)
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`section-${id}`)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <OrderLayout step="intake">
      <Grid templateColumns={{ base: "1fr", lg: "1.6fr 1fr" }} gap={{ base: "6", lg: "8" }} alignItems="start">
        <GridItem>
          {/* Hero card del formulario */}
          <Box
            bg="linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)"
            color="white"
            rounded="2xl"
            p={{ base: "5", md: "7" }}
            mb={{ base: "5", md: "6" }}
            position="relative"
            overflow="hidden"
          >
            <Text fontSize="2xs" color="whiteAlpha.800" textTransform="uppercase" letterSpacing="0.1em" fontWeight="800" mb="2">
              Ostatni krok
            </Text>
            <Heading as="h1" size="xl" color="white" letterSpacing="-0.02em" mb="2">
              Brief projektu
            </Heading>
            <Text color="whiteAlpha.900" fontSize="sm" lineHeight="1.6" maxW="2xl">
              Po Twojej akceptacji zaczynamy pracę w 24 godziny. Im więcej konkretów, tym szybciej pójdzie — ale jeśli czegoś jeszcze nie wiesz, nie blokuj. Wszystko dogadamy na pierwszej rozmowie.
            </Text>
          </Box>

          {error && (
            <Box
              mb="5"
              p="4"
              rounded="xl"
              bg="#FEF2F2"
              border="1px solid #FECACA"
              color="#991B1B"
              fontSize="sm"
            >
              {error}
            </Box>
          )}

          <form onSubmit={handleSubmit}>
            <VStack align="stretch" gap={{ base: "5", md: "6" }}>
              {/* 1. Datos de contacto */}
              <Section
                id="contact"
                index={1}
                title="Dane kontaktowe"
                sub="Żebyśmy mogli zadzwonić lub napisać."
                icon={UserIcon}
              >
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
                  <FormField label="Imię i nazwisko" required>
                    <Input
                      {...fieldStyle}
                      placeholder="Anna Kowalska"
                      value={form.contactName}
                      onChange={(e) => update("contactName", e.target.value)}
                    />
                  </FormField>
                  <FormField label="Telefon" required>
                    <Input
                      {...fieldStyle}
                      type="tel"
                      placeholder="+48 600 000 000"
                      value={form.contactPhone}
                      onChange={(e) => update("contactPhone", e.target.value)}
                    />
                  </FormField>
                  <FormField label="E-mail" required colSpan={2}>
                    <Input
                      {...fieldStyle}
                      type="email"
                      placeholder="anna@twojafirma.pl"
                      value={form.contactEmail}
                      onChange={(e) => update("contactEmail", e.target.value)}
                    />
                  </FormField>
                </Grid>
              </Section>

              {/* 2. O Twojej firmie — 4 pytania brief (Inputs reales) */}
              <Section
                id="business"
                index={2}
                title="O Twojej firmie"
                sub="4 pytania · 5 min · bez zobowiązań. Wystarczy wypełnić jedno — resztę doprecyzujemy na rozmowie."
                icon={ClipboardIcon}
              >
                <VStack align="stretch" gap="5">
                  <FormField
                    label="01 · Czym się zajmujesz i dla kogo"
                    helper="Opowiedz krótko o swojej działalności i o swoim kliencie."
                    example="Gabinet stomatologiczny · pacjenci 25–55 lat we Wrocławiu"
                  >
                    <Textarea
                      {...fieldStyle}
                      rows={3}
                      placeholder="Np. prowadzę gabinet stomatologiczny we Wrocławiu, klienci 25–55 lat, głównie leczenie i protetyka."
                      value={form.businessDescription}
                      onChange={(e) => update("businessDescription", e.target.value)}
                    />
                  </FormField>

                  <FormField
                    label="02 · Jak wygląda Twoja okolica"
                    helper="Kto jest Twoją bezpośrednią konkurencją i co robią dobrze lub źle."
                    example="3 kliniki w Krzykach · żadna nie ma dopracowanej strony"
                  >
                    <Textarea
                      {...fieldStyle}
                      rows={3}
                      placeholder="Np. w okolicy działa 3 konkurencyjnych gabinetów, wszyscy mają stare strony, nikt nie dba o SEO."
                      value={form.competitorAnalysis}
                      onChange={(e) => update("competitorAnalysis", e.target.value)}
                    />
                  </FormField>

                  <FormField
                    label="03 · Gdzie działasz"
                    helper="Miasto, dzielnica lub zasięg. Przyjmujesz też online?"
                    example="Wrocław · Krzyki · pacjenci z całego miasta"
                  >
                    <Textarea
                      {...fieldStyle}
                      rows={3}
                      placeholder="Np. Wrocław, dzielnica Krzyki, ale dojeżdżają też pacjenci z całego miasta i okolic."
                      value={form.serviceArea}
                      onChange={(e) => update("serviceArea", e.target.value)}
                    />
                  </FormField>

                  <FormField
                    label="04 · Co chcesz osiągnąć"
                    helper="Więcej rezerwacji, więcej telefonów, wyższa pozycja w Google?"
                    example="Więcej rezerwacji online + wyświetlanie się w Google Maps"
                  >
                    <Textarea
                      {...fieldStyle}
                      rows={3}
                      placeholder="Np. więcej rezerwacji online przez stronę i wyświetlanie się w Google Maps na hasło 'dentysta Krzyki'."
                      value={form.businessGoals}
                      onChange={(e) => update("businessGoals", e.target.value)}
                    />
                  </FormField>
                </VStack>
              </Section>

              {/* 3. Sobre el proyecto */}
              <Section
                id="project"
                index={3}
                title="O projekcie"
                sub="Pomocne, żeby przygotować stronę dopasowaną do Twojej firmy."
                icon={BriefcaseIcon}
              >
                <VStack align="stretch" gap="4">
                  <FormField label="Nazwa projektu" required>
                    <Input
                      {...fieldStyle}
                      placeholder="Karczma Staropolska · Fotografia Anna · Auto-Serwis Marek"
                      value={form.projectName}
                      onChange={(e) => update("projectName", e.target.value)}
                    />
                  </FormField>
                  <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
                    <FormField label="Krótki opis" required>
                      <Textarea
                        {...fieldStyle}
                        rows={5}
                        placeholder="Czym zajmuje się firma? Co sprzedaje lub oferuje? Kim jest klient idealny?"
                        value={form.projectDescription}
                        onChange={(e) => update("projectDescription", e.target.value)}
                      />
                    </FormField>
                    <FormField label="Cele strony" required>
                      <Textarea
                        {...fieldStyle}
                        rows={5}
                        placeholder="Co strona ma osiągnąć? (np. więcej telefonów, rezerwacje online, prezentacja portfolio, sprzedaż produktów...)"
                        value={form.projectObjectives}
                        onChange={(e) => update("projectObjectives", e.target.value)}
                      />
                    </FormField>
                  </Grid>
                </VStack>
              </Section>

              {/* 4. Módulos */}
              <Section
                id="modules"
                index={4}
                title="Wybrane moduły"
                sub="To, co aktywujemy w Twoim panelu CMS."
                icon={BoxIcon}
              >
                <Flex gap="2" wrap="wrap">
                  {config.modules.length === 0 ? (
                    <Text color="fg.muted" fontSize="sm">Brak dodatkowych modułów.</Text>
                  ) : (
                    config.modules.map((id) => {
                      const mod = availableModules.find((m) => m.id === id)
                      if (!mod) return null
                      return (
                        <Box
                          key={id}
                          px="3"
                          py="1.5"
                          rounded="full"
                          bg="accent.50"
                          color="accent.700"
                          border="1px solid"
                          borderColor="accent.200"
                          fontSize="xs"
                          fontWeight="700"
                        >
                          {mod.name}
                        </Box>
                      )
                    })
                  )}
                </Flex>
              </Section>

              {/* 5. Dominio y sitio actual */}
              <Section
                id="domain"
                index={5}
                title="Domena i obecna strona"
                sub="Żebyśmy mogli ruszyć od razu z właściwymi podstawami."
                icon={GlobeIcon}
              >
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="5">
                  <RadioGroup
                    label="Czy masz już domenę?"
                    value={form.hasDomain}
                    onChange={(v) => update("hasDomain", v as IntakeForm["hasDomain"])}
                    options={[
                      { value: "yes", label: "Tak, mam swoją" },
                      { value: "no", label: "Nie, potrzebuję" },
                      { value: "need-help", label: "Pomóżcie mi wybrać" },
                    ]}
                  />
                  {form.hasDomain === "yes" && (
                    <FormField label="Jaka to domena?">
                      <Input
                        {...fieldStyle}
                        placeholder="twojafirma.pl"
                        value={form.domainName}
                        onChange={(e) => update("domainName", e.target.value)}
                      />
                    </FormField>
                  )}

                  <RadioGroup
                    label="Czy masz już stronę?"
                    value={form.hasCurrentWebsite}
                    onChange={(v) => update("hasCurrentWebsite", v as IntakeForm["hasCurrentWebsite"])}
                    options={[
                      { value: "no", label: "Nie, to nowy projekt" },
                      { value: "yes", label: "Tak, chcemy przenieść" },
                    ]}
                  />
                  {form.hasCurrentWebsite === "yes" && (
                    <FormField label="Adres obecnej strony">
                      <Input
                        {...fieldStyle}
                        placeholder="https://twoja-obecna-strona.pl"
                        value={form.currentWebsiteUrl}
                        onChange={(e) => update("currentWebsiteUrl", e.target.value)}
                      />
                    </FormField>
                  )}
                </Grid>
              </Section>

              {/* 6. Buzones */}
              <Section
                id="mail"
                index={6}
                title="Skrzynki e-mail"
                sub="Firmowy mail na Twojej domenie (np. kontakt@twojafirma.pl)."
                icon={MailIcon}
              >
                <RadioGroup
                  label="Czy potrzebujesz skrzynek e-mail?"
                  value={form.needsMailbox}
                  onChange={(v) => update("needsMailbox", v as IntakeForm["needsMailbox"])}
                  options={[
                    { value: "no", label: "Nie, mam już pocztę / nie potrzebuję" },
                    { value: "yes", label: "Tak, skonfigurujcie mi firmowe skrzynki" },
                  ]}
                />
                {form.needsMailbox === "yes" && (
                  <VStack align="stretch" gap="4" mt="5">
                    <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap="4">
                      <FormField label="Ile skrzynek?" required>
                        <Input
                          {...fieldStyle}
                          type="number"
                          min={1}
                          max={20}
                          value={form.mailboxCount || ""}
                          onChange={(e) => update("mailboxCount", Number(e.target.value) || 0)}
                          placeholder="1"
                        />
                      </FormField>
                      <FormField label="Jakie adresy?" required>
                        <Textarea
                          {...fieldStyle}
                          rows={Math.min(Math.max(form.mailboxCount || 1, 1), 6)}
                          placeholder={
                            "Podaj po jednym adresie na linię, np.:\nkontakt@twojafirma.pl\nbiuro@twojafirma.pl\njan@twojafirma.pl"
                          }
                          value={form.mailboxNames}
                          onChange={(e) => update("mailboxNames", e.target.value)}
                        />
                      </FormField>
                    </Grid>
                    <Text fontSize="xs" color="fg.muted" lineHeight="1.5">
                      Domyślnie konfigurujemy skrzynki w <Box as="strong" color="fg.default">Zoho Mail</Box> (do
                      5 skrzynek za darmo). Jeśli masz inną domenę lub chcesz innego dostawcę, daj
                      znać w uwagach na dole.
                    </Text>
                  </VStack>
                )}
              </Section>

              {/* 7. Archivos */}
              <Section
                id="files"
                index={7}
                title="Materiały i pliki"
                sub="Logo, zdjęcia lokalu, produktów, dokumenty — wszystko, co pomoże nam pracować."
                icon={PaperclipIcon}
              >
                <Box
                  onDragOver={(e) => {
                    e.preventDefault()
                    e.currentTarget.classList.add("drag-over")
                  }}
                  onDragLeave={(e) => e.currentTarget.classList.remove("drag-over")}
                  onDrop={(e) => {
                    e.preventDefault()
                    e.currentTarget.classList.remove("drag-over")
                    handleFiles(e.dataTransfer.files)
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  cursor="pointer"
                  p={{ base: "6", md: "10" }}
                  rounded="2xl"
                  border="2px dashed"
                  borderColor="border.strong"
                  bg="bg.subtle"
                  textAlign="center"
                  transition="all 0.15s"
                  _hover={{ borderColor: "accent.500", bg: "accent.50" }}
                >
                  <Input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    display="none"
                    onChange={(e) => handleFiles(e.target.files)}
                  />
                  <Flex
                    w="14"
                    h="14"
                    rounded="2xl"
                    bg="bg.canvas"
                    border="1px solid"
                    borderColor="border.default"
                    align="center"
                    justifyContent="center"
                    mx="auto"
                    mb="4"
                    color="accent.700"
                  >
                    <UploadIcon />
                  </Flex>
                  <Text fontSize="md" fontWeight="700" color="fg.default" mb="1">
                    Przeciągnij pliki tutaj lub kliknij, żeby wybrać
                  </Text>
                  <Text fontSize="xs" color="fg.muted" maxW="md" mx="auto">
                    Zdjęcia, logo, PDF-y, dokumenty. Maks. {MAX_FILES} plików · {formatBytes(MAX_FILE_SIZE)} każdy · {formatBytes(MAX_TOTAL_SIZE)} łącznie.
                  </Text>
                </Box>

                {form.files.length > 0 && (
                  <VStack align="stretch" gap="2" mt="4">
                    {form.files.map((f, i) => (
                      <Flex
                        key={i}
                        align="center"
                        gap="3"
                        p="3"
                        rounded="xl"
                        bg="bg.canvas"
                        border="1px solid"
                        borderColor="border.default"
                      >
                        {f.type.startsWith("image/") ? (
                          <Box
                            w="11"
                            h="11"
                            rounded="lg"
                            bgImage={`url(${f.dataUrl})`}
                            bgSize="cover"
                            bgPos="center"
                            flexShrink={0}
                          />
                        ) : (
                          <Flex
                            w="11"
                            h="11"
                            rounded="lg"
                            bg="accent.50"
                            color="accent.700"
                            align="center"
                            justifyContent="center"
                            flexShrink={0}
                            fontSize="xs"
                            fontWeight="800"
                          >
                            {f.name.split(".").pop()?.toUpperCase() || "?"}
                          </Flex>
                        )}
                        <VStack align="flex-start" gap="0" flex="1" minW="0">
                          <Text fontSize="sm" color="fg.default" fontWeight="600" truncate w="full">
                            {f.name}
                          </Text>
                          <Text fontSize="xs" color="fg.muted">
                            {formatBytes(f.size)}
                          </Text>
                        </VStack>
                        <Box
                          as="button"
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeFile(i)
                          }}
                          px="3"
                          py="1.5"
                          rounded="lg"
                          fontSize="xs"
                          fontWeight="700"
                          color="#DC2626"
                          bg="#FEF2F2"
                          _hover={{ bg: "#FEE2E2" }}
                          transition="background 0.15s"
                        >
                          Usuń
                        </Box>
                      </Flex>
                    ))}
                  </VStack>
                )}
              </Section>

              {/* 8. Notas */}
              <Section
                id="notes"
                index={8}
                title="Coś jeszcze, co powinniśmy wiedzieć"
                sub="Kolory, styl, strony które Ci się podobają, ważne terminy."
                icon={NoteIcon}
              >
                <Textarea
                  {...fieldStyle}
                  rows={4}
                  placeholder="Tutaj wklej referencje, linki do stron które lubisz, paletę kolorów, ważne daty lub cokolwiek innego."
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              </Section>

              {/* Zgoda */}
              <Box
                p={{ base: "5", md: "6" }}
                rounded="2xl"
                border="1px solid"
                borderColor="border.default"
                bg="bg.canvas"
              >
                <Checkbox.Root
                  checked={form.consent}
                  onCheckedChange={(d) => update("consent", d.checked === true)}
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control
                    w="5"
                    h="5"
                    rounded="6px"
                    borderWidth="2px"
                    borderColor={form.consent ? "accent.600" : "border.strong"}
                    bg={form.consent ? "accent.600" : "bg.canvas"}
                    color="white"
                    _hover={{ borderColor: form.consent ? "accent.600" : "fg.faint" }}
                  >
                    {form.consent && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    )}
                  </Checkbox.Control>
                  <Checkbox.Label>
                    <Text fontSize="sm" color="fg.muted" lineHeight="1.5">
                      Wyrażam zgodę na przechowywanie moich danych i przesłanych plików przez SEO Grow
                      w celu przygotowania projektu. Szczegóły w{" "}
                      <Box as="a" href="/polityka-prywatnosci" color="accent.700" fontWeight="700" textDecoration="underline">
                        polityce prywatności
                      </Box>
                      .
                    </Text>
                  </Checkbox.Label>
                </Checkbox.Root>
              </Box>

              <Flex justify="flex-end">
                <Button
                  type="submit"
                  isLoading={submitting}
                  loadingText="Wysyłanie..."
                  spinner={<Spinner size="sm" color="white" />}
                  h="14"
                  px="8"
                  rounded="xl"
                  bg="accent.600"
                  color="white"
                  fontWeight="800"
                  fontSize="md"
                  _hover={{ bg: "accent.700", transform: "translateY(-1px)" }}
                  _active={{ bg: "accent.800" }}
                  transition="all 0.15s"
                  boxShadow="0 10px 25px -10px rgba(15, 118, 110, 0.5)"
                >
                  Wyślij brief
                  <Box ml="1.5" display="inline-flex" alignItems="center">
                    <ArrowRightIcon size={16} />
                  </Box>
                </Button>
              </Flex>
            </VStack>
          </form>
        </GridItem>

        {/* Sidebar: navegación de secciones + garantía */}
        <GridItem>
          <Box
            position={{ base: "static", lg: "sticky" }}
            top="6"
            display="flex"
            flexDirection="column"
            gap="4"
          >
            <Box
              bg="bg.canvas"
              rounded="2xl"
              border="1px solid"
              borderColor="border.default"
              p={{ base: "4", md: "5" }}
            >
              <Text
                fontSize="2xs"
                color="accent.700"
                textTransform="uppercase"
                letterSpacing="0.12em"
                fontWeight="800"
                mb="3"
              >
                Spis treści
              </Text>
              <VStack align="stretch" gap="1">
                {SECTIONS.map((s) => {
                  const Icon = s.icon
                  return (
                    <HStack
                      key={s.id}
                      as="button"
                      type="button"
                      onClick={() => scrollToSection(s.id)}
                      gap="2.5"
                      p="2"
                      rounded="lg"
                      cursor="pointer"
                      transition="all 0.15s"
                      _hover={{ bg: "bg.subtle" }}
                      textAlign="left"
                    >
                      <Flex
                        w="7"
                        h="7"
                        rounded="lg"
                        bg="accent.50"
                        color="accent.700"
                        align="center"
                        justifyContent="center"
                        fontSize="2xs"
                        fontWeight="800"
                        flexShrink={0}
                      >
                        {s.index}
                      </Flex>
                      <Text fontSize="sm" color="fg.default" fontWeight="600" lineHeight="1.2">
                        {s.title}
                      </Text>
                    </HStack>
                  )
                })}
              </VStack>
            </Box>

            <Box
              bg="bg.subtle"
              rounded="2xl"
              p={{ base: "4", md: "5" }}
              border="1px solid"
              borderColor="border.default"
            >
              <Text fontSize="sm" fontWeight="700" color="fg.default" mb="2">
                Co się stanie po wysłaniu?
              </Text>
              <VStack align="stretch" gap="2.5">
                <HStack gap="2.5" align="flex-start">
                  <Box
                    w="6"
                    h="6"
                    rounded="full"
                    bg="accent.600"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xs"
                    fontWeight="800"
                    flexShrink={0}
                  >
                    1
                  </Box>
                  <Text fontSize="xs" color="fg.muted" lineHeight="1.4">
                    <Box as="strong" color="fg.default">Zadzwonimy w 24h</Box>, żeby doprecyzować szczegóły.
                  </Text>
                </HStack>
                <HStack gap="2.5" align="flex-start">
                  <Box
                    w="6"
                    h="6"
                    rounded="full"
                    bg="accent.600"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xs"
                    fontWeight="800"
                    flexShrink={0}
                  >
                    2
                  </Box>
                  <Text fontSize="xs" color="fg.muted" lineHeight="1.4">
                    <Box as="strong" color="fg.default">W ciągu 5 dni</Box> roboczych strona jest gotowa.
                  </Text>
                </HStack>
                <HStack gap="2.5" align="flex-start">
                  <Box
                    w="6"
                    h="6"
                    rounded="full"
                    bg="accent.600"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xs"
                    fontWeight="800"
                    flexShrink={0}
                  >
                    3
                  </Box>
                  <Text fontSize="xs" color="fg.muted" lineHeight="1.4">
                    <Box as="strong" color="fg.default">Akceptujesz</Box> i zostajesz właścicielem strony.
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </OrderLayout>
  )
}

const Section = ({
  id,
  index,
  title,
  sub,
  icon: Icon,
  children,
}: {
  id: string
  index: number
  title: string
  sub?: string
  icon: React.ComponentType<{ size?: number }>
  children: React.ReactNode
}) => (
  <Box
    id={`section-${id}`}
    bg="bg.canvas"
    rounded="2xl"
    border="1px solid"
    borderColor="border.default"
    p={{ base: "5", md: "7" }}
    scrollMarginTop="160px"
  >
    <Flex align="center" gap="3" mb="5">
      <Flex
        w="10"
        h="10"
        rounded="xl"
        bg="accent.50"
        color="accent.700"
        align="center"
        justifyContent="center"
        flexShrink={0}
        fontSize="sm"
        fontWeight="800"
        position="relative"
      >
        <Icon size={18} />
        <Box
          position="absolute"
          top="-1"
          right="-1"
          w="4"
          h="4"
          rounded="full"
          bg="accent.600"
          color="white"
          fontSize="2xs"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {index}
        </Box>
      </Flex>
      <Box>
        <Heading as="h2" size="md" color="fg.default" letterSpacing="-0.01em" lineHeight="1.2">
          {title}
        </Heading>
        {sub && (
          <Text color="fg.muted" fontSize="sm" mt="0.5">
            {sub}
          </Text>
        )}
      </Box>
    </Flex>
    {children}
  </Box>
)

const FormField = ({
  label,
  required,
  children,
  colSpan,
  helper,
  example,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
  colSpan?: number
  helper?: string
  example?: string
}) => (
  <Box gridColumn={colSpan ? { base: "auto", md: `span ${colSpan}` } : undefined}>
    <Box as="label" {...labelStyle}>
      {label}
      {required && <Box as="span" color="#EF4444" ml="1">*</Box>}
    </Box>
    {helper && (
      <Text fontSize="xs" color="fg.muted" mb="2" lineHeight="1.5">
        {helper}
      </Text>
    )}
    {children}
    {example && (
      <Text fontSize="2xs" color="fg.subtle" mt="2" fontStyle="italic" lineHeight="1.4">
        Przykład: {example}
      </Text>
    )}
  </Box>
)

const RadioGroup = <T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: T
  onChange: (v: T) => void
  options: { value: T; label: string }[]
}) => (
  <Box>
    <Box {...labelStyle}>{label}</Box>
    <VStack align="stretch" gap="2">
      {options.map((o) => {
        const isActive = o.value === value
        return (
          <Flex
            key={o.value}
            as="button"
            type="button"
            onClick={() => onChange(o.value)}
            align="center"
            gap="3"
            p="3.5"
            rounded="xl"
            border="2px solid"
            borderColor={isActive ? "accent.500" : "border.default"}
            bg={isActive ? "accent.50" : "bg.canvas"}
            transition="all 0.15s"
            cursor="pointer"
            _hover={!isActive ? { borderColor: "border.strong" } : undefined}
          >
            <Box
              w="5"
              h="5"
              rounded="full"
              flexShrink={0}
              border="2px solid"
              borderColor={isActive ? "accent.600" : "border.strong"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="all 0.15s"
            >
              {isActive && <Box w="2.5" h="2.5" rounded="full" bg="accent.600" />}
            </Box>
            <Text fontSize="sm" color="fg.default" fontWeight={isActive ? 700 : 500}>
              {o.label}
            </Text>
          </Flex>
        )
      })}
    </VStack>
  </Box>
)
