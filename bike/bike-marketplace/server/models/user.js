const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "User's name must be provied"],
    minlength: [3, 'Name must have at least 3 characters']
  },
  email:{
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Email address is required'],
    validator: {
      validator(value){
        return validator.isEmail(value); 
      }
    },
  },
  password: {
    type: String,
    minlength: [16, "Password must be at least 16 characters"],
    maxlength: [32, "Password cannot exceed characters"],
    required: true
  }

}, {
  timestamps: true
});

userSchema.plugin(uniqueValidator, { message: 'The {PATH} provided is already in use.' });

userSchema.pre('save', function(next){
  if(!this.isModified('password')){
    return next(); // skip saving
  } 
  
  // bcrypt documentation: https://www.npmjs.com/package/bcrypt#to-hash-a-password
  bcrypt.hash(this.password, 10, (error, hash) =>{ // second parameter is "salt rounds"
    console.log('hashing password', this.password);
    this.password = hash;
    next();
  })
})

//  define a function to validate password
// https://www.npmjs.com/package/bcrypt#to-check-a-password
userSchema.statics.validatePassword = function(candidatePw, hashedPw, callback){
  console.log('validating password', candidatePw);
  bcrypt.compare(candidatePw, hashedPw,
   (error, response) => callback(error, response) ); // callback should have args(error, response)
}

module.exports = mongoose.model('User', userSchema);
