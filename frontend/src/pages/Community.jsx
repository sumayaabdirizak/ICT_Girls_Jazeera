import React, { useState } from 'react';
import communityBanner from '../assets/images/ayada1.jpg';
import postPlaceholder1 from '../assets/images/gabdho.png';
import postPlaceholder2 from '../assets/images/as1.jpg';
import postPlaceholder3 from '../assets/images/kuli1.jpg';
import communityLogo from '../assets/images/G-1.png';

import {
  HiHeart,
  HiChatAlt2,
  HiShare,
  HiBookmark,
  HiDotsHorizontal,
  HiPhotograph,
  HiLink,
  HiFire,
  HiNewspaper,
  HiStar,
  HiUsers,
  HiLightningBolt
} from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Community = () => {
  const [activeTab, setActiveTab] = useState('hot');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Hodan',
      avatar: 'H',
      time: '2 saac kahor',
      title: 'Ku soo dhowaada platform-ka cusub! Python Workshops',
      content: 'Waxaan ku faraxsanahay inaan idinla wadaagno jadwalka koorsooyinka Python for Data Science ee bilaabanaya toddobaadka soo socda.',
      image: postPlaceholder1,
      likes: 124,
      isLiked: false,
      comments: 45,
      tags: ['Python', 'Workshop'],
    },
    {
      id: 2,
      author: 'LeyloDev',
      avatar: 'L',
      time: '4 saac kahor',
      title: "Su'aal ku saabsan Data Science roadmap-ka?",
      content: 'Waxaan rabaa inaan bilaabo Data Science. Waa maxay talaabooyinka ugu horreeya ee aan qaadi karo?',
      image: postPlaceholder2,
      likes: 82,
      isLiked: false,
      comments: 28,
      tags: ['Question', 'Data Science'],
    },
    {
      id: 3,
      author: 'NasraUI',
      avatar: 'N',
      time: '6 saac kahor',
      title: 'Showcase: React & Tailwind project-kaygii ugu horreeyay 🚀',
      content: 'Tani waa mashruucii iigu horreeyay ee React & Tailwind CSS. Fadlan igu soo dhiiba fikradihiinna.',
      image: postPlaceholder3,
      likes: 56,
      isLiked: false,
      comments: 12,
      tags: ['Showcase', 'React'],
    }
  ]);

  const moderators = [
    { name: 'Dr. Aisha', role: 'Community Lead', avatar: 'A' },
    { name: 'Naima', role: 'Technical Advisor', avatar: 'N' },
    { name: 'Khadra', role: 'Moderator', avatar: 'K' },
  ];

  const tabs = [
    { id: 'hot', label: 'Ugu Shidan', icon: <HiFire /> },
    { id: 'new', label: 'Cusub', icon: <HiNewspaper /> },
    { id: 'top', label: 'Ugu Sarreeya', icon: <HiStar /> },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const postCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      scale: 1.01,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const tabVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    active: { 
      scale: 1.1,
      transition: { type: "spring", stiffness: 500 }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.3)"
    },
    tap: { scale: 0.95 }
  };

  const handleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-navy/5 via-white to-primary-navy/5">
      {/* Hero Banner with enhanced motion */}
      <motion.div 
        className="relative h-72 md:h-96 overflow-hidden mb-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={communityBanner}
            alt="Jazeera ICT Girls Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/95 via-primary-navy/70 to-transparent" />
        </motion.div>
        
        {/* Animated floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-primary-tech/40"
              initial={{ y: "100vh", x: Math.random() * 100 + "vw" }}
              animate={{
                y: "-100vh",
                transition: {
                  duration: 12 + Math.random() * 8,
                  repeat: Infinity,
                  delay: Math.random() * 4
                }
              }}
            />
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="absolute inset-0 flex items-end container mx-auto px-6 pb-10"
        >
          <div>
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold text-white mb-3 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Jazeera ICT Girls
            </motion.h1>
            <motion.p 
              className="text-white/90 text-lg md:text-2xl max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Wadaag, baro, oo isku xidh walaalahaaga Somaliyeed ee adduunka tech-ka
            </motion.p>
            
            {/* Animated community icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="mt-6 flex items-center gap-4"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <HiUsers className="text-primary-tech text-3xl" />
              </motion.div>
              
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ================= MAIN FEED ================= */}
          <div className="lg:col-span-8 space-y-8">
            {/* Post Composer */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg border border-primary-navy/10 p-5 md:p-6"
              whileHover={{ 
                y: -3,
                boxShadow: "0 20px 40px -15px rgba(37, 99, 235, 0.15)"
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-11 h-11 rounded-full bg-gradient-to-r from-primary-tech/20 to-primary-navy/20 flex items-center justify-center text-primary-navy font-bold text-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  Y
                </motion.div>
                <div className="flex-1">
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    placeholder="Maxaad maanta ka fikiraysaa, walaal?"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-primary-navy/10 rounded-full focus:ring-2 focus:ring-primary-navy focus:border-primary-navy outline-none text-base placeholder:text-primary-navy/50"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-between mt-5 pt-4 border-t border-primary-navy/10 gap-4">
                <div className="flex gap-5">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex items-center gap-2 text-primary-navy/70 hover:text-primary-tech transition"
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                    >
                      <HiPhotograph className="text-xl" />
                    </motion.div>
                    <span className="font-medium text-sm">Sawir</span>
                  </motion.button>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex items-center gap-2 text-primary-navy/70 hover:text-primary-tech transition"
                  >
                    <motion.div
                      whileHover={{ rotate: -15 }}
                    >
                      <HiLink className="text-xl" />
                    </motion.div>
                    <span className="font-medium text-sm">Link</span>
                  </motion.button>
                </div>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-gradient-to-r from-primary-tech to-primary-navy hover:from-primary-tech/95 hover:to-primary-navy/95 text-white px-8 py-3 rounded-full font-medium shadow-lg transition"
                >
                  Qor
                </motion.button>
              </div>
            </motion.div>

            {/* Sorting Tabs */}
            <motion.div 
              variants={itemVariants}
              className="flex bg-white rounded-xl shadow-lg border border-primary-navy/10 overflow-hidden"
            >
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  variants={tabVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 px-5 text-sm md:text-base font-medium transition-all relative ${
                    activeTab === tab.id
                      ? 'text-primary-navy'
                      : 'text-primary-navy/70 hover:text-primary-navy'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-tech to-primary-navy"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <motion.div
                    animate={activeTab === tab.id ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    {tab.icon}
                  </motion.div>
                  {tab.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Posts */}
            <motion.div 
              variants={containerVariants}
              className="space-y-6"
            >
              <AnimatePresence>
                {posts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={postCardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-lg border border-primary-navy/10 overflow-hidden relative"
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-tech/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex relative z-10">
                      {/* Vote column */}
                      <div className="w-14 bg-gradient-to-b from-primary-navy/5 to-white flex flex-col items-center py-5 gap-1">
                        <motion.button
                          onClick={() => handleLike(post.id)}
                          className={`p-1.5 rounded-full transition relative ${
                            post.isLiked ? 'text-red-500' : 'text-primary-navy/60 hover:text-red-400'
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <HiHeart className={`text-3xl ${post.isLiked ? 'fill-current' : ''}`} />
                          {post.isLiked && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: [0, 1.5, 1] }}
                              transition={{ duration: 0.4 }}
                              className="absolute inset-0 rounded-full bg-red-500/20"
                            />
                          )}
                        </motion.button>
                        <motion.span 
                          key={post.likes}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="text-base font-bold text-primary-navy mt-1"
                        >
                          {post.likes}
                        </motion.span>
                      </div>

                      {/* Main content */}
                      <div className="flex-1 p-5 md:p-6">
                        {/* Author line */}
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div 
                            className="w-9 h-9 rounded-full bg-gradient-to-r from-primary-tech/20 to-primary-navy/20 flex items-center justify-center text-primary-navy font-bold"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {post.avatar}
                          </motion.div>
                          <div>
                            <span className="font-medium text-primary-navy">{post.author}</span>
                            <span className="text-primary-navy/60 text-sm ml-2">• {post.time}</span>
                          </div>
                        </div>

                        <motion.h3 
                          className="text-xl md:text-2xl font-bold text-primary-navy mb-3 hover:text-primary-tech transition-colors cursor-pointer"
                          whileHover={{ x: 5 }}
                        >
                          {post.title}
                        </motion.h3>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="px-3 py-1 bg-gradient-to-r from-primary-tech/10 to-primary-navy/10 text-primary-navy rounded-full text-xs font-medium hover:from-primary-tech/20 hover:to-primary-navy/20 transition-all cursor-default"
                              whileHover={{ scale: 1.05 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>

                        <p className="text-primary-navy/80 leading-relaxed mb-5 text-base">
                          {post.content}
                        </p>

                        {post.image && (
                          <motion.div 
                            className="rounded-xl overflow-hidden mb-5"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <motion.img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-64 md:h-80 object-cover cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>
                        )}

                        {/* Actions bar */}
                        <div className="flex items-center gap-8 text-sm text-primary-navy/70 pt-3 border-t border-primary-navy/10">
                          {[
                            { icon: <HiChatAlt2 />, text: `${post.comments} Jawaab` },
                            { icon: <HiShare />, text: 'La wadaag' },
                            { icon: <HiBookmark />, text: 'Keydi' }
                          ].map((action, i) => (
                            <motion.button
                              key={i}
                              className="flex items-center gap-2 hover:text-primary-tech transition"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.div
                                whileHover={{ rotate: i === 0 ? 15 : i === 1 ? -15 : 0 }}
                              >
                                {action.icon}
                              </motion.div>
                              {action.text}
                            </motion.button>
                          ))}
                          <motion.button 
                            className="ml-auto text-primary-navy/60 hover:text-primary-navy transition"
                            whileHover={{ rotate: 90 }}
                          >
                            <HiDotsHorizontal className="text-2xl" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* ================= SIDEBAR ================= */}
          <div className="lg:col-span-4 space-y-6 lg:space-y-8">
            {/* Community Info Widget */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-navy/10 overflow-hidden relative"
              whileHover={{ y: -3 }}
            >
              <motion.div 
                className="h-2 bg-gradient-to-r from-primary-navy to-primary-tech"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-5">
                  <motion.div 
                    className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-r from-primary-tech/20 to-primary-navy/20 flex-shrink-0 border-2 border-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img src={communityLogo} alt="Community" className="w-full h-full object-cover" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="font-bold text-xl text-primary-navy"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Jazeera ICT Girls
                    </motion.h3>
                    <motion.p 
                      className="text-xs text-primary-navy/70"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      r/JazeeraICTGirls
                    </motion.p>
                  </div>
                </div>

                <p className="text-sm text-primary-navy/80 mb-6 leading-relaxed">
                  Platform-ka rasmiga ah ee gabdhaha ICT-ga Jaamacadda Al Jazeera.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-6 text-center">
                  {[
                    { value: "1.2k", label: "Xubnood" },
                    { value: "45", label: "Online" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-gradient-to-br from-primary-navy/5 to-white rounded-xl border border-primary-navy/10"
                    >
                      <div className="text-3xl font-bold text-primary-navy">{stat.value}</div>
                      <div className="text-xs text-primary-navy/70 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full bg-gradient-to-r from-primary-tech to-primary-navy hover:from-primary-tech/95 hover:to-primary-navy/95 text-white py-3.5 rounded-xl font-medium shadow-lg transition"
                >
                  Samee Qoraal
                </motion.button>
              </div>
            </motion.div>

            {/* Rules Widget */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-navy/10 p-6"
              whileHover={{ y: -3 }}
            >
              <motion.h3 
                className="font-bold text-xl text-primary-navy mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Xeerarka Bulshada
              </motion.h3>
              <ol className="space-y-4 text-sm text-primary-navy/80">
                {[
                  'Ixtiraam qof kasta - ha isla weydiin cidina',
                  'Qoraalada ha noqdaan ICT la xiriira',
                  'Ha sameyn spam ama tijaabo marketing',
                  'Luqad edeb leh isticmaal',
                  'La wadaag aqoon, ha ka digin'
                ].map((rule, i) => (
                  <motion.li 
                    key={i} 
                    className="flex gap-3 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <motion.span 
                      className="font-bold text-primary-tech text-lg min-w-[24px]"
                      whileHover={{ scale: 1.2 }}
                    >
                      {i + 1}.
                    </motion.span>
                    <span>{rule}</span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>

            {/* Moderators Widget */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-navy/10 p-6"
              whileHover={{ y: -3 }}
            >
              <motion.h3 
                className="font-bold text-xl text-primary-navy mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Maamulayaasha
              </motion.h3>
              <div className="space-y-5">
                {moderators.map((mod, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary-navy/5 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ 
                      x: 5,
                      backgroundColor: 'rgba(37, 99, 235, 0.05)'
                    }}
                  >
                    <motion.div 
                      className="w-11 h-11 rounded-full bg-gradient-to-r from-primary-tech/20 to-primary-navy/20 flex items-center justify-center text-primary-navy font-bold text-lg border-2 border-white"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {mod.avatar}
                    </motion.div>
                    <div>
                      <div className="font-medium text-primary-navy text-base">{mod.name}</div>
                      <div className="text-sm text-primary-navy/70">{mod.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;