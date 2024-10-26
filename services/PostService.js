const postRepository = require("../repositories/PostRepository");

exports.getAllPosts = async () => postRepository.getAllPosts();

exports.createPost = async (postData) => postRepository.createPost(postData);

exports.getPostById = async (id) => postRepository.getPostById(id);
