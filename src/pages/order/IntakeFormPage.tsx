// src/pages/order/IntakeFormPage.tsx — Krok 3: brief projektu (PL)
import { useEffect, useMemo, useRef, useState } from "react"
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
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
  border: "2px solid #E2E8F0",
  borderRadius: "12px",
  background: "white",
  px: 4,
  py: 3,
  fontSize: "sm",
  color: "#0F172A",
  transition: "all 0.15s",
  _hover: { borderColor: "#CBD5E1" },
  _focus: {
    borderColor: "#4F46E5",
    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.12)",
    outline: "none",
  },
  _placeholder: { color: "#94A3B8" },
}

const labelStyle = {
  fontSize: "sm",
  fontWeight: 700,
  color: "#0F172A",
  mb: 2,
  display: "block",
}

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB
const MAX_FILES = 8
const MAX_TOTAL_SIZE = 25 * 1024 * 1024 // 25 MB

const formatBytes = (n: number) => {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}

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
        <Spinner color="#4F46E5" />
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

  return (
    <OrderLayout step="intake">
      <Box mb={{ base: "6", md: "8" }} maxW="3xl">
        <Heading as="h1" size="xl" color="#0F172A" mb="3" letterSpacing="-0.02em">
          Brief projektu
        </Heading>
        <Text color="#475569" fontSize="md" lineHeight="1.6">
          Po Twojej akceptacji zaczynamy pracę nad stroną w ciągu 24 godzin. Im więcej konkretów,
          tym szybciej pójdzie — ale jeśli czegoś jeszcze nie wiesz, nie blokuj. Wszystko
          dogadamy na pierwszej rozmowie.
        </Text>
      </Box>

      {error && (
        <Box
          mb="6"
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
          {/* 1. Dane kontaktowe */}
          <Section title="Dane kontaktowe" sub="Żebyśmy mogli zadzwonić lub napisać.">
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

          {/* 2. O projekcie */}
          <Section title="O projekcie" sub="Pomocne, żeby przygotować stronę dopasowaną do Twojej firmy.">
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

          {/* 3. Moduły */}
          <Section title="Wybrane moduły" sub="To, co aktywujemy w Twoim panelu CMS.">
            <Flex gap="2" wrap="wrap">
              {config.modules.length === 0 ? (
                <Text color="#64748B" fontSize="sm">Brak dodatkowych modułów.</Text>
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
                      bg="#EEF2FF"
                      color="#4F46E5"
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

          {/* 4. Domena i obecna strona */}
          <Section title="Domena i obecna strona" sub="Żebyśmy mogli ruszyć od razu z właściwymi podstawami.">
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

          {/* 4b. Skrzynki e-mail */}
          <Section
            title="Skrzynki e-mail"
            sub="Firmowy mail na Twojej domenie (np. kontakt@twojafirma.pl)."
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
                  <FormField
                    label="Jakie adresy?"
                    required
                  >
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
                <Text fontSize="xs" color="#64748B" lineHeight="1.5">
                  Domyślnie konfigurujemy skrzynki w <Box as="strong" color="#0F172A">Zoho Mail</Box> (do
                  5 skrzynek za darmo). Jeśli masz inną domenę lub chcesz innego dostawcę, daj
                  znać w uwagach na dole.
                </Text>
              </VStack>
            )}
          </Section>

          {/* 5. Pliki */}
          <Section title="Materiały i pliki" sub="Logo, zdjęcia lokalu, produktów, dokumenty — wszystko, co pomoże nam pracować.">
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
              borderColor="#CBD5E1"
              bg="#F8FAFC"
              textAlign="center"
              transition="all 0.15s"
              _hover={{ borderColor: "#4F46E5", bg: "#EEF2FF" }}
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
                bg="white"
                border="1px solid #E2E8F0"
                align="center"
                justifyContent="center"
                mx="auto"
                mb="4"
                color="#4F46E5"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </Flex>
              <Text fontSize="md" fontWeight="700" color="#0F172A" mb="1">
                Przeciągnij pliki tutaj lub kliknij, żeby wybrać
              </Text>
              <Text fontSize="xs" color="#64748B" maxW="md" mx="auto">
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
                    bg="white"
                    border="1px solid #E2E8F0"
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
                        bg="#EEF2FF"
                        color="#4F46E5"
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
                      <Text fontSize="sm" color="#0F172A" fontWeight="600" truncate w="full">
                        {f.name}
                      </Text>
                      <Text fontSize="xs" color="#64748B">
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

          {/* 6. Dodatkowe uwagi */}
          <Section title="Coś jeszcze, co powinniśmy wiedzieć" sub="Kolory, styl, strony które Ci się podobają, ważne terminy.">
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
            p="5"
            rounded="2xl"
            border="1px solid #E2E8F0"
            bg="white"
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
                borderColor={form.consent ? "#4F46E5" : "#CBD5E1"}
                bg={form.consent ? "#4F46E5" : "white"}
                color="white"
                _hover={{ borderColor: form.consent ? "#4F46E5" : "#94A3B8" }}
              >
                {form.consent && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </Checkbox.Control>
              <Checkbox.Label>
                <Text fontSize="sm" color="#475569" lineHeight="1.5">
                  Wyrażam zgodę na przechowywanie moich danych i przesłanych plików przez SEO Grow
                  w celu przygotowania projektu. Szczegóły w{" "}
                  <Box as="a" href="/polityka-prywatnosci" color="#4F46E5" fontWeight="700" textDecoration="underline">
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
              px="10"
              rounded="xl"
              bg="#4F46E5"
              color="white"
              fontWeight="800"
              fontSize="md"
              _hover={{ bg: "#4338CA", transform: "translateY(-1px)" }}
              _active={{ bg: "#3730A3" }}
              transition="all 0.15s"
              boxShadow="0 10px 30px -10px rgba(79, 70, 229, 0.5)"
            >
              Wyślij brief →
            </Button>
          </Flex>
        </VStack>
      </form>
    </OrderLayout>
  )
}

const Section = ({
  title,
  sub,
  children,
}: {
  title: string
  sub?: string
  children: React.ReactNode
}) => (
  <Box
    bg="white"
    rounded="2xl"
    border="1px solid #E2E8F0"
    p={{ base: "5", md: "8" }}
    boxShadow="0 1px 3px rgba(15, 23, 42, 0.04)"
  >
    <Heading as="h2" size="md" color="#0F172A" mb="1" letterSpacing="-0.01em">
      {title}
    </Heading>
    {sub && (
      <Text color="#64748B" fontSize="sm" mb="5">
        {sub}
      </Text>
    )}
    {children}
  </Box>
)

const FormField = ({
  label,
  required,
  children,
  colSpan,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
  colSpan?: number
}) => (
  <Box gridColumn={colSpan ? { base: "auto", md: `span ${colSpan}` } : undefined}>
    <Box as="label" {...labelStyle}>
      {label}
      {required && <Box as="span" color="#EF4444" ml="1">*</Box>}
    </Box>
    {children}
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
            borderColor={isActive ? "#4F46E5" : "#E2E8F0"}
            bg={isActive ? "#FAFBFF" : "white"}
            transition="all 0.15s"
            cursor="pointer"
            _hover={!isActive ? { borderColor: "#CBD5E1" } : undefined}
          >
            <Box
              w="5"
              h="5"
              rounded="full"
              flexShrink={0}
              border="2px solid"
              borderColor={isActive ? "#4F46E5" : "#CBD5E1"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="all 0.15s"
            >
              {isActive && <Box w="2.5" h="2.5" rounded="full" bg="#4F46E5" />}
            </Box>
            <Text fontSize="sm" color="#0F172A" fontWeight={isActive ? 700 : 500}>
              {o.label}
            </Text>
          </Flex>
        )
      })}
    </VStack>
  </Box>
)