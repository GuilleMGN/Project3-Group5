const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  category: {
    type: String,
    required: true,
    enum: [
      "accesories",
      "automobile",
      "sports and fitness",
      "tech and electronics",
      "books and education",
      "clothing and fashion",
      "pets and animals",
    ],
  },
  name: {
    type: String,
    required: Boolean,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min : {
        type : Number,
    },
    max : {
        type : Number
    }
  },
  image : {
      data : Buffer,
      contentType : String
  }

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;