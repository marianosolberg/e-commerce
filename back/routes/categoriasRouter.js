const express = require('express');
const categoriaController = require('../controllers/categorias');
const router = express.Router();

router.post("/", categoriaController.create)

module.exports = router