// frontend/src/pages/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  HiUser,
  HiMail,
  HiKey,
  HiEye,
  HiEyeOff,
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import heroImage from '../assets/images/waa1.jpg';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    role: 'student',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { register, error: authError } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const validateForm = () => {
    const e = {};
    if (!formData.firstName.trim()) e.firstName = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    if (formData.password.length < 6)
      e.password = 'Password must be at least 6 characters';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    const result = await register(formData);
    setIsLoading(false);

    if (result.success) navigate('/dashboard');
    else setErrors({ api: result.message || 'Registration failed.' });
  };

  return (
    <div className="flex min-h-screen w-full my-0">
      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={heroImage}
          alt="Somali girls coding together"
          className="h-full w-full object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-xl"> {/* 👈 WIDER */}

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
          
            <h1 className="text-4xl md:text-5xl font-black text-primary-navy">
              Join ICT Girls
            </h1>

       
          </motion.div>

          {/* ROLE TOGGLE */}
          <div className="mb-12">
            <label className="block font-semibold text-primary-navy mb-4">
              I want to join as:
            </label>
            <div className="grid grid-cols-2 gap-4">
              {['student', 'mentor'].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, role }))}
                  className={`py-4 rounded-2xl text-lg font-medium transition ${
                    formData.role === role
                      ? 'bg-gradient-to-r from-primary-tech to-primary-navy text-white shadow-lg'
                      : 'bg-white border border-primary-tech/30 text-primary-navy hover:shadow'
                  }`}
                >
                  {role === 'student' ? 'Student' : 'Mentor'}
                </button>
              ))}
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-7">
            {(authError || errors.api) && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-center text-sm text-red-700">
                {authError || errors.api}
              </div>
            )}

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <div className="relative">
                <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full pl-12 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary-tech"
                  placeholder="Your full name"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary-tech"
                  placeholder="student@aljazeera.edu"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <HiKey className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary-tech"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </button>
              </div>
            </div>

            {/* SUBMIT */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              type="submit"
              disabled={isLoading}
              className="w-full h-14 rounded-full bg-gradient-to-r from-primary-tech to-primary-navy text-white text-lg font-bold shadow-lg"
            >
              {isLoading ? 'Creating account...' : 'Join ICT Girls'}
            </motion.button>
          </form>

          <p className="my-10 text-center  text-primary-navy/80">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-tech font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
