const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const {User} = require('../../models/users')

router.post('/', async (req, res, next) => {
  User.findOne({ 'email': req.body.email })
    .then(user => {
      if (!user) return res.json({ success: false, msg: "match not email" })

      if (bcrypt.compare(user.password, req.body.password)) {

        const payload = {id: user.id }
        const token = jwt.sign(
          payload,
          process.env.secretOrKey,
          { expiresIn: '1d' })

        user.token = token;
        console.log('signin.js :', user.token)
        user.save((err, user) => {
          if (err) return res.status(400).json({ success: false, msg: "something wrong" })
          return res.cookie("x_auth", user.token, {
            maxAge: 1000 * 60 * 60 * 24, //1-day
            httpOnly: true
          }).json({ success: true, token:user.token, msg: "welcome to korea", userId:user._id })

        });
      }else{return res.json({success:false, msg:"not match password"})}
    })
  })

  module.exports = router;