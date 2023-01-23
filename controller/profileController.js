const express = require('express');
const mongoose = require('mongoose');
const DistributorData = require('../src/models/profileModel'); //this is model of the database
const router = express.Router();
const hbs = require('hbs');

//  route for insert record  //Status: Works!

router.post('/newdistributor', (req,res)=>{

    const DistributorDataSet = new DistributorData();
    DistributorDataSet.Username = req.body.Username;
    DistributorDataSet.Usercode = req.body.Usercode;
    DistributorDataSet.DistributerName = req.body.DistributerName;
    DistributorDataSet.DistributerCode = req.body.DistributerCode;
    DistributorDataSet.Address = req.body.Address;
    DistributorDataSet.Mobile = req.body.Mobile;
    DistributorDataSet.KycStatus = req.body.KycStatus;

    DistributorDataSet.save((err,doc)=>{
        if(!err){
            res.send("success");
        }
        else{
          console.log(err);
        }
    });
    
});


 //find the data //Status: Works!

 router.get("/alldistributor", (req,res)=>{
    DistributorData.find((err,docs)=>{
       
        if(!err){
            res.send(docs);
        }
    })
});

//find the data by id //Status: Works!

router.get("/alldistributor/:id", (req,res)=>{

    DistributorData.findById(req.params.id, function (err, docs) {
        if (err){
       console.log(err);
        }
        else{
        console.log(docs);
        res.send(docs);
        }
        });
});

//delete api  //Status: Works!

router.delete("/alldistributor/delete/:id", (req,res)=>{

    DistributorData.findByIdAndDelete(req.params.id, function (err, docs) {
        if (!err){
            console.log(docs);
            res.send(docs);
        }
        else{
            console.log(err);

        }
     });
    
});


//function to update the record //Status: Works!

router.put('/distributor/update/:id', (req,res)=>{

    DistributorData.findOneAndUpdate({_id:req.body._id}, req.body, { new:true },
        (err,doc) =>{
            if(!err){
                console.log(doc);
                res.send(doc);
            }
            else{
                console.log(err);
            }
        }
    )
    
});




 module.exports = router;