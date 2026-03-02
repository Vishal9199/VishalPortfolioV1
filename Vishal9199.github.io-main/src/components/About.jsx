import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                            Bridging business needs with <span className="text-gradient">Oracle Cloud Integration</span>
                        </h2>
                        <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <p>
                                I am an Oracle Cloud Application Developer with a deep focus on building end-to-end enterprise solutions.
                                My expertise spans across **Oracle Integration Cloud (OIC)**, **Process Cloud Service (PCS)**, and **Visual Builder (VBCS)**.
                            </p>
                            <p>
                                I specialize in automating complex business processes and integrating diverse systems using Oracle's robust cloud stack.
                                With a strong foundation in **Oracle SQL Developer** and backend technologies like Java and Springboot, I deliver
                                high-performance, scalable applications for global enterprises.
                            </p>
                            <p>
                                Passionate about optimizing workflows and enhancing user experiences through digital transformation and cloud-native engineering.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass"
                        style={{ padding: '2rem', position: 'relative' }}
                    >
                        <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', padding: '1rem', background: 'var(--primary)', color: '#000', borderRadius: '8px', fontWeight: 700 }}>
                            VIT Graduate
                        </div>
                        <img
                            src="/assets/Image_Vishal.jpeg"
                            alt="Vishal Kumar Mahatha"
                            style={{ width: '100%', borderRadius: '12px', filter: 'grayscale(100%) hover:grayscale(0%)', transition: 'var(--transition)' }}
                            onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                            onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
