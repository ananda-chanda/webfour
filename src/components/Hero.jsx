import React, { useEffect } from 'react';
import video from '../assets/v2.mp4';

const Hero = () => {
  useEffect(() => {
    // Animation for elements when component mounts
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('opacity-100', 'translate-y-0');
        element.classList.remove('opacity-0', 'translate-y-4');
      }, 200 * index);
    });
  }, []);

  return (
    <div className='relative flex w-full h-screen overflow-hidden'>
      {/* Video background */}
      <video
        className='absolute w-full h-full object-cover transform scale-105'
        src={video}
        loop
        muted
        autoPlay
      />
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 flex justify-center items-center w-full">
        <div className="text-center p-6 rounded-lg max-w-4xl w-full">
          
          {/* Badge with pulse effect */}
          <div className="inline-block bg-gradient-to-r from-indigo-800 to-blue-600 py-1.5 px-5 rounded-full text-sm mb-6 text-white font-medium shadow-lg animate-on-load opacity-0 translate-y-4 transition-all duration-500 ease-out">
            <i className="fas fa-star mr-2"></i> INNOVATION HUB Pioneering Digital Excellence
          </div>
          
          {/* Main headings with animation */}
          <h1 className="text-6xl font-bold my-2 text-white animate-on-load opacity-0 translate-y-4 transition-all duration-500 ease-out delay-100">WebFour Media</h1>
          <h2 className="text-6xl font-bold my-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 animate-on-load opacity-0 translate-y-4 transition-all duration-500 ease-out delay-200">Web Solutions</h2>
          
          {/* Description box */}
          <div className="bg-black bg-opacity-80 p-6 rounded-lg my-6 text-lg text-white border-l-4 border-blue-600 shadow-lg animate-on-load opacity-0 translate-y-4 transition-all duration-500 ease-out delay-300">
            Join us in creating innovative digital solutions that transform businesses and enhance user experiences worldwide.
          </div>
          
          {/* Buttons with hover effects */}
          <div className="flex flex-wrap justify-center gap-5 animate-on-load opacity-0 translate-y-4 transition-all duration-500 ease-out delay-400">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full text-base cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700   text-white hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-plus mr-2"></i> Get Started
            </a>
            <a
              href="/work"
              className="inline-flex items-center px-8 py-4 border-2 border-white border-opacity-80 rounded-full text-base cursor-pointer bg-transparent text-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-eye mr-2"></i> View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

