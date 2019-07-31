const validationHandler = require('../validations/validationHandler');

exports.index = (req, res) => {
	throw new Error('Some random error');
	res.send({ message: 'Hi' });
};

exports.store = (req, res) => {
	try {
		validationHandler(req);
		res.send({ message: 'The name is' + req.body.name });
	} catch (err) {
		next(err);
	}
};
