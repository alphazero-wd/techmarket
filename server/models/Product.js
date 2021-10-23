const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: 'No Description Provided for the Product.',
  },
  category: {
    enum: ['PC', 'Android', 'iPhone', 'Macbook'],
    required: true,
    type: String,
  },
  brand: {
    enum: ['Gaming PC', 'Samsung', 'Apple'],
    required: true,
    type: String,
  },
  stars: {
    type: [Number],
    default: [],
  },
  availability_quantity: {
    type: Number,
    default: 0,
  },
  comments: {
    type: [String],
    default: [],
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
