const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const schema  = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true
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

User.prototype.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

User.prototype.validPassword = async (passwordEnLogin) => {
  return this.password === await this.encryptPassword(passwordEnLogin)
} 

module.exports = User;