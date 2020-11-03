const AuthController = {};
const User = require("../user/model");
const jwt = require("../../services/jwt");
const jwt2 = require("jsonwebtoken");

// >> Here will be the
// endpoints for the Users.

AuthController.getToken = (req, res) => {
    User.model.findOne(
        {username: req.body.username}, (err, Users) =>{
            if (err) return res.status(500).send(err)
            if(Users.comparePassword(req.body.password)) {
                const token = jwt.tokenGenerator(req.body.username);
                res.json({
                    access_token: token,
                    expiresIn: jwt2.decode(token).exp,
                });
            } else {
                res.status(401).send("Unauthorized (401)");
            }

        }

    );
}

module.exports = AuthController;
