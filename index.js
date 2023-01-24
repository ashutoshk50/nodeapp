const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const DistributorData = require('./src/models/profileModel'); //this is model of the database
const profileController = require('./controller/profileController'); // using controller
const cors = require('cors')
const port = process.env.PORT || 3000; //setting up port
//require("./src/database/db"); //establishing a connection with database

var mongoose = require('mongoose');
var config = require('./config');
mongoose.set('strictQuery', true);

mongoose.Promise = global.Promise;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(config.database, connectionParams)
    .then(() => {
        console.log('Connected to database')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

//setting up paths for rendering UI
const staticPath = path.join(__dirname, "public");
const templatePath = path.join(__dirname, "views"); //dynamic path to the HBS template
// const partialsPath = path.join(__dirname, "templates/partials"); //dynamic path to the HBS partials template
console.log(staticPath);

app.use(express.static(staticPath));
app.set('view engine', "hbs");
app.set("views", templatePath);
// hbs.registerPartials(partialsPath);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use(cors()); //setting cross origin interection for angular

app.listen(port, () => {
    console.log('App is running at' + port);
});

app.use('/', profileController);