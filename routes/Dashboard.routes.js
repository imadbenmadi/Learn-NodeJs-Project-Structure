const express = require("express");
const dashboardController = require("../controllers/Dashboard.controller");

const router = express.Router();

router.get("/", dashboardController.getDashboard);

module.exports = router;
