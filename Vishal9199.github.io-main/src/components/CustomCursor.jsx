import React, { useState, useEffect, useMemo } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorDot = ({ mousePosition }) => {
    const springConfig = useMemo(() => ({ damping: 20, stiffness: 250, mass: 0.5 }), []);
    
    const s1x = useSpring(0, springConfig);
    const s2x = useSpring(0, springConfig);
    const s3x = useSpring(0, springConfig);
    const s4x = useSpring(0, springConfig);
    const s5x = useSpring(0, springConfig);

    const s1y = useSpring(0, springConfig);
    const s2y = useSpring(0, springConfig);
    const s3y = useSpring(0, springConfig);
    const s4y = useSpring(0, springConfig);
    const s5y = useSpring(0, springConfig);

    const trailSpringsX = useMemo(() => [s1x, s2x, s3x, s4x, s5x], [s1x, s2x, s3x, s4x, s5x]);
    const trailSpringsY = useMemo(() => [s1y, s2y, s3y, s4y, s5y], [s1y, s2y, s3y, s4y, s5y]);

    useEffect(() => {
        trailSpringsX.forEach((spring, i) => {
            setTimeout(() => spring.set(mousePosition.x), i * 20);
        });
        trailSpringsY.forEach((spring, i) => {
            setTimeout(() => spring.set(mousePosition.y), i * 20);
        });
    }, [mousePosition, trailSpringsX, trailSpringsY]);

    return (
        <>
            {trailSpringsX.map((springX, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: `${20 - i * 3}px`,
                        height: `${20 - i * 3}px`,
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary)',
                        opacity: (1 - i * 0.2) * 0.3,
                        pointerEvents: 'none',
                        zIndex: 9998 - i,
                        x: springX,
                        y: trailSpringsY[i],
                        translateX: '-50%',
                        translateY: '-50%',
                        filter: `blur(${i * 1}px)`,
                    }}
                />
            ))}
        </>
    );
};

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [cursorType, setCursorType] = useState('default');

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const interactive = target.closest('a, button, [role="button"]');
            
            if (interactive) {
                setIsHovering(true);
                if (interactive.classList.contains('project-card')) setCursorType('view');
                else setCursorType('pointer');
            } else {
                setIsHovering(false);
                setCursorType('default');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const springConfig = { damping: 28, stiffness: 500, mass: 0.5 };
    const cursorX = useSpring(mousePosition.x, springConfig);
    const cursorY = useSpring(mousePosition.y, springConfig);

    useEffect(() => {
        cursorX.set(mousePosition.x);
        cursorY.set(mousePosition.y);
    }, [mousePosition, cursorX, cursorY]);

    return (
        <div className="custom-cursor-container">
            <CursorDot mousePosition={mousePosition} />
            
            <motion.div
                className="custom-cursor"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: isHovering ? '60px' : '30px',
                    height: isHovering ? '60px' : '30px',
                    borderRadius: '50%',
                    border: '1.5px solid var(--primary)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference',
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(0, 255, 163, 0.1)' : 'transparent',
                }}
            >
               {cursorType === 'view' && (
                   <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '10px',
                            fontWeight: 'bold',
                            color: 'var(--primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                   >
                       View
                   </motion.span>
               )}
            </motion.div>

            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </div>
    );
};

export default CustomCursor;
