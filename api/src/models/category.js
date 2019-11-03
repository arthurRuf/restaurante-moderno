const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	// _id: mongoose.Schema.Types.ObjectId,
	name: String,
});

module.exports = connection => {
	return connection.models.category || connection.model('category', categorySchema);
};
