const { User, Post, Comment, Channel } = require('../models');

// Get all posts with filters
const getPosts = async (req, res) => {
  try {
    const { channel, sort = 'new', page = 1, limit = 20 } = req.query;
    
    const whereClause = {};
    if (channel && channel !== 'all') {
      const channelData = await Channel.findOne({ where: { slug: channel } });
      if (channelData) {
        whereClause.channelId = channelData.id;
      }
    }

    let order = [];
    switch(sort) {
      case 'hot':
        order = [['voteScore', 'DESC']];
        break;
      case 'top':
        order = [['upvotes', 'DESC']];
        break;
      case 'new':
      default:
        order = [['createdAt', 'DESC']];
    }

    const offset = (page - 1) * limit;

    const posts = await Post.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'firstName', 'lastName', 'avatar', 'role']
        },
        {
          model: Channel,
          as: 'channel',
          attributes: ['id', 'name', 'slug']
        }
      ],
      order,
      limit: parseInt(limit),
      offset: offset,
      distinct: true
    });

    res.json({
      success: true,
      count: posts.count,
      posts: posts.rows,
      currentPage: parseInt(page),
      totalPages: Math.ceil(posts.count / limit)
    });
  } catch (error) {
    console.error('Get posts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get single post with comments
const getPost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByPk(id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'firstName', 'lastName', 'avatar', 'role']
        },
        {
          model: Channel,
          as: 'channel',
          attributes: ['id', 'name', 'slug']
        }
      ]
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    // Get comments
    const comments = await Comment.findAll({
      where: { postId: id, parentCommentId: null },
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'firstName', 'lastName', 'avatar', 'role']
        }
      ],
      order: [['voteScore', 'DESC'], ['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      post,
      comments
    });
  } catch (error) {
    console.error('Get post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Create post
const createPost = async (req, res) => {
  try {
    const { title, content, channelId, tags } = req.body;
    const authorId = req.user.id;

    // Check if channel exists
    const channel = await Channel.findByPk(channelId);
    if (!channel) {
      return res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
    }

    const post = await Post.create({
      title,
      content,
      authorId,
      channelId,
      tags: tags || []
    });

    // Update channel post count
    channel.postCount += 1;
    await channel.save();

    // Get post with author info
    const postWithDetails = await Post.findByPk(post.id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'firstName', 'lastName', 'avatar', 'role']
        },
        {
          model: Channel,
          as: 'channel',
          attributes: ['id', 'name', 'slug']
        }
      ]
    });

    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      post: postWithDetails
    });
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Vote on post
const votePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { voteType } = req.body; // 'upvote', 'downvote', or 'remove'
    const userId = req.user.id;

    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    switch(voteType) {
      case 'upvote':
        post.upvotes += 1;
        post.voteScore += 1;
        break;
      case 'downvote':
        post.downvotes += 1;
        post.voteScore -= 1;
        break;
      case 'remove':
        // Handle vote removal logic
        break;
    }

    await post.save();

    res.json({
      success: true,
      message: 'Vote recorded',
      votes: {
        upvotes: post.upvotes,
        downvotes: post.downvotes,
        score: post.voteScore
      }
    });
  } catch (error) {
    console.error('Vote post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Add comment
const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { content, parentCommentId } = req.body;
    const authorId = req.user.id;

    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    const comment = await Comment.create({
      content,
      authorId,
      postId,
      parentCommentId: parentCommentId || null
    });

    // Update post comment count
    post.commentCount += 1;
    await post.save();

    // Get comment with author info
    const commentWithAuthor = await Comment.findByPk(comment.id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'firstName', 'lastName', 'avatar', 'role']
        }
      ]
    });

    res.status(201).json({
      success: true,
      message: 'Comment added successfully',
      comment: commentWithAuthor
    });
  } catch (error) {
    console.error('Add comment error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get all channels
const getChannels = async (req, res) => {
  try {
    const channels = await Channel.findAll({
      order: [['memberCount', 'DESC']],
      limit: 10
    });

    res.json({
      success: true,
      channels
    });
  } catch (error) {
    console.error('Get channels error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Create channel (admin only)
const createChannel = async (req, res) => {
  try {
    const { name, description, isPrivate } = req.body;
    const createdBy = req.user.id;

    // Check if user is admin
    const user = await User.findByPk(req.user.id);
    if (user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Only admins can create channels'
      });
    }

    // Create slug from name
    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    const channel = await Channel.create({
      name,
      description,
      slug,
      createdBy,
      isPrivate: isPrivate || false
    });

    res.status(201).json({
      success: true,
      message: 'Channel created successfully',
      channel
    });
  } catch (error) {
    console.error('Create channel error:', error);
    res.status(500).json({
      success: false,
      message: error.message.includes('unique') ? 'Channel name already exists' : 'Server error'
    });
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  votePost,
  addComment,
  getChannels,
  createChannel
};