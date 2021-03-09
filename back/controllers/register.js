const User = require("../models/User");

const registerController = {
    create(req, res){
        User.create(req.body)
        .then(user => res.send(user))
        .catch(e => res.send(e))
    }

}

module.exports = registerController