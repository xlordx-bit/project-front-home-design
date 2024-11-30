import React from 'react';
import { motion } from 'framer-motion';
import { FeaturesHeader } from './features/FeaturesHeader';
import { FeatureGrid } from './features/FeatureGrid';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <FeaturesHeader />
        <FeatureGrid />
      </motion.div>
    </section>
  );
}