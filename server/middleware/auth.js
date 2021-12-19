const express = require('express');
const passport = require('passport');
const { User } = require("../models/users");
const jwt = require('jsonwebtoken');

let auth = (req, res, next) => {
  let token = req.cookies.x_auth;
  jwt.verify(token, process.env.secretOrKey,function(err, decode){
    if(err) return res.json({
      isAuth: false,
      msg: '잘못된 쿠키정보 입니다.'
    });
    User.findOne({"_id":decode.id}, function(err, user){
        if(err) return res.json({
          isAuth: false,
          msg: "캐쉬만료"
        });
        else{
          req.token = token;
          req.user = user;
          next()
        }
        
    })
})}

module.exports = { auth };