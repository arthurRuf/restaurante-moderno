const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
nomeEmpresa: String,
categoria: String,
item: String,
//garcom: String,
thumbnail: String,
//pedido: String,
menu: [String],
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);