// server.js
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const initConfig = require("./config/init");
const initDatabase = require("./database/init");
const AppRoutes = require("./routes.routes");

// Register routes

const path = require("path");
const initializeMiddleware = require("./middleware/init");
const appRoutes = require("./routes.routes");
const { initializeDirectories } = require("./helpers/Directory.helper");

dotenv.config();

// Initialize configurations
initConfig(app);

// Initialize database
initDatabase();
// Initialize directories, middleware, and routes
initializeDirectories();
initializeMiddleware(app);
app.use("/", express.static(path.join(__dirname, "/public")));
app.use(appRoutes);
app.use("/api", AppRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("Hello from flexEducation");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
