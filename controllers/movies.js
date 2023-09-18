const NotFoundError = require('../errors/notFoundError');
const ForbiddenError = require('../errors/forbiddenError');
const BadRequestError = require('../errors/badRequestError');
const Movie = require('../models/movie');

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((mov) => {
      if (mov.length === 0) {
        throw new NotFoundError('Фильмы не найдены');
      } res.send(mov);
    })
    .catch(next);
};
module.exports.createMovie = (req, res, next) => {
  Movie.create({
    owner: req.user._id,
    country: req.body.country,
    director: req.body.director,
    duration: req.body.duration,
    year: req.body.year,
    description: req.body.description,
    image: req.body.image,
    trailerLink: req.body.trailer,
    nameRu: req.body.nameRu,
    nameEn: req.body.nameEn,
    thumbnail: req.body.thumbnail,
    movieId: req.body.movieId,
  })
    .then((mov) => res.send(mov))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные при создании фильма'));
      } else { next(err); }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.find({ _id: req.params.cardId })
    .then((mov) => {
      if (mov.length === 0) {
        throw (new NotFoundError('Фильм не найден'));
      } if (req.user._id !== mov.owner.toString()) {
        throw (new ForbiddenError('У вас нет прав для совершения этого действия'));
      } Movie.deleteOne(mov)
        .then(() => res.send({ message: 'Фильм удален' }))
        .catch(next);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new NotFoundError('Не найдено'));
      } else { next(err); }
    });
};
