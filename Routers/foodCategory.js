const express = require("express");
const {
  list,
  create,
  destory,
  update,
} = require("../controllers/foodCategory");
const { create: createIngredient } = require("../controllers/ingredient");
const router = express.Router();

router.get("/", list);
router.post("/create", create);
router.put("/:id", update);
router.delete("/:id", destory);
router.get("/:id");

// Ingredients
router.post("/:foodCategoryId/create", createIngredient);

module.exports = router;
