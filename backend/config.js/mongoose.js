const express = require('express');
var MongoClient = require('mongodb').MongoClient;

module.exports=MongoClient.connect("mongodb://localhost:27017/library", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=>{
  console.log('connected to database');
})
.catch(() =>{
  console.log('connection failed');
});