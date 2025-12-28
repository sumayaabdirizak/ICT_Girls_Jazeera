import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary-navy to-primary-tech text-center overflow-hidden">
      {/* Very subtle background accent */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8">
            Your Future in Tech  
            <span className="text-primary-tech block mt-3">Starts Here</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 font-light mb-12 leading-relaxed">
            Join hundreds of Somali sisters learning, growing, and leading together.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/register"
              className="inline-flex items-center gap-4 bg-white text-primary-navy px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Ku Biir Hadda
              <HiArrowRight className="text-2xl" />
            </Link>
          </motion.div>

          <p className="mt-8 text-white/70 text-lg">
            Free to start • Real mentorship • Somali sisterhood
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;