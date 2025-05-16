import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-lumirise-accent/5 px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold mb-4 md:mb-6">
          Pourquoi choisir Lumirise ?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 font-lora">
          Nous aidons les professionnels du bien-être à transformer leur présence digitale en un véritable <strong className="font-semibold text-lumirise-accent">levier business</strong>.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 font-lora">
          Chez Lumirise, on privilégie les <strong className="font-semibold">résultats</strong>, la <strong className="font-semibold">simplicité</strong> et l'<strong className="font-semibold">élégance</strong>.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
