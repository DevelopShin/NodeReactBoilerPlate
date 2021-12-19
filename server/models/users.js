const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require("moment");
require('dotenv')
const userSchema = mongoose.Schema({

  name: {
    type:String,
    maxlength:48
  },

  email: {
    type: String,
    trim:true,
    unique:1
  },
  role:{
    type:Number,
    default: 0
  },

  image:{
    type:String
  },

  password: {
    type: String
  },
  tokenExp :{
    type: Number
  },
  token : {
    type: String,
},
})


userSchema.pre('save',function(next){
  const user = this;

  if(user.isModified('password')){
    bcrypt.genSalt(process.env.saltRounds, function(err,salt){
      if(err) return next(err)
      bcrypt.hash(user.password, salt, function(err, hash){
        if(err)return next(err)
        user.password = hash
        next()
        
      })
    })
  }else next()
})




const User = mongoose.model('User', userSchema);

module.exports = { User }