import React from 'react';

const BlueDigitalWebFourMedia = () => {
  // Platform logos data with additional platforms
  const platforms = [
    { name: 'WordPress', alt: 'WordPress logo', src: 'https://storage.googleapis.com/a1aa/image/i25owJNdUWKodgXFimXm13nz7DBWVd9lMfjV5jalJqQ.jpg' },
    { name: 'Magento', alt: 'Magento logo', src: 'https://storage.googleapis.com/a1aa/image/MbCHpcafMJhq777E6nTZN6ZZIwzt8Q0a-HdmreZLWhM.jpg' },
    { name: 'Shopify', alt: 'Shopify logo', src: 'https://storage.googleapis.com/a1aa/image/p2whrWv3TBV7vUsylFBxGKKubtFyraP9COikby4ddSw.jpg' },
    { name: 'Drupal', alt: 'Drupal logo', src: 'https://storage.googleapis.com/a1aa/image/3VGJ4bj90DsJUYW1SL1mH4PMZkt6EGPXIfUXyp8Cv0Y.jpg' },
    { name: 'React', alt: 'React logo', src: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
    { name: 'Node.js', alt: 'Node.js logo', src: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
    { name: 'Python', alt: 'Python logo', src: 'https://www.vectorlogo.zone/logos/python/python-icon.svg' },
    { name: 'JavaScript', alt: 'JavaScript logo', src: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg' },
    { name: 'PHP', alt: 'PHP logo', src: 'https://www.vectorlogo.zone/logos/php/php-icon.svg' },
    { name: 'Flutter', alt: 'Flutter logo', src: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },
    { name: 'Laravel', alt: 'Laravel logo', src: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg' },
    { name: 'Java', alt: 'Java logo', src: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Background image with improved styling */}
      <div 
        className="absolute inset-0 z-0 opacity-5 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://storage.googleapis.com/a1aa/image/Cxn_kybEIf3zLQikHU7CO2opmAIu9h8KIt90LqjxxmI.jpg')"
        }}
      />
      
      {/* Main content container */}
      <div className="relative z-10 text-center p-8 max-w-7xl mx-auto">
        {/* Header section with improved styling */}
        <header className="bg-white py-8 mb-12 rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
          <h1 className="text-blue-600 text-5xl font-bold mb-4">
            WebFour Media &amp; Web Solutions
          </h1>
          <p className="text-gray-600 text-xl">Empowering Your Digital Presence</p>
        </header>
        
        {/* Platform logos section with improved grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-white rounded-xl shadow-lg">
          {platforms.map((platform) => (
            <div 
              key={platform.name} 
              className="group p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={platform.src}
                  alt={platform.alt}
                  className="w-20 h-20 object-contain mb-4 group-hover:animate-pulse"
                />
                <p className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors duration-300">
                  {platform.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlueDigitalWebFourMedia;