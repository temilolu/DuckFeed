const { validationResult } = require('../node_modules/express-validator/src');

module.exports = req => {
	const validationErrors = validationResult(req);
	if (!validationErrors.isEmpty()) {
		const error = new Error('Validation Empty');

		error.statusCode = 422;
		error.validation = validationErrors.array();
		throw error;
	}
};
