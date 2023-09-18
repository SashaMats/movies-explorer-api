const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const usersRouter = require('./routes/users');
const signinRouter = require('./routes/signin');
const signupRouter = require('./routes/signup');
const { auth } = require('./middlewares/auth');
const moviesRouter = require('./routes/movies');
const { checkError } = require('./middlewares/checkError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000, DB_ADRESS = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

mongoose.connect(DB_ADRESS);

app.use('/signup', signupRouter);
app.use('/signin', signinRouter);

app.use(auth);

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);

app.use(errorLogger);
app.use(errors());
app.use(checkError);

app.listen(PORT);
