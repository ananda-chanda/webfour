import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Work from './Work';
import Hero from './Hero';
import Service from './Service';
import Process from './Process';
import Card from './Card'

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

// Component to wrap each section with animation
const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export const Home = () => {
  return (
    <>
      {/* Hero doesn't need animation wrapper since it's first in view */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>
      
      <AnimatedSection>
        <Work />
      </AnimatedSection>
      
      <AnimatedSection>
        <Service />
      </AnimatedSection>

      <AnimatedSection>
        <Card />
      </AnimatedSection>
      
      <AnimatedSection>
        <Process />
      </AnimatedSection>
    </>
  );
};