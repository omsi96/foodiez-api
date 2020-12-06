const express = require("express");
const foodCategoryRouter = require("./FoodCategoryRouter");
const ingredientRouter = require("./ingredientRouter");
const recipeRouter = require("./RecipeRouter");
const router = express.Router();

router.use("/foodcategory", foodCategoryRouter);
router.use("/recipe", recipeRouter);
router.use("/ingredient", ingredientRouter);

router.get("/:id1/:id2", (req, res) => {
  res.json({ params: req.params });
});

module.exports = router;
