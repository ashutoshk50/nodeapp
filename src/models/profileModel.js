const mongoose = require('mongoose');

const DistributorSchema =  new mongoose.Schema({
    Username: {
        type: String
    },
    Usercode: {
        type: String
       
    },
    DistributerName:{
        type: String
    },

    DistributerCode:{
        type: String
    },

    Address:{
        type: String
    },
    
    Mobile:{
        type: Number,
        maxlength: 10
    },

    KycStatus:{
        type: String
    }
});

// creating a collection

const DistributorData = new mongoose.model('DistributorData', DistributorSchema);

module.exports = DistributorData;