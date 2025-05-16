import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';
import { Briefcase, Smartphone, Zap, Users } from 'lucide-react';

const services = [
  { 
    icon: <Briefcase className="h-8 w-8 md:h-10 md:w-10 text-lumirise-accent mb-4" />, 
    title: "Sites WordPress", 
    description: "One-page, vitrine ou e-commerce — design élégant, rapide, sur-mesure." 
  },
  { 
    icon: <Smartphone className="h-8 w-8 md:h-10 md:w-10 text-lumirise-accent mb-4" />, 
    title: "Applications mobiles", 
    description: "Réservation, coaching, marketplace — pensées pour vos clients et votre quotidien." 
  },
  { 
    icon: <Zap className="h-8 w-8 md:h-10 md:w-10 text-lumirise-accent mb-4" />, 
    title: "Automatisation d'entreprise", 
    description: "Mails, devis, planning, relances automatisés. Libérez du temps & fluidifiez votre relation client." 
  },
  { 
    icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-lumirise-accent mb-4" />, 
    title: "Community management & contenus", 
    description: "Création photo/vidéo, animation réseaux — renforcez votre image et fidélisez." 
  },
];

const ServicesSection = () => {
  return (
    <SectionWrapper id="services" className="px-4 py-12 md:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-center mb-8 md:mb-12">
        Ce que nous faisons pour vous
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200 rounded-lg p-4 md:p-6">
              <div className="flex justify-center items-center mb-4">{service.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="text-lg md:text-xl font-poppins font-semibold mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 font-lora text-sm md:text-base">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
