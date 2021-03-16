const express = require('express');
const router = express.Router();
const productsRouter = require('./productsRouter')
const registerRouter = require('./registerRouter')
const loginRouter = require('./loginRouter')
const categoriasRouter = require('./categoriasRouter')
const shopRouter = require('./shopRouter')
const adminRouter = require('./adminRouter')

router.use("/products", productsRouter)
router.use("/register", registerRouter)
router.use("/login", loginRouter)
router.use("/categorias", categoriasRouter)
router.use("/shop", shopRouter)
router.use("/admin", adminRouter)


module.exports = router