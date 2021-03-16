const express = require("express");
const router = express.Router();
const productsRouter = require("./productsRouter");
const registerRouter = require("./registerRouter");
const loginRouter = require("./loginRouter");
const categoriasRouter = require("./categoriasRouter");
const shopRouter = require("./shopRouter");
const userRouter = require("./userRouter");
const carritoRouter = require("./carritoRouter");

<<<<<<< HEAD
router.use("/products", productsRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/categorias", categoriasRouter);
router.use("/shop", shopRouter);
router.use("/user", userRouter);
router.use("/carrito", carritoRouter);
=======
const adminRouter = require('./adminRouter')


router.use("/products", productsRouter)
router.use("/register", registerRouter)
router.use("/login", loginRouter)
router.use("/categorias", categoriasRouter)
router.use("/shop", shopRouter)

router.use("/admin", adminRouter)


>>>>>>> 492d2551986e56b494975a2d49402de3530ad73e

module.exports = router;
