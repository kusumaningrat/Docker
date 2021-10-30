const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    empName: {
        type: String,
        require: true
    },
    empEmail: {
        type: String,
        require: true
    },
})

module.exports = Item = mongoose.model('item', empSchema)