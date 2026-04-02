  GNU nano 8.7                    borrowRoutes.js
const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');

router.post('/', borrowController.addBorrow);
router.get('/fees/:record_id', borrowController.getFees);

module.exports = router;












                                [ Read 8 lines ]
^G Help      ^O Write Out ^F Where Is  ^K Cut       ^T Execute   ^C Location
^X Exit      ^R Read File ^\ Replace   ^U Paste     ^J Justify   ^/ Go To Line
const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');

router.post('/', borrowController.addBorrow);
router.get('/fees/:record_id', borrowController.getFees);

module.exports = router;
