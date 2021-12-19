const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
const mongoose = require("mongoose");
const passport = require('passport');
const cookieParser = require('cookie-parser')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())



//===============DB==============================================//
const config = require("./config/key");
const connect = mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


//===============Serve static assets======================================//

app.use('/uploads', express.static('uploads'));
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder   
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));
  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

//===============API Router================================================//

app.use('/api/users', require('./router/users/users'))
app.use('/api/users/signin', require('./router/users/signin'))

//===============passport================================================//
// app.use(passport.initialize())
// require('./middleware/passport')




const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Listening on http://localhost:${port}`)
});