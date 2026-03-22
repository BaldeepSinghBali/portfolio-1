import { motion } from 'framer-motion';
import InteractiveEmoji from './InteractiveEmoji';

export default function Award() {
  return (
    <section className="w-full py-72 px-6 flex justify-center items-center pointer-events-auto relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full flex flex-col items-center text-center relative z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--accent)] blur-[150px] opacity-10 rounded-[100%] pointer-events-none" />
        
        <InteractiveEmoji className="text-6xl mb-8">🏆</InteractiveEmoji>
        <p className="section-label mb-6" style={{ letterSpacing: '0.3em', fontSize: '0.9rem' }}>Award & Recognition</p>

        <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-1)', fontSize: '3.2rem', fontWeight: 800, lineHeight: '1.2' }}>
          Harmony of Syntax — <span style={{ color: 'var(--marvel-gold)' }}>1st Place</span>
        </h2>

        <motion.p
          whileHover={{ textShadow: "0 0 16px rgba(176,114,82,0.8)" }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'default', color: 'var(--text-2)', fontSize: '1.1rem', lineHeight: '2.0', maxWidth: '720px', marginTop: '2rem', fontWeight: 400, opacity: 0.9 }}
        >
          Ranked 1st out of 70+ students in a highly competitive syntax analysis event at Lovely Professional University. A testament to sharp analytical skills, meticulous attention to detail, and a rigorous approach to structure — traits that naturally extend directly into my code.
        </motion.p>
      </motion.div>
    </section>
  );
}
