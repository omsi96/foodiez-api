const CRUDController = require("../crud/CRUDController");
const CRUDRouter = require("../crud/CRUDRouter");
const { FoodCategory, Ingredient } = require("../db/models");
const express = require("express");
const router = express.Router();

router.use(
  "",
  new CRUDRouter(
    new CRUDController(Ingredient, "Ingredient", {
      include: [{ model: FoodCategory, attributes: ["name"] }],
    })
  )
);

module.exports = router;
