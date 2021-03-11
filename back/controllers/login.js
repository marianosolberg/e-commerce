const jwt = require('jsonwebtoken');
const User = require('../models/User');

const loginController = {
    find(req, res){
        User.findOne({email : req.body.email})
        .then((user) => {
            if(!user) {
                return res.status(400).send("usuario no existente")
            }
        
            if(!user.validPassword(req.body.password)) {
                return res.status(401).send("invalid credentials")
            }

            const token = jwt.sign({ _id: user._id }, "ebook")
            console.log(token)
            return res.status(200).json({ token, user })

        }) //ACA FALTA VALIDACION PORQUE SEA NULL O UN USER IGUAL ENTRA AL RES.SEND
        //.catch(e => res.sendStatus(401))
    }
}

module.exports = loginController