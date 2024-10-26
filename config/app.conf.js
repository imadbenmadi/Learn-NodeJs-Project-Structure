const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5173/",
    "http://localhost:5174",
    "http://localhost:5174/",
    "http://api.flexedu-dz.com/",
    "http://api.flexedu-dz.com",
    "https://api.flexedu-dz.com/",
    "https://api.flexedu-dz.com",
    "https://dashboard.flexedu-dz.com/",
    "https://dashboard.flexedu-dz.com",
    "http://dashboard.flexedu-dz.com/",
    "http://dashboard.flexedu-dz.com",
    "https://flexedu-dz.com/",
    "https://flexedu-dz.com",
    "http://flexedu-dz.com/",
    "http://flexedu-dz.com",
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error(`Not allowed by CORS, origin: ${origin}`));
        }
    },
    optionsSuccessStatus: 200,
};
const appConfig = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
    corsOptions,
    allowedOrigins,
};
// module.exports = appConfig;
module.exports = { appConfig, corsOptions, allowedOrigins };
