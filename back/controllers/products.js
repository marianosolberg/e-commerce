const Product = require('../models/Product')

const ProductController = {
    findAll(req, res){
        Product.find()
        .then(products => res.send(products))
    },
    create(req, res){
        console.log(req.body)
        Product.create(req.body)
        .then(product => {
            console.log("PRODUCTO CREADO")
            return res.send(product)
        })
    }
}

module.exports = ProductController;