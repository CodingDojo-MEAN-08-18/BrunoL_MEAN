//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Note message must not be empty'],
    minlength: [3, 'Message must have at least 3 characters']
  }
}, {
  timestamps: true
});

//productSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Note', noteSchema);
