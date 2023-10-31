const router = require('express').Router();
const { createUser } = require('../controllers/users');
const { nameEmailPassUserValidation } = require('../utils/validation');

router.post('/', nameEmailPassUserValidation, createUser);

module.exports = router;
