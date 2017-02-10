const Transaction = require('../models/transaction');
const User = require('../models/user');

module.exports = {
  newTransaction: function(req,res) {
    let newTransaction = Transaction({
      userid: req.body.userid,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.username,
      phone: req.body.phone,
      birthdate: req.body.birthdate,
      title: req.body.title,
      payment: req.body.payment,
      ticket: {
        airline: req.body.airline,
        origin: req.body.origin,
        destination: req.body.destination,
        duration: req.body.duration,
        depart: req.body.depart,
        arrive: req.body.arrive,
        transit: req.body.transit,
        price: req.body.price,
        class: req.body.class,
        flightnumber: req.body.flightnumber
      },
      status: "UNPAID"
    })
    newTransaction.save().then(function(data){
      res.send(data)
    })
  },
  getSingleTransaction: function(req,res){
    Transaction.find({_id: req.params.id}).then(function(data){
      res.send(data)
    })
  },
  updateStatus: function(req,res) {
    Transaction.findOneAndUpdate({_id: req.params.id},{
      status:"PAID",
      updatedAt: new Date()
    },{new:true}).then(function(data) {
      res.send(data)
    })
  },
  removeTransaction: function(req,res) {
    Transaction.findOneAndRemove({_id: req.params.id}).then(function(data){
      res.send(`Transaction with id:${req.params.id} has been deleted`)
    })
  }
}
