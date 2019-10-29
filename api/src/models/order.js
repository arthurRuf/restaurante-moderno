const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	// _id: mongoose.Schema.Types.ObjectId,
	table: String,
	itemMenu: { type: mongoose.Schema.Types.ObjectId, ref: 'itemMenu' },
	status: String,
});

module.exports = connection => {
	return connection.models.order || connection.model('order', orderSchema);
};
