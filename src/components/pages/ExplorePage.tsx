import React from 'react';
import { motion } from 'framer-motion';
import { Code, GitBranch, Globe, Cpu } from 'lucide-react';

export function ExplorePage() {
  const technologies = [
    {
      category: "Frontend",
      icon: Globe,
      items: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "TypeScript", level: 88 }
      ]
    },
    {
      category: "Backend",
      icon: Cpu,
      items: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 88 },
        { name: "Java", level: 85 },
        { name: "Go", level: 82 }
      ]
    },
    {
      category: "DevOps",
      icon: GitBranch,
      items: [
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 85 },
        { name: "AWS", level: 90 },
        { name: "CI/CD", level: 87 }
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Explore Technologies</h2>
          <p className="text-xl text-gray-300">Discover the tools that power modern software</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <tech.icon className="h-8 w-8 text-orange-500" />
                <h3 className="text-2xl font-semibold">{tech.category}</h3>
              </div>
              
              <div className="space-y-4">
                {tech.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-1">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}