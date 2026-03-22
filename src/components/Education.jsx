import { motion } from 'framer-motion';
import InteractiveEmoji from './InteractiveEmoji';

const timeline = [
  {
    title: "🎓 B.Tech CSE (AI & ML)",
    subtitle: "Lovely Professional University",
    date: "2023 — Present",
    desc: "Rigorous coursework in core computer science, encompassing advanced algorithms, deep learning architectures, and scalable software design patterns.",
    tags: ["Machine Learning", "AI", "Python", "Data Science"],
    color: "#e23636",
  },
  {
    title: "💻 Data Structures Trainee",
    subtitle: "Intensive C++ Bootcamp",
    date: "June 12 — July 17, 2024",
    desc: "5-week intensive software engineering deep-dive. Mastered complex data structures including Trees, Graphs, Hash Maps, and Linked Lists entirely in C++ for high-performance computing.",
    tags: ["C++", "DSA", "Problem Solving", "Algorithms"],
    color: "#f78f3f",
  },
  {
    title: "🏫 Intermediate Education",
    subtitle: "J.K. Public School, Jammu",
    date: "2023 graduation",
    desc: "Completed higher secondary education with a powerful foundation in mathematics, physics, and computer science principles.",
    tags: ["Mathematics", "Physics", "CS Core"],
    color: "#0072bc",
  },
  {
    title: "🎒 Matriculation",
    subtitle: "J.K. Public School, Jammu",
    date: "2021 graduation",
    desc: "Established a strong early academic foundation yielding top tier grades and an emerging passion for logical problem solving.",
    tags: ["Fundamentals", "Science"],
    color: "#ffffff",
  }
];

export default function Education() {
  return (
    <section className="w-full min-h-screen py-72 pointer-events-auto relative flex flex-col items-center overflow-hidden">
      
      <div className="text-center mb-16 relative z-10 space-y-4 mt-8">
        <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-1)' }}>
          Education <span style={{ color: 'var(--accent)' }}>Timeline</span>
        </h2>
        <p style={{ color: 'var(--text-2)', fontSize: '1.1rem', fontFamily: 'Inter, sans-serif', maxWidth: '750px', marginInline: 'auto' }}>
          My academic path in AI & Machine Learning
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-6">
        
        <div className="absolute left-[24px] md:left-1/2 top-4 bottom-0 w-[3px] md:-translate-x-1/2 rounded-full hidden md:block" 
             style={{ 
               background: 'linear-gradient(180deg, #e23636 0%, #f78f3f 30%, #0072bc 70%, #ffffff 100%)',
               boxShadow: '0 0 15px rgba(226, 54, 54, 0.5)'
             }} 
        />
        <div className="absolute left-[36px] top-4 bottom-0 w-[3px] rounded-full md:hidden" 
             style={{ 
               background: 'linear-gradient(180deg, #e23636 0%, #f78f3f 30%, #0072bc 70%, #ffffff 100%)',
             }} 
        />

        {timeline.map((item, i) => (
          <div key={i} className={`flex w-full mb-20 relative md:justify-between items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            <div className="absolute left-[28px] md:left-1/2 top-8 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 z-20" 
                 style={{ 
                   background: '#16110d', 
                   borderColor: item.color, 
                   boxShadow: `0 0 12px ${item.color}80` 
                 }} 
            />

            <div className="hidden md:block w-5/12" />

            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full md:w-5/12 pl-20 md:pl-0"
            >
              <div 
                className="p-10 rounded-[32px] text-left relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                style={{
                  background: '#16110d',
                  border: `1px solid rgba(255,255,255,0.08)`,
                  boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
                  color: '#ede7df'
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 opacity-60" style={{ background: item.color }} />
                
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', leading: 1.2 }}>
                  <InteractiveEmoji className="mr-3">{item.title.split(' ')[0]}</InteractiveEmoji>
                  {item.title.split(' ').slice(1).join(' ')}
                </h3>
                <p style={{ color: item.color, fontSize: '0.95rem', fontWeight: 500, marginTop: 8 }}>{item.subtitle}</p>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: '#8c7f76', marginTop: 12, marginBottom: 16, letterSpacing: '0.05em' }}>{item.date}</p>
                
                <p style={{ color: '#bdb2aa', fontSize: '1rem', lineHeight: '1.8', marginBottom: 24 }}>{item.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-2 border" style={{ 
                      fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600,
                      padding: '6px 14px', borderRadius: 100, 
                      color: item.color, borderColor: `${item.color}30`, background: `${item.color}10`
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
