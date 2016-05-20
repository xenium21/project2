var mongoose = require('mongoose');

var url = 'mongodb://bitnami:zP{)SE2yxiz&@localhost/passport_local_mongoose_express4';

mongoose.connect(url);

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
