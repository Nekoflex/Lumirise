import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const portfolioItems = [
  { title: "Spa Bien-Être Zen", category: "Site Web & Branding", imgSrcPlaceholder: "élégant spa intérieur avec des tons neutres" },
  { title: "Studio Yoga Harmonie", category: "Application Mobile", imgSrcPlaceholder: "personne faisant du yoga dans un studio lumineux" },
  { title: "App Coaching Vitalité", category: "Plateforme de Coaching", imgSrcPlaceholder: "interface d'application de coaching sportif" },
  { title: "Dashboard Planning Thérapeute", category: "Automatisation de gestion client", imgSrcPlaceholder: "tableau de bord de planification pour thérapeute" },
  { title: "Marketplace YogaFlex", category: "Application mobile multi-prestataires", imgSrcPlaceholder: "interface d'une marketplace d'application mobile pour le yoga" },
  { title: "Système de relance automatisée", category: "Email + SMS", imgSrcPlaceholder: "visualisation d'un système d'automatisation d'email et SMS" },
  { title: "Réservation Spa Paris", category: "Site WordPress avec prise de RDV", imgSrcPlaceholder: "page de réservation d'un site web pour spa" },
];

const PortfolioSection = () => {
  const scrollContainerRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState({});
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    portfolioItems.forEach((item, index) => {
      const img = new Image();
      img.src = `https://source.unsplash.com/random/400x225?sig=${index}&${item.imgSrcPlaceholder.split(' ').join('+')}`;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
      };
    });
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.portfolio-card')?.offsetWidth;
      if (cardWidth) {
        const scrollAmount = cardWidth + 16;
        scrollContainerRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleWheel = (e) => {
    if (!isMobile && scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <SectionWrapper id="portfolio" className="w-full overflow-hidden px-4 py-12 md:py-16">
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-lumirise-text flex-grow text-center md:text-left">
          Ce que nous avons imaginé
        </h2>
      </div>
      
      <div className="relative w-full">
        <div className="flex flex-col items-center">
          <div
            ref={scrollContainerRef}
            onWheel={handleWheel}
            className={`flex overflow-x-auto pb-4 w-full snap-x snap-mandatory ${isMobile ? 'h-[320px] px-1' : 'h-auto space-x-6'}`}
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': { display: 'none' }
            }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="portfolio-card flex-shrink-0 w-[calc(100vw-48px)] sm:w-[280px] md:w-[300px] lg:w-[340px] snap-center mx-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-lg h-full flex flex-col">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 h-[160px] sm:h-[180px] flex-shrink-0">
                    {loadedImages[index] ? (
                      <img
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                        alt={item.title}
                        src={`https://source.unsplash.com/random/400x225?sig=${index}&${item.imgSrcPlaceholder.split(' ').join('+')}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                    )}
                  </div>
                  <CardContent className="p-3 md:p-4 bg-white flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-poppins font-semibold mb-1">{item.title}</h3>
                      <p className="text-xs md:text-sm text-lumirise-accent font-medium mb-2">{item.category}</p>
                    </div>
                    <Button variant="link" className="p-0 text-lumirise-accent hover:text-lumirise-accent-dark self-start mt-2 text-xs sm:text-sm md:text-base">
                      Voir plus <span aria-hidden="true" className="ml-1">&rarr;</span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')} 
              className="bg-white/80 hover:bg-white rounded-full shadow-md z-10 border-lumirise-accent text-lumirise-accent hover:text-white hover:bg-lumirise-accent"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')} 
              className="bg-white/80 hover:bg-white rounded-full shadow-md z-10 border-lumirise-accent text-lumirise-accent hover:text-white hover:bg-lumirise-accent"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;
