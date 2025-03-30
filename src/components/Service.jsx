import React from 'react';
import { motion } from 'framer-motion';
import Res from '../assets/Res.jpg';

const WebDesignServices = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  const handleConsultation = () => {
    window.open('https://wa.me/917063389331', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
            Responsive Web Design Services and Website Development
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row md:justify-between md:items-center gap-10 mb-16 border-t-4 border-gradient-to-r from-blue-500 to-indigo-600"
          style={{ borderImage: 'linear-gradient(to right, #3b82f6, #4f46e5) 1' }}
        >
       <div className="md:max-w-lg lg:max-w-xl">
  <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 text-left">
    What We Do At WebFour?
  </h2>
  
  {/* Added gradient underline below heading */}
  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mb-6"></div>
  
  <p className="text-lg font-normal text-gray-700 text-left leading-relaxed">
    <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">WebFour &amp; Web Solutions</span>, 
    established in 2005, having its corporate office in India, has expertise in 
    <span className="px-1 mx-1 rounded bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700">Web &amp; Mobile Application Development</span> 
    using advanced research, strategic thinking and planning, and innovative procurements 
    and implementations to maximize client business reach and enhancing efficiency.
  </p>
  
  {/* Enhanced vertical separator with animated gradient */}
  <div className="mt-8 flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-gradient-to-b"
       style={{ borderImage: 'linear-gradient(to bottom, #3b82f6, #4f46e5) 1' }}>
    <motion.div 
      className="h-12 w-1.5 bg-gradient-to-b from-blue-500 to-indigo-600 mr-4 rounded-full"
      animate={{ 
        boxShadow: ['0 0 0 rgba(59, 130, 246, 0)', '0 0 8px rgba(59, 130, 246, 0.5)', '0 0 0 rgba(59, 130, 246, 0)'] 
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 2 
      }}
    ></motion.div>
    <div>
      <p className="text-gray-700 italic font-medium">
        <span className="block text-lg mb-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text font-bold">
          Transforming ideas into powerful digital experiences
        </span>
        <span className="text-blue-600">since 2005</span>
      </p>
    </div>
  </div>
  
  {/* Added feature dots with gradients */}
  <div className="mt-6 grid grid-cols-2 gap-3">
    {['Innovative', 'Strategic', 'Efficient', 'Responsive'].map((trait, index) => (
      <motion.div 
        key={index}
        className="flex items-center"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 + (index * 0.1) }}
      >
        <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mr-2"></span>
        <span className="text-gray-700 font-medium">{trait}</span>
      </motion.div>
    ))}
  </div>
</div>
          
          <div className="md:max-w-sm lg:max-w-md">
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={Res} 
                alt="Responsive web design"
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
              <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Static and Dynamic Website Sections */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Static Website Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-8">
              <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform -rotate-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-4 text-center">Static Website Development</h3>
              <p className="text-gray-700 mb-5 font-light text-center">
                We create beautiful, fast-loading static websites perfect for:
              </p>
              <div className="bg-gray-50 rounded-lg p-5 mb-5">
                <ul className="text-left text-gray-600 space-y-3">
                  {[
                    'Business Portfolios', 
                    'Landing Pages', 
                    'Company Profiles', 
                    'Informational Websites', 
                    'Personal Portfolios'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                    >
                      <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mr-2"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-700 font-medium bg-gray-50/50 p-4 rounded-lg border-l-4 border-blue-500">
                Static websites are cost-effective, secure, and perform exceptionally well for content that doesn't require frequent updates.
              </p>
            </div>
          </motion.div>

          {/* Dynamic Website Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-2 bg-gradient-to-r from-green-500 to-teal-600"></div>
            <div className="p-8">
              <div className="h-20 w-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-700 mb-4 text-center">Dynamic Website Development</h3>
              <p className="text-gray-700 mb-5 font-light text-center">
                Our dynamic websites offer interactive features and real-time updates, perfect for:
              </p>
              <div className="bg-gray-50 rounded-lg p-5 mb-5">
                <ul className="text-left text-gray-600 space-y-3">
                  {[
                    'E-commerce Platforms', 
                    'Social Media Platforms', 
                    'Content Management Systems', 
                    'Customer Portals', 
                    'Online Learning Platforms'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (index * 0.1) }}
                    >
                      <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-green-500 to-teal-600 mr-2"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-700 font-medium bg-gray-50/50 p-4 rounded-lg border-l-4 border-green-500">
                Dynamic websites allow real-time content updates, user interactions, and database integration for complex functionalities.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Call to Action Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.8 }}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to transform your online presence?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create a website that perfectly represents your brand and meets your business objectives. 
              Our team of experts is ready to bring your vision to life.
            </p>
            <motion.button 
              onClick={handleConsultation}
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center">
                <span>Get a Free Consultation</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDesignServices;