//var hash = require('password-hash')
var jwt = require('jsonwebtoken')
var express = require('express');
var User = require('../models/user')


module.exports={
  signUp: function(req,res){
    var newUser = User({
      firstname:req.body.firstname,
      lastname: req.body.lastname,
      email:req.body.email,
      phone:req.body.phone,
      password:req.body.password
    });
    newUser.save(function(err) {
      if (err) {
        if (err.errors.firstname) {
          res.send(err.errors.firstname.message)
        }
        else if (err.errors.email) {
          res.send(err.errors.email.message)
        }
        else if (err.errors.phone) {
          res.send(err.errors.phone.message)
        }
        else if (err.errors.password) {
          res.send(err.errors.password.message)
        }
      }
      else{
        res.send(newUser);
      }
    });
  },
  logIn: function(req,res){
    User.findOne({email:req.body.email}).then(function(user){
      if(!user){
        res.send('user not found!')
      }
      else if(user.password !== req.body.password){
        res.send('wrong pass!')
      }
      else{
        var token = jwt.sign({id:user._id,email:user.email},'rahasiabangetnih')
        res.send({token:token})
      }
    })
  }

}
