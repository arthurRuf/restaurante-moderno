const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: String
});

module.exports = connection => {
	return connection.models.user || connection.model('category', categorySchema);
};
