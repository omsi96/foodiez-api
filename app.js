const express = require("express");
const db = require("./db/models");
const app = express();
const { FoodCategory } = require("./db/models");

// Routes
app.get("/categories", async (req, res) => {
  try {
    const categories = await FoodCategory.findAll();
    res.json(categories);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
