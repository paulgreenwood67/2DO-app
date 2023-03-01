const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path")
const mongoose = require("mongoose");
const cors = require("cors");

//for connecting frontend and backend
app.use(cors());

//database connnection goes here


//for jwt
app.use(cookieParser());

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use(require("./routes/user"));
app.use(require("./routes/todo"));



if(process.env.NODE_ENV === "production"){
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
      //listen for requests
      app.listen(process.env.PORT, ()=>{
      console.log ("connect to db & listening on", process.env.PORT)
})
})
.catch((error)=>{
  console.log(error)
})