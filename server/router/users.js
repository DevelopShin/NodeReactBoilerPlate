const express = require('express');
const router = express.Router();
const { User } = require("../models/users");
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');

router.get('/',(req,res)=>{
  res.status(200).json({Success:true})
})
















module.exports = router;