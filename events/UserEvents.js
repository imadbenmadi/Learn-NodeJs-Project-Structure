const EventEmitter = require("events");
const userEvents = new EventEmitter();

userEvents.on("userCreated", (user) => {
    console.log(`User created: ${user.username}`);
});

module.exports = userEvents;
