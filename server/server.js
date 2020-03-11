// Import all the modules needed
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverrride = require('method-overrride');

//Create an express app
const app = express();

//Middlewares
//I've set the maximun size of data to be transferred






// Import database
const { connect } = require('./database');
// Import model/ collection
const { recipes } = require('./database'); 
// Set the port number to 5000
const port = 5000;


// Handling the database errors
connect.on('error', console.error.bind(console, 'connection error:'));
connect.once('open', () => {
        console.log('Database connection successful');     
});