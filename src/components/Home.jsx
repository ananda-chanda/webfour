import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';

import Work from './Work';
import Hero from './Hero';
import Service from './Service';
import Process from './Process';
import Card from './Card';
import { OurWebsite } from './OurWebsite';

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

// Animated wrapper
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
      <Helmet>
        {/* Basic SEO */}
        <title>
          WebFour Solutions | Web Development Company
        </title>

        <meta
          name="description"
          content="WebFour Solutions provides modern web development services using React.js, Next.js, MERN Stack, UI/UX design, and scalable business solutions."
        />

        <meta
          name="keywords"
          content="WebFour Solutions, React developer, MERN stack developer, Next.js development, website design, frontend developer, full stack developer"
        />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="WebFour Solutions" />

        {/* Open Graph SEO */}
        <meta
          property="og:title"
          content="WebFour Solutions | Web Development Company"
        />

        <meta
          property="og:description"
          content="Modern and scalable web development solutions using React.js, Next.js, and MERN Stack."
        />

        <meta
          property="og:url"
          content="https://webfoursolutions.vercel.app/"
        />

        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://webfoursolutions.vercel.app/"
        />
      </Helmet>

      {/* Hero */}
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

      <Service />

      <AnimatedSection>
        <Card />
      </AnimatedSection>

      <AnimatedSection>
        <OurWebsite />
      </AnimatedSection>

      <AnimatedSection>
        <Process />
      </AnimatedSection>
    </>
  );
};