const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  userid: {type: Schema.Types.ObjectId, ref: 'Users'},
  firstname: {type: String, required: true},
  lastname: String,
  email: {type: String, required:true},
  phone: {type: String, required:true},
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
  status: Boolean,
},{
  timestamps: true
})

const Transaction = mongoose.model('Transactions', transactionSchema)
module.exports = Transaction;
