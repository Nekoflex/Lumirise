import React, { useEffect } from 'react';
import SectionWrapper from '@/components/SectionWrapper';

const CalendlySection = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('async', true);
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return (
    <SectionWrapper id="calendly-booking" className="bg-white">
      <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-12">
        Prenez Rendez-vous
      </h2>
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/lumirise/30min" 
        style={{ minWidth: '320px', height: '700px' }}
      >
      </div>
    </SectionWrapper>
  );
};

export default CalendlySection;
