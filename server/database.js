// adding mongoose to this file
const mongoose = require('mongoose');

// Initiating a connection to the database
mongoose.connect('mongodb://pascual143:Oberon143@ds059195.mlab.com:59195/heroku_z41ctdp0', { useNewUrlParser: true }); 
// mongoose.connect('mongoDB');

// var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("h");
});

exports.test = function(req,res) {
  res.render('test');
};
    
// Connecting to the database
const connect = mongoose.connection;

// Create a Schema or db structure
let recipeSchema = new mongoose.Schema({
    title: String,
    image: String,
    duration: String,
    steps: String,
    rating: Number
});

// Create a model/ collection
const recipes = mongoose.model('recipes', recipeSchema);


// Export the connection and the model
module.exports.connect = connect;
module.exports.recipes = recipes;