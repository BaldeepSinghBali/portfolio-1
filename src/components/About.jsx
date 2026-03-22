import { motion } from 'framer-motion';
import InteractiveEmoji from './InteractiveEmoji';

export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 py-32 pointer-events-auto">
      <div className="max-w-5xl w-full relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--accent)] blur-[120px] rounded-full opacity-5 pointer-events-none" />

        <div className="mb-16 text-center md:text-left relative z-10">
          <p className="section-label mb-4" style={{ fontSize: '0.9rem', letterSpacing: '0.25em' }}>Who I Am</p>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-1)', fontSize: '3.2rem', fontWeight: 800, lineHeight: '1.2' }}>
            Engineer by training,<br />
            <span className="hero-serif" style={{ color: 'var(--accent)', fontWeight: 400 }}>problem-solver by nature.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mt-20 relative z-10 px-4 md:px-8">
          {[
            { 
              icon: "⚡", 
              heading: "At the Edges", 
              text: "Where classical algorithms meet modern machine learning, and where a mere camera feed can become a life-saving medical sensor." 
            },
            { 
              icon: "🧠", 
              heading: "Real-World Focus", 
              text: "Developing solutions that span healthcare technology and systems-level optimization — engineered to function flawlessly in the real world." 
            },
            { 
              icon: "🔬", 
              heading: "Research-Minded", 
              text: "Beyond building models, I spend my time digesting research papers, refining system architectures, and hunting for the next complex problem to solve." 
            }
          ].map((item, i) => (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex-1 flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <InteractiveEmoji 
                className="text-3xl mb-6 p-5 rounded-full transition-transform duration-500"
                style={{ 
                  background: 'rgba(26, 28, 35, 0.6)', 
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {item.icon}
              </InteractiveEmoji>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-1)', fontWeight: 800, fontSize: '1.35rem', marginBottom: '0.8rem' }}>
                {item.heading}
              </h3>
              <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: '1.8', opacity: 0.9 }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
