const jwt = require('jwt-simple');
const config = require('../config');

const user = require('../models/user');

exports.login = async (req, res, next) => {
	try {
		const email = req.body.email;
		const password = req.body.password;

		const user = await user.findOne({ email }).select('+password');
		if (!user) {
			const error = new Error('Wrong email');
			error.statusCode = 401;
			throw error;
		}

		const validPassword = await user.validPassword(password);
		if (!validPassword) {
			const error = new Error('Wrong password');
			error.statusCode = 401;
			throw error;
		}

		const token = jwt.encode({ id: user.id }, config.jwtSecret);
		return res.send({ user, token });
	} catch (err) {
		next(err);
	}
};
