const express = require('express');
const checkJWT = require("../middlewareAuthJWT/jwt")
const router = express.Router();
const adminController = require('../controllers/admin')

router.post("/login", adminController.find)

module.exports = router