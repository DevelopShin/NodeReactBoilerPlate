const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require("moment");

const userSchema = mongoose.Schema({

  name: {
    type:String,
    maxlength:48},
  lastname: {
    type:String,
    maxlength:48},
  email: {
    type: String,
    unique:true,
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
  }
})

const User = mongoose.model('User', userSchema);

module.exports = { User }