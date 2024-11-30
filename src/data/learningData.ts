import { Book, Github, Youtube, Globe, Terminal, Brain } from 'lucide-react';

export const learningResources = [
  {
    title: "Official Documentation",
    icon: Book,
    items: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org", description: "Comprehensive web development documentation" },
      { name: "React Docs", url: "https://react.dev", description: "Official React documentation" },
      { name: "Node.js Docs", url: "https://nodejs.org/docs", description: "Node.js official documentation" },
      { name: "Python Docs", url: "https://docs.python.org", description: "Python language documentation" }
    ]
  },
  {
    title: "Open Source Learning",
    icon: Github,
    items: [
      { name: "FreeCodeCamp", url: "https://www.freecodecamp.org", description: "Learn to code for free" },
      { name: "The Odin Project", url: "https://www.theodinproject.com", description: "Full-stack curriculum" },
      { name: "Open Source Society", url: "https://github.com/ossu/computer-science", description: "Computer Science education" },
      { name: "Exercism", url: "https://exercism.org", description: "Code practice and mentorship" }
    ]
  },
  {
    title: "Video Tutorials",
    icon: Youtube,
    items: [
      { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", description: "Web development tutorials" },
      { name: "Net Ninja", url: "https://www.youtube.com/@NetNinja", description: "Programming tutorials" },
      { name: "Fireship", url: "https://www.youtube.com/@Fireship", description: "Quick code tutorials" },
      { name: "CS50", url: "https://cs50.harvard.edu/x", description: "Harvard's intro to CS" }
    ]
  }
];

export const learningPaths = [
  {
    title: "Frontend Development",
    icon: Globe,
    description: "Master modern web development",
    topics: [
      { name: "HTML & CSS Fundamentals", duration: "4 weeks" },
      { name: "JavaScript Essentials", duration: "6 weeks" },
      { name: "React Framework", duration: "8 weeks" },
      { name: "Web Performance", duration: "4 weeks" }
    ]
  },
  {
    title: "Backend Development",
    icon: Terminal,
    description: "Build robust server applications",
    topics: [
      { name: "Node.js Fundamentals", duration: "6 weeks" },
      { name: "Database Design", duration: "4 weeks" },
      { name: "API Development", duration: "6 weeks" },
      { name: "Server Security", duration: "4 weeks" }
    ]
  },
  {
    title: "Computer Science",
    icon: Brain,
    description: "Core CS concepts and algorithms",
    topics: [
      { name: "Data Structures", duration: "8 weeks" },
      { name: "Algorithms", duration: "8 weeks" },
      { name: "System Design", duration: "6 weeks" },
      { name: "Design Patterns", duration: "4 weeks" }
    ]
  }
];

export const openSourceProjects = [
  {
    name: "First Contributions",
    description: "Make your first open source contribution",
    difficulty: "Beginner",
    url: "https://github.com/firstcontributions/first-contributions"
  },
  {
    name: "Good First Issues",
    description: "Curated list of beginner-friendly issues",
    difficulty: "Beginner-Intermediate",
    url: "https://goodfirstissues.com"
  },
  {
    name: "Up For Grabs",
    description: "Projects with tasks for contributors",
    difficulty: "Intermediate",
    url: "https://up-for-grabs.net"
  },
  {
    name: "CodeTriage",
    description: "Help out your favorite open source projects",
    difficulty: "Intermediate",
    url: "https://www.codetriage.com"
  }
];