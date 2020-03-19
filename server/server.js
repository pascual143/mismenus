// Import all the modules needed
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');

// Create an express app
const app = express();

// Middlewares
// I've set the maximum size of data to be transferred
app.use(bodyParser.urlencoded({
        limit: '15mb',
        extended: true
}));
app.use(bodyParser.json({limit: '15mb', extended: true}));

app.use(methodOverride('_method'));
app.use(cors());
app.use((req, res, next) => { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
});

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

// Creating a route for POST requests from the form
app.post('/upload',(req, res) => {
        // To upload multiple images it would be upload.array() and req.files and also you would have the change the type of the image within the schema from Object to Array since the result will be a list of images.
        const recipe = new recipes({ title: req.body.title, image: req.body.image, duration: req.body.duration, steps: req.body.steps, rating: req.body.rating });        
        recipe.save((err, recipes) => {
        if(err) console.log(err);
        else {
                console.log('New recipe successfully added...');
        }
        
        setTimeout(() => {res.redirect('http://localhost:3000/')}, 500);           
});
        setTimeout(() => {res.redirect('http://localhost:3000/')}, 500);
});


// Receive a post request with the title, do a search and then return the found document.
app.post('/api/recipes/single', (req, res) => {
        recipes.findOne({title: req.body.title}, (err, data) => {
                if(err) console.log(err);
                else {
                        res.json(data);
                        console.log('Single recipe found');
                }
        });
});


// Find all recipes stored
app.get('/api/recipes', (req, res) => {
        recipes.find((err, data) => {
                if(err) console.log(err);
                else {
                        res.json({recipes: data});
                        console.log('Recipes successfully found.'); 
                }  
        });
});


// Basic route to get all files GET /files
app.get('/files', (req, res) => {
        gfs.files.find().toArray((err, files) => {
                // Check if files
                if (!files || files.length === 0) {
                        return res.status(404).json({
                                err: 'No files exist'
                        });
                }
                // Files exist
                return res.json(files);
        });
});

// Basic route to get a single file  GET /files/:filename
app.get('/files/:filename', (req, res) =>{
        gfs.files.findOne({filename: req.params.filename}, (err, file) => {
                // Check if file
                if (!file || file.length === 0) {
                        return res.status(404).json({
                                err: 'No file exists'
                        });
                }
                // File exists
                return res.json(file);
        });
});


// Basic route to display a single image  GET /image/:filename
app.get('/image/:filename', (req, res) =>{
        gfs.files.findOne({filename: req.params.filename}, (err, file) => {
                // Check if file
                if (!file || file.length === 0) {
                        return res.status(404).json({
                                err: 'No file exists' 
                        });
                }
                // Check if image
                if(file.contentType === 'image/jpeg' || file.contentType === 'image/jpg' || file.contentType === 'image/png') {
                        // Read output to browser
                        const readstream = gfs.createReadStream(file.filename);
                        readstream.pipe(res);
                } else {
                        res.status(404).json({
                                err: 'Not an image'
                        });
                }
        });
});


app.listen(port, console.log(`The Recipe App is running on port: ${port}`));