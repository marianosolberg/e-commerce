const User = require('../models/User');

const loginController = {
    find(req, res){
        User.findOne({nombre : req.body.nombre})
        .then(user => res.send(user)) //ACA FALTA VALIDACION PORQUE SEA NULL O UN USER IGUAL ENTRA AL RES.SEND
        .catch(e => res.sendStatus(401))
    }
}

module.exports = loginController