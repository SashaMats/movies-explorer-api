const moviesRouter = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const { cardValidation, idValidation } = require('../utils/validation');

moviesRouter.get('/', getMovies);

moviesRouter.post('/', cardValidation, createMovie);

moviesRouter.delete('/:cardId', idValidation, deleteMovie);

module.exports = moviesRouter;
