import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const experiences = [
        {
            company: '4i Apps Cloud Solutions',
            role: 'Oracle Cloud Application Developer',
            period: 'June 2024 - Present',
            isCurrent: true,
            description: [
                'End-to-end development for Nama Water Services (NWS) using Oracle VBCS and Process Cloud Service (PCS) for automated house connections and tanker systems.',
                'Architected and implemented Custom Time and Attendance (OTL) integrations for Omran Group using Oracle Integration Cloud (OIC).',
                'Leveraged Oracle SQL Developer and PL/SQL for complex data modeling and backend process optimization.',
                'Tools: Oracle Integration Cloud (OIC), PCS, VBCS, SQL Developer, Java Springboot, PL/SQL'
            ],
            logo: '/assets/4i_apps_logo.png'
        },
        {
            company: 'SmartInternz',
            role: 'Applied Data Science Intern',
            period: 'May 2023 - July 2023',
            description: [
                'Worked on Predictive Medical Cost Analysis project.',
                'Developed predictive models using ML algorithms.',
                'Improved response time by 20% by refactoring code and optimizing queries.',
                'Tools: Python, Flask, Matplotlib, Pickle'
            ],
            logo: '/assets/SmartInternz_Logo.png'
        },
        {
            company: 'HumanoidX VITCC Club',
            role: 'Programmer, Path-Planning',
            period: 'Oct 2020 - July 2022',
            description: [
                'Contributed to programming, designing, and path-planning of a humanoid robot.',
                'Devised customized recursion algorithm for multi-robot systems.',
                'Tools: Python, C++, OpenCV, Tensorflow, Matplotlib'
            ],
            logo: '/assets/HumanoidXVITCC_Logo.svg'
        }
    ];

    return (
        <section id="experience" ref={containerRef}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2.5rem' }}>
                    Professional <span className="text-gradient">Journey</span>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
                    {/* Vertical Line Container */}
                    <div style={{ position: 'absolute', left: '2rem', top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}>
                        {/* Dynamic Filling Line */}
                        <motion.div
                            style={{
                                scaleY,
                                width: '100%',
                                height: '100%',
                                background: 'var(--primary)',
                                originY: 0
                            }}
                        />
                    </div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            style={{ display: 'flex', gap: '3rem', zIndex: 1 }}
                        >
                            {/* Company Logo with Point */}
                            <div style={{ position: 'relative' }}>
                                <div className="glass" style={{ width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)', flexShrink: 0, border: '2px solid var(--glass-border)' }}>
                                    <img src={exp.logo} alt={exp.company} style={{ width: '70%', height: '70%', objectFit: 'contain' }} />
                                </div>

                                {exp.isCurrent && (
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        style={{
                                            position: 'absolute',
                                            inset: -4,
                                            background: 'var(--primary)',
                                            borderRadius: '12px',
                                            zIndex: -1
                                        }}
                                    />
                                )}
                            </div>

                            <div className="glass" style={{ padding: '2rem', flex: 1, position: 'relative', overflow: 'hidden' }}>
                                {/* Subtle background gradient for current role */}
                                {exp.isCurrent && (
                                    <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle at top right, rgba(0, 255, 163, 0.05), transparent)', zIndex: 0 }} />
                                )}

                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>{exp.role}</h3>
                                            <p style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 600 }}>{exp.company}</p>
                                        </div>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--primary)', background: 'rgba(0, 255, 163, 0.05)', padding: '0.4rem 1rem', borderRadius: '30px', fontWeight: 700, border: '1px solid rgba(0, 255, 163, 0.1)' }}>
                                            {exp.period}
                                        </span>
                                    </div>
                                    <ul style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                                        {exp.description.map((item, i) => (
                                            <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', gap: '1rem' }}>
                                                <span style={{ color: 'var(--primary)', marginTop: '0.25rem' }}>▹</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
