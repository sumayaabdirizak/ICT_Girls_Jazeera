import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX, HiUserCircle, HiLogout } from 'react-icons/hi';
import Logo from '../../assets/images/wali.png';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },

    { path: '/community', label: 'Community' },
    { path: '/blog', label: 'Blog' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 h-[90px] overflow-visible">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        
        {/* ================= LOGO (LEFT) ================= */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Jazeera ICT Girls"
              className="h-44 w-auto"
            />
          </Link>
        </div>

        {/* ================= NAVIGATION (CENTER) ================= */}
        <nav className="hidden lg:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map(item => (
            <div key={item.path} className="relative">
              <Link
                to={item.path}
                className={`text-lg font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary-tech'
                    : 'text-gray-800 hover:text-primary-tech'
                }`}
              >
                {item.label}
              </Link>
              
              {/* Active Link Underline */}
              {location.pathname === item.path && (
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-primary-tech rounded-full"></div>
              )}
            </div>
          ))}
        </nav>

        {/* ================= ACTION BUTTONS (RIGHT) ================= */}
        <div className="hidden lg:flex items-center space-x-8">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-tech/20 flex items-center justify-center">
                  <span className="text-primary-tech font-bold text-sm">
                    {user?.firstName?.charAt(0)}
                  </span>
                </div>
                <span className="text-primary-navy font-medium">
                  {user?.firstName}
                </span>
              </div>
           
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-primary-navy hover:text-primary-tech transition-colors"
              >
                <HiLogout className="text-lg" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-lg font-medium text-gray-800 hover:text-primary-tech transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-primary-tech hover:bg-primary-navy text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Join Now
              </Link>
            </>
          )}
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-800 hover:text-primary-tech p-2 transition-colors"
        >
          {open ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 shadow-lg">
          <div className="space-y-1">
            {navItems.map(item => (
              <div key={item.path} className="relative">
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block py-4 text-lg font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary-tech'
                      : 'text-gray-800 hover:text-primary-tech'
                  }`}
                >
                  {item.label}
                </Link>
                
                {/* Active Link Underline - Mobile */}
                {location.pathname === item.path && (
                  <div className="absolute bottom-3 left-0 right-0 h-1 bg-primary-tech rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 mt-4 border-t border-gray-200 space-y-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary-tech/20 flex items-center justify-center">
                    <span className="text-primary-tech font-bold">
                      {user?.firstName?.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary-navy">
                      {user?.firstName} {user?.lastName}
                    </div>
                    <div className="text-sm text-primary-navy">
                      {user?.role === 'student' ? 'Student' : 'Mentor'}
                    </div>
                  </div>
                </div>
                
          
                
                <button
                  onClick={handleLogout}
                  className="w-full py-3 text-center bg-primary-tech text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block py-3 text-center text-lg font-medium text-gray-800 hover:text-primary-tech border border-gray-300 rounded-lg transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="block py-3 text-center bg-primary-tech text-white text-lg font-semibold rounded-lg shadow-md hover:bg-primary-navy transition-colors"
                >
                  Join 
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;