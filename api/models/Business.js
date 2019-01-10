const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let business_schema = {
	person_name:{
		type: String
	},
	business_name: {
		type: String
	},
	business_kra_number:{
		type: Number
	}
	};

business_collection = {
		collection: 'business'
	}

// define collection and schema for Business
let Business = new Schema(business_schema, business_collection
);