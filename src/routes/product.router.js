const express = require("express");
const router = express.Router();

const { post, postMany } = require("../controllers/product.controller");

const upload = require("../utils/file-upload");

// routes start from here
router.post("/", upload.single("productImages"), post);
router.post("/many", upload.array("productImages", 2), postMany);

module.exports = router;
