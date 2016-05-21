var mongoose = require('mongoose');

// Login Database
var login = 'mongodb://localhost/passport_local_mongoose_express4';

//mongoose.connect(login);
module.exports = loginDb = mongoose.createConnection(login);

loginDb.on('connected', function()
	{
		console.log('Connected to login DBMS');
	});

loginDb.on('error', function(err)
	{
		console.log('Error connecting to login DBMS');
	});

loginDb.on('disconnected', function()
	{
		console.log('Disconnected from login DBMS');
	});

