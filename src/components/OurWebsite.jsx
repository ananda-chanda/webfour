import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Building2, Globe, TrendingUp, Star, ArrowRight, CheckCircle, Code, Shield, Zap } from 'lucide-react';

export const OurWebsite = ({ isHomePage = false }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const clients = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logoText: "TC",
      logoColor: "from-blue-600 to-indigo-600",
      category: "technology",
      industry: "IT Services",
      website: "www.techcorp.com",
      description: "Enterprise software solutions and cloud services",
      services: ["Web Development", "Mobile App", "Cloud Integration"],
      testimonial: "WebFour transformed our digital presence completely!",
      rating: 5
    },
    {
      id: 2,
      name: "HealthPlus Medical",
      logoText: "HP",
      logoColor: "from-green-600 to-emerald-600",
      category: "healthcare",
      industry: "Healthcare",
      website: "www.healthplus.com",
      description: "Comprehensive healthcare and wellness services",
      services: ["Custom Website", "Patient Portal", "SEO"],
      testimonial: "Professional team with excellent results!",
      rating: 5
    },
    {
      id: 3,
      name: "EduLearn Academy",
      logoText: "EA",
      logoColor: "from-purple-600 to-pink-600",
      category: "education",
      industry: "Education",
      website: "www.edulearn.com",
      description: "Online learning and educational technology platform",
      services: ["E-learning Platform", "LMS Development", "Mobile App"],
      testimonial: "Best web development services we've experienced!",
      rating: 5
    }
  ];

  const categories = [
    { id: 'all', name: 'All Clients', icon: <Building2 className="w-5 h-5" /> },
    { id: 'technology', name: 'Technology', icon: <Code className="w-5 h-5" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Shield className="w-5 h-5" /> },
    { id: 'education', name: 'Education', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'ecommerce', name: 'E-commerce', icon: <Globe className="w-5 h-5" /> },
    { id: 'finance', name: 'Finance', icon: <Zap className="w-5 h-5" /> }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "1000+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Industries Served" }
  ];

  const filteredClients = activeCategory === 'all' 
    ? clients 
    : clients.filter(client => client.category === activeCategory);

  // Show only 6 clients on home page
  const displayClients = isHomePage ? filteredClients.slice(0, 6) : filteredClients;

  return (
    <div className={`bg-gradient-to-br from-slate-50 to-gray-100 ${!isHomePage ? 'min-h-screen' : ''}`}>
      {!isHomePage && (
        <Helmet>
          <title>Our Clients | WebFour Solutions - Trusted Web Development Services</title>
          <meta
            name="description"
            content="Discover our diverse portfolio of clients across industries. WebFour Solutions has delivered premium web development services to 500+ satisfied clients worldwide."
          />
          <meta
            name="keywords"
            content="web development clients, our portfolio, client testimonials, web development services, satisfied clients, WebFour Solutions clients"
          />
          <meta property="og:title" content="Our Clients | WebFour Solutions" />
          <meta property="og:description" content="500+ satisfied clients trust WebFour Solutions for premium web development services across 15+ industries." />
          <meta property="og:url" content="https://www.webfour.tech/clients" />
          <link rel="canonical" href="https://www.webfour.tech/clients" />
        </Helmet>
      )}

      {/* Hero Section - Only on standalone page */}
      {!isHomePage && (
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                Our Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Clients</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Proud to serve amazing businesses across diverse industries with our premium web development services
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  <span className="font-semibold">4.9/5 Average Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">500+ Happy Clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Section Title for Home Page */}
      {isHomePage && (
        <div className="container mx-auto px-4 pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              Our Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proud to serve amazing businesses across diverse industries
            </p>
          </motion.div>
        </div>
      )}

      {/* Stats Section */}
      <div className={`container mx-auto px-4 ${!isHomePage ? '-mt-10' : 'mt-8'} relative z-10`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Category Filter - Hide on home page */}
      {!isHomePage && (
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Clients Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayClients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Client Logo */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                <div className={`w-32 h-32 bg-gradient-to-br ${client.logoColor} rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl font-black text-white">{client.logoText}</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                  {client.industry}
                </div>
              </div>

              {/* Client Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{client.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{client.description}</p>

                {/* Website */}
                <div className="flex items-center gap-2 text-blue-600 mb-4">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{client.website}</span>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {client.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(client.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 italic text-sm">"{client.testimonial}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button - Only on home page */}
        {isHomePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/clients"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300"
            >
              View All Clients
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </div>

      {/* CTA Section - Only on standalone page */}
      {!isHomePage && (
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Your business deserves the best web development services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/917063389331', '_blank')}
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              Start Your Project Today
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default OurWebsite;