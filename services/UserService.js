const userRepository = require("../repositories/UserRepository");

exports.getAllUsers = async () => userRepository.getAllUsers();

exports.getUserById = async (id) => userRepository.getUserById(id);

exports.createUser = async (userData) => userRepository.createUser(userData);

exports.updateUser = async (id, userData) =>
    userRepository.updateUser(id, userData);

exports.deleteUser = async (id) => userRepository.deleteUser(id);
