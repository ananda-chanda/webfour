import React from 'react';
import { motion } from 'framer-motion';

const WebsiteProcess = () => {
  const steps = [
    {
      image: "https://storage.googleapis.com/a1aa/image/3JJ4Yg7Tu5aOu_9LgKvjstGkQZS_ZORRArGI3GPt2QI.jpg",
      title: "Let's Speak and Find Out What We Can",
      description: "First and foremost, we'll get to know one another, establish project requirements and expectations, as well as what your organization's online objectives are and how we can assist you in achieving them."
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/75K7LeS-sWx8xAyWiFO6SCwf6J6ipGptfWa7wkmnLbg.jpg",
      title: "Originality and Originality of Material",
      description: "The success of every website is dependent on the quality of its content. Therefore, we will assist you in creating the content for your website using our web experience and your industry knowledge, or we will assist you in finding a specialist to handle this part of the project."
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/-9t_JfdBBTPCISt7gzXt8dURdmTlV32Gr1uHfYDP0qo.jpg",
      title: "Construct and Test a Prototype",
      description: "As part of the process, we will build a single website that will display your material according to current web standards. We will test it on the most recent, most popular browsers and different mobile device resolutions. So let's work together to develop a solution that offers an excellent experience for desktop computers and mobile devices."
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/0YxhVw3X1JjXhi4uLB41z1Pe8aBrKqZPMjB7fzf4XTk.jpg",
      title: "Conduct a Preview and Launch",
      description: "During this last stage, you will have access to a live preview of your new website, allowing you to get a true sense of how it will navigate and interact with visitors. Then, when you are completely happy with the final product, we will work with you to organize your new online identity to disclose at the right moment for your audience."
    }
  ];

  const handleGetStarted = () => {
    window.location.href = "mailto:webfourchand@gmail.com?subject=Get%20Started%20with%20WebFour&body=I'm%20interested%20in%20getting%20started%20with%20your%20services.";
  };

  return (
    <div className="bg-white m-0 p-0 font-sans">
      <div className="max-w-6xl mx-auto p-5">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-blue-600 font-bold text-2xl mb-5"
        >
          Processes That We Use Creating a Website in Four Simple Stages
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="border border-blue-600 p-5 text-center rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={step.image} 
                alt={`Icon for ${step.title}`} 
                className="w-20 h-20 mb-5 mx-auto"
                whileHover={{ rotate: 5 }}
              />
              <motion.h3 
                className="text-black text-lg font-medium mb-2"
              >
                {step.title}
              </motion.h3>
              <motion.p 
                className="text-gray-700 text-base"
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Get Started Button */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button 
            onClick={handleGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WebsiteProcess;