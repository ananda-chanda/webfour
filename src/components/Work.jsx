import React from 'react';
import { motion } from 'framer-motion';

const BlueDigitalWebFourMedia = () => {
  const projects = [
    {
      name: 'Greenbacks Microservices',
      url: 'greenbacksmicroservices.com',
      link: 'https://greenbacksmicroservices.com',
      description: 'A modern, scalable microservices platform built for high-performance financial workflows.',
      image: 'https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=800&q=80',
      tag: 'Fintech',
    },
    {
      name: 'Urban Tyohar',
      url: 'urbantyohar.com',
      link: 'https://urbantyohar.com',
      description: 'An interactive e-commerce and festival celebration platform for culturally rich shopping.',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
      tag: 'E-Commerce',
    },
    {
      name: 'Swoichha',
      url: 'swoichha.com',
      link: 'https://swoichha.com',
      description: 'A dedicated platform delivering tailored, custom user experiences at scale.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      tag: 'Platform',
    },
  ];

  const platforms = [
    { name: 'WordPress',  src: 'https://storage.googleapis.com/a1aa/image/i25owJNdUWKodgXFimXm13nz7DBWVd9lMfjV5jalJqQ.jpg' },
    { name: 'Magento',    src: 'https://storage.googleapis.com/a1aa/image/MbCHpcafMJhq777E6nTZN6ZZIwzt8Q0a-HdmreZLWhM.jpg' },
    { name: 'Shopify',    src: 'https://storage.googleapis.com/a1aa/image/p2whrWv3TBV7vUsylFBxGKKubtFyraP9COikby4ddSw.jpg' },
    { name: 'Drupal',     src: 'https://storage.googleapis.com/a1aa/image/3VGJ4bj90DsJUYW1SL1mH4PMZkt6EGPXIfUXyp8Cv0Y.jpg' },
    { name: 'React',      src: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
    { name: 'Node.js',    src: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
    { name: 'Python',     src: 'https://www.vectorlogo.zone/logos/python/python-icon.svg' },
    { name: 'JavaScript', src: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg' },
    { name: 'PHP',        src: 'https://www.vectorlogo.zone/logos/php/php-icon.svg' },
    { name: 'Flutter',    src: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },
    { name: 'Laravel',    src: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg' },
    { name: 'Java',       src: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '12+', label: 'Technologies' },
    { number: '8+',  label: 'Years Experience' },
    { number: '40+', label: 'Happy Clients' },
  ];

  const handleContactClick = () => {
    window.open('https://wa.me/917063389331', '_blank');
  };

  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 40%, #24243e 100%)' }}
    >
      {/* Subtle mesh overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 20%, rgba(99,102,241,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(6,182,212,0.14) 0%, transparent 60%)',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.header
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
            style={{
              background: 'linear-gradient(90deg,rgba(99,102,241,0.25),rgba(6,182,212,0.25))',
              border: '1px solid rgba(99,102,241,0.4)',
              color: '#a5b4fc',
            }}
          >
            Web &amp; Digital Agency
          </span>

          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            style={{
              background: 'linear-gradient(90deg, #818cf8 0%, #38bdf8 50%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            WebFour Media &amp; Web Solutions
          </h1>

          <div
            className="w-16 h-1 mx-auto mb-5 rounded-full"
            style={{ background: 'linear-gradient(90deg,#818cf8,#38bdf8)' }}
          />

          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#cbd5e1' }}>
            Empowering businesses with cutting-edge technologies and expert solutions for digital success.
          </p>
        </motion.header>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="rounded-2xl p-6 text-center"
              style={{
                background: 'linear-gradient(135deg,rgba(99,102,241,0.15),rgba(6,182,212,0.1))',
                border: '1px solid rgba(99,102,241,0.25)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <p
                className="text-3xl font-extrabold mb-1"
                style={{
                  background: 'linear-gradient(90deg,#818cf8,#38bdf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {s.number}
              </p>
              <p className="text-sm" style={{ color: '#94a3b8' }}>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Featured Work ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#818cf8' }}>
              Featured Work
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(99,102,241,0.25)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12 * index }}
                className="rounded-2xl overflow-hidden flex flex-col group"
                style={{
                  background: 'linear-gradient(135deg,rgba(30,27,75,0.9),rgba(15,23,42,0.95))',
                  border: '1px solid rgba(99,102,241,0.2)',
                  backdropFilter: 'blur(12px)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                whileHover={{
                  boxShadow: '0 0 32px rgba(99,102,241,0.25)',
                  borderColor: 'rgba(99,102,241,0.5)',
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(15,12,41,0.7) 0%, transparent 60%)' }}
                  />
                  <span
                    className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg,rgba(99,102,241,0.8),rgba(6,182,212,0.8))',
                      color: '#fff',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold mb-2" style={{ color: '#e2e8f0' }}>{project.name}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#94a3b8' }}>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium mt-4"
                    style={{ color: '#818cf8' }}
                  >
                    {project.url}
                    <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Technologies ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#818cf8' }}>
              Technologies We Work With
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(99,102,241,0.25)' }} />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ scale: 1.06, borderColor: 'rgba(99,102,241,0.5)' }}
                className="rounded-xl p-4 flex flex-col items-center gap-2 cursor-default"
                style={{
                  background: 'linear-gradient(135deg,rgba(30,27,75,0.7),rgba(15,23,42,0.8))',
                  border: '1px solid rgba(99,102,241,0.15)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s',
                }}
              >
                <img src={platform.src} alt={platform.name} className="w-8 h-8 object-contain" />
                <span className="text-xs text-center" style={{ color: '#94a3b8' }}>{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: 'linear-gradient(135deg,rgba(99,102,241,0.2) 0%,rgba(6,182,212,0.15) 100%)',
            border: '1px solid rgba(99,102,241,0.3)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div>
            <h3
              className="text-2xl font-extrabold mb-2"
              style={{
                background: 'linear-gradient(90deg,#818cf8,#38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Ready to build something great?
            </h3>
            <p className="text-sm mb-1" style={{ color: '#94a3b8' }}>
              Let's create something amazing using the latest technologies and our expertise.
            </p>
            <p className="text-xs flex items-center gap-1.5" style={{ color: '#64748b' }}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.886l6.197-1.624A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.045-1.399l-.361-.215-3.741.981 1-3.638-.236-.374A9.757 9.757 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              +91 7063389331
            </p>
          </div>

          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white"
            style={{
              background: 'linear-gradient(90deg,#6366f1,#06b6d4)',
              boxShadow: '0 0 24px rgba(99,102,241,0.4)',
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.886l6.197-1.624A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.045-1.399l-.361-.215-3.741.981 1-3.638-.236-.374A9.757 9.757 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            Contact on WhatsApp
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default BlueDigitalWebFourMedia;