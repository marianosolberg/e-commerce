const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  num_paginas: {
    type: Number,
    required: true
  },
  edicion: {
    type: Number,
    required: true
  },
  editorial: {
    type: String,
    required: true
  },
  reseqna: {
    type: String, 
    required: true
  },
  precio: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', schema);

module.exports = Product;