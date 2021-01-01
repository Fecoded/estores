const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "category is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("categorie", CategorySchema);
