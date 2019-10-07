const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
email: String,
//nome: String,
});

module.exports = mongoose.model('User', UserSchema);