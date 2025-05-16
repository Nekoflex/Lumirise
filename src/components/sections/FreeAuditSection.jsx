import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const FreeAuditSection = () => {
  const scrollToBooking = (e) => {
    e.preventDefault();
    document.querySelector('#calendly-booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionWrapper id="free-audit" className="bg-lumirise-accent/5">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
          Audit gratuit : identifiez ce qui freine vos résultats et débloquez votre croissance
        </h2>
        <div className="text-lg text-gray-700 max-w-3xl mx-auto font-lora mb-4">
          <p className="hidden md:block">
            Un site en ligne qui n’est ni visible ni efficace, c’est du <strong className="font-semibold">chiffre d’affaires perdu</strong>. Et si vous passez vos journées à gérer des tâches répétitives, c’est aussi du <strong className="font-semibold">temps gaspillé</strong>.
          </p>
          <p className="md:hidden">
            Un site web invisible ou inefficace, c’est du <strong className="font-semibold">chiffre d’affaires perdu</strong>. Des tâches répétitives au quotidien, c’est du <strong className="font-semibold">temps gaspillé</strong>.
          </p>
        </div>
        <div className="text-lg text-gray-700 max-w-3xl mx-auto font-lora">
           <p className="hidden md:block">
            Chez <strong className="text-lumirise-accent font-semibold">Lumirise</strong>, on vous propose un <strong className="font-semibold">audit gratuit et sans engagement</strong> pour identifier ce qui freine votre activité — en ligne ou en interne — et vous proposer des <strong className="font-semibold">solutions simples et concrètes</strong>.
          </p>
          <p className="md:hidden">
            Lumirise vous propose un <strong className="text-lumirise-accent font-semibold">audit gratuit et sans engagement</strong> pour activer votre croissance et fluidifier vos processus.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg">
            <CardHeader className="items-center text-center">
              <Search className="h-12 w-12 text-lumirise-accent mb-3" />
              <CardTitle className="text-2xl font-poppins font-semibold">Audit de site web</CardTitle>
              <p className="text-lumirise-accent font-medium">(visibilité & conversion)</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow p-6">
              <p className="font-lora text-gray-700 mb-4 flex-grow">
                <strong className="block font-semibold text-lumirise-text mb-1">Objectif :</strong>
                Identifier les blocages de performance de votre site actuel, et proposer des améliorations immédiates.
              </p>
              <p className="font-lora text-gray-700 mb-4">
                <strong className="block font-semibold text-lumirise-text mb-1">Problèmes qu’on analyse :</strong>
              </p>
              <ul className="list-disc list-inside font-lora text-gray-700 space-y-1 mb-6">
                <li>Pourquoi votre site n’apparaît pas sur Google ?</li>
                <li>Pourquoi vos visiteurs ne réservent pas ?</li>
                <li>Est-il lent, confus ou mal adapté au mobile ?</li>
              </ul>
              <Button 
                onClick={scrollToBooking} 
                className="w-full mt-auto bg-lumirise-accent text-white hover:bg-lumirise-accent-dark rounded-md"
              >
                Commencer l’audit de mon site
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg">
            <CardHeader className="items-center text-center">
              <Settings className="h-12 w-12 text-lumirise-accent mb-3" />
              <CardTitle className="text-2xl font-poppins font-semibold">Audit de votre fonctionnement</CardTitle>
              <p className="text-lumirise-accent font-medium">(automatisation & efficacité)</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow p-6">
              <p className="font-lora text-gray-700 mb-4 flex-grow">
                <strong className="block font-semibold text-lumirise-text mb-1">Objectif :</strong>
                Libérer votre temps, simplifier votre quotidien, et fluidifier votre activité grâce à des automatisations adaptées.
              </p>
              <p className="font-lora text-gray-700 mb-4">
                <strong className="block font-semibold text-lumirise-text mb-1">Problèmes qu’on identifie :</strong>
              </p>
              <ul className="list-disc list-inside font-lora text-gray-700 space-y-1 mb-6">
                <li>Quelles tâches peuvent être déléguées à un système automatisé ?</li>
                <li>Combien d’heures vous prennent les relances, devis, confirmations ?</li>
                <li>Comment automatiser sans bouleverser vos habitudes actuelles ?</li>
              </ul>
              <Button 
                onClick={scrollToBooking}
                className="w-full mt-auto bg-lumirise-accent text-white hover:bg-lumirise-accent-dark rounded-md"
              >
                Faire le point sur mon organisation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default FreeAuditSection;
