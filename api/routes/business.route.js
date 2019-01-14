const express = require('express');
const app = express();
const businessRoutes = express.Router();

// require business model
let Business = require('../models/Business');

// define store route
businessRoutes.route('/add').post(function (req, res) {
  let business = new Business(req.body);
  business.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// define get data(index or listings) route
businessRoutes.route('/').get(function(req, res){
	Business.find(function(err, businesses){
		if(err){
			console.log(err);
		};
		else{
			res.json(businesses);
		};
	});
});


module.exports = businessRoutes;