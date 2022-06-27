const Items = require('../models/itemModel');

exports.getAllItems = async (req, res) => {
	try {
		const items = await Items.find();
		res.status(200).json({
			status: 'success',
			results: items.length,
			data: {
				items: items
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err
		});
	}
};

exports.createItem = async (req, res) => {
	try {
		const newItem = await Items.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				item: newItem
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err
		});
	}
};

exports.getItemById = async (req, res) => {
	try {
		const item = awaitItems.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			data: {
				items: item
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err
		});
	}
};

exports.updateItem = async (req, res) => {
	try {
		const item = await Items.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});

		res.status(200).json({
			status: 'success',
			data: {
				item: item
			}
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err
		});
	}
};

exports.deleteItem = async (req, res) => {
	try {
		await Items.findByIdAndDelete(req.params.id);

		res.status(204).json({
			status: 'success',
			data: null
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err
		});
	}
};
