const express = require('express');
const router = express.Router();
const { User } = require("../models/users");
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }, (err, value) => {
    if (value) return res.json({ success: false, msg: "This email is already registered." })

    const user = new User(req.body);
    user.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true })
    })

  })
})


const passportConfig = { usernameField: 'email', passwordField: 'password' };

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) return res.json({ success: false, msg: "There is no registered." })

    bcrypt.compare(req.body.password, user.password,(err,isMatch)=>{
      if(!isMatch)return res.json({ loginSuccess: false, message: "Wrong password" });
      return res.status(200).json({success:true, msg:"success login",user})
    })
  
    
    })
  })












  module.exports = router;