const validationHandler = require('../validations/validationHandler');
const Post = require('../models/post');

exports.index = async (req, res) => {
	try {
		const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;
		const page = req.query.page ? parseInt(req.query.page) : 1;
		const posts = await Post.find()
			.skip((page - 1) * pagination)
			.limit(pagination)
			.populate('user')
			.sort({ feedTime: -1 });
		res.send(posts);
	} catch (err) {
		next(err);
	}
};

exports.show = async (req, res, next) => {
	try {
		const post = await Post.findOne({ _id: req.params.id }).populate('user');
		res.send(post);
	} catch (err) {
		next(err);
	}
};

exports.upadate = async (req, res, next) => {
	try {
		validationHandler(req);

		let post = await Post.findById(req.params.id);
		post.foodName = req.body.foodName;
		post.numberOfDucks = req.body.numberOfDucks;
		post = await post.save();

		res.send(post);
	} catch (err) {
		next(err);
	}
};

exports.delete = async (req, res, next) => {
	try {
		let post = await Post.findById(req.params.id);
		await post.delete();

		res.send({ message: 'Delete sucessful' });
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
		post.foodQuantity = req.body.foodQuantity;
		post.user = req.user;
		post = await post.save();

		res.send(post);
	} catch (err) {
		next(err);
	}
};
