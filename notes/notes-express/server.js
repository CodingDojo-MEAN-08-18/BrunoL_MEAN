// Import express and path modules.
var express = require( "express");
var path = require( "path");
var bodyParser = require('body-parser');

var app = express();


// app.use(express.static(path.join(__dirname + "./public")));
app.use(bodyParser.json())
   .use(bodyParser.urlencoded({extended: true})); 


// require the mongoose configuration file
require('./server/config/mongoose');

// set up the routes
app.use('/api', require('./server/config/routes'));
app.use(require('./server/config/catchall.routes'))

//var routes_setter = require('./server/config/routes.js');
//routes_setter(app);

app.use(express.static(path.join(__dirname, '/public/dist')));

// start server
//var server = 
app.listen(80, function() {
 console.log("listening on port 80"); 
});