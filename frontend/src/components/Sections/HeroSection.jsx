import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import HeroImage from '../../assets/images/waa1.jpg';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* LEFT - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-primary-navy">
              Hal Bulsho.
              <br />
              Hal Himilo.
              <br />
              <span className="text-primary-tech">Gabdho ku jira ICT.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-primary-navy/80 leading-relaxed max-w-xl">
              Jazeera ICT Girls waa bulsho ay ku mideysan yihiin gabdho xiiseeya tiknoolajiyadda — 
              wax wada barta, is caawiya, lana kora xirfado ICT sida programming, data, iyo design.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-navy px-8 py-3.5 text-white font-semibold text-lg shadow-md hover:bg-primary-tech transition"
              >
                Ku Biir Bulshada
                <HiArrowRight className="text-xl" />
              </Link>

              <Link
                to="/community"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-navy/30 px-8 py-3.5 text-primary-navy font-semibold text-lg hover:border-primary-tech hover:text-primary-tech transition"
              >
                Daawo Bulshada
                <HiArrowRight className="text-xl" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={HeroImage}
                alt="Gabdhaha ICT ee Jaamacadda Aljazeera oo wada shaqaynaya oo faraxsan"
                className="w-full h-[400px] sm:h-[480px] lg:h-[640px] object-cover"
                loading="eager"
              />
            </div>

            <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl text-sm font-semibold text-primary-navy shadow-md">
              ICT Girls Community
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;