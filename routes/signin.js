const router = require('express').Router();
const { login } = require('../controllers/users');
const { emailPassUserValidation } = require('../utils/validation');

router.post('/', emailPassUserValidation, login);

module.exports = router;
