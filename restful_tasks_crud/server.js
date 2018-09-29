const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json()); 

app.use(express.static(path.join(__dirname + '/public/dist/public')));

const db = 'mongodb://localhost/restful_task_crud';

require('./server/config/mongoose.js')(db);
require('./server/config/routes.js')(app);

app.listen(6200, function() {
    console.log('Listening on port 6200');
});
