import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function InteractiveEmoji({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef(null);

  const springConfig = { damping: 20, stiffness: 300 };
  const translateX = useSpring(0, springConfig);
  const translateY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      const radius = 100;
      
      if (distance < radius) {
        const power = (radius - distance) / radius;
        const force = power * 40; 
        
        translateX.set(-distanceX / distance * force);
        translateY.set(-distanceY / distance * force);
      } else {
        translateX.set(0);
        translateY.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [translateX, translateY]);

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x: translateX, y: translateY }}
    >
      {children}
    </motion.span>
  );
}
