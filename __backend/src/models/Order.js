const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	date: String,
	approved: Boolean,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	menu: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Menu'
	}
});
module.exports = mongoose.model('Order', OrderSchema);
