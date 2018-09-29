const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json()); 
mongoose.connect('mongodb://localhost/restful_task_api');
mongoose.Promise = global.Promise;

require('./server/models/task.js');
require('./server/config/routes.js')(app);
app.listen(5000, function() {
    console.log('Listening on port 5000');
});
