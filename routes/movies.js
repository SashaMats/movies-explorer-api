const moviesRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const urlPattern = require('../constants');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/', getMovies);

moviesRouter.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().min(2)
      .max(30),
    director: Joi.string().required().min(2)
      .max(30),
    duration: Joi.string().hex().required().min(1)
      .max(3),
    year: Joi.string().hex().required().min(1)
      .max(4),
    description: Joi.string().required().min(2)
      .max(250),
    image: Joi.string().required().pattern(urlPattern),
    trailer: Joi.string().required().pattern(urlPattern),
    nameRu: Joi.string().required().min(2)
      .max(30),
    nameEn: Joi.string().required().min(2)
      .max(30),
    thumbnail: Joi.string().required().pattern(urlPattern),
    movieId: Joi.string().length(24).hex().required(),
  }),
}), createMovie);

moviesRouter.delete('/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).required(),
  }),
}), deleteMovie);

module.exports = moviesRouter;
