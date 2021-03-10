const express = require('express');
const ProductController = require('../controllers/products');
const router = express.Router();
const ProductsController = require("../controllers/products");

router.get("/", ProductsController.findAll)
router.get("/:id", ProductsController.findOne)
router.post("/delete/:id/", ProductController.delete)
router.put("/:id", ProductController.update)
router.post("/", ProductsController.create)

module.exports = router