const router = require('express').Router();
const { getUser, refreshUser } = require('../controllers/users');
const { emailNameUserValidation } = require('../utils/validation');

router.get('/me', getUser);
router.patch('/me', emailNameUserValidation, refreshUser);

module.exports = router;
