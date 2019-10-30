const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	// _id: mongoose.Schema.Types.ObjectId,
	table: String,
	productList: [
		{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }
	],
	status: String,
});

module.exports = connection => {
	return connection.models.order || connection.model('order', orderSchema);
};
