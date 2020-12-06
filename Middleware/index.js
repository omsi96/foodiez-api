const express = require("express");
const cors = require("cors");

const router = express.Router();
router.use(cors());
// You don't need to add body parser
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

module.exports = router;
