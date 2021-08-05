const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()

const expressSession = require("express-session")
const passport = require("passport")
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

const indexRouter = require("./routes/index");
app.use("/api", indexRouter);

app.use((req,res,next)=>{
    let err = req.err ? req.err : new Error ("Not Found");
    err.statusCode = 404;
    next(err)
});
app.use((err,req,res,next)=>{
console.log("ERROR", err.message);
return res.send(err.message)
})


// const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log(`successfully connected to db`))
.catch((err)=> console.log(err));

module.exports = app;
