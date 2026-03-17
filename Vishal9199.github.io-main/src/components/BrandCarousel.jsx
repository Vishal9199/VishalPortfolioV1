import React from 'react';
import { motion } from 'framer-motion';

const BrandCarousel = () => {
    const brands = [
        "Oracle", "4i Apps Solutions", "Nama Water Services", "Omran Group", "CCC - Upsource", "Integration Cloud", "VBCS", "PLSQL", "Azure", "Artificial Intelligence", "Software Development"
    ];

    // Double the array for seamless loop
    const doubledBrands = [...brands, ...brands];

    return (
        <div style={{ 
            width: '100%', 
            overflow: 'hidden', 
            padding: '1rem 0',
            background: 'rgba(255, 255, 255, 0.01)',
            borderTop: '1px solid var(--glass-border)',
            borderBottom: '1px solid var(--glass-border)',
            position: 'relative'
        }}>
            <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(90deg, var(--bg-dark) 0%, transparent 15%, transparent 85%, var(--bg-dark) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
            }} />
            
            <motion.div 
                animate={{ x: [0, -1035] }}
                transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
                style={{ 
                    display: 'flex', 
                    whiteSpace: 'nowrap',
                    gap: '2rem',
                    alignItems: 'center'
                }}
            >
                {doubledBrands.map((brand, index) => (
                    <div key={index} style={{ 
                        fontSize: '1rem', 
                        fontWeight: 700, 
                        color: 'var(--text-primary)',
                        opacity: 0.4,
                        fontFamily: '"Outfit", sans-serif',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }}>
                        {brand}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default BrandCarousel;
