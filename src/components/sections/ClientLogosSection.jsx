import React, { useRef, useState, useEffect } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const logos = [
  { alt: "Logo Thérapie Douceur", src: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" },
  { alt: "Logo Studio Pilates Flow", src: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" },
  { alt: "Logo Spa Évasion Zen", src: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" },
  { alt: "Logo Coach Bien-Être Vitalité", src: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" },
  { alt: "Logo Yoga Harmonie Paris", src: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" },
  { alt: "Logo NaturoConseil", src: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" },
  { alt: "Logo Méditation Pure", src: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" },
  { alt: "Logo Retraite Sérénité", src: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" },
];

const ClientLogosSection = () => {
  const scrollContainerRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState({});
  const duplicatedLogos = [...logos, ...logos, ...logos];

  // Préchargement des images
  useEffect(() => {
    logos.forEach(logo => {
      const img = new Image();
      img.src = logo.src;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [logo.src]: true }));
      };
    });
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth / 2;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <SectionWrapper id="clients" className="bg-white px-4 py-12 md:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-center mb-8 md:mb-12">
        Ils nous ont fait confiance
      </h2>
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden" 
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }}
        >
          <motion.div 
            className="flex"
            animate={{ x: ['0%', `-${100 * (duplicatedLogos.length / logos.length / 2)}%`] }}
            transition={{ 
              ease: 'linear', 
              duration: 80, // Ralenti le défilement
              repeat: Infinity 
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-16 sm:w-36 sm:h-20 md:w-48 md:h-24 mx-3 sm:mx-4 md:mx-6 flex items-center justify-center">
                {loadedImages[logo.src] ? (
                  <img   
                    className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    alt={logo.alt}
                    src={logo.src}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 animate-pulse rounded"></div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-white/80 hover:bg-white rounded-full shadow-md z-10 hidden sm:flex border-lumirise-accent text-lumirise-accent hover:text-white hover:bg-lumirise-accent"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-white/80 hover:bg-white rounded-full shadow-md z-10 hidden sm:flex border-lumirise-accent text-lumirise-accent hover:text-white hover:bg-lumirise-accent"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default ClientLogosSection;
