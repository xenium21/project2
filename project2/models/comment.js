var mongoose = require('mongoose'), commentDb = require('./commentdb');
var Schema = mongoose.Schema;

var Comments = new Schema({
    username: String,
    comment: String
});

module.exports = commentDb.model('Comment', Comment);