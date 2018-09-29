//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  num: {
    type: Number, // Allows us to use short id's, eg 1, 2, 3
    required: [true, 'Game number must not be empty']
  }
}, {
  timestamps: true
});

//productSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Game', gameSchema);
