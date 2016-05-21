var mongoose = require('mongoose');

// Login Database
var score = 'mongodb://localhost/passport_local_mongoose_express4';

//mongoose.connect(login);
module.exports = scoreDb = mongoose.createConnection(score);

scoreDb.connection.on('connected', function()
	{
		console.log('Connected to score DBMS');
	});

scoreDb.connection.on('error', function(err)
	{
		console.log('Error connecting to score DBMS');
	});

scoreDb.connection.on('disconnected', function()
	{
		console.log('Disconnected from score DBMS');
	});

