const router = require('express').Router();
const UserController = require('./controller');
const {authenticate} = require('../../services/middlewares');


const path = '/users';

// >> Here will be the
// definition of the routes.
router.get('/me',authenticate, UserController.getUser);
router.post('/creater', UserController.postUser);
router.put('', UserController.putUser);
router.delete('', UserController.deleteUser);

module.exports = {
  path,
  router,
}