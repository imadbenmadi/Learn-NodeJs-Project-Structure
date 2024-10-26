const express = require("express");
const authRoutes = require("./Auth.routes");
const dashboardRoutes = require("./Dashboard.routes");
const userRoutes = require("./User.routes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/user", userRoutes);

module.exports = router;
