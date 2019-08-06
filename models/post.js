const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
	feedTime: { type: Date, default: Date.now() },
	foodName: { type: String, required: true },
	location: { type: String, required: true },
	numberOfDucks: { type: String, required: true },
	foodType: { type: String, required: true },
	foodQuantity: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: 'user' }
});

module.exports = mongoose.model('post', PostSchema);
