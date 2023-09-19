const usersRouter = require('express').Router();
const { getUser, refreshUser } = require('../controllers/users');
const { emailNameUserValidation } = require('../utils/validation');

usersRouter.get('/me', getUser);
usersRouter.patch('/me', emailNameUserValidation, refreshUser);

module.exports = usersRouter;
