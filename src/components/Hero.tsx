import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-600">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="h-6 w-6" />
              <span className="text-xl font-semibold">Master Your Code Journey</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Transform Your Future with Code
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 text-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Embark on a journey to master programming with expert-guided resources
              and hands-on projects. Your path to becoming a skilled developer starts here.
            </motion.p>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-50 transition-colors"
              >
                Start Learning <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Courses
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-2xl shadow-2xl">
              <Terminal className="h-8 w-8 text-indigo-300 mb-4" />
              <pre className="text-indigo-300 font-mono text-sm">
                <code>{`function learnToCode() {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  const dedication = 100;
  
  return skills.map(skill => 
    master(skill, dedication)
  );
}`}</code>
              </pre>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl shadow-xl">
              <div className="text-white font-mono">
                <div className="text-sm opacity-80">Current Progress</div>
                <div className="text-2xl font-bold">85%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}