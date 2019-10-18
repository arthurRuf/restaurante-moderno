const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	table: String,
	itemId: String,
	status: String,
});

module.exports = connection => {
	return connection.models.order || connection.model('order', orderSchema);
};
