import React from 'react';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';
// MODIFICATION: Importer l'image locale
import heroBackgroundImage from '@/assets/images/hero-background.jpg';

const HeroSection = () => {
  const scrollToBooking = (e) => {
    e.preventDefault();
    document.querySelector('#calendly-booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionWrapper 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-lumirise-accent/10 to-lumirise-accent/20 relative overflow-hidden px-4"
    >
      <div className="absolute inset-0 opacity-50">
        <img  
          className="w-full h-full object-cover" 
          alt="Arrière-plan technologique abstrait et épuré"
          // MODIFICATION: Utiliser l'image importée
          src={heroBackgroundImage} 
        />
      </div>
      
      <div className="relative z-10 container mx-auto text-center px-4 pt-24 md:pt-0">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold mb-4 md:mb-6"
        >
          Agence de marketing digital & automatisation
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins text-lumirise-accent mb-6 md:mb-8"
        >
          Nous allons augmenter votre visibilité dès maintenant
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto mb-8 md:mb-10 font-lora"
        >
          Création de sites web, automatisation d'entreprise, applications mobiles, et stratégies digitales efficaces.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6"
        >
          <Button 
            size="lg" 
            onClick={scrollToBooking}
            className="bg-lumirise-accent text-white hover:bg-lumirise-accent-dark rounded-md text-base md:text-lg px-6 md:px-8 py-2 md:py-3"
          >
            Prendre un RDV
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="border-lumirise-accent text-lumirise-accent hover:bg-lumirise-accent hover:text-white rounded-md text-base md:text-lg px-6 md:px-8 py-2 md:py-3"
          >
            <a href="tel:0601020304">06 01 02 03 04</a>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
