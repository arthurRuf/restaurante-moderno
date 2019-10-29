const mongoose = require('mongoose');

const itemMenuSchema = new mongoose.Schema({
<<<<<<< HEAD
	name: String,
	description: String,
	price: Number,
	img: String,
=======
	// _id: mongoose.Schema.Types.ObjectId,
	image: String,
	title: String,
	price: Number,
>>>>>>> 10b89281bb5ff8edeb8518c50f21b79764d8adb1
});

module.exports = connection => {
	return connection.models.itemMenu || connection.model('itemMenu', itemMenuSchema);
};
