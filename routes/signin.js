const signinRouter = require('express').Router();
const { login } = require('../controllers/users');
const { emailPassUserValidation } = require('../utils/validation');

signinRouter.post('/', emailPassUserValidation, login);

module.exports = signinRouter;
