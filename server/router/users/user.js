const express = require('express');
const router = express.Router();
const { User } = require("../../models/users");
const passport = require('passport');
require('dotenv').config();
const { auth } = require('../../middleware/auth')

router.get('/auth', auth, (req, res) => {
  res.status(200).json({
    isAuth: true,
    userId: req.user._id,
    email: req.user.email,
    role: req.user.role
  })
  
})


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


router.get('/logout', auth, (req, res) => {
  const token = req.cookies.x_auth;
  User.findOneAndUpdate({ token: token }, { token: "" }, (err, doc) => {
    if (err) return res.json({ success: false, err });
    res.cookie('x_auth','',{maxAge:0});
    return res.status(200).send({
      success: true,
      msg: "bye! bye!"
    });
  })
  
  // res.redirect('/');

})

module.exports = router;