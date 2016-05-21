//var mongoose = require('mongoose');
//var scoreDb = require('./scoredb');
var mongoose = require('mongoose'), scoreDb = require('./scoredb');
var Schema = mongoose.Schema;

var Scores = new Schema({
    username: String,
    difficulty: String,
    score: Number
});

module.exports = scoreDb.model('Scores', Scores);