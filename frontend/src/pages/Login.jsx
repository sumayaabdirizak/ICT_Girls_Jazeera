// frontend/src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  HiMail, 
  HiKey,
  HiEye,
  HiEyeOff
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import heroImage from '../assets/images/waa1.jpg'; // your empowering image

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login, error: authError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await login(formData.email, formData.password);

    setIsLoading(false);

    if (result.success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left side - Image (hidden on mobile) */}
      <div className="w-full md:w-1/2 hidden md:block">
        <img
          className="h-full w-full object-cover"
          src={heroImage}
          alt="Somali girls coding together"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full max-w-md flex flex-col items-center">
          {/* Header with pulse badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
         

            <h1 className="text-4xl md:text-5xl font-black text-primary-navy leading-tight">
              Sign In to ICT Girls
            </h1>

          
          </motion.div>

          {/* Google Sign-In Button (placeholder) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="w-full mt-6 bg-white flex items-center justify-center h-12 rounded-full border border-primary-navy/20 hover:border-primary-tech hover:shadow-md transition-all duration-300"
          >
            <img 
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" 
              alt="Google" 
              className="h-6" 
            />
            <span className="ml-3 text-primary-navy font-medium">Sign in with Google</span>
          </motion.button>

          {/* Divider */}
          <div className="flex items-center gap-4 w-full my-8">
            <div className="flex-grow h-px bg-primary-navy/10"></div>
            <p className="text-sm text-primary-navy/70 whitespace-nowrap">or sign in with email</p>
            <div className="flex-grow h-px bg-primary-navy/10"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-7">
            {/* Error Message */}
            {authError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm text-center"
              >
                {authError}
              </motion.div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-2">
                 Email
              </label>
              <div className="relative">
                <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-navy/60 text-xl" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 bg-white/80 border border-primary-navy/20 rounded-full focus:outline-none focus:border-primary-tech focus:ring-2 focus:ring-primary-tech/30 transition-all duration-300`}
                  placeholder="student@aljazeera.edu"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-primary-navy">
                  Password
                </label>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-primary-tech hover:text-primary-navy"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <HiKey className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-navy/60 text-xl" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-12 py-4 bg-white/80 border border-primary-navy/20 rounded-full focus:outline-none focus:border-primary-tech focus:ring-2 focus:ring-primary-tech/30 transition-all duration-300`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-primary-navy/60 hover:text-primary-tech"
                >
                  {showPassword ? <HiEyeOff className="text-xl" /> : <HiEye className="text-xl" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-5 w-5 text-primary-tech focus:ring-primary-tech border-primary-navy/30 rounded"
              />
              <label htmlFor="rememberMe" className="ml-3 block text-sm text-primary-navy">
                Remember me
              </label>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="mt-8 w-full h-12 rounded-full text-white bg-gradient-to-r from-primary-tech to-primary-navy hover:from-primary-tech/90 hover:to-primary-navy/90 transition-all duration-300 font-bold shadow-lg disabled:opacity-60"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </motion.button>
          </form>

          {/* Register link */}
          <p className="mt-10 text-center text-sm text-primary-navy/80">
            New to ICT Girls?{' '}
            <Link to="/register" className="text-primary-tech font-semibold hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;