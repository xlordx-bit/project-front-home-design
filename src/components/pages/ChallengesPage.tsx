import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Target, Zap, Award, Star } from 'lucide-react';

const challenges = [
  {
    title: "Weekly Challenge",
    description: "New coding challenges every week to test your skills",
    icon: Clock,
    current: {
      name: "Build a Memory Game",
      difficulty: "Intermediate",
      participants: 234,
      timeLeft: "4 days",
      technologies: ["JavaScript", "React", "CSS"]
    }
  },
  {
    title: "Competitive Arena",
    description: "Compete with other developers in real-time challenges",
    icon: Trophy,
    upcoming: [
      {
        name: "Algorithm Battle",
        date: "March 15",
        prize: "Premium Course Access"
      },
      {
        name: "Web Dev Showdown",
        date: "March 22",
        prize: "Developer Kit"
      }
    ]
  }
];

const achievements = [
  {
    name: "Problem Solver",
    description: "Complete 10 challenges",
    progress: 7,
    icon: Target
  },
  {
    name: "Speed Demon",
    description: "Solve challenge under 30 minutes",
    progress: 4,
    icon: Zap
  },
  {
    name: "Code Master",
    description: "Win 5 competitive challenges",
    progress: 2,
    icon: Award
  }
];

export function ChallengesPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Coding Challenges</h2>
          <p className="text-xl text-gray-300">Put your skills to the test and earn rewards</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <challenge.icon className="h-8 w-8 text-orange-500" />
                <div>
                  <h3 className="text-2xl font-bold">{challenge.title}</h3>
                  <p className="text-gray-400">{challenge.description}</p>
                </div>
              </div>

              {challenge.current && (
                <div className="bg-gray-700/50 rounded-lg p-6 mb-4">
                  <h4 className="text-xl font-semibold mb-4">{challenge.current.name}</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-gray-300">
                      <span className="text-gray-400 block">Difficulty</span>
                      {challenge.current.difficulty}
                    </div>
                    <div className="text-gray-300">
                      <span className="text-gray-400 block">Participants</span>
                      {challenge.current.participants}
                    </div>
                    <div className="text-gray-300">
                      <span className="text-gray-400 block">Time Left</span>
                      {challenge.current.timeLeft}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {challenge.current.technologies.map((tech) => (
                      <span key={tech} className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {challenge.upcoming && (
                <div className="space-y-4">
                  {challenge.upcoming.map((event) => (
                    <div key={event.name} className="bg-gray-700/50 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h5 className="font-semibold">{event.name}</h5>
                        <p className="text-sm text-gray-400">{event.date}</p>
                      </div>
                      <div className="text-orange-400 text-sm">{event.prize}</div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <Star className="h-8 w-8 text-orange-500" />
            <h3 className="text-2xl font-bold">Your Achievements</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.name} className="bg-gray-700/50 rounded-lg p-6">
                <achievement.icon className="h-8 w-8 text-orange-500 mb-4" />
                <h4 className="font-semibold mb-2">{achievement.name}</h4>
                <p className="text-sm text-gray-400 mb-4">{achievement.description}</p>
                <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(achievement.progress / 10) * 100}%` }}
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-400 text-right">
                  {achievement.progress}/10
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}