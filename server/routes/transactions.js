var express = require('express');
var router = express.Router();
const transaction = require('../controllers/transaction');

/* GET home page. */
router.post('/new', transaction.newTransaction);

router.get('/:id', transaction.getSingleTransaction);

router.put('/:id/paid', transaction.updateStatus);

router.delete('/delete/:id', transaction.removeTransaction);

module.exports = router;
