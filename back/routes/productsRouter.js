const express = require('express');
const router = express.Router();
const ProductsController = require("../controllers/products");

router.get("/", ProductsController.findAll)
router.post("/", ProductsController.create)


module.exports = router