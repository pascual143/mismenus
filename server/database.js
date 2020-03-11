//adding mongoose to this file
const mongoose = require('mongoose')

//Initiating a connection to the database
// mongoose.connect('mongodb://chris:chris22@ds211774.mlab.com:11774/recipesdatabase', { useNewUrlParser: true }); 
mongoose.connect('mongodb://localhost:27017');

//Connecting to the database
const connect = mongoose.connection;