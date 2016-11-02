var mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
    heading: String,
    text: String,
    image: String,
    published: { type: Date },  
});

var News = mongoose.model('News', newsSchema);

module.exports = News;
