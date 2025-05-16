import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: "Combien coûte un site web pour une activité de bien-être ?",
    answer: "À partir de 1500€ pour un site One-page. Le tarif évolue selon les fonctionnalités : réservation, e-commerce, pages supplémentaires, etc."
  },
  {
    question: "Et si je ne suis pas à l’aise avec la tech ?",
    answer: "Aucun problème. On vous accompagne avec un coaching privé d’une heure, des supports visuels simples, et une interface claire."
  },
  {
    question: "Est-ce que je vais devoir tout gérer moi-même après ?",
    answer: "Vous êtes formé(e), mais jamais seul(e). Nous restons disponibles en cas de besoin."
  },
  {
    question: "Est-ce que vous pouvez automatiser des choses spécifiques à mon activité ?",
    answer: "Oui : appels, réservations, commandes en ligne, email, WhatsApp, chatbot, etc."
  },
  {
    question: "Est-ce que je peux vendre en ligne ou gérer des réservations ?",
    answer: "Oui. Tout peut être intégré : boutique, agenda connecté, paiement sécurisé, rappels auto."
  },
  {
    question: "Combien de temps dure un projet complet, du début à la livraison ?",
    answer: "Entre 7 et 30 jours selon le projet. Chez Lumirise, la qualité passe avant la rapidité."
  },
  {
    question: "Est-ce que vos solutions apportent des résultats concrets ?",
    answer: "Oui. Nos clients gagnent du temps, reçoivent plus de demandes et améliorent leur image pro. 🎯 Résultat : plus de réservations, moins de charge mentale."
  }
];

const FaqSection = () => {
  return (
    <SectionWrapper id="faq" className="bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-12">
        Questions fréquentes
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="bg-white shadow-sm rounded-lg mb-3 border border-gray-200 px-4">
              <AccordionTrigger className="text-left font-poppins font-semibold text-lumirise-text hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-lora text-gray-700 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default FaqSection;
