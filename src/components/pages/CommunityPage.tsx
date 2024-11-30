import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Award } from 'lucide-react';

export function CommunityPage() {
  const communityFeatures = [
    {
      icon: Users,
      title: "Study Groups",
      description: "Join like-minded developers in focused study sessions",
      members: 1200
    },
    {
      icon: MessageSquare,
      title: "Discussion Forums",
      description: "Engage in technical discussions and problem-solving",
      topics: 850
    },
    {
      icon: Heart,
      title: "Mentorship",
      description: "Connect with experienced developers for guidance",
      mentors: 150
    },
    {
      icon: Award,
      title: "Code Reviews",
      description: "Get feedback on your code from peers and experts",
      reviews: 3200
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
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-300">Connect, learn, and grow with fellow developers</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 hover:bg-gray-700/50 transition-colors"
            >
              <feature.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <div className="flex items-center gap-2 text-orange-400">
                {Object.entries(feature).map(([key, value]) => {
                  if (typeof value === 'number') {
                    return (
                      <span key={key} className="bg-orange-500/10 px-3 py-1 rounded-full text-sm">
                        {value.toLocaleString()} {key}
                      </span>
                    );
                  }
                  return null;
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}