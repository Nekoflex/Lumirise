import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import portfolioSpaBienEtre from '@/assets/images/portfolio/portfolio-spa-bien-etre.jpg';
import portfolioStudioYoga from '@/assets/images/portfolio/portfolio-studio-yoga.jpg';
import portfolioAppCoaching from '@/assets/images/portfolio/portfolio-app-coaching.jpg';
import portfolioDashboardTherapeute from '@/assets/images/portfolio/portfolio-dashboard-therapeute.jpg';
import portfolioMarketplaceYogaflex from '@/assets/images/portfolio/portfolio-marketplace-yogaflex.jpg';
import portfolioSystemeRelance from '@/assets/images/portfolio/portfolio-systeme-relance.jpg';
import portfolioReservationSpa from '@/assets/images/portfolio/portfolio-reservation-spa.jpg';

const portfolioItems = [
  { title: "Spa Bien-Être Zen", category: "Site Web & Branding", imgSrc: portfolioSpaBienEtre },
  { title: "Studio Yoga Harmonie", category: "Application Mobile", imgSrc: portfolioStudioYoga },
  { title: "App Coaching Vitalité", category: "Plateforme de Coaching", imgSrc: portfolioAppCoaching },
  { title: "Dashboard Planning Thérapeute", category: "Automatisation de gestion client", imgSrc: portfolioDashboardTherapeute },
  { title: "Marketplace YogaFlex", category: "Application mobile multi-prestataires", imgSrc: portfolioMarketplaceYogaflex },
  { title: "Système de relance automatisée", category: "Email + SMS", imgSrc: portfolioSystemeRelance },
  { title: "Réservation Spa Paris", category: "Site WordPress avec prise de RDV", imgSrc: portfolioReservationSpa },
];

const PortfolioSection = () => {
  const scrollContainerRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardElement = scrollContainerRef.current.querySelector('.portfolio-card');
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const cardStyle = getComputedStyle(cardElement);
        const marginLeft = parseFloat(cardStyle.marginLeft) || 0; // Assurer une valeur numérique
        const marginRight = parseFloat(cardStyle.marginRight) || 0; // Assurer une valeur numérique
        const scrollAmount = cardWidth + marginLeft + marginRight;
        
        scrollContainerRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleWheel = (e) => {
    // Pour desktop/laptop: prévenir le défilement vertical de la page
    // et ne PAS convertir le scroll molette vertical en scroll horizontal du carrousel.
    if (!isMobile && scrollContainerRef.current) {
      e.preventDefault(); 
      // La ligne scrollContainerRef.current.scrollLeft += e.deltaY; a été supprimée
      // pour désactiver la navigation par molette dans le carrousel.
    }
  };

  const desktopMaskStyle = !isMobile ? {
    maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
  } : {};

  return (
    <SectionWrapper id="portfolio" className="w-full overflow-hidden px-4 py-12 md:py-16">
      <div className="flex justify-center items-center mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-lumirise-text text-center">
          Ce que nous avons imaginé
        </h2>
      </div>
      
      <div className="relative w-full">
        <div className="flex flex-col items-center">
          <div
            ref={scrollContainerRef}
            onWheel={handleWheel}
            className={`flex pb-4 w-full ${
              isMobile 
                ? 'overflow-x-auto snap-x snap-mandatory h-[320px] px-1' 
                : 'overflow-x-hidden h-auto space-x-6' // overflow-x-hidden pour desktop/laptop
            }`}
            style={{ 
              scrollbarWidth: 'none', // Cache la scrollbar standard
              msOverflowStyle: 'none', // Cache la scrollbar pour IE/Edge
              WebkitOverflowScrolling: isMobile ? 'touch' : 'auto', // Défilement tactile fluide sur mobile
              ...desktopMaskStyle,
            }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="portfolio-card flex-shrink-0 w-full sm:w-[280px] md:w-[300px] lg:w-[340px] snap-center mx-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-lg h-full flex flex-col">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 h-[160px] sm:h-[180px] flex-shrink-0">
                    <img
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                      alt={item.title}
                      src={item.imgSrc}
                      loading="lazy"
                    />
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
              aria-label="Projet précédent"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')} 
              className="bg-white/80 hover:bg-white rounded-full shadow-md z-10 border-lumirise-accent text-lumirise-accent hover:text-white hover:bg-lumirise-accent"
              aria-label="Projet suivant"
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
