const mongoose = require("mongoose")

const OrdersSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    img: {
      type: String,
    },
    qty: {
        type: String
    },
    price: {
        type: String
    },
    name: {
        type: String
    },
    address: {
      type: String
    },
    payment_type: {
      type: String,
    },
    status: {
      type: String,
      default: 'Processing'
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("order", OrdersSchema);