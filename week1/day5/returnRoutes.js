const express = require('express');
const router = express.Router();
const returnController = require('../controllers/returnController');
const authenticateToken = require('../middleware/authemiddleware');

router.post('/return', authenticateToken, returnController.returnBook);

module.exports = router;
