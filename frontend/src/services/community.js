import api from './api';

const communityService = {
  // Posts
  getPosts: (params) => {
    return api.get('/community/posts', { params });
  },

  getPost: (id) => {
    return api.get(`/community/posts/${id}`);
  },

  createPost: (postData) => {
    return api.post('/community/posts', postData);
  },

  votePost: (postId, voteType) => {
    return api.post(`/community/posts/${postId}/vote`, { voteType });
  },

  // Comments
  addComment: (postId, commentData) => {
    return api.post(`/community/posts/${postId}/comments`, commentData);
  },

  // Channels
  getChannels: () => {
    return api.get('/community/channels');
  },

  createChannel: (channelData) => {
    return api.post('/community/channels', channelData);
  }
};

export default communityService;