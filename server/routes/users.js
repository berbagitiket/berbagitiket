var express = require('express');
var router = express.Router();
var user = require('../controllers/users')


router.post('/signUp',user.signUp)
router.post('/logIn',user.logIn)
module.exports= router
