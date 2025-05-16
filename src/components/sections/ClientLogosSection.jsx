import React, { useRef } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';
// Importer l'image de remplacement unique
import placeholderLogo from '@/assets/images/logos/clients/placeholder-logo.png';

const originalAltTexts = [
  "Logo Thérapie Douceur",
  "Logo Studio Pilates Flow",
  "Logo Spa Évasion Zen",
  "Logo Coach Bien-Être Vitalité",
  "Logo Yoga Harmonie Paris",
  "Logo NaturoConseil",
  "Logo Méditation Pure",
  "Logo Retraite Sérénité",
];

const logos = originalAltTexts.map(altText => ({
  alt: altText,
  src: placeholderLogo,
}));

const ClientLogosSection = () => {
  const scrollContainerRef = useRef(null);
  // Dupliquer la liste pour l'effet de défilement infini
  const duplicatedLogos = [...logos, ...logos, ...logos]; 

  // La fonction scroll n'est plus utilisée par des boutons mais conservée au cas où.
  // const scroll = (direction) => {
  //   if (scrollContainerRef.current) {
  //     const scrollAmount = scrollContainerRef.current.offsetWidth / 2;
  //     scrollContainerRef.current.scrollBy({
  //       left: direction === 'left' ? -scrollAmount : scrollAmount,
  //       behavior: 'smooth',
  //     });
  //   }
  // };
  
  return (
    <SectionWrapper id="clients" className="bg-white px-4 py-12 md:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-center mb-8 md:mb-12">
        Ils nous ont fait confiance
      </h2>
      <div className="relative">
        <div 
          ref={scrollContainerRef} // Ref conservée, pourrait servir à d'autres usages
          className="flex overflow-x-hidden" 
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }}
        >
          <motion.div 
            className="flex"
            animate={{ x: ['0%', `-${100 / 3}%`] }}
            transition={{ 
              ease: 'linear', 
              duration: 80, 
              repeat: Infinity 
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-16 sm:w-36 sm:h-20 md:w-48 md:h-24 mx-3 sm:mx-4 md:mx-6 flex items-center justify-center">
                <img   
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  alt={logo.alt}
                  src={logo.src}
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
        {/* Les boutons de navigation ont été supprimés conformément à la demande */}
      </div>
    </SectionWrapper>
  );
};

export default ClientLogosSection;
