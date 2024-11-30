import React from 'react';
import { motion } from 'framer-motion';

export function FeaturesHeader() {
  return (
    <motion.div 
      className="text-center mb-16"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
        Why Choose CodeWise?
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
        Discover the features that make our platform the perfect choice for your coding journey
      </p>
    </motion.div>
  );
}