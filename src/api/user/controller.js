const UserController = {};
const User = require("./model");

// >> Here will be the
// endpoints for the Users.
UserController.getUser = (req, res) => {
    User.model.find(
        {username: req.body.username}, (err, Users) =>{
            if (err) return res.status(500).send(err)
            res.json(Users);
        }
    );
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