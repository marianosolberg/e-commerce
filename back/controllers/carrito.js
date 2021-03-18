const Carrito = require("../models/Carrito");

const carritoController = {
  create(req, res) {
    console.log(req.body);

    console.log("librooooooooooooo", req.body.carritoCompras);
    if (req.body.userId) {
      Carrito.findOneAndUpdate(
        { user: req.body.userId },
        {$addToSet:{ producto: req.body.carritoCompras }}
      )
      .then((carrito) => res.send(carrito));
    } else {
      if (typeof req.body.carrito == "string") {
        Carrito.find({ user: req.body.carrito })
          .then((carrito) => {
            if (carrito.length === 0) {
              return Carrito.create({ user: req.body.carrito }).then(
                (carrito) => {
                  res.send(carrito);
                }
              );
            }
            res.send(carrito);
          })
          .catch((e) => console.log(e));
      }
    }

    /* if (Array.isArray(req.body.carrito)) {
     
      console.log(req.body.carrito);
      const { carrito } = req.body;
      Carrito.create({ producto: carrito }).then((carrito) =>
        res.send(carrito)
      );
    } */
  },

  findAll(req, res) {
    Carrito.find()
      .populate("producto")
      .populate("user")
      .then((carrito) => res.send(carrito));
  },
};

module.exports = carritoController;
