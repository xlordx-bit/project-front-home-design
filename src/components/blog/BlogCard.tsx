import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';
import type { Post } from '../../types/blog';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors"
    >
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
            {post.category.name}
          </span>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {post.readingTime} min read
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {post.title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-gray-700 dark:text-gray-200">
              {post.author.name}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-gray-400" />
            <div className="flex gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-500 dark:text-gray-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}