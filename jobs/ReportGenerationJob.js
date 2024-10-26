const cron = require("node-cron");

const generateReport = () => {
    console.log("Generating report...");
    // Logic to generate and send the report
};

cron.schedule("0 0 1 * *", generateReport); // Runs on the 1st of each month

module.exports = generateReport;
