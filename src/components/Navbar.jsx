import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
// Optionnel: Importer le logo du site si vous décidez de l'utiliser
// import lumiriseLogo from '@/assets/images/logos/site/lumirise-logo.png';

const navLinks = [
  { href: '#hero', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Réalisations' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); 
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-white shadow-lg py-4' 
          : isSticky 
            ? 'bg-white/90 shadow-lg backdrop-blur-md py-4' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="text-2xl font-poppins font-bold text-lumirise-accent">
          {/* Si vous utilisez un logo image: 
          <img src={lumiriseLogo} alt="Lumirise Logo" className="h-8 w-auto" /> 
          Sinon, le texte reste: */}
          Lumirise
        </a>
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lumirise-text hover:text-lumirise-accent font-medium text-sm px-3"
            >
              {link.label}
            </Button>
          ))}
          <Button 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#calendly-booking')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
            className="bg-lumirise-accent text-white hover:bg-lumirise-accent-dark rounded-md ml-2 text-sm"
          >
            Prendre RDV
          </Button>
        </div>
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-lumirise-text" /> : <Menu className="h-6 w-6 text-lumirise-text" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0" 
        >
          <div className="flex flex-col items-center py-4 space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lumirise-text hover:text-lumirise-accent w-full text-center"
              >
                {link.label}
              </Button>
            ))}
            <Button 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#calendly-booking')?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="bg-lumirise-accent text-white hover:bg-lumirise-accent-dark rounded-md w-3/4"
            >
              Prendre RDV
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
