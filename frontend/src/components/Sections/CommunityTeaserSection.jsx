// src/components/Sections/CommunityTeaserSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CommunityTeaserSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary-tech/10 to-blue-50/30 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
          Join 1.2k+ Somali Sisters in Tech
        </h2>
        <p className="text-xl text-primary-navy/80 max-w-2xl mx-auto mb-10">
          Share knowledge, ask questions, celebrate wins, and grow together in our safe, supportive community.
        </p>
        <Link
          to="/community"
          className="inline-block bg-primary-tech hover:bg-primary-navy text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Go to Community →
        </Link>
      </div>
    </section>
  );
};

export default CommunityTeaserSection;