const router = require('express').Router();
const { createUser } = require('../controllers/users');
const { emailPassUserValidation } = require('../utils/validation');

router.post('/', emailPassUserValidation, createUser);

module.exports = router;
