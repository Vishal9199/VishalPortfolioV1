import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import Hero from './components/Hero';
import ScrollUtils from './components/ScrollUtils';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Lenis from 'lenis';

import Skills from './components/Skills';
import Education from './components/Education';
// import Testimonials from './components/Testimonials';

import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import BrandCarousel from './components/BrandCarousel';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app hide-default-cursor">
      <ScrollProgress />
      <AnimatePresence mode="wait">
        {loading && <Loader finishLoading={() => setLoading(false)} />}
      </AnimatePresence>
      <CustomCursor />
      <SEO />
      <ScrollUtils />
      <Navbar />
      <main>
        <Hero />
        <BrandCarousel />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        {/* <Testimonials /> */}
        <Contact />
      </main>


      <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
        <p>&copy; {new Date().getFullYear()} Vishal Kumar Mahatha. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
