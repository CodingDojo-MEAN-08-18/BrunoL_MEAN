// TODO:
// 1) Add pre function to password to encrypt w/ bcrypt
// 2) Add validation to ensure against duplicate email addresses ("unique: true" is not enough!)
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: [true, "Please enter a first name."],
		validate: {
			validator: function(value){
				return /^[A-z]+$/.test(value)
			},
			message: "Please enter a real first name, doofus."
		}
	},

	last_name: {
		type: String,
		required: [true, "Please enter a last name."],
		validate: {
			validator: function(value){
				return /^[A-z]+$/.test(value)
			},
			message: "Please enter a real last name, goofus."
		}
	},

	email:{
		type: String,
		required: [true, "Please enter a valid email address."],
		validate: {
			validator: function(value){
				//return /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/.test(value);
				return /@/.test(value)
			},
			message: "Please enter a valid email address."
		}
	},

	password:{
		type: String,
		required: [true, "Password must contain at least 1 number, Uppercase Letter, and special character."],
		minlength: 8,
		maxlength: 120,
		validate: {
			validator: function(value){
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,120}/.test( value );
			},
			message: "Password must contain at least 1 number, Uppercase Letter, and special character."
		}
	},

	bday:{
		type: Date,
		required: [true, "Please enter a date of birth."],
		validate: {
			validator: function(value){
				return value instanceof Date;
			},
			message: "Please enter a valid birthday!"
		}
	}

})


UserSchema.pre('save', function(done){
    var hashedpw = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    this.password = hashedpw;
    this.password_conf = undefined;
    done();
;})

mongoose.model('User', UserSchema);
