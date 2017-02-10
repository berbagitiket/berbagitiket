const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  userid: {type: Schema.Types.ObjectId, ref: 'Users'},
  firstname: {type: String, required: [true, 'Please fill your first name']},
  lastname: String,
  email: {type: String, required:[true, 'Please fill your email address']},
  phone: {type: String, required:true, minlength: [8, 'Your telephone number is less than 8 digits'], maxlength: [13, 'Your telephone number is more than 13 digits']},
  birthdate: {type: Date, required: [true, 'Birth Date must be filled']},
  title: {type: String, required: [true, 'Title must be filled']},
  payment: {type: String, required: [true, 'Please fill your payment method']},
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
  status: String
},{
  timestamps: true
})

const Transaction = mongoose.model('Transactions', transactionSchema)
module.exports = Transaction;
