import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Oracle Cloud Stack',
            skills: [
                { name: 'Visual Builder (VBCS)', level: 'Expert' },
                { name: 'Integration Cloud (OIC)', level: 'Expert' },
                { name: 'Process Cloud (PCS)', level: 'Advanced' },
                { name: 'Oracle Cloud OCI', level: 'Advanced' }
            ]
        },
        {
            title: 'Databases & Backend',
            skills: [
                { name: 'PL/SQL', level: 'Expert' },
                { name: 'Oracle SQL', level: 'Expert' },
                { name: 'Java Springboot', level: 'Intermediate' },
                { name: 'Node.js', level: 'Intermediate' },
                { name: 'Python', level: 'Intermediate' }
            ]
        },
        {
            title: 'Modern Web',
            skills: [
                { name: 'React', level: 'Advanced' },
                { name: 'Javascript (ES6+)', level: 'Advanced' },
                { name: 'HTML5/CSS3', level: 'Expert' },
                { name: 'Framer Motion', level: 'Intermediate' }
            ]
        },
        {
            title: 'Tools & Cloud',
            skills: [
                { name: 'Git/GitHub', level: 'Expert' },
                { name: 'AWS/Azure', level: 'Intermediate' },
                { name: 'Docker', level: 'Intermediate' },
                { name: 'Linux', level: 'Advanced' }
            ]
        }
    ];

    return (
        <section id="skills">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
                    Technical <span className="text-gradient">Proficiency</span>
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
                    A comprehensive overview of my technical stack and expertise levels across different domains.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{ padding: '2rem' }}
                        >
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                                {category.title}
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {category.skills.map((skill) => (
                                    <div key={skill.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{skill.name}</span>
                                        <span style={{
                                            fontSize: '0.7rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            color: skill.level === 'Expert' ? 'var(--primary)' : 'var(--secondary)',
                                            fontWeight: 600,
                                            background: 'rgba(255,255,255,0.03)',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '4px'
                                        }}>
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
