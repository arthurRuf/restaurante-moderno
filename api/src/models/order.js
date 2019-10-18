const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	name: String
});

module.exports = connection => {
	return connection.models.order || connection.model('order', orderSchema);
};
