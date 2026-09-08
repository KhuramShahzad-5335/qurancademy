'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for the cursor trail/ring
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Track interactive elements to scale up the cursor
    const handleElementOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovered(true);
      }
    };

    const handleElementOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleElementOver);
    window.addEventListener('mouseout', handleElementOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleElementOver);
      window.removeEventListener('mouseout', handleElementOut);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-emerald-600 rounded-full pointer-events-none z-50 mix-blend-difference index-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Modern Outer Ring */}
      <motion.div
        className=" index-50 fixed top-0 left-0 rounded-full pointer-events-none z-50 border border-emerald-500/50 bg-emerald-500/10 backdrop-blur-[0px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 64 : 40,
          height: isHovered ? 64 : 40,
          backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.05)',
          borderColor: isHovered ? 'rgba(16, 185, 129, 0.8)' : 'rgba(16, 185, 129, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />
    </>
  );
}