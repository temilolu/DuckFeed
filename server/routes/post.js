const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const {
	hasFoodName,
	hasLocation,
	hasNumberOfDucks,
	hasFoodType,
	hasFoodQuantity
} = require('../validations/validators');

router.get('/', postController.index);
router.post('/', [hasFoodName, hasLocation, hasNumberOfDucks, hasFoodType, hasFoodQuantity], postController.store);
router.get('/:id', postController.show);

module.exports = router;
