import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Topic {
  name: string;
  duration: string;
}

interface PathCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  topics: Topic[];
}

export function PathCard({ title, icon: Icon, description, topics }: PathCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-8 w-8 text-orange-500" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3">
        {topics.map((topic) => (
          <li
            key={topic.name}
            className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg"
          >
            <span>{topic.name}</span>
            <span className="text-orange-400 text-sm">{topic.duration}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}