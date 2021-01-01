const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: String,
    required: [true, "Price is required"],
  },
  previous_price: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  size: {
    type: String,
  },
  type: {
    type: String,
    required: [true, "Product type is required"],
  },
  quantity: {
    type: String,
    required: [true, "Quantity is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", ProductSchema);