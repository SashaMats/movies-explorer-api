const usersRouter = require('express').Router();
const { getUser, refreshUser } = require('../controllers/users');
const { emailPassUserValidation } = require('../utils/validation');

usersRouter.get('/me', getUser);
usersRouter.patch('/me', emailPassUserValidation, refreshUser);

module.exports = usersRouter;
