
require('dotenv').config();
const passport = require('passport');
const { User } = require("../models/users");

const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretOrKey;


passport.use(new JwtStrategy(opts, function (jwt_payload, cb) {
  User.findOne({ id: jwt_payload.id }, function (err, user) {
    if (err) {
      return cb(err, false);
    }
    if (user) {
      return cb(null, user, {isAuth:true});
    } else {
      return cb(null, false);
      // or you could create a new account
    }
  });
}));
