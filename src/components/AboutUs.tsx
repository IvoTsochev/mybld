import workersImg from '../assets/workers.jpg';
import { useAboutUsData } from '../hooks/useSanityData';
import { urlFor } from '../sanity.client';

export const AboutUs = () => {
  const { data: aboutUsData } = useAboutUsData();

  return (
    <section className="w-full bg-white text-[#333] font-sans flex" id="about">
      <div className="w-full flex flex-col-reverse lg:flex-row items-stretch">
        
        {/* Text Section - Left on desktop, bottom on mobile */}
        <div className="flex-none lg:w-1/2 w-full flex flex-col justify-center py-20 px-[6%] box-border bg-gray-50">
          <div className="inline-block self-start">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-extrabold text-[#1a1a24] mb-2">
              {aboutUsData?.title}
            </h2>
            <div className="w-15 h-1 bg-[#ff7043] mt-2.5 mb-6 rounded-sm"></div>
          </div>
          
          <h3 className="text-xl font-bold text-[#2c2c2c] mb-6">{aboutUsData?.subtitle}</h3>
          
          <p className="text-base leading-relaxed text-[#555] mb-6">
            {aboutUsData?.description}
          </p>
        </div>

        {/* Image Section - Right on desktop, top on mobile */}
        <div className="flex-none lg:w-1/2 w-full">
          <img src={aboutUsData?.image ? urlFor(aboutUsData.image).width(500).height(500).url() : workersImg} alt={aboutUsData?.image?.alt || 'Construction Workers'} className="w-full h-full object-cover block" />
        </div>
        
      </div>
    </section>
  );
};
