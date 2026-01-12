// frontend/src/pages/Community.jsx
import React, { useState } from 'react';
import postPlaceholder1 from '../assets/images/gabdho.png';
import postPlaceholder2 from '../assets/images/as1.jpg';
import postPlaceholder3 from '../assets/images/kuli1.jpg';
import communityLogo from '../assets/images/G-1.png';
import { Link } from 'react-router-dom';

import {
  HiChatAlt2,
  HiShare,
  HiBookmark,
  HiPhotograph,
  HiLink,
  HiFire,
  HiNewspaper,
  HiStar,
  HiArrowRight, // ✅ FIXED
} from 'react-icons/hi';
import { motion } from 'framer-motion';

const Community = () => {
  const [activeTab, setActiveTab] = useState('hot');

  const [posts] = useState([
    {
      id: 1,
      author: 'Hodan',
      avatar: 'H',
      time: '2 hours ago',
      title: 'Welcome to the new platform! Python Workshops',
      content:
        'We are excited to share the schedule for the upcoming Python for Data Science workshops starting next week.',
      image: postPlaceholder1,
      comments: 45,
      tags: ['Python', 'Workshop'],
    },
    {
      id: 2,
      author: 'LeyloDev',
      avatar: 'L',
      time: '4 hours ago',
      title: 'Question about Data Science roadmap?',
      content:
        'I want to start Data Science. What are the first steps I should take?',
      image: postPlaceholder2,
      comments: 28,
      tags: ['Question', 'Data Science'],
    },
    {
      id: 3,
      author: 'NasraUI',
      avatar: 'N',
      time: '6 hours ago',
      title: 'Showcase: My first React & Tailwind project 🚀',
      content:
        'This is my very first project using React & Tailwind CSS. Please share your feedback!',
      image: postPlaceholder3,
      comments: 12,
      tags: ['Showcase', 'React'],
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">

  <section className="relative py-16 md:py-20 flex items-center justify-center px-6 md:px-12">
  <div className="absolute inset-0 bg-gradient-to-br from-primary-tech/20 via-white to-primary-tech/20" />

  <div className="relative z-10 max-w-6xl w-full text-center space-y-6 md:space-y-8">
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-tech/10 text-primary-tech font-semibold uppercase"
    >
      <span className="w-3 h-3 rounded-full bg-primary-tech animate-pulse" />
      Our Community
    </motion.span>

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-navy leading-tight"
    >
      Jazeera ICT Girls
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="text-lg md:text-xl lg:text-2xl text-primary-navy/80 max-w-4xl mx-auto"
    >
      Empowering Somali female students to lead in technology through world-class education, lifelong mentorship, and unbreakable sisterhood.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="flex flex-col sm:flex-row gap-5 justify-center pt-4"
    >
      <Link
        to="/register"
        className="group inline-flex items-center justify-center gap-4 bg-primary-tech text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all"
      >
        Join the Movement
        <HiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
      </Link>

      <Link
        to="/community"
        className="group inline-flex items-center justify-center gap-4 border-2 border-primary-tech text-primary-tech px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-tech/5 transition-all"
      >
        Explore Community
      </Link>
    </motion.div>
  </div>
</section>


      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto max-w-7xl px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ================= MAIN FEED (WIDE / REDDIT STYLE) ================= */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">

            {/* Composer */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-navy/10 flex items-center justify-center font-bold text-primary-navy">
                  Y
                </div>
                <input
                  placeholder="What's on your mind?"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-navy outline-none"
                />
              </div>

              <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                <div className="flex gap-6 text-gray-600">
                  <button className="flex items-center gap-2 hover:text-primary-navy">
                    <HiPhotograph /> Photo
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary-navy">
                    <HiLink /> Link
                  </button>
                </div>
                <button className="bg-primary-navy text-white px-6 py-2 rounded-lg">
                  Post
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 flex">
              {[
                { id: 'hot', label: 'Hot', icon: <HiFire /> },
                { id: 'new', label: 'New', icon: <HiNewspaper /> },
                { id: 'top', label: 'Top', icon: <HiStar /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 flex items-center justify-center gap-2 font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'text-primary-navy border-primary-navy'
                      : 'text-gray-600 border-transparent hover:text-primary-navy'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Posts */}
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-primary-navy/10 flex items-center justify-center font-semibold text-primary-navy">
                      {post.avatar}
                    </div>
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">{post.author}</span>
                      <span className="text-gray-500 ml-2">• {post.time}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm mb-4">
                    {post.content}
                  </p>

                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}

                  <div className="flex items-center gap-6 text-sm text-gray-500 pt-3 border-t border-gray-200">
                    <button className="flex items-center gap-1 hover:text-primary-navy">
                      <HiChatAlt2 /> {post.comments}
                    </button>
                    <button className="hover:text-primary-navy">
                      <HiShare /> Share
                    </button>
                    <button className="ml-auto hover:text-primary-navy">
                      <HiBookmark /> Save
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= RIGHT SIDEBAR (STICKY) ================= */}
          <div className="lg:col-span-4 xl:col-span-3 hidden lg:block sticky top-24 space-y-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={communityLogo}
                  alt="Community"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Jazeera ICT Girls
                  </h3>
                  <p className="text-sm text-gray-500">Tech Community</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-4">
                A supportive community for women in tech.
              </p>

              <button className="w-full bg-primary-navy text-white py-2 rounded-lg">
                Join Community
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Community;
