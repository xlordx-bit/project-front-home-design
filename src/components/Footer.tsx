import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              CodeWise
            </motion.h3>
            <p className="text-gray-400">
              Empowering developers to build the future through quality education and practical experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Courses', 'Resources', 'Blog', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 pt-8 mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> by CodeWise Team
          </p>
          <p className="text-sm text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} CodeWise. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}