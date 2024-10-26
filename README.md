# Learn-NodeJs-Project-Structure

npm install express express-session dotenv mysql2 sequelize redis bcryptjs jsonwebtoken ejs body-parser express-validator multer winston morgan joi cron node-cron

1-Controller: Handles route requests, receives input, calls the relevant service, and sends a response.
2-Service: Applies business logic and aggregates data, calling repositories to interact with the database.
3-Repository: Interacts with the database, performing CRUD operations and returning data to the service layer.
