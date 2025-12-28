// src/pages/Blog.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCalendar, HiClock, HiSearch, HiFilter, HiUser, HiSparkles, HiArrowRight } from 'react-icons/hi';

// Blog hero background image (same style as community banner)
import blogHeroImage from '../assets/images/kuli1.jpg';

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "Sidee Loo Bilaabaa Python-ka Marka Ugu Horreysa?",
    excerpt: "Hordhac fudud oo ku saabsan Python — luqadda ugu fudud ee aad ku bilaabi karto safarkaaga programming-ka.",
    author: "Hodan Tech",
    date: "Dec 15, 2025",
    readTime: "6 daqiiqo",
    category: "Python",
    tags: ["Beginner", "Programming", "Tutorial"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    views: 1245,
  },
  {
    id: 2,
    title: "Gabdhaha Somaliyeed ee Ku Guulaystay Tech Industry",
    excerpt: "Sheekooyin dhab ah oo ku saabsan walaalaheen oo gaadhay guulo waaweyn ee caalamka tiknoolajiyadda. Akhriyo safarka shaqsiyaad kala duwan.",
    author: "NasraUI",
    date: "Nov 28, 2025",
    readTime: "8 daqiiqo",
    category: "Inspiration",
    tags: ["Success", "Motivation", "Women in Tech"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    views: 2156,
  },
  {
    id: 3,
    title: "Faa'iidooyinka AI ee Nolol-maalmeedka Haweenka",
    excerpt: "Sidee AI u badali karaa habka aynu u shaqayno, wax u baranno, iyo nolol-maalmeedka guud ahaan. Baro adeegyada AI ee gaarka ah haweenka.",
    author: "LeyloDev",
    date: "Oct 10, 2025",
    readTime: "5 daqiiqo",
    category: "AI",
    tags: ["Future", "Tech", "AI Tools"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    views: 1873,
  },
  {
    id: 4,
    title: "10 Qalad ee Ugu Badan ee La Sameeyo Marka La Bilaabo Programming",
    excerpt: "Qaladadan caadi ahaan loo sameeyo marka la bilaabo safarka programming-ka oo sida looga fogaado.",
    author: "Hodan Tech",
    date: "Jan 5, 2026",
    readTime: "7 daqiiqo",
    category: "Career",
    tags: ["Tips", "Beginner", "Mistakes"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    views: 987,
  },
  {
    id: 5,
    title: "React vs Vue: Go'aanso Sidee Loo Qaado?",
    excerpt: "Tijaabi kala sooc u dhexeeya React iyo Vue.js oo aad ku go'aansan karto framework-ka ugu habboon project-kaaga.",
    author: "NasraUI",
    date: "Dec 20, 2025",
    readTime: "9 daqiiqo",
    category: "Tutorials",
    tags: ["React", "Vue", "JavaScript"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    views: 1567,
  },
  {
    id: 6,
    title: "Sida Loo Sameeyo Portfolio Website-kaaga Ugu Horreynta",
    excerpt: "Tilmaamaha step-by-step ee sameynta portfolio website-kaaga ugu horreynta iyo sida loo hormariyo.",
    author: "LeyloDev",
    date: "Nov 15, 2025",
    readTime: "10 daqiiqo",
    category: "Tutorials",
    tags: ["Web Development", "Portfolio", "Design"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    views: 1345,
  },
];

const categories = ['All', 'Featured', 'Python', 'AI', 'Inspiration', 'Career', 'Tutorials'];
const sortOptions = ['Newest', 'Popular', 'Oldest'];

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

const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const filterButtonVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.95 }
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
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Newest');

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];
    if (activeCategory === 'Featured') {
      posts = posts.filter(post => post.featured);
    } else if (activeCategory !== 'All') {
      posts = posts.filter(post => post.category === activeCategory);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
      );
    }
    switch (sortBy) {
      case 'Newest':
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'Oldest':
        posts.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'Popular':
        posts.sort((a, b) => b.views - a.views);
        break;
      default:
        break;
    }
    return posts;
  }, [activeCategory, searchQuery, sortBy]);

  const clearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setSortBy('Newest');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-navy/5 via-white to-primary-navy/5">
      {/* Hero Banner with enhanced motion */}
      <motion.div 
        className="relative h-72 md:h-96 overflow-hidden mb-10"
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
            src={blogHeroImage}
            alt="Jazeera ICT Girls Blog"
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
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-white"
              initial={{ y: "100vh", x: Math.random() * 100 + "vw" }}
              animate={{
                y: "-100vh",
                transition: {
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }
              }}
            />
          ))}
        </motion.div>

        <motion.div 
          variants={heroVariants}
          className="absolute inset-0 flex items-end container mx-auto px-6 pb-10"
        >
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold text-white mb-3 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Blog-ka Jazeera ICT Girls
            </motion.h1>
            <motion.p 
              className="text-white/90 text-lg md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Sheekooyin, casharro, iyo dhiirrigelin ka timid walaalaheen ee adduunka tiknoolajiyadda.
            </motion.p>
            
            {/* Animated sparkle icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="mt-4"
            >
              <HiSparkles className="text-primary-tech text-3xl" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Search & Filters with enhanced animations */}
        <motion.div 
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="relative max-w-2xl mx-auto"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-navy/50 text-xl" />
            <input
              type="text"
              placeholder="Raadi mawduucyo, qoraalo, ama qoraayaal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white shadow-lg border border-primary-navy/20 rounded-xl focus:ring-2 focus:ring-primary-tech/50 focus:border-primary-tech outline-none transition-all text-primary-navy placeholder:text-primary-navy/50"
            />
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-navy/60 hover:text-primary-navy"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap gap-2">
              <motion.span 
                className="flex items-center gap-2 text-primary-navy font-medium"
                variants={itemVariants}
              >
                <HiFilter className="text-primary-navy" />
                Qaybta:
              </motion.span>
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  variants={filterButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-primary-tech to-primary-navy text-white shadow-lg'
                      : 'bg-white/90 text-primary-navy/80 hover:bg-white hover:text-primary-navy border border-primary-navy/10 hover:border-primary-tech/30'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            <motion.div 
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <span className="text-primary-navy font-medium">Kala saar:</span>
              <motion.select
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/90 shadow-sm border border-primary-navy/10 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary-tech/30 focus:border-primary-tech outline-none text-primary-navy cursor-pointer"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </motion.select>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {(activeCategory !== 'All' || searchQuery || sortBy !== 'Newest') && (
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <motion.button
                  onClick={clearFilters}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 text-sm text-primary-navy/80 hover:text-primary-navy hover:bg-primary-navy/5 rounded-lg transition-colors border border-primary-navy/20"
                >
                  Daah filitirooyinka
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results counter with animation */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.p 
            className="text-primary-navy/80"
            key={`${filteredPosts.length}-${activeCategory}-${searchQuery}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Waxaad heleysaa <span className="font-semibold text-primary-navy bg-primary-tech/10 px-2 py-1 rounded">
              {filteredPosts.length}
            </span> qoraal
            {filteredPosts.length !== 1 ? 'ood' : ''}
            {activeCategory !== 'All' && ` ee qaybta "${activeCategory}"`}
            {searchQuery && ` oo la raadiyay "${searchQuery}"`}
          </motion.p>
        </motion.div>

        {/* Blog Grid with enhanced animations */}
        <AnimatePresence mode="wait">
          {filteredPosts.length === 0 ? (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-16"
            >
              <motion.div 
                className="max-w-md mx-auto"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ type: "spring" }}
              >
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  📝
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-primary-navy mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Qoraallo lama helin
                </motion.h3>
                <motion.p 
                  className="text-primary-navy/80 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Isku day inaad bedesho raadintaada ama qaybta aad dooratay.
                </motion.p>
                <motion.button
                  onClick={clearFilters}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-tech to-primary-navy text-white px-6 py-3 rounded-lg font-medium hover:shadow-xl transition-all duration-300"
                >
                  Daah filitirooyinka
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              key="blog-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={postCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  custom={index}
                  className="group"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-navy/10 overflow-hidden hover:shadow-2xl transition-all duration-300 relative">
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-tech/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="h-48 md:h-56 overflow-hidden relative">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                        loading="lazy"
                      />
                      <AnimatePresence>
                        {post.featured && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="absolute top-4 left-4 z-10"
                          >
                            <span className="px-3 py-1 bg-gradient-to-r from-primary-tech to-primary-navy text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                              <HiSparkles className="text-xs" />
                              Featured
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Views badge with animation */}
                      <motion.div 
                        className="absolute top-4 right-4 z-10"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-navy rounded-full text-xs font-medium shadow-sm">
                          👁️ {post.views.toLocaleString()}
                        </span>
                      </motion.div>
                    </div>

                    <div className="p-6 md:p-7 relative z-10">
                      <motion.div 
                        className="flex items-center gap-3 text-sm text-primary-navy/70 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <span className="flex items-center gap-1.5">
                          <HiCalendar className="text-primary-navy" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <HiClock className="text-primary-navy" />
                          {post.readTime}
                        </span>
                      </motion.div>

                      <motion.h2 
                        className="text-xl md:text-2xl font-bold text-primary-navy mb-3 group-hover:text-primary-tech transition-colors line-clamp-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Link to={`/blog/${post.id}`} className="hover:underline block">
                          {post.title}
                        </Link>
                      </motion.h2>

                      <motion.p 
                        className="text-primary-navy/80 mb-5 line-clamp-3 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {post.excerpt}
                      </motion.p>

                      <motion.div 
                        className="flex items-center justify-between pt-4 border-t border-primary-navy/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.div 
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-tech/20 to-primary-navy/10 flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <HiUser className="text-primary-navy" />
                          </motion.div>
                          <span className="text-sm font-medium text-primary-navy">{post.author}</span>
                        </div>

                        <motion.span 
                          className="px-3 py-1 bg-gradient-to-r from-primary-tech/10 to-primary-navy/10 text-primary-navy rounded-full text-xs font-medium"
                          whileHover={{ scale: 1.1 }}
                        >
                          {post.category}
                        </motion.span>
                      </motion.div>
                      
                      {/* Read more arrow */}
                      <motion.div 
                        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <HiArrowRight className="text-primary-tech text-lg" />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA with enhanced motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center mt-16 md:mt-24 relative overflow-hidden rounded-3xl"
        >
          {/* Animated background gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary-navy/20 via-primary-tech/20 to-primary-navy/20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          />
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary-tech/30"
                animate={{
                  y: [0, -100],
                  x: [0, Math.sin(i) * 50],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                style={{
                  left: `${10 + i * 8}%`,
                  top: '90%'
                }}
              />
            ))}
          </div>

          <div className="relative z-10 p-10 md:p-14">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary-navy mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Hadda waa waqtigaaga!
            </motion.h2>
            <motion.p 
              className="text-lg text-primary-navy/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ma haysaa sheeko ama khibrad aad rabto inaad la wadaagto walaalaheen? 
              Ku soo biir oo qor!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/community"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-tech to-primary-navy text-white px-10 py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                >
                  Ku soo biir oo qor!
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <HiArrowRight className="text-lg" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;