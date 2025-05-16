import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import SectionWrapper from '@/components/SectionWrapper';
import { Phone, Mail, MapPin, Instagram, Linkedin, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }
    localStorage.setItem('contactForm', JSON.stringify(formData));
    toast({
      title: "Succès!",
      description: "Votre message a été envoyé. Nous vous contacterons bientôt.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToBooking = (e) => {
    e.preventDefault();
    document.querySelector('#calendly-booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <SectionWrapper id="contact" className="bg-gray-100 px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold mb-4">
            Lancez votre projet digital
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 font-lora">
            Prêt à donner une nouvelle dimension à votre activité ? Contactez-nous pour un audit gratuit et personnalisé.
          </p>
          <div className="space-y-3 md:space-y-4">
            <a href="tel:0601020304" className="flex items-center text-base md:text-lg text-lumirise-text hover:text-lumirise-accent transition-colors">
              <Phone className="h-5 w-5 mr-3 text-lumirise-accent" /> 06 01 02 03 04
            </a>
            <a href="mailto:contact@lumirise.fr" className="flex items-center text-base md:text-lg text-lumirise-text hover:text-lumirise-accent transition-colors">
              <Mail className="h-5 w-5 mr-3 text-lumirise-accent" /> contact@lumirise.fr
            </a>
            <p className="flex items-center text-base md:text-lg text-lumirise-text">
              <MapPin className="h-5 w-5 mr-3 text-lumirise-accent" /> Paris, France (et à distance !)
            </p>
            <div className="flex space-x-4 md:space-x-6 pt-2">
              <a href="https://instagram.com/lumirise" target="_blank" rel="noopener noreferrer" className="text-lumirise-text hover:text-lumirise-accent transition-colors">
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="https://linkedin.com/company/lumirise" target="_blank" rel="noopener noreferrer" className="text-lumirise-text hover:text-lumirise-accent transition-colors">
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="https://wa.me/33601020304" target="_blank" rel="noopener noreferrer" className="text-lumirise-text hover:text-lumirise-accent transition-colors">
                <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </div>
        <Card className="p-4 sm:p-6 md:p-8 shadow-xl bg-white border border-gray-200 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <Label htmlFor="name" className="font-poppins text-sm font-medium text-lumirise-text">Nom</Label>
              <Input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                className="mt-1 border-gray-300 focus:border-lumirise-accent focus:ring-lumirise-accent" 
                placeholder="Votre nom complet" 
              />
            </div>
            <div>
              <Label htmlFor="email" className="font-poppins text-sm font-medium text-lumirise-text">Email</Label>
              <Input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                className="mt-1 border-gray-300 focus:border-lumirise-accent focus:ring-lumirise-accent" 
                placeholder="Votre adresse e-mail"
              />
            </div>
            <div>
              <Label htmlFor="message" className="font-poppins text-sm font-medium text-lumirise-text">Message</Label>
              <Textarea 
                name="message" 
                id="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleInputChange} 
                className="mt-1 border-gray-300 focus:border-lumirise-accent focus:ring-lumirise-accent" 
                placeholder="Décrivez brièvement votre projet ou votre question"
              />
            </div>
            <div>
              <Button 
                type="button"
                onClick={scrollToBooking}
                className="w-full bg-lumirise-accent text-white hover:bg-lumirise-accent-dark rounded-md text-base md:text-lg py-2 md:py-3"
              >
                Demander un audit gratuit
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
