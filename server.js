// Load required packages
var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');
var cont

//Require all the controllers
var homeController      = require('./resources/home');

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
 	res.header("Access-Control-Allow-Origin", "http://192.168.1.103:3000");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  	res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  
  	next();
});

app.use(bodyParser.json());

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /users
router.route('/')
  .get(homeController.GET);

app.use('/', router);

// Start the server
app.listen(process.env.PORT || 8000);

module.exports = router;