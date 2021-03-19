const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        unique: true, 
        default: "general"

    }
})

const Categoria = mongoose.model('Categoria', schema);

module.exports = Categoria;