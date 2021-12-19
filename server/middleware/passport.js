
require('dotenv').config();
const passport = require('passport');
const { User } = require("../models/users");
const jwt = require('jsonwebtoken');
require('dotenv')
// const JwtStrategy = require('passport-jwt').Strategy,
//   ExtractJwt = require('passport-jwt').ExtractJwt;
// const opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = process.env.secretOrKey;


// passport.use(new JwtStrategy(opts, function (jwt_payload, cb) {
//   console.log(jwt_payload)
//   User.findOne({ "_id": jwt_payload.id }, function (err, user) {

//     if (err) {
//       return cb(err, false);
//     }
//     if (user.token) {
//       return cb(null, user, {isAuth:true});
//     } else {
//       return cb(null, user, {isAuth:false});
//       // or you could create a new account
//     }
//   });
// }));





