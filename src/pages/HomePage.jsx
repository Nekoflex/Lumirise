import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FreeAuditSection from '@/components/sections/FreeAuditSection';
import ApproachSection from '@/components/sections/ApproachSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ClientLogosSection from '@/components/sections/ClientLogosSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';
import CalendlySection from '@/components/sections/CalendlySection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="bg-white text-lumirise-text font-opensans">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FreeAuditSection />
      <ApproachSection />
      <PortfolioSection />
      <ClientLogosSection />
      <StatsSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <CalendlySection />
      <Footer />
    </div>
  );
};

export default HomePage;
