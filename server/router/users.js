const express = require('express');
const router = express.Router();
const { User } = require("../models/users");
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');

router.post('/register',(req,res)=>{
  
  const formData = req.body
  return res.status(200).json({success:true, content:true, formData:formData})
})
















module.exports = router;