import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MousePointer2, FileDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="intro" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background Glows with subtle floating animation */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--primary-glow)', filter: 'blur(100px)', borderRadius: '50%', zIndex: -1 }}
            ></motion.div>
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'rgba(0, 209, 255, 0.2)', filter: 'blur(120px)', borderRadius: '50%', zIndex: -1 }}
            ></motion.div>

            <div className="container">
                <div style={{ maxWidth: '850px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h5 className="text-primary" style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1.25rem', letterSpacing: '3px', fontSize: '0.9rem' }}>
                            SENIOR ORACLE CLOUD DEVELOPER
                        </h5>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)', lineHeight: 1, marginBottom: '2rem', fontWeight: 800 }}>
                            Delivering Enterprise <span className="text-gradient">Scale Excellence.</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '650px', lineHeight: 1.8 }}>
                            Specializing in <span style={{ color: '#fff' }}>OIC, VBCS, and PCS</span>. I bridge the gap between complex business requirements and robust, cloud-native automated solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}
                    >
                        <a href="#projects" className="glass" style={{ padding: '1rem 2.5rem', background: 'var(--primary)', color: '#000', fontWeight: 700, borderRadius: '12px', border: 'none', transition: 'transform 0.2s' }}>
                            Explore My Work
                        </a>

                        <a href="/legacy/assets/resume/Vishal_Resume_07_May.pdf" target="_blank" rel="noreferrer" className="glass" style={{ padding: '0.9rem 2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
                            <FileDown size={20} />
                            Download CV
                        </a>

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
                        style={{ marginTop: '5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
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
