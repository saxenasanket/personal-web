import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full py-20 mt-12">
      <motion.div 
        className="w-full lg:w-3/5 mt-12 lg:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-code text-sm sm:text-base text-primary mb-2">
          &lt;Hello World /&gt;
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          I'm <span className="text-primary">Sanket Saxena</span>
        </h1>
        <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 mb-6 h-14">
          <TypeAnimation
            sequence={[
              'Senior Software Engineer',
              1000,
              'Full Stack Developer',
              1000,
              'System Architect',
              1000,
              'AI/ML Systems Engineer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-code"
          />
        </div>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          Seasoned Software Engineer with over 6 years of experience driving impact through 
          end-to-end product development, platform architecture, and cross-functional team leadership.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-6 py-3 bg-primary text-black font-medium rounded-lg transform hover:translate-y-[-2px] transition-all hover:shadow-glow cursor-pointer"
          >
            Contact Me
          </Link>
          
          <a
            href="https://medium.com/@saxenasanket"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-primary text-primary font-medium rounded-lg transform hover:translate-y-[-2px] transition-all hover:bg-surface-highlight cursor-pointer"
          >
            Read My Blog
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full lg:w-2/5 flex justify-center lg:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80">
          <div className="absolute inset-0 rounded-full border-2 border-primary-dark opacity-20 animate-pulse-slow"></div>
          <div className="absolute inset-2 rounded-full border-2 border-primary opacity-50"></div>
          <img
            src="/profile-image.jpg"
            alt="Sanket Saxena"
            className="rounded-full w-full h-full object-cover border-4 border-surface-highlight"
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;