import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAnnouncementBannerData } from '../hooks/useSanityData';

export const AnnouncementBanner = () => {
  const { data: sanityData, isLoading } = useAnnouncementBannerData();

  if (isLoading || !sanityData || !sanityData.enabled) return null;

  return (
    <div
      className="sticky top-0 z-[60] w-full bg-linear-to-r from-[#ff7043] via-[#ff7a59] to-[#ff8a65] shadow-[0_4px_20px_rgba(255,112,67,0.35)]"
      role="status"
      aria-live="polite"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-3 px-[5%] py-4 text-center font-sans md:flex-row md:gap-6 md:py-3.5 md:text-left">
        {sanityData.badge && (
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-[#ff7043] shadow-sm">
            <MapPin size={16} aria-hidden />
            {sanityData.badge}
          </span>
        )}

        {sanityData.message && (
          <p className="max-w-2xl text-base font-semibold leading-relaxed text-white md:text-lg">
            {sanityData.message}
          </p>
        )}

        {sanityData.linkText && sanityData.linkUrl && (
          <Link
            to={sanityData.linkUrl}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-[#ff7043] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fff8f5] hover:shadow-lg"
          >
            {sanityData.linkText}
            <ArrowRight size={16} aria-hidden />
          </Link>
        )}
      </div>
    </div>
  );
};
