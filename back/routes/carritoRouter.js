const express = require("express");
const carritoController = require("../controllers/carrito");
const router = express.Router();

router.post("/", carritoController.create);
router.get("/", carritoController.findAll);

module.exports = router;
