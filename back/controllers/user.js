const User = require("../models/User");

const UserController = {
    find(req, res){
        User.find()
        .then(users => res.send(users).status(200))
        .catch(e => res.send(e).status(400))
    },
    put(req, res){
        User.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(user => res.send(user).status(200))
        .catch( e => res.send(e).status(500))
    }
}

module.exports = UserController;
