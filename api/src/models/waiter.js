const mongoose = require('mongoose');

const WaiterSchema = new mongoose.Schema({
	// _id: mongoose.Schema.Types.ObjectId,
	name: String,
	username: String,
	password: String,
});

module.exports = connection => {
	return connection.models.waiter || connection.model('waiter', WaiterSchema);
};
