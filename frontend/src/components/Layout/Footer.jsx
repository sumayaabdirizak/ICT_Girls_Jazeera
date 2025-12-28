// frontend/src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';
import Logo from '../../assets/images/wali.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com/jazeeraictgirls' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/jazeeraictgirls' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/jazeeraictgirls' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/company/jazeeraictgirls' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com/jazeeraictgirls' },
    { icon: FaTiktok, label: 'TikTok', href: 'https://tiktok.com/@jazeeraictgirls' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Community', path: '/community' },
    { name: 'Blog', path: '/blog' },
    { name: 'Courses', path: '/courses' }, // Added for future courses page
  ];

  const learningPaths = [
    'Web Development',
    'Data Science',
    'Cloud Computing',
    'AI & Machine Learning',
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-50/70 to-white border-t border-primary-tech/20 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-8 lg:py-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* BRAND SECTION */}
          <div>
            <img
              src={Logo}
              alt="Jazeera University ICT Girls Logo"
              className="w-32 h-32 mb-4"
            />
            <p className="text-primary-navy/80 text-sm leading-relaxed max-w-md mb-6">
              Empowering female students through technology education, mentorship, and community support. Bridging the gender gap in ICT.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-md border border-primary-tech/20 flex items-center justify-center text-primary-navy hover:text-primary-tech hover:border-primary-tech hover:shadow-lg transition duration-300"
                >
                  <s.icon className="text-lg" />
                </a>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-tech hover:bg-primary-navy text-white font-bold py-3 px-8 rounded-full text-base transition shadow-md hover:shadow-xl"
            >
              Contact Us
              <HiArrowRight className="text-lg" />
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-primary-navy">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-primary-navy/80 hover:text-primary-tech transition flex items-center gap-2 text-sm"
                  >
                    <span className="w-2.5 h-2.5 bg-primary-tech rounded-full" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEARNING PATHS */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-primary-navy">
              Learning Paths
            </h3>
            <ul className="space-y-2">
              {learningPaths.map((item) => (
                <li
                  key={item}
                  className="text-primary-navy/80 flex items-center gap-2 text-sm"
                >
                  <span className="w-2.5 h-2.5 bg-primary-tech/80 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-primary-navy">
              Contact Info
            </h3>
            <div className="space-y-4 text-primary-navy/80 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-full bg-white shadow-md border border-primary-tech/20 flex items-center justify-center">
                  <HiLocationMarker className="text-primary-tech text-xl" />
                </div>
                <p>
                  Jazeera University <br />
                  ICT Department <br />
                  Mogadishu, Somalia
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white shadow-md border border-primary-tech/20 flex items-center justify-center">
                  <HiMail className="text-primary-tech text-xl" />
                </div>
                <a href="mailto:ictgirls@aljazeera.edu" className="hover:text-primary-tech transition">
                  ictgirls@aljazeera.edu
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white shadow-md border border-primary-tech/20 flex items-center justify-center">
                  <HiPhone className="text-primary-tech text-xl" />
                </div>
                <a href="tel:+252611234567" className="hover:text-primary-tech transition">
                  +252 61 123 4567
                </a>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="mt-8">
              <h4 className="font-bold text-base mb-2 text-primary-navy">
                Stay Updated
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-3 text-sm bg-white border border-primary-tech/20 rounded-l-full focus:outline-none focus:ring-2 focus:ring-primary-tech/50"
                />
                <button className="bg-primary-tech hover:bg-primary-navy text-white font-bold px-6 rounded-r-full transition shadow-md hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-primary-tech/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-navy/70">
            <p className="text-center md:text-left">
              © {currentYear} Jazeera University ICT Girls Initiative. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="hover:text-primary-tech transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-tech transition">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-primary-tech transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;