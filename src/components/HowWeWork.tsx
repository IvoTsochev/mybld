import materialsImg from "../assets/materials.jpg";
import { useHowWeWorkData } from "../hooks/useSanityData";
import { urlFor } from "../sanity.client";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedField } from "../lib/i18n";

export const HowWeWork = () => {
  const { data: howWeWorkData } = useHowWeWorkData();
  const { locale } = useLanguage();

  return (
    <section
      className="w-full bg-white text-[#333] font-sans flex"
      id="how-we-work"
    >
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        <div className="flex-none lg:w-1/2 w-full">
          <img
            src={
              howWeWorkData?.image
                ? urlFor(howWeWorkData.image).width(500).height(500).url()
                : materialsImg
            }
            alt={howWeWorkData?.image?.alt || "Construction Materials"}
            className="w-full h-full object-cover block"
          />
        </div>

        <div className="flex-none lg:w-1/2 w-full flex flex-col justify-center py-20 px-[6%] box-border">
          <div className="inline-block self-start">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-extrabold text-[#1a1a24] mb-2">
              {getLocalizedField(howWeWorkData, "title", locale)}
            </h2>
            <div className="w-15 h-1 bg-[#ff7043] mt-2.5 mb-6 rounded-sm"></div>
          </div>

          <h3 className="text-xl font-bold text-[#2c2c2c] mb-6">
            {getLocalizedField(howWeWorkData, "subtitle", locale)}
          </h3>

          {howWeWorkData?.steps?.map((step, index: number) => (
            <p
              key={index}
              className="text-base leading-relaxed text-[#555] mb-6"
            >
              {getLocalizedField(step, "stepDescription", locale)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
