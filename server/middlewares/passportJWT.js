const passport = require('passport');
const passportJWT = require('passport-jwt');
const user = require('../models/user');
const config = require('../config');

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
	secretOrKey: config.jwtSecret,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = () => {
	const Strategy = new Strategy(params, async (payload, done) => {
		const user = await user.findById(payload.id);
		if (!user) return done(new Error('User not found'), null);

		return done(null, user);
	});

	passport.use(Strategy);

	return {
		initialize: function() {
			return passport.initialize();
		},
		authenticate: function() {
			return passport.authenticate('jwt', { session: false });
		}
	};
};
