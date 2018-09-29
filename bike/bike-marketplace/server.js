const session = require('express-session');
const cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');
var express = require( "express");
var path = require( "path");


var app = express();

const sessionConfig = {
  saveUninitialized: true, 
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false, 
    httpOnly: false,
    maxAge: 360000 // expires after 100 hours? 
  }
}

app.use(cookieParser('lkjljlkdfgdfgj')); // cookie encryption
app.use(session(sessionConfig));


// app.use(express.static(path.join(__dirname + "./public")));
app.use(bodyParser.json())
   .use(bodyParser.urlencoded({extended: true})); 


// require the mongoose configuration file
require('./server/config/mongoose');


// set up static file path 
app.use(express.static(path.join(__dirname, '/public/dist')));


// set up routes
app.use('/auth', require('./server/config/routes/auth'));
app.use('/api/posts', require('./server/config/routes/posts'));


app.use(require('./server/config/routes/catchall'))



app.listen(80, function() {
 console.log("listening on port 8000"); 
});
