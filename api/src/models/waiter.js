const mongoose = require('mongoose');

const WaiterSchema = new mongoose.Schema({
	name: String,
	username: String,
	password: Number,
});

module.exports = connection => {
	return connection.models.waiter || connection.model('waiter', WaiterSchema);
};
