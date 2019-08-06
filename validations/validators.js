const { body } = require('../node_modules/express-validator/src');

exports.hasFoodName = body('foodName')
	.isLength({ min: 2 })
	.withMessage('Name is required. Min lenght is 5 characters');

exports.hasLocation = body('location')
	.isLength({ min: 5 })
	.withMessage('Name is required. Min lenght is 5 characters');

exports.hasNumberOfDucks = body('numberOfDucks')
	.isLength({ min: 0 })
	.withMessage('NumberOfDucks is required.');

exports.hasFoodType = body('foodType')
	.isLength({ min: 5 })
	.withMessage('foodType is required. Min lenght is 5 characters');

exports.hasFoodQuantity = body('foodQuantity')
	.isLength({ min: 0 })
	.withMessage('foodQuantity is required.');

exports.hasName = body('name')
	.isLength({ min: 5 })
	.withMessage('Name is required. Min lenght is 5 characters');

exports.isEmail = body('email')
	.isEmail()
	.withMessage('Email field must contain a correct email');

exports.hasPassword = body('password')
	.exists()
	.withMessage('Password canot be empty');
