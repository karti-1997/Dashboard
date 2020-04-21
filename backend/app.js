const express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const getdataRoutes = require('./routes/getdata');
const countRoutes = require('./routes/counts');
mongoose.connect("mongodb://localhost:27017/library", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=>{
  console.log('connected to database');
})
.catch(() =>{
  console.log('connection failed');
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false} ));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Acces-Control-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
})
app.use("/api/getdata",getdataRoutes);
app.use("/api/counts",countRoutes);
module.exports = app;