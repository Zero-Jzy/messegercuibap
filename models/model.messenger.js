var mongoose = require('mongoose');

var messenger = new mongoose.Schema({
    nguoigui: String,
    nguoinhan: String,
    messenger: String,
    thumbnail: String,
    time: String
});

module.exports = mongoose.model('messenger', messenger);
