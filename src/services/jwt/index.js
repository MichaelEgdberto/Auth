const { jwtSecret } = require('../../config');
const jwt = require('jsonwebtoken');


// >> Here is where login
// and verification functions will be declared

const tokenGenerator = (username) => {
    return jwt.sign({
        username,
        exp: Date.now() + 1800 * 60,
    },
        jwtSecret
    );
}


module.exports = {
    tokenGenerator,
}
