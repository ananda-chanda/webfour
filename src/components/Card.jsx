import React from 'react';
import { Helmet } from 'react-helmet';

const PricingPlans = () => {
  // Function to handle WhatsApp redirection
  const handleGetStarted = () => {
    window.open('https://wa.me/917063389331', '_blank');
  };

  const plans = [
    {
      badge: { text: "STARTER", className: "bg-gradient-to-r from-blue-700 to-blue-900" },
      title: "Basic",
      icon: "https://storage.googleapis.com/a1aa/image/bYEGhSquPJGiveJzplptf8_lolOc32uTsnkP95qL8R8.jpg",
      description: "Simple websites with clean code and essential features",
      price: "₹129.99",
      deliveryTime: "2-3 week delivery",
      supportTime: "3 months support",
      gradient: "from-blue-800 to-indigo-900",
      buttonGradient: "from-blue-600 to-indigo-700",
      features: [
        { text: "Responsive layout (mobile-first)", enabled: true },
        { text: "Up to 5 pages with custom design", enabled: true },
        { text: "SEO optimization & meta tags", enabled: true },
        { text: "Performance optimization", enabled: true },
        { text: "CMS integration", enabled: false },
        { text: "API integration", enabled: false },
      ],
      techStack: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      badge: { text: "POPULAR", className: "bg-gradient-to-r from-purple-600 to-purple-900" },
      title: "Professional",
      icon: "https://storage.googleapis.com/a1aa/image/vAJzhxK-bPU9LqdM_7qnnZe6LDuT7qoGp0X8oml5-1U.jpg",
      description: "Dynamic websites with custom functionality and CMS",
      price: "₹299.99",
      deliveryTime: "3-5 week delivery",
      supportTime: "6 months support",
      gradient: "from-purple-800 to-indigo-900",
      buttonGradient: "from-purple-600 to-indigo-700",
      features: [
        { text: "All Basic features included", enabled: true },
        { text: "Up to 10 pages with advanced design", enabled: true },
        { text: "CMS integration (WordPress/Strapi)", enabled: true },
        { text: "Custom animations & transitions", enabled: true },
        { text: "REST API integration", enabled: true },
        { text: "E-commerce functionality", enabled: false },
      ],
      techStack: ["React", "NextJS", "Tailwind CSS"]
    },
    {
      badge: { text: "COMPLETE", className: "bg-gradient-to-r from-green-500 to-green-700" },
      title: "Enterprise",
      icon: "https://storage.googleapis.com/a1aa/image/EdPBGAbcqfpXCOyYniEBbxKWOn0RfJr2BLkmg-cjlqQ.jpg",
      description: "Complex web applications with advanced functionality",
      price: "₹499.99",
      deliveryTime: "6-8 week delivery",
      supportTime: "12 months support",
      gradient: "from-green-700 to-blue-900",
      buttonGradient: "from-green-600 to-blue-700",
      features: [
        { text: "All Professional features included", enabled: true },
        { text: "Full-stack application development", enabled: true },
        { text: "Database design & implementation", enabled: true },
        { text: "E-commerce & payment integration", enabled: true },
        { text: "Authentication & user management", enabled: true },
        { text: "CI/CD pipeline setup", enabled: true },
      ],
      techStack: ["TypeScript", "React (Next.js)", "Node.js"]
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 py-16">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Pricing Plans | WebFour Solutions</title>
        <meta
          name="description"
          content="Explore our flexible pricing plans for web development services. Choose from Basic, Professional, and Enterprise plans tailored to your needs."
        />
        <meta
          name="keywords"
          content="pricing plans, web development pricing, Basic plan, Professional plan, Enterprise plan, WebFour Solutions"
        />
        <meta property="og:title" content="Pricing Plans | WebFour Solutions" />
        <meta
          property="og:description"
          content="Explore our flexible pricing plans for web development services. Choose from Basic, Professional, and Enterprise plans tailored to your needs."
        />
        <meta property="og:image" content="https://www.webfour.tech/og-image.jpg" />
        <meta property="og:url" content="https://www.webfour.tech/pricing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.webfour.tech/pricing" />
      </Helmet>

      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Pricing Plans</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your project needs with our flexible pricing options
          </p>
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${plan.gradient} rounded-2xl p-6 w-80 shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden border border-gray-700`}
            >
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 opacity-30 rounded-full blur-3xl bg-white"></div>
              
              <div className={`inline-block px-4 py-1 rounded-full text-xs font-medium mb-4 ${plan.badge.className}`}>
                {plan.badge.text}
              </div>
              <div className="flex items-center gap-3 text-2xl font-bold mb-3">
                <img src={plan.icon} alt={`${plan.title} plan icon`} className="w-10 h-10 rounded-full border-2 border-white p-1" />
                {plan.title}
              </div>
              <div className="text-sm mb-5 text-gray-300 min-h-[50px]">
                {plan.description}
              </div>
              <div className="text-3xl font-bold mb-2">
                {plan.price}
                <span className="text-base font-normal text-gray-300">/month</span>
              </div>
              <div className="flex items-center gap-3 text-sm mb-6 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {plan.deliveryTime}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {plan.supportTime}
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-4 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm mb-3">
                    {feature.enabled ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={feature.enabled ? '' : 'text-gray-500'}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {plan.techStack.map((tech, idx) => (
                  <div key={idx} className="bg-gray-800 bg-opacity-60 px-3 py-1 rounded-full text-xs">
                    {tech}
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleGetStarted}
                className={`w-full py-3 rounded-full font-medium bg-gradient-to-r ${plan.buttonGradient} hover:opacity-90 transition-opacity text-white shadow-lg flex items-center justify-center`}
              >
                <span>Get Started</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <div className="text-xs text-center mt-2 text-gray-400">
                Contact us on WhatsApp
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;