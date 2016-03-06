// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var path = require('path');
var cont

//Require all the controllers
var home     = require('./resources/home');

// Connect to the MongoDB
mongoose.connect('mongodb://admin:admin@ds023468.mlab.com:23468/lololol-database');

// Create our Express application
var app = express();

// Make our db accessible to our router
app.use(function(req,res,next){
    next();
});

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
 	  res.header("Access-Control-Allow-Origin",    "http://localhost:8080");
  	res.header("Access-Control-Allow-Headers",   "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",   "GET,PUT,POST,DELETE");
  
  	next();
});

app.use(bodyParser.json());


// SOCKET //

var io = require('socket.io')();

io.on('connect', function (socket) {
    console.log("Connected!");
});

// SOCKET //

function link(route, controller)
{
	router.route(route)
	   .get(controller.GET)
	   .post(controller.POST)
	   .put(controller.PUT)
	   .delete(controller.DELETE);
}

// Create our Express router
var router = express.Router();

link('/', home);

app.use('/', router);

// Start the server and connect the socket to the server
var server = app.listen(process.env.PORT || 8000);
io.attach(server);

module.exports = router;