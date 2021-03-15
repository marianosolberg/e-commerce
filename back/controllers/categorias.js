const Categoria = require("../models/Categorias")

const categoriaController = {
    create(req, res) {
        Categoria.create(req.body)
        .then(categoria => res.send(categoria))
    }, 
    findAll(req, res) {
        Categoria.find()
        .then(categorias => res.send(categorias))
    },
    update(req, res) {
        Categoria.findOneAndUpdate({name: req.params.name}, req.body)
        .then(categoria => res.send(categoria))
        .catch(e => res.status(400).send(e))
    },
    delete(req, res) {
        Categoria.deleteOne({name: req.params.name})
        .then(() => res.sendStatus(200))
        .catch(e => res.send(e))
    }

}

module.exports = categoriaController