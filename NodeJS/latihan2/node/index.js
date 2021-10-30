const express   = require('express');
const mongoose  = require('mongoose');

const app       = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:true }));

// Connect to MongoDB
mongoose.connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const Item = require('./models/Item');

app.get('/', (req, res) => {
    Item.find()
      .then(items => res.render('./node/view/index', { items }))
      .catch(err => res.status(404).json({ msg: 'No items found'}))
});

app.get('/foo', (req,res) => {
    res.send("Hello World");
})

app.post('/item/add', (req,res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.redirect('/'));
});

app.listen(3000, () => console.log('Server Running at port 3000'));
