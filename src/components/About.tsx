import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Code, Database, Server, Globe } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold">
          <span className="text-primary">About</span> Me
        </h2>
        <div className="mt-2 h-1 w-24 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-primary">Professional Summary</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Seasoned Software Engineer with over 6 years of experience driving impact through end-to-end 
            product development, platform architecture, and cross-functional team leadership. Proven track 
            record of building production-grade systems that scale — from microservices and ML-integrated 
            data pipelines to performant front-end experiences.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Adept at defining SLAs/SLOs, enabling observability, and delivering high-availability systems 
            under real-world constraints. Equally comfortable leading initiatives from scratch or optimizing 
            mature workflows, with a strong focus on solving complex problems and aligning engineering with 
            business goals.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Continuously adaptive to the evolving software landscape and passionate about building systems 
            that are not just functional, but strategic.
          </p>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-surface rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 text-primary text-center">Core Expertise</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-surface-highlight p-2 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Full-Stack Development</h4>
                  <p className="text-gray-400">Expert in JavaScript/TypeScript, React.js, Node.js with strong Python skills</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-surface-highlight p-2 rounded-lg">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Microservices Architecture</h4>
                  <p className="text-gray-400">Design, implementation and optimization of distributed systems</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-surface-highlight p-2 rounded-lg">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Database Systems</h4>
                  <p className="text-gray-400">Deep knowledge of PostgreSQL, MongoDB, and database internals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-surface-highlight p-2 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">AI/ML Systems</h4>
                  <p className="text-gray-400">Integration and deployment of ML models in production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;