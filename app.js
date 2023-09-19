require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const indexRouter = require('./routes/index');
const { auth } = require('./middlewares/auth');
const { checkError } = require('./middlewares/checkError');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { limiter } = require('./middlewares/limiter');

const { PORT = 3000, DB_ADRESS = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

const app = express();

app.use(cors());

app.use(limiter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

mongoose.connect(DB_ADRESS);
app.use('/signup', indexRouter.signupRouter);
app.use('/signin', indexRouter.signinRouter);

app.use(auth);

app.use('/movies', indexRouter.moviesRouter);
app.use('/users', indexRouter.usersRouter);

app.use(errorLogger);
app.use(errors());
app.use(checkError);

app.listen(PORT);
