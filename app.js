const express = require("express");
const db = require("./db/models");
const cors = require("cors");
const app = express();
const { FoodCategory, Ingredient } = require("./db/models");
const CrudController = require("./crud/crudController");
const CrudRouter = require("./crud/CRUDRouter");

app.use(cors());
// You don't need to add body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  "/foodcategory",
  new CrudRouter(new CrudController(FoodCategory, "FoodCategory"))
);
app.use(
  "/ingredients",
  new CrudRouter(new CrudController(Ingredient, "Ingredient"))
);

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
