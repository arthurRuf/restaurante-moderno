const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
	company: String,
	name: String,
	thumbnail: String,
	price: Number,
	categories: [String],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Menu', MenuSchema);
