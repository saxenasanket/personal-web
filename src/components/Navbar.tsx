import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const menuItems = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'experience', text: 'Experience' },
    { id: 'skills', text: 'Skills' },
    { id: 'achievements', text: 'Achievements' },
    { id: 'contact', text: 'Contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface bg-opacity-90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold font-code text-white">
                  <span className="text-primary">S</span>anket
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-primary font-medium"
                  className="text-gray-300 hover:text-primary px-2 py-1 text-sm font-medium cursor-pointer transition-colors"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-surface-highlight"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-surface p-4 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 px-2 pt-2 pb-3 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-primary font-medium"
                className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;