const usersRouter = require('./users');
const signinRouter = require('./signin');
const signupRouter = require('./signup');
const moviesRouter = require('./movies');

const indexRouter = {
  usersRouter,
  signinRouter,
  signupRouter,
  moviesRouter,
};
module.exports = indexRouter;
