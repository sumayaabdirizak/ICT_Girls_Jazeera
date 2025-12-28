const express = require('express');
const router = express.Router();
const communityController = require('../controllers/community.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Public routes
router.get('/posts', communityController.getPosts);
router.get('/posts/:id', communityController.getPost);
router.get('/channels', communityController.getChannels);

// Protected routes (require login)
router.post('/posts', authMiddleware, communityController.createPost);
router.post('/posts/:id/vote', authMiddleware, communityController.votePost);
router.post('/posts/:postId/comments', authMiddleware, communityController.addComment);

// Admin only routes
router.post('/channels', authMiddleware, communityController.createChannel);

module.exports = router;