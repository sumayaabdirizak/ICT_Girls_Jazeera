import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiMail, HiKey, HiEye, HiEyeOff } from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';

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
  
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate(from, { replace: true });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Logo/Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-tech/10 mb-4">
            <HiKey className="text-primary-tech text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-primary-navy">
            Welcome Back
          </h1>
          <p className="text-primary-navy mt-2">
            Sign in to your ICT Girls account
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white border border-primary-tech/10 rounded-2xl p-8">
          {authError && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{authError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiMail className="text-primary-navy/60" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-primary-tech/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-tech focus:border-transparent text-primary-navy"
                  placeholder="student@aljazeera.edu"
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
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiKey className="text-primary-navy/60" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 border border-primary-tech/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-tech focus:border-transparent text-primary-navy"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <HiEyeOff className="text-primary-navy/60 hover:text-primary-tech" />
                  ) : (
                    <HiEye className="text-primary-navy/60 hover:text-primary-tech" />
                  )}
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
                className="h-4 w-4 text-primary-tech focus:ring-primary-tech border-primary-tech/30 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-primary-navy">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-tech hover:bg-primary-navy text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary-tech/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-primary-navy">
                  New to ICT Girls?
                </span>
              </div>
            </div>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <Link
              to="/register"
              className="text-primary-tech hover:text-primary-navy font-semibold"
            >
              Create an account
            </Link>
          </div>
        </div>

        {/* Demo Credentials (Remove in production) */}
        <div className="mt-8 p-4 bg-primary-tech/5 rounded-lg border border-primary-tech/10">
          <h3 className="text-sm font-semibold text-primary-navy mb-2">
            Demo Credentials (Development only)
          </h3>
          <div className="text-xs text-primary-navy space-y-1">
            <p>Email: student@aljazeera.edu</p>
            <p>Password: password123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;