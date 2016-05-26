var mongoose = require('mongoose'), commentDb = require('./commentdb');
var Schema = mongoose.Schema;

var Comment = new Schema({
    username: String,
    comment: String
});

module.exports = commentDb.model('Comment', Comment);