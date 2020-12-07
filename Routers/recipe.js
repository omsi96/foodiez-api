const express = require("express");
const { list, create, destory, update } = require("../controllers/recipe");
const router = express.Router();

router.get("/", list);
router.post("/create", create);
router.put("/:id", update);
router.delete("/:id", destory);

// Ingredients
router.post("/:id/ingredients/add");
router.delete("/:id/ingredients/:ingredientId");

module.exports = router;
