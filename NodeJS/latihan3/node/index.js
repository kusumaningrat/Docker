// Declare mongoose and express library
const mongoose   = require('mongoose');
const express    = require('express');
const bodyParser = require('body-parser')

// Create express app
const app = express();

// Create a port
const port = 3000;

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Connect to mongoDB
mongoose.connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true}
 )
 .then(() => console.log('Established Connection to MongoDB'))
 .catch(err => console.log(err));

 const item = require('./models/Item.js');

 app.get('/', (req, res) => {
     res.send("Halaman Utama");
 });

 app.post('/add', (req,res) => {
     const emp = new Item({
         empName: req.body.empName,
         empEmail: req.body.empEmail,
     });

     emp.save().then(val => {
         res.json({ msg: "Emplyee Added Successfully", val: val})
     })
 });

 app.get('/list', () => {
     const cursor = mongoose.Collection('quotes').find();
     console.log(cursor);
 })

 
app.listen(port, () => {
    console.log(`Server running at ${port}`);
})