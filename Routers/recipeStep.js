const express = require("express");
const { list, create, destory, update } = require("../controllers/recipeStep");
const router = express.Router();

router.get("/", list);
router.post("/create", create);
router.put("/:id", update);
router.delete("/:id", destory);
router.get("/:id");

module.exports = router;
