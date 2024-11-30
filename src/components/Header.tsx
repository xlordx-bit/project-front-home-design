import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, BookOpen, Compass, Users, MessageCircle, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DarkModeToggle } from './shared/DarkModeToggle';

export function Header({ onAuthClick }: { onAuthClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Learn', icon: BookOpen, href: '#learn' },
    { name: 'Explore', icon: Compass, href: '#explore' },
    { name: 'Courses', icon: Rocket, href: '#courses' },
    { name: 'Community', icon: Users, href: '#community' },
    { name: 'Challenges', icon: MessageCircle, href: '#challenges' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#home')}
          >
            <Code2 className={`h-8 w-8 ${isScrolled ? 'text-orange-500' : 'text-white'}`} />
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
              CodeWise
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.li 
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center gap-2 ${
                        isScrolled 
                          ? `text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 
                             ${isActive ? 'text-orange-500 dark:text-orange-400' : ''}`
                          : `text-white/90 hover:text-white 
                             ${isActive ? 'text-white font-medium' : ''}`
                      } transition-colors`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
            
            <div className="flex items-center gap-4">
              <DarkModeToggle />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAuthClick}
                className={`px-4 py-2 rounded-lg ${
                  isScrolled
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                } transition-colors`}
              >
                Sign In
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <DarkModeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <ul className="space-y-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.li
                      key={item.name}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={`flex items-center gap-2 py-2 w-full ${
                          isScrolled
                            ? `text-gray-700 dark:text-gray-300 
                               ${isActive ? 'text-orange-500 dark:text-orange-400' : ''}`
                            : `text-white 
                               ${isActive ? 'font-medium' : ''}`
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        {item.name}
                      </button>
                    </motion.li>
                  );
                })}
                <motion.li whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() => {
                      onAuthClick();
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                  >
                    Sign In
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}