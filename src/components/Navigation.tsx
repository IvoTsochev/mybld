import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useNavigationData } from "../hooks/useSanityData";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedField } from "../lib/i18n";

const toNavLink = (link: string) => (link.startsWith("#") ? `/${link}` : link);

interface NavigationProps {
  bannerHeight: number;
}

export const Navigation = ({ bannerHeight }: NavigationProps) => {
  const { data: navigationData } = useNavigationData();
  const { locale } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="sticky top-0 md:absolute md:top-[var(--banner-h)] left-0 w-full z-[65] flex justify-between items-center px-[5%] py-4 md:py-8 bg-[#0a0f1e] md:bg-transparent text-white font-sans"
      style={{ "--banner-h": `${bannerHeight}px` } as CSSProperties}
    >
      <div className="text-2xl font-bold tracking-wide">
        <Link to="/">MyBld</Link>
      </div>

      <ul className="hidden md:flex list-none gap-8 m-0 p-0">
        {navigationData?.menuItems?.map((item) => (
          <li key={item._key}>
            <Link
              to={item.link ? toNavLink(item.link) : "/"}
              className="text-[#e0e0e0] text-sm font-medium transition-colors duration-300 pb-1 hover:text-white hover:border-b-2 hover:border-[#ff7a59]/80"
            >
              {getLocalizedField(item, "name", locale)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <LanguageSwitcher />
      </div>

      <div className="flex md:hidden items-center gap-4">
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          className="text-white p-1"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-black/60 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-72 max-w-[80vw] bg-[#0a0f1e] shadow-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="text-white p-1"
          >
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col list-none gap-2 m-0 px-8">
          {navigationData?.menuItems?.map((item) => (
            <li key={item._key}>
              <Link
                to={item.link ? toNavLink(item.link) : "/"}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#e0e0e0] text-lg font-medium py-3 transition-colors duration-300 hover:text-[#ff7a59]"
              >
                {getLocalizedField(item, "name", locale)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-8 mt-6">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};
