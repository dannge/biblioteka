const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
	Author: {
		type: String
	},

	Title: {
		type: String
	},

	Category: {
		type: String
	},

	Date: {
		type: String
	}
});

const Items = new mongoose.model('Items', itemsSchema);

module.exports = Items;
