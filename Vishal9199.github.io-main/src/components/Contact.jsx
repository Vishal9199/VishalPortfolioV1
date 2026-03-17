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

    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("vishalkrmahatha@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" style={{ padding: '8rem 0' }}>
            <div className="container">
                <style>{`
                    .copy-toast {
                        position: fixed;
                        bottom: 2rem;
                        left: 50%;
                        transform: translateX(-50%);
                        background: var(--primary);
                        color: #000;
                        padding: 0.75rem 1.5rem;
                        border-radius: 100px;
                        font-weight: 700;
                        z-index: 3000;
                        box-shadow: 0 10px 30px rgba(0, 255, 163, 0.3);
                    }
                `}</style>
                
                <AnimatePresence>
                    {copied && (
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="copy-toast"
                        >
                            Email Copied to Clipboard!
                        </motion.div>
                    )}
                </AnimatePresence>

                <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', fontWeight: 800 }}>
                    Get In <span className="text-gradient">Touch.</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 700 }}>Let's discuss something <span style={{ color: 'var(--primary)' }}>great.</span></h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div 
                                onClick={copyEmail}
                                style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', cursor: 'pointer', transition: 'var(--transition)' }}
                                className="contact-item"
                            >
                                <div className="glass" style={{ padding: '0.9rem', color: 'var(--primary)', borderRadius: '12px' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Me</p>
                                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>vishalkrmahatha@gmail.com</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                <div className="glass" style={{ padding: '0.9rem', color: 'var(--primary)', borderRadius: '12px' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</p>
                                    <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>Bokaro / Chennai, India</p>
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
