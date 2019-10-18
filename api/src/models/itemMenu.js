const mongoose = require('mongoose');

const itemMenuSchema = new mongoose.Schema({
	image: String,
	title: String,
	price: Number,
});

module.exports = connection => {
	return connection.models.itemMenu || connection.model('itemMenu', itemMenuSchema);
};
