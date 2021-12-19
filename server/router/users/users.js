const express = require('express');
const router = express.Router();
const { User } = require("../../models/users");
const passport = require('passport');
require('dotenv').config();


router.get('/auth', passport.authenticate('auth',{ session: false }),
	async (req, res, next) => {
	  try {
      if (req)
	    return res.json({ isAuth: true ,data:user});
	  } catch (error) {
	    next(error);
	  }
});

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
  

router.get('/logout', function(req,res){
  req.logout();
  req.session.save(function(){
    res.redirect('/');
  })

})

module.exports = router;