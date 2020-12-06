const express = require("express");
const CRUDController = require("../crud/crudController");
const CRUDRouter = require("../crud/CRUDRouter");
const { Recipe } = require("../db/models");
const router = express.Router();

const recipeController = new CRUDController(Recipe, "Recipe");
const recipeRouter = new CRUDRouter(recipeController);
module.exports = recipeRouter;
