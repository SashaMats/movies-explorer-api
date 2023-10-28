const { celebrate, Joi } = require('celebrate');
const urlPattern = require('./constants');

module.exports.cardValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().min(2)
      .max(30),
    director: Joi.string().required().min(2)
      .max(30),
    duration: Joi.number(),
    year: Joi.string().hex().required().min(1)
      .max(4),
    description: Joi.string().required().min(2)
      .max(1000),
    image: Joi.string().required().pattern(urlPattern),
    trailer: Joi.string().required().pattern(urlPattern),
    nameRu: Joi.string().required().min(2)
      .max(60),
    nameEn: Joi.string().required().min(2)
      .max(60),
    thumbnail: Joi.string().required().pattern(urlPattern),
    movieId: Joi.number().required(),
  }),
});

module.exports.idValidation = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
});

module.exports.emailNameUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().min(2).max(30),
  }),
});

module.exports.nameEmailPassUserValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(3),
  }),
});

module.exports.emailPassUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(3),
  }),
});
