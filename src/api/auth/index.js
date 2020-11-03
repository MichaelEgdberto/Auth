const router = require('express').Router();
const AuthController = require('./controller');
const path = '/auth';


// >> Here will be the
// definition of the routes.
router.get('/login', AuthController.getToken);
router.post('', AuthController.getToken);
router.put('', AuthController.getToken);
router.delete('', AuthController.getToken);


module.exports = {
  path,
  router,
}
