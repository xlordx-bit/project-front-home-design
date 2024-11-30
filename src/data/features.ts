import { BookOpen, Code, Users, Rocket, Brain, Target } from 'lucide-react';

export const features = [
  {
    icon: BookOpen,
    title: "Structured Learning",
    description: "Follow our carefully designed curriculum to build strong foundations.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Code,
    title: "Practical Projects",
    description: "Learn by doing with hands-on coding projects and real-world examples.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a community of learners and help each other grow.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Fast-Track Learning",
    description: "Accelerate your progress with optimized learning paths.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Brain,
    title: "Interactive Exercises",
    description: "Reinforce your learning with hands-on coding challenges.",
    color: "from-rose-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Career Guidance",
    description: "Get expert advice on building your tech career.",
    color: "from-orange-500 to-yellow-500"
  }
] as const;