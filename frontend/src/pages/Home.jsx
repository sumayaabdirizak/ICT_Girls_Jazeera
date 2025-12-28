// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/Sections/HeroSection';
import ImpactStatsSection from '../components/Sections/ImpactStatsSection';
import MissionSection from '../components/Sections/MissionSection';
import LearningPathsSection from '../components/Sections/LearningPathsSection';
import CommunityTeaserSection from '../components/Sections/CommunityTeaserSection';
import CTASection from '../components/Sections/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      {/* 1. Hero - First thing visitors see */}
      <HeroSection />

      {/* 2. Impact Stats - Builds instant trust */}
      <ImpactStatsSection />

      {/* 3. Short Mission / About Us */}
      <MissionSection />

      {/* 4. Our Learning Paths */}
      <LearningPathsSection />

      {/* 5. Community Call-to-Action */}
      <CommunityTeaserSection />

      {/* 6. Final Big CTA */}
      <CTASection />
    </div>
  );
};

export default Home;