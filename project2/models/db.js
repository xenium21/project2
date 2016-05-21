var mongoose = require('mongoose');

// Login Database
var login = 'mongodb://localhost/passport_local_mongoose_express4';

mongoose.connect(login);

// Score Database
var scores = 'mongodb://localhost/scores';

mongoose.connect(scores);

mongoose.connection.on('connected', function()
	{
		console.log('Connected to db');
	});

mongoose.connection.on('error', function(err)
	{
		console.log('DB connection error');
	});

mongoose.connection.on('disconnected', function()
	{
		console.log('Disconnected from db');
	});

