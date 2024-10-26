const express = require("express");
const requestLogger = require("./App.middleware");
const errorHandler = require("./ErrorHandler.middleware");
const authMiddleware = require("./Auth.middleware");

module.exports = (app) => {
    app.use(express.json());
    app.use(requestLogger);
    app.use(authMiddleware);
    app.use(errorHandler);
};
