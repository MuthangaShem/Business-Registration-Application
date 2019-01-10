const express = require('express'),
	path = require('path'),
	bodyparser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	config = require('./DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
	function(){
		console.log('Database is connected.');
	},
	function(err){
		console.log('Cannot connect to the database! '+ err);
	});



const app = express();
app.use(bodyparser.json());
app.use(cors());

const port = process.env.PORT || 4000;

const server = app.listen( function(){
	console.log('Listening on port ' + port);
});