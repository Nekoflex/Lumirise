import React, { useEffect, useRef, useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { motion, useAnimation, useInView, animate } from 'framer-motion';

const AnimatedNumber = ({ value, suffix = '', prefix = '' }) => {
  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.1 } 
      });
      const animation = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        }
      });
      return () => animation.stop();
    }
  }, [isInView, value, controls]);


  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={controls}>
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
};


const stats = [
  { value: 14, prefix: "+", legend: "Projets réalisés" },
  { value: 120, prefix: "+", suffix: "h", legend: "de temps économisé chez nos clients" },
  { value: 38, prefix: "+", suffix: "%", legend: "de chiffre d’affaires généré" },
];

const StatsSection = () => {
  return (
    <SectionWrapper id="stats" className="bg-lumirise-accent/5">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <p className="text-4xl md:text-5xl font-poppins font-bold text-lumirise-accent mb-3">
              <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </p>
            <p className="text-gray-600 font-lora text-base">{stat.legend}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default StatsSection;
