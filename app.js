const express = require("express");
const db = require("./db/models");
const cors = require("cors");
const app = express();
const routers = require("./Routers");
app.use(cors());
// You don't need to add body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routers);

// START SERVER
const run = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
