const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  discount: {
    type: Number,
    default: 0
  },
  bcolor: String,
  panelcolor: String,
  textcolor: String
});

module.exports = mongoose.model("Product", productSchema);
