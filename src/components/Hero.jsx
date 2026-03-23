import { motion, useMotionValue, useTransform } from 'framer-motion';
import InteractiveEmoji from './InteractiveEmoji';

export default function Hero() {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  return (
    <section
      id="about"
      style={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pointerEvents: 'auto',
      }}
    >
      <div style={{ position: 'absolute', top: 96, left: 24, width: 40, height: 40, borderTop: '2px solid rgba(226, 54, 54, 0.3)', borderLeft: '2px solid rgba(226, 54, 54, 0.3)', borderRadius: '8px 0 0 0' }} />
      <div style={{ position: 'absolute', bottom: 64, right: 24, width: 40, height: 40, borderBottom: '2px solid rgba(247, 143, 63, 0.3)', borderRight: '2px solid rgba(247, 143, 63, 0.3)', borderRadius: '0 0 8px 0' }} />

      <div
        style={{
          flex: '0 0 50%',
          width: '50%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          drag
          dragMomentum={false}
          initial={{ y: -1200, opacity: 0 }}
          animate={{ 
            y: cardY.get(), 
            opacity: 1,
            rotate: [0, 0.5, -0.5, 0] 
          }}
          transition={{ 
            y: { type: "spring", damping: 20, stiffness: 80, delay: 0.2 },
            opacity: { duration: 0.5, delay: 0.2 },
            rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{ x: cardX, y: cardY, cursor: 'grab', zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          whileDrag={{ scale: 1.03, cursor: 'grabbing' }}
        >
          {/* Top Circular Badge */}
          <div style={{ position: 'relative', width: 68, height: 68 }}>
            <div style={{
              width: 68, height: 68, borderRadius: '50%',
              background: 'linear-gradient(135deg, #f78f3f, #e23636)',
              boxShadow: '0 4px 12px rgba(226, 54, 54, 0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                background: '#ffffff',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
              }} />
            </div>
          </div>

          {/* Connector Line */}
          <div style={{ width: 4, height: 24, background: 'rgba(255, 255, 255, 0.15)', borderRadius: 2 }} />

          {/* Simple Beige Clip */}
          <div style={{
            width: 32, height: 24,
            background: '#d4cec3',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', zIndex: 2
          }} />

          {/* Card Body */}
          <div style={{
            width: 340,
            borderRadius: 32,
            padding: 20,
            background: 'rgba(20, 21, 26, 0.95)',
            backdropFilter: 'blur(32px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.7), 0 0 20px rgba(226, 54, 54, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: -4,
            position: 'relative'
          }}>
            {/* The "Hole" at the top */}
            <div style={{
              width: 16, height: 8, borderRadius: 4,
              background: '#ffffff', opacity: 0.95,
              position: 'absolute', top: 16,
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)'
            }} />

            <div style={{
              width: 300, height: 300,
              borderRadius: 20,
              overflow: 'hidden',
              marginTop: 20,
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}>
              <img
                src="/profile.jpeg"
                alt="Baldeep Singh Bali"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                draggable={false}
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=BSB&background=c9897a&color=fff&size=500'; }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div
        style={{
          flex: '0 0 50%',
          width: '50%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 60,
          paddingRight: 60,
          paddingTop: 80,
          position: 'relative',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="section-label"
          style={{ marginBottom: 16, fontSize: '0.75rem' }}
        >
          Lovely Professional University · B.Tech AI & ML
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9 }}
          style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-1)', lineHeight: 1.05, fontSize: 'clamp(3rem, 5vw, 4.8rem)', fontWeight: 900, margin: 0 }}
        >
          Baldeep
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="hero-serif"
          style={{ color: 'var(--accent)', lineHeight: 1.05, fontSize: 'clamp(3rem, 5vw, 4.8rem)', marginBottom: 28 }}
        >
          Singh Bali
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ color: 'var(--text-2)', fontSize: '1.1rem', lineHeight: 1.85, maxWidth: 500, fontWeight: 400, margin: 0, opacity: 0.9 }}
        >
          I build intelligent systems at the intersection of{' '}
          <span style={{ color: 'var(--marvel-gold)', fontWeight: 600 }}>machine learning</span>,{' '}
          signal processing, and real-world data.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: 1.85, maxWidth: 480, marginTop: 16, opacity: 0.8 }}
        >
          Whether it's detecting heart rate from a camera or scheduling disk I/O
          with AI — I'm drawn to problems where algorithm meets real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}
        >
          {[
            { icon: '⚡', text: 'ML Engineer', alt: false },
            { icon: '🥤', text: 'Powered by caffeine', alt: true },
          ].map((t) => (
            <motion.span
              key={t.text}
              whileHover={{ y: -4, scale: 1.04 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 16px', borderRadius: 16, fontSize: '0.875rem',
                cursor: 'default',
                background: t.alt ? 'rgba(122,170,148,0.15)' : 'rgba(201,137,122,0.15)',
                border: `1px solid ${t.alt ? 'rgba(122,170,148,0.25)' : 'rgba(201,137,122,0.25)'}`,
                color: '#ede7df',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              <InteractiveEmoji>{t.icon}</InteractiveEmoji>
              <span>{t.text}</span>
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
          style={{ display: 'flex', gap: 16, marginTop: 40 }}
        >
          <a href="#projects" style={{
            padding: '12px 28px', borderRadius: 18, fontWeight: 700, fontSize: '0.95rem',
            color: 'white', background: 'linear-gradient(135deg, #e23636, #a2191f)',
            boxShadow: '0 8px 20px rgba(226, 54, 54, 0.4)',
            fontFamily: 'Space Grotesk, sans-serif', textDecoration: 'none',
            transition: 'transform 0.2s',
          }}>
            View Projects →
          </a>
          <a href="#contact" style={{
            padding: '12px 28px', borderRadius: 18, fontWeight: 600, fontSize: '0.95rem',
            color: 'var(--text-1)', border: '1px solid rgba(255, 255, 255, 0.2)',
            background: 'rgba(255, 255, 255, 0.05)',
            fontFamily: 'Space Grotesk, sans-serif', textDecoration: 'none',
          }}>
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
