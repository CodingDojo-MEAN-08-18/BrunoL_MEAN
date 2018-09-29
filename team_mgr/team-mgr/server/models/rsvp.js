//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const rsvpSchema = new Schema({
  player: {type: Schema.Types.ObjectId, ref: 'Player'},
  game: {type: Schema.Types.ObjectId, ref: 'Game'},
  status:{
    type: Number,
    required: [true, 'Each player must RSVP to all games (Undecided is an RSVP type)'],
    default: 0 // 0=undecided, 1=yes, 2=no. formatted in angular app using custome pipe
  }
}, {
  timestamps: true
});

//productSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Rsvp', rsvpSchema);
