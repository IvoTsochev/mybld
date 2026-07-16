import { createContext, useContext, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "../lib/i18n";

const STORAGE_KEY = "mybld-locale";

const isLocale = (value: unknown): value is Locale =>
  SUPPORTED_LOCALES.some((locale) => locale.code === value);

const readInitialLocale = (): Locale => {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : DEFAULT_LOCALE;
};

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  supportedLocales: typeof SUPPORTED_LOCALES;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, supportedLocales: SUPPORTED_LOCALES }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components -- hook is colocated with its provider
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
