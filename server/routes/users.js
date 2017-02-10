var express = require('express');
var router = express.Router();
var user = require('../controllers/users')


router.post('/signUp',user.signUp)

module.exports= router
