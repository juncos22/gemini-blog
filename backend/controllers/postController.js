
const Post = require('../models/post');

exports.getAllPosts = (req, res) => {
  const posts = Post.findAll();
  res.json(posts);
};

exports.getPostById = (req, res) => {
  const post = Post.findById(parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).send('Post not found');
  }
};

exports.createPost = (req, res) => {
  const newPost = Post.create(req.body);
  res.status(201).json(newPost);
};

exports.updatePost = (req, res) => {
  const updatedPost = Post.update(parseInt(req.params.id), req.body);
  if (updatedPost) {
    res.json(updatedPost);
  } else {
    res.status(404).send('Post not found');
  }
};

exports.deletePost = (req, res) => {
  const deleted = Post.delete(parseInt(req.params.id));
  if (deleted) {
    res.status(204).send(); // No Content
  } else {
    res.status(404).send('Post not found');
  }
};
