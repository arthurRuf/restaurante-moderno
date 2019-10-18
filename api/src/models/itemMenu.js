const mongoose = require('mongoose');

const itemMenuSchema = new mongoose.Schema({
	name: String,
	description: String,
	price: Number,
});

module.exports = connection => {
	return connection.models.itemMenu || connection.model('itemMenu', itemMenuSchema);
};
