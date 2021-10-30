const express = require('express');
const fs      = require('fs');
const app     = express();
const path    = require('path');


app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(3000, () => {
    console.log('Server Running at port 3000')
})