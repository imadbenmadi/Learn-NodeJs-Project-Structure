module.exports = {
    jwtSecret: process.env.JWT_SECRET || "your_jwt_secret_key",
    encryptionKey: process.env.ENCRYPTION_KEY || "encryption_key",
};
