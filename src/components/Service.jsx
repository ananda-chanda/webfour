import React from 'react';
import Res from '../assets/Res.jpg';

const WebDesignServices = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="p-10 text-center">
        <h1 className="text-4xl text-blue-600 font-bold mb-5">
          Responsive Web Design Services and Website Development Company
        </h1>
        
        <div className="bg-white p-10 rounded-lg shadow-md flex flex-col md:flex-row md:justify-between md:items-start mb-10">
          <div className="md:max-w-md lg:max-w-lg">
            <h2 className="text-3xl text-blue-600 font-extrabold mb-5 text-left">
              What We Do At WebFour?
            </h2>
            <p className="text-lg font-normal text-gray-800 text-left leading-relaxed">
              <span className="font-medium">WebFour &amp; Web Solutions</span>, established in 2005, 
              having its corporate office in India, has expertise in Web &amp; Mobile 
              Application Development using advanced research, strategic thinking and 
              planning, and innovative procurements and implementations to maximize 
              client business reach and enhancing efficiency.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 md:max-w-sm lg:max-w-md">
            <img 
              src={Res} 
              alt="Responsive web design"
              className="w-full h-[350px] rounded-md"
            />
          </div>
        </div>

        {/* Static and Dynamic Website Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Static Website Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Static Website Development</h3>
            <p className="text-gray-700 mb-4 font-light">
              We create beautiful, fast-loading static websites perfect for:
            </p>
            <ul className="text-left text-gray-600 space-y-2 mb-4 font-normal">
              <li>• Business Portfolios</li>
              <li>• Landing Pages</li>
              <li>• Company Profiles</li>
              <li>• Informational Websites</li>
              <li>• Personal Portfolios</li>
            </ul>
            <p className="text-gray-700 font-medium">
              Static websites are cost-effective, secure, and perform exceptionally well for content that doesn't require frequent updates.
            </p>
          </div>

          {/* Dynamic Website Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">Dynamic Website Development</h3>
            <p className="text-gray-700 mb-4 font-light">
              Our dynamic websites offer interactive features and real-time updates, perfect for:
            </p>
            <ul className="text-left text-gray-600 space-y-2 mb-4 font-normal">
              <li>• E-commerce Platforms</li>
              <li>• Social Media Platforms</li>
              <li>• Content Management Systems</li>
              <li>• Customer Portals</li>
              <li>• Online Learning Platforms</li>
            </ul>
            <p className="text-gray-700 font-medium">
              Dynamic websites allow real-time content updates, user interactions, and database integration for complex functionalities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignServices;