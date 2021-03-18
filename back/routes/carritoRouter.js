const express = require("express");
const carritoController = require("../controllers/carrito");
const router = express.Router();

router.put("/", carritoController.create);
router.get("/", carritoController.findAll);

module.exports = router;
