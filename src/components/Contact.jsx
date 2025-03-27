import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-12 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center tracking-wide">CONTACT US</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>
      </header>

      {/* Cards Container */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-map-marker-alt text-blue-800 text-2xl"></i>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">WE ARE HERE</h2>
              <div className="text-gray-600 text-center space-y-4">
                <div className="pb-4 border-b border-gray-100">
                  <p>Sector-A, Rasulgarh</p>
                  <p>Bhubaneswar – 751009,</p>
                  <p>Odisha (India)</p>
                </div>
               
              </div>
            </div>
          </div>
          
          {/* Contact Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-phone-alt text-green-700 text-2xl"></i>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">REACH US</h2>
              <div className="text-gray-600 text-center">
                <p className="mb-2">Phone: +91-7063389331</p>
                <p>
                  Email: 
                  <a 
                    href="mailto:contact-us@hexalearn.com" 
                    className="text-blue-600 hover:text-blue-800 hover:underline ml-1"
                  >
                    contact-webfourchand@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Hours Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 lg:col-span-1 md:col-span-2 lg:col-start-3 lg:row-start-1">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-clock text-purple-700 text-2xl"></i>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">WORKING HOURS</h2>
              <div className="text-gray-600 text-center">
                <p>MON-FRI: 10:00 AM – 07:00 PM IST</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Footer */}
    
    </div>
  );
};

export default ContactUs;