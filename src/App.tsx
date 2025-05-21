import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-white">
      <ParticleBackground />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="experience" className="py-20">
          <Experience />
        </section>
        
        <section id="skills" className="py-20">
          <Skills />
        </section>
        
        <section id="achievements" className="py-20">
          <Achievements />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;