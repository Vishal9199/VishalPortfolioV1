import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        // { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`glass nav-container ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#intro" className="text-gradient logo-text">
                    Vishal Kumar Mahatha
                </a>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-item">
                            {link.name}
                        </a>
                    ))}

                    <button onClick={toggleTheme} className="glass" style={{ padding: '0.5rem', borderRadius: '50%', color: 'var(--primary)' }}>
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <a href="/legacy/assets/resume/Vishal_Resume_07_May.pdf" target="_blank" rel="noreferrer" className="glass resume-btn">
                        <FileText size={18} />
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button onClick={toggleTheme} className="mobile-only glass" style={{ padding: '0.4rem', borderRadius: '50%', color: 'var(--primary)' }}>
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button className="mobile-only toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu glass">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-item" onClick={() => setIsOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <a href="/legacy/assets/resume/Vishal_Resume_07_May.pdf" target="_blank" rel="noreferrer" className="resume-btn" onClick={() => setIsOpen(false)}>
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
