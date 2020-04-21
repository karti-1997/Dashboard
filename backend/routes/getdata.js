const express = require('express');
const db=require('../config.js/mongoose');
const mongoose=require('mongoose');
var router = express.Router();
var mysql = require('mysql');
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/library";
var obj=[];
var count;
var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database:"library"
      });
      con.connect(function(err) {
        if (!err)
          console.log("Connected!");
        else
          console.log('Error '+err);
      });
router.get('/fieldlist/:collectionname',function(req,res){
  count=0;
  MongoClient.connect(url, {useUnifiedTopology: true},(err, client)=>{
    const db=client.db('library');
    db.collection(req.params.collectionname).find().forEach( function(d) { 
      for(f in d) 
      { 
      count++; 
      }
      res.status(200).json({
        message:"field list",
        fieldcount:count
      });
    });
  });
});
router.get('/collection',function(req,res){
  MongoClient.connect(url, { useUnifiedTopology: true ,useCreateIndex: true },(err, client) => {
    const db = client.db('library');
    var collectionlist=[];
    var i=0; 
    db.listCollections().toArray((err, collections) => {
      collections.forEach(element=>{
         var i=0;
         collectionlist.push(element.name);
       console.log(collectionlist);
      });
       res.status(200).json({
        message:"Collection got",
        list1:collectionlist
      });
    });
});
});
//});
router.get('/:table', function(req, res){
  var tablename=req.params.table;
    con.query("SELECT * FROM "+ tablename, function (err, result, fields) {
          mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } ,(err, db) => {
            if(err) throw err;
            result.forEach(element => {
            db.collection(tablename).findOne({P_id:element.P_id}).then(fetchedbook => {
              if(fetchedbook){
                console.log('alreadypresent'+fetchedbook.P_id);
              }
              else{
                console.log('unique'+element.P_id);
                db.collection(tablename).insertOne(element).then(result=>{
                   console.log("book inserted into mongodb"+element.P_id);
                  });
              }
            })
            .catch(err=>{
            console.error('error in book find'+err);
          });
        });
        }).catch(err => {
          //console.log("error in MongoDb"+err);
          //res.status(400).json({
            //message:"table not found"
          //});
        });
      if(result){
      res.status(200).json({
        message:tablename+" added successfully"
      });
    }
    else{
      res.status(200).json({
        message:tablename+" Not found"
      });
    }
  });
  });
  module.exports = router;