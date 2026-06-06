import { Phone, Mail } from 'lucide-react';
import womanImg from '../assets/woman.jpg';
import { useContactUsData } from '../hooks/useSanityData';
import { urlFor } from '../sanity.client';

export const ContactUs = () => {
  const { data: contactUsData } = useContactUsData();

  return (
    <section className="w-full bg-white text-[#333] font-sans flex" id="contacts">
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        
        {/* Image Section - Left on desktop, top on mobile */}
        <div className="flex-none lg:w-1/2 w-full">
          <img src={contactUsData?.image ? urlFor(contactUsData.image).width(500).height(500).url() : womanImg} alt={contactUsData?.image?.alt || 'Contact Us'} className="w-full h-full object-cover block" />
        </div>
        
        {/* Text Section - Right on desktop, bottom on mobile */}
        <div className="flex-none lg:w-1/2 w-full flex flex-col justify-center py-20 px-[6%] box-border">
          <h2 className="text-[2rem] lg:text-[2.5rem] font-extrabold text-[#1a1a24] mb-6">
            {contactUsData?.title}
          </h2>
          
          <p className="text-[0.95rem] leading-relaxed text-[#555] mb-10 max-w-150">
            {contactUsData?.description}
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-[#555]">
              <div className="text-[#4f46e5]">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <span className="text-[0.95rem] font-medium">{contactUsData?.phone}</span>
            </div>
            
            <div className="flex items-center gap-4 text-[#555]">
              <div className="text-[#4f46e5]">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <span className="text-[0.95rem] font-medium">{contactUsData?.email}</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
