const postService = require("../services/PostService");

exports.getAllPosts = async (req, res) => {
    const posts = await postService.getAllPosts();
    res.json(posts);
};

exports.createPost = async (req, res) => {
    const newPost = await postService.createPost(req.body);
    res.status(201).json(newPost);
};

exports.getPostById = async (req, res) => {
    const post = await postService.getPostById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
};
