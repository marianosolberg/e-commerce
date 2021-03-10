const User = require("../models/User");
const transporter = require("./mailCtrl")
// email sender function

const registerController = {
  create(req, res) {
    const { nombre, password, email } = req.body;
    User.create(req.body)
      .then((user) => res.send(user))
      .then(() => {
        // Enviamos el email
        transporter.sendMail(
          {
            from: "equipo.ebooks@gmail.com",
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
