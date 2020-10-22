const router = require('express').Router();
const UserController = require('./controller');


const path = '/users';

// >> Here will be the
// definition of the routes.
router.get('', UserController.getUser);
router.post('', UserController.postUser);
router.put('', UserController.putUser);
router.delete('', UserController.deleteUser);

module.exports = {
  path,
  router,
}