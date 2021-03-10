const User = require("../models/User");
const nodemailer = require("nodemailer");
// email sender function

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "diego.jofre@bue.edu.ar",
    pass: "Bb1234567890",
  },
});
// Definimos el email
// const mailOptions = {
//   from: "diego.jofre@bue.edu.ar",
//   to: "diego-jofre@live.com.ar",
//   subject: "Mensaje de eBooks",
//   text: "¡eBooks te da la bienvenida!",
// };


const registerController = {
  create(req, res) {
    const { nombre, password, email } = req.body;
    User.create(req.body)
      .then((user) => res.send(user))
      .then(() => {
        // Enviamos el email
        transporter.sendMail(
          {
            from: "diego.jofre@bue.edu.ar",
            to: email,
            subject: "Mensaje de eBooks",
            text: "¡eBooks te da la bienvenida!",
          },
          function (error, info) {
            if (error) {
              console.log(error);
              res.send(500, err.message);
            } else {
              console.log("Email sent");
              res.status(200).jsonp(req.body);
            }
          }
        );
      })
      .catch((e) => res.send(e));
  },
};

module.exports = registerController;
