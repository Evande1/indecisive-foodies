//models

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: { type: String, required: true},
    start: { type: Date },
    end: { type: Date },
});

var models = new mongoose.model('event', schema);
module.exports = models
