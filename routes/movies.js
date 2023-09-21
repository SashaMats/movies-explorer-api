const router = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const { cardValidation, idValidation } = require('../utils/validation');

router.get('/', getMovies);

router.post('/', cardValidation, createMovie);

router.delete('/:cardId', idValidation, deleteMovie);

module.exports = router;
