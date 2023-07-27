// Create web server application
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;

// Connect to Mongoose
mongoose.connect('mongodb://localhost/comments');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// Use body parser
app.use(bodyParser.json());

// Include the controller
var comments = require('./controllers/comments.js');
app.use('/comments', comments);

// Set port to 3000
app.listen(3000);
console.log('Running on port 3000...');
