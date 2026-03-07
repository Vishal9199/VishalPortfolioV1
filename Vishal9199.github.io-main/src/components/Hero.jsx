import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MousePointer2, FileDown } from 'lucide-react';
import Scene3D from './canvas/Scene3D';
import { useMagnetic } from '../hooks/useMagnetic';

const Hero = () => {
    const magneticExplore = useMagnetic(0.1);
    const magneticCV = useMagnetic(0.08);

    return (
        <section id="intro" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', padding: '10rem 0 4rem 0' }}>
            <Scene3D />
            
            <div className="container">
                <div style={{ maxWidth: '850px', position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h5 className="text-primary" style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1.25rem', letterSpacing: '4px', fontSize: '0.8rem', opacity: 0.8 }}>
                            SENIOR ORACLE CLOUD DEVELOPER
                        </h5>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 4.8rem)', lineHeight: 0.9, marginBottom: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                            Delivering Enterprise <br />
                            <span className="text-gradient">Scale Excellence.</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6, fontWeight: 400 }}>
                            Specializing in <span style={{ color: '#fff' }}>OIC, VBCS, and PCS</span>. I bridge the gap between complex business requirements and robust, cloud-native automated solutions.
                        </p>
                    </motion.div>
 
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}
                    >
                        <motion.a 
                            ref={magneticExplore.ref}
                            animate={{ x: magneticExplore.x, y: magneticExplore.y }}
                            href="#projects" 
                            className="glass" 
                            style={{ 
                                padding: '1.1rem 2.8rem', 
                                background: 'var(--primary)', 
                                color: '#000', 
                                fontWeight: 700, 
                                borderRadius: '14px', 
                                border: 'none',
                                boxShadow: '0 10px 30px -10px var(--primary-glow)',
                                fontSize: '1rem'
                            }}
                        >
                            Explore My Work
                        </motion.a>

                        <motion.a 
                            ref={magneticCV.ref}
                            animate={{ x: magneticCV.x, y: magneticCV.y }}
                            href="/legacy/assets/resume/Vishal_Resume_07_May.pdf" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="glass" 
                            style={{ padding: '1rem 2.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--text-main)', borderRadius: '14px' }}
                        >
                            <FileDown size={20} />
                            Download CV
                        </motion.a>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com/Vishal9199" target="_blank" rel="noreferrer" className="glass" style={{ padding: '0.75rem', borderRadius: '50%', display: 'flex', transition: 'color 0.2s' }}>
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/vishal-kumar-mahatha-6577931b9/" target="_blank" rel="noreferrer" className="glass" style={{ padding: '0.75rem', borderRadius: '50%', display: 'flex', transition: 'color 0.2s' }}>
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        style={{ marginTop: '3.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
                    >
                        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', fontWeight: 600 }}>Core Ecosystem |</span>
                        <div style={{ display: 'flex', gap: '1.25rem', opacity: 0.8, filter: 'grayscale(0.5)' }}>
                            <img src="https://skillicons.dev/icons?i=oracle,py,js,react,mysql,aws,docker,linux" alt="core skills" style={{ height: '35px' }} />
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.3 }}
            >
                <MousePointer2 size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
