const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Product name is required'],
    minlength: [5, 'Product name length must be greater than 5']
  },
  price: {
    type: Number,
    required: [true, 'Product price is required']
  },
  img_url: {
    type: String,
    required: [true, 'Image URL is required']
  },
}, {
  timestamps: true
});

productSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Product', productSchema);
