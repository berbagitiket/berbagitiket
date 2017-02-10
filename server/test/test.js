const should = require('chai').should()
var mongoose = require('mongoose')
var userController = require('../controllers/users')
var userModel = require('../models/user')
mongoose.connect('mongodb://localhost/berbagitiket');
mongoose.Promise = global.Promise;
describe('test sign up', function() {
  describe('test user baru', function() {
    var rand = Math.floor((Math.random() * 999) + 1);
    var req = {
      body:{
        firstname:'tim',
        lastname: 'gio',
        email:'tim@gmail'+rand+'.com',
        password:'123',
        phone:'081176861447'
      }
    }
    var res = {
      send: function(x){
        console.log(x);
      }
    }
    it('seharusnya mengembalikan new user', function() {
      userController.signUp(req,res)
      userModel.findOne({where:{email:req.body.email}}).then(function(newMail){
        console.log(newMail.email);
        newMail.email.should.equal(req.body.email)
      })
    });
  });
  describe('test firstname kosong', function() {
    var rand = Math.floor((Math.random() * 999) + 1);
    var req = {
      body:{
        firstname:'',
        lastname: 'gio',
        email:'tim@gmail'+rand+'.com',
        password:'123',
        phone:'081176861447'
      }
    }
    var res = {
      send: function(x){
        console.log(x);
      }
    }
    it('seharusnya mengembalikan: firstname must be filled', function() {
      userController.signUp(req,res).should.throw("firstname must be filled")
      })
    });
  });
