import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>
                    Academic <span className="text-gradient">Background</span>
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass"
                    style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}
                >
                    <div style={{ background: 'var(--primary)', color: '#000', padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <GraduationCap size={48} />
                    </div>

                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Vellore Institute of Technology</h3>
                        <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1.5rem' }}>B.Tech in Computer Science Engineering</p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            <div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Specialization</p>
                                <p style={{ fontWeight: 500 }}>Computer Science, AI & Robotics</p>
                            </div>
                            <div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>CGPA</p>
                                <p style={{ fontWeight: 500 }}>8.01 / 10.0</p>
                            </div>
                            <div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Location</p>
                                <p style={{ fontWeight: 500 }}>Chennai, India</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.75rem' }}>Relevant Coursework</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['DSA', 'Machine Learning', 'Robotics', 'Distributed Systems', 'IoT Cloud', 'Python', 'C++', 'Java'].map(course => (
                                    <span key={course} style={{ fontSize: '0.8rem', border: '1px solid var(--glass-border)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
