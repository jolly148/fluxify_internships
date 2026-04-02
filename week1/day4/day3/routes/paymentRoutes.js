const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.get('/revenue/:month', paymentController.getRevenue);

module.exports = router;
