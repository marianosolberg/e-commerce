const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const schema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'El formato del email no es correcto'],
    validate: {
        validator: function(v){
            return this.model('User').findOne({ email: v }).then(user => !user)
        },
        message: props => `${props.value} Ya existe un usuario con ese email`
    },
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
  },
  salt: {
    type: String,
  },
});

const User = mongoose.model("User", schema);

User.prototype.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  this.salt = salt;
  return bcrypt.hash(password, this.salt);
};

User.prototype.validPassword = async function (passwordEnLogin) {
  return this.password === (await bcrypt.hash(passwordEnLogin, this.salt));
};

module.exports = User;
