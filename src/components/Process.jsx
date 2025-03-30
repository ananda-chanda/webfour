import React from 'react';
import { motion } from 'framer-motion';

const WebsiteProcess = () => {
  const steps = [
    {
      image: "https://storage.googleapis.com/a1aa/image/3JJ4Yg7Tu5aOu_9LgKvjstGkQZS_ZORRArGI3GPt2QI.jpg",
      title: "Let's Speak and Find Out What We Can",
      description: "First and foremost, we'll get to know one another, establish project requirements and expectations, as well as what your organization's online objectives are and how we can assist you in achieving them.",
      gradient: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-100"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/75K7LeS-sWx8xAyWiFO6SCwf6J6ipGptfWa7wkmnLbg.jpg",
      title: "Originality and Originality of Material",
      description: "The success of every website is dependent on the quality of its content. Therefore, we will assist you in creating the content for your website using our web experience and your industry knowledge, or we will assist you in finding a specialist to handle this part of the project.",
      gradient: "from-purple-500 to-pink-600",
      iconBg: "bg-purple-100"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/-9t_JfdBBTPCISt7gzXt8dURdmTlV32Gr1uHfYDP0qo.jpg",
      title: "Construct and Test a Prototype",
      description: "As part of the process, we will build a single website that will display your material according to current web standards. We will test it on the most recent, most popular browsers and different mobile device resolutions. So let's work together to develop a solution that offers an excellent experience for desktop computers and mobile devices.",
      gradient: "from-teal-500 to-green-600",
      iconBg: "bg-teal-100"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/0YxhVw3X1JjXhi4uLB41z1Pe8aBrKqZPMjB7fzf4XTk.jpg",
      title: "Conduct a Preview and Launch",
      description: "During this last stage, you will have access to a live preview of your new website, allowing you to get a true sense of how it will navigate and interact with visitors. Then, when you are completely happy with the final product, we will work with you to organize your new online identity to disclose at the right moment for your audience.",
      gradient: "from-orange-500 to-red-600",
      iconBg: "bg-orange-100"
    }
  ];

  const handleGetStarted = () => {
    window.location.href = "mailto:webfourchand@gmail.com?subject=Get%20Started%20with%20WebFour&body=I'm%20interested%20in%20getting%20started%20with%20your%20services.";
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-4">
            Our Four-Step Website Creation Process
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We follow a streamlined approach to deliver high-quality websites that meet your business objectives
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connection lines between steps */}
          <div className="absolute hidden md:block top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-500 transform -translate-y-1/2 z-0"></div>
        
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                {/* Step number */}
                <motion.div 
                  className={`absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} text-white flex items-center justify-center font-bold shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 * (index + 1) }}
                >
                  {index + 1}
                </motion.div>
                
                {/* Card */}
                <motion.div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  {/* Card header */}
                  <div className={`h-2 bg-gradient-to-r ${step.gradient}`}></div>
                  
                  {/* Card content */}
                  <div className="p-6">
                    <div className={`${step.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <motion.img 
                        src={step.image} 
                        alt={`Icon for ${step.title}`} 
                        className="w-10 h-10"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Get Started Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Ready to start your project with us?
          </h3>
          
          <motion.button 
            onClick={handleGetStarted}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center">
              <span>Get Started Today</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WebsiteProcess;