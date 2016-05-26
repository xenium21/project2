var mongoose = require('mongoose');

// Login Database
var comment = 'mongodb://localhost/comment';

//mongoose.connect(login);
module.exports = commentDb = mongoose.createConnection(comment);

commentDb.on('connected', function()
	{
		console.log('Connected to comment DBMS');
	});

commentDb.on('error', function(err)
	{
		console.log('Error connecting to comment DBMS');
	});

commentDb.on('disconnected', function()
	{
		console.log('Disconnected from comment DBMS');
	});

require('./comments');