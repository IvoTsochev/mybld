import { useLanguage } from "../context/LanguageContext";

export const LanguageSwitcher = () => {
  const { locale, setLocale, supportedLocales } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-white/30 p-1"
      role="group"
      aria-label="Language"
    >
      {supportedLocales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${
            locale === code
              ? "bg-white text-[#0a0f1e]"
              : "text-[#e0e0e0] hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
