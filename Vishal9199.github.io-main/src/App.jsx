import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollUtils from './components/ScrollUtils';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

import Skills from './components/Skills';
import Education from './components/Education';
// import Testimonials from './components/Testimonials';

import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app hide-default-cursor">
      <AnimatePresence mode="wait">
        {loading && <Loader finishLoading={() => setLoading(false)} />}
      </AnimatePresence>
      <CustomCursor />
      <ScrollUtils />
      <Navbar />
      <main>
        <Hero />
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
