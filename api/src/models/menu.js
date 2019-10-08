const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
	company: String,
	name: String,
	// thumbnail: String,
	price: Number,
	// categories: [String],
	// user: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'User'
	// }
});


module.exports = (connection) => {
	return connection.models.menu || connection.model("menu", MenuSchema);
};
