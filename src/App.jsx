import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/hero" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/service" element={<Service />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path ='/blog' element={<Blog/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;