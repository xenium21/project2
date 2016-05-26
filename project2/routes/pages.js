var date = new Date();

var Score = require('../models/scores');
var Comment = require('../models/comments');

module.exports.index = function(req, res)
{
  res.render('index', { title: 'Home', user: req.user, date: new Date() }) 
}

module.exports.login = function(req, res) {
    res.render('login', { title: 'Login', user : req.user, date: date });
}

module.exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
}

module.exports.register = function(req, res) {
    res.render('register', { title: 'Registration', date: date });
}

module.exports.q3 = function(req, res)
{
	res.render('q3', {title: 'Quake III', user: req.user, date: date});
}

module.exports.jsgl = function(req, res)
{
	res.render('jsgl', {title: 'JSGL', user: req.user, date: date});
}

module.exports.html = function(req, res)
{
	res.render('html', {title: 'HTML5', user: req.user, date: date});
}

module.exports.reactor = function(req, res)
{
	res.render('reactor', {title: 'Reactor', user: req.user, date: date});
}

module.exports.howto = function(req, res)
{
	res.render('howto', {title: 'How to Play', user: req.user, date: date});
}

module.exports.hiscore = function(req, res)
{
	var list = {hard: null, medium: null, easy: null};
	var queries = 3;

	function getCount( store, match, callback )
    {
        Score.find(match, function(err, doc){
        	queries--;
        	if(doc.length > 0) list[store] = doc;
    		callback();
    	}).sort({score: -1}).limit(20);
    }

    function attemptTransaction()
    {
        if(queries == 0) res.render('hiscore', {title: 'Global hiscores', user: req.user, date: date, scores: list});
    }
    
    getCount("hard", {difficulty: "Hard"}, attemptTransaction);
    getCount("medium", {difficulty: "Medium"}, attemptTransaction);
    getCount("easy", {difficulty: "Easy"}, attemptTransaction);
}

module.exports.elite = function(req, res)
{
    var game = {played: null, hard: null, medium: null, easy: null};
    var queries = 4;

    function getCount( store, match, callback )
    {
        Score.count(match, function(err, count) {
            queries--;
            if(err) throw err;
            if(count)
            {
                game[store] = count;
            }
            else
            {
                game[store] = 0;
            }

            callback();
        });
    }

    function attemptTransaction()
    {
        if(queries == 0) res.render('elite', {title: 'Elite corner', user: req.user, games: game, date: new Date()});
    }

    getCount("played", {username: req.user._id}, attemptTransaction);
    getCount("hard", {username: req.user._id, difficulty: "Hard"}, attemptTransaction);
    getCount("medium", {username: req.user._id, difficulty: "Medium"}, attemptTransaction);
    getCount("easy", {username: req.user._id, difficulty: "Easy"}, attemptTransaction);
}

module.exports.about = function(req, res)
{
	res.render('about', {title: 'About this site', user: req.user, date: date});
}

module.exports.design = function(req, res)
{
	res.render('design', {title: 'Site design', user: req.user, date: date});
}

module.exports.valid = function(req, res)
{
	res.render('valid', {title: 'Site validation', user: req.user, date: date});
}

module.exports.feedback = function(req, res)
{
	Comment.find({}, function(err, doc){
			if( doc.length > 0 )
			{
				res.render('feedback', {title: 'Feedback', user: req.user, date: date, comments: doc});
			}
    		else
    		{
    			res.render('feedback', {title: 'Feedback', user: req.user, date: date, comments: null});
    		}
    	}).limit(20);
}