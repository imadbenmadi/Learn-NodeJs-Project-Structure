const mysql = require("mysql2/promise");
const dbConfig = require("../config/db.conf");

const pool = mysql.createPool(dbConfig);

module.exports = pool;
