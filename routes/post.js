const express = require('../node_modules/express');
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
router.patch('/:id', [hasFoodName, hasNumberOfDucks], postController.upadate);
router.delete('/:id', postController.delete);

module.exports = router;
