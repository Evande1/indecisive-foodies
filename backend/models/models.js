//models 

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    meal: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum : ['BREAKFAST','LUNCH', 'DINNER', 'SNACKS'],
        default: 'BREAKFAST'
    },
    
});

var models = new mongoose.model('Meal', schema);
module.exports = models
