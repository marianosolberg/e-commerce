const Categoria = require("../models/Categorias");

const categoriaController = {
  create(req, res) {
    Categoria.create(req.body).then((categoria) => res.send(categoria));
  },
  findAll(req, res) {
    Categoria.find().then((categorias) => res.send(categorias));
  },
};

module.exports = categoriaController;
