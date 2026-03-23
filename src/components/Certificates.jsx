import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const certificates = [
  {
    id: 1,
    number: "01",
    title: "Harmony of Syntax",
    subtitle: "Grammar Competition",
    description: "Certificate of Merit for standing First in the musical competitive event on grammar organized by Centre for Professional Enhancement.",
    tags: ["Grammar", "Competition", "First Prize"],
    link: "https://github.com/BaldeepSinghBali/Certificates/blob/main/12320343_Harmony%20of%20Syntax%20A%20musical%20competitive%20event%20on%20grammar.pdf",
    image: "/harmony.png", 
    accent: "#e23636",
    bg: "rgba(226, 54, 54, 0.08)",
    border: "rgba(255, 255, 255, 0.1)",
    tagColor: "#e23636",
    tagBg: "rgba(226, 54, 54, 0.1)",
  },
  {
    id: 2,
    number: "02",
    title: "DSA using C++",
    subtitle: "Skill Development Course",
    description: "Certificate of Merit for completing the skill development course named Fundamentals of Data Structures using C++ with 'O' Grade.",
    tags: ["C++", "DSA", "Problem Solving", "Grade O"],
    link: "https://github.com/BaldeepSinghBali/Certificates/blob/main/DSA%20using%20C%2B%2B.pdf",
    image: "/dsa.png",
    accent: "#f78f3f",
    bg: "rgba(247, 143, 63, 0.08)",
    border: "rgba(255, 255, 255, 0.1)",
    tagColor: "#f78f3f",
    tagBg: "rgba(247, 143, 63, 0.1)",
  },
  {
    id: 3,
    number: "03",
    title: "Computational Theory",
    subtitle: "Infosys Springboard",
    description: "Course Completion Certificate for successfully completing the course Computational Theory: Language Principle & Finite Automata Theory.",
    tags: ["Automata Theory", "Infosys", "Core CS"],
    link: "https://github.com/BaldeepSinghBali/Certificates/blob/main/computational%20theory.pdf",
    image: "/computational.png",
    accent: "#4fd1c5",
    bg: "rgba(79, 209, 197, 0.08)",
    border: "rgba(255, 255, 255, 0.1)",
    tagColor: "#4fd1c5",
    tagBg: "rgba(79, 209, 197, 0.1)",
  },
];

function DraggableCard({ cert }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);
  const rotateZ = useTransform(x, [-600, 600], [-360, 360]);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      drag
      dragConstraints={{ left: -600, right: 600, top: -400, bottom: 400 }}
      dragElastic={0.4}
      dragMomentum={false}
      style={{ x, y, rotateX, rotateY, rotateZ, transformPerspective: 1200, zIndex: isHovered ? 200 : 100 }}
      whileDrag={{ scale: 1.05, zIndex: 300, cursor: 'grabbing' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: 'spring', stiffness: 200, damping: 25, bounce: 0.5 }}
      className="cursor-grab active:cursor-grabbing group"
    >
      <motion.div
        animate={{ y: isHovered ? -12 : 0 }}
        className="w-[320px] md:w-[400px] rounded-[32px] overflow-hidden flex flex-col items-center justify-start text-center relative"
        style={{
          background: 'rgba(26, 28, 35, 0.8)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          border: `2px solid rgba(255, 255, 255, 0.1)`,
          boxShadow: isHovered
            ? `0 40px 80px rgba(0, 0, 0, 0.6), 0 16px 40px ${cert.accent}30`
            : `0 24px 56px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.23)`,
          padding: '32px 28px 32px',
        }}
      >
        <div
          className="absolute -top-[100px] -right-[100px] w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none opacity-40 transition-opacity duration-500"
          style={{ background: cert.accent }}
        />

        {cert.image && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.9, marginTop: 0 }}
            animate={{ height: isHovered ? 200 : 0, opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.9, marginTop: isHovered ? 12 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full overflow-hidden rounded-[20px] shadow-lg relative z-20"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover"
              draggable={false}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </motion.div>
        )}

        <div className="flex flex-col gap-5 relative z-20 w-full mt-4">
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: cert.accent, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600 }}>Certificate {cert.number} • {cert.subtitle}</p>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, color: '#ffffff', fontSize: '1.6rem', marginTop: '0.6rem', lineHeight: '1.2' }}>{cert.title}</h3>
          </div>

          <p style={{ color: '#bdbdbd', fontSize: '1rem', lineHeight: '1.7', fontWeight: 400, marginTop: '0.4rem' }}>{cert.description}</p>

          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {cert.tags.map(tag => (
              <span key={tag} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', padding: '0.4rem 1rem', borderRadius: '100px', color: '#ffffff', border: `1px solid rgba(255,255,255,0.15)`, background: 'rgba(255,255,255,0.05)', letterSpacing: '0.05em', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                {tag}
              </span>
            ))}
          </div>

          <a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 w-full py-4 mt-5 rounded-[24px] font-bold text-[0.95rem] transition-all hover:scale-[1.03] pointer-events-auto border-2 border-transparent hover:border-white/50 relative overflow-hidden group/btn"
          >
            <div className="absolute inset-0 z-0 transition-transform group-hover/btn:scale-105" style={{ background: `linear-gradient(135deg, ${cert.accent}, ${cert.tagColor})` }} />

            <span className="relative z-10 text-white flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              View Certificate ↗
            </span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-32 pointer-events-auto">
      <div className="mb-16 text-center">
        <p className="section-label mb-4" style={{ fontSize: '0.9rem', letterSpacing: '0.25em' }}>Achievements</p>
        <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-1)', fontSize: '3.2rem', fontWeight: 800 }}>
          <span className="hero-serif" style={{ color: 'var(--accent)', fontWeight: 400 }}>Certificates</span>
        </h2>
        <p style={{ color: 'var(--text-3)', marginTop: '1rem', fontSize: '1.1rem', opacity: 0.8 }}>Drag horizontally to barrel roll, hover to reveal details</p>
      </div>

      <div className="flex flex-wrap gap-12 justify-center items-start">
        {certificates.map(cert => (
          <DraggableCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
}
