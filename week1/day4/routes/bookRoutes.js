const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Add a new book
router.post('/', bookController.addBook);

// Get all books
router.get('/', bookController.getBooks);

module.exports = router;
