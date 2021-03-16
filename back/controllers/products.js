const Product = require("../models/Product");

const ProductController = {
  find(req, res) {
    const { titulo } = req.params;
    Product.find({ titulo: { $regex: `.*${titulo}`, $options: "i" } })
      .populate("categoria")
      .then((product) => res.send(product))
      .catch((e) => res.send(e));
  },
  findOne(req, res) {
    Product.findById({ _id: req.params.id })
      .populate("categoria")
      .then((product) => res.send(product))
      .catch((e) => res.send(e));
  },
  findAll(req, res) {
    Product.find()
      .populate("categoria")
      .then((products) => res.send(products))
      .catch((e) => res.send(e));
  },
  create(req, res) {
    Product.create(req.body)
      .then((product) => {
        console.log("PRODUCTO CREADO");
        return res.send(product);
      })
      .catch((e) => {
        console.log("producto no creado");
        res.send(e);
      });
  },
  update(req, res) {
    Product.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .populate("categoria")
      .then((product) => res.send(product))
      .catch((e) => res.send(e));
  },
  delete(req, res) {
    console.log("delet");
    res.sendStatus(200);
  },
};

module.exports = ProductController;
