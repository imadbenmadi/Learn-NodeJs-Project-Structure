const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { corsOptions } = require("../config.conf");
const credentials = require("./credentials.middleware");
const requestLogger = require("..middleware");
const errorHandler = require("./ErrorHandler.middleware");
const authMiddleware = require("./Auth.middleware");

module.exports = (app) => {
    app.use(express.json());
    app.use(requestLogger);
    app.use(authMiddleware);
    app.use(errorHandler);
    app.use(cookieParser());
    app.use(credentials);
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};
