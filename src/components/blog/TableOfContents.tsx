import React from 'react';
import { motion } from 'framer-motion';
import type { TableOfContents as TOC } from '../../types/blog';

interface TableOfContentsProps {
  items: TOC[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-24 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Table of Contents
      </h2>
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ x: 4 }}
              style={{ marginLeft: `${(item.level - 1) * 16}px` }}
            >
              <a
                href={`#${item.id}`}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}