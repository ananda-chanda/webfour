import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Navbar } from './components/Navbar';  // Changed this line
import Hero from './components/Hero';
import Work from './components/Work';
import Service from './components/Service';
import Process from './components/Process';
import Footer from './components/Fotter';
import { Home } from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';
import OurClient from './components/OurWebsite';

function App() {
  return (
    <Router>
      {/* Global SEO Meta Tags */}
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WebFour Solutions</title>
        <meta
          name="description"
          content="WebFour Solutions offers professional web development, mobile applications, and digital marketing services to help businesses grow."
        />
        <meta
          name="keywords"
          content="web development, mobile applications, digital marketing, responsive websites, SEO"
        />
        <link rel="icon" type="image/jpg" href="/src/assets/sarala.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/service" element={<Service />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/our-client" element={<OurClient />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;