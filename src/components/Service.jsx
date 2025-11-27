import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Sparkles, Zap, Rocket, Code, Palette, TrendingUp, Shield, ArrowRight, Check } from 'lucide-react';

const WebDesignServices = () => {
  const [activeTab, setActiveTab] = useState('static');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Particle animation
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  const handleConsultation = () => {
    window.open('https://wa.me/917063389331', '_blank');
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored solutions built from scratch",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Stunning visuals that captivate",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Built to rank and perform",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Fast",
      description: "Enterprise-grade security",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const staticFeatures = [
    "Lightning-fast load times",
    "Zero maintenance required",
    "Maximum security",
    "Cost-effective hosting",
    "Perfect SEO performance"
  ];

  const dynamicFeatures = [
    "Real-time data updates",
    "User authentication",
    "Database integration",
    "Admin dashboards",
    "API integrations"
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "20+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  // Placeholder images - replace with your actual images
  const heroImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const staticImage = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
  const dynamicImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Web Design Services | WebFour Solutions - Custom Websites & Development</title>
        <meta
          name="description"
          content="Professional web design and development services. We create stunning static and dynamic websites with custom development, creative design, and SEO optimization. 20+ years experience."
        />
        <meta
          name="keywords"
          content="web design services, website development, static websites, dynamic websites, custom web development, responsive design, SEO optimization, WebFour Solutions"
        />
        <meta property="og:title" content="Web Design Services | WebFour Solutions" />
        <meta
          property="og:description"
          content="Transform your digital presence with our premium web design and development services. Custom solutions tailored to your business needs."
        />
        <meta property="og:image" content="https://www.webfour.tech/og-image.jpg" />
        <meta property="og:url" content="https://www.webfour.tech/service" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.webfour.tech/service" />
      </Helmet>

      {/* Animated Background Particles */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div> */}


  

      {/* Services Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why Choose WebFour?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Perfect Solution For Every Need
            </h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2">
              <button
                onClick={() => setActiveTab('static')}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeTab === 'static'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Static Websites
              </button>
              <button
                onClick={() => setActiveTab('dynamic')}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeTab === 'dynamic'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Dynamic Websites
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={activeTab === 'static' ? staticImage : dynamicImage}
                  alt={activeTab === 'static' ? 'Static Website Development' : 'Dynamic Website Development'}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              key={`${activeTab}-content`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
                {activeTab === 'static' ? <Zap className="w-4 h-4" /> : <Rocket className="w-4 h-4" />}
                {activeTab === 'static' ? 'Fast & Efficient' : 'Powerful & Flexible'}
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white">
                {activeTab === 'static' ? 'Static Website Development' : 'Dynamic Website Development'}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                {activeTab === 'static'
                  ? 'Perfect for businesses that need a fast, secure, and cost-effective online presence. Our static websites load instantly and rank higher in search engines.'
                  : 'Built for businesses that need advanced functionality, user interactions, and real-time updates. Our dynamic websites scale with your growth.'}
              </p>

              <div className="space-y-3">
                {(activeTab === 'static' ? staticFeatures : dynamicFeatures).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      activeTab === 'static' 
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500' 
                        : 'bg-gradient-to-br from-purple-500 to-pink-500'
                    }`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-8 md:p-16 text-center overflow-hidden"
          >
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Get Started?
              </h2>

              <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                Let's create something extraordinary together. Your dream website is just one conversation away.
              </p>

              <motion.button
                onClick={handleConsultation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-lg md:text-xl shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Get Free Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>

              <p className="mt-6 text-purple-200 text-sm">
                ⚡ No commitment required • 📞 Response within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignServices;