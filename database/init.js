const sequelize = require("./Mysql.database");
const redisClient = require("./Redis.database");

module.exports = {
    sequelize,
    redisClient,
};
