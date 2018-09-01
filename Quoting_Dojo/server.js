// Require the Express Module
var express = require("express");
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require("body-parser");


// Require Mongoose
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/quoting_dojo');


mongoose.Promise = global.Promise;


// Integrate body-parser with our App
app.use(bodyParser.urlencoded());
// Require path
var path = require("path");
// Setting our Static Folder Directory
app.use(express.static(__dirname + "./static"));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request

app.get('/', function(req, res) {
    res.render('index');
})


app.get('/quotes', function(req, res) {
	arr = Quote.find({}, function(err, quotes) {
	  res.render('quotes', {arr:quotes});
	})
  })



// Add  Request 
app.post('/add', function(req, res) {
    console.log("POST DATA", req.body);
	// create a new quote with the name and message corresponding to those from req.body
	var quote = new Quote({name: req.body.name, message: req.body.message});

    quote.save(function(err){
    	if(err){
			console.log('something went wrong');
			console.log(quote.errors);
			res.render('index', {errors: quote.errors})
		  } 
    	else { 
			console.log('successfully added a quote!');
			res.redirect('/quotes');
		  }
    });
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})

// Create your Mongoose Schemas

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2 },
    message: {type: String, required: true, minlength: 2}
    }, {timestamps: true})
mongoose.model('Quote', QuoteSchema); 
var Quote = mongoose.model('Quote');   

