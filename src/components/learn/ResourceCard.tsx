import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ResourceItem {
  name: string;
  url: string;
  description: string;
}

interface ResourceCardProps {
  title: string;
  icon: LucideIcon;
  items: ResourceItem[];
}

export function ResourceCard({ title, icon: Icon, items }: ResourceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-8 w-8 text-orange-500" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h4 className="font-semibold mb-2">{item.name}</h4>
              <p className="text-sm text-gray-300">{item.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}