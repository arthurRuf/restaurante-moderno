const mongoose = require('mongoose');

const MenuiItemSchema = new mongoose.Schema({
	// _id: mongoose.Schema.Types.ObjectId,
	company: String,
	name: String,
	thumbnail: String,
	price: Number,
	categories: [String],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	}
});

module.exports = connection => {
	return connection.models.menu || connection.model('menu', MenuiItemSchema);
};
