import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: "Ananda Chanda",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    },
    {
      name: "Avery Smith",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    },
    {
        name: "Alex Johnson",
        role: "Fullstack Developer",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      },
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            About WebFour Media
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Building Digital Excellence Since 2005
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with innovative digital solutions that drive growth and success in the modern digital landscape. We strive to deliver excellence through cutting-edge technology and creative solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading digital transformation partner for businesses worldwide, known for our innovative solutions, technical expertise, and commitment to client success.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              WebFour Media & Web Solutions, established in 2005, is a premier digital solutions provider based in Bhubaneswar, India. With over 15 years of experience, we specialize in web development, mobile applications, and digital marketing solutions. Our team of experts combines technical expertise with creative innovation to deliver exceptional results for our clients worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;