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

        const payload = { email: user.email, name: user.name, id: user.id }
        const token = jwt.sign(
          payload,
          process.env.secretOrKey,
          { expiresIn: '1d' })

        user.token = token;
        user.save((err, user) => {
          if (err) return res.status(400).json({ success: false, msg: "something wrong" })
          return res.cookie("x_auth", user.token, {
            maxAge: 1000 * 60 * 60 * 24, //1-day
            httpOnly: true
          }).json({ success: true, msg: "welcome to korea" })

        });
      }else{return res.json({success:false, msg:"match not password"})}
    })
  })

  module.exports = router;