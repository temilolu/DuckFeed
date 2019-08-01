const validationHandler = require('../validations/validationHandler');
const Post = require('../models/postModel');

exports.index = async (req, res) => {
	try {
		const posts = await Post.find().sort({ feedTime: -1 });
		res.send(posts);
	} catch (err) {
		next(err);
	}
};

exports.show = async (req, res, next) => {
	try {
		const post = await Post.findOne({ _id: req.params.id });
		res.send(post);
	} catch (err) {
		next(err);
	}
};

exports.store = async (req, res, next) => {
	try {
		validationHandler(req);

		let post = new Post();
		post.foodName = req.body.foodName;
		post.location = req.body.location;
		post.numberOfDucks = req.body.numberOfDucks;
		post.foodType = req.body.foodType;
		post.quantity = req.body.quantity;
		post = await post.save();

		res.send(post);
	} catch (err) {
		next(err);
	}
};
