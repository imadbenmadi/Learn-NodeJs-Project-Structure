const cron = require("node-cron");

const cleanUpData = () => {
    console.log("Running data clean-up job");
    // Logic for cleaning up old data
};

cron.schedule("0 0 * * SUN", cleanUpData); // Runs every Sunday at midnight

module.exports = cleanUpData;
