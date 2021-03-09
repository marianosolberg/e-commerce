const mongoose = require("mongoose");

const schema  = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
  },
  telefono: {
    type: Number,
  },
  localidad: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
});

const User = mongoose.model("User", schema);

module.exports = User;