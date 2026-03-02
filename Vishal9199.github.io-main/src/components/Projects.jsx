import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Info } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'Nama Water Services - ERP Transformation',
            description: 'Engineered cross-functional enterprise modules using Oracle VBCS and Process Cloud Service (PCS). Streamlined utility workflows for house connections and tanker management through cloud-native automation.',
            impact: 'Reduced manual processing time by 40% and improved data accuracy for multiple utility customers.',
            tech: ['Oracle VBCS', 'PCS', 'Oracle Cloud'],
            details: 'Developed custom UI components in VBCS and complex long-running business processes in PCS. Integrated with back-end REST APIs and managed state for complex multi-step application forms.',
            image: '/assets/4i_apps_logo.png',
            link: '#',
            github: '#'
        },
        {
            title: 'Omran OTL - Custom Workforce Integration',
            description: 'Architected a sophisticated Time and Labor (OTL) system integrated via Oracle Integration Cloud (OIC). Automated complex attendance policies and payroll synchronization for the Omran Group.',
            impact: 'Automated payroll synchronization for 2000+ employees, eliminating manual data entry errors.',
            tech: ['VBCS', 'OIC', 'Oracle OTL', 'PL/SQL'],
            details: 'Built robust error-handling mechanisms in OIC integrations. Wrote optimized PL/SQL procedures for complex business logic validation and data transformation before pushing to Oracle HCM.',
            image: '/assets/4i_apps_logo.png',
            link: '#',
            github: '#'
        },
        {
            title: 'CCC - Enterprise Service Automation',
            description: 'Designed and implemented solution architectures for the Consolidated Contractors Company (CCC), leveraging Oracle Cloud for process optimization and enterprise-scale business transformation.',
            impact: 'Digitized 15+ manual business processes, increasing operational transparency across international project sites.',
            tech: ['VBCS', 'PCS', 'Oracle Cloud', 'Solution Architecture', 'PL/SQL'],
            details: 'Consulted on end-to-end architecture for cloud migration. Identified bottlenecked processes and designed scalable cloud-native replacements using the Oracle Cloud infrastructure.',
            image: '/assets/4i_apps_logo.png',
            link: '#',
            github: '#'
        },
        {
            title: 'IOT Surveillance Robot',
            description: 'Cloud-based robot controlled tracked globally with real-time camera feedback and GPS.',
            impact: 'Achieved <200ms latency for real-time control via Azure IoT Hub over 4G networks.',
            tech: ['Azure', 'Arduino', 'C++', 'Python'],
            details: 'Integrated a Raspberry Pi with Arduino for sensor hardware control. Used Python for the cloud communication layer and React for the operator dashboard.',
            image: '/assets/iot.png',
            link: 'https://github.com/Vishal9199/',
            github: 'https://github.com/Vishal9199/'
        },
        {
            title: 'Copy Trade Automator',
            description: 'Automating trading in multiple Zerodha accounts simultaneously using OAuth and Selenium.',
            impact: 'Reduced execution time from minutes to milliseconds, enabling near-instantaneous trade copying across 10+ accounts.',
            tech: ['Python', 'Selenium', 'Asyncio'],
            details: 'Utilized Asyncio for concurrent execution and Selenium for web automation where APIs were restricted. Implemented robust logging and retry mechanisms for financial transaction stability.',
            image: '/assets/zerodha.png',
            link: 'https://github.com/Vishal9199/zerodhabot/',
            github: 'https://github.com/Vishal9199/zerodhabot/'
        },
        {
            title: 'Medical Cost Analysis',
            description: 'A healthcare web-app based on Flask and ML to predict estimated medical costs.',
            tech: ['Flask', 'Python', 'ML', 'Pandas'],
            impact: 'Achieved 92% prediction accuracy on test datasets using Random Forest Regression.',
            details: 'Performed extensive Exploratory Data Analysis (EDA) using Pandas and Matplotlib. Deployed the pre-trained ML model into a Flask web application for user-facing predictions.',
            image: '/assets/medical.png',
            link: 'https://github.com/Vishal9199/SmartBridge-Externship-ADS/tree/main/Project',
            github: 'https://github.com/Vishal9199/SmartBridge-Externship-ADS/tree/main/Project'
        },
        {
            title: 'React - GroupNoteChat',
            description: 'Note taking website for groups with real-time messaging capabilities.',
            tech: ['React', 'MySQL', 'Node.js'],
            impact: 'Supported real-time collaboration for groups of up to 50 users with Socket.io.',
            details: 'Built a full-stack application with a React frontend and Node.js/Express backend. Designed a relational database schema in MySQL for users, groups, and message persistence.',
            image: '/assets/Vishal\'s React Web App.png',
            link: 'https://joyful-cassata-2afa80.netlify.app/',
            github: 'https://github.com/Vishal9199/Vishal-s-React-App.git'
        }
    ];

    return (
        <section id="projects" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div style={{ marginBottom: '3rem' }}>
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}
                    >
                        Selected <span className="text-gradient">Creations.</span>
                    </motion.h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px' }}>
                        A collection of high-impact enterprise solutions and experimental side projects.
                    </p>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                    gap: '2rem',
                }}>
                    {projects.map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedProject(project)}
                                className="glass project-card"
                                style={{ 
                                    position: 'relative',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    cursor: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '350px',
                                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                                    border: '1px solid var(--glass-border)'
                                }}
                            >
                                <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, transition: '0.5s ease' }}
                                        className="project-image"
                                    />
                                    <div style={{ 
                                        position: 'absolute', 
                                        inset: 0, 
                                        background: 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.6) 50%, rgba(5,5,5,0.2) 100%)',
                                        padding: '2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end'
                                    }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                                            {project.tech.map((t) => (
                                                <span key={t} style={{ fontSize: '0.65rem', background: 'rgba(0, 255, 163, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '100px', color: 'var(--primary)', border: '1px solid rgba(0, 255, 163, 0.2)', fontWeight: 600 }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontWeight: 800, color: '#fff' }}>{project.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="glass"
                            style={{ position: 'relative', maxWidth: '600px', width: '100%', padding: '2.5rem', background: 'var(--bg-dark)', maxHeight: '90vh', overflowY: 'auto' }}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--text-muted)' }}
                            >
                                <X size={24} />
                            </button>

                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }} className="text-gradient">{selectedProject.title}</h2>
                            <p style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 500 }}>{selectedProject.description}</p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Technical Breakdown</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>{selectedProject.details}</p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Impact</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{selectedProject.impact}</p>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                {selectedProject.tech.map((t) => (
                                    <span key={t} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px', color: 'var(--secondary)' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="glass" style={{ padding: '0.6rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--glass-border)' }}>
                                    <Github size={20} /> View Source
                                </a>
                                <a href={selectedProject.link} target="_blank" rel="noreferrer" className="glass" style={{ padding: '0.6rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary)', color: '#000', fontWeight: 600 }}>
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
