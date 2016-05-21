var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Scores = new Schema({
    username: String,
    difficulty: String,
    score: Integer
});

//Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Scores', Scores);