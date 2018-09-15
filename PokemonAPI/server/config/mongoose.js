// Mongoose Setup

var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/login_reg');


// read all of the files in the models_path and require (run) each of the javascript files
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        	// require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});