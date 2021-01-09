const mongoose = require("mongoose")

const OrdersSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    quantity: {
        type: String
    },
    price: {
        type: String
    },
    name: {
        type: String
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