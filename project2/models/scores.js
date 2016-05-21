var mongoose = require('mongoose');
var loginDb = require('./scoredb');
var Schema = mongoose.Schema;

var Scores = new Schema({
    username: String,
    difficulty: String,
    score: Integer
});

//Account.plugin(passportLocalMongoose);

module.exports = scoreDb.model('Scores', Scores);