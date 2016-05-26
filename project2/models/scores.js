var mongoose = require('mongoose'), scoreDb = require('./scoredb');
var Schema = mongoose.Schema;

var Score = new Schema({
    username: String,
    difficulty: String,
    score: Number
});

module.exports = scoreDb.model('Score', Score);