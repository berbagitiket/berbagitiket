const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  firstname: {type: String, required: true},
  lastname: String,
  email: {type: String, required:true, unique:true},
  phone: {type: String, required:true, unique:true},
  birthdate: {type: Date, required:true},
  title: {type: String, required: true},
  payment: {type: String, required:true},
  ticket: {
    airline: String,
    origin: String,
    destination: String,
    duration: String,
    depart: String,
    arrive: String,
    transit: String,
    price: Number,
    class: String,
    flightnumber: String
  },
  status: Boolean
})

const Transaction = mongoose.model('Transactions', transactionSchema)
module.exports = Transaction;
