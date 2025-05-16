import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';

const approachSteps = [
  { number: "01", title: "Audit & analyse de vos besoins", description: "Nous commençons par une écoute attentive pour comprendre vos objectifs et défis." },
  { number: "02", title: "Prototypage & collaboration", description: "Nous créons des maquettes et travaillons main dans la main avec vous pour affiner la solution." },
  { number: "03", title: "Livraison + formation + suivi", description: "Nous vous livrons un produit fini, vous formons à son utilisation et restons à vos côtés." },
];

const ApproachSection = () => {
  return (
    <SectionWrapper id="approach" className="bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-16">
        Notre méthode
      </h2>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-lumirise-accent/30 transform -translate-y-1/2"></div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {approachSteps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center md:text-left bg-white p-8 rounded-lg shadow-lg border border-gray-200 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="absolute -top-6 left-1/2 md:left-8 transform -translate-x-1/2 md:-translate-x-0 w-12 h-12 bg-lumirise-accent text-white rounded-full flex items-center justify-center font-poppins font-semibold text-lg shadow-md">
                {step.number}
              </div>
              <h3 className="text-xl font-poppins font-semibold mt-8 mb-3">{step.title}</h3>
              <p className="text-gray-600 font-lora text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ApproachSection;
