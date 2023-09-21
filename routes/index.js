const router = require('express').Router();
const signinRouter = require('./signin');
const signupRouter = require('./signup');
const moviesRouter = require('./movies');
const usersRouter = require('./users');
const { auth } = require('../middlewares/auth');

router.use('/signin', signinRouter);
router.use('/signup', signupRouter);

router.use(auth);

router.use('/movies', moviesRouter);
router.use('/users', usersRouter);

module.exports = router;
