const signupRouter = require('express').Router();
const { createUser } = require('../controllers/users');
const { emailPassUserValidation } = require('../utils/validation');

signupRouter.post('/', emailPassUserValidation, createUser);

module.exports = signupRouter;
