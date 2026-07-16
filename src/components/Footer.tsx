import { Link } from "react-router-dom";
import { useFooterData, useNavigationData } from "../hooks/useSanityData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedField } from "../lib/i18n";

const toNavLink = (link: string) => (link.startsWith("#") ? `/${link}` : link);

export const Footer = () => {
  const { data: footerData } = useNavigationData();
  const { data: footerData2 } = useFooterData();
  const { locale } = useLanguage();

  return (
    <footer className="bg-[#1a1a24] text-[#e0e0e0] py-12 px-[5%] font-sans">
      <div className="max-w-300 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold tracking-wide text-white">
          www.mybld.bg
        </div>
        <div className="flex gap-6">
          {footerData?.menuItems?.map((item) => (
            <Link
              key={item._key}
              to={item.link ? toNavLink(item.link) : "/"}
              className="hover:text-[#ff7a59] transition-colors text-sm"
            >
              {getLocalizedField(item, "name", locale)}
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          {getLocalizedField(footerData2, "copyright", locale)}
        </p>
      </div>
    </footer>
  );
};
