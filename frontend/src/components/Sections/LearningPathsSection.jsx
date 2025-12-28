// src/components/Sections/LearningPathsSection.jsx
import React from 'react';
import { HiCode, HiChartBar, HiDeviceMobile, HiSparkles } from 'react-icons/hi';

const paths = [
  { icon: HiCode, title: 'Web Development', desc: 'Build modern websites and apps from scratch', status: 'Coming Soon' },
  { icon: HiChartBar, title: 'Data Science', desc: 'Learn to analyze data and uncover insights', status: 'Coming Soon' },
  { icon: HiDeviceMobile, title: 'Mobile App Development', desc: 'Create apps for Android & iOS', status: 'Coming Soon' },
  { icon: HiSparkles, title: 'AI Basics', desc: 'Introduction to artificial intelligence & machine learning', status: 'Coming Soon' },
];

const LearningPathsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-navy mb-12">
          Our Learning Paths
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paths.map((path, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-gradient-to-b from-primary-tech/5 to-transparent rounded-2xl border border-primary-tech/10 hover:shadow-xl hover:border-primary-tech/30 transition-all text-center"
            >
              <path.icon className="text-5xl text-primary-tech mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-navy mb-3">{path.title}</h3>
              <p className="text-primary-navy/70 mb-4">{path.desc}</p>
              <span className="inline-block px-4 py-2 bg-primary-tech/10 text-primary-tech font-medium rounded-full text-sm">
                {path.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathsSection;