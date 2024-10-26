const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { jwtSecret } = require("../config.keys");
const userRepository = require("../repositories/UserRepository");

exports.register = async (userData) => {
    userData.password = await bcrypt.hash(userData.password, 10);
    return userRepository.createUser(userData);
};

exports.login = async (email, password) => {
    const user = await userRepository.getUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1h" });
        return { token };
    }
    throw new Error("Invalid email or password");
};
