import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

import { Navbar } from './components/Navbar';
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

      {/* Global SEO */}
      <Helmet>
        {/* Language */}
        <html lang="en" />

        {/* Basic Meta */}
        <meta charSet="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        {/* Title */}
        <title>
          WebFour Solutions | Web Development Company
        </title>

        {/* Description */}
        <meta
          name="description"
          content="WebFour Solutions provides professional web development, React.js, Next.js, MERN stack, mobile applications, UI/UX design, and digital marketing services."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="WebFour Solutions, web development company, React developer, Next.js developer, MERN stack developer, frontend developer, full stack development, SEO services, mobile app development"
        />

        {/* Robots */}
        <meta
          name="robots"
          content="index, follow"
        />

        {/* Author */}
        <meta
          name="author"
          content="WebFour Solutions"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://webfoursolutions.vercel.app/"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="WebFour Solutions | Web Development Company"
        />

        <meta
          property="og:description"
          content="Professional web development and digital solutions using React.js, Next.js, and MERN stack."
        />

        <meta
          property="og:url"
          content="https://webfoursolutions.vercel.app/"
        />

        <meta
          property="og:type"
          content="website"
        />

        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
        />

        {/* Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

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