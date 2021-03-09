const express = require('express');
const router = express.Router();
const productsRouter = require('./productsRouter')
const registerRouter = require('./registerRouter')
const loginRouter = require('./loginRouter')

router.use("/", productsRouter)
router.use("/register", registerRouter)
router.use("/login", loginRouter)

module.exports = router