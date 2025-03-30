import React from 'react';
import { motion } from 'framer-motion';

const BlueDigitalWebFourMedia = () => {
  // Platform logos data with additional platforms
  const platforms = [
    { name: 'WordPress', alt: 'WordPress logo', src: 'https://storage.googleapis.com/a1aa/image/i25owJNdUWKodgXFimXm13nz7DBWVd9lMfjV5jalJqQ.jpg', gradient: 'from-blue-500 to-blue-700' },
    { name: 'Magento', alt: 'Magento logo', src: 'https://storage.googleapis.com/a1aa/image/MbCHpcafMJhq777E6nTZN6ZZIwzt8Q0a-HdmreZLWhM.jpg', gradient: 'from-orange-500 to-red-600' },
    { name: 'Shopify', alt: 'Shopify logo', src: 'https://storage.googleapis.com/a1aa/image/p2whrWv3TBV7vUsylFBxGKKubtFyraP9COikby4ddSw.jpg', gradient: 'from-green-500 to-teal-600' },
    { name: 'Drupal', alt: 'Drupal logo', src: 'https://storage.googleapis.com/a1aa/image/3VGJ4bj90DsJUYW1SL1mH4PMZkt6EGPXIfUXyp8Cv0Y.jpg', gradient: 'from-blue-400 to-blue-600' },
    { name: 'React', alt: 'React logo', src: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', alt: 'Node.js logo', src: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg', gradient: 'from-green-600 to-green-800' },
    { name: 'Python', alt: 'Python logo', src: 'https://www.vectorlogo.zone/logos/python/python-icon.svg', gradient: 'from-blue-500 to-yellow-500' },
    { name: 'JavaScript', alt: 'JavaScript logo', src: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg', gradient: 'from-yellow-400 to-yellow-600' },
    { name: 'PHP', alt: 'PHP logo', src: 'https://www.vectorlogo.zone/logos/php/php-icon.svg', gradient: 'from-indigo-500 to-indigo-700' },
    { name: 'Flutter', alt: 'Flutter logo', src: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg', gradient: 'from-cyan-400 to-blue-500' },
    { name: 'Laravel', alt: 'Laravel logo', src: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg', gradient: 'from-red-500 to-pink-600' },
    { name: 'Java', alt: 'Java logo', src: 'https://www.vectorlogo.zone/logos/java/java-icon.svg', gradient: 'from-blue-600 to-red-600' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      {/* Background gradient overlay with subtle pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/60 to-indigo-50/60 opacity-80"></div>
      <div 
        className="absolute inset-0 z-0 opacity-3 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://storage.googleapis.com/a1aa/image/Cxn_kybEIf3zLQikHU7CO2opmAIu9h8KIt90LqjxxmI.jpg')"
        }}
      />
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header section with gradient */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
            WebFour Media &amp; Web Solutions
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technologies and expert solutions for digital success
          </p>
        </motion.header>
        
        {/* Technologies section with improved design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
            Technologies We Work With
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div 
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Gradient top bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${platform.gradient}`}></div>
                  
                  <div className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className={`w-20 h-20 rounded-full p-4 bg-gradient-to-br ${platform.gradient} bg-opacity-10 flex items-center justify-center`}>
                        <img 
                          src={platform.src}
                          alt={platform.alt}
                          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <h3 className={`text-lg font-semibold text-center text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${platform.gradient}`}>
                      {platform.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to work with us?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together using the latest technologies and our expertise
            </p>
            <motion.button 
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center">
                <span>Contact Us Today</span>
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

export default BlueDigitalWebFourMedia;