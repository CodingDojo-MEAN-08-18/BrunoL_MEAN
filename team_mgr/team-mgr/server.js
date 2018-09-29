var express = require( "express");
var path = require( "path");
var bodyParser = require('body-parser');

var app = express();


// app.use(express.static(path.join(__dirname + "./public")));
app.use(bodyParser.json())
   .use(bodyParser.urlencoded({extended: true})); 


// require the mongoose configuration file
require('./server/config/mongoose');


// set up static file path
app.use(express.static(path.join(__dirname, '/public/dist')));


// set up routes
app.use('/api/players', require('./server/config/player'));
app.use('/api/games', require('./server/config/game'));
app.use('/api/rsvps', require('./server/config/rsvp'));

app.use(require('./server/config/catchall'))



app.listen(80, function() {
 console.log("listening on port 80"); 
});
