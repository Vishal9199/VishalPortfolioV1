import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ finishLoading }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(finishLoading, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [finishLoading]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 10000,
                background: '#050505',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)'
            }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: '2rem', textAlign: 'center' }}
            >
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '4px', margin: 0 }}>VKM</h1>
                <p style={{ fontSize: '0.8rem', letterSpacing: '2px', opacity: 0.6, marginTop: '0.5rem' }}>INITIALIZING EXPERIENCE</p>
            </motion.div>

            <div style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        background: 'var(--primary)',
                        width: `${progress}%`
                    }}
                />
            </div>

            <motion.span
                style={{ marginTop: '1rem', fontSize: '0.9rem', fontVariantNumeric: 'tabular-nums', fontWeight: 500 }}
            >
                {progress}%
            </motion.span>
        </motion.div>
    );
};

export default Loader;
