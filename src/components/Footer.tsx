import React from 'react';
import { Github, Linkedin, FileText, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Zap className="h-5 w-5 text-primary mr-2" />
            <span className="text-lg font-bold font-code">
              <span className="text-primary">S</span>anket <span className="text-primary">S</span>axena
            </span>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/saxenasanket" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sanket-saxena-b74a7b103/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://medium.com/@saxenasanket" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm font-code">
            &copy; {new Date().getFullYear()} | Made with <span className="text-primary">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;