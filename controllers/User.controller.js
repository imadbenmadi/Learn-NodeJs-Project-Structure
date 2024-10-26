const userService = require("../services/UserService");

exports.getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
};

exports.getUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
};

exports.createUser = async (req, res) => {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
};

exports.updateUser = async (req, res) => {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.json(updatedUser);
};

exports.deleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.status(204).end();
};
