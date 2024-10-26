const User = require("../models/User.model");

exports.getAllUsers = async () => User.findAll();

exports.getUserById = async (id) => User.findByPk(id);

exports.createUser = async (userData) => User.create(userData);

exports.updateUser = async (id, userData) => {
    const user = await User.findByPk(id);
    return user ? user.update(userData) : null;
};

exports.deleteUser = async (id) => {
    const user = await User.findByPk(id);
    return user ? user.destroy() : null;
};
