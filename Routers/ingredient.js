const express = require("express");
const { list, create, destory, update } = require("../controllers/ingredient");
const router = express.Router();

router.get("/", list);
router.put("/:id", update);
router.delete("/:id", destory);
router.get("/:id");

module.exports = router;
