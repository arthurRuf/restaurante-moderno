const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String
});

module.exports = connection => {
	return connection.models.user || connection.model('user', UserSchema);
};
