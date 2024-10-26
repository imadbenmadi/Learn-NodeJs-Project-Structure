const Post = require("../models/Post.model");

exports.getAllPosts = async () => Post.findAll();

exports.createPost = async (postData) => Post.create(postData);

exports.getPostById = async (id) => Post.findByPk(id);
