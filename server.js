// server.js
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const initConfig = require("./config/init");
const initDatabase = require("./database/init");
const AppRoutes = require("./routes/App.routes");

// Load environment variables
dotenv.config();

// Initialize configurations
initConfig(app);

// Initialize database
initDatabase();

// Register routes
app.use("/api", AppRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
