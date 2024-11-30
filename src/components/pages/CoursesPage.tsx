import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Brain, Star, Timer, Users } from 'lucide-react';

const courses = [
  {
    category: "Beginner Coding",
    subtitle: "Start your programming journey",
    icon: Code2,
    color: "from-blue-500 to-indigo-600",
    courses: [
      {
        title: "Programming Fundamentals",
        duration: "8 weeks",
        students: 1500,
        rating: 4.8,
        topics: ["Variables & Data Types", "Control Flow", "Functions", "Basic Algorithms"]
      },
      {
        title: "Logic & Problem Solving",
        duration: "6 weeks",
        students: 1200,
        rating: 4.7,
        topics: ["Computational Thinking", "Problem Breakdown", "Solution Design", "Basic Projects"]
      }
    ]
  },
  {
    category: "Web Development",
    subtitle: "Build websites and web applications",
    icon: Globe,
    color: "from-indigo-500 to-purple-600",
    courses: [
      {
        title: "Frontend Mastery",
        duration: "12 weeks",
        students: 2300,
        rating: 4.9,
        topics: ["HTML5", "CSS3", "JavaScript", "React"]
      },
      {
        title: "Backend Development",
        duration: "10 weeks",
        students: 1800,
        rating: 4.8,
        topics: ["Node.js", "APIs", "Databases", "Authentication"]
      }
    ]
  },
  {
    category: "Advanced Programming",
    subtitle: "Deep dive into complex programming",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    courses: [
      {
        title: "Data Structures & Algorithms",
        duration: "14 weeks",
        students: 900,
        rating: 4.9,
        topics: ["Arrays & Lists", "Trees & Graphs", "Dynamic Programming", "Advanced Algorithms"]
      },
      {
        title: "System Design",
        duration: "12 weeks",
        students: 750,
        rating: 4.7,
        topics: ["Architecture Patterns", "Scalability", "Microservices", "Performance"]
      }
    ]
  }
];

export function CoursesPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
          <p className="text-xl text-gray-300">Comprehensive learning paths for every stage of your journey</p>
        </motion.div>

        <div className="space-y-16">
          {courses.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <category.icon className="h-12 w-12 text-orange-500" />
                <div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                  <p className="text-gray-400">{category.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.courses.map((course) => (
                  <motion.div
                    key={course.title}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-700/50 transition-all"
                  >
                    <h4 className="text-xl font-semibold mb-4">{course.title}</h4>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Timer className="h-4 w-4 text-orange-500" />
                        <span className="text-gray-300">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-orange-500" />
                        <span className="text-gray-300">{course.students} students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-orange-500" />
                        <span className="text-gray-300">{course.rating}/5.0</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium mb-2">What you'll learn:</h5>
                      <ul className="grid grid-cols-2 gap-2">
                        {course.topics.map((topic) => (
                          <li key={topic} className="text-sm text-gray-300 flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
                    >
                      Enroll Now
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}