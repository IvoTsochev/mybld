import { useServicesData } from '../hooks/useSanityData';
import { urlFor } from '../sanity.client';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedField } from '../lib/i18n';


export const Services = () => {
  const { data: servicesData } = useServicesData();
  const { locale } = useLanguage();

  return (
    <section className="w-full py-20 px-[5%] bg-white font-sans" id="services">
      <div className="max-w-360 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-[2.5rem] font-extrabold text-[#1a1a24] mb-2">{getLocalizedField(servicesData, 'title', locale)}</h2>
          <div className="w-15 h-1 bg-[#ff7043] mt-1 rounded-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {servicesData?.servicesTypes?.map((service) => {
            const name = getLocalizedField(service, 'name', locale);
            const description = getLocalizedField(service, 'description', locale);
            return (
              <div key={service._key} className="flex flex-col items-start">
                <div className="mb-4 text-[#4f46e5]">
                  {service.icon && (
                    <img
                      src={urlFor(service.icon).width(32).height(32).url()}
                      alt={name}
                      className="w-8 h-8 object-contain"
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a24] mb-3">
                  {name}
                </h3>
                <p className="text-[#666666] text-[0.95rem] leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
