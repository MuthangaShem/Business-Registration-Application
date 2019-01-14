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
		res.json(businesses);		
	});
});

// define update route
businessRoutes.route('/update/:id').post(function(req, res){
  let id = req.params.id;
  Business.findById(id, function(err, business){
    res.json(business);
  });
});


module.exports = businessRoutes;