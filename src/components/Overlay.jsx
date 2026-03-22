import Hero from './Hero';
import About from './About';
import TechStack from './TechStack';
import Education from './Education';
import ProjectCards from './ProjectCards';
import Contact from './Contact';
import Award from './Award';

export default function Overlay() {
  return (
    <div className="w-full pointer-events-none flex flex-col gap-[20vh]">
      <Hero />
      <About />
      <TechStack />
      <ProjectCards />
      <Award />
      <Education />
      <Contact />
    </div>
  );
}
