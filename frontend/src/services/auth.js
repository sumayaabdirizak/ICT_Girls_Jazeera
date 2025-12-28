import api from './api';

const authService = {
  // Register user
  register: (userData) => {
    return api.post('/auth/register', userData);
  },

  // Login user
  login: (email, password) => {
    return api.post('/auth/login', { email, password });
  },

  // Get current user
  getMe: () => {
    return api.get('/auth/me');
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return api.post('/auth/logout');
  },

  // Update user profile
  updateProfile: (userData) => {
    return api.put('/auth/profile', userData);
  }
};

export default authService;