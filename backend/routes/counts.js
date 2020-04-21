const express = require('express');

var router = express.Router();

const mongoose=require('mongoose');

const url = "mongodb://localhost:27017/library";

var bookcount=[];
var bookcategory=[];
router.get('/book_total',(req,res) => {
    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },(err, db)=>{
        if(err)
            console.log('connection failed');
        else{
            bookcount.length=0;
            bookcategory.length=0;
            db.collection('book_details').aggregate([
                { $group: {
                    _id: "$category",
                    balance: { $sum: "$copies"  }
                }}
            ]).toArray().then(cnt =>{
                cnt.forEach(element => {
                    bookcount.push(element.balance);
                    bookcategory.push(element._id);
                });
                res.status(200).json({
                    message:"Collection got",
                    list1:bookcount,
                    list2:bookcategory
                });
            }).catch(err=>{
                console.log(err);
            });
        }
    });
  });
module.exports = router;