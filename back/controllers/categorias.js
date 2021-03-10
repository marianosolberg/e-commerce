const Categoria = require("../models/Categorias")

const categoriaController = {
    create(req, res) {
        Categoria.create(req.body)
        .then(categoria => res.send(categoria))
    }
}

module.exports = categoriaController