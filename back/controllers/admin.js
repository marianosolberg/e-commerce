const User = require("../models/User");

const adminController = {
    findUsers(req, res) {
        User.find()
        .then(users => res.send(users).status(200))
        .catch(e => res.send(e).status(400))
    },
    deleteUser(req, res) {
        User.findOneAndDelete({_id: req.params.id})
        .then(res.sendStatus(200))
        .catch(e => res.send(e))
    }, 
    update(req, res) {
        User.findByIdAndUpdate( {_id: req.params.id}, req.body)
        .then(user => res.send(user))
    }
}

module.exports = adminController