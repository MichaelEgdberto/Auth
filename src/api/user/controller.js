const UserController = {};
const User = require("./model");

// >> Here will be the
// endpoints for the Users.
UserController.getUser = (req, res) => {
}
UserController.postUser = (req, res) => {
    User.model.create(req.body);
    res.json(req.body);

}

UserController.putUser = (req, res) => {
}

UserController.deleteUser = (req, res) => {
}

 module.exports = UserController;