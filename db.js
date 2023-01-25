const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const database = `mongodb+srv://server01:1%40server01@cluster0.gqrhnix.mongodb.net/apiData?retryWrites=true&w=majority`;


mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connection successfull');
}).catch((err)=>{
    console.log('Connection not successfull' + err);
});

require('../models/profileModel');