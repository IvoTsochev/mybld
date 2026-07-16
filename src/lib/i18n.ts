export type Locale = 'bg' | 'en' | 'ru'

export const DEFAULT_LOCALE: Locale = 'bg'

export const SUPPORTED_LOCALES: { code: Locale; label: string }[] = [
  { code: 'bg', label: 'БГ' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
]

const LOCALE_SUFFIX: Record<Locale, string> = { bg: '', en: 'En', ru: 'Ru' }

const isBlank = (value: unknown): boolean => {
  if (value == null) return true
  if (typeof value === 'string') return value.trim() === ''
  if (Array.isArray(value)) return value.length === 0
  return false
}

// Reads `${baseField}${suffix}` off a Sanity doc, falling back to the
// Bulgarian base field when the localized value is missing/blank. Works for
// plain strings as well as richer values (e.g. Portable Text block arrays).
export function getLocalizedField<T = string>(
  doc: Record<string, unknown> | null | undefined,
  baseField: string,
  locale: Locale,
): T | undefined {
  if (!doc) return undefined
  const bgValue = doc[baseField] as T | undefined
  if (locale === DEFAULT_LOCALE) return bgValue
  const localizedValue = doc[`${baseField}${LOCALE_SUFFIX[locale]}`] as T | undefined
  return !isBlank(localizedValue) ? localizedValue : bgValue
}
