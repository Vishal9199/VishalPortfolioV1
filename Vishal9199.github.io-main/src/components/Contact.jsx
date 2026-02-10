import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset to idle after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);

        // NOTE: For a real production app, you would use a service like Formspree, Web3Forms, or EmailJS here.
        /*
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "YOUR_ACCESS_KEY_HERE",
                ...formData
            }),
        });
        */
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>
                    Get In <span className="text-gradient">Touch</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Let's discuss something <span style={{ color: 'var(--primary)' }}>great</span></h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass" style={{ padding: '0.75rem', color: 'var(--primary)' }}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Me</p>
                                    <a href="mailto:vishalkrmahatha@gmail.com" style={{ fontWeight: 500 }}>vishalkrmahatha@gmail.com</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass" style={{ padding: '0.75rem', color: 'var(--primary)' }}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</p>
                                    <p style={{ fontWeight: 500 }}>Bokaro / Chennai, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass"
                        style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', overflow: 'hidden' }}
                        onSubmit={handleSubmit}
                    >
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    style={{
                                        position: 'absolute', inset: 0, background: 'var(--bg-dark)', zIndex: 10,
                                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem'
                                    }}
                                >
                                    <CheckCircle2 size={60} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                                    <h3 style={{ marginBottom: '0.5rem' }}>Message Sent!</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. I'll get back to you soon.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="glass"
                                        style={{ marginTop: '2rem', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '0.75rem 1rem', color: '#fff', outline: 'none' }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '0.75rem 1rem', color: '#fff', outline: 'none' }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your message here..."
                                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '0.75rem 1rem', color: '#fff', outline: 'none', resize: 'none' }}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="glass"
                            style={{
                                padding: '1rem', background: 'var(--primary)', color: '#000', fontWeight: 700, borderRadius: '8px',
                                marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                opacity: status === 'sending' ? 0.7 : 1,
                                cursor: status === 'sending' ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {status === 'sending' ? (
                                <><Loader2 size={18} className="animate-spin" /> Sending...</>
                            ) : (
                                <><Send size={18} /> Send Message</>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
