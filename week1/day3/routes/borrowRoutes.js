const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');

router.post('/', borrowController.addBorrow);
router.get('/fees/:record_id', borrowController.getFees);

module.exports = router;
