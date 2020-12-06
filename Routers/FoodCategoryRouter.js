const express = require("express");
const CRUDController = require("../crud/CRUDController");
const CRUDRouter = require("../crud/CRUDRouter");
const { FoodCategory, Ingredient } = require("../db/models");

const foodCategoryController = new CRUDController(
  FoodCategory,
  "FoodCategory",
  {
    include: [
      {
        model: Ingredient,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    ],
  }
);

const foodCategoryRouter = new CRUDRouter(foodCategoryController);

module.exports = foodCategoryRouter;
