var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  firstname:{
    type:String,
    required:[true,"firstname must be filled"]
  },
  lastname:
  {
    type:String
  },
  email:{
    type:String,
    required:[true,"email must be filled"],
    unique: [true,"your email already registered"],
    validate:
     {
      validator: function(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      message: `its not a valid email`
    }
  },
  phone:{
    type:String,
    minlength:[8,'your telephone number must be 8 digits'],
    maxlength:[13,'your telephone number must be less than 13 digits'],
    required:[true,"phone must be filled"]
  },
  password:{
    type:String,
    required:[true,"password must be filled"]
  }
});

var User = mongoose.model('Users',userSchema)

module.exports = User
