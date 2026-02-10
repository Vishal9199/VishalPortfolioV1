import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Client / Manager Name',
            role: 'Lead Project Manager, 4i Apps',
            text: 'Vishal is an exceptional developer who consistently delivers high-quality solutions. His expertise in Oracle VBCS and OIC was instrumental in the success of our ERP transformation projects.',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
        },
        {
            name: 'Team Colleague',
            role: 'Senior Technical Architect',
            text: 'Working with Vishal was a great experience. He has a deep understanding of cloud-native automation and a knack for solving complex architectural challenges with elegant code.',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka'
        }
    ];

    return (
        <section id="testimonials" style={{ background: 'rgba(255,255,255,0.01)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>
                    Social <span className="text-gradient">Proof</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{ padding: '2.5rem', position: 'relative' }}
                        >
                            <Quote size={40} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.1, color: 'var(--primary)' }} />

                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
                                "{t.text}"
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <img src={t.image} alt={t.name} style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--glass-border)' }} />
                                <div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{t.name}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
