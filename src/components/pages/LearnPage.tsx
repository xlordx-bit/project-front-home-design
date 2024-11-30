import React from 'react';
import { motion } from 'framer-motion';
import { ResourceCard } from '../learn/ResourceCard';
import { PathCard } from '../learn/PathCard';
import { OpenSourceSection } from '../learn/OpenSourceSection';
import { learningResources, learningPaths, openSourceProjects } from '../../data/learningData';

export function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
      <div className="container mx-auto px-4">
        {/* Learning Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Learning Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {learningResources.map((resource) => (
              <ResourceCard
                key={resource.title}
                title={resource.title}
                icon={resource.icon}
                items={resource.items}
              />
            ))}
          </div>
        </motion.div>

        {/* Learning Paths Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Learning Paths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path) => (
              <PathCard
                key={path.title}
                title={path.title}
                icon={path.icon}
                description={path.description}
                topics={path.topics}
              />
            ))}
          </div>
        </motion.div>

        {/* Open Source Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Open Source Learning</h2>
          <OpenSourceSection projects={openSourceProjects} />
        </motion.div>
      </div>
    </div>
  );
}