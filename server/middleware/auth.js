const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }),(req, res, info ) =>{
  console.log(info.isAuth)
  return res.status(200).send({
    success: true,
    user: req.user.id,
    email:req.user.email
  })
})

module.exports = router;