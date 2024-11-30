import React from 'react';
import { motion } from 'framer-motion';
import { Github, BookOpen, Code2, Terminal } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  difficulty: string;
  url: string;
}

interface OpenSourceSectionProps {
  projects: Project[];
}

export function OpenSourceSection({ projects }: OpenSourceSectionProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8">
          <Github className="h-8 w-8 text-orange-500" />
          <h3 className="text-2xl font-semibold">Get Started with Open Source</h3>
        </div>
        <div className="space-y-6">
          {projects.map((project) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold">{project.name}</h4>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                  {project.difficulty}
                </span>
              </div>
              <p className="text-gray-300">{project.description}</p>
            </motion.a>
          ))}
        </div>
        <div className="mt-8 p-6 bg-gray-700/50 rounded-lg">
          <h4 className="text-xl font-semibold mb-4">Tips for Contributing</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-orange-500" />
              Read the project's contributing guidelines
            </li>
            <li className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-orange-500" />
              Start with documentation or small bug fixes
            </li>
            <li className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-orange-500" />
              Test your changes thoroughly
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}