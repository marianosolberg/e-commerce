const Carrito = require("../models/Carrito");

const carritoController = {
  create(req, res) {
    Carrito.create(req.body).then((carrito) => res.send(carrito));
  },
  findAll(req, res) {
    Carrito.find()
      .populate("producto")
      .populate("user")
      .then((carrito) => res.send(carrito));
  },
};

module.exports = carritoController;
