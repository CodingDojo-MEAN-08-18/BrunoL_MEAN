var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(express.static(__dirname + "/client/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + "/client/views");
app.set('view engine', 'ejs');
app.use(session({secret: 'goodforyou'}));

mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');

var router = require('./server/config/routes.js');
router(app);

var PORT = 8000;
var line = "\n************************\n"
app.listen(8000, function(){
	console.log(line + "Listening on port " + PORT + line);
})