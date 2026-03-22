import { motion } from 'framer-motion';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="fixed top-0 left-0 right-0 z-[1000] px-8 py-5 flex items-center justify-between pointer-events-auto"
      style={{ background: 'rgba(10, 11, 16, 0.85)', backdropFilter: 'blur(160px)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg" style={{ background: 'linear-gradient(135deg, #e23636, #a2191f)' }}>B</div>
        <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.25rem', color: 'var(--text-1)', letterSpacing: '0.02em' }}>Baldeep</span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 500 }}>{link}</a>
        ))}
      </div>

      <a
        href="/cv.pdf"
        target="_blank"
        rel="noreferrer"
        className="px-6 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105"
        style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', letterSpacing: '0.08em', color: 'var(--marvel-gold)', border: '1px solid rgba(247, 143, 63, 0.4)', background: 'rgba(247, 143, 63, 0.1)' }}
      >
        Resume ↗
      </a>
    </motion.nav>
  );
}
