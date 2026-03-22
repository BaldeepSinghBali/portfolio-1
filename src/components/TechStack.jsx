import { useRef } from 'react';
import { motion } from 'framer-motion';
import InteractiveEmoji from './InteractiveEmoji';

const skills = [
  { name: "Python", emoji: "🐍", color: "#3776AB" },
  { name: "C++", emoji: "🔥", color: "#00599C" },
  { name: "Java", emoji: "☕", color: "#ED8B00" },
  { name: "PyTorch", emoji: "⚙️", color: "#EE4C2C" },
  { name: "OpenCV", emoji: "👁️", color: "#5C3EE8" },
  { name: "Git", emoji: "🌱", color: "#F05032" },
];

export default function TechStack() {
  return (
    <section id="skills" className="w-full pt-[200px] pb-48 px-6 flex flex-col justify-center items-center pointer-events-auto relative overflow-hidden bg-transparent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-[var(--accent)] blur-[160px] rounded-full opacity-5 pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="section-label mb-4" style={{ fontSize: '0.9rem', letterSpacing: '0.25em' }}>Technical Fluency</p>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-1)', fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', fontWeight: 800, lineHeight: '1.1' }}>
            The Tools <span className="hero-serif" style={{ color: 'var(--accent)', fontWeight: 400 }}>I Wield</span>
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.1rem', marginTop: '1.2rem', maxWidth: '650px', margin: '1.2rem auto 0', lineHeight: '1.7', opacity: 0.9 }}>
            A precision-engineered stack for high-performance AI and ML development.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          {skills.map((skill, i) => (
            <motion.button
              id={`skill-button-${skill.name.toLowerCase()}`}
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: `0 0 25px ${skill.color}33`,
                borderColor: skill.color 
              }}
              whileTap={{ scale: 0.95, y: 2 }}
              className="w-full h-48 md:h-56 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] flex flex-col items-center justify-center gap-4 transition-all duration-300 group cursor-pointer"
              style={{ outline: 'none' }}
            >
              <InteractiveEmoji className="text-5xl" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>
                {skill.emoji}
              </InteractiveEmoji>
              <span 
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif', 
                  fontSize: '1.3rem', 
                  fontWeight: 700, 
                  color: 'var(--text-1)',
                  letterSpacing: '0.04em'
                }}
              >
                {skill.name}
              </span>
              
              <div 
                className="w-10 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                style={{ backgroundColor: skill.color }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
