const express = require("express");
const foodCategoryRouter = require("./foodCategory");
const ingredientRouter = require("./ingredient");
const recipeRouter = require("./recipe");
const recipeStepRouter = require("./recipeStep");

const router = express.Router();
router.use("/foodcategory", foodCategoryRouter);
router.use("/ingredient", ingredientRouter);
router.use("/recipe", recipeRouter);
router.use("/recipeStep", recipeStepRouter);

module.exports = router;
