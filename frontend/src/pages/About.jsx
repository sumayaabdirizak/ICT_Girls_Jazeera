// frontend/src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HiCheckCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';
import image from '../assets/images/ayada1.jpg';
import image2 from '../assets/images/kuli1.jpg';

// Simple fade animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const About = () => {
  const stats = [
    { value: '95%', label: 'Ku qanacsanaanta ka-qaybgalayaasha' },
    { value: '10+', label: 'Barnaamijyo & aqoon-kororsi' },
    { value: '150+', label: 'Gabdho firfircoon' },
  ];

  const whyList = [
    'Natiijooyin la cabbiri karo',
    'Tababar ku saleysan xirfado dhab ah',
    'Hagitaan xirfadeed oo joogto ah',
    'Bulsho ammaan ah oo dhiirrigelin leh',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-navy/5 to-white">
      <div className="container mx-auto px-6 md:px-10 py-16 md:py-24 max-w-7xl">

        {/* ================= HERO / INTRO SECTION ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-20 md:mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text - Navy dominant */}
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-navy" />
                KU SAABSAN
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-navy leading-tight mb-6">
                Jazeera ICT Girls
              </h1>

              <p className="text-xl text-primary-navy/90 leading-relaxed max-w-2xl mb-10">
                Waa hindise ay hoggaaminayso jaamacad, oo ujeeddadiisu tahay in gabdhaha ardayda ah loo awood siiyo 
                iyadoo loo marayo waxbarasho tiknoolajiyadeed, hagitaan xirfadeed, iyo bulsho taageero leh.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-navy text-white font-semibold rounded-xl shadow-lg hover:bg-primary-navy/90 hover:shadow-xl transition-all text-lg"
                >
                  Bilow Hadda
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-navy text-primary-navy font-semibold rounded-xl hover:bg-primary-navy/5 transition-all text-lg"
                >
                  Nala Soo Xiriir
                </Link>
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-primary-navy/10"
            >
              <img
                src={image}
                alt="Gabadh hoggaamiye ah oo tignoolajiyada shaqaynaysa"
                className="w-full h-full object-cover aspect-[4/5] md:aspect-auto"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* ================= IMPACT STATS ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20 md:mb-32"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-md border border-primary-navy/10 hover:shadow-lg hover:border-primary-navy transition-all"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-primary-navy mb-3">
                  {stat.value}
                </div>
                <p className="text-primary-navy/80 font-medium text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================= WHY WE MATTER ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-20 md:mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              variants={fadeUp}
              className="rounded-3xl overflow-hidden shadow-2xl border border-primary-navy/10 order-1 lg:order-1"
            >
              <img
                src={image2}
                alt="Gabdhaha ICT oo wada shaqaynaya"
                className="w-full h-full object-cover aspect-[4/5] md:aspect-auto"
              />
            </motion.div>

            {/* Text - Navy dominant */}
            <div className="order-2 lg:order-2">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-navy/10 text-primary-navy font-medium text-sm mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-navy" />
                HIMILADEENNA
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6 leading-tight">
                Awood-siinta gabdhaha si ay ugu guuleystaan ICT-ga
              </h2>

              <p className="text-xl text-primary-navy/90 leading-relaxed mb-10">
                Waxaan ka shaqeynaa inaan gabdhaha siino xirfado la taaban karo, kalsooni, iyo fursado ay ku gaari karaan mustaqbal xirfadeed oo guul leh dhanka tiknoolajiyadda.
              </p>

              <ul className="space-y-4">
                {whyList.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-white/95 backdrop-blur-sm p-5 rounded-xl border border-primary-navy/10 hover:border-primary-navy transition-all">
                    <HiCheckCircle className="text-primary-navy text-3xl flex-shrink-0 mt-1" />
                    <span className="text-lg text-primary-navy font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default About;