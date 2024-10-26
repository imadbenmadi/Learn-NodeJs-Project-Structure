const logger = require("../utils/Logger.util");

function requestLogger(req, res, next) {
    logger.info(`${req.method} ${req.url}`);
    next();
}

module.exports = requestLogger;
