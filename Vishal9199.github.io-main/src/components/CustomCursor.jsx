import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.style.cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="custom-cursor"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isHovering ? 2.5 : 1,
                opacity: 1
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '2px solid var(--primary)',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'difference'
            }}
        >
            <motion.div
                animate={{ scale: isHovering ? 0 : 1 }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '4px',
                    height: '4px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '50%'
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;
