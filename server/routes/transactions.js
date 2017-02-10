var express = require('express');
var router = express.Router();
const transaction = require('../controllers/transaction');

/* GET home page. */
router.post('/api/transactions/new', transaction.newTransaction);

router.get('/api/transactions/:id', transaction.getSingleTransaction);

router.update('/api/transactions/:id/paid', transaction.updateStatus);

router.delete('/api/transactions/delete/:id', transaction.removeTransaction);

module.exports = router;
