'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Main Dot (Faster)
    const dotX = useSpring(mouseX, { damping: 20, stiffness: 350 });
    const dotY = useSpring(mouseY, { damping: 20, stiffness: 350 });

    // Trailing Ring (Slower/Smoother)
    const ringX = useSpring(mouseX, { damping: 30, stiffness: 150 });
    const ringY = useSpring(mouseY, { damping: 30, stiffness: 150 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsPressed(true);
        const handleMouseUp = () => setIsPressed(false);

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference">
            {/* Trailing Ring */}
            <motion.div
                className="absolute w-12 h-12 border border-white rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: ringX,
                    y: ringY,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isPressed ? 0.5 : 1,
                    borderWidth: isHovering ? '1px' : '2px',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />

            {/* Main Dot */}
            <motion.div
                className="absolute w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: dotX,
                    y: dotY,
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
            />
        </div>
    );
}
