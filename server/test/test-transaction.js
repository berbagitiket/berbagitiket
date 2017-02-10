const should = require('chai').should()
var mongoose = require('mongoose')
var transactionController = require('../controllers/transaction')
var transactionModel = require('../models/transaction')
mongoose.createConnection('mongodb://localhost/berbagitiket')
mongoose.Promise = global.Promise;

describe('test transaction', function() {
  describe('test new transaction', function() {
    var rand = Math.floor((Math.random() * 999) + 1);
    var req = {
      body:{
        firstname:'muhammad',
        lastname: 'iqbal',
        email:'qblol'+rand+'rand@gmail.com',
        phone:'081176861447',
        birthdate: '2010/09/20',
        title: 'Mr.',
        payment: 'Transfer'
      }
    }
    var res = {
      send: function(x){
        console.log(x);
      }
    }
    it('seharusnya mengembalikan new transaction', function() {
      transactionController.newTransaction(req,res)
      transactionModel.findOne({where:{email:req.body.email}}).then(function(newTransaction){
        console.log(newTransaction.email);
        newTransaction.email.should.equal(req.body.email)
      })
    });
  });
  describe('test firstname kosong', function() {
    var rand = Math.floor((Math.random() * 999) + 1);
    var req = {
      body:{
        firstname:'',
        lastname: 'iqbal',
        email:'qblol'+rand+'rand@gmail.com',
        phone:'081176861447',
        birthdate: '2010/09/20',
        title: 'Mr.',
        payment: 'Transfer'
      }
    }
    var res = {
      send: function(x){
        console.log(x);
      }
    }
    it('seharusnya tidak membuat objek baru', function() {
      transactionController.newTransaction(req,res)
      transactionModel.find({where:{email:req.body.email}}).then(function(newTransaction){
        newTransaction.should.equal([])
      })

      })
    });
    describe('test email kosong', function() {
      var rand = Math.floor((Math.random() * 999) + 1);
      var req = {
        body:{
          firstname:'muhammad',
          lastname: 'iqbal',
          email:'',
          phone:'081176861447',
          birthdate: '2010/09/20',
          title: 'Mr.',
          payment: 'Transfer'
        }
      }
      var res = {
        send: function(err){
          return err;
        }
      }
      it('seharusnya membuat tidak membuat objek baru', function() {
        transactionController.newTransaction(req,res)
        transactionModel.find({where:{firstname:req.body.firstname}}).then(function(newTransaction){
          newTransaction.should.equal([])
        })

        })
      });
      describe('test password kosong', function() {
        var rand = Math.floor((Math.random() * 999) + 1);
        var req = {
          body:{
            firstname:'muhammad',
            lastname: 'iqbal',
            email:'',
            phone:'081176861447',
            birthdate: '2010/09/20',
            title: 'Mr.',
            payment: 'Transfer'
          }
        }
        var res = {
          send: function(err){
            return err;
          }
        }
        it('seharusnya membuat tidak membuat objek baru', function() {
          transactionController.newTransaction(req,res)
          transactionModel.find({where:{email:req.body.email}}).then(function(newTransaction){
            newTransaction.should.equal([])
          })

          })
        });

  });
