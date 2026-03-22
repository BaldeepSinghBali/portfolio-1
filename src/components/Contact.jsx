import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
  { icon: <Github size={24} />,   label: "GITHUB",    sub: "github.com/BaldeepSinghBali",                    href: "https://github.com/BaldeepSinghBali" },
  { icon: <Linkedin size={24} />, label: "LINKEDIN",  sub: "linkedin.com/in/baldeep-singh-bali",             href: "https://www.linkedin.com/in/baldeep-singh-bali-610209295/" },
  { icon: <Mail size={24} />,     label: "EMAIL",     sub: "baldeeps191@gmail.com",               href: "mailto:baldeeps191@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center px-6 py-32 pointer-events-auto relative overflow-hidden bg-transparent">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--accent)] blur-[180px] opacity-10 rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 style={{ color: 'var(--text-1)', fontSize: 'clamp(3.2rem, 7vw, 4.8rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: '2rem' }}>
              Let's build<br />
              <span style={{ display: 'block' }}>something</span>
              <span className="hero-serif" style={{ color: 'var(--marvel-gold)', fontWeight: 400, opacity: 0.9 }}>worth building</span>
            </h2>
            
            <p style={{ color: 'var(--text-2)', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '540px', marginBottom: '3rem' }}>
              I'm open to full-time roles, research collaborations, and interesting freelance projects. If you're working on something that challenges the status quo, I'd love to hear about it.
            </p>
            
            <motion.a
              id="github-profile-link"
              href="https://github.com/BaldeepSinghBali"
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 8 }}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.8rem', 
                color: 'var(--text-1)', 
                fontSize: '1.1rem', 
                fontWeight: 600, 
                textDecoration: 'none',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              View GitHub Profile <span style={{ color: 'var(--accent)', fontSize: '1.4rem' }}>→</span>
            </motion.a>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 justify-center">
          {links.map((link, i) => (
            <motion.a
              id={`contact-card-${link.label.toLowerCase()}`}
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ x: 6, backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="group relative flex items-center p-8 rounded-[32px] border border-white/10 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)' }}
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white transition-all duration-500 mr-8">
                {link.icon}
              </div>
              
              <div className="flex flex-col">
                <span className="section-label" style={{ fontSize: '0.7rem', color: 'var(--text-3)', marginBottom: '0.4rem', letterSpacing: '0.15em' }}>
                  {link.label}
                </span>
                <span style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-1)', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {link.sub}
                </span>
              </div>
              
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span style={{ fontSize: '1.6rem', color: 'var(--accent)' }}>↗</span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-25 pointer-events-none">
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          © 2026 Baldeep Singh Bali
        </p>
      </div>
    </section>
  );
}
