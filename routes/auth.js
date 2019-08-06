const express = require('../node_modules/express');
const router = express.Router();

const authController = require('../controllers/authController');
const passportJWT = require('../middlewares/passportJWT')();

const { isEmail, hasPassword, hasName } = require('../validations/validators');

router.post('/login', authController.login);
router.post('/signup', [isEmail, hasPassword, hasName], authController.signup);

router.get('/me', passportJWT.authenticate(), authController.me);

module.exports = router;
