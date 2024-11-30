import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { LearnPage } from './components/pages/LearnPage';
import { ExplorePage } from './components/pages/ExplorePage';
import { CommunityPage } from './components/pages/CommunityPage';
import { CoursesPage } from './components/pages/CoursesPage';
import { ChallengesPage } from './components/pages/ChallengesPage';
import { Footer } from './components/Footer';
import { AuthModal } from './components/auth/AuthModal';
import { AIAssistant } from './components/ai/AIAssistant';
import { Toaster } from 'sonner';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />
      <main>
        <section id="home">
          <Hero />
          <Features />
        </section>
        <section id="courses">
          <CoursesPage />
        </section>
        <section id="learn">
          <LearnPage />
        </section>
        <section id="explore">
          <ExplorePage />
        </section>
        <section id="community">
          <CommunityPage />
        </section>
        <section id="challenges">
          <ChallengesPage />
        </section>
      </main>
      <Footer />
      <AIAssistant />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;