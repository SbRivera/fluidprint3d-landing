import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      const hoveredElement = document.querySelector(':hover');
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        if (computedStyle.cursor === 'pointer') {
          setIsHovering(true);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Wait for DOM to load
    setTimeout(addHoverListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  // Don't show on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <motion.div
        className={`custom-cursor ${isHovering ? 'custom-cursor--hover' : ''}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className={`custom-cursor-dot ${isHovering ? 'custom-cursor-dot--hover' : ''}`}
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
