const express = require('express');

const { getAllItems, createItem, getItemById, updateItem, deleteItem } = require('../controllers/itemsController');

const router = express.Router();

router.route('/').get(getAllItems).post(createItem);

router.route('/:id').get(getItemById).put(updateItem).delete(deleteItem);

module.exports = router;
