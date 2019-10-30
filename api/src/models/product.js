const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  price: Number,
  image: String,
});

module.exports = connection => {
  return connection.models.product || connection.model("product", productSchema);
};
