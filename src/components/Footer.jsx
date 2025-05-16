import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-lumirise-text text-white py-12">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="font-poppins text-lg mb-2">Lumirise</p>
        <p className="text-sm font-lora">&copy; {new Date().getFullYear()} Lumirise. Tous droits réservés.</p>
        <p className="text-xs font-lora mt-1">Agence de marketing digital pour professionnels du bien-être.</p>
      </div>
    </footer>
  );
};

export default Footer;
