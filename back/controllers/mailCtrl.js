const nodemailer = require("nodemailer"); // email sender function
exports.sendEmail = function (req, res) {
  // nodemailer stuff will go here
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "example@gmail.com",
    pass: "password",
  },
});

var mailOptions = {
  from: "Remitente",
  to: "destinatario@gmail.com",
  subject: "Asunto",
  text: "Contenido del email",
};
