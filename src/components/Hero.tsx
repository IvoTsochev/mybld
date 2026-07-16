import heroBg from "../assets/hero.jpg";
import { urlFor } from "../sanity.client";
import { useHeroData } from "../hooks/useSanityData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedField } from "../lib/i18n";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { data: heroData } = useHeroData();
  const { locale } = useLanguage();

  const title = getLocalizedField(heroData, "title", locale);
  const description = getLocalizedField(heroData, "description", locale);
  const buttonText = getLocalizedField(heroData, "buttonText", locale);

  const bgImage = heroData?.backgroundImage
    ? urlFor(heroData.backgroundImage).width(1920).height(1080).url()
    : heroBg;
  const bgImageAlt =
    heroData?.backgroundImage?.altText || "Hero Background Image";

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col text-white font-sans"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-label={bgImageAlt}
    >
      <div className="absolute inset-0 bg-[#0a0f1e]/60 z-10"></div>

      <div className="relative z-20 grow flex flex-col justify-center items-center text-center px-5">
        {heroData ? (
          <>
            <h1
              className="text-4xl md:text-6xl font-extrabold leading-[1.2] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              dangerouslySetInnerHTML={{ __html: title || "" }}
            />
            <p className="text-base md:text-lg font-normal text-gray-300 mb-12 max-w-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {description}
            </p>
            <Link
              to={"/#contacts"}
              className="bg-linear-to-br from-[#ff8a65] to-[#ff7043] text-white py-4 px-10 text-base font-semibold rounded shadow-[0_4px_15px_rgba(255,112,67,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,112,67,0.6)]"
            >
              {buttonText || "ЗАПИТВАНЕ ЗА ОГЛЕД"}
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};
