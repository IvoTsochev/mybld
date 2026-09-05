import { useState } from 'react';
import { ArrowRight, MapPin, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAnnouncementBannerData } from '../hooks/useSanityData';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedField } from '../lib/i18n';

const DISMISSED_KEY = 'announcementBannerDismissed';

export const AnnouncementBanner = () => {
  const { data: sanityData, isLoading } = useAnnouncementBannerData();
  const { locale } = useLanguage();
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem(DISMISSED_KEY) === 'true'
  );

  if (isLoading || !sanityData || !sanityData.enabled || dismissed) return null;

  const handleClose = () => {
    sessionStorage.setItem(DISMISSED_KEY, 'true');
    setDismissed(true);
  };

  const badge = getLocalizedField(sanityData, 'badge', locale);
  const message = getLocalizedField(sanityData, 'message', locale);
  const linkText = getLocalizedField(sanityData, 'linkText', locale);

  return (
    <div
      className="relative w-full md:sticky md:top-0 z-[60] bg-linear-to-r from-[#ff7043] via-[#ff7a59] to-[#ff8a65] shadow-[0_4px_20px_rgba(255,112,67,0.35)]"
      role="status"
      aria-live="polite"
    >
      <button
        type="button"
        onClick={handleClose}
        aria-label="Close announcement"
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
      >
        <X size={24} strokeWidth={2.75} aria-hidden />
      </button>

      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-3 px-10 py-4 text-center font-sans md:flex-row md:gap-6 md:px-[5%] md:py-3.5 md:pr-12 md:text-left">
        {badge && (
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#ff7043] shadow-sm">
            <MapPin size={16} aria-hidden />
            {badge}
          </span>
        )}

        {message && (
          <p className="max-w-2xl text-base font-semibold leading-relaxed text-white md:text-lg">
            {message}
          </p>
        )}

        {linkText && sanityData.linkUrl && (
          <Link
            to={sanityData.linkUrl}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-[#ff7043] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fff8f5] hover:shadow-lg"
          >
            {linkText}
            <ArrowRight size={16} aria-hidden />
          </Link>
        )}
      </div>
    </div>
  );
};
